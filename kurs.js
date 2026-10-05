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
function oznacz(n,i,wart=true){ wczytaj(); zrob(n)[i]=wart; zapisz(); }

const DNI_TYG = ['niedziela','poniedziałek','wtorek','środa','czwartek','piątek','sobota'];
const MIES = ['stycznia','lutego','marca','kwietnia','maja','czerwca','lipca','sierpnia','września','października','listopada','grudnia'];
function dataPL(iso){ const d=new Date(iso+'T12:00:00'); return DNI_TYG[d.getDay()]+', '+d.getDate()+' '+MIES[d.getMonth()]; }

// ---------- opisy zadań ----------
const IKONY = {lekcja:'egz-book', slowa:'egz-pen', mowa:'egz-ear', egz:'egz-target', pisanie:'egz-pen',
  powtorka:'egz-bolt', bledy:'egz-bolt', fiszki:'egz-book', zewn:'egz-ear', probny:'egz-target', wynik:'egz-check'};
const MOWA_NAZWA = {monolog:'монолог', sytuacja:'ролевая ситуация', opis_osoby:'описание человека',
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
  if(!n) n = nrDzisiaj();
  const p = dzien(n), dzisN = nrDzisiaj(), zr = S.zrob['d'+n]||{};
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
  if(n!==dzisN && !przedStartem) h+=`<div class="egz-uwaga">Ты смотришь ${n<dzisN?'прошедший':'будущий'} день. Сегодня — день ${dzisN}.</div>`;

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

  h+=`<div class="kurs-nav">
    ${n>1?`<button class="egz-chip" onclick="KURS.dzien(${n-1})">← День ${n-1}</button>`:'<span></span>'}
    <button class="egz-chip" onclick="KURS.mapa()">Карта курса</button>
    ${n<60?`<button class="egz-chip" onclick="KURS.dzien(${n+1})">День ${n+1} →</button>`:'<span></span>'}
  </div>`;
  h+=`<div class="egz-card" onclick="KURS.claudeInfo()"><div class="egz-ico">${ik('egz-ear')}</div>
    <div class="egz-body"><div class="egz-t">Как заниматься с Claude</div><div class="egz-d">Говорение голосом и проверка письма</div></div><div class="egz-meta">→</div></div>`;
  h+='</div>';
  el('contentWrap').innerHTML=h;
  el('progressStrip').innerHTML='';
  V.dzien = n;
  const pierwsze = p.zadania.findIndex((_,i)=>!zr[i]);
  if(pierwsze>=0) przycisk('Начать: '+krotka(p.zadania[pierwsze]), ()=>otworz(n,pierwsze));
  else przycisk(n<60?'День выполнен. Дальше →':'Курс пройден!', ()=>{ if(n<60) dzienEkran(n+1); });
  window.scrollTo(0,0);
}
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
function przelacz(n,i){ wczytaj(); const z=zrob(n); z[i]=!z[i]; zapisz(); dzienEkran(n); }

const V = {};
function ik(id){ return '<svg class="egz-i"><use href="#'+id+'"/></svg>'; }
function przycisk(txt,fn,wyl){ const b=el('mainBtn'); if(!b) return; b.textContent=txt; b.disabled=!!wyl; b.onclick=fn||null; }
function wrocDo(n){ return ()=>dzienEkran(n); }

// ---------- mapa kursu ----------
function mapa(){
  wczytaj();
  const dz = nrDzisiaj();
  let h='<div class="egz kurs"><h3 class="egz-h">Карта курса</h3>';
  h+='<div class="egz-sub">60 дней в три фазы: фундамент (вся грамматика B1), экзаменационный формат, финиш. Нажми на день.</div>';
  let faza='';
  KURS_PLAN.forEach(p=>{
    if(p.faza!==faza){ faza=p.faza; h+=`<h3 class="egz-h">${{Fundament:'Фаза 1 · Фундамент',Egzamin:'Фаза 2 · Экзамен',Finisz:'Фаза 3 · Финиш'}[faza]}</h3>`; }
    const {ile,wszystkie}=postep(p.d), pelny=ile===wszystkie;
    const cls = p.d===dz?'kurs-dzis':(pelny?'egz-done':'');
    h+=`<div class="egz-card ${cls}" onclick="KURS.dzien(${p.d})">
      <div class="kurs-nr">${p.d}</div>
      <div class="egz-body"><div class="egz-t">${esc(p.tytul)}</div><div class="egz-d">${dataPL(p.data)}</div></div>
      <div class="egz-meta">${pelny?'✓':(ile?ile+'/'+wszystkie:'')}</div></div>`;
  });
  h+='</div>';
  el('contentWrap').innerHTML=h;
  przycisk('← Сегодня', ()=>dzienEkran());
  setTimeout(()=>{ const c=document.querySelector('.kurs-dzis'); if(c) c.scrollIntoView({block:'center'}); },50);
}

// ---------- otwieranie zadania ----------
function otworz(n,i){
  const t = dzien(n).zadania[i];
  V.dzien=n; V.zad=i;
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
  window.scrollTo(0,0);
  przycisk(`Упражнения (${L.cwiczenia.length}) →`, ()=>cwiczenia(id, n, i));
}
function cwiczenia(id, n, i){
  const L = KURS_LEKCJE[id];
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
let F = null;
function slowa(id, n, i){
  wczytaj();
  const T = KURS_TEMATY[id];
  if(!T) return komunikat('Эта тема ещё в подготовке.', n);
  const znane = new Set((S.slowa[id]||{}).znam||[]);
  let h=`<div class="egz kurs"><div class="egz-ex">
    <div class="egz-hint">Тема · ${esc(T.blok)}</div><h3 class="kurs-lh">${esc(T.tytul)}</h3>
    <div class="kurs-cel">${esc(T.ru)}. Слова, без которых не обойтись в устной части и письме на эту тему.</div>
    <div class="egz-note">Знаю: ${znane.size} из ${T.slowa.length}. Нажми на слово — услышишь произношение.</div>
    <div class="kurs-slowa">`;
  T.slowa.forEach(([pl,ru],k)=>{
    h+=`<div class="kurs-sl ${znane.has(k)?'kurs-zn':''}"><span class="kurs-pl" onclick="KURS.mow(this.textContent)">${pl}</span><span class="kurs-ru">${ru}</span></div>`;
  });
  h+='</div>';
  if(T.zwroty && T.zwroty.length){
    h+='<h4 class="kurs-h4">Готовые фразы</h4><div class="kurs-przyklady">';
    T.zwroty.forEach(([pl,ru])=>h+=`<div class="kurs-pr"><span class="kurs-pl" onclick="KURS.mow(this.textContent)">${pl}</span><span class="kurs-ru">${ru}</span></div>`);
    h+='</div>';
  }
  h+='</div></div>';
  el('contentWrap').innerHTML=h;
  window.scrollTo(0,0);
  przycisk('Карточки: польский → русский →', ()=>fiszkiStart(id,n,i));
}
function fiszkiStart(id,n,i){
  wczytaj();
  const T=KURS_TEMATY[id], znane=new Set((S.slowa[id]||{}).znam||[]);
  let kolejka = T.slowa.map((_,k)=>k).filter(k=>!znane.has(k));
  if(!kolejka.length) kolejka = T.slowa.map((_,k)=>k);
  F={id,n,i,kolejka:mix(kolejka),poz:0,odkryta:false,znam:new Set(znane),runda:1};
  fiszka();
}
function fiszka(){
  const T=KURS_TEMATY[F.id];
  if(F.poz>=F.kolejka.length){
    const zostalo = T.slowa.map((_,k)=>k).filter(k=>!F.znam.has(k));
    wczytaj(); S.slowa[F.id]={znam:[...F.znam],data:dzisISO()}; zapisz();
    if(!zostalo.length || F.runda>=3){
      if(F.n) oznacz(F.n,F.i);
      el('contentWrap').innerHTML=`<div class="egz kurs"><div class="egz-ex" style="text-align:center">
        <div class="egz-big" style="color:var(--success)">${F.znam.size}/${T.slowa.length}</div>
        <div class="egz-sub" style="font-size:14px">${zostalo.length?'Оставшиеся '+zostalo.length+' слов вернутся при следующем открытии темы.':'Все слова темы знаешь.'}</div></div></div>`;
      return przycisk(F.n?'← День '+F.n:'Готово', F.n?wrocDo(F.n):null);
    }
    F.kolejka=mix(zostalo); F.poz=0; F.runda++;
  }
  const k=F.kolejka[F.poz], [pl,ru]=T.slowa[k];
  el('contentWrap').innerHTML=`<div class="egz kurs">
    <div class="egz-note">Круг ${F.runda} · ${F.poz+1} из ${F.kolejka.length} · знаю ${F.znam.size}/${T.slowa.length}</div>
    <div class="kurs-fiszka" onclick="KURS.odkryj()">
      <div class="kurs-fpl">${pl}</div>
      ${F.odkryta?`<div class="kurs-fru">${ru}</div>`:'<div class="egz-note">нажми, чтобы увидеть перевод</div>'}
    </div>
    ${F.odkryta?`<div class="kurs-fbtn"><button class="egz-tn egz-no" onclick="KURS.ocen(false)">Ещё не знаю</button>
      <button class="egz-tn egz-ok" onclick="KURS.ocen(true)">Знаю</button></div>`:''}
  </div>`;
  if(!F.odkryta) mow(pl.replace(/\(.*?\)/g,''));
  przycisk(F.odkryta?'Выбери: знаю / ещё не знаю':'Показать перевод', F.odkryta?null:odkryj, F.odkryta);
}
function odkryj(){ if(!F) return; F.odkryta=true; fiszka(); }
function ocen(znam){ const k=F.kolejka[F.poz]; if(znam) F.znam.add(k); else F.znam.delete(k); F.poz++; F.odkryta=false; fiszka(); }

// ---------- synteza mowy ----------
let glos=null;
function szukajGlosu(){ if(!('speechSynthesis' in window)) return;
  glos = speechSynthesis.getVoices().find(v=>v.lang && v.lang.toLowerCase().startsWith('pl')) || null; }
if('speechSynthesis' in window){ speechSynthesis.addEventListener('voiceschanged', szukajGlosu); szukajGlosu(); }
function mow(txt){
  if(!('speechSynthesis' in window)) return;
  if(!glos) szukajGlosu();
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(String(txt).replace(/[—–]/g,',').trim());
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
  ['Na drugim planie / w tle jest…','На заднем плане / на фоне есть…'],
  ['Z lewej strony… / Z prawej strony…','Слева… / Справа…'],
  ['Pośrodku / w rogu zdjęcia…','Посередине / в углу фотографии…'],
  ['Ta kobieta ma na sobie…','Эта женщина одета в…'],
  ['Wydaje mi się, że to jest rodzina.','Мне кажется, это семья.'],
  ['Chyba / prawdopodobnie jest lato.','Наверное / вероятно, сейчас лето.'],
  ['Wygląda na to, że oni świetnie się bawią.','Похоже, они отлично проводят время.'],
  ['Atmosfera jest spokojna i wesoła.','Атмосфера спокойная и весёлая.'],
];
const ZW_MONOLOG = [
  ['Na początku powiem o…','Сначала скажу о…'],
  ['Najpierw opiszę…','Сначала опишу…'],
  ['Muszę też powiedzieć, że…','Должен также сказать, что…'],
  ['Kolejną sprawą, o której chcę powiedzieć, jest…','Следующее, о чём хочу сказать, — это…'],
  ['Uważam, że… / Moim zdaniem…','Считаю, что… / По-моему…'],
  ['Na przykład…','Например…'],
  ['Chcę jeszcze dodać, że…','Хочу ещё добавить, что…'],
  ['Na końcu mogę stwierdzić, że…','В конце могу сказать, что…'],
];
const ZW_SYTUACJA = [
  ['Przepraszam, czy mogę o coś zapytać?','Извините, можно спросить?'],
  ['Chciałbym / Chciałabym zapytać o…','Я хотел(а) бы спросить о…'],
  ['Czy mógłby Pan powtórzyć? / Czy mogłaby Pani powtórzyć?','Не могли бы вы повторить?'],
  ['Czy dobrze rozumiem, że…?','Правильно ли я понимаю, что…?'],
  ['Proponuję, żebyśmy…','Предлагаю, чтобы мы…'],
  ['Może lepiej…?','Может, лучше…?'],
  ['Zgadzam się. / Niestety, nie mogę, bo…','Согласен. / К сожалению, не могу, потому что…'],
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
  V.mowa={id,co,n,i};
  let h='<div class="egz kurs"><div class="egz-ex">';
  h+=`<div class="egz-hint">Говорение · ${MOWA_NAZWA[co]||co}</div>`;

  if(co==='opis_frazy'){
    h+=`<h3 class="kurs-lh">Обороты для всех трёх заданий</h3>
      <div class="kurs-cel">Прочитай вслух каждую фразу два раза. Нажми — синтезатор произнесёт.</div>
      <h4 class="kurs-h4">Задание 1 — описание фотографии</h4>${lista(ZW_OPIS)}
      <h4 class="kurs-h4">Задание 2 — монолог</h4>${lista(ZW_MONOLOG)}
      <h4 class="kurs-h4">Задание 3 — ситуация</h4>${lista(ZW_SYTUACJA)}
      <h4 class="kurs-h4">Если забыл слово</h4>${lista(ZW_RATUNEK)}`;
    h+='</div></div>';
    el('contentWrap').innerHTML=h; window.scrollTo(0,0);
    return przycisk('Готово ✓', ()=>{ oznacz(n,i); dzienEkran(n); });
  }

  const M=T.monolog, Y=T.sytuacja;
  if(co==='monolog' || co==='opis_osoby'){
    const mm = (co==='opis_osoby' && T.opis_osoby) ? T.opis_osoby : M;
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
  else if(co==='sytuacja'){
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
        <li>Время года, погода, атмосфера, твоё предположение: chyba, wydaje mi się.</li></ol>
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

  h+=`<h4 class="kurs-h4">Тренировка с Claude голосом</h4>
    <ol class="kurs-ul kurs-kroki">
      <li>Нажми «Скопировать задание для Claude».</li>
      <li>Открой приложение Claude → новый чат → вставь текст${co==='pelny'||co==='ilustracja'?' и прикрепи фотографию':''} → отправь.</li>
      <li>Нажми кнопку голосового режима и отвечай вслух.</li>
      <li>В конце Claude по-русски разберёт ошибки. Самые важные выпиши.</li></ol>
    <button class="egz-play" onclick="KURS.kopiujMowe()">Скопировать задание для Claude</button>
    <div class="kurs-timer" id="kursTimer"><button class="egz-chip" onclick="KURS.stoper(180)">Засечь 3 минуты для себя</button></div>
  </div></div>`;
  el('contentWrap').innerHTML=h; window.scrollTo(0,0);
  przycisk('Готово ✓', ()=>{ oznacz(n,i); dzienEkran(n); });
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
const PROMPT_OCENA = `Когда я закончу, выйди из роли и ответь по-русски:
1. Оценка по критериям экзамена (каждый 0–5): выполнение задания, словарный запас, грамматическая правильность, беглость и произношение.
2. 5–10 моих ошибок таблицей: что я сказал → как правильно → почему (падеж, окончание, вид глагола, предлог).
3. 3 готовые польские фразы, которые сделали бы мой ответ сильнее.`;

function promptMowa(T, co){
  const M=T.monolog, Y=T.sytuacja;
  if(co==='monolog' || co==='opis_osoby'){
    const mm=(co==='opis_osoby'&&T.opis_osoby)?T.opis_osoby:M;
    return `${PROMPT_WSTEP}

Сегодня только задание 2 — монолог.
Temat: «${mm.temat}»
Я говорю 2–3 минуты. Если замолкаю — задавай вопросы из этого списка (по одному):
${mm.pytania.map(x=>'— '+x).join('\n')}

${PROMPT_OCENA}

Начни: поздоровайся и дай мне тему.`;
  }
  if(co==='sytuacja'){
    return `${PROMPT_WSTEP}

Сегодня только задание 3 — ситуация.
Polecenie dla zdającego: «${Y.polecenie}»
Ты играешь роль: ${Y.rola_on}. Я играю: ${Y.rola_ja}.
Веди диалог 3–4 минуты: реагируй на мои слова, задавай уточняющие вопросы, создай одно небольшое осложнение (например, нужной вещи нет, время не подходит), чтобы мне пришлось договариваться.

${PROMPT_OCENA}

Начни: прочитай мне polecenie по-польски и начни разговор в своей роли.`;
  }
  if(co==='ilustracja'){
    return `${PROMPT_WSTEP}

Сегодня только задание 1 — описание фотографии (я прикрепил фото).
Попроси меня описать фото. Я говорю 2–3 минуты. Если замолкаю — задай по одному вопросу: Kto jest na zdjęciu? Gdzie są te osoby? Co robią? Jak są ubrane? Jaka jest pogoda / pora roku? Jaka jest atmosfera?

${PROMPT_OCENA}
Дополнительно отметь, что на фото я не упомянул.

Начни: поздоровайся и попроси описать фото.`;
  }
  // pełny
  return `${PROMPT_WSTEP}

Проведи всю устную часть — три задания подряд, около 15 минут.
1. Opis ilustracji: я прикрепил фото. Попроси описать его (2–3 минуты).
2. Monolog: temat «${M.temat}». 2–3 минуты. Вопросы на случай паузы:
${M.pytania.slice(0,5).map(x=>'— '+x).join('\n')}
3. Sytuacja komunikacyjna: «${Y.polecenie}» Ты — ${Y.rola_on}, я — ${Y.rola_ja}. 3–4 минуты, с одним небольшим осложнением.

Между заданиями коротко объявляй следующее задание по-польски.

${PROMPT_OCENA}
Оцени каждое из трёх заданий отдельно, затем дай общий результат в процентах от максимума и скажи, прошёл бы я порог 50%.

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
  const z=S.pisanie[id]||{}, cel=parseInt(f.dlugosc);
  V.pis={id,n,i,cel};
  let h=`<div class="egz kurs"><div class="egz-ex">
    <div class="egz-hint">Письмо · ${esc(f.forma)} · ${esc(f.dlugosc)}</div>
    <div class="kurs-karta"><div class="kurs-karta-t">${f.temat}</div></div>
    ${f.ru?`<div class="kurs-cel">${f.ru}</div>`:''}
    <div class="egz-szkielet"><b style="font-size:13px">Каркас — держись порядка:</b><ul>${f.szkielet.map(s=>`<li>${s}</li>`).join('')}</ul></div>`;
  if(f.zwroty) h+=`<div style="font-size:13px;font-weight:600;margin:8px 0 4px">Полезные обороты:</div><div class="egz-zwroty">${f.zwroty.map(x=>`<span class="egz-zwrot">${x}</span>`).join('')}</div>`;
  if(f.uwaga) h+=`<div class="egz-uwaga">⚠ ${f.uwaga}</div>`;
  h+=`<textarea class="egz-inp egz-praca" id="kursPraca" placeholder="Пиши здесь…" oninput="KURS.licz()">${esc(z.tekst||'')}</textarea>
    <div class="egz-znaki">${['ą','ć','ę','ł','ń','ó','ś','ź','ż'].map(zn=>`<button type="button" class="egz-znak" onmousedown="event.preventDefault()" onclick="KURS.znak('${zn}')">${zn}</button>`).join('')}</div>
    <div class="egz-count" id="kursLicznik"></div>
    <h4 class="kurs-h4">Проверка у Claude</h4>
    <div class="kurs-cel">Напиши текст целиком сам, без словаря — как на экзамене. Потом скопируй его вместе с заданием в Claude: он оценит по трём официальным критериям и разберёт ошибки.</div>
    <button class="egz-play" onclick="KURS.kopiujPrace()">Скопировать текст для проверки в Claude</button>
    ${f.wzor?wzorBlok(f.wzor):''}
  </div></div>`;
  el('contentWrap').innerHTML=h; window.scrollTo(0,0);
  licz();
  przycisk('Сохранить · готово ✓', ()=>{ zapiszPrace(); oznacz(n,i); dzienEkran(n); });
}
function licz(){
  const t=el('kursPraca'); if(!t||!V.pis) return;
  const s=t.value.trim(), ile=s?s.split(/\s+/).length:0, cel=V.pis.cel;
  const dol=Math.round(cel*0.9), gor=Math.round(cel*1.15), e=el('kursLicznik');
  e.textContent=ile+' слов (цель: '+dol+'–'+gor+')';
  e.className='egz-count'+(ile>=dol&&ile<=gor?' egz-count-ok':'');
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
  wczytaj(); S.pisanie[V.pis.id]={tekst:t.value,data:dzisISO()}; zapisz();
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
  let h='<div class="egz kurs"><h3 class="egz-h">Все каркасы письма</h3><div class="egz-sub">Прочитай каждый каркас и проговори, что напишешь в каждом пункте.</div>';
  [...PISANIE.krotkie, ...PISANIE.dlugie].forEach(f=>{
    h+=`<div class="egz-ex"><div class="egz-hint">${esc(f.forma)} · ${esc(f.dlugosc)}</div><ul class="kurs-ul">${f.szkielet.map(s=>`<li>${s}</li>`).join('')}</ul></div>`;
  });
  el('contentWrap').innerHTML=h+'</div>'; window.scrollTo(0,0);
  przycisk('Готово ✓', ()=>{ oznacz(n,i); dzienEkran(n); });
}

// ========================================================================
// ZADANIA ZEWNĘTRZNE, EGZAMINY PRÓBNE, WYNIKI
// ========================================================================
function zewn(t,n,i){
  const z=ZRODLA[t.zrodlo]||{};
  let h=`<div class="egz kurs"><div class="egz-ex"><div class="egz-hint">${esc(z.t||'Задание')}</div>
    <div class="kurs-cel">${esc(t.opis)}</div>`;
  if(z.link) h+=`<a class="egz-play" href="${z.link}" target="_blank" rel="noopener">Открыть: ${esc(z.l)}</a>`;
  else if(z.l) h+=`<div class="egz-note">${esc(z.l)}</div>`;
  if(t.zrodlo==='podcast') h+=`<div class="egz-note">Если Hello Polish уже слишком лёгкий — <a href="${ZRODLA.podcast2.link}" target="_blank" rel="noopener">Swojski Język Polski</a> (B1–B2).</div>`;
  if(t.zrodlo==='cert_mp3') h+=`<div class="egz-note">Если сайт не открывается с телефона — открой на компьютере. Транскрипции и ключи лежат на той же странице.</div>`;
  h+='</div></div>';
  el('contentWrap').innerHTML=h; window.scrollTo(0,0);
  przycisk('Сделано ✓', ()=>{ oznacz(n,i); dzienEkran(n); });
}

const PROBNE = {
  1:{plik:'5_B1_test.pdf', opis:'официальный пробный тест комиссии'},
  2:{plik:'B1_test.pdf', opis:'официальный пробный тест комиссии'},
  3:{plik:'B1_przykladowy_test_2020_03.pdf', opis:'самый свежий официальный тест (2020)'},
};
const MODULY = [
  {k:'sl', n:'Rozumienie ze słuchu', min:30, max:30},
  {k:'cz', n:'Rozumienie tekstów pisanych', min:40, max:30},
  {k:'gr', n:'Poprawność gramatyczna', min:45, max:30},
  {k:'pi', n:'Pisanie', min:75, max:30},
  {k:'mo', n:'Mówienie — % по оценке Claude', min:15, max:100, ustny:true},
];
function probny(nr,n,i){
  const P=PROBNE[nr];
  let h=`<div class="egz kurs"><div class="egz-ex"><div class="egz-hint">Пробный экзамен №${nr}</div>
    <h3 class="kurs-lh">${esc(P.plik)}</h3><div class="kurs-cel">${esc(P.opis)}. Файл — в папке «polski b1» на Mac. Лучше распечатать: на экзамене всё на бумаге.</div>
    <h4 class="kurs-h4">Правила — как на настоящем экзамене</h4>
    <ul class="kurs-ul"><li>Без словаря, без телефона, без пауз внутри модуля.</li>
      <li>Аудио: certyfikatpolski.pl → O egzaminie → Przykładowe testy → B1. Запись — один раз (задание I) или два раза, как указано.</li>
      <li>Между модулями — перерыв 10 минут, не больше.</li>
      <li>Письмо проверь в Claude (скопируй задание и свой текст) — он поставит баллы по критериям.</li>
      <li>Устную часть пройди завтра: задание «полная устная часть» в любом дне курса.</li></ul>
    <h4 class="kurs-h4">Таймер модулей — по порядку</h4>`;
  MODULY.filter(m=>!m.ustny).forEach(m=>{ h+=`<button class="egz-chip kurs-modbtn" onclick="KURS.stoperModul(${m.min},'${m.n}')">${m.n} · ${m.min} мин</button>`; });
  h+=`<div class="kurs-timer" id="kursTimer"></div></div></div>`;
  el('contentWrap').innerHTML=h; window.scrollTo(0,0);
  przycisk('Экзамен пройден ✓', ()=>{ oznacz(n,i); dzienEkran(n); });
}
function stoperModul(min,nazwa){ stoper(min*60, nazwa); }
function wynik(nr,n,i){
  wczytaj();
  const z=S.probne[nr]||{};
  let h=`<div class="egz kurs"><div class="egz-ex"><div class="egz-hint">Баллы пробного экзамена №${nr}</div>
    <div class="kurs-cel">Впиши баллы за каждый модуль по ключу. Порог — 50% <b>в каждом</b> модуле, цель — 60% с запасом.</div>`;
  MODULY.forEach(m=>{ h+=`<label class="kurs-wynik"><span>${m.n}</span>
    <input type="number" inputmode="decimal" min="0" max="${m.max}" step="0.5" id="w_${m.k}" value="${z[m.k]??''}" class="egz-inp"> <span>/ ${m.max}</span></label>`; });
  h+=`<div id="kursWyniki"></div></div>`+historiaProbnych()+'</div>';
  el('contentWrap').innerHTML=h; window.scrollTo(0,0);
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
  window.scrollTo(0,0);
  przycisk('← Сегодня', ()=>dzienEkran());
}

// ---------- karta na ekranie głównym aplikacji ----------
function kartaGlowna(){
  wczytaj();
  const n=nrDzisiaj(), p=dzien(n), {ile,wszystkie}=postep(n);
  const przed = dzisISO() < KURS_START;
  return {n, tytul:p.tytul, opis: przed ? 'Старт завтра, 6 октября' : (ile+' из '+wszystkie+' заданий сегодня')};
}

return { dzien:dzienEkran, mapa, otworz, przelacz, lekcja, cwiczenia, slowa, mowa, pisanie, odkryj, ocen, mow,
  kopiujMowe, kopiujPrace, licz, znak, stoper, stoperModul, claudeInfo, kartaGlowna, nrDzisiaj };
})();

// Ekran główny aplikacji rysuje się w skrypcie inline, zanim ten plik się
// załaduje — wtedy karty kursu jeszcze nie ma. Dorysuj ją po załadowaniu.
if (typeof state !== 'undefined' && state.phase === 'tree' && typeof renderTree === 'function') {
  try { renderTree(); } catch(e) {}
}
