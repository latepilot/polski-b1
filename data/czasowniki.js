// ========================================================================
// CZASOWNIKI — bank form do generowania zadań
// Formy są WPISANE, nie wyliczane: polska koniugacja jest zbyt nieregularna,
// żeby ją bezpiecznie generować regułami (biorę, jem, wiem, mogę…).
// Wyliczane są tylko formy naprawdę regularne:
//   tryb przypuszczający = forma przeszła + bym/byś/by/byśmy/byście/by
//   czas przyszły złożony = będę + bezokolicznik
// ter[] = ja, ty, on/ona, my, wy, oni   (dla dk to czas przyszły prosty)
// prz   = m (on), f (ona), mos (oni), nmos (one)
// ========================================================================

const CZASOWNIKI = {
  // --- niedokonane / dokonane pary ---
  'robić':      {asp:'ndk', para:'zrobić',    ter:['robię','robisz','robi','robimy','robicie','robią'],
                 prz:{m:'robił',f:'robiła',mos:'robili',nmos:'robiły'}, rozk:{ty:'rób',wy:'róbcie'}},
  'zrobić':     {asp:'dk',  para:'robić',     ter:['zrobię','zrobisz','zrobi','zrobimy','zrobicie','zrobią'],
                 prz:{m:'zrobił',f:'zrobiła',mos:'zrobili',nmos:'zrobiły'}, rozk:{ty:'zrób',wy:'zróbcie'}},
  'pisać':      {asp:'ndk', para:'napisać',   ter:['piszę','piszesz','pisze','piszemy','piszecie','piszą'],
                 prz:{m:'pisał',f:'pisała',mos:'pisali',nmos:'pisały'}, rozk:{ty:'pisz',wy:'piszcie'}},
  'napisać':    {asp:'dk',  para:'pisać',     ter:['napiszę','napiszesz','napisze','napiszemy','napiszecie','napiszą'],
                 prz:{m:'napisał',f:'napisała',mos:'napisali',nmos:'napisały'}, rozk:{ty:'napisz',wy:'napiszcie'}},
  'czytać':     {asp:'ndk', para:'przeczytać',ter:['czytam','czytasz','czyta','czytamy','czytacie','czytają'],
                 prz:{m:'czytał',f:'czytała',mos:'czytali',nmos:'czytały'}, rozk:{ty:'czytaj',wy:'czytajcie'}},
  'przeczytać': {asp:'dk',  para:'czytać',    ter:['przeczytam','przeczytasz','przeczyta','przeczytamy','przeczytacie','przeczytają'],
                 prz:{m:'przeczytał',f:'przeczytała',mos:'przeczytali',nmos:'przeczytały'}, rozk:{ty:'przeczytaj',wy:'przeczytajcie'}},
  'jeść':       {asp:'ndk', para:'zjeść',     ter:['jem','jesz','je','jemy','jecie','jedzą'],
                 prz:{m:'jadł',f:'jadła',mos:'jedli',nmos:'jadły'}, rozk:{ty:'jedz',wy:'jedzcie'}},
  'zjeść':      {asp:'dk',  para:'jeść',      ter:['zjem','zjesz','zje','zjemy','zjecie','zjedzą'],
                 prz:{m:'zjadł',f:'zjadła',mos:'zjedli',nmos:'zjadły'}, rozk:{ty:'zjedz',wy:'zjedzcie'}},
  'pić':        {asp:'ndk', para:'wypić',     ter:['piję','pijesz','pije','pijemy','pijecie','piją'],
                 prz:{m:'pił',f:'piła',mos:'pili',nmos:'piły'}, rozk:{ty:'pij',wy:'pijcie'}},
  'wypić':      {asp:'dk',  para:'pić',       ter:['wypiję','wypijesz','wypije','wypijemy','wypijecie','wypiją'],
                 prz:{m:'wypił',f:'wypiła',mos:'wypili',nmos:'wypiły'}, rozk:{ty:'wypij',wy:'wypijcie'}},
  'kupować':    {asp:'ndk', para:'kupić',     ter:['kupuję','kupujesz','kupuje','kupujemy','kupujecie','kupują'],
                 prz:{m:'kupował',f:'kupowała',mos:'kupowali',nmos:'kupowały'}, rozk:{ty:'kupuj',wy:'kupujcie'}},
  'kupić':      {asp:'dk',  para:'kupować',   ter:['kupię','kupisz','kupi','kupimy','kupicie','kupią'],
                 prz:{m:'kupił',f:'kupiła',mos:'kupili',nmos:'kupiły'}, rozk:{ty:'kup',wy:'kupcie'}},
  'wracać':     {asp:'ndk', nprz:true, para:'wrócić',    ter:['wracam','wracasz','wraca','wracamy','wracacie','wracają'],
                 prz:{m:'wracał',f:'wracała',mos:'wracali',nmos:'wracały'}, rozk:{ty:'wracaj',wy:'wracajcie'}},
  'wrócić':     {asp:'dk', nprz:true,  para:'wracać',    ter:['wrócę','wrócisz','wróci','wrócimy','wrócicie','wrócą'],
                 prz:{m:'wrócił',f:'wróciła',mos:'wrócili',nmos:'wróciły'}, rozk:{ty:'wróć',wy:'wróćcie'}},
  'pomagać':    {asp:'ndk', nprz:true, para:'pomóc',     ter:['pomagam','pomagasz','pomaga','pomagamy','pomagacie','pomagają'],
                 prz:{m:'pomagał',f:'pomagała',mos:'pomagali',nmos:'pomagały'}, rozk:{ty:'pomagaj',wy:'pomagajcie'}},
  'pomóc':      {asp:'dk', nprz:true,  para:'pomagać',   ter:['pomogę','pomożesz','pomoże','pomożemy','pomożecie','pomogą'],
                 prz:{m:'pomógł',f:'pomogła',mos:'pomogli',nmos:'pomogły'}, rozk:{ty:'pomóż',wy:'pomóżcie'}},
  'dzwonić':    {asp:'ndk', nprz:true, para:'zadzwonić', ter:['dzwonię','dzwonisz','dzwoni','dzwonimy','dzwonicie','dzwonią'],
                 prz:{m:'dzwonił',f:'dzwoniła',mos:'dzwonili',nmos:'dzwoniły'}, rozk:{ty:'dzwoń',wy:'dzwońcie'}},
  'zadzwonić':  {asp:'dk', nprz:true,  para:'dzwonić',   ter:['zadzwonię','zadzwonisz','zadzwoni','zadzwonimy','zadzwonicie','zadzwonią'],
                 prz:{m:'zadzwonił',f:'zadzwoniła',mos:'zadzwonili',nmos:'zadzwoniły'}, rozk:{ty:'zadzwoń',wy:'zadzwońcie'}},
  'otwierać':   {asp:'ndk', para:'otworzyć',  ter:['otwieram','otwierasz','otwiera','otwieramy','otwieracie','otwierają'],
                 prz:{m:'otwierał',f:'otwierała',mos:'otwierali',nmos:'otwierały'}, rozk:{ty:'otwieraj',wy:'otwierajcie'}},
  'otworzyć':   {asp:'dk',  para:'otwierać',  ter:['otworzę','otworzysz','otworzy','otworzymy','otworzycie','otworzą'],
                 prz:{m:'otworzył',f:'otworzyła',mos:'otworzyli',nmos:'otworzyły'}, rozk:{ty:'otwórz',wy:'otwórzcie'}},
  'oglądać':    {asp:'ndk', para:'obejrzeć',  ter:['oglądam','oglądasz','ogląda','oglądamy','oglądacie','oglądają'],
                 prz:{m:'oglądał',f:'oglądała',mos:'oglądali',nmos:'oglądały'}, rozk:{ty:'oglądaj',wy:'oglądajcie'}},
  'obejrzeć':   {asp:'dk',  para:'oglądać',   ter:['obejrzę','obejrzysz','obejrzy','obejrzymy','obejrzycie','obejrzą'],
                 prz:{m:'obejrzał',f:'obejrzała',mos:'obejrzeli',nmos:'obejrzały'}, rozk:{ty:'obejrzyj',wy:'obejrzyjcie'}},
  'sprzątać':   {asp:'ndk', para:'posprzątać',ter:['sprzątam','sprzątasz','sprząta','sprzątamy','sprzątacie','sprzątają'],
                 prz:{m:'sprzątał',f:'sprzątała',mos:'sprzątali',nmos:'sprzątały'}, rozk:{ty:'sprzątaj',wy:'sprzątajcie'}},
  'posprzątać': {asp:'dk',  para:'sprzątać',  ter:['posprzątam','posprzątasz','posprząta','posprzątamy','posprzątacie','posprzątają'],
                 prz:{m:'posprzątał',f:'posprzątała',mos:'posprzątali',nmos:'posprzątały'}, rozk:{ty:'posprzątaj',wy:'posprzątajcie'}},

  // --- czasowniki bez pary w typowym użyciu ---
  'być':        {asp:'ndk', nprz:true, ter:['jestem','jesteś','jest','jesteśmy','jesteście','są'],
                 przysz:['będę','będziesz','będzie','będziemy','będziecie','będą'],
                 prz:{m:'był',f:'była',mos:'byli',nmos:'były'}, rozk:{ty:'bądź',wy:'bądźcie'}},
  'mieć':       {asp:'ndk', ter:['mam','masz','ma','mamy','macie','mają'],
                 prz:{m:'miał',f:'miała',mos:'mieli',nmos:'miały'}, rozk:{ty:'miej',wy:'miejcie'}},
  'iść':        {asp:'ndk', nprz:true, para:'pójść',     ter:['idę','idziesz','idzie','idziemy','idziecie','idą'],
                 prz:{m:'szedł',f:'szła',mos:'szli',nmos:'szły'}, rozk:{ty:'idź',wy:'idźcie'}},
  'pójść':      {asp:'dk', nprz:true,  para:'iść',       ter:['pójdę','pójdziesz','pójdzie','pójdziemy','pójdziecie','pójdą'],
                 prz:{m:'poszedł',f:'poszła',mos:'poszli',nmos:'poszły'}, rozk:{ty:'idź',wy:'idźcie'}},
  'jechać':     {asp:'ndk', nprz:true, para:'pojechać',  ter:['jadę','jedziesz','jedzie','jedziemy','jedziecie','jadą'],
                 prz:{m:'jechał',f:'jechała',mos:'jechali',nmos:'jechały'}, rozk:{ty:'jedź',wy:'jedźcie'}},
  'pojechać':   {asp:'dk', nprz:true,  para:'jechać',    ter:['pojadę','pojedziesz','pojedzie','pojedziemy','pojedziecie','pojadą'],
                 prz:{m:'pojechał',f:'pojechała',mos:'pojechali',nmos:'pojechały'}, rozk:{ty:'pojedź',wy:'pojedźcie'}},
  'móc':        {asp:'ndk', ter:['mogę','możesz','może','możemy','możecie','mogą'],
                 prz:{m:'mógł',f:'mogła',mos:'mogli',nmos:'mogły'}},
  'chcieć':     {asp:'ndk', ter:['chcę','chcesz','chce','chcemy','chcecie','chcą'],
                 prz:{m:'chciał',f:'chciała',mos:'chcieli',nmos:'chciały'}},
  'musieć':     {asp:'ndk', ter:['muszę','musisz','musi','musimy','musicie','muszą'],
                 prz:{m:'musiał',f:'musiała',mos:'musieli',nmos:'musiały'}},
  'wiedzieć':   {asp:'ndk', ter:['wiem','wiesz','wie','wiemy','wiecie','wiedzą'],
                 prz:{m:'wiedział',f:'wiedziała',mos:'wiedzieli',nmos:'wiedziały'}},
  'znać':       {asp:'ndk', ter:['znam','znasz','zna','znamy','znacie','znają'],
                 prz:{m:'znał',f:'znała',mos:'znali',nmos:'znały'}},
  'brać':       {asp:'ndk', para:'wziąć',     ter:['biorę','bierzesz','bierze','bierzemy','bierzecie','biorą'],
                 prz:{m:'brał',f:'brała',mos:'brali',nmos:'brały'}, rozk:{ty:'bierz',wy:'bierzcie'}},
  'wziąć':      {asp:'dk',  para:'brać',      ter:['wezmę','weźmiesz','weźmie','weźmiemy','weźmiecie','wezmą'],
                 prz:{m:'wziął',f:'wzięła',mos:'wzięli',nmos:'wzięły'}, rozk:{ty:'weź',wy:'weźcie'}},
  'mówić':      {asp:'ndk', para:'powiedzieć',ter:['mówię','mówisz','mówi','mówimy','mówicie','mówią'],
                 prz:{m:'mówił',f:'mówiła',mos:'mówili',nmos:'mówiły'}, rozk:{ty:'mów',wy:'mówcie'}},
  'powiedzieć': {asp:'dk',  para:'mówić',     ter:['powiem','powiesz','powie','powiemy','powiecie','powiedzą'],
                 prz:{m:'powiedział',f:'powiedziała',mos:'powiedzieli',nmos:'powiedziały'}, rozk:{ty:'powiedz',wy:'powiedzcie'}},
  'pracować':   {asp:'ndk', nprz:true, ter:['pracuję','pracujesz','pracuje','pracujemy','pracujecie','pracują'],
                 prz:{m:'pracował',f:'pracowała',mos:'pracowali',nmos:'pracowały'}, rozk:{ty:'pracuj',wy:'pracujcie'}},
  'mieszkać':   {asp:'ndk', nprz:true, ter:['mieszkam','mieszkasz','mieszka','mieszkamy','mieszkacie','mieszkają'],
                 prz:{m:'mieszkał',f:'mieszkała',mos:'mieszkali',nmos:'mieszkały'}, rozk:{ty:'mieszkaj',wy:'mieszkajcie'}},
  'rozumieć':   {asp:'ndk', ter:['rozumiem','rozumiesz','rozumie','rozumiemy','rozumiecie','rozumieją'],
                 prz:{m:'rozumiał',f:'rozumiała',mos:'rozumieli',nmos:'rozumiały'}},
  'widzieć':    {asp:'ndk', para:'zobaczyć',  ter:['widzę','widzisz','widzi','widzimy','widzicie','widzą'],
                 prz:{m:'widział',f:'widziała',mos:'widzieli',nmos:'widziały'}},
  'zobaczyć':   {asp:'dk',  para:'widzieć',   ter:['zobaczę','zobaczysz','zobaczy','zobaczymy','zobaczycie','zobaczą'],
                 prz:{m:'zobaczył',f:'zobaczyła',mos:'zobaczyli',nmos:'zobaczyły'}, rozk:{ty:'zobacz',wy:'zobaczcie'}},
};

const OSOBY = ['ja','ty','on','my','wy','oni'];

// tryb przypuszczający: forma przeszła + końcówka. To akurat jest regularne.
const KONCOWKI_BY = {ja:'bym', ty:'byś', on:'by', my:'byśmy', wy:'byście', oni:'by'};
function trybPrzypuszczajacy(klucz, osoba, rodzaj){
  const c = CZASOWNIKI[klucz]; if(!c) return null;
  const baza = (osoba==='my'||osoba==='wy'||osoba==='oni')
    ? (rodzaj==='f' ? c.prz.nmos : c.prz.mos)
    : (rodzaj==='f' ? c.prz.f : c.prz.m);
  return baza + KONCOWKI_BY[osoba];
}
// czas przyszły złożony (tylko ndk): będę + bezokolicznik
function przyszlyZlozony(klucz, osoba){
  const c = CZASOWNIKI[klucz]; if(!c || c.asp!=='ndk' || klucz==='być') return null;
  const b = CZASOWNIKI['być'].przysz[OSOBY.indexOf(osoba)];
  return b + ' ' + klucz;
}
function formaTeraz(klucz, osoba){
  const c = CZASOWNIKI[klucz]; if(!c) return null;
  return c.ter[OSOBY.indexOf(osoba)];
}
function formaPrzeszla(klucz, osoba, rodzaj){
  const c = CZASOWNIKI[klucz]; if(!c) return null;
  if(osoba==='my'||osoba==='wy'||osoba==='oni') return rodzaj==='f'?c.prz.nmos:c.prz.mos;
  return rodzaj==='f'?c.prz.f:c.prz.m;
}

// ========================================================================
// STOPNIOWANIE — przymiotniki i przysłówki
// Formy nieregularne wpisane wprost (dobry→lepszy, źle→gorzej).
// typ: 'przym' odpowiada na "jaki?", 'przysl' na "jak?"
// ========================================================================
const STOPNIOWANIE = {
  // nieregularne — najczęstsze na egzaminie
  'dobry':   {typ:'przym', st:['dobry','lepszy','najlepszy'], f:['dobra','lepsza','najlepsza']},
  'zły':     {typ:'przym', st:['zły','gorszy','najgorszy'],   f:['zła','gorsza','najgorsza']},
  'duży':    {typ:'przym', st:['duży','większy','największy'],f:['duża','większa','największa']},
  'mały':    {typ:'przym', st:['mały','mniejszy','najmniejszy'],f:['mała','mniejsza','najmniejsza']},
  'dobrze':  {typ:'przysl',st:['dobrze','lepiej','najlepiej']},
  'źle':     {typ:'przysl',st:['źle','gorzej','najgorzej']},
  'dużo':    {typ:'przysl',st:['dużo','więcej','najwięcej'], dop:true},
  'mało':    {typ:'przysl',st:['mało','mniej','najmniej'],   dop:true},
  // regularne przymiotniki
  'stary':   {typ:'przym', st:['stary','starszy','najstarszy'],f:['stara','starsza','najstarsza']},
  'młody':   {typ:'przym', st:['młody','młodszy','najmłodszy'],f:['młoda','młodsza','najmłodsza']},
  'tani':    {typ:'przym', st:['tani','tańszy','najtańszy'],   f:['tania','tańsza','najtańsza']},
  'drogi':   {typ:'przym', st:['drogi','droższy','najdroższy'],f:['droga','droższa','najdroższa']},
  'ciekawy': {typ:'przym', st:['ciekawy','ciekawszy','najciekawszy'],f:['ciekawa','ciekawsza','najciekawsza']},
  'trudny':  {typ:'przym', st:['trudny','trudniejszy','najtrudniejszy'],f:['trudna','trudniejsza','najtrudniejsza']},
  'łatwy':   {typ:'przym', st:['łatwy','łatwiejszy','najłatwiejszy'],f:['łatwa','łatwiejsza','najłatwiejsza']},
  'ładny':   {typ:'przym', st:['ładny','ładniejszy','najładniejszy'],f:['ładna','ładniejsza','najładniejsza']},
  'wysoki':  {typ:'przym', st:['wysoki','wyższy','najwyższy'], f:['wysoka','wyższa','najwyższa']},
  'niski':   {typ:'przym', st:['niski','niższy','najniższy'],  f:['niska','niższa','najniższa']},
  'ważny':   {typ:'przym', st:['ważny','ważniejszy','najważniejszy'],f:['ważna','ważniejsza','najważniejsza']},
  // opisowe — tylko z bardziej/najbardziej
  'zmęczony':{typ:'przym', st:['zmęczony','bardziej zmęczony','najbardziej zmęczony'],
              f:['zmęczona','bardziej zmęczona','najbardziej zmęczona'], opis:true},
  'chory':   {typ:'przym', st:['chory','bardziej chory','najbardziej chory'],
              f:['chora','bardziej chora','najbardziej chora'], opis:true},
  // regularne przysłówki
  'szybko':  {typ:'przysl',st:['szybko','szybciej','najszybciej']},
  'wolno':   {typ:'przysl',st:['wolno','wolniej','najwolniej']},
  'ciepło':  {typ:'przysl',st:['ciepło','cieplej','najcieplej']},
  'zimno':   {typ:'przysl',st:['zimno','zimniej','najzimniej']},
  'często':  {typ:'przysl',st:['często','częściej','najczęściej']},
  'daleko':  {typ:'przysl',st:['daleko','dalej','najdalej']},
  'blisko':  {typ:'przysl',st:['blisko','bliżej','najbliżej']},
  'późno':   {typ:'przysl',st:['późno','później','najpóźniej']},
};

// ========================================================================
// PRZYIMKI — z przypadkiem, którego wymagają
// ========================================================================
const PRZYIMKI_BANK = [
  {p:'do',    przyp:'dop',  zn:'kierunek: dokąd?',        wzor:'Idę do sklepu.'},
  {p:'z',     przyp:'dop',  zn:'skąd? (pochodzenie)',     wzor:'Wracam z pracy.'},
  {p:'od',    przyp:'dop',  zn:'od kogo / od kiedy',      wzor:'List od siostry.'},
  {p:'dla',   przyp:'dop',  zn:'dla kogo',                wzor:'Prezent dla mamy.'},
  {p:'bez',   przyp:'dop',  zn:'brak czegoś',             wzor:'Kawa bez cukru.'},
  {p:'obok',  przyp:'dop',  zn:'położenie: przy czym',    wzor:'Obok dworca.'},
  {p:'na',    przyp:'msc',  zn:'gdzie? (powierzchnia)',   wzor:'Na stole.'},
  {p:'w',     przyp:'msc',  zn:'gdzie? (wewnątrz)',       wzor:'W domu.'},
  {p:'o',     przyp:'msc',  zn:'o czym / o której',       wzor:'Mówimy o pogodzie.'},
  {p:'przy',  przyp:'msc',  zn:'blisko czego',            wzor:'Przy oknie.'},
  {p:'po',    przyp:'msc',  zn:'po czym (czas)',          wzor:'Po obiedzie.'},
  {p:'z',     przyp:'narz', zn:'z kim / z czym (razem)',  wzor:'Z kolegą.'},
  {p:'przed', przyp:'narz', zn:'przed czym (miejsce/czas)',wzor:'Przed kinem.'},
  {p:'za',    przyp:'narz', zn:'za czym (miejsce)',       wzor:'Za domem.'},
  {p:'nad',   przyp:'narz', zn:'nad czym',                wzor:'Nad morzem.'},
  {p:'pod',   przyp:'narz', zn:'pod czym',                wzor:'Pod Gdańskiem.'},
  {p:'przez', przyp:'bier', zn:'przez co (droga, czas)',  wzor:'Przez most.'},
  {p:'za',    przyp:'bier', zn:'za ile czasu',            wzor:'Za godzinę.'},
];
