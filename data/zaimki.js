// ========================================================================
// ZAIMKI — największy dział "Poprawności gramatycznej" po rzeczownikach.
// W zestawie przykładowym Komisji: 9 zadań na zaimki osobowe i pozostałe.
//
// Sedno, na którym najłatwiej stracić punkty: po PRZYIMKU zaimek
// przybiera formę na n- (o nim, na niego, z nią, do nich), a bez
// przyimka nie (widzę go, mówię mu, znam ją).
// Dlatego każda forma jest zapisana w dwóch wariantach.
// ========================================================================

const ZAIMKI_OSOBOWE = {
  ja:  {miano:'ja', oboczneN:false,
        dop:{bez:'mnie', po:'mnie'}, cel:{bez:'mi',  po:'mnie'},
        bier:{bez:'mnie',po:'mnie'}, narz:{bez:'mną',po:'mną'}, msc:{po:'mnie'}},
  ty:  {miano:'ty', oboczneN:false,
        dop:{bez:'cię',  po:'ciebie'}, cel:{bez:'ci', po:'tobie'},
        bier:{bez:'cię', po:'ciebie'}, narz:{bez:'tobą',po:'tobą'}, msc:{po:'tobie'}},
  on:  {miano:'on', oboczneN:true,
        dop:{bez:'go',   po:'niego'},  cel:{bez:'mu', po:'niemu'},
        bier:{bez:'go',  po:'niego'},  narz:{bez:'nim',po:'nim'},  msc:{po:'nim'}},
  ona: {miano:'ona', oboczneN:true,
        dop:{bez:'jej',  po:'niej'},   cel:{bez:'jej',po:'niej'},
        bier:{bez:'ją',  po:'nią'},    narz:{bez:'nią',po:'nią'},  msc:{po:'niej'}},
  ono: {miano:'ono', oboczneN:true,
        dop:{bez:'go',   po:'niego'},  cel:{bez:'mu', po:'niemu'},
        bier:{bez:'je',  po:'nie'},    narz:{bez:'nim',po:'nim'},  msc:{po:'nim'}},
  my:  {miano:'my', oboczneN:false,
        dop:{bez:'nas',  po:'nas'},    cel:{bez:'nam',po:'nam'},
        bier:{bez:'nas', po:'nas'},    narz:{bez:'nami',po:'nami'},msc:{po:'nas'}},
  wy:  {miano:'wy', oboczneN:false,
        dop:{bez:'was',  po:'was'},    cel:{bez:'wam',po:'wam'},
        bier:{bez:'was', po:'was'},    narz:{bez:'wami',po:'wami'},msc:{po:'was'}},
  oni: {miano:'oni', oboczneN:true,
        dop:{bez:'ich',  po:'nich'},   cel:{bez:'im', po:'nim'},
        bier:{bez:'ich', po:'nich'},   narz:{bez:'nimi',po:'nimi'},msc:{po:'nich'}},
  one: {miano:'one', oboczneN:true,
        dop:{bez:'ich',  po:'nich'},   cel:{bez:'im', po:'nim'},
        bier:{bez:'je',  po:'nie'},    narz:{bez:'nimi',po:'nimi'},msc:{po:'nich'}},
};

// czasowniki rządzące przypadkiem — zdania BEZ przyimka
const CZASOWNIK_RZAD = [
  {cz:'Znam',        przyp:'bier', zd:'{X} od dziecka.'},
  {cz:'Widzę',       przyp:'bier', zd:'{X} codziennie w pracy.'},
  {cz:'Lubię',       przyp:'bier', zd:'{X} bardzo.'},
  {cz:'Pomagam',     przyp:'cel',  zd:'{X} w nauce.', osob:true},
  {cz:'Dziękuję',    przyp:'cel',  zd:'{X} za wszystko.', osob:true},
  {cz:'Powiedziałem',przyp:'cel',  zd:'{X} całą prawdę.', osob:true},
  {cz:'Szukam',      przyp:'dop',  zd:'{X} od godziny.'},
  {cz:'Nie znam',    przyp:'dop',  zd:'{X} zbyt dobrze.', osob:true},
  {cz:'Boję się',    przyp:'dop',  zd:'{X} trochę.'},
];
// przyimki — zdania Z przyimkiem, gdzie zaimek dostaje formę na n-
// osob:true — zdanie ma sens tylko o ludziach, więc bez "ono"
const PRZYIMEK_RZAD = [
  {p:'o',     przyp:'msc',  zd:'Ciągle myślę o {X}.'},
  {p:'o',     przyp:'msc',  zd:'Rozmawialiśmy wczoraj o {X}.'},
  {p:'na',    przyp:'bier', zd:'Czekam na {X} od pół godziny.', osob:true},
  {p:'do',    przyp:'dop',  zd:'Jutro pojadę do {X}.', osob:true},
  {p:'bez',   przyp:'dop',  zd:'Nie zrobię tego bez {X}.'},
  {p:'dla',   przyp:'dop',  zd:'Kupiłem to specjalnie dla {X}.', osob:true},
  {p:'z',     przyp:'narz', zd:'Idę do kina z {X}.', osob:true},
  {p:'z',     przyp:'narz', zd:'Chętnie porozmawiam z {X}.', osob:true},
  {p:'przy',  przyp:'msc',  zd:'Usiądź przy {X}.'},
  {p:'od',    przyp:'dop',  zd:'Dostałem list od {X}.', osob:true},
];

const NAZWA_PRZYP_Z = {dop:'Dopełniacz',cel:'Celownik',bier:'Biernik',narz:'Narzędnik',msc:'Miejscownik'};
const _lz = a => a[Math.floor(Math.random()*a.length)];
const _mz = a => a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(v=>v[1]);

function genZaimekOsobowy(){
  const zPrzyimkiem = Math.random() < 0.55;   // forma na n- jest trudniejsza, więc częściej
  const rama = zPrzyimkiem ? _lz(PRZYIMEK_RZAD) : _lz(CZASOWNIK_RZAD);
  const dostepne = Object.keys(ZAIMKI_OSOBOWE).filter(k => !(rama.osob && k==='ono'));
  const klucz = _lz(dostepne);
  const z = ZAIMKI_OSOBOWE[klucz];
  const przyp = rama.przyp;
  const komorka = z[przyp];
  if(!komorka) return null;
  const poprawna = zPrzyimkiem ? komorka.po : komorka.bez;
  if(!poprawna) return null;

  const zdanie = zPrzyimkiem
    ? rama.zd.replace('{X}','___')
    : rama.cz + ' ___ ' + rama.zd.replace('{X} ','');

  // dystraktory: ten sam zaimek w innych przypadkach + wariant zza granicy
  // przyimka (właśnie tu ludzie się mylą: "myślę o jego" zamiast "o nim")
  const pula = [];
  for(const p of ['dop','cel','bier','narz','msc']){
    const k = z[p]; if(!k) continue;
    if(k.bez) pula.push(k.bez);
    if(k.po)  pula.push(k.po);
  }
  const inne = [...new Set(pula)].filter(f=>f!==poprawna);
  const opcje = _mz([poprawna, ..._mz(inne).slice(0,2)]);

  // nie każdy zaimek ma osobną formę po przyimku: "nas", "was", "mną"
  // brzmią tak samo w obu pozycjach i nie zaczynają się na n-
  // Dwa różne zjawiska, których nie wolno mylić:
  //   on/ona/ono/oni  → po przyimku forma na n-  (go → niego)
  //   ja/ty           → po przyimku forma długa  (cię → ciebie), bez żadnego n-
  //   my/wy           → forma się nie zmienia    (nas, wam)
  const rozne = komorka.bez && komorka.po && komorka.bez !== komorka.po;
  const naN = z.oboczneN === true;   // nie zgadujemy po pierwszej literze
  let wyj;
  if(zPrzyimkiem){
    if(rozne && naN)
      wyj = `Po przyimku „${rama.p}" forma na n-: ${poprawna} (bez przyimka byłoby „${komorka.bez}"). ${NAZWA_PRZYP_Z[przyp]}, ${z.miano}`;
    else if(rozne)
      wyj = `Po przyimku forma długa: ${poprawna}, nie „${komorka.bez}". ${NAZWA_PRZYP_Z[przyp]}, ${z.miano}`;
    else if(!komorka.bez && naN)
      // miejscownik nie występuje bez przyimka, więc nie ma z czym porównywać
      wyj = `Miejscownik zawsze stoi po przyimku i ma formę na n-: ${poprawna}. (${z.miano})`;
    else if(!komorka.bez)
      wyj = `Miejscownik zawsze stoi po przyimku: ${poprawna}. (${z.miano})`;
    else
      wyj = `„${rama.p}" wymaga: ${NAZWA_PRZYP_Z[przyp].toLowerCase()} — ${poprawna}. Ten zaimek brzmi tak samo z przyimkiem i bez. (${z.miano})`;
  } else {
    if(rozne && naN)
      wyj = `Bez przyimka forma krótka: ${poprawna}. Po przyimku byłoby „${komorka.po}". ${NAZWA_PRZYP_Z[przyp]}, ${z.miano}`;
    else if(rozne)
      wyj = `Bez przyimka forma krótka: ${poprawna}, po przyimku „${komorka.po}". ${NAZWA_PRZYP_Z[przyp]}, ${z.miano}`;
    else
      wyj = `${NAZWA_PRZYP_Z[przyp]}, ${z.miano}: ${poprawna}`;
  }
  return {zdanie: zdanie + '   (' + z.miano + ')', opcje, ok: opcje.indexOf(poprawna),
          wyjasnienie: wyj, _gen:true};
}

// ---------- zaimki dzierżawcze i swój ----------
// "swój" zamiast mój/twój/jego, gdy właściciel = podmiot zdania
const DZIERZAWCZE = [
  {zd:'Anna bardzo troszczy się o ___ dzieci.', ok:'swoje',
   zle:['jej','jego'], wyj:'Właściciel to podmiot zdania (Anna), więc „swoje", nie „jej".'},
  {zd:'Jan sprzedał ___ samochód i kupił rower.', ok:'swój',
   zle:['jego','jej'], wyj:'Podmiot (Jan) jest właścicielem → „swój".'},
  {zd:'Piotr rozmawiał z Anną o ___ problemach — to Anna ma kłopoty.', ok:'jej',
   zle:['swoich','jego'], wyj:'Właścicielem NIE jest podmiot (Piotr), tylko Anna → „jej".'},
  {zd:'Zapomniałem ___ parasola w autobusie.', ok:'swojego',
   zle:['jego','mojego'], wyj:'Podmiot to „ja" → „swojego" (dopuszczalne też „mojego").'},
  {zd:'Czy zabraliście ___ dokumenty?', ok:'swoje',
   zle:['wasze','ich'], wyj:'Podmiot „wy" → „swoje".'},
  {zd:'Marta pokazała mi zdjęcia ___ brata — brata Marty.', ok:'swojego',
   zle:['jej','jego'], wyj:'Brat należy do podmiotu (Marta) → „swojego".'},
];

// ---------- zaimek względny "który" ----------
const WZGLEDNE = [
  {zd:'Sprzedajemy mieszkanie, w ___ przeżyliśmy dwadzieścia lat.', ok:'którym',
   zle:['które','którego'], wyj:'w + Miejscownik, rodzaj nijaki → w którym'},
  {zd:'Znalazłem zeszyty, ___ szukałem od wczoraj.', ok:'których',
   zle:['które','którymi'], wyj:'szukać + Dopełniacz, l. mnoga → których'},
  {zd:'Spotkałam znajomego, ___ kiedyś pomogłam znaleźć pracę.', ok:'któremu',
   zle:['którego','który'], wyj:'pomóc + Celownik → któremu'},
  {zd:'To jest kobieta, ___ syn zginął w wypadku.', ok:'której',
   zle:['którą','która'], wyj:'przynależność → której syn'},
  {zd:'Odwiedziłem kolegów, z ___ chodziłem do szkoły.', ok:'którymi',
   zle:['których','którym'], wyj:'z + Narzędnik, l. mnoga → z którymi'},
  {zd:'Kupiłem książkę, ___ mi poleciłeś.', ok:'którą',
   zle:['która','której'], wyj:'polecić coś — Biernik, rodzaj żeński → którą'},
];

// ---------- zaimki przeczące ----------
const PRZECZACE = [
  {zd:'___ w klasie nie lubił Joasi.', ok:'Nikt', zle:['Nic','Żaden'], wyj:'o osobach → nikt'},
  {zd:'Nie powiedziałam ___ o tym problemie.', ok:'nikomu', zle:['niczemu','nikogo'],
   wyj:'powiedzieć + Celownik → nikomu'},
  {zd:'W lodówce nie ma ___.', ok:'niczego', zle:['nikogo','nic'],
   wyj:'nie ma + Dopełniacz → niczego (potocznie też „nic")'},
  {zd:'___ z tych filmów mi się nie podobał.', ok:'Żaden', zle:['Nikt','Nic'],
   wyj:'o rzeczach z zamkniętego zbioru → żaden'},
  {zd:'Nie widziałem tam ___ znajomego.', ok:'żadnego', zle:['nikogo','niczego'],
   wyj:'przed rzeczownikiem → żadnego znajomego'},
];

// ---------- zaimek zwrotny siebie/sobie/sobą ----------
const ZWROTNE = [
  {zd:'Nie lubiłam wtedy ___ za to, że nie przyszłam na czas.', ok:'siebie',
   zle:['sobie','sobą'], wyj:'lubić + Biernik → siebie'},
  {zd:'Kup ___ coś ładnego na urodziny.', ok:'sobie',
   zle:['siebie','sobą'], wyj:'kupić komu? + Celownik → sobie'},
  {zd:'Obie zaczęłyśmy rozmawiać ze ___ o książkach.', ok:'sobą',
   zle:['siebie','sobie'], wyj:'z + Narzędnik → ze sobą'},
  {zd:'Musisz wierzyć w ___.', ok:'siebie',
   zle:['sobie','sobą'], wyj:'wierzyć w + Biernik → w siebie'},
];

function _zPuli(pula, tytul){
  const w = _lz(pula);
  const opcje = _mz([w.ok, ...w.zle.slice(0,2)]);
  return {zdanie:w.zd, opcje, ok:opcje.indexOf(w.ok), wyjasnienie:w.wyj, _gen:true};
}
const genDzierzawczy = () => _zPuli(DZIERZAWCZE);
const genWzgledny    = () => _zPuli(WZGLEDNE);
const genPrzeczacy   = () => _zPuli(PRZECZACE);
const genZwrotny     = () => _zPuli(ZWROTNE);

// jeden generator na cały dział — losuje rodzaj zaimka
function genZaimek(){
  const r = Math.random();
  if(r < 0.45) return genZaimekOsobowy();
  if(r < 0.60) return genDzierzawczy();
  if(r < 0.78) return genWzgledny();
  if(r < 0.90) return genPrzeczacy();
  return genZwrotny();
}
