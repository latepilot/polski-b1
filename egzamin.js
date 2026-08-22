// ========================================================================
// EGZAMIN — trenażer zadań egzaminacyjnych B1
// Cały moduł żyje w jednej przestrzeni nazw, żeby nie zderzyć się
// z funkcjami głównej aplikacji (render, save, load, $ …).
// Stan trzyma osobny klucz w localStorage — słownik pozostaje nietknięty.
// ========================================================================
window.EGZ = (function(){
'use strict';

const EGZAMIN_DATA = new Date('2026-12-05T09:00:00');
const REJESTRACJA  = new Date('2026-10-05T12:00:00');
const PROG = 0.5;

const el   = id => document.getElementById(id);
const dni  = (a,b) => Math.ceil((a-b)/864e5);
const dzis = () => new Date().toISOString().slice(0,10);
const mix  = a => a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(v=>v[1]);
const norm = s => s.toLowerCase().trim().replace(/[.!?,]+$/,'').replace(/\s+/g,' ');
const bezZnakow = s => norm(s)
  .replace(/ą/g,'a').replace(/ć/g,'c').replace(/ę/g,'e').replace(/ł/g,'l')
  .replace(/ń/g,'n').replace(/ó/g,'o').replace(/ś/g,'s').replace(/ź/g,'z').replace(/ż/g,'z');

let S=null, V={};

const pusty = () => ({gram:{},sluch:{},moje:{},pisanie:{},bledy:[],hist:{},seria:0,ostatni:null});
function wczytaj(){
  try{ S=JSON.parse(localStorage.getItem('b1exam'))||pusty(); }catch(e){ S=pusty(); }
  for(const k of ['gram','sluch','moje','pisanie','hist']) if(!S[k]) S[k]={};
  if(!Array.isArray(S.bledy)) S.bledy=[];
}
const zapisz = () => localStorage.setItem('b1exam', JSON.stringify(S));
function stat(m,k){ if(!S[m][k]) S[m][k]={dobrze:0,zle:0,zrobione:0}; return S[m][k]; }
function wynik(m,ks){ let d=0,w=0; for(const k of ks){const s=S[m][k]; if(s){d+=s.dobrze;w+=s.dobrze+s.zle;}} return {dobrze:d,wszystkie:w,pct:w?d/w:0}; }
function pokrycie(m,ks,bank){ let z=0,a=0; for(const k of ks){a+=bank[k].zadania.length; const s=S[m][k]; if(s) z+=Math.min(s.zrobione,bank[k].zadania.length);} return a?z/a:0; }
const maGenerator = k => typeof GENERATORY!=='undefined' && !!GENERATORY[k];

function ikona(id){ return '<svg class="egz-i"><use href="#'+id+'"/></svg>'; }
function wyjscie(){ V={}; if(typeof goHome==='function') goHome(); }

// ---------- plan dnia ----------
function planDnia(){
  const b=[];
  if(S.bledy.length>=4) b.push({typ:'bledy',tytul:'Powtórka błędów',opis:S.bledy.length+' zadań',ico:'egz-bolt'});
  const g=[...GRAM_KOLEJNOSC].sort((x,y)=>(S.gram[x]?.zrobione||0)-(S.gram[y]?.zrobione||0))[0];
  b.push({typ:'gram',klucz:g,tytul:'Gramatyka: '+GRAMATYKA[g].tytul,
    opis:'Zadanie '+GRAMATYKA[g].nr+(maGenerator(g)?' — świeże zadania':' — '+GRAMATYKA[g].zadania.length+' pytań'),ico:'egz-book'});
  const sl=SLUCH_KOLEJNOSC[Math.abs(dni(new Date(),new Date('2026-08-21')))%SLUCH_KOLEJNOSC.length];
  b.push({typ:'sluch',klucz:sl,tytul:'Słuchanie: '+SLUCHANIE[sl].tytul,opis:'Zadanie '+SLUCHANIE[sl].nr,ico:'egz-ear'});
  if(typeof GEN_MOJE!=='undefined' && typeof mojeSlowa==='function' && mojeSlowa().length)
    b.push({typ:'moje',klucz:'pisownia',tytul:'Moje słowa — pisownia',
            opis:mojeSlowa().length+' haseł z Twojego słownika',ico:'egz-pen'});
  const d=new Date().getDay();
  if(d===2||d===6) b.push({typ:'pisanie',tytul:'Pisanie — forma krótka',opis:'Szkielet + własny tekst',ico:'egz-pen'});
  return b.slice(0,4);
}

// ---------- ekran główny trenażera ----------
function menu(){
  wczytaj(); V={};
  const doE=dni(EGZAMIN_DATA,new Date()), doR=dni(REJESTRACJA,new Date());
  let h='<div class="egz">';
  h+=`<div class="egz-cd"><div class="egz-cd-n">${doE}</div><div class="egz-cd-l">dni do egzaminu</div>
      <div class="egz-cd-d">5–6 grudnia 2026 · Gdańsk</div></div>`;
  if(doR>0) h+=`<div class="egz-alert"><b>Rejestracja: 5 października, 12:00</b> — za ${doR} dni.
      Miejsca znikają w kilka minut. Ustaw alarm i miej gotowe dane oraz płatność.</div>`;

  const dzisZrob=S.hist[dzis()]||0;
  h+=`<h3 class="egz-h">Plan na dziś</h3><div class="egz-sub">Około 25 minut. ${dzisZrob?'Zrobione dziś: '+dzisZrob+' zadań.':'Jeszcze nie zaczęte.'}</div>`;
  for(const b of planDnia()){
    const gotowe = b.typ==='gram' && (S.gram[b.klucz]?.zrobione||0)>=GRAMATYKA[b.klucz].zadania.length;
    h+=`<div class="egz-card ${gotowe?'egz-done':''}" onclick="EGZ.blok('${b.typ}','${b.klucz||''}')">
      <div class="egz-ico">${ikona(gotowe?'egz-check':b.ico)}</div>
      <div class="egz-body"><div class="egz-t">${b.tytul}</div><div class="egz-d">${b.opis}</div></div>
      <div class="egz-meta">${gotowe?'✓':'→'}</div></div>`;
  }

  h+=`<h3 class="egz-h">Moduły egzaminu</h3><div class="egz-sub">Próg to 50% z <b>każdego</b> modułu osobno — średnia się nie liczy.</div>`;
  for(const m of [
    {n:'Poprawność gramatyczna',...wynik('gram',GRAM_KOLEJNOSC),pok:pokrycie('gram',GRAM_KOLEJNOSC,GRAMATYKA)},
    {n:'Rozumienie ze słuchu',...wynik('sluch',SLUCH_KOLEJNOSC),pok:pokrycie('sluch',SLUCH_KOLEJNOSC,SLUCHANIE)},
  ]){
    const p=Math.round(m.pct*100);
    const c=m.wszystkie===0?'var(--text-muted)':(m.pct>=PROG?'var(--success)':'var(--error)');
    h+=`<div class="egz-mod"><div class="egz-mod-top"><span class="egz-mod-n">${m.n}</span>
      <span class="egz-mod-p" style="color:${c}">${m.wszystkie?p+'%':'—'}</span></div>
      <div class="egz-bar"><div class="egz-bar-f" style="width:${p}%;background:${c}"></div><div class="egz-prog"></div></div>
      <div class="egz-note">${m.wszystkie?m.dobrze+'/'+m.wszystkie+' poprawnych · przerobione '+Math.round(m.pok*100)+'% banku':'brak danych — zacznij ćwiczyć'}</div></div>`;
  }
  h+=`<div class="egz-mod"><div class="egz-mod-top"><span class="egz-mod-n">Pisanie</span>
      <span class="egz-mod-p" style="color:var(--text-muted)">${Object.keys(S.pisanie).length} prac</span></div>
      <div class="egz-note">Oceniane ręcznie wg 3 kryteriów po 10 p.</div></div>`;

  // Moje słowa — gramatyka na własnym słowniku
  if(typeof GEN_MOJE!=='undefined' && typeof mojeSlowa==='function'){
    const ile = mojeSlowa().length, przym = mojePrzymiotniki().length, rzecz = mojeRzeczowniki().length;
    h+=`<h3 class="egz-h">Moje słowa</h3><div class="egz-sub">Gramatyka na Twoim własnym słowniku — ${ile} haseł.</div>`;
    h+=karta('egz-pen','Pisownia', ile+' haseł · wszystkie, także nowe',"EGZ.blok('moje','pisownia')");
    if(przym) h+=karta('egz-book','Odmiana przymiotnika', przym+' przymiotników z Twojej listy',"EGZ.blok('moje','przymiotniki')");
    if(rzecz) h+=karta('egz-book','Odmiana rzeczownika', rzecz+' rzeczowników z opisem',"EGZ.blok('moje','rzeczowniki')");
  }

  h+=`<h3 class="egz-h">Ćwicz osobno</h3>`;
  h+=karta('egz-book','Gramatyka — 8 typów zadań',GRAM_KOLEJNOSC.reduce((s,k)=>s+GRAMATYKA[k].zadania.length,0)+' zadań','EGZ.menuGram()');
  h+=karta('egz-ear','Słuchanie','Nagrania czytane przez przeglądarkę','EGZ.menuSluch()');
  h+=karta('egz-pen','Pisanie','Szkielety form + samoocena','EGZ.menuPisanie()');
  if(S.bledy.length) h+=karta('egz-bolt','Powtórka błędów',S.bledy.length+' zadań',"EGZ.blok('bledy','')");
  h+='</div>';

  el('contentWrap').innerHTML=h;
  el('progressStrip').innerHTML='';
  przycisk('Zacznij dzisiejszą sesję', ()=>{ const b=planDnia()[0]; blok(b.typ,b.klucz||''); });
}
function karta(ico,t,d,fn){
  return `<div class="egz-card" onclick="${fn}"><div class="egz-ico">${ikona(ico)}</div>
    <div class="egz-body"><div class="egz-t">${t}</div><div class="egz-d">${d}</div></div><div class="egz-meta">→</div></div>`;
}
function przycisk(txt,fn,wyl){
  const b=el('mainBtn'); if(!b) return;
  b.textContent=txt; b.disabled=!!wyl; b.onclick=fn||null;
}

function menuGram(){
  let h='<div class="egz"><h3 class="egz-h">Poprawność gramatyczna</h3><div class="egz-sub">8 typów zadań. 45 minut, 30 punktów.</div>';
  for(const k of GRAM_KOLEJNOSC){
    const z=GRAMATYKA[k],s=S.gram[k],p=s&&(s.dobrze+s.zle)?Math.round(s.dobrze/(s.dobrze+s.zle)*100):null;
    const g=(s?.zrobione||0)>=z.zadania.length;
    h+=`<div class="egz-card ${g?'egz-done':''}" onclick="EGZ.blok('gram','${k}')">
      <div class="egz-ico">${ikona(g?'egz-check':'egz-book')}</div>
      <div class="egz-body"><div class="egz-t">${z.nr}. ${z.tytul}</div>
      <div class="egz-d">${maGenerator(k)?'zadania generowane za każdym razem':z.zadania.length+' zadań'}${p!==null?' · '+p+'% poprawnych':''}</div></div>
      <div class="egz-meta">${g?'✓':'→'}</div></div>`;
  }
  el('contentWrap').innerHTML=h+'</div>';
  przycisk('← Trenażer', menu);
}
function menuSluch(){
  let h='<div class="egz"><h3 class="egz-h">Rozumienie ze słuchu</h3><div class="egz-sub">30 minut, 30 punktów. Zadanie I odtwarzane tylko RAZ — jak na egzaminie.</div>';
  for(const k of SLUCH_KOLEJNOSC){
    const z=SLUCHANIE[k],s=S.sluch[k],p=s&&(s.dobrze+s.zle)?Math.round(s.dobrze/(s.dobrze+s.zle)*100):null;
    h+=`<div class="egz-card" onclick="EGZ.blok('sluch','${k}')"><div class="egz-ico">${ikona('egz-ear')}</div>
      <div class="egz-body"><div class="egz-t">${z.nr}. ${z.tytul}</div>
      <div class="egz-d">${z.zadania.length} zadań · ${z.powtorzenia===1?'jedno odtworzenie':'dwa odtworzenia'}${p!==null?' · '+p+'%':''}</div></div>
      <div class="egz-meta">→</div></div>`;
  }
  el('contentWrap').innerHTML=h+'</div>';
  przycisk('← Trenażer', menu);
}
function menuPisanie(){
  let h='<div class="egz"><h3 class="egz-h">Pisanie</h3><div class="egz-sub">Na egzaminie wybierasz JEDEN zestaw i piszesz OBA zadania. 75 minut.</div>';
  h+='<h3 class="egz-h">Formy krótkie (25–40 słów)</h3>';
  PISANIE.krotkie.forEach((f,i)=>h+=karta('egz-pen',f.forma,f.dlugosc+(S.pisanie['k'+i]?' · napisane':''),`EGZ.pisanie('krotkie',${i})`));
  h+='<h3 class="egz-h">Formy długie (160–175 słów)</h3>';
  PISANIE.dlugie.forEach((f,i)=>h+=karta('egz-pen',f.forma,f.dlugosc+(S.pisanie['d'+i]?' · napisane':''),`EGZ.pisanie('dlugie',${i})`));
  el('contentWrap').innerHTML=h+'</div>';
  przycisk('← Trenażer', menu);
}

// ---------- sesja ćwiczeń ----------
function blok(typ,klucz){
  wczytaj();
  if(typ==='pisanie'){ menuPisanie(); return; }
  let zad=[],meta={};
  if(typ==='gram'){
    const z=GRAMATYKA[klucz];
    zad=z.zadania.map((q,i)=>({...q,_i:i,_typ:'gram',_klucz:klucz,_inter:z.interakcja}));
    // Świeże zadania z generatora — inaczej po tygodniu pamiętasz,
    // że „w trzecim pytaniu jest B", a nie samą gramatykę.
    const gen = (typeof GENERATORY!=='undefined') && GENERATORY[klucz];
    if(gen){
      const widziane = new Set(zad.map(q=>q.zdanie));
      const swieze=[];
      for(let prob=0; prob<80 && swieze.length<8; prob++){
        const q=gen();
        if(!q || widziane.has(q.zdanie)) continue;
        widziane.add(q.zdanie);
        swieze.push({...q,_typ:'gram',_klucz:klucz,_inter:'wybor',_gen:true});
      }
      zad=[...swieze,...zad];
    }
    meta={tytul:z.nr+'. '+z.tytul,polecenie:z.polecenie,ramka:z.ramka};
  } else if(typ==='sluch'){
    const z=SLUCHANIE[klucz];
    zad=z.zadania.map((q,i)=>({...q,_i:i,_typ:'sluch',_klucz:klucz,
      _inter:q.items?'taknie':(q.pary?'pary':'audio'),_powt:z.powtorzenia}));
    meta={tytul:z.nr+'. '+z.tytul,polecenie:z.polecenie};
  } else if(typ==='moje'){
    const gen = (typeof GEN_MOJE!=='undefined') && GEN_MOJE[klucz];
    if(!gen){ menu(); return; }
    const widziane=new Set();
    for(let prob=0; prob<120 && zad.length<10; prob++){
      const q=gen();
      if(!q || widziane.has(q.zdanie)) continue;
      widziane.add(q.zdanie);
      zad.push({...q,_typ:'moje',_klucz:klucz,_inter:q._wpisz?'wpisz':'wybor'});
    }
    const nazwy={przymiotniki:'Moje słowa — odmiana przymiotnika',
                 rzeczowniki:'Moje słowa — odmiana rzeczownika',
                 pisownia:'Moje słowa — pisownia'};
    const polec={przymiotniki:'Przymiotniki z Twojego słownika. Wybierz właściwą końcówkę.',
                 rzeczowniki:'Rzeczowniki z Twojego słownika. Wybierz właściwą formę.',
                 pisownia:'Napisz po polsku. Liczą się polskie znaki — tak jak na egzaminie.'};
    meta={tytul:nazwy[klucz],polecenie:polec[klucz]};
  } else if(typ==='bledy'){
    zad=S.bledy.slice(0,10).map(b=>{
      // zadanie z generatora nie ma stałego numeru — leży w kolejce w całości
      if(b.gen && b.q) return {...b.q,_typ:b.modul,_klucz:b.klucz,
        _inter:b.q._wpisz?'wpisz':'wybor',_gen:true};
      const bank=b.modul==='gram'?GRAMATYKA:SLUCHANIE, z=bank[b.klucz];
      if(!z||!z.zadania[b.idx]) return null;
      const q=z.zadania[b.idx];
      return {...q,_i:b.idx,_typ:b.modul,_klucz:b.klucz,
        _inter:b.modul==='gram'?z.interakcja:(q.items?'taknie':(q.pary?'pary':'audio')),
        _powt:z.powtorzenia,_ramkaZ:z.ramka};
    }).filter(Boolean);
    meta={tytul:'Powtórka błędów',polecenie:'Zadania, w których się pomyliłeś. Poprawna odpowiedź usuwa zadanie z listy.'};
  }
  if(!zad.length){ menu(); return; }
  V={typ,klucz,zadania:typ==='bledy'?zad:mix(zad),i:0,meta,wyniki:[],odp:null,
     sprawdzone:false,odtworzone:0,uzyte:[],ogonki:false};
  pytanie();
}

function pytanie(){
  const q=V.zadania[V.i];
  const ramka = V.meta.ramka || q._ramkaZ;
  let h='<div class="egz">';
  h+='<div class="egz-dots">';
  V.zadania.forEach((_,i)=>{ const r=V.wyniki[i];
    h+=`<span class="egz-dot ${i===V.i?'egz-now':r===true?'egz-ok':r===false?'egz-no':''}"></span>`; });
  h+='</div>';
  h+=`<div class="egz-ex"><div class="egz-hint">${V.meta.tytul} · ${V.i+1}/${V.zadania.length}</div>`;
  h+=`<div class="egz-sub">${V.meta.polecenie}</div>`;

  if(q._typ==='sluch'){
    const lim=q._powt||2, zost=lim-V.odtworzone;
    h+=`<button class="egz-play" id="egzPlay" onclick="EGZ.graj()" ${zost<=0?'disabled':''}>
      ${ikona('egz-play')} ${V.odtworzone===0?'Odtwórz nagranie':'Odtwórz ponownie'} (${zost} ${zost===1?'raz':'razy'})</button>`;
    if(V.odtworzone===0) h+=`<div class="egz-sub" style="text-align:center">Najpierw posłuchaj, potem odpowiedz.</div>`;
  }

  const widac = q._typ!=='sluch' || V.odtworzone>0;

  if(q._inter==='wybor'||q._inter==='audio'){
    h+=`<div class="egz-q">${q._typ==='sluch'?q.pytanie:q.zdanie.replace('___','<span class="egz-blank"></span>')}</div>`;
    if(widac) q.opcje.forEach((o,i)=>{
      let c=''; if(V.sprawdzone){ if(i===q.ok)c='egz-ok'; else if(i===V.odp)c='egz-no'; } else if(i===V.odp)c='egz-sel';
      h+=`<button class="egz-opt ${c}" onclick="EGZ.wybierz(${i})">${o}</button>`;
    });
  }
  else if(q._inter==='ramka'){
    h+='<div class="egz-ramka">';
    (ramka||[]).forEach(w=>{ const u=V.uzyte.includes(w);
      h+=`<button class="egz-chip ${u?'egz-used':''}" ${u?'':`onclick="EGZ.chip('${w}')"`}>${w}</button>`; });
    h+=`</div><div class="egz-q">${q.zdanie.replace(/___/g,'<span class="egz-blank"></span>')}</div>`;
    h+=pole(q);
  }
  else if(q._inter==='wpisz'||q._inter==='pytanie'){
    h+=`<div class="egz-q">${q.zdanie.replace('___','<span class="egz-blank"></span>').replace(/\*(.+?)\*/g,'<em>$1</em>')}</div>`;
    if(q._inter==='pytanie') h+=`<div class="egz-sub">Wpisz samo słowo pytające (np. „na kogo”, „czym”).</div>`;
    h+=pole(q);
  }
  else if(q._inter==='parafraza'){
    h+=`<div class="egz-q">${q.zdanie}</div><div class="egz-sub">Użyj wyrazu: <b>${q.wyraz}</b></div>`;
    h+=`<textarea class="egz-inp egz-ta" id="egzInp" ${V.sprawdzone?'disabled':''}
        oninput="EGZ.wpis(this.value)" placeholder="Przekształć zdanie…">${V.odp||''}</textarea>`
        + klawiszePL();
  }
  else if(q._inter==='taknie' && widac){
    h+=`<div class="egz-q">${q.pytanie}</div>`;
    if(!V.odp) V.odp={};
    q.items.forEach((it,i)=>{
      const s=V.odp[i]; let ct='',cn='';
      if(V.sprawdzone){ if(it.ok)ct='egz-ok'; else cn='egz-ok';
        if(s!==undefined&&s!==it.ok){ if(s)ct='egz-no'; else cn='egz-no'; } }
      else { if(s===true)ct='egz-sel'; if(s===false)cn='egz-sel'; }
      h+=`<div class="egz-tn-row"><span class="egz-tn-t">${it.text}</span>
        <button class="egz-tn ${ct}" onclick="EGZ.tn(${i},true)">TAK</button>
        <button class="egz-tn ${cn}" onclick="EGZ.tn(${i},false)">NIE</button></div>`;
    });
  }
  else if(q._inter==='pary' && widac){
    h+=`<div class="egz-q">${q.pytanie}</div>`;
    if(!V.odp) V.odp={};
    const prawe = V._pary || (V._pary=mix(q.pary.map(p=>p.right)));
    q.pary.forEach((p,i)=>{
      h+=`<div class="egz-para"><div class="egz-para-l">${p.left}</div>
        <select class="egz-inp" onchange="EGZ.para(${i},this.value)" ${V.sprawdzone?'disabled':''}>
        <option value="">— wybierz —</option>`;
      prawe.forEach(r=>h+=`<option ${V.odp[i]===r?'selected':''}>${r}</option>`);
      h+='</select></div>';
    });
  }

  if(V.sprawdzone){
    const ok=V.wyniki[V.i];
    h+=`<div class="egz-fb ${ok?'egz-fb-ok':'egz-fb-no'}">${ok?'✓ Dobrze!':(V.ogonki?'✕ Prawie! Forma jest dobra, brakuje polskich znaków.':'✕ Niepoprawnie.')}`;
    if(!ok){
      let p='';
      if(q._inter==='wybor'||q._inter==='audio') p=q.opcje[q.ok];
      else if(q._inter==='parafraza') p=q.ok.charAt(0).toUpperCase()+q.ok.slice(1)+'.';
      else if(q.ok) p=q.ok;
      if(p) h+=` Poprawna: <b>${p}</b>`;
    }
    if(q.wyjasnienie) h+=`<div class="egz-why">${q.wyjasnienie}</div>`;
    h+='</div>';
    if(q._typ==='sluch'&&q.audio) h+=`<div class="egz-wzor"><b>Transkrypcja:</b>\n${q.audio.trim()}</div>`;
  }
  h+='</div></div>';
  el('contentWrap').innerHTML=h;

  const i=el('egzInp');
  if(i&&!V.sprawdzone){ i.focus();
    i.onkeydown=e=>{ if(e.key==='Enter'&&!e.shiftKey){ e.preventDefault(); akcja(); } }; }
  odswiezPrzycisk();
}
function pole(q){
  const c=V.sprawdzone?(V.wyniki[V.i]?'egz-ok':'egz-no'):'';
  return `<input class="egz-inp ${c}" id="egzInp" value="${(V.odp||'').replace(/"/g,'&quot;')}"
    ${V.sprawdzone?'disabled':''} oninput="EGZ.wpis(this.value)" autocomplete="off"
    autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="wpisz odpowiedź">`
    + klawiszePL();
}

// Na iPhonie polskie znaki wymagają przytrzymania litery, a nie każda
// klawiatura je pokazuje. Bez nich odpowiedź "wedlug" jest liczona jako
// błąd, choć wiedza jest poprawna — stąd własny pasek znaków.
const ZNAKI_PL = ['ą','ć','ę','ł','ń','ó','ś','ź','ż'];
function klawiszePL(idPola){
  if(V.sprawdzone) return '';
  const cel = idPola || 'egzInp';
  return '<div class="egz-znaki">' +
    ZNAKI_PL.map(z=>`<button type="button" class="egz-znak"
      onmousedown="event.preventDefault()"
      onclick="EGZ.wstawZnak('${z}','${cel}')">${z}</button>`).join('') +
    '</div>';
}

// łacińskie odpowiedniki — po to, żeby dało się poprawić już wpisane słowo
const ODPOWIEDNIK = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};

// Wstawia znak w miejscu kursora. Jeśli tuż przed kursorem stoi łaciński
// odpowiednik (wpisane "wedlug", kursor za "l"), podmienia go zamiast
// dopisywać — inaczej wychodziło "wedłlug" i literę trzeba było kasować.
function wstawZnak(znak, idPola){
  const pole2 = el(idPola || 'egzInp');
  if(!pole2 || pole2.disabled) return;
  const s = pole2.selectionStart ?? pole2.value.length;
  const e = pole2.selectionEnd   ?? pole2.value.length;

  let od = s, tekst = pole2.value;
  if(s === e && s > 0){
    const poprz = tekst[s-1].toLowerCase();
    if(ODPOWIEDNIK[znak] === poprz) od = s - 1;   // podmiana zamiast dopisania
  }
  pole2.value = tekst.slice(0,od) + znak + tekst.slice(e);
  const poz = od + znak.length;
  pole2.focus();
  try{ pole2.setSelectionRange(poz,poz); }catch(err){}
  if(idPola === 'egzPraca') licz(V.cel);
  else V.odp = pole2.value;
}
function odswiezPrzycisk(){
  const q=V.zadania[V.i];
  if(V.sprawdzone){ przycisk(V.i<V.zadania.length-1?'Dalej →':'Zakończ', dalej); return; }
  const czeka = q._typ==='sluch' && V.odtworzone===0;
  przycisk(czeka?'Najpierw odtwórz nagranie':'Sprawdź', czeka?null:akcja, czeka);
}

// ---------- interakcje ----------
function wybierz(i){ if(V.sprawdzone) return; V.odp=i; pytanie(); }
function tn(i,v){ if(V.sprawdzone) return; if(!V.odp)V.odp={}; V.odp[i]=v; pytanie(); }
function chip(w){ if(V.sprawdzone) return; V.odp=w; pytanie(); }
function wpis(v){ V.odp=v; }            // bez przerysowania — kursor zostaje na miejscu
function para(i,v){ if(!V.odp)V.odp={}; V.odp[i]=v; }

// ---------- synteza mowy ----------
let glosPL=null;
function szukajGlosu(){
  if(!('speechSynthesis' in window)) return;
  glosPL = speechSynthesis.getVoices().find(v=>v.lang && v.lang.toLowerCase().startsWith('pl')) || null;
}
if('speechSynthesis' in window){ speechSynthesis.onvoiceschanged=szukajGlosu; szukajGlosu(); }

function graj(){
  const q=V.zadania[V.i];
  if(!('speechSynthesis' in window)){ V.odtworzone=(q._powt||1); pytanie(); return; }
  if(!glosPL) szukajGlosu();
  speechSynthesis.cancel();
  const przed=V.odtworzone; let zamkniete=false;
  const domknij=()=>{ if(zamkniete||V.odtworzone!==przed) return;
    zamkniete=true; clearTimeout(V._timer); V.odtworzone++; pytanie(); };
  const linie=q.audio.split(/\n|(?=—\s*(?:Kobieta|Mężczyzna|Osoba|Dziennikarz))/).map(s=>s.trim()).filter(Boolean);
  linie.forEach((l,idx)=>{
    const u=new SpeechSynthesisUtterance(l.replace(/^(Kobieta|Mężczyzna|Osoba \w+|Dziennikarz|Joanna Kamińska):\s*/,''));
    u.lang='pl-PL'; if(glosPL) u.voice=glosPL;
    u.rate=0.92; u.pitch=/Kobieta|Joanna|Osoba druga|Osoba czwarta/.test(l)?1.15:0.95;
    if(idx===linie.length-1) u.onend=domknij;
    u.onerror=domknij;
    speechSynthesis.speak(u);
  });
  // onend bywa gubiony (karta w tle, wyciszony dźwięk, iOS) — bez tego pytanie
  // zostałoby zablokowane na zawsze
  V._timer=setTimeout(domknij, Math.max(5000, q.audio.length/11*1000+4000));
  const b=el('egzPlay'); if(b){ b.disabled=true; b.innerHTML=ikona('egz-play')+' Odtwarzanie…'; }
}

// ---------- sprawdzanie ----------
function akcja(){
  if(V.sprawdzone){ dalej(); return; }
  const q=V.zadania[V.i]; let ok=false; V.ogonki=false;

  if(q._inter==='wybor'||q._inter==='audio'){
    if(V.odp===null||V.odp===undefined) return;
    ok = V.odp===q.ok;
  }
  else if(q._inter==='ramka'||q._inter==='wpisz'||q._inter==='pytanie'){
    const v=norm(V.odp||''); if(!v) return;
    ok = v===norm(q.ok)||(q.alt||[]).some(a=>norm(a)===v);
    if(ok&&q._inter==='ramka'&&!V.uzyte.includes(q.ok)) V.uzyte.push(q.ok);
    V.ogonki = !ok && bezZnakow(V.odp||'')===bezZnakow(q.ok);
  }
  else if(q._inter==='parafraza'){
    const v=norm(V.odp||''); if(!v) return;
    ok = v===norm(q.ok)||(q.alt||[]).some(a=>norm(a)===v);
    if(!ok){ const wz=norm(q.ok).split(' '),uz=v.split(' ');
      const traf=wz.filter(w=>uz.includes(w)).length;
      ok = uz.includes(norm(q.wyraz).split(' ')[0]) && traf/wz.length>=0.7; }
  }
  else if(q._inter==='taknie'){
    if(!V.odp||Object.keys(V.odp).length<q.items.length) return;
    ok = q.items.every((it,i)=>V.odp[i]===it.ok);
  }
  else if(q._inter==='pary'){
    if(!V.odp||Object.keys(V.odp).filter(k=>V.odp[k]).length<q.pary.length) return;
    ok = q.pary.every((p,i)=>V.odp[i]===p.right);
  }

  V.wyniki[V.i]=ok; V.sprawdzone=true;
  const s=stat(q._typ,q._klucz); s.zrobione++; ok?s.dobrze++:s.zle++;
  const ten = b => q._gen
    ? (b.gen && b.q && b.q.zdanie===q.zdanie)
    : (!b.gen && b.modul===q._typ && b.klucz===q._klucz && b.idx===q._i);
  if(ok) S.bledy=S.bledy.filter(b=>!ten(b));
  else if(!S.bledy.some(ten)){
    S.bledy.push(q._gen
      ? {modul:q._typ,klucz:q._klucz,gen:true,
         q:{zdanie:q.zdanie,opcje:q.opcje,ok:q.ok,wyjasnienie:q.wyjasnienie,_wpisz:q._wpisz}}
      : {modul:q._typ,klucz:q._klucz,idx:q._i});
    if(S.bledy.length>60) S.bledy=S.bledy.slice(-60);   // kolejka nie rośnie bez końca
  }
  S.hist[dzis()]=(S.hist[dzis()]||0)+1;
  if(S.ostatni!==dzis()){
    const wczoraj=new Date(Date.now()-864e5).toISOString().slice(0,10);
    S.seria = S.ostatni===wczoraj ? S.seria+1 : 1; S.ostatni=dzis();
  }
  zapisz(); pytanie();
}

function dalej(){
  clearTimeout(V._timer);
  if(V.i<V.zadania.length-1){
    V.i++; V.odp=null; V.sprawdzone=false; V.odtworzone=0; V._pary=null; V.ogonki=false;
    pytanie();
  } else podsumowanie();
}

function podsumowanie(){
  const d=V.wyniki.filter(Boolean).length, n=V.zadania.length, p=Math.round(d/n*100), zdane=p>=50;
  let h=`<div class="egz"><div class="egz-ex" style="text-align:center">
    <div style="color:${zdane?'var(--success)':'var(--error)'};margin-bottom:8px">${ikona(zdane?'egz-check':'egz-target')}</div>
    <div class="egz-big" style="color:${zdane?'var(--success)':'var(--error)'}">${p}%</div>
    <div class="egz-sub" style="font-size:15px">${d} z ${n} poprawnych</div>
    <div class="egz-sub">${zdane?'Powyżej progu 50% — tak trzymaj.':'Poniżej progu. Te zadania wrócą w powtórce błędów.'}</div>`;
  if(S.seria>1) h+=`<div class="egz-uwaga" style="text-align:left">Seria: <b>${S.seria} dni</b> z rzędu. Codzienne 25 minut daje więcej niż 3 godziny raz w tygodniu.</div>`;
  h+='</div>';
  const zle=V.zadania.filter((_,i)=>!V.wyniki[i]);
  if(zle.length){
    h+='<h3 class="egz-h">Do powtórzenia</h3>';
    zle.forEach(q=>h+=`<div class="egz-mod"><div style="font-size:13.5px;margin-bottom:4px">${(q.zdanie||q.pytanie||'').replace(/\*/g,'')}</div>
      <div class="egz-note">${q.wyjasnienie||''}</div></div>`);
  }
  el('contentWrap').innerHTML=h+'</div>';
  przycisk('← Trenażer', menu);
}

// ---------- pisanie ----------
function pisanie(grupa,idx){
  wczytaj();
  const f=PISANIE[grupa][idx], id=(grupa==='krotkie'?'k':'d')+idx, z=S.pisanie[id]||{};
  const cel=parseInt(f.dlugosc);
  let h=`<div class="egz"><div class="egz-ex"><div class="egz-hint">${f.forma} · ${f.dlugosc}</div>
    <div class="egz-q" style="font-size:15px">${f.temat}</div>
    <div class="egz-szkielet"><b style="font-size:13px">Szkielet — trzymaj się kolejności:</b><ul>`;
  f.szkielet.forEach(s=>h+=`<li>${s}</li>`);
  h+='</ul></div>';
  if(f.zwroty){ h+='<div style="font-size:13px;font-weight:600;margin-bottom:4px">Przydatne zwroty:</div><div class="egz-zwroty">';
    f.zwroty.forEach(x=>h+=`<span class="egz-zwrot">${x}</span>`); h+='</div>'; }
  if(f.uwaga) h+=`<div class="egz-uwaga">⚠ ${f.uwaga}</div>`;
  h+=`<textarea class="egz-inp egz-praca" id="egzPraca" placeholder="Pisz tutaj…"
      oninput="EGZ.licz(${cel})">${z.tekst||''}</textarea>`
    + '<div class="egz-znaki">' + ZNAKI_PL.map(zn=>`<button type="button" class="egz-znak"
        onmousedown="event.preventDefault()" onclick="EGZ.wstawZnak('${zn}','egzPraca')">${zn}</button>`).join('') + '</div>'
    + `<div class="egz-count" id="egzLicznik">0 słów</div></div>`;

  h+=`<h3 class="egz-h">Samoocena — 3 kryteria po 10 punktów</h3>
      <div class="egz-sub">Na egzaminie tak właśnie liczą. Zaznacz tylko to, co naprawdę zrobiłeś.</div>`;
  KRYTERIA.forEach(k=>{
    h+=`<div class="egz-kryt"><h4>${k.nazwa} — ${k.max} p.</h4>`;
    k.pytania.forEach((p,i)=>{
      h+=`<label><input type="checkbox" data-k="${k.id+i}" ${z.check&&z.check[k.id+i]?'checked':''}
        onchange="EGZ.ocena()"><span>${p}</span></label>`; });
    h+='</div>';
  });
  h+='<div class="egz-mod" id="egzOcena"></div>';
  h+=`<div class="egz-card" onclick="EGZ.wzor('${grupa}',${idx})"><div class="egz-ico">${ikona('egz-check')}</div>
    <div class="egz-body"><div class="egz-t">Pokaż wzór</div><div class="egz-d">Dopiero po napisaniu własnego tekstu!</div></div>
    <div class="egz-meta">→</div></div><div id="egzWzor"></div></div>`;

  el('contentWrap').innerHTML=h;
  el('progressStrip').innerHTML='';
  V={pisanieId:id,grupa,idx,cel,sprawdzone:false};
  licz(cel); ocena();
  przycisk('Zapisz i wróć', ()=>{ zapiszPrace(); menuPisanie(); });
}
function licz(cel){
  const t=el('egzPraca').value.trim(), n=t?t.split(/\s+/).length:0;
  const dol=Math.round(cel*0.9), gor=Math.round(cel*1.15);
  const e=el('egzLicznik');
  e.textContent=n+' słów (cel: '+dol+'–'+gor+')';
  e.className='egz-count'+(n>=dol&&n<=gor?' egz-count-ok':'');
}
function ocena(){
  let pkt=0,max=0;
  KRYTERIA.forEach(k=>{
    const b=[...document.querySelectorAll('input[data-k^="'+k.id+'"]')];
    pkt+=Math.round(b.filter(x=>x.checked).length/b.length*k.max); max+=k.max;
  });
  const p=Math.round(pkt/max*100), zdane=p>=50, c=zdane?'var(--success)':'var(--error)';
  el('egzOcena').innerHTML=`<div class="egz-mod-top"><span class="egz-mod-n">Samoocena</span>
    <span class="egz-mod-p" style="color:${c}">${pkt}/${max} p. (${p}%)</span></div>
    <div class="egz-bar"><div class="egz-bar-f" style="width:${p}%;background:${c}"></div><div class="egz-prog"></div></div>
    <div class="egz-note">${zdane?'Powyżej progu.':'Poniżej 50% — popraw tekst zanim zajrzysz do wzoru.'}</div>`;
}
function zapiszPrace(){
  const check={};
  document.querySelectorAll('input[data-k]').forEach(b=>check[b.dataset.k]=b.checked);
  const t=el('egzPraca');
  S.pisanie[V.pisanieId]={tekst:t?t.value:'',check,data:dzis()};
  zapisz();
}
function wzor(grupa,idx){
  const f=PISANIE[grupa][idx], b=el('egzWzor');
  b.innerHTML = f.wzor
    ? `<div class="egz-wzor">${f.wzor}</div>`
    : `<div class="egz-uwaga">Dla form długich nie ma jednego wzoru — trzymaj się szkieletu i zwrotów powyżej.
       Sprawdź: czy każdy punkt szkieletu ma w twoim tekście co najmniej 2 zdania?</div>`;
  b.scrollIntoView({behavior:'smooth',block:'nearest'});
}

return { menu, menuGram, menuSluch, menuPisanie, blok, wybierz, tn, chip, wpis, para, wstawZnak,
         graj, akcja, dalej, pisanie, licz, ocena, wzor, wyjscie };
})();
