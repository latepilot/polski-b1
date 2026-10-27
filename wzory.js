// ========================================================================
// WZORY WYPRACOWAŃ — przykładowe teksty do wszystkich form pisania z kursu
// i trenażera. Teksty i tłumaczenia leżą w data/pisanie.js (wzor, wzor_ru),
// tu jest tylko ekran do codziennego przepisywania.
// Wszystkie teksty opowiadają o jednym bohaterze (Iwan Pietrow — ten sam,
// co w monologach kursu), żeby fakty się nie rozjeżdżały.
// Przepisywanie: od ręki do zeszytu (jak na egzaminie) albo w aplikacji —
// wtedy tekst porównuje się z wzorem słowo po słowie.
// Forma może mieć kilka wzorów: główny (wzor) i kolejne w inne:[{id,tytul,wzor,wzor_ru}].
// Każdy wzór ma własne id i własny postęp.
// Stan: klucz 'b1wzory' — {cw:{id:{n,best,last}}, dzien:{data,k,d}, szkic:{id:tekst}}.
// ========================================================================
window.WZORY = (function(){
'use strict';

const el = id => document.getElementById(id);
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const dzisISO = () => { const d=new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); };
const slowa = t => { const s=String(t||'').trim(); return s ? s.split(/\s+/).length : 0; };
const ZNAKI = ['ą','ć','ę','ł','ń','ó','ś','ź','ż'];
const BEZ = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};

// ---------- stan ----------
let S = null;
function wczytaj(){
  try{ S = JSON.parse(localStorage.getItem('b1wzory')) || {}; }catch(e){ S = {}; }
  for(const k of ['cw','szkic']) if(!S[k] || typeof S[k]!=='object') S[k] = {};
}
const zapisz = () => { try{ localStorage.setItem('b1wzory', JSON.stringify(S)); }catch(e){} };
const stat = id => S.cw[id] || {n:0};

// ---------- dane ----------
const krotkie = () => (typeof PISANIE!=='undefined' ? PISANIE.krotkie : []).filter(f=>f.wzor && f.id);
const dlugie  = () => (typeof PISANIE!=='undefined' ? PISANIE.dlugie  : []).filter(f=>f.wzor && f.id);
// Wszystkie wzory danej formy jako {id, f, wzor, wzor_ru, tytul}.
const wzoryFormy = f => [{id:f.id, f, wzor:f.wzor, wzor_ru:f.wzor_ru, tytul:f.tytul, temat:f.temat},
  ...(f.inne||[]).filter(x=>x.id && x.wzor).map(x=>({id:x.id, f, wzor:x.wzor, wzor_ru:x.wzor_ru, tytul:x.tytul, temat:x.temat||f.temat}))];
const krotkieW = () => krotkie().flatMap(wzoryFormy);
const dlugieW  = () => dlugie().flatMap(wzoryFormy);
const wzor  = id => [...krotkieW(), ...dlugieW()].find(w=>w.id===id);
const forma = id => (wzor(id)||{}).f;   // id wzoru albo formy → forma

// Wypracowania na dziś: jedno krótkie i jedno długie — tak wygląda zestaw
// na egzaminie. Najpierw te, które przepisywałeś najrzadziej; przy remisie
// kolejność przesuwa się z dniem, żeby nie wracało ciągle to samo.
function naDzis(){
  wczytaj();
  const dzis = dzisISO();
  if(S.dzien && S.dzien.data===dzis && wzor(S.dzien.k) && wzor(S.dzien.d)) return S.dzien;
  if(!krotkieW().length || !dlugieW().length) return null;
  const nrDnia = Math.floor(new Date(dzis+'T12:00:00').getTime()/864e5);
  const wybierz = lista => {
    if(!lista.length) return null;
    const n = lista.length, off = nrDnia % n;
    return lista.map((w,i)=>({w, n:stat(w.id).n, r:(i-off+n)%n}))
                .sort((a,b)=>a.n-b.n || a.r-b.r)[0].w.id;
  };
  S.dzien = {data:dzis, k:wybierz(krotkieW()), d:wybierz(dlugieW())};
  zapisz();
  return S.dzien;
}
const dzisZrobione = id => stat(id).last===dzisISO();

// ---------- ekrany ----------
function wejdz(klucz, fn){
  if(typeof state!=='undefined') state.phase = 'wzory';
  if(typeof ekran==='function') ekran(klucz, fn);
}
function przycisk(txt, fn){
  const b = el('mainBtn'); if(!b) return;
  el('bottomWrap').style.display = ''; b.className = 'check-btn';
  b.textContent = txt; b.disabled = false; b.onclick = fn;
}
const bezPrzycisku = () => { el('bottomWrap').style.display = 'none'; };
const ik = id => '<svg class="egz-i"><use href="#'+id+'"/></svg>';
const dataRu = iso => { const [r,m,d] = iso.split('-'); return +d+'.'+m; };

function karta(w){
  const f = w.f, s = stat(w.id), dzis = dzisZrobione(w.id);
  const opis = f.dlugosc + (s.n ? ' · переписано '+s.n+' '+razy(s.n) : ' · ещё не переписывал') +
    (s.best!==undefined ? ' · лучший результат '+s.best+'%' : '');
  return `<div class="egz-card ${dzis?'egz-done':''}" onclick="WZORY.esej('${w.id}')">
    <div class="egz-ico">${ik(dzis?'egz-check':'egz-pen')}</div>
    <div class="egz-body"><div class="egz-t">${esc(f.forma)}${w.tytul?' — '+esc(w.tytul):''}</div><div class="egz-d">${esc(opis)}</div></div>
    <div class="egz-meta">${dzis?'✓':'→'}</div></div>`;
}
function razy(n){ const m10=n%10, m100=n%100;
  return (m10>=2&&m10<=4&&(m100<12||m100>14)) ? 'раза' : 'раз'; }

const BOHATER = [
  'Иван Петров, 38 лет, из Петербурга. Три года живёт в Гданьске, в районе Пшиможе: снимает двухкомнатную квартиру на 4-м этаже (по-нашему на 5-м).',
  'По образованию инженер, по профессии фотограф: снимает для фотостоков в небольшой студии во Вжеще, ездит туда на трамвае. Коллеги — Томек и Ева.',
  'Жена Наталья работает из дома, дочь Оливия, 10 лет, учится в 4-м классе.',
  'Родители и младшая сестра Аня живут в Петербурге, дедушка Михаил, 78 лет, — под Петербургом, он столяр.',
  'Лучший друг — Павел из Варшавы, познакомились в университете в Петербурге.',
  'Увлечения: коллекционирует виниловые пластинки, пишет электронную музыку (техно, хаус, эмбиент), дизайн, вайб-кодинг, скандинавская ходьба в парке у дома, путешествия. Любимое место — Оливский парк.',
];

function ekranGlowny(){
  wczytaj();
  wejdz('wzory', ekranGlowny);
  const d = naDzis();
  let h = '<div class="egz kurs wz">';
  h += `<h3 class="egz-h">Примеры сочинений</h3>
    <div class="egz-sub">Образцы для каждого письменного задания курса и тренажёра, точно в нужном объёме. Все тексты — об одном человеке, том же, что в монологах курса. Переписывай каждый день: лучше от руки в тетрадь, как на экзамене, или в приложении — тогда текст сверится с образцом слово в слово.</div>`;
  h += `<h3 class="egz-h">Сегодня — как на экзамене</h3>
    <div class="egz-sub">На экзамене ты пишешь одно короткое и одно длинное задание. Сегодня:</div>`;
  if(d) h += karta(wzor(d.k)) + karta(wzor(d.d));
  h += '<h3 class="egz-h">Короткие формы · 25–40 слов</h3>';
  krotkieW().forEach(w=>h += karta(w));
  h += '<h3 class="egz-h">Длинные формы · 160–175 слов</h3>';
  dlugieW().forEach(w=>h += karta(w));
  if(typeof STRUKTURY!=='undefined') h += `<div class="egz-card" onclick="STRUKTURY.ekran()"><div class="egz-ico">${ik('egz-pen')}</div>
    <div class="egz-body"><div class="egz-t">Структуры форм — зубрить план</div><div class="egz-d">Скелет и обороты для каждой письменной формы</div></div><div class="egz-meta">→</div></div>`;
  if(typeof KURS!=='undefined') h += `<div class="egz-card" onclick="KURS.egzaminInfo()"><div class="egz-ico">${ik('egz-target')}</div>
    <div class="egz-body"><div class="egz-t">Как проходит письменный экзамен</div><div class="egz-d">Объём ±10%, черновик, время, оформление</div></div><div class="egz-meta">→</div></div>`;
  h += `<details class="wz-bohater"><summary>Кто герой сочинений</summary><ul class="kurs-ul">${BOHATER.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
    <div class="egz-note">Хочешь писать о себе — меняй имена и детали, а конструкции оставляй.</div>
    ${typeof KURS!=='undefined' ? '<button class="egz-chip" onclick="KURS.bohaterowie()">Все герои и склонение имён</button>' : ''}</details>`;
  h += '</div>';
  el('contentWrap').innerHTML = h;
  bezPrzycisku();
}

function akapity(tekst){ return String(tekst).split('\n'); }

function esejEkran(id){
  wczytaj();
  const w = wzor(id); if(!w) return ekranGlowny();
  const f = w.f, siostry = wzoryFormy(f);
  wejdz('wzory:'+id, ()=>esejEkran(id));
  tlumaczWidac = false;
  const s = stat(id), pl = akapity(w.wzor), ru = akapity(w.wzor_ru||'');
  let h = `<div class="egz kurs wz"><div class="egz-ex">
    <div class="egz-hint">${esc(f.forma)} · ${slowa(w.wzor)} слов · норма ${parseInt(f.dlugosc)}</div>
    ${siostry.length>1 ? `<div class="wz-akcje">${siostry.map(x=>`<button class="egz-chip ${x.id===id?'wz-wyb':''}" onclick="WZORY.esej('${x.id}')">${esc(x.tytul||'Образец')}</button>`).join('')}</div>` : ''}
    <div class="kurs-karta"><div class="kurs-karta-n">Задание</div><div class="kurs-karta-t">${w.temat}</div></div>
    ${krotkie().includes(f) && (typeof UKLAD_KROTKICH!=='undefined'?UKLAD_KROTKICH:'') ? `<div class="egz-note">${esc((typeof UKLAD_KROTKICH!=='undefined'?UKLAD_KROTKICH:''))}</div>` : ''}
    <div class="wz-akcje">
      <button class="egz-chip" id="wzSluchaj" onclick="WZORY.sluchaj()">Слушать</button>
      <button class="egz-chip" id="wzTlum" onclick="WZORY.tlumaczenie()">Показать перевод</button>
    </div>
    <div class="wz-tekst" id="wzTekst">`;
  pl.forEach((a,i)=>{
    if(!a.trim()){ h += '<div class="wz-odstep"></div>'; return; }
    h += `<p class="wz-pl">${esc(a)}</p>` + (ru[i] && ru[i].trim() ? `<p class="wz-ru" hidden>${esc(ru[i])}</p>` : '');
  });
  h += `</div>
    <div class="egz-note">${s.n ? 'Переписано '+s.n+' '+razy(s.n)+(s.last?', последний раз '+dataRu(s.last):'')+(s.best!==undefined?'. Лучший результат в приложении: '+s.best+'%':'')+'.' : 'Ещё не переписывал.'}</div>
    <div class="wz-akcje"><button class="egz-chip" onclick="WZORY.odReki('${id}')">Переписал от руки ✓</button></div>
  </div>`;
  if(f.szkielet) h += `<div class="egz-szkielet"><b style="font-size:13px">План, по которому построен текст:</b><ul>${f.szkielet.map(x=>`<li>${x}</li>`).join('')}</ul></div>`;
  h += '</div>';
  el('contentWrap').innerHTML = h;
  przycisk('Переписать в приложении →', ()=>cwiczenie(id, 'tekst'));
}

let tlumaczWidac = false;
function tlumaczenie(){
  tlumaczWidac = !tlumaczWidac;
  document.querySelectorAll('#wzTekst .wz-ru').forEach(p=>p.hidden = !tlumaczWidac);
  const b = el('wzTlum'); if(b) b.textContent = tlumaczWidac ? 'Скрыть перевод' : 'Показать перевод';
}
function sluchaj(){
  const b = el('wzSluchaj');
  if('speechSynthesis' in window && speechSynthesis.speaking){ speechSynthesis.cancel(); if(b) b.textContent='Слушать'; return; }
  const t = [...document.querySelectorAll('#wzTekst .wz-pl')].map(p=>p.textContent).join('\n');
  if(typeof KURS!=='undefined') KURS.mow(t);
  if(b) b.textContent = 'Стоп';
}
function odReki(id){
  wczytaj();
  const s = S.cw[id] || (S.cw[id] = {n:0});
  s.n++; s.last = dzisISO(); zapisz();
  esejEkran(id);
  toast('Записано: переписано '+s.n+' '+razy(s.n));
}
function toast(txt){
  const t=document.createElement('div'); t.className='kurs-toast'; t.textContent=txt;
  document.body.appendChild(t); setTimeout(()=>t.remove(), 2200);
}

// ---------- przepisywanie w aplikacji ----------
// tryb: 'tekst' — wzór na ekranie, 'ru' — tylko tłumaczenie, 'pamiec' — tylko plan
const TRYBY = {tekst:'С текстом', ru:'По переводу', pamiec:'По памяти'};
let C = null;
function cwiczenie(id, tryb){
  wczytaj();
  const w = wzor(id); if(!w) return ekranGlowny();
  const f = w.f;
  tryb = TRYBY[tryb] ? tryb : 'tekst';
  wejdz('wzory:cw:'+id, ()=>cwiczenie(id, tryb));
  C = {id, tryb, cel:slowa(w.wzor)};
  const zrodlo = tryb==='tekst' ? w.wzor : tryb==='ru' ? (w.wzor_ru||'') : null;
  let h = `<div class="egz kurs wz"><div class="egz-ex">
    <div class="egz-hint">${esc(f.forma)}${w.tytul?' — '+esc(w.tytul):''} · переписать</div>
    <div class="wz-akcje">${Object.entries(TRYBY).map(([k,n])=>
      `<button class="egz-chip ${k===tryb?'wz-wyb':''}" onclick="WZORY.cwiczenie('${id}','${k}')">${n}</button>`).join('')}</div>
    <div class="egz-note">${tryb==='tekst' ? 'Переписывай, глядя на текст. Полезно и для руки, и для глаза: окончания запоминаются сами.'
      : tryb==='ru' ? 'Перед тобой перевод. Восстанови польский текст — так ты проверяешь, что запомнил.'
      : 'Только план. Напиши текст по памяти — это и есть экзамен.'}</div>`;
  if(zrodlo!==null) h += `<div class="wz-zrodlo">${akapity(zrodlo).map(a=>a.trim()?`<p>${esc(a)}</p>`:'').join('')}</div>`;
  else h += `<div class="egz-szkielet"><ul>${(f.szkielet||[]).map(x=>`<li>${x}</li>`).join('')}</ul></div>`;
  h += `<textarea class="egz-inp egz-praca" id="wzPraca" placeholder="Пиши здесь…" autocapitalize="sentences" autocorrect="off" spellcheck="false" oninput="WZORY.licz()">${esc(S.szkic[id]||'')}</textarea>
    <div class="egz-znaki">${ZNAKI.map(z=>`<button type="button" class="egz-znak" onmousedown="event.preventDefault()" onclick="WZORY.znak('${z}')">${z}</button>`).join('')}</div>
    <div class="egz-count" id="wzLicznik"></div>
  </div></div>`;
  el('contentWrap').innerHTML = h;
  licz();
  przycisk('Проверить', sprawdz);
}
function licz(){
  const t = el('wzPraca'); if(!t || !C) return;
  const n = slowa(t.value), e = el('wzLicznik');
  if(e){ e.textContent = n+' слов из '+C.cel; e.className = 'egz-count'+(n>=C.cel*0.9?' egz-count-ok':''); }
  wczytaj();
  if(t.value) S.szkic[C.id] = t.value; else delete S.szkic[C.id];
  zapisz();
}
function znak(z){
  const p = el('wzPraca'); if(!p) return;
  const s = p.selectionStart ?? p.value.length, e = p.selectionEnd ?? p.value.length;
  let od = s;
  if(s===e && s>0 && BEZ[z]===p.value[s-1].toLowerCase()) od = s-1;  // „l" + ł → ł
  p.value = p.value.slice(0,od) + z + p.value.slice(e); p.focus();
  try{ p.setSelectionRange(od+z.length, od+z.length); }catch(x){}
  licz();
}

// Porównanie słowo po słowie (najdłuższy wspólny podciąg). Wielkość liter
// i interpunkcja nie są błędem; brak ogonków — osobna kategoria, bo na
// egzaminie to błąd ortograficzny, ale łatwy do naprawienia.
const norm = w => w.toLowerCase().replace(/^[„"«(\[]+|[.,!?;:…"”»)\]]+$/g,'');
const bezOgonkow = w => w.replace(/[ąćęłńóśźż]/g, c=>BEZ[c]);
function porownaj(wzor, tekst){
  const a = wzor.trim().split(/\s+/), b = tekst.trim() ? tekst.trim().split(/\s+/) : [];
  const na = a.map(norm), nb = b.map(norm), n = a.length, m = b.length;
  const L = Array.from({length:n+1}, ()=>new Uint16Array(m+1));
  for(let i=n-1;i>=0;i--) for(let j=m-1;j>=0;j--)
    L[i][j] = na[i]===nb[j] ? L[i+1][j+1]+1 : Math.max(L[i+1][j], L[i][j+1]);
  const ops = []; let i=0, j=0;
  while(i<n && j<m){
    if(na[i]===nb[j]){ ops.push({t:'ok', w:b[j]}); i++; j++; }
    else if(L[i+1][j] >= L[i][j+1]){ ops.push({t:'brak', w:a[i]}); i++; }
    else { ops.push({t:'zbedne', w:b[j]}); j++; }
  }
  while(i<n) ops.push({t:'brak', w:a[i++]});
  while(j<m) ops.push({t:'zbedne', w:b[j++]});
  // brak + zbędne obok siebie to zwykle jedno źle napisane słowo
  const wynik = [];
  for(let k=0;k<ops.length;k++){
    const o = ops[k], p = ops[k+1];
    if(p && ((o.t==='brak' && p.t==='zbedne') || (o.t==='zbedne' && p.t==='brak'))){
      const wz = o.t==='brak' ? o.w : p.w, tw = o.t==='zbedne' ? o.w : p.w;
      wynik.push({t: bezOgonkow(norm(wz))===bezOgonkow(norm(tw)) ? 'ogonki' : 'blad', w:tw, ok:wz});
      k++;
    } else wynik.push(o);
  }
  const dobrze = wynik.filter(o=>o.t==='ok').length;
  return {ops:wynik, dobrze, wszystkie:n, pct: n ? Math.round(dobrze/n*100) : 0};
}

function sprawdz(){
  const t = el('wzPraca'); if(!t || !C) return;
  if(!t.value.trim()){ toast('Сначала перепиши текст'); return; }
  const r = porownaj(wzor(C.id).wzor, t.value);
  wczytaj();
  const s = S.cw[C.id] || (S.cw[C.id] = {n:0});
  s.n++; s.last = dzisISO(); s.best = Math.max(s.best||0, r.pct);
  delete S.szkic[C.id]; zapisz();
  const ile = typ => r.ops.filter(o=>o.t===typ).length;
  const kolor = r.pct>=90 ? 'var(--success)' : r.pct>=70 ? 'var(--gold)' : 'var(--error)';
  let h = `<div class="egz kurs wz"><div class="egz-ex" style="text-align:center">
    <div class="egz-big" style="color:${kolor}">${r.pct}%</div>
    <div class="egz-sub" style="font-size:14px">${r.dobrze} из ${r.wszystkie} слов совпали с образцом</div>
    <div class="wz-bledy">
      <span>Ошибки в словах: <b>${ile('blad')}</b></span><span>Без польских знаков: <b>${ile('ogonki')}</b></span>
      <span>Пропущено: <b>${ile('brak')}</b></span><span>Лишние слова: <b>${ile('zbedne')}</b></span></div></div>
    <div class="egz-ex"><div class="egz-hint">Твой текст, сверенный с образцом</div>
      <div class="wz-diff">${r.ops.map(o=>
        o.t==='ok' ? esc(o.w)
        : o.t==='brak' ? `<ins class="wz-brak">${esc(o.w)}</ins>`
        : o.t==='zbedne' ? `<del class="wz-zbedne">${esc(o.w)}</del>`
        : `<del class="${o.t==='ogonki'?'wz-ogonki':'wz-blad'}">${esc(o.w)}</del><ins class="wz-popr">${esc(o.ok)}</ins>`
      ).join(' ')}</div>
      <div class="egz-note">Красным зачёркнуто то, что написал ты, зелёным — как в образце. Оранжевое — слово верное, но без польских знаков. Подчёркнуто — пропущенное слово.</div>
    </div></div>`;
  el('contentWrap').innerHTML = h;
  const id = C.id, tryb = C.tryb;
  przycisk('Ещё раз', ()=>cwiczenie(id, tryb));
}

// ---------- karty na ekranie głównym i w dniu kursu ----------
function kartaGlowna(){
  const d = naDzis();
  if(!d) return {opis:'', zrobione:false};
  return {opis: (krotkieW().length+dlugieW().length)+' wzorów · dziś: '+forma(d.k).forma+' + '+forma(d.d).forma,
          zrobione: dzisZrobione(d.k) && dzisZrobione(d.d)};
}

return { ekran:ekranGlowny, esej:esejEkran, cwiczenie, licz, znak, sprawdz, tlumaczenie, sluchaj, odReki,
  kartaGlowna, naDzis, forma, porownaj };
})();
