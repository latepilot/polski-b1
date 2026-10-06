// ========================================================================
// SŁOWNIK EGZAMINU — wszystkie słowa i zwroty kursu w jednym miejscu.
// Ćwiczy się jak w „Moje słowa": karta → odwróć → „Znam" / „Jeszcze nie",
// nieznane wracają na koniec kolejki, aż wszystkie będą znane.
// W odróżnieniu od „Moich słów" pamięta, co już umiesz (klucz 'b1slownik'):
// haseł jest ponad tysiąc i nikt nie przerobi ich w jednej sesji.
// Źródła: tematy kursu (słowa, gotowe zwroty, zwroty do sytuacji),
// zwroty do egzaminu ustnego (KURS.ZW) i do pisania (SLOWNIK_PISANIE).
// Karty tematu w kursie to ten sam Cram — „Znam" widać w obu miejscach.
// ========================================================================
window.SLOWNIK = (function(){
'use strict';

const el = id => document.getElementById(id);
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const mix = a => a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(v=>v[1]);
const klucz = pl => String(pl).toLowerCase().replace(/\s+/g,' ').trim();
const dzisISO = () => { const d=new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); };
// szukanie bez ogonków: „zrodlo" znajduje „źródło", „еще" — „ещё"
const ZNAKI = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z','ё':'е'};
const plaski = s => String(s).toLowerCase().replace(/[ąćęłńóśźżё]/g, c=>ZNAKI[c]);
const svg = id => '<svg aria-hidden="true"><use href="#'+id+'"/></svg>';

// ---------- stan ----------
let S = null;
function wczytaj(){
  try{ S = JSON.parse(localStorage.getItem('b1slownik')) || {}; }catch(e){ S = {}; }
  if(!S.znam || typeof S.znam!=='object') S.znam = {};
  if(S.kier!=='ru2pl') S.kier = 'pl2ru';
  if(!S.mig) migruj();
}
const zapisz = () => { try{ localStorage.setItem('b1slownik', JSON.stringify(S)); }catch(e){} };
// Karty tematów w kursie pamiętały znane słowa po numerach (b1kurs → slowa).
// Przenieś je raz, żeby nic z dotychczasowej nauki nie zginęło.
function migruj(){
  try{
    const K = JSON.parse(localStorage.getItem('b1kurs')) || {}, sl = K.slowa || {};
    for(const id in sl){
      const T = typeof KURS_TEMATY!=='undefined' && KURS_TEMATY[id]; if(!T) continue;
      (sl[id].znam||[]).forEach(k=>{ const w=T.slowa[k]; if(w) S.znam[klucz(w[0])] = sl[id].data || dzisISO(); });
    }
  }catch(e){}
  S.mig = 1; zapisz();
}
function znam(pl){ if(!S) wczytaj(); return !!S.znam[klucz(pl)]; }
function ustaw(k, wart){ wczytaj(); if(wart) S.znam[k] = dzisISO(); else delete S.znam[k]; zapisz(); }
const ileZnam = lista => lista.filter(x=>S.znam[x.k]).length;

// ---------- zestawy ----------
let Z = null;
function zestawy(){
  if(Z) return Z;
  Z = [];
  // tematy w kolejności, w jakiej przychodzą w kursie
  const kolej = [];
  if(typeof KURS_PLAN!=='undefined') KURS_PLAN.forEach(d=>d.zadania.forEach(t=>{
    if(t.typ==='slowa' && !kolej.includes(t.ref)) kolej.push(t.ref); }));
  if(typeof KURS_TEMATY!=='undefined') Object.keys(KURS_TEMATY).forEach(id=>{ if(!kolej.includes(id)) kolej.push(id); });
  kolej.forEach(id=>{
    const T = KURS_TEMATY[id]; if(!T) return;
    Z.push({id, temat:true, tytul:T.tytul, ru:T.ru, czesci:[
      ['Słowa', 'Слова', T.slowa],
      ['Gotowe zwroty', 'Готовые фразы', T.zwroty||[]],
      ['Zwroty do sytuacji', 'Фразы для ролевой ситуации', (T.sytuacja && T.sytuacja.zwroty)||[]]]});
  });
  const ZW = typeof KURS!=='undefined' && KURS.ZW;
  if(ZW) Z.push({id:'mowa', tytul:'Egzamin ustny', ru:'Обороты для трёх заданий устной части', czesci:[
    ['Opis ilustracji', 'Описание фотографии', ZW.opis],
    ['Monolog', 'Монолог', ZW.monolog],
    ['Sytuacja', 'Ролевая ситуация', ZW.sytuacja],
    ['Gdy brakuje słowa', 'Если забыл слово', ZW.ratunek]]});
  if(typeof SLOWNIK_PISANIE!=='undefined') Z.push({id:'pisanie', tytul:'Pisanie', ru:'Обороты для письменной части',
    czesci: SLOWNIK_PISANIE.map(g=>[g.tytul, g.ru, g.zwroty])});
  // hasła zestawu bez powtórzeń (ten sam zwrot bywa w dwóch częściach tematu)
  Z.forEach(z=>{
    const byly = new Set(); z.wpisy = [];
    z.czesci.forEach(([,,lista],c)=>lista.forEach(([pl,ru])=>{
      const k = klucz(pl); if(byly.has(k)) return; byly.add(k);
      z.wpisy.push({pl, ru, k, c, z:z.id});
    }));
  });
  return Z;
}
const zestaw = id => zestawy().find(z=>z.id===id);
// cały słownik bez powtórzeń między zestawami, w kolejności kursu
function wszystkie(){
  const byly = new Set(), w = [];
  zestawy().forEach(z=>z.wpisy.forEach(x=>{ if(!byly.has(x.k)){ byly.add(x.k); w.push(x); } }));
  return w;
}

// ---------- ekrany ----------
function wejdz(klucz2, fn){
  if(typeof state!=='undefined') state.phase = 'slownik';
  if(typeof ekran==='function') ekran(klucz2, fn);
}
function przycisk(txt, fn){
  const b = el('mainBtn'); if(!b) return;
  el('bottomWrap').style.display = ''; b.className = 'check-btn';
  b.textContent = txt; b.disabled = false; b.onclick = fn;
}
function bezPrzycisku(){ el('bottomWrap').style.display = 'none'; }
function mow(txt){ if(typeof KURS!=='undefined') KURS.mow(txt); }

function karta(ico, t, d, fn){
  return `<div class="egz-card ${fn?'':'egz-done'}" ${fn?`onclick="${fn}"`:''}><div class="egz-ico"><svg class="egz-i"><use href="#${ico}"/></svg></div>
    <div class="egz-body"><div class="egz-t">${t}</div><div class="egz-d">${d}</div></div><div class="egz-meta">${fn?'→':''}</div></div>`;
}
function kartaZestawu(z){
  const zn = ileZnam(z.wpisy), n = z.wpisy.length, caly = zn===n, p = Math.round(zn/n*100);
  return `<div class="egz-card ${caly?'egz-done':''}" onclick="SLOWNIK.zestaw('${z.id}')">
    <div class="egz-body"><div class="egz-t">${esc(z.tytul)}</div><div class="egz-d">${esc(z.ru)}</div>
      <div class="egz-bar slow-bar"><div class="egz-bar-f" style="width:${p}%;background:${caly?'var(--success)':'var(--primary)'}"></div></div></div>
    <div class="egz-meta">${zn}/${n}</div></div>`;
}
function wiersz(x, zTematem){
  const zn = !!S.znam[x.k], z = zTematem ? zestaw(x.z) : null;
  return `<div class="slow-w ${zn?'slow-zn':''}">
    <div class="slow-tx"><span class="kurs-pl" onclick="SLOWNIK.mow(this.textContent)">${esc(x.pl)}</span>
      <span class="kurs-ru">${esc(x.ru)}</span>${z?`<span class="slow-z">${esc(z.tytul)}</span>`:''}</div>
    <button class="slow-tick ${zn?'on':''}" data-k="${esc(x.k)}" onclick="SLOWNIK.przelacz(this)" aria-label="Знаю">${zn?'✓':''}</button></div>`;
}

function ekranGlowny(){
  wczytaj();
  wejdz('slownik', ekranGlowny);
  const w = wszystkie(), zn = ileZnam(w), p = Math.round(zn/w.length*100), nowe = w.length-zn;
  let h = '<div class="egz kurs slow">';
  h += `<h3 class="egz-h">Słownik egzaminu B1</h3>
    <div class="egz-sub">Слова и фразы курса, без которых не обойтись на экзамене: 24 темы, обороты для устной части и для письма. Карточки как в «Moje słowa»: «Znam» запоминается, «Jeszcze nie» вернётся в конце круга.</div>
    <div class="egz-mod"><div class="egz-mod-top"><span class="egz-mod-n">Znasz ${zn} z ${w.length}</span>
      <span class="egz-mod-p" style="color:var(--primary)">${p}%</span></div>
      <div class="egz-bar"><div class="egz-bar-f" style="width:${p}%;background:var(--primary)"></div></div></div>`;
  h += '<h3 class="egz-h">Cram</h3>';
  h += karta('egz-bolt', 'Następne 20 nowych', nowe ? 'По порядку курса, тема за темой · осталось '+nowe : 'Ты знаешь все слова словаря', nowe ? 'SLOWNIK.cramNowe()' : '');
  h += karta('egz-check', 'Powtórka: 20 znanych', zn ? 'Случайные из тех, что уже знаешь: проверь, не забыл ли' : 'Пока нечего повторять', zn ? 'SLOWNIK.cramPowtorka()' : '');
  h += `<input type="search" class="egz-inp slow-szukaj" id="slowSzukaj" placeholder="Szukaj po polsku albo po rosyjsku…"
      oninput="SLOWNIK.szukaj(this.value)" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">
    <div id="slowWyniki"></div>`;
  h += '<h3 class="egz-h">Tematy egzaminu</h3><div class="egz-sub">В порядке курса.</div>';
  zestawy().filter(z=>z.temat).forEach(z=>h += kartaZestawu(z));
  h += '<h3 class="egz-h">Egzamin ustny i pisanie</h3>';
  zestawy().filter(z=>!z.temat).forEach(z=>h += kartaZestawu(z));
  h += '</div>';
  el('contentWrap').innerHTML = h;
  bezPrzycisku();
}

function szukaj(q){
  const box = el('slowWyniki'); if(!box) return;
  q = plaski(q.trim());
  if(q.length<2){ box.innerHTML = ''; return; }
  const w = wszystkie().filter(x=>plaski(x.pl).includes(q) || plaski(x.ru).includes(q));
  box.innerHTML = w.length
    ? '<div class="slow-lista">'+w.slice(0,40).map(x=>wiersz(x,true)).join('')+'</div>'
      + (w.length>40 ? `<div class="egz-note">Показаны первые 40 из ${w.length} — уточни запрос.</div>` : '')
    : '<div class="egz-note">Ничего не найдено.</div>';
}

function zestawEkran(id){
  wczytaj();
  const z = zestaw(id); if(!z) return ekranGlowny();
  wejdz('slownik:'+id, ()=>zestawEkran(id));
  const n = z.wpisy.length, zn = ileZnam(z.wpisy), nowe = n-zn;
  let h = `<div class="egz kurs slow"><div class="egz-hint">Słownik egzaminu</div>
    <h3 class="kurs-lh">${esc(z.tytul)}</h3><div class="egz-sub">${esc(z.ru)} · znasz ${zn} z ${n}</div>
    <button class="check-btn slow-start" onclick="SLOWNIK.cramZestaw('${id}',${nowe?'false':'true'})">${nowe?'Cram: nowe ('+nowe+') →':'Cram: wszystkie ('+n+') →'}</button>`;
  if(nowe && zn) h += `<div class="slow-chipy"><button class="egz-chip" onclick="SLOWNIK.cramZestaw('${id}',true)">Cram: wszystkie (${n})</button></div>`;
  h += '<div class="egz-note">Нажми на польский текст — услышишь произношение. Кружок справа отмечает «знаю» без карточек.</div>';
  z.czesci.forEach(([nazwa,ru],c)=>{
    const lista = z.wpisy.filter(x=>x.c===c); if(!lista.length) return;
    h += `<h4 class="kurs-h4">${esc(nazwa)} <span class="slow-ru-h">· ${esc(ru)}</span></h4>
      <div class="slow-lista">${lista.map(x=>wiersz(x,false)).join('')}</div>`;
  });
  h += '</div>';
  el('contentWrap').innerHTML = h;
  bezPrzycisku();
}

// „znam" bez kart — kółko obok hasła; bez przerysowania, żeby nie zgubić
// miejsca na liście ani wyników wyszukiwania
function przelacz(btn){
  const k = btn.dataset.k; wczytaj();
  const on = !S.znam[k]; ustaw(k, on);
  document.querySelectorAll('.slow-tick').forEach(b=>{ if(b.dataset.k!==k) return;
    b.classList.toggle('on', on); b.textContent = on ? '✓' : '';
    const w = b.closest('.slow-w'); if(w) w.classList.toggle('slow-zn', on); });
}

// ---------- Cram ----------
// lista: [[pl,ru]] albo hasła {pl,ru,k}; op: {klucz, tytul, wszystkie, powrot, powrotTxt}
// Bez op.wszystkie sesja bierze tylko nieznane (jeśli zostały).
let C = null;
function cram(lista, op){
  op = op || {};
  wczytaj();
  const byly = new Set();
  let w = lista.map(x=>Array.isArray(x) ? {pl:x[0], ru:x[1], k:klucz(x[0])} : x)
               .filter(x=>!byly.has(x.k) && byly.add(x.k));
  if(!op.wszystkie){ const nz = w.filter(x=>!S.znam[x.k]); if(nz.length) w = nz; }
  if(!w.length) return;
  wejdz('slownik:cram:'+(op.klucz||'sesja'), ()=>cram(lista, op));
  C = {lista:mix(w), i:0, odwr:false, znane:0, nie:[], razem:w.length, runda:1, op};
  kartaCram();
}
function kartaCram(odwracanie){
  if(C.i>=C.lista.length){
    if(!C.nie.length) return koniec();
    C.lista = mix(C.nie); C.nie = []; C.i = 0; C.runda++;
  }
  const x = C.lista[C.i], pl2ru = S.kier==='pl2ru';
  const przod = pl2ru ? x.pl : x.ru, tyl = pl2ru ? x.ru : x.pl;
  el('contentWrap').innerHTML = `<div class="egz slow"><div class="exercise-card slow-cram" ${odwracanie?'style="animation:none"':''}>
    <div class="hint slow-gora"><span>Cram · ${C.znane}/${C.razem} poznanych${C.runda>1?' · runda '+C.runda:''}</span>
      <span class="slow-ikony">
        <button class="slow-ik" onclick="SLOWNIK.mowKarta()" aria-label="Posłuchaj">${svg('icon-speaker')}</button>
        <button class="slow-flaga ${pl2ru?'slow-fpl':'slow-fru'}" onclick="SLOWNIK.kierunek()" aria-label="Zmień kierunek"></button>
      </span></div>
    <div class="slow-przod ${przod.length>32?'slow-dlugi':''}" onclick="SLOWNIK.odwroc()">${esc(przod)}</div>
    ${C.odwr ? `<div class="slow-tyl">${esc(tyl)}</div>`
             : `<div class="slow-podp">↑ Нажми на карточку — увидишь ${pl2ru?'перевод':'по-польски'}</div>`}
    <div class="slow-btns"><button class="slow-nie" onclick="SLOWNIK.ocen(false)">✖ Jeszcze nie</button>
      <button class="slow-tak" onclick="SLOWNIK.ocen(true)">✓ Znam</button></div>
  </div>
  <div class="egz-note slow-info">${C.op.tytul?esc(C.op.tytul)+' · ':''}в этом круге осталось ${C.lista.length-C.i}</div></div>`;
  bezPrzycisku();
}
// samo odwrócenie karty bez animacji wejścia — inaczej cała karta mruga
function odwroc(){ if(!C) return; C.odwr = !C.odwr; kartaCram(true); }
function ocen(tak){
  if(!C) return;
  const x = C.lista[C.i];
  ustaw(x.k, tak);
  if(tak) C.znane++; else C.nie.push(x);
  C.i++; C.odwr = false;
  kartaCram();
}
function kierunek(){ wczytaj(); S.kier = S.kier==='pl2ru' ? 'ru2pl' : 'pl2ru'; zapisz(); if(C){ C.odwr = false; kartaCram(); } }
function mowKarta(){ if(C && C.lista[C.i]) mow(C.lista[C.i].pl); }
function koniec(){
  const op = C.op, ile = C.razem, rundy = C.runda;
  C = null;
  el('contentWrap').innerHTML = `<div class="exercise-card" style="text-align:center">
    <div style="font-size:48px;margin:12px 0;">★</div>
    <h3 style="font-size:20px;margin:8px 0;">${ile}/${ile}</h3>
    <p style="color:var(--text-light)">Świetnie! Все карточки этой сессии знаешь${rundy>1?' (кругов: '+rundy+')':''}. Отметки «Znam» сохранены в словаре.</p></div>`;
  przycisk(op.powrotTxt || '← Wróć', op.powrot || (()=>goBack()));
}

function cramZestaw(id, wszystkie2){
  const z = zestaw(id); if(!z) return;
  cram(z.wpisy, {klucz:id, tytul:z.tytul, wszystkie:!!wszystkie2});
}
function cramNowe(){
  wczytaj();
  const w = wszystkie().filter(x=>!S.znam[x.k]).slice(0,20);
  if(w.length) cram(w, {klucz:'nowe', tytul:'Następne 20 nowych'});
}
function cramPowtorka(){
  wczytaj();
  const w = mix(wszystkie().filter(x=>S.znam[x.k])).slice(0,20);
  if(w.length) cram(w, {klucz:'powtorka', tytul:'Powtórka', wszystkie:true});
}

// ---------- karta na ekranie głównym ----------
function kartaGlowna(){
  wczytaj();
  const w = wszystkie();
  return {opis: w.length+' słów i zwrotów z kursu · znasz '+ileZnam(w)};
}

return { ekran:ekranGlowny, zestaw:zestawEkran, szukaj, przelacz, cram, cramZestaw, cramNowe, cramPowtorka,
  odwroc, ocen, kierunek, mowKarta, mow, znam, kartaGlowna };
})();
