// ========================================================================
// KURS B1 — 60 dni do egzaminu (6.10–4.12.2026), egzamin 5–6.12.2026.
// Osobny moduł w window.KURS, styl pod .egz (wspólny z trenażerem).
// Stan: klucz 'b1kurs' — nie miesza się ze słownikiem ('polskiB1')
// ani z trenażerem ('b1exam').
// Ćwiczenia uruchamia silnik trenażera (EGZ.wlasne) — dzięki temu błędy
// z lekcji trafiają do wspólnej powtórki.
// ========================================================================
window.KURS = (function(){
'use strict';

const EGZAMIN = new Date('2026-12-05T09:00:00');
const el = id => document.getElementById(id);
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const dzisISO = () => { const d=new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); };
const mix = a => a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(v=>v[1]);

let S = null;
function wczytaj(){
  try{ S = JSON.parse(localStorage.getItem('b1kurs')) || {}; }catch(e){ S = {}; }
  for(const k of ['zrob','lekcje','slowa','pisanie','probne']) if(!S[k] || typeof S[k]!=='object') S[k]={};
}
const zapisz = () => { try{ localStorage.setItem('b1kurs', JSON.stringify(S)); }catch(e){} };

// Ekran kursu w historii aplikacji — strzałka ← wraca do poprzedniego.
function wejdz(klucz, fn){
  if(typeof state!=='undefined') state.phase='kurs';
  if(typeof ekran==='function') ekran('kurs:'+klucz, fn);
}

// ---------- dzień kursu ----------
function nrDzisiaj(){
  const start = new Date(KURS_START+'T00:00:00'), teraz = new Date(dzisISO()+'T00:00:00');
  const n = Math.round((teraz-start)/864e5)+1;
  return Math.min(60, Math.max(1, n));
}
const dzien = n => KURS_PLAN[n-1];
const zrob = n => S.zrob['d'+n] || (S.zrob['d'+n]={});
function postep(n){ const p=dzien(n), z=S.zrob['d'+n]||{};
  const ile=p.zadania.filter((_,i)=>z[i]).length; return {ile, wszystkie:p.zadania.length}; }
const pelny = n => { const {ile,wszystkie}=postep(n); return wszystkie>0 && ile===wszystkie; };
function oznacz(n,i,wart=true){ wczytaj(); zrob(n)[i]=wart; zapisz(); }

// Dzień, na którym się pracuje — nie dzień z kalendarza. Kto idzie szybciej
// niż plan, ma wracać tam, gdzie skończył, a nie do dnia 1. Podnosi się przy
// otwarciu zadania (nigdy nie cofa: powtórka starego dnia nie gubi miejsca),
// a gdy dzień jest cały zrobiony, kurs od razu pokazuje następny.
function nrBiezacy(){
  wczytaj();
  let n = S.dzien;
  if(!n) for(let d=60; d>=1; d--) if(postep(d).ile){ n=d; break; }   // stan sprzed tej zmiany
  if(!n) n = nrDzisiaj();
  while(n<60 && pelny(n)) n++;
  return n;
}
function podnies(n){ wczytaj(); if(!S.dzien || n>S.dzien){ S.dzien=n; zapisz(); } }
function dniRu(k){ const m10=k%10, m100=k%100;
  return m10===1&&m100!==11 ? 'день' : (m10>=2&&m10<=4&&(m100<12||m100>14) ? 'дня' : 'дней'); }

const DNI_TYG = ['niedziela','poniedziałek','wtorek','środa','czwartek','piątek','sobota'];
const MIES = ['stycznia','lutego','marca','kwietnia','maja','czerwca','lipca','sierpnia','września','października','listopada','grudnia'];
function dataPL(iso){ const d=new Date(iso+'T12:00:00'); return DNI_TYG[d.getDay()]+', '+d.getDate()+' '+MIES[d.getMonth()]; }

// ---------- opisy zadań ----------
const IKONY = {lekcja:'egz-book', slowa:'egz-pen', mowa:'egz-ear', egz:'egz-target', pisanie:'egz-pen',
  powtorka:'egz-bolt', bledy:'egz-bolt', fiszki:'egz-book', zewn:'egz-ear', probny:'egz-target', wynik:'egz-check'};
// Dodatkowe warianty tematu: klucze monolog2, monolog3… i sytuacja2, sytuacja3…
const jestMon = co => /^monolog\d+$/.test(co), jestSyt = co => /^sytuacja\d+$/.test(co);
const dodatkowe = (T, baza) => Object.keys(T||{}).filter(k=>new RegExp('^'+baza+'\\d+$').test(k)).sort((a,b)=>parseInt(a.slice(baza.length))-parseInt(b.slice(baza.length)));
const MOWA_NAZWA = {monolog:'монолог', sytuacja:'ролевая ситуация', opis_osoby:'описание человека',
  monolog2:'монолог — ещё вариант', sytuacja2:'ситуация — ещё вариант',
  ilustracja:'описание фотографии', pelny:'полная устная часть', opis_frazy:'обороты для устной части'};
const ZRODLA = {
  podcast: {t:'Подкаст', link:'https://www.hellopolish.pl/podcast-archive/',
    l:'Hello Polish — архив выпусков с транскрипцией'},
  podcast2:{t:'Подкаст B1', link:'https://swojskijezykpolski.com/witaj-w-sjp/', l:'Swojski Język Polski'},
  cert_mp3:{t:'Официальное аудирование', link:'https://certyfikatpolski.pl/o-egzaminie/zbiory-zadan/',
    l:'certyfikatpolski.pl → Zbiory zadań → B1 → Rozumienie ze słuchu (mp3)'},
  badz_czytanie:{t:'Чтение', link:null, l:'«Bądź na B1» — PDF у тебя на Mac, папка «polski b1»'},
  logistyka:{t:'Подготовка ко дню экзамена', link:null, l:''},
  odpoczynek:{t:'Отдых', link:null, l:''},
};
function nazwaZadania(t){
  switch(t.typ){
    case 'lekcja': { const L=KURS_LEKCJE[t.ref]; return L ? 'Урок: '+L.ru : 'Урок '+t.ref; }
    case 'slowa': { const T=KURS_TEMATY[t.ref]; return 'Лексика: '+(T?T.ru:t.ref); }
    case 'mowa': { const T=KURS_TEMATY[t.ref]; return 'Говорение с Claude: '+(MOWA_NAZWA[t.co]||t.co)+(t.co==='opis_frazy'?'':(T?' — '+T.ru.toLowerCase():'')); }
    case 'egz': { if(t.modul==='sluch') return 'Слушание: '+(SLUCHANIE[t.klucz]?SLUCHANIE[t.klucz].tytul:t.klucz);
      const g=GRAMATYKA[t.klucz]; return 'Задание экзамена '+(g?g.nr+'. '+g.tytul:t.klucz); }
    case 'pisanie': { const f=formaPisania(t.ref); return 'Письмо: '+(f?f.forma:t.ref); }
    case 'powtorka': return 'Повторение уроков '+t.refs.map(r=>r.replace('L','')).join(', ');
    case 'bledy': return 'Очередь ошибок';
    case 'fiszki': return 'Фишки: мои слова';
    case 'zewn': return (ZRODLA[t.zrodlo]||{}).t || 'Внешнее задание';
    case 'probny': return 'Пробный экзамен №'+t.nr;
    case 'wynik': return 'Баллы пробного экзамена №'+t.nr;
  }
  return t.typ;
}
function opisZadania(t){
  if(t.typ==='lekcja'){ const L=KURS_LEKCJE[t.ref]; return L ? L.tytul : 'в подготовке'; }
  if(t.typ==='slowa'){ const T=KURS_TEMATY[t.ref]; return T ? T.tytul+' · '+T.slowa.length+' слов' : 'в подготовке'; }
  if(t.typ==='zewn') return t.opis;
  if(t.typ==='egz') return t.modul==='sluch'?'тренажёр, голос синтезатора':'формат экзамена, свежие задания';
  if(t.typ==='bledy') return 'всё, где ты ошибался — до верного ответа';
  if(t.typ==='fiszki') return 'словарь: Cram mode';
  if(t.typ==='probny') return PROBNE[t.nr] ? PROBNE[t.nr].plik : '';
  return '';
}

// ---------- ekran dnia ----------
function dzienEkran(n){
  wczytaj();
  if(!n) n = nrBiezacy();
  wejdz('dzien:'+n, ()=>dzienEkran(n));
  const p = dzien(n), dzisN = nrDzisiaj(), biez = nrBiezacy(), zr = S.zrob['d'+n]||{};
  const doE = Math.ceil((EGZAMIN-new Date())/864e5);
  const przedStartem = dzisISO() < KURS_START;
  const minut = p.zadania.reduce((s,t)=>s+t.min,0);
  const {ile,wszystkie} = postep(n);

  let h='<div class="egz kurs">';
  h+=`<div class="kurs-top"><div><div class="kurs-dz">Dzień ${n} <span>z 60</span></div>
      <div class="kurs-data">${dataPL(p.data)} · ${p.faza}</div></div>
      <div class="kurs-cd"><b>${doE}</b><span>dni do<br>egzaminu</span></div></div>`;
  h+=pasekKursu(n);
  if(przedStartem && n===1) h+=`<div class="egz-alert">Курс начинается <b>завтра, 6 октября</b>. Можно открыть первый урок уже сегодня.</div>`;
  if(n!==biez) h+=`<div class="egz-uwaga">Ты смотришь день ${n}. Твой текущий день — ${biez}.
      <div style="margin-top:8px"><button class="egz-chip" onclick="KURS.dzien(${biez})">К дню ${biez} →</button></div></div>`;
  else if(!przedStartem && n>dzisN) h+=`<div class="egz-uwaga">Ты идёшь быстрее плана на ${n-dzisN} ${dniRu(n-dzisN)}: по календарю сегодня день ${dzisN}.</div>`;
  else if(!przedStartem && n<dzisN) h+=`<div class="egz-uwaga">По календарю сегодня день ${dzisN} — ты отстаёшь на ${dzisN-n} ${dniRu(dzisN-n)}.</div>`;

  h+=`<h3 class="egz-h kurs-tytul">${esc(p.tytul)}</h3><div class="kurs-cel">${esc(p.cel)}</div>`;
  h+=`<div class="egz-sub">${ile} из ${wszystkie} заданий · около ${Math.round(minut/5)*5} минут</div>`;

  p.zadania.forEach((t,i)=>{
    const g = !!zr[i];
    h+=`<div class="egz-card kurs-zad ${g?'egz-done':''}">
      <div class="egz-ico" onclick="KURS.otworz(${n},${i})">${ik(g?'egz-check':(IKONY[t.typ]||'egz-book'))}</div>
      <div class="egz-body" onclick="KURS.otworz(${n},${i})"><div class="egz-t">${esc(nazwaZadania(t))}</div>
        <div class="egz-d">${esc(opisZadania(t))}</div></div>
      <div class="kurs-min" onclick="KURS.otworz(${n},${i})">${t.min}′</div>
      <button class="kurs-tick ${g?'on':''}" onclick="KURS.przelacz(${n},${i})" aria-label="Отметить">${g?'✓':''}</button>
    </div>`;
  });

  // przycisk startu zaraz pod listą zadań, nie na dole ekranu
  const pierwsze = p.zadania.findIndex((_,i)=>!zr[i]);
  const start = pierwsze>=0 ? {t:'Начать: '+krotka(p.zadania[pierwsze]), on:`KURS.otworz(${n},${pierwsze})`}
    : (n<60 ? {t:'День выполнен. Дальше →', on:`KURS.dalej(${n})`} : {t:'Курс пройден!', on:''});
  h+=`<button class="check-btn kurs-start" ${start.on?`onclick="${start.on}"`:'disabled'}>${esc(start.t)}</button>`;

  h+=`<div class="kurs-nav">
    ${n>1?`<button class="egz-chip" onclick="KURS.dzien(${n-1})">← День ${n-1}</button>`:'<span></span>'}
    <button class="egz-chip" onclick="KURS.mapa()">Карта курса</button>
    ${n<60?`<button class="egz-chip" onclick="KURS.dzien(${n+1})">День ${n+1} →</button>`:'<span></span>'}
  </div>`;
  if(typeof WZORY!=='undefined'){ const wd=WZORY.naDzis(), wk=WZORY.kartaGlowna();
    if(wd) h+=`<div class="egz-card ${wk.zrobione?'egz-done':''}" onclick="startWzory()"><div class="egz-ico">${ik(wk.zrobione?'egz-check':'egz-pen')}</div>
    <div class="egz-body"><div class="egz-t">Сочинения дня — переписать</div><div class="egz-d">${esc(WZORY.forma(wd.k).forma)} + ${esc(WZORY.forma(wd.d).forma)}</div></div><div class="egz-meta">${wk.zrobione?'✓':'→'}</div></div>`; }
  if(typeof SLOWNIK!=='undefined') h+=`<div class="egz-card" onclick="startSlownik()"><div class="egz-ico">${ik('egz-book')}</div>
    <div class="egz-body"><div class="egz-t">Словарь экзамена</div><div class="egz-d">Все слова и фразы курса — карточки Cram</div></div><div class="egz-meta">→</div></div>`;
  h+=`<div class="egz-card" onclick="KURS.egzaminInfo()"><div class="egz-ico">${ik('egz-target')}</div>
    <div class="egz-body"><div class="egz-t">Как проходит экзамен</div><div class="egz-d">Письмо, устная часть и день экзамена — советы экзаменаторов</div></div><div class="egz-meta">→</div></div>`;
  h+=`<div class="egz-card" onclick="KURS.claudeInfo()"><div class="egz-ico">${ik('egz-ear')}</div>
    <div class="egz-body"><div class="egz-t">Как заниматься с Claude</div><div class="egz-d">Говорение голосом и проверка письма</div></div><div class="egz-meta">→</div></div>`;
  h+='</div>';
  el('contentWrap').innerHTML=h;
  el('bottomWrap').style.display='none';
  V.dzien = n;
}
function dalejDzien(n){ podnies(n+1); dzienEkran(n+1); }
function krotka(t){
  return ({lekcja:'урок', slowa:'лексика', mowa:'говорение', pisanie:'письмо', powtorka:'повторение',
    bledy:'очередь ошибок', fiszki:'фишки', zewn:'задание', probny:'пробный экзамен', wynik:'баллы'})[t.typ]
    || (t.typ==='egz' ? (t.modul==='sluch'?'слушание':'задание экзамена') : 'задание');
}
function pasekKursu(n){
  let gotowe=0;
  for(let d=1; d<=60; d++){ const {ile,wszystkie}=postep(d); if(wszystkie && ile===wszystkie) gotowe++; }
  return `<div class="egz-bar kurs-bar"><div class="egz-bar-f" style="width:${gotowe/60*100}%;background:var(--success)"></div></div>
    <div class="egz-note" style="margin-bottom:12px">Выполнено дней: ${gotowe} из 60</div>`;
}
function przelacz(n,i){ wczytaj(); const z=zrob(n); z[i]=!z[i]; zapisz(); if(z[i]) podnies(n); dzienEkran(n); }

const V = {};
function ik(id){ return '<svg class="egz-i"><use href="#'+id+'"/></svg>'; }
function przycisk(txt,fn,wyl){ const b=el('mainBtn'); if(!b) return;
  el('bottomWrap').style.display=''; b.className='check-btn';
  b.textContent=txt; b.disabled=!!wyl; b.onclick=fn||null; }
function wrocDo(n){ return ()=>dzienEkran(n); }

// ---------- mapa kursu ----------
function mapa(){
  wczytaj();
  wejdz('mapa', mapa);
  const biez = nrBiezacy(), dz = nrDzisiaj();
  let h='<div class="egz kurs"><h3 class="egz-h">Карта курса</h3>';
  h+=`<div class="egz-sub">60 дней в три фазы: фундамент (вся грамматика B1), экзаменационный формат, финиш. Рамкой выделен твой текущий день, по календарю сегодня — день ${dz}. Нажми на день.</div>`;
  let faza='';
  KURS_PLAN.forEach(p=>{
    if(p.faza!==faza){ faza=p.faza; h+=`<h3 class="egz-h">${{Fundament:'Фаза 1 · Фундамент',Egzamin:'Фаза 2 · Экзамен',Finisz:'Фаза 3 · Финиш'}[faza]}</h3>`; }
    const {ile,wszystkie}=postep(p.d), caly=ile===wszystkie;
    const cls = p.d===biez?'kurs-dzis':(caly?'egz-done':'');
    h+=`<div class="egz-card ${cls}" onclick="KURS.dzien(${p.d})">
      <div class="kurs-nr">${p.d}</div>
      <div class="egz-body"><div class="egz-t">${esc(p.tytul)}</div><div class="egz-d">${dataPL(p.data)}</div></div>
      <div class="egz-meta">${caly?'✓':(ile?ile+'/'+wszystkie:'')}</div></div>`;
  });
  h+='</div>';
  el('contentWrap').innerHTML=h;
  przycisk('← День '+biez, ()=>dzienEkran());
  // przy powrocie strzałką zostaje miejsce, w którym się było
  if(!(typeof wCofaniu==='function' && wCofaniu()))
    setTimeout(()=>{ const c=document.querySelector('.kurs-dzis'); if(c) c.scrollIntoView({block:'center'}); },50);
}

// ---------- otwieranie zadania ----------
function otworz(n,i){
  const t = dzien(n).zadania[i];
  V.dzien=n; V.zad=i;
  podnies(n);
  const koniec = (w,ile)=>{ oznacz(n,i); dzienEkran(n); };
  switch(t.typ){
    case 'lekcja':   return lekcja(t.ref, n, i);
    case 'slowa':    return slowa(t.ref, n, i);
    case 'mowa':     return mowa(t.ref, t.co, n, i);
    case 'pisanie':  return pisanie(t.ref, n, i);
    case 'powtorka': return powtorka(t.refs, n, i);
    case 'egz':
      if(typeof EGZ!=='undefined' && EGZ.blokKurs(t.modul, t.klucz, koniec, '← День '+n)) return;
      return komunikat('Это задание недоступно.', n);
    case 'bledy':
      if(typeof EGZ!=='undefined' && EGZ.liczBledy()>0 && EGZ.blokKurs('bledy','', koniec, '← День '+n)) return;
      oznacz(n,i); return komunikat('Очередь ошибок пуста — отлично. Задание засчитано.', n);
    case 'fiszki':
      oznacz(n,i);
      if(typeof startCram==='function' && typeof PERS_VOCAB!=='undefined' && PERS_VOCAB.length) return startCram();
      if(typeof startFlashcard==='function') return startFlashcard();
      return dzienEkran(n);
    case 'zewn':     return zewn(t, n, i);
    case 'probny':   return probny(t.nr, n, i);
    case 'wynik':    return wynik(t.nr, n, i);
  }
}
function komunikat(txt,n){
  wejdz('info:'+txt, ()=>komunikat(txt,n));
  el('contentWrap').innerHTML=`<div class="egz kurs"><div class="egz-ex">${esc(txt)}</div></div>`;
  przycisk('← День '+n, wrocDo(n));
}

// ---------- lekcja ----------
function teoriaHTML(bloki){
  let h='';
  for(const b of bloki){
    if(b.t==='h') h+=`<h4 class="kurs-h4">${b.h}</h4>`;
    else if(b.t==='p') h+=`<p class="kurs-p">${b.h}</p>`;
    else if(b.t==='uwaga') h+=`<div class="egz-uwaga">${b.h}</div>`;
    else if(b.t==='pulapka') h+=`<div class="kurs-pulapka"><b>Ловушка для русскоговорящих.</b> ${b.h}</div>`;
    else if(b.t==='tab'){
      h+='<div class="kurs-tabwrap"><table class="kurs-tab"><thead><tr>'+b.head.map(c=>`<th>${c}</th>`).join('')+'</tr></thead><tbody>';
      b.rows.forEach(r=>h+='<tr>'+r.map(c=>`<td>${c}</td>`).join('')+'</tr>');
      h+='</tbody></table></div>';
    }
    else if(b.t==='przyklady'){
      h+='<div class="kurs-przyklady">'+b.items.map(([pl,ru])=>
        `<div class="kurs-pr"><span class="kurs-pl" onclick="KURS.mow(this.textContent)">${pl}</span><span class="kurs-ru">${ru}</span></div>`).join('')+'</div>';
    }
  }
  return h;
}
function lekcja(id, n, i){
  wczytaj();
  const L = KURS_LEKCJE[id];
  if(!L) return komunikat('Этот урок ещё в подготовке.', n);
  wejdz('lekcja:'+id, ()=>lekcja(id,n,i));
  const wynikL = S.lekcje[id];
  let h=`<div class="egz kurs"><div class="egz-ex">
    <div class="egz-hint">Урок ${id.replace('L','')} · ${esc(L.tytul)}</div>
    <h3 class="kurs-lh">${esc(L.ru)}</h3>
    <div class="kurs-cel">${L.cel}</div>
    ${teoriaHTML(L.teoria)}
    <div class="egz-note" style="margin-top:14px">Нажми на польский пример — его прочитает синтезатор речи.</div>
  </div>`;
  if(wynikL) h+=`<div class="egz-mod"><div class="egz-mod-top"><span class="egz-mod-n">Последний результат</span>
    <span class="egz-mod-p" style="color:${wynikL.p>=70?'var(--success)':'var(--error)'}">${wynikL.p}%</span></div>
    <div class="egz-note">${wynikL.d} из ${wynikL.n} · ${wynikL.data}. Цель — 70% и выше.</div></div>`;
  h+='</div>';
  el('contentWrap').innerHTML=h;
  przycisk(`Упражнения (${L.cwiczenia.length}) →`, ()=>cwiczenia(id, n, i));
}
function cwiczenia(id, n, i){
  const L = KURS_LEKCJE[id];
  wejdz('cw:'+id, ()=>cwiczenia(id,n,i));
  const ok = EGZ.wlasne(L.cwiczenia.map(q=>({...q})), {tytul:'Урок '+id.replace('L','')+' · '+L.tytul,
    polecenie: L.polecenie || 'Выбери или впиши правильную форму.', klucz:id},
    (dobrze, ile)=>{ wczytaj(); const p=Math.round(dobrze/ile*100);
      S.lekcje[id]={p,d:dobrze,n:ile,data:dzisISO()}; zapisz();
      if(n){ oznacz(n,i); } lekcjaPo(id,n,i,p); }, 'Дальше →');
  if(!ok) komunikat('Нет упражнений.', n);
}
function lekcjaPo(id,n,i,p){
  const L=KURS_LEKCJE[id];
  let h=`<div class="egz kurs"><div class="egz-ex" style="text-align:center">
    <div class="egz-big" style="color:${p>=70?'var(--success)':'var(--error)'}">${p}%</div>
    <div class="egz-sub" style="font-size:14px">${p>=70?'Урок усвоен. Ошибки ушли в очередь повторения.':'Меньше 70% — перечитай теорию и пройди упражнения ещё раз. Ошибки уже в очереди повторения.'}</div>
  </div></div>`;
  el('contentWrap').innerHTML=h;
  if(p<70){ przycisk('Ещё раз →', ()=>cwiczenia(id,n,i)); 
    el('contentWrap').insertAdjacentHTML('beforeend', `<div class="egz kurs"><div class="kurs-nav"><button class="egz-chip" onclick="KURS.lekcja('${id}',${n},${i})">Теория</button><button class="egz-chip" onclick="KURS.dzien(${n})">← День ${n}</button></div></div>`); }
  else przycisk(n?'← День '+n:'Готово', n?wrocDo(n):null);
}

// ---------- powtórka: po kilka ćwiczeń z każdej lekcji ----------
function powtorka(refs, n, i){
  const zad=[];
  const naLekcje = refs.length>6 ? 3 : 4;
  refs.forEach(r=>{ const L=KURS_LEKCJE[r]; if(L) mix(L.cwiczenia).slice(0,naLekcje).forEach(q=>zad.push({...q,_klucz:r})); });
  if(!zad.length) return komunikat('Уроки для повторения ещё в подготовке.', n);
  wejdz('powt:'+n+':'+i, ()=>powtorka(refs,n,i));
  EGZ.wlasne(zad, {tytul:'Повторение', polecenie:'Задания из пройденных уроков вперемешку.', klucz:'powtorka'},
    (d,ile)=>{ oznacz(n,i); lekcjaPo2(d,ile,n); }, 'Дальше →');
}
function lekcjaPo2(d,ile,n){
  const p=Math.round(d/ile*100);
  el('contentWrap').innerHTML=`<div class="egz kurs"><div class="egz-ex" style="text-align:center">
    <div class="egz-big" style="color:${p>=70?'var(--success)':'var(--error)'}">${p}%</div>
    <div class="egz-sub" style="font-size:14px">Повторение: ${d} из ${ile}. Ошибки — в очереди, вернутся в воскресенье.</div></div></div>`;
  przycisk('← День '+n, wrocDo(n));
}

// ---------- słownictwo ----------
// Karty tematu to ten sam Cram, co w słowniku egzaminu (slownik.js):
// „Znam" zapisuje się w jednym miejscu i widać je w obu.
function slowa(id, n, i){
  const T = KURS_TEMATY[id];
  if(!T) return komunikat('Эта тема ещё в подготовке.', n);
  wejdz('slowa:'+id, ()=>slowa(id,n,i));
  const zn = pl => typeof SLOWNIK!=='undefined' && SLOWNIK.znam(pl);
  const wpisy = [...T.slowa, ...(T.zwroty||[])];
  const ileZn = wpisy.filter(([pl])=>zn(pl)).length;
  let h=`<div class="egz kurs"><div class="egz-ex">
    <div class="egz-hint">Тема · ${esc(T.blok)}</div><h3 class="kurs-lh">${esc(T.tytul)}</h3>
    <div class="kurs-cel">${esc(T.ru)}. Слова и фразы, без которых не обойтись в устной части и письме на эту тему.</div>
    <button class="check-btn kurs-start" onclick="KURS.slowaCram('${id}',${n||0},${i||0})">Учить карточками (Cram) →</button>
    <div class="egz-note">Знаю: ${ileZn} из ${wpisy.length}. Нажми на слово — услышишь произношение. Все темы курса собраны в «Словаре экзамена».</div>
    <div class="kurs-slowa">`;
  T.slowa.forEach(([pl,ru])=>{
    h+=`<div class="kurs-sl ${zn(pl)?'kurs-zn':''}"><span class="kurs-pl" onclick="KURS.mow(this.textContent)">${pl}</span><span class="kurs-ru">${ru}</span></div>`;
  });
  h+='</div>';
  if(T.zwroty && T.zwroty.length){
    h+='<h4 class="kurs-h4">Готовые фразы</h4><div class="kurs-przyklady">';
    T.zwroty.forEach(([pl,ru])=>h+=`<div class="kurs-pr ${zn(pl)?'kurs-zn':''}"><span class="kurs-pl" onclick="KURS.mow(this.textContent)">${pl}</span><span class="kurs-ru">${ru}</span></div>`);
    h+='</div>';
  }
  h+='</div></div>';
  el('contentWrap').innerHTML=h;
  przycisk('Учить карточками (Cram) →', ()=>slowaCram(id,n,i));
}
function slowaCram(id,n,i){
  const T=KURS_TEMATY[id];
  if(!T || typeof SLOWNIK==='undefined') return;
  SLOWNIK.cram([...T.slowa, ...(T.zwroty||[])], {
    klucz:'kurs:'+id, tytul:T.tytul,
    powrot: n ? ()=>{ oznacz(n,i); dzienEkran(n); } : null,
    powrotTxt: n ? '← День '+n : null });
}

// ---------- synteza mowy ----------
let glos=null;
function szukajGlosu(){ if(!('speechSynthesis' in window)) return;
  glos = speechSynthesis.getVoices().find(v=>v.lang && v.lang.toLowerCase().startsWith('pl')) || null; }
if('speechSynthesis' in window){ speechSynthesis.addEventListener('voiceschanged', szukajGlosu); szukajGlosu(); }
function mow(txt){
  if(!('speechSynthesis' in window)) return;
  if(!glos) szukajGlosu();
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(String(txt).replace(/\(.*?\)/g,'').replace(/[—–]/g,',').trim());
  u.lang='pl-PL'; if(glos) u.voice=glos; u.rate=0.9;
  speechSynthesis.speak(u);
}

// ---------- kopiowanie do schowka ----------
function kopiuj(tekst, info){
  const ok = () => toast(info || 'Скопировано');
  if(navigator.clipboard && window.isSecureContext){
    navigator.clipboard.writeText(tekst).then(ok, ()=>kopiujStaro(tekst)&&ok());
  } else if(kopiujStaro(tekst)) ok();
}
function kopiujStaro(t){
  const ta=document.createElement('textarea'); ta.value=t; ta.setAttribute('readonly','');
  ta.style.position='fixed'; ta.style.opacity='0'; document.body.appendChild(ta);
  ta.select(); ta.setSelectionRange(0,t.length);
  let ok=false; try{ ok=document.execCommand('copy'); }catch(e){}
  document.body.removeChild(ta); return ok;
}
function toast(txt){
  const t=document.createElement('div'); t.className='kurs-toast'; t.textContent=txt;
  document.body.appendChild(t); setTimeout(()=>t.remove(), 2200);
}

// ========================================================================
// MÓWIENIE — trzy zadania egzaminu: opis ilustracji, monolog, sytuacja
// ========================================================================
const ZW_OPIS = [
  ['Zdjęcie przedstawia…','На фотографии изображено…'],
  ['Na pierwszym planie widzę…','На переднем плане я вижу…'],
  ['Na drugim planie jest…','На заднем плане есть…'],['W tle jest…','На фоне есть…'],
  ['Z lewej strony…','Слева…'],['Z prawej strony…','Справа…'],
  ['Pośrodku zdjęcia…','Посередине фотографии…'],['W rogu zdjęcia…','В углу фотографии…'],
  ['Ta kobieta ma na sobie…','Эта женщина одета в…'],
  ['Wydaje mi się, że to jest rodzina.','Мне кажется, это семья.'],
  ['Chyba jest lato.','Наверное, сейчас лето.'],['Prawdopodobnie jest lato.','Вероятно, сейчас лето.'],
  ['Wygląda na to, że oni świetnie się bawią.','Похоже, они отлично проводят время.'],
  ['Atmosfera jest spokojna i wesoła.','Атмосфера спокойная и весёлая.'],
  ['Niestety nie widzę dokładnie, co to jest.','К сожалению, не вижу точно, что это.'],
  ['Sam chętnie bym tam pojechał.','Я бы и сам с удовольствием туда поехал.'],
];
const ZW_MONOLOG = [
  ['Na początku powiem o…','Сначала скажу о…'],
  ['Najpierw opiszę…','Сначала опишу…'],
  ['Muszę też powiedzieć, że…','Должен также сказать, что…'],
  ['Kolejną sprawą, o której chcę powiedzieć, jest…','Следующее, о чём хочу сказать, — это…'],
  ['Uważam, że…','Считаю, что…'],['Moim zdaniem…','По-моему…'],
  ['Na przykład…','Например…'],
  ['Chcę jeszcze dodać, że…','Хочу ещё добавить, что…'],
  ['Na końcu mogę stwierdzić, że…','В конце могу сказать, что…'],
];
const ZW_SYTUACJA = [
  ['Przepraszam, czy mogę o coś zapytać?','Извините, можно спросить?'],
  ['Chciałbym zapytać o…','Я хотел бы спросить о…'],['Chciałabym zapytać o…','Я хотела бы спросить о… (говорит женщина)'],
  ['Czy mógłby Pan powtórzyć?','Не могли бы вы повторить? (мужчине)'],['Czy mogłaby Pani powtórzyć?','Не могли бы вы повторить? (женщине)'],
  ['Czy dobrze rozumiem, że…?','Правильно ли я понимаю, что…?'],
  ['Proponuję, żebyśmy…','Предлагаю, чтобы мы…'],
  ['Może lepiej…?','Может, лучше…?'],
  ['Zgadzam się.','Согласен.'],['Niestety, nie mogę, bo…','К сожалению, не могу, потому что…'],
  ['Dziękuję za pomoc. Do widzenia!','Спасибо за помощь. До свидания!'],
];
const ZW_RATUNEK = [
  ['Nie pamiętam tego słowa, ale chodzi o rzecz, która…','Не помню слово, но речь о вещи, которая…'],
  ['Jak to się mówi po polsku?','Как это сказать по-польски?'],
  ['Czy może Pan mówić trochę wolniej?','Не могли бы вы говорить чуть медленнее?'],
  ['Przepraszam, nie zrozumiałem. Co znaczy słowo…?','Извините, я не понял. Что значит слово…?'],
];

function lista(zw){ return '<div class="kurs-przyklady">'+zw.map(([pl,ru])=>
  `<div class="kurs-pr"><span class="kurs-pl" onclick="KURS.mow(this.textContent)">${pl}</span><span class="kurs-ru">${ru}</span></div>`).join('')+'</div>'; }

function mowa(id, co, n, i){
  const T = KURS_TEMATY[id];
  if(co!=='opis_frazy' && !T) return komunikat('Эта тема ещё в подготовке.', n);
  wejdz('mowa:'+id+':'+co, ()=>mowa(id,co,n,i));
  V.mowa={id,co,n,i};
  let h='<div class="egz kurs"><div class="egz-ex">';
  h+=`<div class="egz-hint">Говорение · ${MOWA_NAZWA[co] || (jestMon(co)?'монолог — ещё вариант':jestSyt(co)?'ситуация — ещё вариант':co)}</div>`;

  if(co==='opis_frazy'){
    h+=`<h3 class="kurs-lh">Обороты для всех трёх заданий</h3>
      <div class="kurs-cel">Прочитай вслух каждую фразу два раза. Нажми — синтезатор произнесёт.</div>
      <h4 class="kurs-h4">Задание 1 — описание фотографии</h4>${lista(ZW_OPIS)}
      <h4 class="kurs-h4">Задание 2 — монолог</h4>${lista(ZW_MONOLOG)}
      <h4 class="kurs-h4">Задание 3 — ситуация</h4>${lista(ZW_SYTUACJA)}
      <h4 class="kurs-h4">Если забыл слово</h4>${lista(ZW_RATUNEK)}`;
    h+='</div></div>';
    el('contentWrap').innerHTML=h;
    return przycisk('Готово ✓', ()=>{ oznacz(n,i); dzienEkran(n); });
  }

  const M=T.monolog, Y = (jestSyt(co) && T[co]) ? T[co] : T.sytuacja;
  const TYP_MONOLOGU = {opinia:'Монолог-мнение о проблеме', wybor:'Монолог-выбор из двух вариантов', marzenie:'Монолог-мечта: «что бы ты сделал, если бы…»', opis:'Монолог-описание человека или места'};
  const inny = (co2, typ, temat) => `<div class="egz-card" onclick="KURS.mowa('${id}','${co2}',${n},${i})"><div class="egz-ico">${ik('egz-ear')}</div>
    <div class="egz-body"><div class="egz-t">Ещё вариант: ${esc(typ)}</div><div class="egz-d">${esc(temat)}</div></div><div class="egz-meta">→</div></div>`;
  if(co==='monolog' || co==='opis_osoby' || jestMon(co)){
    const mm = (co==='opis_osoby' && T.opis_osoby) ? T.opis_osoby : (jestMon(co) && T[co]) ? T[co] : M;
    if(jestMon(co) && mm.typ) h+=`<div class="kurs-cel"><b>${TYP_MONOLOGU[mm.typ]||''}</b> — на экзамене монолог бывает трёх видов: «расскажи о…», мнение о проблеме и выбор из двух вариантов.</div>`;
    h+=`<div class="kurs-karta"><div class="kurs-karta-n">Zadanie 2 · Monolog</div>
      <div class="kurs-karta-t">${mm.temat}</div>
      <div class="kurs-karta-s">Proszę mówić 2–3 minuty. Plan wypowiedzi:</div>
      <ol>${mm.plan.map(x=>`<li>${x}</li>`).join('')}</ol></div>
      <div class="kurs-cel">${mm.ru||'Говори 2–3 минуты по плану. Не заучивай текст — запомни план и опорные фразы.'}</div>
      <h4 class="kurs-h4">Вопросы, которые может задать экзаменатор</h4>
      <ul class="kurs-ul">${mm.pytania.map(x=>`<li>${x}</li>`).join('')}</ul>
      <h4 class="kurs-h4">Связки для монолога</h4>${lista(ZW_MONOLOG)}`;
    if(T.zwroty) h+=`<h4 class="kurs-h4">Лексика темы</h4>${lista(T.zwroty)}`;
    h+=wzorBlok(mm.wzor);
  }
  else if(co==='sytuacja' || jestSyt(co)){
    h+=`<div class="kurs-karta"><div class="kurs-karta-n">Zadanie 3 · Sytuacja komunikacyjna</div>
      <div class="kurs-karta-t">${Y.polecenie}</div>
      <div class="kurs-karta-s">Twoja rola: ${Y.rola_ja}. Egzaminator: ${Y.rola_on}.</div></div>
      <div class="kurs-cel">${Y.ru}</div>
      <h4 class="kurs-h4">Что нужно сделать в разговоре</h4>
      <ul class="kurs-ul">${Y.cele.map(x=>`<li>${x}</li>`).join('')}</ul>
      <h4 class="kurs-h4">Фразы для этой ситуации</h4>${lista(Y.zwroty)}
      <h4 class="kurs-h4">Общие фразы для диалога</h4>${lista(ZW_SYTUACJA)}`;
    h+=wzorBlok(Y.wzor, true);
  }
  else if(co==='ilustracja'){
    h+=`<div class="kurs-karta"><div class="kurs-karta-n">Zadanie 1 · Opis ilustracji</div>
      <div class="kurs-karta-t">Proszę opisać zdjęcie: kto, gdzie, co robi, jak wygląda, jaka jest atmosfera.</div>
      <div class="kurs-karta-s">2–3 minuty. Od ogółu do szczegółu.</div></div>
      <div class="kurs-cel">Возьми любую фотографию с людьми в ситуации по теме «${esc(T.ru.toLowerCase())}». Подойдёт фото из твоей галереи или из поиска картинок по запросу <b>${esc(T.foto||T.tytul)}</b>.</div>
      <h4 class="kurs-h4">План описания — всегда один и тот же</h4>
      <ol class="kurs-ul"><li>Общее: что на фото, где это, сколько людей.</li>
        <li>Люди: внешность, одежда, эмоции, кто они друг другу.</li>
        <li>Что делают — настоящее время, несовершенный вид: siedzi, rozmawia, je.</li>
        <li>Место и детали: что на переднем плане, на заднем, слева, справа.</li>
        <li>Время года, погода, атмосфера, твоё предположение: chyba, wydaje mi się.</li>
        <li>В конце — что-то от себя: <i>Sam chętnie bym tam pojechał.</i></li></ol>
      <h4 class="kurs-h4">Обороты</h4>${lista(ZW_OPIS)}`;
  }
  else if(co==='pelny'){
    h+=`<h3 class="kurs-lh">Полная устная часть — 15 минут</h3>
      <div class="kurs-cel">Три задания подряд, как на экзамене. Claude ведёт себя как экзаменатор, а в конце разбирает ошибки.</div>
      <div class="kurs-karta"><div class="kurs-karta-n">1 · Opis ilustracji</div>
        <div class="kurs-karta-s">Прикрепи в Claude фото с людьми по теме (запрос: <b>${esc(T.foto||T.tytul)}</b>).</div></div>
      <div class="kurs-karta"><div class="kurs-karta-n">2 · Monolog</div><div class="kurs-karta-t">${M.temat}</div></div>
      <div class="kurs-karta"><div class="kurs-karta-n">3 · Sytuacja</div><div class="kurs-karta-t">${Y.polecenie}</div></div>
      <h4 class="kurs-h4">Если забыл слово</h4>${lista(ZW_RATUNEK)}`;
  }

  // Dodatkowe warianty tematu — widoczne z każdego ekranu mowy, bo nie każdy
  // temat ma w planie i monolog, i sytuację.
  dodatkowe(T,'monolog').filter(k=>k!==co).forEach(k=>h+=inny(k, TYP_MONOLOGU[T[k].typ]||'монолог', T[k].temat));
  dodatkowe(T,'sytuacja').filter(k=>k!==co).forEach(k=>h+=inny(k, 'другая ситуация', T[k].polecenie));
  if(jestMon(co)) h+=inny('monolog', 'монолог «расскажи о…»', M.temat);
  if(jestSyt(co)) h+=inny('sytuacja', 'основная ситуация темы', T.sytuacja.polecenie);

  h+=`<h4 class="kurs-h4">Тренировка с Claude голосом</h4>
    <ol class="kurs-ul kurs-kroki">
      <li>Нажми «Скопировать задание для Claude».</li>
      <li>Открой приложение Claude → новый чат → вставь текст${co==='pelny'||co==='ilustracja'?' и прикрепи фотографию':''} → отправь.</li>
      <li>Нажми кнопку голосового режима и отвечай вслух.</li>
      <li>В конце Claude по-русски разберёт ошибки. Самые важные выпиши.</li></ol>
    <button class="egz-play" onclick="KURS.kopiujMowe()">Скопировать задание для Claude</button>
    <div class="kurs-timer" id="kursTimer"><button class="egz-chip" onclick="KURS.stoper(180)">Засечь 3 минуты для себя</button></div>
  </div></div>`;
  el('contentWrap').innerHTML=h;
  // Otwarte spoza planu (np. z ekranu «Как проходит экзамен») — bez odhaczania dnia.
  if(n==null) przycisk('← Назад', ()=>goBack());
  else przycisk('Готово ✓', ()=>{ oznacz(n,i); dzienEkran(n); });
}
function wzorBlok(wzor, dialog){
  if(!wzor) return '';
  return `<div id="kursWzor"><button class="egz-chip" onclick="document.getElementById('kursWzor').innerHTML=this.nextElementSibling.innerHTML">
    Показать пример ответа</button><template><h4 class="kurs-h4">Пример ответа — адаптируй под себя</h4>
    <div class="egz-wzor kurs-wzor">${dialog?wzor.replace(/\n/g,'<br>'):wzor}</div></template></div>`;
}
let stoperT=null;
function stoper(sek, etykieta){
  clearInterval(stoperT);
  const koniec=Date.now()+sek*1000, box=el('kursTimer');
  const kk=new Date(koniec), godz=kk.getHours()+':'+String(kk.getMinutes()).padStart(2,'0');
  const nag = etykieta ? `<div class="egz-note"><b>${esc(etykieta)}</b> — закончи в ${godz}</div>` : '';
  const tik=()=>{ const r=Math.max(0,Math.round((koniec-Date.now())/1000));
    if(!el('kursTimer')){ clearInterval(stoperT); return; }
    box.innerHTML=nag+`<div class="kurs-zegar">${Math.floor(r/60)}:${String(r%60).padStart(2,'0')}</div>`+
      (r?'<div class="egz-note">Говори вслух. Не останавливайся, даже если ошибаешься.</div>':
      `<div class="egz-note">Время! Сколько удалось сказать без пауз?</div><button class="egz-chip" onclick="KURS.stoper(${sek})">Ещё раз</button>`);
    if(!r) clearInterval(stoperT); };
  tik(); stoperT=setInterval(tik,500);
}

// ---------- prompty dla Claude ----------
const PROMPT_WSTEP = `Ты — экзаменатор устной части государственного сертификационного экзамена по польскому языку, уровень B1 (взрослые). Мой уровень сейчас между A2 и B1, экзамен 5 декабря 2026.

Правила: говори только по-польски, как настоящий экзаменатор, в нормальном, но не быстром темпе. Обращайся ко мне на «Pan». Во время заданий НЕ исправляй ошибки и не переходи на русский. Если я замолкаю больше чем на 5 секунд — задай короткий наводящий вопрос.`;
// Skala jak na egzaminie: 40 p., próg 20. Wykonanie zadań: opis 7, monolog 7,
// dialog 6; za całą część: gramatyka 8, leksyka 8, wymowa i intonacja 4.
const PROMPT_BLEDY = `2. 5–10 моих ошибок таблицей: что я сказал → как правильно → почему (падеж, окончание, вид глагола, предлог).
3. 3 готовые польские фразы, которые сделали бы мой ответ сильнее.`;
const promptOcena = (zadanie, max) => `Когда я закончу, выйди из роли и ответь по-русски:
1. Оценка по шкале экзамена: выполнение задания «${zadanie}» — 0–${max}; по этому ответу — грамматика 0–8, лексика 0–8, произношение и интонация 0–4. Если я ответил не на все пункты задания — перечисли, что пропущено: за это на экзамене снимают баллы.
${PROMPT_BLEDY}`;

function promptMowa(T, co){
  const M=T.monolog, Y=(jestSyt(co)&&T[co])?T[co]:T.sytuacja;
  if(co==='monolog' || co==='opis_osoby' || jestMon(co)){
    const mm=(co==='opis_osoby'&&T.opis_osoby)?T.opis_osoby:(jestMon(co)&&T[co])?T[co]:M;
    return `${PROMPT_WSTEP}

Сегодня только задание 2 — монолог.
Temat: «${mm.temat}»
Я говорю 2–3 минуты. Если замолкаю — задавай вопросы из этого списка (по одному):
${mm.pytania.map(x=>'— '+x).join('\n')}

${promptOcena('монолог', 7)}

Начни: поздоровайся и дай мне тему.`;
  }
  if(co==='sytuacja' || jestSyt(co)){
    return `${PROMPT_WSTEP}

Сегодня только задание 3 — ситуация.
Polecenie dla zdającego: «${Y.polecenie}»
Ты играешь роль: ${Y.rola_on}. Я играю: ${Y.rola_ja}.
Веди диалог 3–4 минуты: реагируй на мои слова, задавай уточняющие вопросы, создай одно небольшое осложнение (например, нужной вещи нет, время не подходит), чтобы мне пришлось договариваться.

${promptOcena('диалог', 6)}

Начни: прочитай мне polecenie по-польски и начни разговор в своей роли.`;
  }
  if(co==='ilustracja'){
    return `${PROMPT_WSTEP}

Сегодня только задание 1 — описание фотографии (я прикрепил фото).
Попроси меня описать фото. Я говорю 2–3 минуты. Если замолкаю — задай по одному вопросу: Kto jest na zdjęciu? Gdzie są te osoby? Co robią? Jak są ubrane? Jaka jest pogoda / pora roku? Jaka jest atmosfera?

${promptOcena('описание фотографии', 7)}
Дополнительно отметь, что на фото я не упомянул.

Начни: поздоровайся и попроси описать фото.`;
  }
  // pełny
  return `${PROMPT_WSTEP}

Проведи всю устную часть так, как на экзамене, около 15–20 минут.
0. Разминка: 2–3 коротких вопроса (skąd Pan jest, jak długo mieszka Pan w Polsce, po co Panu ten egzamin). Потом скажи, что у меня 5 минут на подготовку и можно делать заметки, и жди, пока я скажу «Jestem gotowy».
1. Opis ilustracji: я прикрепил фото. Попроси описать его (2–3 минуты).
2. Monolog: temat «${M.temat}». 2–3 минуты. Вопросы на случай паузы:
${M.pytania.slice(0,5).map(x=>'— '+x).join('\n')}
3. Sytuacja komunikacyjna: «${Y.polecenie}» Ты — ${Y.rola_on}, я — ${Y.rola_ja}. 3–4 минуты, с одним небольшим осложнением.

Между заданиями коротко объявляй следующее задание по-польски.

Когда я закончу, выйди из роли и ответь по-русски:
1. Оценка, как на экзамене (максимум 40, порог 20): выполнение заданий — описание фото 0–7, монолог 0–7, диалог 0–6; по всей устной части — грамматика 0–8, лексика 0–8, произношение и интонация 0–4. Сложи баллы и скажи, сдал бы я. Если я ответил не на все пункты какого-то задания — перечисли, что пропущено.
${PROMPT_BLEDY}

Начни: поздоровайся как экзаменатор и начни задание 1.`;
}
function kopiujMowe(){
  const m=V.mowa; if(!m) return;
  kopiuj(promptMowa(KURS_TEMATY[m.id], m.co), 'Задание скопировано — вставь его в Claude');
}

// ========================================================================
// PISANIE
// ========================================================================
function formaPisania(id){
  if(typeof PISANIE==='undefined') return null;
  return [...PISANIE.krotkie, ...PISANIE.dlugie].find(f=>f.id===id) || null;
}
function pisanie(id, n, i){
  wczytaj();
  if(id==='powtorka_szkieletow') return szkielety(n,i);
  const f=formaPisania(id);
  if(!f) return komunikat('Эта форма ещё в подготовке.', n);
  wejdz('pis:'+id, ()=>pisanie(id,n,i));
  const z=S.pisanie[id]||{}, cel=parseInt(f.dlugosc);
  V.pis={id,n,i,cel};
  let h=`<div class="egz kurs"><div class="egz-ex">
    <div class="egz-hint">Письмо · ${esc(f.forma)} · ${esc(f.dlugosc)}</div>
    <div class="kurs-karta"><div class="kurs-karta-t">${f.temat}</div></div>
    ${f.ru?`<div class="kurs-cel">${f.ru}</div>`:''}
    <div class="egz-szkielet"><b style="font-size:13px">Каркас — держись порядка:</b><ul>${f.szkielet.map(s=>`<li>${s}</li>`).join('')}</ul></div>`;
  if(f.zwroty) h+=`<div style="font-size:13px;font-weight:600;margin:8px 0 4px">Полезные обороты:</div><div class="egz-zwroty">${f.zwroty.map(x=>`<span class="egz-zwrot">${x}</span>`).join('')}</div>`;
  if(f.uwaga) h+=`<div class="egz-uwaga">⚠ ${f.uwaga}</div>`;
  if(PISANIE.krotkie.includes(f) && typeof UKLAD_KROTKICH!=='undefined') h+=`<div class="egz-note">${UKLAD_KROTKICH}</div>`;
  h+=`<textarea class="egz-inp egz-praca" id="kursPraca" placeholder="Пиши здесь…" oninput="KURS.licz()">${esc(z.tekst||'')}</textarea>
    <div class="egz-znaki">${['ą','ć','ę','ł','ń','ó','ś','ź','ż'].map(zn=>`<button type="button" class="egz-znak" onmousedown="event.preventDefault()" onclick="KURS.znak('${zn}')">${zn}</button>`).join('')}</div>
    <div class="egz-count" id="kursLicznik"></div>
    <h4 class="kurs-h4">Проверка у Claude</h4>
    <div class="kurs-cel">Напиши текст целиком сам, без словаря — как на экзамене. Потом скопируй его вместе с заданием в Claude: он оценит по трём официальным критериям и разберёт ошибки.</div>
    <button class="egz-play" onclick="KURS.kopiujPrace()">Скопировать текст для проверки в Claude</button>
    ${f.wzor?wzorBlok(f.wzor, true):''}
    ${f.wzor && typeof WZORY!=='undefined'?`<div class="egz-note" style="margin-top:8px">Образец с переводом и проверкой переписывания — в разделе <a href="#" onclick="WZORY.esej('${f.id}');return false">«Примеры сочинений»</a>.</div>`:''}
  </div></div>`;
  el('contentWrap').innerHTML=h;
  licz();
  przycisk('Сохранить · готово ✓', ()=>{ zapiszPrace(); oznacz(n,i); dzienEkran(n); });
}
function licz(){
  const t=el('kursPraca'); if(!t||!V.pis) return;
  const s=t.value.trim(), ile=s?s.split(/\s+/).length:0, cel=V.pis.cel;
  // Na egzaminie dozwolone ±10%. Słów ponad limit egzaminator już nie czyta.
  const dol=Math.ceil(cel*0.9), gor=Math.floor(cel*1.1), e=el('kursLicznik');
  e.textContent = ile>cel*1.2 ? ile+' слов — больше 120%: остаток текста не читают'
    : ile>gor ? ile+' слов — больше '+gor+': теряешь баллы за объём'
    : ile+' слов (цель: '+dol+'–'+gor+')';
  e.className='egz-count'+(ile>gor?' egz-count-zle':ile>=dol?' egz-count-ok':'');
  zapiszPrace();   // szkic zapisuje się na bieżąco — wyjście strzałką nie gubi tekstu
}
function znak(z){
  const p=el('kursPraca'); if(!p) return;
  const s=p.selectionStart??p.value.length, e=p.selectionEnd??p.value.length;
  p.value=p.value.slice(0,s)+z+p.value.slice(e); p.focus();
  try{ p.setSelectionRange(s+z.length,s+z.length); }catch(x){}
  licz();
}
function zapiszPrace(){
  const t=el('kursPraca'); if(!t||!V.pis) return;
  wczytaj(); const stary=S.pisanie[V.pis.id];
  if(stary ? stary.tekst===t.value : !t.value) return;
  S.pisanie[V.pis.id]={tekst:t.value,data:dzisISO()}; zapisz();
}
function kopiujPrace(){
  const f=formaPisania(V.pis.id), t=el('kursPraca'), tekst=t?t.value.trim():'';
  if(!tekst){ toast('Сначала напиши текст'); return; }
  zapiszPrace();
  kopiuj(`Ты — экзаменатор письменной части государственного экзамена по польскому языку, уровень B1. Мой уровень — между A2 и B1, экзамен 5 декабря 2026. Проверь мою работу.

Forma: ${f.forma} (${f.dlugosc})
Polecenie: ${f.temat.replace(/<[^>]+>/g,'')}

Мой текст:
"""
${tekst}
"""

Ответь по-русски:
1. Баллы по официальным критериям (каждый 0–10): wykonanie zadania, środki językowe, poprawność językowa. Сумма из 30 и прошёл ли я порог 50%.
2. Мой текст с исправленными ошибками — сохрани мой уровень, не переписывай в «идеальный».
3. Таблица ошибок: было → правильно → почему (падеж, окончание, вид глагола, предлог, порядок слов, орфография).
4. Три мои самые частые ошибки — на что обратить внимание.
5. Три оборота уровня B1, которые подошли бы к этому тексту.`, 'Текст скопирован — вставь его в Claude');
}
function szkielety(n,i){
  wejdz('szkielety', ()=>szkielety(n,i));
  let h='<div class="egz kurs"><h3 class="egz-h">Все каркасы письма</h3><div class="egz-sub">Прочитай каждый каркас и проговори, что напишешь в каждом пункте.</div>';
  [...PISANIE.krotkie, ...PISANIE.dlugie].forEach(f=>{
    h+=`<div class="egz-ex"><div class="egz-hint">${esc(f.forma)} · ${esc(f.dlugosc)}</div><ul class="kurs-ul">${f.szkielet.map(s=>`<li>${s}</li>`).join('')}</ul></div>`;
  });
  el('contentWrap').innerHTML=h+'</div>';
  przycisk('Готово ✓', ()=>{ oznacz(n,i); dzienEkran(n); });
}

// ========================================================================
// ZADANIA ZEWNĘTRZNE, EGZAMINY PRÓBNE, WYNIKI
// ========================================================================
function zewn(t,n,i){
  wejdz('zewn:'+n+':'+i, ()=>zewn(t,n,i));
  const z=ZRODLA[t.zrodlo]||{};
  let h=`<div class="egz kurs"><div class="egz-ex"><div class="egz-hint">${esc(z.t||'Задание')}</div>
    <div class="kurs-cel">${esc(t.opis)}</div>`;
  if(z.link) h+=`<a class="egz-play" href="${z.link}" target="_blank" rel="noopener">Открыть: ${esc(z.l)}</a>`;
  else if(z.l) h+=`<div class="egz-note">${esc(z.l)}</div>`;
  if(t.zrodlo==='podcast') h+=`<div class="egz-note">Если Hello Polish уже слишком лёгкий — <a href="${ZRODLA.podcast2.link}" target="_blank" rel="noopener">Swojski Język Polski</a> (B1–B2).</div>`;
  if(t.zrodlo==='cert_mp3') h+=`<div class="egz-note">Если сайт не открывается с телефона — открой на компьютере. Транскрипции и ключи лежат на той же странице.</div>`;
  h+='</div></div>';
  el('contentWrap').innerHTML=h;
  przycisk('Сделано ✓', ()=>{ oznacz(n,i); dzienEkran(n); });
}

// Prawdziwe arkusze z sesji — Państwowa Komisja publikuje je z opóźnieniem
// (sesje 2024 r. pojawiły się w lutym 2025). Arkuszy z 2025–2026 jeszcze nie ma.
const CERT = 'https://certyfikatpolski.pl/wp-content/uploads/';
const ARCHIWUM = 'https://certyfikatpolski.pl/o-egzaminie/testy-egzaminacyjne-z-poprzednich-lat/';
const PROBNE = {
  1:{plik:'Сессия 4–5 февраля 2024', opis:'Настоящий экзамен B1 этой сессии',
     arkusz:CERT+'2025/02/4-5.02.2024-B1_arkusz_egzaminacyjny.pdf'},
  2:{plik:'Сессия 20–21 апреля 2024', opis:'Настоящий экзамен B1 этой сессии',
     arkusz:CERT+'2025/02/20-21.04.2024-B1_arkusz_egzaminacyjny.pdf',
     klucz:CERT+'2025/02/20-21.04.2024-B1_transkrypcja.pdf'},
  3:{plik:'Сессия 22–23 июня 2024', opis:'Самый свежий опубликованный экзамен B1',
     arkusz:CERT+'2025/02/22-23.06.2024-B1_arkusz_egzaminacyjny.pdf',
     klucz:CERT+'2025/02/22-23.06.2024-B1_transkrypcja.pdf'},
};
// Kolejne prawdziwe sesje — do dodatkowego treningu.
const SESJE = [
  ['24–25 июня 2023', '2025/07/2023_06_24_25_B1_arkusz_egzaminacyjny.pdf'],
  ['15–16 апреля 2023', '2025/07/2023_04_15_16_B1_arkusz_egzaminacyjny.pdf'],
  ['5–6 февраля 2023', '2025/07/2023_02_5_6_B1_arkusz_egzaminacyjny.pdf'],
  ['5–6 ноября 2022', '2026/01/2022.11.5-6_B1_Arkusz_egzaminacyjny.pdf'],
  ['25–26 июня 2022', '2026/01/2022.06.25-26_B1_Arkusz_egzaminacyjny.pdf', '2026/01/2022.06.25-26_B1_Transkrypcja_nagran.pdf'],
  ['26–27 марта 2022', '2026/01/2022.03.26-27_B1_Arkusz_egzaminacyjny.pdf'],
  ['6–7 февраля 2022', '2026/01/2022.02.6-7_B1_Arkusz_egzaminacyjny.pdf'],
];
const MODULY = [
  {k:'sl', n:'Rozumienie ze słuchu', min:30, max:30},
  {k:'cz', n:'Rozumienie tekstów pisanych', min:40, max:30},
  {k:'gr', n:'Poprawność gramatyczna', min:45, max:30},
  {k:'pi', n:'Pisanie', min:75, max:30},
  {k:'mo', n:'Mówienie — баллы по оценке Claude', min:15, max:40, ustny:true},
];
function probny(nr,n,i){
  wejdz('probny:'+nr, ()=>probny(nr,n,i));
  const P=PROBNE[nr];
  let h=`<div class="egz kurs"><div class="egz-ex"><div class="egz-hint">Пробный экзамен №${nr}</div>
    <h3 class="kurs-lh">${esc(P.plik)}</h3><div class="kurs-cel">${esc(P.opis)} — те самые задания, которые писали кандидаты. Лучше распечатать: на экзамене всё на бумаге.</div>
    <a class="egz-play" href="${P.arkusz}" target="_blank" rel="noopener">Экзаменационный лист (PDF)</a>
    ${P.klucz ? `<a class="egz-play" href="${P.klucz}" target="_blank" rel="noopener">Расшифровка аудио и ключ (PDF)</a>` : ''}
    <a class="egz-play" href="${ARCHIWUM}" target="_blank" rel="noopener">Аудио${P.klucz ? '' : ' и ключ'} — архив комиссии</a>
    <div class="egz-note">В архиве найди эту сессию: там «Plik dźwiękowy» (аудио) и «Transkrypcja nagrań» (расшифровка с ключом). Если сайт не открывается с телефона — открой на компьютере.</div>
    <h4 class="kurs-h4">Правила — как на настоящем экзамене</h4>
    <ul class="kurs-ul"><li>Без словаря, без телефона, без пауз внутри модуля.</li>
      <li>Аудио включай только по ходу модуля. Сколько раз слушать каждую запись, написано в задании.</li>
      <li>Между модулями — перерыв 10 минут, не больше.</li>
      <li>Письмо проверь в Claude (скопируй задание и свой текст) — он поставит баллы по критериям.</li>
      <li>Устную часть пройди завтра: задание «полная устная часть» в любом дне курса.</li></ul>
    <h4 class="kurs-h4">Таймер модулей — по порядку</h4>`;
  MODULY.filter(m=>!m.ustny).forEach(m=>{ h+=`<button class="egz-chip kurs-modbtn" onclick="KURS.stoperModul(${m.min},'${m.n}')">${m.n} · ${m.min} мин</button>`; });
  h+=`<div class="kurs-timer" id="kursTimer"></div></div>`;
  h+=`<div class="egz-ex"><div class="egz-hint">Ещё настоящие сессии — для тренировки</div>
    <div class="kurs-cel">Опубликованы все листы B1 с 2022 года. Аудио и ключи к ним — в <a href="${ARCHIWUM}" target="_blank" rel="noopener">архиве комиссии</a>.</div><ul class="kurs-ul">`;
  SESJE.forEach(s=>{ h+=`<li><a href="${CERT+s[1]}" target="_blank" rel="noopener">${s[0]}</a>${s[2] ? ` · <a href="${CERT+s[2]}" target="_blank" rel="noopener">ключ</a>` : ''}</li>`; });
  h+='</ul></div></div>';
  el('contentWrap').innerHTML=h;
  przycisk('Экзамен пройден ✓', ()=>{ oznacz(n,i); dzienEkran(n); });
}
function stoperModul(min,nazwa){ stoper(min*60, nazwa); }
function wynik(nr,n,i){
  wczytaj();
  wejdz('wynik:'+nr, ()=>wynik(nr,n,i));
  const z=S.probne[nr]||{};
  let h=`<div class="egz kurs"><div class="egz-ex"><div class="egz-hint">Баллы пробного экзамена №${nr}</div>
    <div class="kurs-cel">Впиши баллы за каждый модуль по ключу. Порог — 50% <b>в каждом</b> модуле, цель — 60% с запасом.</div>`;
  MODULY.forEach(m=>{ h+=`<label class="kurs-wynik"><span>${m.n}</span>
    <input type="number" inputmode="decimal" min="0" max="${m.max}" step="0.5" id="w_${m.k}" value="${z[m.k]??''}" class="egz-inp"> <span>/ ${m.max}</span></label>`; });
  h+=`<div id="kursWyniki"></div></div>`+historiaProbnych()+'</div>';
  el('contentWrap').innerHTML=h;
  przycisk('Сохранить ✓', ()=>{
    wczytaj(); const w={};
    MODULY.forEach(m=>{ const v=parseFloat(el('w_'+m.k).value.replace(',','.')); if(!isNaN(v)) w[m.k]=Math.min(m.max,Math.max(0,v)); });
    S.probne[nr]=w; zapisz(); oznacz(n,i); wynik(nr,n,i);
    przycisk('← День '+n, wrocDo(n));
  });
}
function historiaProbnych(){
  const nrs=Object.keys(S.probne).filter(k=>Object.keys(S.probne[k]).length);
  if(!nrs.length) return '';
  let h='<h3 class="egz-h">Результаты пробных экзаменов</h3>';
  nrs.forEach(nr=>{
    const w=S.probne[nr];
    h+=`<div class="egz-mod"><div class="egz-mod-top"><span class="egz-mod-n">Пробный №${nr}</span></div>`;
    MODULY.forEach(m=>{ if(w[m.k]===undefined) return; const p=Math.round(w[m.k]/m.max*100),
      c=p>=60?'var(--success)':(p>=50?'var(--gold)':'var(--error)');
      h+=`<div class="egz-mod-top" style="margin-top:6px"><span class="egz-note" style="margin:0">${m.n}</span><span class="egz-mod-p" style="color:${c}">${p}%</span></div>
        <div class="egz-bar"><div class="egz-bar-f" style="width:${p}%;background:${c}"></div><div class="egz-prog"></div></div>`; });
    h+='</div>';
  });
  return h;
}

// ---------- jak ćwiczyć z Claude ----------
function claudeInfo(){
  wejdz('claude', claudeInfo);
  el('contentWrap').innerHTML=`<div class="egz kurs"><div class="egz-ex">
    <div class="egz-hint">Claude как экзаменатор и проверяющий</div>
    <h4 class="kurs-h4">Устная часть голосом</h4>
    <ol class="kurs-ul"><li>В задании «Говорение» нажми «Скопировать задание для Claude».</li>
      <li>Приложение Claude → новый чат → вставь текст. Для описания фото прикрепи фотографию (скрепка).</li>
      <li>Отправь, затем нажми кнопку голосового режима справа от поля ввода.</li>
      <li>Отвечай вслух. Claude не перебивает и не исправляет до конца задания.</li>
      <li>В конце он по-русски разберёт ошибки. Перепиши 3–5 главных в заметки и повтори фразы правильно.</li></ol>
    <h4 class="kurs-h4">Письмо</h4>
    <ol class="kurs-ul"><li>Пиши в приложении, без словаря и без подсказок — как на экзамене.</li>
      <li>«Скопировать текст для проверки» — в буфер попадут задание, твой текст и критерии оценки.</li>
      <li>Вставь в Claude. Получишь баллы, исправленный текст и таблицу ошибок.</li>
      <li>Перепиши текст с исправлениями от руки — так ошибки запоминаются лучше всего.</li></ol>
    <h4 class="kurs-h4">Если что-то в курсе кажется ошибкой</h4>
    <div class="kurs-cel">Напиши в сессию Claude Code «Polski app»: номер урока и фразу. Я проверю и исправлю курс.</div>
  </div></div>`;
  przycisk('← День '+nrBiezacy(), ()=>dzienEkran());
}

// Jak przebiega egzamin — z rad egzaminatorów (Global School, Kraków) i relacji zdających.
function egzaminInfo(){
  wejdz('egzamin-info', egzaminInfo);
  el('contentWrap').innerHTML=`<div class="egz kurs"><div class="egz-ex">
    <div class="egz-hint">Как проходит экзамен — советы экзаменаторов</div>
    <h4 class="kurs-h4">Письменная часть · 75 минут · 30 баллов, порог 15</h4>
    <ul class="kurs-ul">
      <li>В бланке три набора (zestaw), в каждом короткое и длинное задание. Выбираешь <b>один набор целиком</b>, смешивать нельзя. Выбирай по длинному заданию: короткие формы — это шаблон.</li>
      <li>Объём: короткое около 30 слов, длинное 150–170, вместе около 200. Норма напечатана в задании. Допуск <b>±10%</b> (то есть 90–110%): меньше — снимают баллы за объём. Больше 110% — тоже теряешь баллы, а если написал <b>больше 120%</b>, остаток текста не читают. Один из экзаменаторов говорил, что дальше лимита не читают уже после 110%, так что безопаснее всего уложиться в допуск. Первое, что делает экзаменатор, — считает слова.</li>
      <li>Словами считаются предлоги и союзы (i, w, z), подпись, место и дата. Место и дату пиши коротко, одной строкой справа вверху: <i>Gdańsk, 17.10.2026 r.</i> Преподаватели считают такую запись за <b>2 слова</b> (приложение пока считает 3: «r.» отдельно). А «5 lipca 2025 roku» словами — уже 4 слова.</li>
      <li><b>Как центр считает слова</b> (методичка Lingua Nova): «2 psy» — 2 слова; «polsko-włoski» — 2; «2013» — 1; «2013 rok» — 2; «10x10x10 cm» — 1; «trzydziestolecie» — 1; «Pracuję od 15 V» — 4. Если работа начинается с тех же слов, что заглавие, эти слова не считаются.</li>
      <li>Пиши только польскими буквами (ą, ę, ł…) и <b>не печатными буквами</b>. Работа должна быть разбита на абзацы: вступление, развитие, заключение. Черновик (brudnopis) проверяют, только если ты указал, какую часть смотреть.</li>
      <li>Пример бюджета: открытка в 30 слов (pozdrowienia профессору) — место и дата 2 + обращение <i>Szanowny Panie Profesorze</i> 3 + основной текст 23 + имя и фамилия 2. Максимум с допуском — 33. В основном тексте три предложения: <i>Przesyłam serdeczne pozdrowienia z…</i> (назови всё, что требует задание), отношение (<i>Wszystko mi się podoba</i>), тёплая фраза (<i>Z sentymentem wspominam Pana lekcje</i>). Для e-mail и SMS места и даты нет, лишние слова добавь в основной текст.</li>
      <li>Чтобы не сбиться, ставь на полях точку каждые 20 слов.</li>
      <li>Время: короткое ~10 минут, длинное 30–45, остальное — перечитать и исправить ошибки.</li>
      <li><b>Пиши сразу набело</b>, на черновике только план. Ошибку аккуратно зачеркни. Карандаш и корректор запрещены — только ручка, синяя или чёрная.</li>
      <li>Не успел переписать из черновика — напиши в чистовике <i>Proszę o sprawdzenie dalszej części w brudnopisie</i> и чётко отметь кусок в черновике. Его обязаны проверить.</li>
      <li>Почерк тоже оценивают — тренируйся писать от руки.</li>
      <li>Оценка: выполнение задания 10, языковые средства 10, правильность 10.</li>
      <li><i>Esej</i> — рассуждение с аргументами, <i>opowiadanie</i> — рассказ с завязкой, кульминацией и неожиданной развязкой, <i>sprawozdanie</i> — хронологический отчёт, где ничего необычного не происходит. Esej не должен превращаться в opowiadanie.</li>
      <li>Если в начале написал <i>Szanowni Państwo</i>, дальше нельзя ты и «вы»: только Państwo, Pan, Pani. Не путай: <i>życzenia</i> — праздники, <i>gratulacje</i> — достижение, <i>pozdrowienia</i> — привет с отдыха, это не поздравление.</li>
      <li>Темы длинных текстов повторяются: путешествие, характеристика человека (шеф, коллеги, друг), работа и коллеги, книги и фильмы, переезд, плюсы и минусы, рассказ о своей стране и о Польше, весёлая история с неожиданной развязкой. Подготовь по тексту на каждую.</li></ul>
    <h4 class="kurs-h4">Обращение (zwrot do adresata) — пишется всегда, кроме ogłoszenie</h4>
    <ul class="kurs-ul">
      <li><b>К группе:</b> <i>Szanowni Państwo!</i> (компания, учреждение, мужчины и женщины), <i>Szanowne Panie! / Szanowni Panowie!</i>; <i>Drogie Koleżanki, Drodzy Koledzy!</i> (коллеги); <i>Drodzy Sąsiedzi! Drodzy Uczniowie!</i> (по названию группы); <i>Drodzy Nowożeńcy!</i>; <i>Moi Drodzy!</i> (друзья, есть мужчины), <i>Moje Drogie!</i> (только женщины).</li>
      <li><b>К одному человеку:</b> <i>Panie Piotrze! Pani Katarzyno!</i> (взрослый без титула, при тёплых отношениях можно <i>Drogi Panie Piotrze</i>); <i>Szanowny Panie Profesorze! Szanowna Pani Profesor!</i> (вуз); <i>Szanowny Panie Dyrektorze! Szanowna Pani Kierownik!</i> (начальник); <i>Kochana Ciociu, Babciu, Mamo!</i> (родные); <i>Drogi Piotrku! Droga Kasiu!</i> (друзья, звательный падеж!).</li>
      <li>В обращении все слова с большой буквы, оно стоит по центру (в e-mail и SMS — слева), занимает 2–3 слова.</li></ul>
    <h4 class="kurs-h4">Аудирование, чтение, грамматика</h4>
    <ul class="kurs-ul">
      <li><b>Аудирование:</b> <b>первая запись звучит только один раз</b>, остальные по условию задания. В записи бывает, что последняя фраза переворачивает смысл сказанного. Не отмечай ответ, пока не дослушал до конца.</li>
      <li><b>Чтение:</b> есть задание «соотнеси заголовок и предложение». К одному заголовку подходит сразу несколько предложений — смотри, чтобы подходило <i>единственное</i> лучшее, и не трать на него всё время.</li>
      <li><b>Грамматика:</b> задание «переделай предложение со словом в скобках» даёт около 15% теста. Это стоит отработать: сохрани смысл, не менять лишнего, обычно нужен один дополнительный предлог или падеж.</li>
      <li>Вопросительное слово: если речь о <i>конкретном</i> предмете, который известен обоим, нужно <i>który</i>, а не <i>jaki</i> (<i>Z którego swetra…</i>).</li>
      <li>Читай задание внимательно. Повтори прошедшее время, степени сравнения (<i>-ej</i> у наречий, <i>-szy / -ejszy</i> у прилагательных) и согласование: <i>mały dom — małe domy</i>, <i>niski człowiek — niscy ludzie</i>.</li>
      <li>Режим подготовки: каждый день один раздел одного настоящего теста прошлых лет (сегодня аудирование, завтра чтение, потом грамматика), потом второй круг. На втором круге прогресс заметен.</li></ul>
    <h4 class="kurs-h4">Устная часть · 15–20 минут · 40 баллов, порог 20</h4>
    <ul class="kurs-ul">
      <li>Тянешь вслепую один из трёх листков: фото, монолог, диалог. На подготовку 4–6 минут. <b>Можно делать заметки</b> и подглядывать в них во время ответа.</li>
      <li>Сначала разминка: <i>Skąd Pan jest? Jak długo mieszka Pan w Polsce? Po co Panu ten egzamin?</i> Отвечай как есть, двумя-тремя фразами. Ответы Ивана — переделай под себя:
        <i>Jestem z Rosji, z Petersburga. W Polsce mieszkam od trzech lat, w Gdańsku. Chcę zostać tu na stałe i certyfikat jest mi potrzebny do dokumentów. Poza tym chcę swobodnie rozmawiać z kolegami w pracy.</i></li>
      <li>Предложат выбрать, с чего начать, — начинай с самого трудного для себя задания и закончи сильным. Не предложат — начинай с фото.</li>
      <li>На задание 3–4 минуты. Ушёл от темы — скажут «dziękuję» и перейдут дальше.</li>
      <li>Фото: от общего к деталям — ситуация → люди (одежда, что делают, эмоции) → место → детали → атмосфера и своё мнение. Догадки: <i>chyba, prawdopodobnie, wydaje mi się</i>.</li>
      <li>В монологе экзаменаторы вопросов не задают: говоришь сам по теме. Если не понял вопрос в диалоге, никто его не объяснит, но попросить повторить можно (<i>Czy mógłby Pan powtórzyć?</i>).</li>
      <li>В диалоге бывают роли: член семьи, работодатель, учитель, ученик, клиент, пациент. С коллегой и другом обращайся к экзаменатору на «ты» и поддерживай разговор словами <i>acha, rozumiem</i>; в официальной ситуации — <i>Proszę Pana / Pani</i>, <i>Byłbym wdzięczny za pomoc</i>.</li>
      <li>Монолог: вступление → развитие → вывод. Бывает трёх видов: мнение о социальной теме, «расскажи о…» и выбор из двух вариантов. Монологи на мнение и выбор с примерами ответов:
        <ul>${Object.keys(KURS_TEMATY).flatMap(t=>dodatkowe(KURS_TEMATY[t],'monolog').map(k=>`<li><a href="#" onclick="KURS.mowa('${t}','${k}',null,null);return false">${esc(KURS_TEMATY[t][k].temat)}</a></li>`)).join('')}</ul></li>
      <li>Диалог: будь активным — начинай сам, задавай вопросы. Выполни <b>каждый пункт</b> задания: пропустишь — решат, что не понял. Ещё ситуации:
        <ul>${Object.keys(KURS_TEMATY).flatMap(t=>dodatkowe(KURS_TEMATY[t],'sytuacja').map(k=>`<li><a href="#" onclick="KURS.mowa('${t}','${k}',null,null);return false">${esc(KURS_TEMATY[t][k].polecenie.split('. ')[0])}</a></li>`)).join('')}</ul></li>
      <li>На диалог оставь больше всего времени. Последний обязательный пункт — приглашение и договорённость (день, время, место, обмен контактами): до него легко не дойти, если увлечься вопросами о подробностях. Экзаменатор там часто создаёт препятствие («в этот день не могу»): предложи другой день.</li>
      <li>Официальный лист: «до 15 минут», перед ответом около 5 минут на подготовку, экзамен начинается с короткой беседы с комиссией. Три задания можно делать в любом порядке. Члены комиссии могут задавать вопросы во время ответа.</li>
      <li>Тренировка: один зестав = 15 минут (по 5 на фото, монолог и диалог), включи диктофон. Чем больше зестав, тем лучше. Потом можно прослушать запись или дать её проверить. Цель — снять стресс и довести до автоматизма.</li>
      <li><b>Не молчи.</b> Кто молчит, не сдаёт.</li>
      <li>Баллы: выполнение заданий — фото 7, монолог 7, диалог 6 (вместе это уже порог). Плюс грамматика 8, лексика 8, произношение 4. Экзаменаторов несколько, они делают пометки — это нормально.</li></ul>
    <h4 class="kurs-h4">Что было на настоящих экзаменах (июнь 2026, рассказы сдававших)</h4>
    <ul class="kurs-ul">
      <li><b>Письмо, короткие формы:</b> приглашение директору школы на окончание курсов; поздравление коллеге с <i>imieniny</i>; открытка соседу из отпуска с благодарностью за уход за цветами.</li>
      <li><b>Письмо, длинные формы:</b> характеристика шефа и коллег и e-mail подруге; эссе «как вы проводите свободное время»; отчёт о кулинарном или музыкальном мастер-классе.</li>
      <li><b>Фото:</b> люди в офисе; семья разговаривает по ноутбуку; люди в кафе (двое девушек и парень едят бургеры); туристы в горах; приём у врача.</li>
      <li><b>Монолог:</b> дом или квартира, где хотел бы жить; стоит ли пользоваться городскими велосипедами; как заботиться об окружающей среде; место мечты для поездки; что бы ты сделал, выиграв миллион злотых.</li>
      <li><b>Диалог:</b> заказать столик в ресторане; успокоить подругу перед экзаменом; сообщить о потере багажа; заявить в полицию о краже телефона (описать его и назвать номер); пожаловаться подруге на плохой опыт в ресторане.</li>
      <li>На все эти темы в приложении есть образцы (в «Примерах сочинений» и в «Ещё вариант» на экранах говорения). Из других сессий и учебных наборов: фото в кафе; e-mail с просьбой о проекте ремонта комнаты; рассказ «Tajemnica starego domu»; приглашение коллегам на фотовыставку; объявление о поиске музыкантов в группу; письмо с поздравлением знакомому, защитившему докторскую; отчёт о первом дне на новой работе; e-mail двоюродному брату из нового города. Диалоги из методички центра: сломалась машина, холодильник, заказ ресторана для корпоратива, уговорить друга лететь.</li></ul>
    <button class="egz-play" onclick="KURS.tematyMonologow()">Банк тем для монолога (около 70)</button>
    <h4 class="kurs-h4">День экзамена · 5–6 декабря</h4>
    <ul class="kurs-ul">
      <li>С собой: паспорт или карта побыту, ручка (синяя или чёрная), вода, еда, что-то сладкое, таблетка от головной боли.</li>
      <li><b>Телефон и смарт-часы</b> сдай или выключи полностью. Если зазвонит или увидят гаджет — экзамен закончен.</li>
      <li>Письменные модули идут подряд: аудирование, чтение, грамматика, письмо. Береги силы: письмо последнее и самое тяжёлое.</li>
      <li>Устная часть обычно на следующий день. Иногда центр разрешает сдать её в тот же день — смотри письмо от центра.</li>
      <li>Результатов ждать долго: работы проверяют в центре, а потом ещё в Варшаве. По методичке центра результат приходит примерно через 3 месяца, сертификат ещё через месяц.</li>
      <li>Телефоны и личные вещи можно забрать после письменной части. Запомни свой номер кандидата: его дают по алфавиту и присылают на почту.</li>
      <li>Пример расписания письменной части (центр в Щецине, 17.10.2026): регистрация 9:00–10:00, аудирование 10:00–10:30, чтение 10:40–11:20, грамматика 11:30–12:15, письмо 12:25–13:40. На устную часть приходи за 30 минут до своего времени. Свои точные часы жди письмом от центра за две недели до экзамена.</li></ul>
    <details class="wz-bohater"><summary>Структура и обороты для каждой формы</summary><ul class="kurs-ul">
      <li><b>Характеристика:</b> вступление (кто это, откуда знаю) → внешность, характер, интересы, достоинства и недостатки → итог (почему этот человек важен). <i>Jego największą zaletą jest…, Zawsze mogę na niego liczyć.</i></li>
      <li><b>Описание:</b> сначала общее (имя, возраст, профессия), потом детали (рост, волосы, одежда, особые приметы, поведение) → оценка.</li>
      <li><b>Opowiadanie:</b> когда и где → что произошло (<i>Najpierw… Kiedy… Nagle… Potem… Wówczas…</i>) → чем кончилось (<i>Na szczęście wszystko się dobrze skończyło! Nigdy nie zapomnę tego dnia.</i>). Первое лицо, прошедшее время.</li>
      <li><b>Sprawozdanie:</b> что, когда, где, кто участвовал, цель → хронологически (<i>Na początku… Następnie… Na koniec…, Przed obiadem / po spektaklu, Ponad pół godziny trwało…</i>) → оценка (<i>Moim zdaniem…</i>).</li>
      <li><b>Recenzja:</b> название, жанр, режиссёр или автор, премьера → сюжет без концовки, герои, игра актёров, музыка → итог и рекомендация (<i>Zachęcam do obejrzenia, Nie polecam nikomu tego filmu</i>).</li>
      <li><b>Esej:</b> тезис → минимум три аргумента, примеры в начале → вывод: повтори тезис, но <i>другими словами</i>. <i>Z mojego punktu widzenia…, Muszę przyznać, że…, Dlatego też…, Na zakończenie…</i></li>
      <li><b>Неофициальное письмо:</b> поблагодари за письмо или извинись, что долго не писал → содержание → предложи встречу, спроси, что слышно, попроси ответить. Прощание: <i>Całuję, Ucałowania, Buziaki, Pozdrawiam</i>; в официальном: <i>Z wyrazami szacunku, Z poważaniem, Łączę wyrazy szacunku</i>.</li></ul></details>
  </div></div>`;
  przycisk('← День '+nrBiezacy(), ()=>dzienEkran());
}

// Bank pytań do monologu — do ćwiczenia głosem z Claude lub samodzielnie z timerem.
const BANK_TEMATOW = [
  ['Rodzina i ludzie', [
    'Jakie znaczenie ma dla Pana rodzina? Proszę uzasadnić.',
    'Proszę opowiedzieć o jednym z członków rodziny i opisać jego cechy charakteru.',
    'Proszę opisać ostatnie rodzinne święto, w którym Pan uczestniczył.',
    'Proszę opowiedzieć śmieszną historię o Pana rodzinie.',
    'Proszę scharakteryzować swojego najlepszego przyjaciela.',
    'Kto jest dla Pana autorytetem? Proszę opisać tę osobę.',
    'Jakie cechy charakteru są według Pana najważniejsze?',
    'Czy charakter można kształtować i zmieniać?',
    'Czy ubranie dużo mówi o człowieku?']],
  ['Mieszkanie i miasto', [
    'Własne mieszkanie czy wynajem? Co Panu bardziej odpowiada?',
    'Czy woli Pan mieszkać w domu czy w bloku?',
    'Czy woli Pan kawalerkę czy mieszkanie wielopokojowe?',
    'Jak wyglądałoby mieszkanie Pana marzeń?',
    'Czy woli Pan duże miasto czy małą miejscowość?',
    'Jakie jest Pana ulubione miasto? Proszę je opisać.',
    'Jakie miejsca i zabytki swojego miasta może Pan polecić do zwiedzania?',
    'Czy starówki i centra miast powinny być zamknięte dla samochodów?',
    'Czy jazda rowerem jest dobrym sposobem na poruszanie się po mieście?',
    'Jaki środek transportu wybiera Pan najczęściej? Dlaczego?']],
  ['Praca i nauka', [
    'Jak wygląda Pana idealna praca?',
    'Jaka powinna być praca, żeby była dla Pana przyjemna?',
    'Jakie są wady i zalety pracy zdalnej? Proszę podać kilka przykładów.',
    'Jaka była Pana pierwsza praca w życiu?',
    'Czy praca odgrywa najważniejszą rolę w naszym życiu? Dlaczego?',
    'Jakie sposoby poszukiwania pracy Pan zna?',
    'Jakim powinien być idealny kierownik?',
    'Jaki jest Pana ulubiony przedmiot szkolny? Dlaczego?',
    'Czy według Pana znajomość języków obcych pomaga w życiu?',
    'Jakie kierunki studiów i zawody warto dziś wybierać?']],
  ['Czas wolny, sport, zdrowie', [
    'Jakie ma Pan zainteresowania i hobby?',
    'Z kim woli Pan spędzać czas wolny: z rodziną, przyjaciółmi czy samotnie?',
    'Jak można zagospodarować czas wolny?',
    'Czy woli Pan kino czy teatr? Dlaczego?',
    'Czy woli Pan rozrywki tradycyjne czy online?',
    'Jak ważną rolę odgrywa sport w Pana kraju?',
    'Czy zgadza się Pan z tym, że sport to zdrowie?',
    'Jak Pan dba o zdrowie i samopoczucie?',
    'Czy stres ma silny wpływ na Pana? Jak sobie z nim radzić?',
    'Co może wyprowadzić Pana z równowagi? Jak Pan tego unika?',
    'Dlaczego warto się szczepić? Jakie obawy są z tym związane?']],
  ['Podróże i wakacje', [
    'Jak wyglądają dla Pana idealne wakacje?',
    'Wakacje letnie czy zimowe? Proszę uzasadnić.',
    'Odpoczynek nad morzem czy w górach?',
    'Odpoczynek w mieście czy blisko natury?',
    'Co woli Pan mieć ze sobą w podróży: walizkę czy plecak?',
    'Czy korzysta Pan z usług biura podróży, czy woli sam planować wyjazd?',
    'Czy woli Pan pokój w hotelu czy nocleg pod namiotem?',
    'Jakie trzy rzeczy wziąłby Pan ze sobą na bezludną wyspę?']],
  ['Jedzenie i zakupy', [
    'Jaka jest Pana ulubiona kuchnia narodowa? Jakie potrawy z niej Pan preferuje?',
    'Jakie jest Pana ulubione danie? Proszę podać przepis.',
    'Co Pan najczęściej je i czego unika w swojej diecie?',
    'Czy zgadza się Pan z twierdzeniem, że człowiek jest tym, co je?',
    'Czy woli Pan robić zakupy w sklepie czy na targowisku?',
    'Jakie są wady i zalety zakupów online?',
    'Czy reklama wpływa na Pana? Czy często kupuje Pan reklamowane produkty?',
    'Czy w niedzielę sklepy powinny być otwarte czy zamknięte?']],
  ['Technologie, media, społeczeństwo', [
    'Czy telefon odgrywa ważną rolę w naszym życiu?',
    'Jaka jest rola technologii w naszym życiu?',
    'Czy woli Pan laptop czy komputer stacjonarny?',
    'Z jakich źródeł czerpie Pan codzienne informacje i wiadomości?',
    'Czy pieniądze są najważniejszym elementem naszego życia?',
    'Jak dba Pan o środowisko naturalne?',
    'Czy biblioteki nadal są potrzebne ludziom?',
    'Jakie plany na przyszłość mają młodzi ludzie w Pana kraju?',
    'Jak widzi Pan swoją przyszłość za dziesięć lat?',
    'Czy pies to najlepszy przyjaciel człowieka?']],
];
function tematyMonologow(){
  wejdz('tematy-monologow', tematyMonologow);
  const wszystkie = BANK_TEMATOW.flatMap(g=>g[1]);
  let h=`<div class="egz kurs"><div class="egz-ex">
    <div class="egz-hint">Банк тем для монолога · ${wszystkie.length} вопросов</div>
    <div class="kurs-cel">Нажми «Случайная тема» и говори 2–3 минуты по плану: вступление → аргументы с примерами из жизни → вывод. Или скопируй тему в Claude и говори голосом.</div>
    <div class="kurs-karta" id="kursLosTemat" style="min-height:64px"><div class="kurs-karta-t">Нажми кнопку ниже</div></div>
    <div class="wz-akcje"><button class="egz-chip" onclick="KURS.losujTemat()">Случайная тема</button>
      <button class="egz-chip" onclick="KURS.stoper(180,'Монолог')">Засечь 3 минуты</button></div>
    <div class="kurs-timer" id="kursTimer"></div>`;
  BANK_TEMATOW.forEach(([nazwa,lista])=>{
    h+=`<details class="wz-bohater"><summary>${esc(nazwa)} · ${lista.length}</summary><ul class="kurs-ul">${lista.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></details>`; });
  h+='</div></div>';
  el('contentWrap').innerHTML=h;
  przycisk('← Назад', ()=>goBack());
}
function losujTemat(){
  const w = BANK_TEMATOW.flatMap(g=>g[1]);
  const t = w[Math.floor(Math.random()*w.length)];
  const k = el('kursLosTemat'); if(k) k.innerHTML = `<div class="kurs-karta-n">Monolog</div><div class="kurs-karta-t">${esc(t)}</div>`;
}

// ---------- karta na ekranie głównym aplikacji ----------
function kartaGlowna(){
  wczytaj();
  const n=nrBiezacy(), p=dzien(n), {ile,wszystkie}=postep(n);
  const przed = dzisISO() < KURS_START;
  return {n, tytul:p.tytul, opis: przed ? 'Старт завтра, 6 октября' : (ile+' из '+wszystkie+' заданий')};
}

// Zwroty do egzaminu ustnego — słownik egzaminu bierze je stąd, żeby nie
// trzymać dwóch kopii.
const ZW = {opis:ZW_OPIS, monolog:ZW_MONOLOG, sytuacja:ZW_SYTUACJA, ratunek:ZW_RATUNEK};

return { dzien:dzienEkran, dalej:dalejDzien, mapa, otworz, przelacz, lekcja, cwiczenia, slowa, slowaCram, mowa, pisanie, mow,
  kopiujMowe, kopiujPrace, licz, znak, stoper, stoperModul, claudeInfo, egzaminInfo, tematyMonologow, losujTemat, kartaGlowna, nrDzisiaj, nrBiezacy, ZW };
})();
