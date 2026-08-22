// ========================================================================
// MOJE SŁOWA — gramatyka na słowach z osobistego słownika (PERS_VOCAB).
//
// PERS_VOCAB trzyma tylko {id, pl, ru} i należy do Hermesa — nie ruszamy go.
// Tutaj leży warstwa gramatyczna nałożona na te słowa po stronie aplikacji.
//
// Przymiotniki odmieniają się REGULARNIE, więc formy liczymy regułami.
// Rzeczowniki i czasowniki — nie: formy są wpisane ręcznie i sprawdzone.
// Słowo bez wpisu po prostu nie trafia do zadań na odmianę, ale nadal
// bierze udział w zadaniach na pisownię. Dzięki temu nowe słowa od Hermesa
// niczego nie psują.
// ========================================================================

// ---------- przymiotniki: odmiana z reguł ----------
// trzy typy tematu decydują o końcówkach:
//   twardy  (wybitny)  → -y  -ego -emu -ym  | -a  -ej -ą  | -e
//   k/g     (rzadki)   → -i  -iego -iemu -im | -a  -iej -ą | -ie
//   miękki  (głupi)    → -i  -iego -iemu -im | -ia -iej -ią| -ie
function typPrzymiotnika(slowo){
  const s = slowo.toLowerCase();
  if(/[kg]i$/.test(s)) return 'kg';
  if(/i$/.test(s))     return 'miekki';
  return 'twardy';
}
function rdzenPrzym(slowo){
  const s = slowo.toLowerCase();
  if(/[kg]i$/.test(s)) return s.slice(0,-1);      // rzadki → rzadk
  if(/i$/.test(s))     return s.slice(0,-1);      // głupi  → głup
  return s.slice(0,-1);                            // wybitny→ wybitn
}
const KONCOWKI_PRZYM = {
  twardy:{ m:{nom:'y',gen:'ego',dat:'emu',inst:'ym',loc:'ym'},
           f:{nom:'a',gen:'ej',dat:'ej',acc:'ą',inst:'ą',loc:'ej'},
           n:{nom:'e',gen:'ego',dat:'emu',inst:'ym',loc:'ym'}, plNmos:'e' },
  kg:     { m:{nom:'i',gen:'iego',dat:'iemu',inst:'im',loc:'im'},
           f:{nom:'a',gen:'iej',dat:'iej',acc:'ą',inst:'ą',loc:'iej'},
           n:{nom:'ie',gen:'iego',dat:'iemu',inst:'im',loc:'im'}, plNmos:'ie' },
  miekki: { m:{nom:'i',gen:'iego',dat:'iemu',inst:'im',loc:'im'},
           f:{nom:'ia',gen:'iej',dat:'iej',acc:'ią',inst:'ią',loc:'iej'},
           n:{nom:'ie',gen:'iego',dat:'iemu',inst:'im',loc:'im'}, plNmos:'ie' },
};
function odmienPrzym(slowo, rodzaj, przypadek){
  const t = typPrzymiotnika(slowo), r = rdzenPrzym(slowo);
  const k = KONCOWKI_PRZYM[t][rodzaj];
  if(!k) return null;
  if(przypadek==='acc'){
    if(rodzaj==='f') return r + k.acc;
    if(rodzaj==='n') return r + k.nom;
    return r + k.nom;                    // męski nieżywotny = mianownik
  }
  return k[przypadek] ? r + k[przypadek] : null;
}

// wyrazy wyglądające jak przymiotnik, ale nim nie będące
const NIE_PRZYMIOTNIK = new Set(['wtedy','czyli','zazwyczaj','coraz','reguły','naczynia','negocjacje','wpływa','nurtuje','poruszane','jakby','dzięki','według']);
function jestPrzymiotnikiem(pl){
  const s = pl.toLowerCase().trim();
  if(/\s/.test(s) || NIE_PRZYMIOTNIK.has(s)) return false;
  return /[a-ząćęłńóśźż]{4,}(y|i)$/.test(s) && !/(ść|ość|cie|nie|ie)$/.test(s);
}

// ---------- rzeczowniki: formy wpisane ręcznie ----------
// tylko te, których odmiany jestem pewien; reszta czeka na uzupełnienie
const MOJE_RZECZOWNIKI = {
  'zasada':      {t:'abs', r:'f', gen:'zasady', dat:'zasadzie', acc:'zasadę', inst:'zasadą', loc:'zasadzie'},
  'umywalka':    {t:'kon', r:'f', gen:'umywalki', dat:'umywalce', acc:'umywalkę', inst:'umywalką', loc:'umywalce'},
  'treść':       {t:'abs', r:'f', gen:'treści', dat:'treści', acc:'treść', inst:'treścią', loc:'treści'},
  'przyjemność': {t:'abs', r:'f', gen:'przyjemności', dat:'przyjemności', acc:'przyjemność', inst:'przyjemnością', loc:'przyjemności'},
  'uroczystość': {t:'abs', r:'f', gen:'uroczystości', dat:'uroczystości', acc:'uroczystość', inst:'uroczystością', loc:'uroczystości'},
  'czynność':    {t:'abs', r:'f', gen:'czynności', dat:'czynności', acc:'czynność', inst:'czynnością', loc:'czynności'},
  'postać':      {t:'kon', r:'f', gen:'postaci', dat:'postaci', acc:'postać', inst:'postacią', loc:'postaci'},
  'zlew':        {t:'kon', r:'m', gen:'zlewu', dat:'zlewowi', acc:'zlew', inst:'zlewem', loc:'zlewie'},
  'zakres':      {t:'abs', r:'m', gen:'zakresu', dat:'zakresowi', acc:'zakres', inst:'zakresem', loc:'zakresie'},
  'szacunek':    {t:'abs', r:'m', gen:'szacunku', dat:'szacunkowi', acc:'szacunek', inst:'szacunkiem', loc:'szacunku'},
  'wątek':       {t:'abs', r:'m', gen:'wątku', dat:'wątkowi', acc:'wątek', inst:'wątkiem', loc:'wątku'},
  'otoczenie':   {t:'abs', r:'n', gen:'otoczenia', dat:'otoczeniu', acc:'otoczenie', inst:'otoczeniem', loc:'otoczeniu'},
  'spóźnienie':  {t:'abs', r:'n', gen:'spóźnienia', dat:'spóźnieniu', acc:'spóźnienie', inst:'spóźnieniem', loc:'spóźnieniu'},
  'wyzwanie':    {t:'abs', r:'n', gen:'wyzwania', dat:'wyzwaniu', acc:'wyzwanie', inst:'wyzwaniem', loc:'wyzwaniu'},
  'wrażenie':    {t:'abs', r:'n', gen:'wrażenia', dat:'wrażeniu', acc:'wrażenie', inst:'wrażeniem', loc:'wrażeniu'},
  'obciążenie':  {t:'abs', r:'n', gen:'obciążenia', dat:'obciążeniu', acc:'obciążenie', inst:'obciążeniem', loc:'obciążeniu'},
  'postrzeganie':{t:'abs', r:'n', gen:'postrzegania', dat:'postrzeganiu', acc:'postrzeganie', inst:'postrzeganiem', loc:'postrzeganiu'},
  'tętno':       {t:'kon', r:'n', gen:'tętna', dat:'tętnu', acc:'tętno', inst:'tętnem', loc:'tętnie'},
};

// ---------- dostęp do słownika ----------
// z "sugerować (Nie chcę nic sugerować)" robi "sugerować"
function czysteSlowo(pl){
  return pl.replace(/\s*\(.*$/,'').replace(/[.\s]+$/,'').trim();
}
// Przy jednym słowie skracamy tłumaczenie do pierwszego znaczenia.
// Przy zwrocie NIE skracamy: z „Спасибо" nie da się odtworzyć
// „Dziękuję, na razie tylko patrzę".
function czystyPrzeklad(ru, wieloczlonowe){
  const bez = ru.replace(/&quot;/g,'"').replace(/\s*\(.*$/,'').trim();
  return wieloczlonowe ? bez : bez.split(/[,;]/)[0].trim();
}
function mojeSlowa(){
  return (typeof PERS_VOCAB!=='undefined' ? PERS_VOCAB : [])
    .filter(w => w && w.pl && w.ru)
    .map(w => {
      const pl = czysteSlowo(w.pl);
      return {...w, _pl: pl, _ru: czystyPrzeklad(w.ru, /\s/.test(pl))};
    })
    .filter(w => w._pl && w._ru);
}
function mojePrzymiotniki(){ return mojeSlowa().filter(w=>jestPrzymiotnikiem(w._pl)); }
function mojeRzeczowniki(){
  return mojeSlowa().filter(w=>MOJE_RZECZOWNIKI[w._pl.toLowerCase()]);
}
// ile słów czeka na opis gramatyczny — widać w aplikacji
function bezOpisu(){
  return mojeSlowa().filter(w=>{
    const s=w._pl.toLowerCase();
    return !/\s/.test(s) && !jestPrzymiotnikiem(s) && !MOJE_RZECZOWNIKI[s];
  }).length;
}

// ========================================================================
// GENERATORY na osobistym słowniku
// ========================================================================
const _l = a => a[Math.floor(Math.random()*a.length)];
const _m = a => a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(v=>v[1]);

const NAZWY_PRZYP = {gen:'Dopełniacz',dat:'Celownik',acc:'Biernik',inst:'Narzędnik',loc:'Miejscownik'};

// „zaradne zadanie" i „ujemna książka" to bełkot, więc rzeczownik
// dobieramy do tego, o czym dany przymiotnik w ogóle można powiedzieć
const RZECZ_OSOBY = {
  m:[{s:'człowiek',gen:'człowieka',dat:'człowiekowi',acc:'człowieka',inst:'człowiekiem',loc:'człowieku'},
     {s:'sąsiad',  gen:'sąsiada',  dat:'sąsiadowi',  acc:'sąsiada',  inst:'sąsiadem',  loc:'sąsiedzie'}],
  f:[{s:'kobieta', gen:'kobiety',  dat:'kobiecie',   acc:'kobietę',  inst:'kobietą',   loc:'kobiecie'},
     {s:'koleżanka',gen:'koleżanki',dat:'koleżance', acc:'koleżankę',inst:'koleżanką', loc:'koleżance'}],
  n:[{s:'dziecko', gen:'dziecka',  dat:'dziecku',    acc:'dziecko',  inst:'dzieckiem', loc:'dziecku'}],
};
const RZECZ_RZECZY = {
  m:[{s:'film',   gen:'filmu',   dat:'filmowi',   acc:'film',    inst:'filmem',   loc:'filmie'},
     {s:'pomysł', gen:'pomysłu', dat:'pomysłowi', acc:'pomysł',  inst:'pomysłem', loc:'pomyśle'}],
  f:[{s:'książka',gen:'książki', dat:'książce',   acc:'książkę', inst:'książką',  loc:'książce'},
     {s:'sytuacja',gen:'sytuacji',dat:'sytuacji', acc:'sytuację',inst:'sytuacją', loc:'sytuacji'}],
  n:[{s:'miejsce',gen:'miejsca', dat:'miejscu',   acc:'miejsce', inst:'miejscem', loc:'miejscu'},
     {s:'zadanie',gen:'zadania', dat:'zadaniu',   acc:'zadanie', inst:'zadaniem', loc:'zadaniu'}],
};
// przymiotniki opisujące wyłącznie ludzi albo wyłącznie rzeczy;
// czego tu nie ma, pasuje do jednych i drugich
const PRZYM_O_LUDZIACH = new Set(['zaradny','leniwy','dumny','grzeczny','zdolny','wybitny',
  'wrażliwy','głupi','uprzejmy','pracowity','cierpliwy','szczery','otwarty','spokojny']);
const PRZYM_O_RZECZACH = new Set(['ujemny','dodatny','wykwintny',
  'banalny','przydatny','prosty','niewłaściwy','niepożądany','dowolny','poprzedni','udany']);
// mokry, gęsty, rzadki opisują substancje — „gęste miejsce" nie istnieje
// gęsty/rzadki opisują płyny, mokry — przedmioty. To dwie różne pule.
const PRZYM_O_PLYNACH = new Set(['gęsty','rzadki','słodki','gorzki']);
const PRZYM_O_MOKRYCH = new Set(['mokry','suchy','brudny','czysty']);
const RZECZ_PLYNY = {
  m:[{s:'sos',    gen:'sosu',    dat:'sosowi',   acc:'sos',    inst:'sosem',    loc:'sosie'}],
  f:[{s:'zupa',   gen:'zupy',    dat:'zupie',    acc:'zupę',   inst:'zupą',     loc:'zupie'},
     {s:'herbata',gen:'herbaty', dat:'herbacie', acc:'herbatę',inst:'herbatą',  loc:'herbacie'}],
  n:[{s:'mleko',  gen:'mleka',   dat:'mleku',    acc:'mleko',  inst:'mlekiem',  loc:'mleku'}],
};
const RZECZ_MOKRE = {
  m:[{s:'ręcznik',gen:'ręcznika',dat:'ręcznikowi',acc:'ręcznik',inst:'ręcznikiem',loc:'ręczniku'},
     {s:'parasol',gen:'parasola',dat:'parasolowi',acc:'parasol',inst:'parasolem', loc:'parasolu'}],
  f:[{s:'kurtka', gen:'kurtki',  dat:'kurtce',    acc:'kurtkę', inst:'kurtką',    loc:'kurtce'}],
  n:[{s:'ubranie',gen:'ubrania', dat:'ubraniu',   acc:'ubranie',inst:'ubraniem',  loc:'ubraniu'}],
};
function rzeczownikiDo(przym){
  const s = przym.toLowerCase();
  if(PRZYM_O_LUDZIACH.has(s))    return RZECZ_OSOBY;
  if(PRZYM_O_PLYNACH.has(s))     return RZECZ_PLYNY;
  if(PRZYM_O_MOKRYCH.has(s))     return RZECZ_MOKRE;
  if(PRZYM_O_RZECZACH.has(s))    return RZECZ_RZECZY;
  return Math.random()<0.5 ? RZECZ_OSOBY : RZECZ_RZECZY;
}
const RAMY_PRZYP = {
  gen: {m:'Nie ma tu żadnego ___ {R}.',       f:'Nie ma tu żadnej ___ {R}.',   n:'Nie ma tu żadnego ___ {R}.'},
  dat: {m:'Przyglądam się temu ___ {R}.',    f:'Przyglądam się tej ___ {R}.', n:'Przyglądam się temu ___ {R}.'},
  acc: {m:'Widzę tu ___ {R}.',               f:'Widzę tu ___ {R}.',           n:'Widzę tu ___ {R}.'},
  inst:'Coś jest nie tak z ___ {R}.',
  loc: 'Rozmawialiśmy o ___ {R}.',
};

// I. Odmiana przymiotnika z Twojego słownika
function genMojPrzymiotnik(){
  const lista = mojePrzymiotniki();
  if(!lista.length) return null;
  const w = _l(lista);
  const pula = rzeczownikiDo(w._pl);
  const rodzaj = _l(Object.keys(pula).filter(r=>pula[r] && pula[r].length));
  const przyp  = _l(['gen','dat','acc','inst','loc']);
  const rz = _l(pula[rodzaj]);
  const poprawna = odmienPrzym(w._pl, rodzaj, przyp);
  if(!poprawna) return null;

  const rama = typeof RAMY_PRZYP[przyp]==='string' ? RAMY_PRZYP[przyp] : RAMY_PRZYP[przyp][rodzaj];
  const zdanie = rama.replace('{R}', rz[przyp]);

  // dystraktory: ten sam przymiotnik w innych przypadkach
  const inne = ['nom','gen','dat','acc','inst','loc']
    .filter(p=>p!==przyp)
    .map(p=>odmienPrzym(w._pl, rodzaj, p))
    .filter(f=>f && f!==poprawna);
  const opcje = _m([poprawna, ...[...new Set(inne)].slice(0,2)]);
  return {zdanie: zdanie + '   (' + w._pl + ' — ' + w._ru + ')',
          opcje, ok: opcje.indexOf(poprawna),
          wyjasnienie: `${w._pl} → ${NAZWY_PRZYP[przyp]}, rodzaj ${{m:'męski',f:'żeński',n:'nijaki'}[rodzaj]}: ${poprawna}`,
          _gen:true, _moje:true};
}

// II. Odmiana rzeczownika z Twojego słownika
// „Zajmuję się przyjemnością" i „Widzę postrzeganie" to bełkot —
// rzeczownik konkretny i abstrakcyjny potrzebują innych zdań.
const RAMY_RZECZ = {
  kon: {
    gen:'Nie ma tu {Z}.',        dat:'Przyjrzyj się {Z}.',   acc:'Widzę {Z}.',
    inst:'Coś jest nie tak {ZE} {Z}.', loc:'Mówimy o {Z}.',
  },
  abs: {
    gen:'To pytanie dotyczy {Z}.', dat:'Poświęćmy uwagę {Z}.', acc:'Trudno opisać {Z}.',
    inst:'W związku {ZE} {Z} mam pytanie.', loc:'Rozmawialiśmy o {Z}.',
  },
};
// przyimek "z" przechodzi w "ze" przed zbitką spółgłosek: ze zlewem, ze szacunkiem
function przyimekZ(forma){
  return /^(z|s|ż|ź|ś|sz|rz)[bcćdfghjklłmnńpqrstvwxzżź]/i.test(forma) ? 'ze' : 'z';
}
function genMojRzeczownik(){
  const lista = mojeRzeczowniki();
  if(!lista.length) return null;
  const w = _l(lista);
  const opis = MOJE_RZECZOWNIKI[w._pl.toLowerCase()];
  const przyp = _l(['gen','dat','acc','inst','loc']);
  const poprawna = opis[przyp];
  const inne = ['gen','dat','acc','inst','loc']
    .filter(p=>p!==przyp).map(p=>opis[p]).filter(f=>f&&f!==poprawna);
  const opcje = _m([poprawna, ...[...new Set(inne)].slice(0,2)]);
  const rama = (RAMY_RZECZ[opis.t] || RAMY_RZECZ.abs)[przyp]
    .replace('{ZE}', przyimekZ(poprawna)).replace('{Z}','___');
  return {zdanie: rama + '   (' + w._pl + ' — ' + w._ru + ')',
          opcje, ok: opcje.indexOf(poprawna),
          wyjasnienie: `${w._pl} → ${NAZWY_PRZYP[przyp]}: ${poprawna}`,
          _gen:true, _moje:true};
}

// III. Pisownia — z tłumaczenia napisz polskie słowo.
// Działa dla KAŻDEGO wpisu, także zwrotów i słów bez opisu gramatycznego,
// więc obejmuje też wszystko, co dorzuci Hermes.
function genPisownia(){
  const lista = mojeSlowa().filter(w=>w._pl.length>=4);
  if(!lista.length) return null;
  const w = _l(lista);
  const ile = w._pl.split(/\s+/).length;
  const wskazowka = ile>1 ? `  (${ile} wyrazy)` : '';
  return {zdanie:`Jak to napisać po polsku?\n\n„${w._ru}"${wskazowka}`,
          ok: w._pl.toLowerCase(),
          wyjasnienie:`${w._pl} — ${w._ru}`,
          _wpisz:true, _gen:true, _moje:true};
}

const GEN_MOJE = {
  przymiotniki: genMojPrzymiotnik,
  rzeczowniki:  genMojRzeczownik,
  pisownia:     genPisownia,
};
