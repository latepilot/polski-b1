// ========================================================================
// GENERATORY — składają zadania z banku form i szablonów zdań.
// Zasada: formy nigdy nie są wyliczane regułami — pochodzą z banków,
// gdzie są wpisane i sprawdzone. Generator tylko dobiera i miesza.
// Dystraktory zawsze są formami TEGO SAMEGO słowa — inaczej zadanie
// sprawdzałoby znajomość słówka, a nie gramatyki.
// ========================================================================

const _los  = a => a[Math.floor(Math.random()*a.length)];
const _mieszaj = a => a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(v=>v[1]);
const _duza = s => s.charAt(0).toUpperCase()+s.slice(1);

// z listy dystraktorów robi zadanie wyboru z wymieszanymi opcjami
function _wybor(zdanie, poprawna, zle, wyjasnienie){
  const opcje = _mieszaj([poprawna, ...zle.filter(z=>z && z!==poprawna).slice(0,2)]);
  return {zdanie, opcje, ok: opcje.indexOf(poprawna), wyjasnienie, _gen:true};
}

// ---------- III. Stopniowanie ----------
const SZABLONY_STOPIEN = {
  przym: {
    rowny:   ['Ten film jest naprawdę {X}.', 'To był {X} dzień.', 'Ten sklep jest {X}.'],
    wyzszy:  ['Ten dom jest {X} niż tamten.', 'Dzisiejszy test był {X} niż poprzedni.'],
    najwyzszy:['To {X} film, jaki w życiu widziałem.', 'To {X} sklep w całym mieście.'],
  },
  // przymiotniki opisujące stan człowieka — tylko zdania o ludziach
  przymOsoba: {
    rowny:   ['Mój brat jest dzisiaj bardzo {X}.', 'Po tej podróży jestem naprawdę {X}.'],
    wyzszy:  ['Dzisiaj jestem {X} niż wczoraj.', 'Mój brat jest {X} ode mnie.'],
    najwyzszy:['Ze wszystkich w grupie on jest {X}.'],
  },
  przysl: {
    rowny:   ['Mówi po polsku całkiem {X}.', 'Dzisiaj jest {X}.', 'Robi to {X}.'],
    wyzszy:  ['Dzisiaj jest {X} niż wczoraj.', 'Mój brat mówi po polsku {X} ode mnie.', 'Teraz rozumiem {X} niż na początku.'],
    najwyzszy:['Ze wszystkich uczniów to on uczy się {X}.', 'Tę drogę znam {X} ze wszystkich.', 'To właśnie tutaj bywam {X}.'],
  }
};
const _WYJ_ST = {
  rowny:'stopień równy — brak porównania',
  wyzszy:'stopień wyższy — sygnał: „niż", „ode mnie"',
  najwyzszy:'stopień najwyższy — sygnał: „ze wszystkich", „jaki znam", „w mieście"'
};
function genStopniowanie(){
  const klucz = _los(Object.keys(STOPNIOWANIE));
  const w = STOPNIOWANIE[klucz];
  const stopien = _los(['rowny','wyzszy','najwyzszy']);
  const idx = {rowny:0,wyzszy:1,najwyzszy:2}[stopien];
  // dla przymiotnika czasem forma żeńska — wtedy zdanie musi pasować
  const formy = w.st;
  const zestaw = (w.typ==='przym' && w.opis) ? 'przymOsoba' : w.typ;
  const szablon = _los(SZABLONY_STOPIEN[zestaw][stopien]);
  // „dużo/mało" wymagają dopełniacza — nie wstawiaj ich w zdania o pogodzie
  if(w.dop && stopien!=='wyzszy') return genStopniowanie();
  const zdanie = szablon.replace('{X}','___');
  const zle = formy.filter((_,i)=>i!==idx);
  return _wybor(zdanie, formy[idx], zle,
    `${w.st[0]} → ${w.st[1]} → ${w.st[2]}. ${_WYJ_ST[stopien]}`);
}

// ---------- IV. Czasy: teraźniejszy i przyszły ----------
const PODMIOTY = {ja:'Ja', ty:'Ty', on:'On', my:'My', wy:'Wy', oni:'Oni'};
const SZABLONY_TERAZ = [
  '{P} codziennie ___ ({B}) o ósmej rano.',
  '{P} zawsze ___ ({B}) w weekendy.',
  'Zwykle {p} ___ ({B}) po pracy.',
];
const SZABLONY_PRZYSZ = [
  'Jutro {p} ___ ({B}).',
  'W przyszłym tygodniu {p} ___ ({B}).',
  'Za godzinę {p} ___ ({B}).',
];
function genCzasy(){
  // jechać/iść są jednokrotne — nie pasują do 'codziennie'
  const kluczy = Object.keys(CZASOWNIKI).filter(k=>!['być','jechać','iść'].includes(k));
  const klucz = _los(kluczy);
  const c = CZASOWNIKI[klucz];
  const osoba = _los(OSOBY);
  const i = OSOBY.indexOf(osoba);

  // dk w czasie teraźniejszym nie istnieje — dk daje czas przyszły prosty
  const przyszly = c.asp==='dk';
  const szablon = _los(przyszly ? SZABLONY_PRZYSZ : SZABLONY_TERAZ);
  const poprawna = c.ter[i];

  const zdanie = szablon
    .replace('{P}', PODMIOTY[osoba]).replace('{p}', PODMIOTY[osoba].toLowerCase())
    .replace('{B}', klucz).replace('___','___');

  // dystraktory: inne osoby tego samego czasownika
  const inne = c.ter.filter((f,j)=>j!==i && f!==poprawna);
  return {..._wybor(_duza(zdanie), poprawna, _mieszaj(inne),
    `${klucz} (${c.asp}) — ${osoba}: ${poprawna}. Odmiana: ${c.ter.join(', ')}`),
    _tryb: przyszly?'przyszły prosty':'teraźniejszy'};
}

// ---------- VII. Tryby: rozkazujący i przypuszczający ----------
// czasowniki przechodnie biorą dopełnienie ("Zrób to!"),
// nieprzechodnie nie ("Wracaj!" — nie: "Wracaj to!")
const SZABLONY_ROZKAZ_TY = {
  przech: ['___ ({B}) to wreszcie, proszę!', 'Marku, ___ ({B}) to dzisiaj!', 'Nie czekaj — ___ ({B}) to teraz.'],
  nprz:   ['___ ({B}) wreszcie, proszę!', 'Marku, ___ ({B}) już teraz!', 'Nie czekaj — ___ ({B}).'],
};
const SZABLONY_ROZKAZ_WY = {
  przech: ['Kochani, ___ ({B}) to razem!', 'Dzieci, ___ ({B}) to natychmiast!'],
  nprz:   ['Kochani, ___ ({B}) razem!', 'Dzieci, ___ ({B}) natychmiast!'],
};
const SZABLONY_WARUNEK = [
  'Gdybym miał więcej czasu, ___ ({B}).',
  'Gdyby nie deszcz, ___ ({B}).',
  'Na twoim miejscu ___ ({B}).',
];
function genTryby(){
  const rodzaj = _los(['rozkaz','warunek','aspekt']);

  if(rodzaj==='rozkaz'){
    const kluczy = Object.keys(CZASOWNIKI).filter(k=>CZASOWNIKI[k].rozk);
    const klucz = _los(kluczy), c = CZASOWNIKI[klucz];
    const doWy = Math.random()<0.4;
    const grupa = c.nprz ? 'nprz' : 'przech';
    const szablon = _los((doWy?SZABLONY_ROZKAZ_WY:SZABLONY_ROZKAZ_TY)[grupa]);
    const poprawna = doWy ? c.rozk.wy : c.rozk.ty;
    const zle = [doWy?c.rozk.ty:c.rozk.wy, c.ter[1], c.ter[0]];
    return _wybor(_duza(szablon.replace('{B}',klucz)), poprawna, zle,
      `Tryb rozkazujący, ${doWy?'wy':'ty'}: ${poprawna}. (ty: ${c.rozk.ty}, wy: ${c.rozk.wy})`);
  }

  if(rodzaj==='warunek'){
    const kluczy = Object.keys(CZASOWNIKI).filter(k=>CZASOWNIKI[k].prz);
    const klucz = _los(kluczy);
    const osoba = _los(['ja','ty','my']);
    const rodz = _los(['m','f']);
    const poprawna = trybPrzypuszczajacy(klucz, osoba, rodz);
    const zle = [formaTeraz(klucz,osoba), formaPrzeszla(klucz,osoba,rodz),
                 trybPrzypuszczajacy(klucz, osoba==='ja'?'ty':'ja', rodz)];
    const kto = {ja:'', ty:'ty ', my:'my '}[osoba];
    const szablon = _los(SZABLONY_WARUNEK).replace('{B}',klucz);
    return _wybor(szablon, poprawna, zle,
      `Tryb przypuszczający (${osoba}, rodzaj ${rodz==='f'?'żeński':'męski'}): ${poprawna}. ` +
      `Powstaje z formy przeszłej + bym/byś/by.`);
  }

  // aspekt: proces czy wynik
  const pary = Object.keys(CZASOWNIKI).filter(k=>CZASOWNIKI[k].para && CZASOWNIKI[k].asp==='ndk');
  const ndkK = _los(pary), dkK = CZASOWNIKI[ndkK].para;
  const ndk = CZASOWNIKI[ndkK], dk = CZASOWNIKI[dkK];
  if(!dk) return genTryby();
  const wynik = Math.random()<0.5;
  const rodz = _los(['m','f']);
  const zdanie = wynik
    ? `Wczoraj w końcu ___ i od razu poszedłem spać.`
    : `Wczoraj cały wieczór ___, ale nie skończyłem.`;
  const poprawna = wynik ? dk.prz[rodz] : ndk.prz[rodz];
  const zle = [wynik ? ndk.prz[rodz] : dk.prz[rodz], ndk.ter[0], dk.ter[0]];
  return _wybor(zdanie, poprawna, zle,
    wynik ? `„w końcu / od razu" = wynik → aspekt dokonany: ${dk.prz[rodz]}`
          : `„cały wieczór / nie skończyłem" = proces → aspekt niedokonany: ${ndk.prz[rodz]}`);
}

// ---------- VIII. Przyimki ----------
// Kontekst niesie ze sobą przypadek — inaczej „z pracy" (Dop.) dostawało
// objaśnienie od „z kolegą" (Narz.), bo oba przyimki brzmią tak samo.
const KONTEKSTY_PRZYIMEK = [
  {z:'Codziennie o ósmej wychodzę ___ pracy.', p:'do',   przyp:'dop'},
  {z:'Wieczorem idę ___ kina.',                p:'do',   przyp:'dop'},
  {z:'Jutro jadę ___ Krakowa.',                p:'do',   przyp:'dop'},
  {z:'Wracam właśnie ___ pracy.',              p:'z',    przyp:'dop'},
  {z:'Przyjechałem ___ Gdańska.',              p:'z',    przyp:'dop'},
  {z:'Dostałem list ___ siostry.',             p:'od',   przyp:'dop'},
  {z:'Czekam tutaj ___ rana.',                 p:'od',   przyp:'dop'},
  {z:'Kupiłem ten prezent ___ mamy.',          p:'dla',  przyp:'dop'},
  {z:'Piję kawę ___ cukru.',                   p:'bez',  przyp:'dop'},
  {z:'Apteka jest ___ dworca.',                p:'obok', przyp:'dop'},
  {z:'Klucze leżą ___ stole.',                 p:'na',   przyp:'msc'},
  {z:'Spotkajmy się ___ dworcu.',              p:'na',   przyp:'msc'},
  {z:'Mieszkam ___ Gdańsku od pięciu lat.',    p:'w',    przyp:'msc'},
  {z:'Wszystko jest ___ szafie.',              p:'w',    przyp:'msc'},
  {z:'Wczoraj długo rozmawialiśmy ___ pogodzie.', p:'o', przyp:'msc'},
  {z:'Myślę ___ wakacjach.',                   p:'o',    przyp:'msc'},
  {z:'Usiądź ___ oknie.',                      p:'przy', przyp:'msc'},
  {z:'Zjedzmy coś ___ filmie.',                p:'po',   przyp:'msc'},
  {z:'Idę do kina ___ kolegą.',                p:'z',    przyp:'narz'},
  {z:'Spotkajmy się ___ kinem o siódmej.',     p:'przed',przyp:'narz'},
  {z:'Ogród jest ___ domem.',                  p:'za',   przyp:'narz'},
  {z:'Mieszkam ___ Gdańskiem, dwadzieścia minut autem.', p:'pod', przyp:'narz'},
  {z:'Latem odpoczywamy ___ morzem.',           p:'nad',  przyp:'narz'},
  {z:'Szliśmy ___ most.',                      p:'przez',przyp:'bier'},
  {z:'Nie martw się, wrócę ___ godzinę.',      p:'za',   przyp:'bier'},
  {z:'W sobotę idziemy ___ teatru.',           p:'do',   przyp:'dop'},
  {z:'Wsiadam ___ autobusu na następnym przystanku.', p:'do', przyp:'dop'},
  {z:'Nie mogę żyć ___ kawy.',                 p:'bez',  przyp:'dop'},
  {z:'Ta książka jest ___ mojej siostry.',     p:'dla',  przyp:'dop'},
  {z:'Wyszedłem ___ domu piętnaście minut temu.', p:'z',  przyp:'dop'},
  {z:'Pracuję tu ___ zeszłego roku.',          p:'od',   przyp:'dop'},
  {z:'Poczta jest ___ apteki.',                p:'obok', przyp:'dop'},
  {z:'Zostawiłem parasol ___ pracy.',          p:'w',    przyp:'msc'},
  {z:'Zdjęcie wisi ___ ścianie.',              p:'na',   przyp:'msc'},
  {z:'Opowiedz mi ___ swoich wakacjach.',      p:'o',    przyp:'msc'},
  {z:'Czekam ___ przystanku.',                 p:'na',   przyp:'msc'},
  {z:'Siedzieliśmy ___ stole i rozmawialiśmy.',p:'przy', przyp:'msc'},
  {z:'___ obiedzie zawsze pijemy herbatę.',    p:'po',   przyp:'msc'},
  {z:'Uczę się polskiego ___ dwa lata.',       p:'od',   przyp:'dop'},
  {z:'Idę na spacer ___ psem.',                p:'z',    przyp:'narz'},
  {z:'Rozmawiałem ___ szefem o urlopie.',      p:'z',    przyp:'narz'},
  {z:'Samochód stoi ___ domem.',               p:'przed',przyp:'narz'},
  {z:'Umyj ręce ___ jedzeniem.',               p:'przed',przyp:'narz'},
  {z:'Kot schował się ___ łóżkiem.',           p:'pod',  przyp:'narz'},
  {z:'Lubię spacery ___ rzeką.',               p:'nad',  przyp:'narz'},
  {z:'Parking jest ___ budynkiem.',            p:'za',   przyp:'narz'},
  {z:'Pociąg jedzie ___ tunel.',               p:'przez',przyp:'bier'},
  {z:'Egzamin zdam ___ trzy miesiące.',        p:'za',   przyp:'bier'},
  {z:'Przechodzimy ___ ulicę na pasach.',      p:'przez',przyp:'bier'},
];
const _NAZWA_PRZYP = {dop:'Dopełniacz',msc:'Miejscownik',narz:'Narzędnik',bier:'Biernik'};
function genPrzyimki(){
  const k = _los(KONTEKSTY_PRZYIMEK);
  const opis = PRZYIMKI_BANK.find(x=>x.p===k.p && x.przyp===k.przyp);
  const inne = _mieszaj([...new Set(KONTEKSTY_PRZYIMEK.map(x=>x.p))].filter(x=>x!==k.p));
  return _wybor(k.z, k.p, inne,
    `${k.p} + ${_NAZWA_PRZYP[k.przyp]}${opis?' — '+opis.zn:''}`);
}

// ---------- I. Odmiana rzeczowników ----------
const PRZYPADKI_NAZWY = {gen:'Dopełniacz',dat:'Celownik',acc:'Biernik',inst:'Narzędnik',loc:'Miejscownik',voc:'Wołacz'};
function genOdmiana(){
  if(typeof CASE_TEMPLATES==='undefined' || typeof WORD_BANK==='undefined') return null;
  const przyp = _los(Object.keys(CASE_TEMPLATES));
  const grupa = CASE_TEMPLATES[przyp];
  const tpl = _los(grupa.templates);
  const slowo = _los(tpl.words);
  const poprawna = getForm(slowo, przyp);
  const inne = ['nom','gen','dat','acc','inst','loc','voc']
    .filter(c=>c!==przyp).map(c=>getForm(slowo,c)).filter(f=>f&&f!==poprawna);
  const zdanie = tpl.sentence.replace(/\{\{word\.\w+\}\}/g,'___');
  return _wybor(zdanie, poprawna, _mieszaj([...new Set(inne)]),
    `${tpl.note} → ${PRZYPADKI_NAZWY[przyp]||przyp}: ${poprawna}`);
}

// ---------- rejestr ----------
const GENERATORY = {
  odmiana:     genOdmiana,
  stopniowanie:genStopniowanie,
  czasy:       genCzasy,
  tryby:       genTryby,
  przyimki:    genPrzyimki,
};
