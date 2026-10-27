// ========================================================================
// STRUKTURY FORM PISEMNYCH — ekran do zakuwania planów na pamięć.
// Dane: data/struktury.js (plan kroków + zwroty z tłumaczeniem do każdego kroku),
// nazwa formy i długość biorą się z data/pisanie.js po id.
// Do nauki są trzy tryby: wszystko widać; polski ukryty (dotknij, żeby
// odkryć — sprawdzasz, czy pamiętasz zwrot); tylko plan (nazwy kroków).
// Stan: klucz 'b1struktury' — {u:{id:{n,last}}, tryb:'wszystko'|'ukryj'|'plan'}.
// ========================================================================
window.STRUKTURY = (function(){
'use strict';

const el = id => document.getElementById(id);
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const dzisISO = () => { const d=new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); };
const ik = id => '<svg class="egz-i"><use href="#'+id+'"/></svg>';

// ---------- stan ----------
let S = null;
function wczytaj(){
  try{ S = JSON.parse(localStorage.getItem('b1struktury')) || {}; }catch(e){ S = {}; }
  if(!S.u || typeof S.u!=='object') S.u = {};
  if(!['wszystko','ukryj','plan'].includes(S.tryb)) S.tryb = 'wszystko';
}
const zapisz = () => { try{ localStorage.setItem('b1struktury', JSON.stringify(S)); }catch(e){} };
const stat = id => S.u[id] || {n:0};

// ---------- dane ----------
function formy(){
  if(typeof STRUKTURY_DANE==='undefined' || typeof PISANIE==='undefined') return [];
  const k = PISANIE.krotkie, d = PISANIE.dlugie;
  return STRUKTURY_DANE.map(s=>{
    const f = [...k,...d].find(x=>x.id===s.id);
    return f ? {...s, f, krotka:k.includes(f)} : null;
  }).filter(Boolean);
}
const nr = id => formy().findIndex(x=>x.id===id);

// ---------- ekrany ----------
function wejdz(klucz, fn){
  if(typeof state!=='undefined') state.phase = 'struktury';
  if(typeof ekran==='function') ekran(klucz, fn);
}
function przycisk(txt, fn){
  const b = el('mainBtn'); if(!b) return;
  el('bottomWrap').style.display = ''; b.className = 'check-btn';
  b.textContent = txt; b.disabled = false; b.onclick = fn;
}
const bezPrzycisku = () => { el('bottomWrap').style.display = 'none'; };

function karta(x){
  const s = stat(x.id), ok = s.n>0;
  const opis = x.f.dlugosc+' · '+x.plan.length+' '+krokow(x.plan.length)+(ok ? ' · выучено, повторов: '+s.n : ' · ещё не учил');
  return `<div class="egz-card ${ok?'egz-done':''}" onclick="STRUKTURY.otworz('${x.id}')">
    <div class="egz-ico">${ik(ok?'egz-check':'egz-pen')}</div>
    <div class="egz-body"><div class="egz-t">${esc(x.f.forma)}</div><div class="egz-d">${esc(opis)}</div></div>
    <div class="egz-meta">${ok?'✓':'→'}</div></div>`;
}
function krokow(n){ const m10=n%10, m100=n%100;
  return (m10===1&&m100!==11) ? 'шаг' : (m10>=2&&m10<=4&&(m100<12||m100>14)) ? 'шага' : 'шагов'; }

function ekranGlowny(){
  wczytaj();
  wejdz('struktury', ekranGlowny);
  const wszystkie = formy(), uczone = wszystkie.filter(x=>stat(x.id).n>0).length;
  const pierwsza = wszystkie.find(x=>!(stat(x.id).n>0)) || wszystkie[0];
  let h = '<div class="egz kurs wz">';
  h += `<h3 class="egz-h">Структуры письменных форм</h3>
    <div class="egz-sub">Для каждой формы: план из шагов и готовые обороты к каждому шагу. Выучи план как скелет, и на экзамене остаётся только наполнить его своим содержанием. Нажми форму, чтобы увидеть структуру. В самой форме можно скрыть польский и проверять себя по памяти.</div>
    <div class="egz-mod"><div class="egz-mod-top"><span class="egz-mod-n">Выучено ${uczone} из ${wszystkie.length}</span>
      <span class="egz-mod-p" style="color:var(--primary)">${wszystkie.length?Math.round(uczone/wszystkie.length*100):0}%</span></div>
      <div class="egz-bar"><div class="egz-bar-f" style="width:${wszystkie.length?Math.round(uczone/wszystkie.length*100):0}%;background:var(--primary)"></div></div></div>`;
  if(pierwsza) h += `<div class="egz-card" onclick="STRUKTURY.otworz('${pierwsza.id}')"><div class="egz-ico">${ik('egz-bolt')}</div>
    <div class="egz-body"><div class="egz-t">Зубрить по порядку</div><div class="egz-d">${uczone?'Дальше: ':'Начать с: '}${esc(pierwsza.f.forma)}</div></div><div class="egz-meta">→</div></div>`;
  h += '<h3 class="egz-h">Короткие формы · 25–40 слов</h3>';
  wszystkie.filter(x=>x.krotka).forEach(x=>h += karta(x));
  h += '<h3 class="egz-h">Длинные формы · 160–175 слов</h3>';
  wszystkie.filter(x=>!x.krotka).forEach(x=>h += karta(x));
  h += '</div>';
  el('contentWrap').innerHTML = h;
  bezPrzycisku();
}

function frazy(lista){
  return '<div class="kurs-przyklady">'+lista.map(([pl,ru])=>
    `<div class="kurs-pr"><span class="kurs-pl" onclick="STRUKTURY.dotknij(this)">${esc(pl)}</span><span class="kurs-ru">${esc(ru)}</span></div>`).join('')+'</div>';
}

function otworz(id){
  wczytaj();
  const lista = formy(), i = lista.findIndex(x=>x.id===id);
  if(i<0) return ekranGlowny();
  const x = lista[i], f = x.f, poprz = lista[i-1], nast = lista[i+1];
  wejdz('struktury:'+id, ()=>otworz(id));
  const tryb = S.tryb;
  const btn = (t,txt) => `<button class="egz-chip ${tryb===t?'wz-wyb':''}" onclick="STRUKTURY.tryb('${t}','${id}')">${txt}</button>`;
  let h = `<div class="egz kurs wz"><div class="egz-ex">
    <div class="egz-hint">${esc(f.forma)} · ${esc(f.dlugosc)} · форма ${i+1} из ${lista.length}</div>
    <div class="kurs-karta"><div class="kurs-karta-n">Формула плана</div><div class="kurs-karta-t">${esc(x.formula)}</div></div>
    <div class="kurs-cel">${esc(x.ru)}</div>
    <div class="egz-note"><b>Оформление:</b> ${esc(x.uklad)}</div>
    <div class="wz-akcje">${btn('wszystko','Всё видно')}${btn('ukryj','Скрыть польский')}${btn('plan','Только план')}</div>
    <div class="str str-${tryb}" id="strTresc">`;
  x.plan.forEach(([naz,opis,fr],k)=>{
    h += `<div class="str-krok"><div class="str-gora"><span class="str-n">${k+1}</span>
      <span class="str-nazwa">${esc(naz)}</span><span class="str-opis">${esc(opis)}</span></div>${frazy(fr)}</div>`;
  });
  h += '</div>';
  if(f.uwaga) h += `<div class="egz-note"><b>Обрати внимание:</b> ${esc(f.uwaga)}</div>`;
  h += `<div class="wz-akcje">
    ${poprz?`<button class="egz-chip" onclick="STRUKTURY.otworz('${poprz.id}')">← ${esc(poprz.f.forma)}</button>`:''}
    ${nast?`<button class="egz-chip" onclick="STRUKTURY.otworz('${nast.id}')">${esc(nast.f.forma)} →</button>`:''}
    ${typeof WZORY!=='undefined' && f.wzor?`<button class="egz-chip" onclick="WZORY.esej('${f.id}')">Образец текста</button>`:''}
  </div></div></div>`;
  el('contentWrap').innerHTML = h;
  window.scrollTo(0,0);
  przycisk(nast ? 'Выучил ✓ · дальше →' : 'Выучил ✓ · к списку', ()=>oznacz(id));
}

function oznacz(id){
  wczytaj();
  const s = S.u[id] || {n:0};
  S.u[id] = {n:s.n+1, last:dzisISO()};
  zapisz();
  const lista = formy(), i = lista.findIndex(x=>x.id===id);
  if(lista[i+1]) otworz(lista[i+1].id); else ekranGlowny();
}

function tryb(t, id){ wczytaj(); S.tryb = t; zapisz(); otworz(id); }

// Dotknięcie zwrotu: w trybie „ukryj" pierwsze dotknięcie odkrywa, następne czyta na głos.
function dotknij(span){
  const box = el('strTresc');
  if(box && box.classList.contains('str-ukryj') && !span.classList.contains('str-odkryte')){
    span.classList.add('str-odkryte'); return;
  }
  if(typeof KURS!=='undefined' && KURS.mow) KURS.mow(span.textContent);
}

function kartaGlowna(){
  wczytaj();
  const w = formy(), u = w.filter(x=>stat(x.id).n>0).length;
  return {opis: w.length+' форм · выучено '+u+' · план и обороты для каждого шага', zrobione: w.length>0 && u===w.length};
}

return { ekran:ekranGlowny, otworz, oznacz, tryb, dotknij, kartaGlowna };
})();
