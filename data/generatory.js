// ========================================================================
// GENERATORY — składają zadania z banku form i zdań.
// Zasada: formy nigdy nie są wyliczane regułami — pochodzą z banków,
// gdzie są wpisane i sprawdzone. Generator tylko dobiera i miesza.
// Dystraktory zawsze są formami TEGO SAMEGO słowa — inaczej zadanie
// sprawdzałoby znajomość słówka, a nie gramatyki.
//
// Każde słowo ma WŁASNE zdania. Wspólne szablony („Zwykle ___ po pracy",
// „Ten sklep jest ___") dawały zdania bez sensu: „uczy się najcieplej",
// „test był wyższy", „Gdybym miał czas, wziąłbyś". Drugi warunek: w zdaniu
// musi być sygnał, który zostawia JEDNĄ poprawną odpowiedź — osoba w
// nawiasie, „bardzo / niż / ze wszystkich", „gdyby", „wczoraj".
// ========================================================================

const _los  = a => a[Math.floor(Math.random()*a.length)];
const _mieszaj = a => a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(v=>v[1]);
const _duza = s => s.charAt(0).toUpperCase()+s.slice(1);

// z listy dystraktorów robi zadanie wyboru z wymieszanymi opcjami
function _wybor(zdanie, poprawna, zle, wyjasnienie){
  const opcje = _mieszaj([poprawna, ...[...new Set(zle)].filter(z=>z && z!==poprawna).slice(0,2)]);
  return {zdanie, opcje, ok: opcje.indexOf(poprawna), wyjasnienie, _gen:true};
}

// ---------- III. Stopniowanie ----------
// Sygnał stopnia jest w zdaniu: „bardzo" — równy („bardzo lepszy" nie
// istnieje), „niż / od" — wyższy, „ze wszystkich / w mieście" — najwyższy.
// Bank ma formy mianownika m. i ż. (STOPNIOWANIE[x].st / .f), więc zdania
// stawiają przymiotnik w mianowniku; g:'f' — rzeczownik żeński.
const ZDANIA_STOPIEN = {
  'dobry':   {rowny:[{t:'To jest bardzo ___ pomysł.'}], wyzszy:[{t:'Twój pomysł jest ___ niż mój.'}],
              najwyzszy:[{t:'To ___ restauracja w całym mieście.', g:'f'}]},
  'zły':     {rowny:[{t:'Dzisiaj mam bardzo ___ dzień.'}], wyzszy:[{t:'Ten hotel jest ___ niż tamten.'}],
              najwyzszy:[{t:'To był ___ film, jaki widziałem w życiu.'}]},
  'duży':    {rowny:[{t:'Ich dom jest bardzo ___.'}], wyzszy:[{t:'Gdańsk jest ___ od Sopotu.'}],
              najwyzszy:[{t:'Wisła to ___ rzeka w Polsce.', g:'f'}]},
  'mały':    {rowny:[{t:'Mój pokój jest bardzo ___.'}], wyzszy:[{t:'Twój pokój jest ___ niż mój.'}],
              najwyzszy:[{t:'To ___ kawiarnia w mieście.', g:'f'}]},
  'dobrze':  {rowny:[{t:'Anna mówi po polsku bardzo ___.'}], wyzszy:[{t:'Mój brat mówi po polsku ___ ode mnie.'}],
              najwyzszy:[{t:'Z całej grupy to Anna mówi po polsku ___.'}]},
  'źle':     {rowny:[{t:'Dzisiaj czuję się bardzo ___.'}], wyzszy:[{t:'Dzisiaj czuję się ___ niż wczoraj.'}],
              najwyzszy:[{t:'Ze wszystkich uczniów to Piotr pisze ___.'}]},
  'dużo':    {rowny:[{t:'Mam dzisiaj bardzo ___ pracy.'}], wyzszy:[{t:'Mam teraz ___ pracy niż rok temu.'}],
              najwyzszy:[{t:'Ze wszystkich kolegów to Marek ma ___ pracy.'}]},
  'mało':    {rowny:[{t:'Mam dzisiaj bardzo ___ czasu.'}], wyzszy:[{t:'Mam teraz ___ czasu niż kiedyś.'}],
              najwyzszy:[{t:'Z nas wszystkich to ja mam ___ czasu.'}]},
  'stary':   {rowny:[{t:'Ten kościół jest bardzo ___.'}], wyzszy:[{t:'Mój brat jest ___ ode mnie.'}],
              najwyzszy:[{t:'To ___ kamienica na tej ulicy.', g:'f'}]},
  'młody':   {rowny:[{t:'Nasz nauczyciel jest bardzo ___.'}], wyzszy:[{t:'Moja siostra jest ___ ode mnie.', g:'f'}],
              najwyzszy:[{t:'Tomek jest ___ w naszej grupie.'}]},
  'tani':    {rowny:[{t:'Ten sklep jest bardzo ___.'}], wyzszy:[{t:'Bilet na pociąg jest ___ niż bilet na samolot.'}],
              najwyzszy:[{t:'To ___ hotel w okolicy.'}]},
  'drogi':   {rowny:[{t:'Ten samochód jest bardzo ___.'}], wyzszy:[{t:'Hotel w centrum jest ___ niż hotel na obrzeżach.'}],
              najwyzszy:[{t:'To ___ restauracja w mieście.', g:'f'}]},
  'ciekawy': {rowny:[{t:'To był bardzo ___ film.'}], wyzszy:[{t:'Książka jest ___ niż film.', g:'f'}],
              najwyzszy:[{t:'To ___ wystawa, jaką widziałem.', g:'f'}]},
  'trudny':  {rowny:[{t:'Ten egzamin jest bardzo ___.'}], wyzszy:[{t:'Polska gramatyka jest ___ niż angielska.', g:'f'}],
              najwyzszy:[{t:'Ten test był ___ ze wszystkich.'}]},
  'łatwy':   {rowny:[{t:'Ten tekst jest bardzo ___.'}], wyzszy:[{t:'Dzisiejszy test był ___ niż poprzedni.'}],
              najwyzszy:[{t:'Ten przepis jest ___ ze wszystkich.'}]},
  'ładny':   {rowny:[{t:'Twoja sukienka jest bardzo ___.', g:'f'}], wyzszy:[{t:'Ten park jest ___ niż tamten.'}],
              najwyzszy:[{t:'To ___ plaża na całym wybrzeżu.', g:'f'}]},
  'wysoki':  {rowny:[{t:'Mój brat jest bardzo ___.'}], wyzszy:[{t:'Jestem już ___ od taty.'}],
              najwyzszy:[{t:'To ___ budynek w mieście.'}]},
  'niski':   {rowny:[{t:'Ten stół jest bardzo ___.'}], wyzszy:[{t:'Moja mama jest ___ ode mnie.', g:'f'}],
              najwyzszy:[{t:'To była ___ temperatura w tym roku.', g:'f'}]},
  'ważny':   {rowny:[{t:'To jest bardzo ___ egzamin.'}], wyzszy:[{t:'Rodzina jest dla mnie ___ niż praca.', g:'f'}],
              najwyzszy:[{t:'To był ___ dzień w moim życiu.'}]},
  'zmęczony':{rowny:[{t:'Po pracy jestem bardzo ___.'}], wyzszy:[{t:'Dzisiaj jestem ___ niż wczoraj.'}],
              najwyzszy:[{t:'Ze wszystkich w grupie to Piotr był ___.'}]},
  'chory':   {rowny:[{t:'Mój syn jest dzisiaj bardzo ___.'}], wyzszy:[{t:'Dzisiaj babcia jest ___ niż wczoraj.', g:'f'}],
              najwyzszy:[{t:'Z całej rodziny to dziadek był ___.'}]},
  'szybko':  {rowny:[{t:'On mówi bardzo ___.'}], wyzszy:[{t:'Pociąg jedzie ___ niż autobus.'}],
              najwyzszy:[{t:'Ze wszystkich zawodników to Marek biegał ___.'}]},
  'wolno':   {rowny:[{t:'Proszę mówić bardzo ___.'}], wyzszy:[{t:'Tramwaj jedzie ___ niż metro.'}],
              najwyzszy:[{t:'Ze wszystkich uczniów to Piotr czyta ___.'}]},
  'ciepło':  {rowny:[{t:'Dzisiaj jest bardzo ___.'}], wyzszy:[{t:'Dzisiaj jest ___ niż wczoraj.'}],
              najwyzszy:[{t:'Ze wszystkich miesięcy ___ jest w lipcu.'}]},
  'zimno':   {rowny:[{t:'W styczniu jest bardzo ___.'}], wyzszy:[{t:'Dzisiaj jest ___ niż wczoraj.'}],
              najwyzszy:[{t:'Ze wszystkich miesięcy ___ jest w styczniu.'}]},
  'często':  {rowny:[{t:'Bardzo ___ chodzę na basen.'}], wyzszy:[{t:'Teraz chodzę na basen ___ niż kiedyś.'}],
              najwyzszy:[{t:'Ze wszystkich restauracji ___ chodzimy do tej.'}]},
  'daleko':  {rowny:[{t:'Dworzec jest stąd bardzo ___.'}], wyzszy:[{t:'Moja praca jest ___ niż twoja.'}],
              najwyzszy:[{t:'Ze wszystkich kolegów to ja mieszkam ___ od centrum.'}]},
  'blisko':  {rowny:[{t:'Sklep jest stąd bardzo ___.'}], wyzszy:[{t:'Apteka jest ___ niż poczta.'}],
              najwyzszy:[{t:'Ze wszystkich przystanków ten jest ___ mojego domu.'}]},
  'późno':   {rowny:[{t:'Wczoraj wróciłem do domu bardzo ___.'}], wyzszy:[{t:'Wczoraj wróciłem ___ niż zwykle.'}],
              najwyzszy:[{t:'Z całej rodziny to ja wstaję ___.'}]},
};
const _WYJ_ST = {
  rowny:'stopień równy — sygnał „bardzo" (nie mówi się „bardzo lepszy")',
  wyzszy:'stopień wyższy — sygnał: „niż", „od / ode mnie"',
  najwyzszy:'stopień najwyższy — sygnał: „ze wszystkich", „w mieście", „jaki widziałem"'
};
function genStopniowanie(){
  const klucz = _los(Object.keys(ZDANIA_STOPIEN).filter(k=>STOPNIOWANIE[k]));
  const w = STOPNIOWANIE[klucz];
  const stopien = _los(['rowny','wyzszy','najwyzszy']);
  const idx = {rowny:0,wyzszy:1,najwyzszy:2}[stopien];
  const zd = _los(ZDANIA_STOPIEN[klucz][stopien]);
  const formy = (zd.g==='f' && w.f) ? w.f : w.st;
  return _wybor(zd.t, formy[idx], formy.filter((_,i)=>i!==idx),
    `${formy[0]} → ${formy[1]} → ${formy[2]}. ${_WYJ_ST[stopien]}`);
}

// ---------- IV. Czasy: teraźniejszy i przyszły ----------
// Osoba stoi w nawiasie, jak w lekcjach kursu: bez podmiotu „Jutro ___
// (kupić)" przyjmuje i kupię, i kupimy. Niedokonane — czas teraźniejszy,
// dokonane — przyszły prosty.
const ZDANIA_CZASY = {
  'robić':'W soboty zwykle ___ ({B}) zakupy.',
  'pisać':'Codziennie ___ ({B}) maile do klientów.',
  'czytać':'Wieczorem zwykle ___ ({B}) książkę.',
  'jeść':'Codziennie o ósmej ___ ({B}) śniadanie.',
  'pić':'Rano zawsze ___ ({B}) kawę z mlekiem.',
  'kupować':'Chleb zawsze ___ ({B}) w małej piekarni.',
  'wracać':'Codziennie ___ ({B}) z pracy o szóstej.',
  'pomagać':'Często ___ ({B}) sąsiadom w ogrodzie.',
  'dzwonić':'W niedziele zawsze ___ ({B}) do rodziców.',
  'otwierać':'Rano zawsze ___ ({B}) okno w sypialni.',
  'oglądać':'Wieczorami ___ ({B}) seriale.',
  'sprzątać':'W soboty ___ ({B}) całe mieszkanie.',
  'być':'Teraz ___ ({B}) w pracy.',
  'mieć':'Dzisiaj ___ ({B}) dużo pracy.',
  'iść':'Teraz ___ ({B}) do sklepu.',
  'jechać':'Właśnie ___ ({B}) do pracy autobusem.',
  'móc':'Niestety, dzisiaj nie ___ ({B}) przyjść.',
  'chcieć':'W przyszłości ___ ({B}) mieszkać nad morzem.',
  'musieć':'Jutro ___ ({B}) wcześnie wstać.',
  'wiedzieć':'Nie ___ ({B}), gdzie jest dworzec.',
  'znać':'Dobrze ___ ({B}) to miasto.',
  'brać':'Do pracy zawsze ___ ({B}) parasol.',
  'mówić':'Trochę ___ ({B}) po angielsku.',
  'pracować':'Od poniedziałku do piątku ___ ({B}) w biurze.',
  'mieszkać':'Od roku ___ ({B}) w Gdańsku.',
  'rozumieć':'Już dobrze ___ ({B}) po polsku.',
  'widzieć':'Z okna ___ ({B}) morze.',
  'zrobić':'Jutro ___ ({B}) zakupy.',
  'napisać':'Wieczorem ___ ({B}) list do babci.',
  'przeczytać':'Do piątku ___ ({B}) tę książkę.',
  'zjeść':'Po pracy ___ ({B}) obiad w restauracji.',
  'wypić':'Przed spotkaniem ___ ({B}) jeszcze kawę.',
  'kupić':'W przyszłym miesiącu ___ ({B}) nowy samochód.',
  'wrócić':'Jutro ___ ({B}) do domu przed dziesiątą.',
  'pomóc':'W sobotę ___ ({B}) sąsiadom w przeprowadzce.',
  'zadzwonić':'Wieczorem ___ ({B}) do mamy.',
  'otworzyć':'Za chwilę ___ ({B}) okno, bo jest duszno.',
  'obejrzeć':'W weekend ___ ({B}) nowy film.',
  'posprzątać':'Jutro rano ___ ({B}) kuchnię.',
  'pójść':'Jutro ___ ({B}) do lekarza.',
  'pojechać':'W sierpniu ___ ({B}) nad morze.',
  'wziąć':'Na wycieczkę ___ ({B}) aparat.',
  'powiedzieć':'Jutro ___ ({B}) szefowi prawdę.',
  'zobaczyć':'W Krakowie na pewno ___ ({B}) Wawel.',
};
function genCzasy(){
  const klucz = _los(Object.keys(ZDANIA_CZASY).filter(k=>CZASOWNIKI[k]));
  const c = CZASOWNIKI[klucz];
  const osoba = _los(OSOBY);
  const i = OSOBY.indexOf(osoba);
  const przyszly = c.asp==='dk';
  const poprawna = c.ter[i];
  const zdanie = ZDANIA_CZASY[klucz].replace('{B}', klucz+' — '+osoba);
  // dystraktory: inne osoby tego samego czasownika
  const inne = _mieszaj(c.ter.filter((f,j)=>j!==i && f!==poprawna));
  return {..._wybor(_duza(zdanie), poprawna, inne,
    `${klucz} (${c.asp}${przyszly?' — forma teraźniejsza znaczy przyszłość':''}), ${osoba}: ${poprawna}. Odmiana: ${c.ter.join(', ')}`),
    _tryb: przyszly?'przyszły prosty':'teraźniejszy'};
}

// ---------- VII. Tryby: rozkazujący i przypuszczający, aspekt ----------
// Rozkazujący: zwrot do jednej osoby (Marku) albo do grupy (Kochani).
// n:true — zakaz: wtedy niedokonany, a dokonany staje się pułapką.
const ZDANIA_ROZKAZ = {
  'robić':{k:'tyle hałasu!', n:true},       'zrobić':{k:'mi kawę, proszę!'},
  'pisać':{k:'wyraźnie, proszę!'},          'napisać':{k:'do mnie po przyjeździe!'},
  'czytać':{k:'głośniej, proszę!'},         'przeczytać':{k:'ten tekst do jutra!'},
  'jeść':{k:'więcej warzyw!'},              'zjeść':{k:'coś przed wyjściem!'},
  'pić':{k:'dużo wody, jest upał!'},        'wypić':{k:'herbatę, póki jest ciepła!'},
  'kupować':{k:'biletów w autobusie, w kiosku są tańsze!', n:true}, 'kupić':{k:'chleb w drodze do domu!'},
  'wracać':{k:'za późno!', n:true},         'wrócić':{k:'przed północą!'},
  'pomagać':{k:'mamie w kuchni!'},          'pomóc':{k:'mi z tą walizką, proszę!'},
  'dzwonić':{k:'do mnie w nocy!', n:true},  'zadzwonić':{k:'do mnie wieczorem!'},
  'otwierać':{k:'okna, jest zimno!', n:true}, 'otworzyć':{k:'okno, proszę, jest duszno!'},
  'oglądać':{k:'telewizji tak długo!', n:true}, 'obejrzeć':{k:'ten film, jest świetny!'},
  'sprzątać':{k:'teraz, jest już późno!', n:true}, 'posprzątać':{k:'pokój przed przyjazdem babci!'},
  'być':{ty:'cierpliwy!', wy:'cierpliwi!'},
  'iść':{k:'już spać, jest późno!'},        'jechać':{k:'ostrożnie, jest ślisko!'},
  'wziąć':{k:'parasol, będzie padać!'},
  'mówić':{k:'wolniej, proszę!'},           'powiedzieć':{k:'mi prawdę!'},
  'pracować':{k:'tak dużo!', n:true},
  'zobaczyć':{k:', jaki piękny widok!'},
};
// Przypuszczający: zdanie samo wyznacza osobę — „Gdybym miał" to ja (m.),
// „Gdybym miała" to ja (ż.), „Gdybyśmy mieli" i „Gdyby nie padało…" to my.
// Dystraktory: ta sama osoba w czasie teraźniejszym/przyszłym i w przeszłym,
// nigdy inna osoba czy rodzaj w trybie przypuszczającym — to też byłoby poprawne.
const RAMY_WARUNEK = {
  czasM:   {t:'Gdybym miał więcej czasu, ___ ({B}) {K}.',   os:'ja', r:'m'},
  czasF:   {t:'Gdybym miała więcej czasu, ___ ({B}) {K}.',  os:'ja', r:'f'},
  miejsce: {t:'Na twoim miejscu ___ ({B}) {K}.',            os:'ja', r:'m'},
  pieniadze:{t:'Gdybyśmy mieli więcej pieniędzy, ___ ({B}) {K}.', os:'my', r:'m'},
  deszcz:  {t:'Gdyby nie padało, ___ ({B}) {K}.',           os:'my', r:'m'},
};
const ZDANIA_WARUNEK = {
  'pojechać':  {czas:'nad morze', miejsce:'nad morze', pieniadze:'nad morze', deszcz:'nad morze'},
  'pójść':     {czas:'na długi spacer', deszcz:'na długi spacer', miejsce:'do lekarza'},
  'przeczytać':{czas:'więcej książek', miejsce:'tę umowę jeszcze raz'},
  'kupić':     {pieniadze:'większe mieszkanie', miejsce:'tańszy bilet'},
  'obejrzeć':  {czas:'ten serial', miejsce:'ten film w kinie'},
  'posprzątać':{czas:'całe mieszkanie'},
  'pomóc':     {czas:'ci w przeprowadzce'},
  'napisać':   {czas:'książkę o Polsce'},
  'zadzwonić': {miejsce:'do lekarza'},
  'zjeść':     {miejsce:'coś przed egzaminem'},
  'wrócić':    {miejsce:'wcześniej do domu'},
  'zrobić':    {czas:'kurs prawa jazdy', deszcz:'grilla w ogrodzie'},
  'powiedzieć':{miejsce:'mu prawdę'},
  'wziąć':     {miejsce:'parasol'},
  'zobaczyć':  {pieniadze:'więcej świata'},
  'otworzyć':  {pieniadze:'własną kawiarnię'},
  'czytać':    {czas:'więcej książek'},
  'pracować':  {pieniadze:'mniej'},
  'mieszkać':  {pieniadze:'nad morzem'},
  'oglądać':   {czas:'więcej filmów'},
  'jeść':      {miejsce:'mniej słodyczy'},
  'pić':       {miejsce:'więcej wody'},
  'sprzątać':  {czas:'częściej'},
  'pomagać':   {pieniadze:'innym'},
  'dzwonić':   {czas:'częściej do rodziców'},
};
// Aspekt: proces czy wynik. Podmiot nazwany, żeby rodzaj był jasny.
const ZDANIA_ASPEKT = {
  'pisać':'list do babci', 'czytać':'tę książkę', 'robić':'zadanie domowe',
  'oglądać':'ten film', 'sprzątać':'mieszkanie',
};
const OSOBY_ASPEKT = [{s:'Marek', r:'m', konc:'skończył'}, {s:'Ania', r:'f', konc:'skończyła'}];

function genTryby(){
  const rodzaj = _los(['rozkaz','warunek','aspekt']);

  if(rodzaj==='rozkaz'){
    const klucz = _los(Object.keys(ZDANIA_ROZKAZ).filter(k=>CZASOWNIKI[k] && CZASOWNIKI[k].rozk));
    const c = CZASOWNIKI[klucz], z = ZDANIA_ROZKAZ[klucz];
    const doWy = Math.random()<0.4;
    const kom = z.k!==undefined ? z.k : (doWy ? z.wy : z.ty);
    const zdanie = (doWy?'Kochani':'Marku') + ', ' + (z.n?'nie ':'') + '___ ('+klucz+')' + (kom.startsWith(',')?'':' ') + kom;
    const poprawna = doWy ? c.rozk.wy : c.rozk.ty;
    // w zakazie pułapką jest dokonany: „nie otwórz" zamiast „nie otwieraj"
    const para = c.para && CZASOWNIKI[c.para] && CZASOWNIKI[c.para].rozk;
    const zle = z.n && para ? [doWy ? para.wy : para.ty, doWy?c.rozk.ty:c.rozk.wy]
                            : [doWy?c.rozk.ty:c.rozk.wy, c.ter[doWy?4:1]];
    return _wybor(zdanie, poprawna, zle,
      `Tryb rozkazujący, ${doWy?'wy':'ty'}: ${poprawna}. (ty: ${c.rozk.ty}, wy: ${c.rozk.wy})` +
      (z.n?' Zakaz — aspekt niedokonany.':''));
  }

  if(rodzaj==='warunek'){
    const klucz = _los(Object.keys(ZDANIA_WARUNEK).filter(k=>CZASOWNIKI[k]));
    const zw = ZDANIA_WARUNEK[klucz];
    const ramy = Object.keys(zw).flatMap(k=>k==='czas'?['czasM','czasF']:[k]);
    const nazwa = _los(ramy), rama = RAMY_WARUNEK[nazwa];
    const kom = zw[nazwa==='czasM'||nazwa==='czasF' ? 'czas' : nazwa];
    const poprawna = trybPrzypuszczajacy(klucz, rama.os, rama.r);
    const zle = [formaTeraz(klucz, rama.os), formaPrzeszla(klucz, rama.os, rama.r)];
    const zdanie = rama.t.replace('{B}', klucz).replace('{K}', kom);
    return _wybor(zdanie, poprawna, zle,
      `Tryb przypuszczający (${rama.os}${rama.os==='ja'?', rodzaj '+(rama.r==='f'?'żeński':'męski'):''}): ${poprawna}. ` +
      `Forma przeszła + bym/byś/by/byśmy. Po „gdyby" i w radach „na twoim miejscu" — tylko ten tryb.`);
  }

  // aspekt
  const ndkK = _los(Object.keys(ZDANIA_ASPEKT).filter(k=>CZASOWNIKI[k] && CZASOWNIKI[CZASOWNIKI[k].para]));
  const ndk = CZASOWNIKI[ndkK], dk = CZASOWNIKI[ndk.para];
  const o = _los(OSOBY_ASPEKT), kom = ZDANIA_ASPEKT[ndkK];
  const wynik = Math.random()<0.5;
  const zdanie = wynik ? `Wczoraj ${o.s} w końcu ___ ${kom}.`
                       : `${o.s} cały wieczór ___ ${kom}, ale nie ${o.konc}.`;
  const poprawna = wynik ? dk.prz[o.r] : ndk.prz[o.r];
  const zle = [wynik ? ndk.prz[o.r] : dk.prz[o.r], dk.ter[2]];
  return _wybor(zdanie, poprawna, zle,
    wynik ? `„w końcu" = wynik → aspekt dokonany: ${dk.prz[o.r]}`
          : `„cały wieczór… ale nie skończył(a)" = proces → aspekt niedokonany: ${ndk.prz[o.r]}`);
}

// ---------- VIII. Przyimki ----------
// Kontekst niesie przypadek, a dystraktory są wpisane ręcznie: losowy
// przyimek bywał też poprawny („Spotkajmy się pod kinem", „Wracam po pracy",
// „Przyjechałem do Gdańska"). W „zle" są tylko takie, które z tą formą
// rzeczownika i tym znaczeniem na pewno nie pasują.
const KONTEKSTY_PRZYIMEK = [
  {z:'Codziennie o ósmej wychodzę ___ pracy.', p:'do',   przyp:'dop', zle:['na','o','przy']},
  {z:'Wieczorem idę ___ kina.',                p:'do',   przyp:'dop', zle:['na','w','o']},
  {z:'Jutro jadę ___ Krakowa.',                p:'do',   przyp:'dop', zle:['na','w','o']},
  {z:'Wracam właśnie ___ pracy.',              p:'z',    przyp:'dop', zle:['w','na','o']},
  {z:'Przyjechałem ___ Gdańska.',              p:'z',    przyp:'dop', zle:['w','na','o']},
  {z:'Dostałem list ___ siostry.',             p:'od',   przyp:'dop', zle:['w','na','o']},
  {z:'Czekam tutaj ___ rana.',                 p:'od',   przyp:'dop', zle:['w','na','o']},
  {z:'Kupiłem ten prezent ___ mamy.',          p:'dla',  przyp:'dop', zle:['w','na','o']},
  {z:'Piję kawę ___ cukru.',                   p:'bez',  przyp:'dop', zle:['w','na','do']},
  {z:'Apteka jest ___ dworca.',                p:'obok', przyp:'dop', zle:['do','w','na']},
  {z:'Klucze leżą ___ stole.',                 p:'na',   przyp:'msc', zle:['o','do','z']},
  {z:'Spotkajmy się ___ dworcu.',              p:'na',   przyp:'msc', zle:['o','do','z']},
  {z:'Mieszkam ___ Gdańsku od pięciu lat.',    p:'w',    przyp:'msc', zle:['na','o','do']},
  {z:'Wszystko jest ___ szafie.',              p:'w',    przyp:'msc', zle:['o','do','z']},
  {z:'Wczoraj długo rozmawialiśmy ___ pogodzie.', p:'o', przyp:'msc', zle:['na','w','do']},
  {z:'Myślę ___ wakacjach.',                   p:'o',    przyp:'msc', zle:['w','do','z']},
  {z:'Usiądź ___ oknie.',                      p:'przy', przyp:'msc', zle:['o','do','z']},
  {z:'Zjedzmy coś ___ filmie.',                p:'po',   przyp:'msc', zle:['o','do','z']},
  {z:'Idę do kina ___ kolegą.',                p:'z',    przyp:'narz', zle:['do','na','o']},
  {z:'Spotkajmy się ___ kinem o siódmej.',     p:'przed',przyp:'narz', zle:['do','na','o']},
  {z:'Ogród jest ___ domem.',                  p:'za',   przyp:'narz', zle:['do','na','o']},
  {z:'Mieszkam ___ Gdańskiem, dwadzieścia minut autem.', p:'pod', przyp:'narz', zle:['do','na','o']},
  {z:'Latem odpoczywamy ___ morzem.',          p:'nad',  przyp:'narz', zle:['do','na','o']},
  {z:'Szliśmy ___ most.',                      p:'przez',przyp:'bier', zle:['do','o','z']},
  {z:'Nie martw się, wrócę ___ godzinę.',      p:'za',   przyp:'bier', zle:['do','od','bez']},
  {z:'W sobotę idziemy ___ teatru.',           p:'do',   przyp:'dop', zle:['na','w','o']},
  {z:'Wsiadam ___ autobusu na następnym przystanku.', p:'do', przyp:'dop', zle:['na','w','o']},
  {z:'Nie mogę żyć ___ kawy.',                 p:'bez',  przyp:'dop', zle:['na','w','o']},
  {z:'Ta książka jest ___ mojej siostry.',     p:'dla',  przyp:'dop', zle:['na','w','o']},
  {z:'Wyszedłem ___ domu piętnaście minut temu.', p:'z', przyp:'dop', zle:['na','o','przy']},
  {z:'Pracuję tu ___ zeszłego roku.',          p:'od',   przyp:'dop', zle:['na','w','o']},
  {z:'Poczta jest ___ apteki.',                p:'obok', przyp:'dop', zle:['do','w','na']},
  {z:'Zostawiłem parasol ___ pracy.',          p:'w',    przyp:'msc', zle:['o','na','przez']},
  {z:'Zdjęcie wisi ___ ścianie.',              p:'na',   przyp:'msc', zle:['o','do','z']},
  {z:'Opowiedz mi ___ swoich wakacjach.',      p:'o',    przyp:'msc', zle:['na','w','do']},
  {z:'Czekam ___ przystanku.',                 p:'na',   przyp:'msc', zle:['o','do','z']},
  {z:'Siedzieliśmy ___ stole i rozmawialiśmy.',p:'przy', przyp:'msc', zle:['o','do','z']},
  {z:'___ obiedzie zawsze pijemy herbatę.',    p:'po',   przyp:'msc', zle:['o','do','z']},
  {z:'Uczę się polskiego ___ dwóch lat.',      p:'od',   przyp:'dop', zle:['na','w','o']},
  {z:'Idę na spacer ___ psem.',                p:'z',    przyp:'narz', zle:['do','na','o']},
  {z:'Rozmawiałem ___ szefem o urlopie.',      p:'z',    przyp:'narz', zle:['do','na','o']},
  {z:'Samochód stoi ___ domem.',               p:'przed',przyp:'narz', zle:['do','na','o']},
  {z:'Umyj ręce ___ jedzeniem.',               p:'przed',przyp:'narz', zle:['do','na','o']},
  {z:'Kot schował się ___ łóżkiem.',           p:'pod',  przyp:'narz', zle:['do','na','o']},
  {z:'Lubię spacery ___ rzeką.',               p:'nad',  przyp:'narz', zle:['do','na','o']},
  {z:'Parking jest ___ budynkiem.',            p:'za',   przyp:'narz', zle:['do','na','o']},
  {z:'Pociąg jedzie ___ tunel.',               p:'przez',przyp:'bier', zle:['do','o','z']},
  {z:'Egzamin zdam ___ trzy miesiące.',        p:'za',   przyp:'bier', zle:['do','od','bez']},
  {z:'Przechodzimy ___ ulicę na pasach.',      p:'przez',przyp:'bier', zle:['do','o','z']},
];
const _NAZWA_PRZYP = {dop:'Dopełniacz',msc:'Miejscownik',narz:'Narzędnik',bier:'Biernik'};
function genPrzyimki(){
  const k = _los(KONTEKSTY_PRZYIMEK);
  const opis = PRZYIMKI_BANK.find(x=>x.p===k.p && x.przyp===k.przyp);
  return _wybor(k.z, k.p, _mieszaj(k.zle),
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

// ---------- X. Czas przeszły ----------
// W zestawie Komisji to osobny, duży dział (5 zadań). Formy leżą
// w CZASOWNIKI.prz — trzeba tylko dobrać rodzaj i liczbę do podmiotu.
// Każde zdanie ma jeden czasownik do odmiany: dawne „Dzieci napisały
// i od razu poszli do domu" uczyło złej zgody („dzieci poszły").
const PODMIOTY_PRZ = [
  {p:'Tomek',        r:'m'},  {p:'Ania',        r:'f'},
  {p:'Mój brat',     r:'m'},  {p:'Moja siostra', r:'f'},
  {p:'Chłopcy',      r:'mos'},{p:'Dziewczyny',   r:'nmos'},
  {p:'Rodzice',      r:'mos'},{p:'Dzieci',       r:'nmos'},
];
const ZDANIA_PRZESZ = {
  'robić':'{P} cały dzień ___ ({B}) porządki w garażu.',
  'zrobić':'{P} ___ ({B}) wczoraj zakupy na cały tydzień.',
  'pisać':'{P} długo ___ ({B}) list do przyjaciela.',
  'napisać':'{P} ___ ({B}) wczoraj list do babci.',
  'czytać':'{P} cały wieczór ___ ({B}) książkę.',
  'przeczytać':'{P} w końcu ___ ({B}) tę książkę.',
  'jeść':'{P} ___ ({B}) obiad, kiedy zadzwonił telefon.',
  'zjeść':'{P} ___ ({B}) całą pizzę.',
  'pić':'{P} ___ ({B}) herbatę w kawiarni.',
  'wypić':'{P} ___ ({B}) całą butelkę wody.',
  'kupować':'{P} zawsze ___ ({B}) chleb w tej piekarni.',
  'kupić':'{P} ___ ({B}) wczoraj nowy rower.',
  'wracać':'{P} zawsze ___ ({B}) do domu przez park.',
  'wrócić':'{P} ___ ({B}) z wakacji w niedzielę.',
  'pomagać':'{P} często ___ ({B}) babci w ogrodzie.',
  'pomóc':'{P} ___ ({B}) mi wczoraj w przeprowadzce.',
  'dzwonić':'{P} ___ ({B}) do mnie trzy razy.',
  'zadzwonić':'{P} ___ ({B}) do mnie wieczorem.',
  'otwierać':'{P} powoli ___ ({B}) drzwi.',
  'otworzyć':'{P} ___ ({B}) okno, bo było gorąco.',
  'oglądać':'{P} cały wieczór ___ ({B}) telewizję.',
  'obejrzeć':'{P} ___ ({B}) wczoraj ciekawy film.',
  'sprzątać':'{P} całe przedpołudnie ___ ({B}) mieszkanie.',
  'posprzątać':'{P} ___ ({B}) pokój przed przyjazdem gości.',
  'być':'{P} ___ ({B}) wczoraj w teatrze.',
  'mieć':'{P} ___ ({B}) wczoraj dobry humor.',
  'iść':'{P} ___ ({B}) przez park, kiedy zaczął padać deszcz.',
  'pójść':'{P} ___ ({B}) wczoraj do kina.',
  'jechać':'{P} ___ ({B}) autobusem, kiedy zadzwoniłem.',
  'pojechać':'{P} ___ ({B}) w sierpniu nad morze.',
  'móc':'{P} nie ___ ({B}) wczoraj przyjść.',
  'chcieć':'{P} zawsze ___ ({B}) zobaczyć Kraków.',
  'musieć':'{P} ___ ({B}) wczoraj wcześnie wstać.',
  'wiedzieć':'{P} nie ___ ({B}), gdzie jest dworzec.',
  'znać':'{P} dobrze ___ ({B}) to miasto.',
  'brać':'{P} zawsze ___ ({B}) ze sobą parasol.',
  'wziąć':'{P} ___ ({B}) aparat na wycieczkę.',
  'mówić':'{P} ___ ({B}) tak szybko, że nic nie zrozumiałem.',
  'powiedzieć':'{P} ___ ({B}) mi całą prawdę.',
  'pracować':'{P} cały dzień ___ ({B}) w ogrodzie.',
  'mieszkać':'{P} kiedyś ___ ({B}) w Krakowie.',
  'rozumieć':'{P} nie ___ ({B}) pytania nauczyciela.',
  'widzieć':'{P} ___ ({B}) ten film już dwa razy.',
  'zobaczyć':'{P} pierwszy raz ___ ({B}) morze.',
};
function genCzasPrzeszly(){
  const klucz = _los(Object.keys(ZDANIA_PRZESZ).filter(k=>CZASOWNIKI[k] && CZASOWNIKI[k].prz));
  const c = CZASOWNIKI[klucz];
  const pod = _los(PODMIOTY_PRZ);
  const poprawna = c.prz[pod.r];
  if(!poprawna) return null;
  const zdanie = ZDANIA_PRZESZ[klucz].replace('{P}',pod.p).replace('{B}',klucz);
  // dystraktory: ten sam czasownik w innych rodzajach — dokładnie tu się myli
  const inne = ['m','f','mos','nmos'].filter(r=>r!==pod.r)
    .map(r=>c.prz[r]).filter(f=>f && f!==poprawna);
  const nazwaR = {m:'rodzaj męski',f:'rodzaj żeński',mos:'męskoosobowy l.mn.',nmos:'niemęskoosobowy l.mn.'}[pod.r];
  return _wybor(zdanie, poprawna, _mieszaj([...new Set(inne)]),
    `${klucz} → czas przeszły, ${nazwaR}: ${poprawna}. (on: ${c.prz.m}, ona: ${c.prz.f}, oni: ${c.prz.mos}, one: ${c.prz.nmos})`);
}

GENERATORY.przeszly = genCzasPrzeszly;
GENERATORY.zaimki   = (typeof genZaimek==='function') ? genZaimek : null;
