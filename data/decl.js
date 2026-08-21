const WORD_BANK = {
  // męski osobowy (m-os) — mianownik lm. -i/-y
  'student':    { g: 'm-os', nom:'student', gen:'studenta', dat:'studentowi', acc:'studenta', inst:'studentem', loc:'studencie', voc:'studencie', pl_nom:'studenci', pl_gen:'studentów' },
  'nauczyciel': { g: 'm-os', nom:'nauczyciel', gen:'nauczyciela', dat:'nauczycielowi', acc:'nauczyciela', inst:'nauczycielem', loc:'nauczycielu', voc:'nauczycielu', pl_nom:'nauczyciele', pl_gen:'nauczycieli' },
  'lekarz':     { g: 'm-os', nom:'lekarz', gen:'lekarza', dat:'lekarzowi', acc:'lekarza', inst:'lekarzem', loc:'lekarzu', voc:'lekarzu', pl_nom:'lekarze', pl_gen:'lekarzy' },
  'kolega':     { g: 'm-os', nom:'kolega', gen:'kolegi', dat:'koledze', acc:'kolegę', inst:'kolegą', loc:'koledze', voc:'kolego', pl_nom:'koledzy', pl_gen:'kolegów' },
  'mężczyzna':  { g: 'm-os', nom:'mężczyzna', gen:'mężczyzny', dat:'mężczyźnie', acc:'mężczyznę', inst:'mężczyzną', loc:'mężczyźnie', voc:'mężczyzno', pl_nom:'mężczyźni', pl_gen:'mężczyzn' },
  'chłopiec':   { g: 'm-os', nom:'chłopiec', gen:'chłopca', dat:'chłopcu', acc:'chłopca', inst:'chłopcem', loc:'chłopcu', voc:'chłopcze', pl_nom:'chłopcy', pl_gen:'chłopców' },
  'brat':       { g: 'm-os', nom:'brat', gen:'brata', dat:'bratu', acc:'brata', inst:'bratem', loc:'bracie', voc:'bracie', pl_nom:'bracia', pl_gen:'braci' },
  // męski nieosobowy (m-nieos)
  'dom':        { g: 'm-nieos', nom:'dom', gen:'domu', dat:'domowi', acc:'dom', inst:'domem', loc:'domu', voc:'domu', pl_nom:'domy', pl_gen:'domów' },
  'samochód':   { g: 'm-nieos', nom:'samochód', gen:'samochodu', dat:'samochodowi', acc:'samochód', inst:'samochodem', loc:'samochodzie', voc:'samochodzie', pl_nom:'samochody', pl_gen:'samochodów' },
  'telefon':    { g: 'm-nieos', nom:'telefon', gen:'telefonu', dat:'telefonowi', acc:'telefon', inst:'telefonem', loc:'telefonie', voc:'telefonie', pl_nom:'telefony', pl_gen:'telefonów' },
  'stół':       { g: 'm-nieos', nom:'stół', gen:'stołu', dat:'stołowi', acc:'stół', inst:'stołem', loc:'stole', voc:'stole', pl_nom:'stoły', pl_gen:'stołów' },
  'klucz':      { g: 'm-nieos', nom:'klucz', gen:'klucza', dat:'kluczowi', acc:'klucz', inst:'kluczem', loc:'kluczu', voc:'kluczu', pl_nom:'klucze', pl_gen:'kluczy' },
  'czas':       { g: 'm-nieos', nom:'czas', gen:'czasu', dat:'czasowi', acc:'czas', inst:'czasem', loc:'czasie', voc:'czasie', pl_nom:'czasy', pl_gen:'czasów' },
  'bilet':      { g: 'm-nieos', nom:'bilet', gen:'biletu', dat:'biletowi', acc:'bilet', inst:'biletem', loc:'bilecie', voc:'bilecie', pl_nom:'bilety', pl_gen:'biletów' },
  'długopis':   { g: 'm-nieos', nom:'długopis', gen:'długopisu', dat:'długopisowi', acc:'długopis', inst:'długopisem', loc:'długopisie', voc:'długopisie', pl_nom:'długopisy', pl_gen:'długopisów' },
  'film':       { g: 'm-nieos', nom:'film', gen:'filmu', dat:'filmowi', acc:'film', inst:'filmem', loc:'filmie', voc:'filmie', pl_nom:'filmy', pl_gen:'filmów' },
  'zeszyt':     { g: 'm-nieos', nom:'zeszyt', gen:'zeszytu', dat:'zeszytowi', acc:'zeszyt', inst:'zeszytem', loc:'zeszycie', voc:'zeszycie', pl_nom:'zeszyty', pl_gen:'zeszytów' },
  'komputer':   { g: 'm-nieos', nom:'komputer', gen:'komputera', dat:'komputerowi', acc:'komputer', inst:'komputerem', loc:'komputerze', voc:'komputerze', pl_nom:'komputery', pl_gen:'komputerów' },
  // żeński (f)
  'mama':       { g: 'f', nom:'mama', gen:'mamy', dat:'mamie', acc:'mamę', inst:'mamą', loc:'mamie', voc:'mamo', pl_nom:'mamy', pl_gen:'mam' },
  'babcia':     { g: 'f', nom:'babcia', gen:'babci', dat:'babci', acc:'babcię', inst:'babcią', loc:'babci', voc:'babciu', pl_nom:'babcie', pl_gen:'babci' },
  'ciocia':     { g: 'f', nom:'ciocia', gen:'cioci', dat:'cioci', acc:'ciocię', inst:'ciocią', loc:'cioci', voc:'ciociu', pl_nom:'ciocie', pl_gen:'cioci' },
  'siostra':    { g: 'f', nom:'siostra', gen:'siostry', dat:'siostrze', acc:'siostrę', inst:'siostrą', loc:'siostrze', voc:'siostro', pl_nom:'siostry', pl_gen:'sióstr' },
  'kawa':       { g: 'f', nom:'kawa', gen:'kawy', dat:'kawie', acc:'kawę', inst:'kawą', loc:'kawie', voc:'kawo', pl_nom:'kawy', pl_gen:'kaw' },
  'książka':    { g: 'f', nom:'książka', gen:'książki', dat:'książce', acc:'książkę', inst:'książką', loc:'książce', voc:'książko', pl_nom:'książki', pl_gen:'książek' },
  'praca':      { g: 'f', nom:'praca', gen:'pracy', dat:'pracy', acc:'pracę', inst:'pracą', loc:'pracy', voc:'praco', pl_nom:'prace', pl_gen:'prac' },
  'szkoła':     { g: 'f', nom:'szkoła', gen:'szkoły', dat:'szkole', acc:'szkołę', inst:'szkołą', loc:'szkole', voc:'szkoło', pl_nom:'szkoły', pl_gen:'szkół' },
  'kuchnia':    { g: 'f', nom:'kuchnia', gen:'kuchni', dat:'kuchni', acc:'kuchnię', inst:'kuchnią', loc:'kuchni', voc:'kuchnio', pl_nom:'kuchnie', pl_gen:'kuchni' },
  'ulica':      { g: 'f', nom:'ulica', gen:'ulicy', dat:'ulicy', acc:'ulicę', inst:'ulicą', loc:'ulicy', voc:'ulico', pl_nom:'ulice', pl_gen:'ulic' },
  'restauracja':{ g: 'f', nom:'restauracja', gen:'restauracji', dat:'restauracji', acc:'restaurację', inst:'restauracją', loc:'restauracji', voc:'restauracjo', pl_nom:'restauracje', pl_gen:'restauracji' },
  'muzyka':     { g: 'f', nom:'muzyka', gen:'muzyki', dat:'muzyce', acc:'muzykę', inst:'muzyką', loc:'muzyce', voc:'muzyko', pl_nom:'muzyki', pl_gen:'muzyk' },
  'herbata':    { g: 'f', nom:'herbata', gen:'herbaty', dat:'herbacie', acc:'herbatę', inst:'herbatą', loc:'herbacie', voc:'herbato', pl_nom:'herbaty', pl_gen:'herbat' },
  'woda':       { g: 'f', nom:'woda', gen:'wody', dat:'wodzie', acc:'wodę', inst:'wodą', loc:'wodzie', voc:'wodo', pl_nom:'wody', pl_gen:'wód' },
  // nijaki (n)
  'dziecko':    { g: 'n', nom:'dziecko', gen:'dziecka', dat:'dziecku', acc:'dziecko', inst:'dzieckiem', loc:'dziecku', voc:'dziecko', pl_nom:'dzieci', pl_gen:'dzieci' },
  'mieszkanie': { g: 'n', nom:'mieszkanie', gen:'mieszkania', dat:'mieszkaniu', acc:'mieszkanie', inst:'mieszkaniem', loc:'mieszkaniu', voc:'mieszkanie', pl_nom:'mieszkania', pl_gen:'mieszkań' },
  'kino':       { g: 'n', nom:'kino', gen:'kina', dat:'kinu', acc:'kino', inst:'kinem', loc:'kinie', voc:'kino', pl_nom:'kina', pl_gen:'kin' },
  'okno':       { g: 'n', nom:'okno', gen:'okna', dat:'oknu', acc:'okno', inst:'oknem', loc:'oknie', voc:'okno', pl_nom:'okna', pl_gen:'okien' },
  'krzesło':    { g: 'n', nom:'krzesło', gen:'krzesła', dat:'krzesłu', acc:'krzesło', inst:'krzesłem', loc:'krześle', voc:'krzesło', pl_nom:'krzesła', pl_gen:'krzeseł' },
  'biurko':     { g: 'n', nom:'biurko', gen:'biurka', dat:'biurku', acc:'biurko', inst:'biurkiem', loc:'biurku', voc:'biurko', pl_nom:'biurka', pl_gen:'biurek' },
  'zadanie':    { g: 'n', nom:'zadanie', gen:'zadania', dat:'zadaniu', acc:'zadanie', inst:'zadaniem', loc:'zadaniu', voc:'zadanie', pl_nom:'zadania', pl_gen:'zadań' },
  // extra vocab for mix
  'pies':       { g: 'm-zw', nom:'pies', gen:'psa', dat:'psu', acc:'psa', inst:'psem', loc:'psie', voc:'psie', pl_nom:'psy', pl_gen:'psów' },
  'kot':        { g: 'm-zw', nom:'kot', gen:'kota', dat:'kotu', acc:'kota', inst:'kotem', loc:'kocie', voc:'kocie', pl_nom:'koty', pl_gen:'kotów' },
  'rower':      { g: 'm-nieos', nom:'rower', gen:'roweru', dat:'rowerowi', acc:'rower', inst:'rowerem', loc:'rowerze', voc:'rowerze', pl_nom:'rowery', pl_gen:'rowerów' },
  'sklep':      { g: 'm-nieos', nom:'sklep', gen:'sklepu', dat:'sklepowi', acc:'sklep', inst:'sklepem', loc:'sklepie', voc:'sklepie', pl_nom:'sklepy', pl_gen:'sklepów' },
  'kwiat':      { g: 'm-nieos', nom:'kwiat', gen:'kwiatu', dat:'kwiatowi', acc:'kwiat', inst:'kwiatem', loc:'kwiecie', voc:'kwiecie', pl_nom:'kwiaty', pl_gen:'kwiatów' },
  'list':       { g: 'm-nieos', nom:'list', gen:'listu', dat:'listowi', acc:'list', inst:'listem', loc:'liście', voc:'liście', pl_nom:'listy', pl_gen:'listów' },
  'prezent':    { g: 'm-nieos', nom:'prezent', gen:'prezentu', dat:'prezentowi', acc:'prezent', inst:'prezentem', loc:'prezencie', voc:'prezencie', pl_nom:'prezenty', pl_gen:'prezentów' },
  // Language adjectives — treated as masculine nouns for declension
  'polski':      { g: 'm-nieos', nom:'polski', gen:'polskiego', dat:'polskiemu', acc:'polski', inst:'polskim', loc:'polskim', voc:'polski', pl_nom:'polskie', pl_gen:'polskich' },
  'angielski':   { g: 'm-nieos', nom:'angielski', gen:'angielskiego', dat:'angielskiemu', acc:'angielski', inst:'angielskim', loc:'angielskim', voc:'angielski', pl_nom:'angielskie', pl_gen:'angielskich' },
  'niemiecki':   { g: 'm-nieos', nom:'niemiecki', gen:'niemieckiego', dat:'niemieckiemu', acc:'niemiecki', inst:'niemieckim', loc:'niemieckim', voc:'niemiecki', pl_nom:'niemieckie', pl_gen:'niemieckich' },
  'hiszpański':  { g: 'm-nieos', nom:'hiszpański', gen:'hiszpańskiego', dat:'hiszpańskiemu', acc:'hiszpański', inst:'hiszpańskim', loc:'hiszpańskim', voc:'hiszpański', pl_nom:'hiszpańskie', pl_gen:'hiszpańskich' },

  // Missing template words — now with full declension
  'poniedziałek':{ g: 'm-nieos', nom:'poniedziałek', gen:'poniedziałku', dat:'poniedziałkowi', acc:'poniedziałek', inst:'poniedziałkiem', loc:'poniedziałku', voc:'poniedziałku', pl_nom:'poniedziałki', pl_gen:'poniedziałków' },
  'problem':     { g: 'm-nieos', nom:'problem', gen:'problemu', dat:'problemowi', acc:'problem', inst:'problemem', loc:'problemie', voc:'problemie', pl_nom:'problemy', pl_gen:'problemów' },
  'pająk':       { g: 'm-zw', nom:'pająk', gen:'pająka', dat:'pająkowi', acc:'pająka', inst:'pająkiem', loc:'pająku', voc:'pająku', pl_nom:'pająki', pl_gen:'pająków' },
  'wykład':      { g: 'm-nieos', nom:'wykład', gen:'wykładu', dat:'wykładowi', acc:'wykład', inst:'wykładem', loc:'wykładzie', voc:'wykładzie', pl_nom:'wykłady', pl_gen:'wykładów' },
  'egzamin':     { g: 'm-nieos', nom:'egzamin', gen:'egzaminu', dat:'egzaminowi', acc:'egzamin', inst:'egzaminem', loc:'egzaminie', voc:'egzaminie', pl_nom:'egzaminy', pl_gen:'egzaminów' },
  'plan':        { g: 'm-nieos', nom:'plan', gen:'planu', dat:'planowi', acc:'plan', inst:'planem', loc:'planie', voc:'planie', pl_nom:'plany', pl_gen:'planów' },
  'sport':       { g: 'm-nieos', nom:'sport', gen:'sportu', dat:'sportowi', acc:'sport', inst:'sportem', loc:'sporcie', voc:'sporcie', pl_nom:'sporty', pl_gen:'sportów' },
  'deszcz':      { g: 'm-nieos', nom:'deszcz', gen:'deszczu', dat:'deszczowi', acc:'deszcz', inst:'deszczem', loc:'deszczu', voc:'deszczu', pl_nom:'deszcze', pl_gen:'deszczów' },
  'pokój':       { g: 'm-nieos', nom:'pokój', gen:'pokoju', dat:'pokojowi', acc:'pokój', inst:'pokojem', loc:'pokoju', voc:'pokoju', pl_nom:'pokoje', pl_gen:'pokoi' },
  'dworzec':     { g: 'm-nieos', nom:'dworzec', gen:'dworca', dat:'dworcowi', acc:'dworzec', inst:'dworcem', loc:'dworcu', voc:'dworcu', pl_nom:'dworce', pl_gen:'dworców' },
  'koncert':     { g: 'm-nieos', nom:'koncert', gen:'koncertu', dat:'koncertowi', acc:'koncert', inst:'koncertem', loc:'koncercie', voc:'koncercie', pl_nom:'koncerty', pl_gen:'koncertów' },
  'artykuł':     { g: 'm-nieos', nom:'artykuł', gen:'artykułu', dat:'artykułowi', acc:'artykuł', inst:'artykułem', loc:'artykule', voc:'artykule', pl_nom:'artykuły', pl_gen:'artykułów' },
  'przyjaciel':  { g: 'm-os', nom:'przyjaciel', gen:'przyjaciela', dat:'przyjacielowi', acc:'przyjaciela', inst:'przyjacielem', loc:'przyjacielu', voc:'przyjacielu', pl_nom:'przyjaciele', pl_gen:'przyjaciół' },
  'tata':        { g: 'm-os', nom:'tata', gen:'taty', dat:'tacie', acc:'tatę', inst:'tatą', loc:'tacie', voc:'tato', pl_nom:'tatowie', pl_gen:'tatów' },
  'koleżanka':   { g: 'f', nom:'koleżanka', gen:'koleżanki', dat:'koleżance', acc:'koleżankę', inst:'koleżanką', loc:'koleżance', voc:'koleżanko', pl_nom:'koleżanki', pl_gen:'koleżanek' },
  'informacja':  { g: 'f', nom:'informacja', gen:'informacji', dat:'informacji', acc:'informację', inst:'informacją', loc:'informacji', voc:'informacjo', pl_nom:'informacje', pl_gen:'informacji' },
  'dziewczyna':  { g: 'f', nom:'dziewczyna', gen:'dziewczyny', dat:'dziewczynie', acc:'dziewczynę', inst:'dziewczyną', loc:'dziewczynie', voc:'dziewczyno', pl_nom:'dziewczyny', pl_gen:'dziewczyn' },
  'zima':        { g: 'f', nom:'zima', gen:'zimy', dat:'zimie', acc:'zimę', inst:'zimą', loc:'zimie', voc:'zimo', pl_nom:'zimy', pl_gen:'zim' },
  'podróż':      { g: 'f', nom:'podróż', gen:'podróży', dat:'podróży', acc:'podróż', inst:'podróżą', loc:'podróży', voc:'podróży', pl_nom:'podróże', pl_gen:'podróży' },
  'plaża':       { g: 'f', nom:'plaża', gen:'plaży', dat:'plaży', acc:'plażę', inst:'plażą', loc:'plaży', voc:'plażo', pl_nom:'plaże', pl_gen:'plaż' },
  'burza':       { g: 'f', nom:'burza', gen:'burzy', dat:'burzy', acc:'burzę', inst:'burzą', loc:'burzy', voc:'burzo', pl_nom:'burze', pl_gen:'burz' },
  'ciemność':    { g: 'f', nom:'ciemność', gen:'ciemności', dat:'ciemności', acc:'ciemność', inst:'ciemnością', loc:'ciemności', voc:'ciemności', pl_nom:'ciemności', pl_gen:'ciemności' },
  'gazeta':      { g: 'f', nom:'gazeta', gen:'gazety', dat:'gazecie', acc:'gazetę', inst:'gazetą', loc:'gazecie', voc:'gazeto', pl_nom:'gazety', pl_gen:'gazet' },
  'piosenka':    { g: 'f', nom:'piosenka', gen:'piosenki', dat:'piosence', acc:'piosenkę', inst:'piosenką', loc:'piosence', voc:'piosenko', pl_nom:'piosenki', pl_gen:'piosenek' },
  'historia':    { g: 'f', nom:'historia', gen:'historii', dat:'historii', acc:'historię', inst:'historią', loc:'historii', voc:'historio', pl_nom:'historie', pl_gen:'historii' },
  'fotografia':  { g: 'f', nom:'fotografia', gen:'fotografii', dat:'fotografii', acc:'fotografię', inst:'fotografią', loc:'fotografii', voc:'fotografio', pl_nom:'fotografie', pl_gen:'fotografii' },
  'rodzina':     { g: 'f', nom:'rodzina', gen:'rodziny', dat:'rodzinie', acc:'rodzinę', inst:'rodziną', loc:'rodzinie', voc:'rodzino', pl_nom:'rodziny', pl_gen:'rodzin' },
  'przyszłość':  { g: 'f', nom:'przyszłość', gen:'przyszłości', dat:'przyszłości', acc:'przyszłość', inst:'przyszłością', loc:'przyszłości', voc:'przyszłości', pl_nom:'przyszłości', pl_gen:'przyszłości' },
  'wycieczka':   { g: 'f', nom:'wycieczka', gen:'wycieczki', dat:'wycieczce', acc:'wycieczkę', inst:'wycieczką', loc:'wycieczce', voc:'wycieczko', pl_nom:'wycieczki', pl_gen:'wycieczek' },
  'audycja':     { g: 'f', nom:'audycja', gen:'audycji', dat:'audycji', acc:'audycję', inst:'audycją', loc:'audycji', voc:'audycjo', pl_nom:'audycje', pl_gen:'audycji' },
  'uczelnia':    { g: 'f', nom:'uczelnia', gen:'uczelni', dat:'uczelni', acc:'uczelnię', inst:'uczelnią', loc:'uczelni', voc:'uczelnio', pl_nom:'uczelnie', pl_gen:'uczelni' },
  'poczta':      { g: 'f', nom:'poczta', gen:'poczty', dat:'poczcie', acc:'pocztę', inst:'pocztą', loc:'poczcie', voc:'poczto', pl_nom:'poczty', pl_gen:'poczt' },
  'stacja':      { g: 'f', nom:'stacja', gen:'stacji', dat:'stacji', acc:'stację', inst:'stacją', loc:'stacji', voc:'stacjo', pl_nom:'stacje', pl_gen:'stacji' },
  'lekarka':     { g: 'f', nom:'lekarka', gen:'lekarki', dat:'lekarce', acc:'lekarkę', inst:'lekarką', loc:'lekarce', voc:'lekarko', pl_nom:'lekarki', pl_gen:'lekarek' },
  'studentka':   { g: 'f', nom:'studentka', gen:'studentki', dat:'studentce', acc:'studentkę', inst:'studentką', loc:'studentce', voc:'studentko', pl_nom:'studentki', pl_gen:'studentek' },
  'radio':       { g: 'n', nom:'radio', gen:'radia', dat:'radiu', acc:'radio', inst:'radiem', loc:'radiu', voc:'radio', pl_nom:'radia', pl_gen:'radiów' },
  'jedzenie':    { g: 'n', nom:'jedzenie', gen:'jedzenia', dat:'jedzeniu', acc:'jedzenie', inst:'jedzeniem', loc:'jedzeniu', voc:'jedzenie', pl_nom:'jedzenia', pl_gen:'jedzeń' },
  'miasto':      { g: 'n', nom:'miasto', gen:'miasta', dat:'miastu', acc:'miasto', inst:'miastem', loc:'mieście', voc:'miasto', pl_nom:'miasta', pl_gen:'miast' },
  'wakacje':     { g: 'plt', nom:'wakacje', gen:'wakacji', dat:'wakacjom', acc:'wakacje', inst:'wakacjami', loc:'wakacjach', voc:'wakacje', pl_nom:'wakacje', pl_gen:'wakacji' },
  'opowiadanie': { g: 'n', nom:'opowiadanie', gen:'opowiadania', dat:'opowiadaniu', acc:'opowiadanie', inst:'opowiadaniem', loc:'opowiadaniu', voc:'opowiadanie', pl_nom:'opowiadania', pl_gen:'opowiadań' },
  'jabłko':     { g: 'n', nom:'jabłko', gen:'jabłka', dat:'jabłku', acc:'jabłko', inst:'jabłkiem', loc:'jabłku', voc:'jabłko', pl_nom:'jabłka', pl_gen:'jabłek' },

  // Formy adresatywne — potrzebne do wołacza (list oficjalny na egzaminie)
  'pan':        { g: 'm-os', nom:'pan', gen:'pana', dat:'panu', acc:'pana', inst:'panem', loc:'panu', voc:'panie', pl_nom:'panowie', pl_gen:'panów' },
  'pani':       { g: 'f', nom:'pani', gen:'pani', dat:'pani', acc:'panią', inst:'panią', loc:'pani', voc:'pani', pl_nom:'panie', pl_gen:'pań' },
  'dyrektor':   { g: 'm-os', nom:'dyrektor', gen:'dyrektora', dat:'dyrektorowi', acc:'dyrektora', inst:'dyrektorem', loc:'dyrektorze', voc:'dyrektorze', pl_nom:'dyrektorzy', pl_gen:'dyrektorów' },
  'profesor':   { g: 'm-os', nom:'profesor', gen:'profesora', dat:'profesorowi', acc:'profesora', inst:'profesorem', loc:'profesorze', voc:'profesorze', pl_nom:'profesorowie', pl_gen:'profesorów' },
  'doktor':     { g: 'm-os', nom:'doktor', gen:'doktora', dat:'doktorowi', acc:'doktora', inst:'doktorem', loc:'doktorze', voc:'doktorze', pl_nom:'doktorzy', pl_gen:'doktorów' },
  'prezes':     { g: 'm-os', nom:'prezes', gen:'prezesa', dat:'prezesowi', acc:'prezesa', inst:'prezesem', loc:'prezesie', voc:'prezesie', pl_nom:'prezesi', pl_gen:'prezesów' },
  'minister':   { g: 'm-os', nom:'minister', gen:'ministra', dat:'ministrowi', acc:'ministra', inst:'ministrem', loc:'ministrze', voc:'ministrze', pl_nom:'ministrowie', pl_gen:'ministrów' },
  'język':      { g: 'm-nieos', nom:'język', gen:'języka', dat:'językowi', acc:'język', inst:'językiem', loc:'języku', voc:'języku', pl_nom:'języki', pl_gen:'języków' },
};

// ========================================================================
// ADJECTIVE BANK — forms for all cases & genders
// Format: { m_nom, m_gen, m_dat, m_acc, m_inst, m_loc, f_nom, ..., n_nom, ... }
// ========================================================================
const ADJ_BANK = {
  'nowy':    { m:{nom:'nowy',gen:'nowego',dat:'nowemu',acc:['nowego','nowy'],inst:'nowym',loc:'nowym'},
                f:{nom:'nowa',gen:'nowej',dat:'nowej',acc:'nową',inst:'nową',loc:'nowej'},
                n:{nom:'nowe',gen:'nowego',dat:'nowemu',acc:'nowe',inst:'nowym',loc:'nowym'} },
  'dobry':   { m:{nom:'dobry',gen:'dobrego',dat:'dobremu',acc:['dobrego','dobry'],inst:'dobrym',loc:'dobrym'},
                f:{nom:'dobra',gen:'dobrej',dat:'dobrej',acc:'dobrą',inst:'dobrą',loc:'dobrej'},
                n:{nom:'dobre',gen:'dobrego',dat:'dobremu',acc:'dobre',inst:'dobrym',loc:'dobrym'} },
  'stary':   { m:{nom:'stary',gen:'starego',dat:'staremu',acc:['starego','stary'],inst:'starym',loc:'starym'},
                f:{nom:'stara',gen:'starej',dat:'starej',acc:'starą',inst:'starą',loc:'starej'},
                n:{nom:'stare',gen:'starego',dat:'staremu',acc:'stare',inst:'starym',loc:'starym'} },
  'mały':    { m:{nom:'mały',gen:'małego',dat:'małemu',acc:['małego','mały'],inst:'małym',loc:'małym'},
                f:{nom:'mała',gen:'małej',dat:'małej',acc:'małą',inst:'małą',loc:'małej'},
                n:{nom:'małe',gen:'małego',dat:'małemu',acc:'małe',inst:'małym',loc:'małym'} },
  'ładny':   { m:{nom:'ładny',gen:'ładnego',dat:'ładnemu',acc:['ładnego','ładny'],inst:'ładnym',loc:'ładnym'},
                f:{nom:'ładna',gen:'ładnej',dat:'ładnej',acc:'ładną',inst:'ładną',loc:'ładnej'},
                n:{nom:'ładne',gen:'ładnego',dat:'ładnemu',acc:'ładne',inst:'ładnym',loc:'ładnym'} },
  'wysoki':  { m:{nom:'wysoki',gen:'wysokiego',dat:'wysokiemu',acc:['wysokiego','wysoki'],inst:'wysokim',loc:'wysokim'},
                f:{nom:'wysoka',gen:'wysokiej',dat:'wysokiej',acc:'wysoką',inst:'wysoką',loc:'wysokiej'},
                n:{nom:'wysokie',gen:'wysokiego',dat:'wysokiemu',acc:'wysokie',inst:'wysokim',loc:'wysokim'} },
  'miły':    { m:{nom:'miły',gen:'miłego',dat:'miłemu',acc:['miłego','miły'],inst:'miłym',loc:'miłym'},
                f:{nom:'miła',gen:'miłej',dat:'miłej',acc:'miłą',inst:'miłą',loc:'miłej'},
                n:{nom:'miłe',gen:'miłego',dat:'miłemu',acc:'miłe',inst:'miłym',loc:'miłym'} },
  'ważny':   { m:{nom:'ważny',gen:'ważnego',dat:'ważnemu',acc:['ważnego','ważny'],inst:'ważnym',loc:'ważnym'},
                f:{nom:'ważna',gen:'ważnej',dat:'ważnej',acc:'ważną',inst:'ważną',loc:'ważnej'},
                n:{nom:'ważne',gen:'ważnego',dat:'ważnemu',acc:'ważne',inst:'ważnym',loc:'ważnym'} },
  'ciekawy': { m:{nom:'ciekawy',gen:'ciekawego',dat:'ciekawemu',acc:['ciekawego','ciekawy'],inst:'ciekawym',loc:'ciekawym'},
                f:{nom:'ciekawa',gen:'ciekawej',dat:'ciekawej',acc:'ciekawą',inst:'ciekawą',loc:'ciekawej'},
                n:{nom:'ciekawe',gen:'ciekawego',dat:'ciekawemu',acc:'ciekawe',inst:'ciekawym',loc:'ciekawym'} },
  'trudny':  { m:{nom:'trudny',gen:'trudnego',dat:'trudnemu',acc:['trudnego','trudny'],inst:'trudnym',loc:'trudnym'},
                f:{nom:'trudna',gen:'trudnej',dat:'trudnej',acc:'trudną',inst:'trudną',loc:'trudnej'},
                n:{nom:'trudne',gen:'trudnego',dat:'trudnemu',acc:'trudne',inst:'trudnym',loc:'trudnym'} },
};

// Helper to get adjective form
function getAdjForm(adjKey, gender, caseName) {
  const adj = ADJ_BANK[adjKey];
  if (!adj) return adjKey;
  const g = adj[gender];
  if (!g) return adjKey;
  const val = g[caseName];
  if (Array.isArray(val)) return val[0]; // for m-acc: first is personal, second is impersonal
  return val || adjKey;
}

// Helper to get noun gender
function getNounGender(wordKey) {
  const w = WORD_BANK[wordKey];
  if (!w) return 'm-nieos';
  if (w.g === 'm-os' || w.g === 'm-nieos') return 'm';
  if (w.g === 'f') return 'f';
  return 'n';
}

// ADJECTIVE TEMPLATES
const ADJ_TEMPLATES = {
  'ex-adj': {
    title: 'Przymiotnik — odmiana przez przypadki',
    templates: [
      { sentence: 'To jest {{adj:m:nom}} {{word:nom}}.', adjPool: ['nowy','stary','mały','ładny','wysoki'], words: ['dom','samochód','telefon','stół'], note: 'Mianownik, r. męski' },
      { sentence: 'To jest {{adj:f:nom}} {{word:nom}}.', adjPool: ['nowy','dobry','stary','mały','ładny'], words: ['kawa','książka','praca','szkoła','ulica'], note: 'Mianownik, r. żeński' },
      { sentence: 'To jest {{adj:n:nom}} {{word:nom}}.', adjPool: ['nowy','stary','mały','ładny','ważny'], words: ['mieszkanie','zadanie','okno','biurko','krzesło'], note: 'Mianownik, r. nijaki' },
      { sentence: 'Nie mam {{adj:m:gen}} {{word:gen}}.', adjPool: ['nowy','stary','wysoki','mały'], words: ['samochód','telefon','dom','komputer'], note: 'Dopełniacz, r. męski' },
      { sentence: 'Szukam {{adj:f:gen}} {{word:gen}}.', adjPool: ['nowy','stary','dobry','ciekawy'], words: ['książka','praca','restauracja','kawa'], note: 'Dopełniacz, r. żeński' },
      { sentence: 'Jestem w {{adj:m:loc}} {{word:loc}}.', adjPool: ['nowy','stary','mały','wysoki'], words: ['dom','sklep','samochód','pokój'], note: 'Miejscownik, r. męski' },
      { sentence: 'Mieszkam w {{adj:n:loc}} {{word:loc}}.', adjPool: ['nowy','stary','mały','ładny'], words: ['mieszkanie','krzesło','biurko'], note: 'Miejscownik, r. nijaki' },
      { sentence: 'Widzę {{adj:f:acc}} {{word:acc}}.', adjPool: ['nowy','stary','ładny','wysoki'], words: ['kawa','książka','mama','szkoła'], note: 'Biernik, r. żeński' },
      { sentence: 'Ona jest {{adj:f:inst}} {{word:inst}}.', adjPool: ['nowy','stary','miły','ważny'], words: ['studentka','siostra','lekarka'], note: 'Narzędnik, r. żeński' },
    ]
  }
};

// ========================================================================
// EXERCISE TEMPLATES — dynamic generation for case exercises
// ========================================================================
const CASE_TEMPLATES = {
  'gen': {
    title: 'Dopełniacz — Kogo? Czego?',
    rules: 'Dopełniacz: Nie ma + Dopełniacz. Szukać, słuchać, uczyć się, bać się + Dopełniacz.',
    templates: [
      { sentence: 'Uczę się {{word.gen}}.', words: ['język polski', 'niemiecki', 'hiszpański', 'angielski'], note: 'uczyć się + D. (to study)' },
      { sentence: 'Nie mam {{word.gen}}.', words: ['samochód', 'telefon', 'czas', 'długopis', 'komputer', 'rower', 'bilet'], note: 'Nie ma + D. (negation)' },
      { sentence: 'Szukam {{word.gen}}.', words: ['książka', 'praca', 'mieszkanie', 'klucz', 'informacja', 'prezent'], note: 'szukać + D. (to look for)' },
      { sentence: 'Słucham {{word.gen}}.', words: ['muzyka', 'radio', 'piosenka', 'audycja', 'wykład'], note: 'słuchać + D. (to listen)' },
      { sentence: 'Boję się {{word.gen}}.', words: ['pies', 'kot', 'ciemność', 'pająk', 'burza'], note: 'bać się + D. (to be afraid of)' },
      { sentence: 'Nie lubię {{word.gen}}.', words: ['kawa', 'herbata', 'zima', 'deszcz', 'poniedziałek'], note: 'nie lubić + D.' },
    ]
  },
  'dat': {
    title: 'Celownik — Komu? Czemu?',
    rules: 'Celownik: dać, dziękować, pomagać, powiedzieć, obiecać + C.',
    templates: [
      { sentence: 'Dziękuję {{word.dat}}.', words: ['kolega', 'siostra', 'mama', 'brat', 'nauczyciel', 'lekarz'], note: 'dziękować + C. (to thank)' },
      { sentence: 'Pomagam {{word.dat}}.', words: ['mama', 'tata', 'siostra', 'kolega', 'przyjaciel', 'dziecko'], note: 'pomagać + C. (to help)' },
      { sentence: 'Dam {{word.dat}} prezent.', words: ['brat', 'siostra', 'mama', 'koleżanka', 'chłopiec', 'dziewczyna'], note: 'dać + C. (to give)' },
      { sentence: 'Powiedz {{word.dat}} prawdę.', words: ['mama', 'kolega', 'siostra', 'lekarz', 'przyjaciel'], note: 'powiedzieć + C. (to tell)' },
      { sentence: 'Obiecuję {{word.dat}} pomoc.', words: ['siostra', 'brat', 'kolega', 'mama', 'student'], note: 'obiecać + C. (to promise)' },
    ]
  },
  'acc': {
    title: 'Biernik — Kogo? Co?',
    rules: 'Biernik: mieć, lubić, jeść, kupować, czytać, znać, oglądać + B.',
    templates: [
      { sentence: 'Mam {{word.acc}}.', words: ['samochód', 'telefon', 'rower', 'komputer', 'mieszkanie', 'bilet'], note: 'mieć + B. (to have)' },
      { sentence: 'Lubię {{word.acc}}.', words: ['kawa', 'herbata', 'film', 'muzyka', 'książka', 'kino', 'zadanie'], note: 'lubić + B. (to like)' },
      { sentence: 'Czytam {{word.acc}}.', words: ['książka', 'list', 'gazeta', 'artykuł', 'opowiadanie'], note: 'czytać + B. (to read)' },
      { sentence: 'Kupuję {{word.acc}}.', words: ['prezent', 'kwiat', 'bilet', 'samochód', 'komputer', 'jedzenie'], note: 'kupować + B. (to buy)' },
      { sentence: 'Znam {{word.acc}}.', words: ['student', 'lekarz', 'nauczyciel', 'kolega', 'piosenka', 'miasto'], note: 'znać + B. (to know)' },
    ]
  },
  'inst': {
    title: 'Narzędnik — Z kim? Z czym?',
    rules: 'Narzędnik: być kimś, interesować się czymś, z + N.',
    templates: [
      { sentence: 'Jestem {{word.inst}}.', words: ['student', 'nauczyciel', 'lekarz', 'kolega', 'chłopiec'], note: 'być + N. (to be a...)' },
      { sentence: 'Ona jest {{word.inst}}.', words: ['lekarka', 'studentka', 'koleżanka', 'dziewczyna'], note: 'być + N. (ona → forma żeńska!)' },
      { sentence: 'Idę z {{word.inst}} do kina.', words: ['kolega', 'siostra', 'mama', 'brat', 'przyjaciel'], note: 'z + N. (with someone)' },
      { sentence: 'Interesuję się {{word.inst}}.', words: ['muzyka', 'film', 'sport', 'fotografia', 'historia'], note: 'interesować się + N. (interested in)' },
    ]
  },
  'loc': {
    title: 'Miejscownik — O kim? O czym?',
    rules: 'Miejscownik: w, na, o, po, przy + Msc.',
    templates: [
      { sentence: 'Jestem w {{word.loc}}.', words: ['sklep', 'kino', 'szkoła', 'dom', 'praca', 'restauracja', 'mieszkanie'], note: 'w + Msc. (in a place)' },
      { sentence: 'Myślę o {{word.loc}}.', words: ['wakacje', 'przyszłość', 'praca', 'egzamin', 'wycieczka', 'rodzina'], note: 'myśleć o + Msc.' },
      { sentence: 'Mówimy o {{word.loc}}.', words: ['film', 'książka', 'koncert', 'podróż', 'problem', 'plan'], note: 'mówić o + Msc. (to talk about)' },
      { sentence: 'Jestem na {{word.loc}}.', words: ['uczelnia', 'poczta', 'dworzec', 'stacja', 'plaża', 'koncert'], note: 'na + Msc. (at a place)' },
    ]
  },
  'voc': {
    title: 'Wołacz — Zwroty do adresata',
    rules: 'Wołacza używamy zwracając się do kogoś.',
    templates: [
      { sentence: 'Cześć, {{word.voc}}!', words: ['kolega','brat','mama','siostra','student'], note: 'Nieoficjalny zwrot' },
      { sentence: 'Dzień dobry, {{word.voc}}!', words: ['pan profesor','pani profesor','pan doktor','pani dyrektor'], note: 'Oficjalny zwrot' },
      { sentence: 'Kochana {{word.voc}}!', words: ['mama','babcia','siostra','ciocia'], note: 'Rodzina — żeński' },
      { sentence: 'Szanowny {{word.voc}}!', words: ['pan dyrektor','pan prezes','pan minister'], note: 'List formalny' },
    ]
  },
};

// Helper: get random item from array
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

// Helper: get a word form from bank, handling multi-word entries
function getForm(wordKey, caseName) {
  // Handle multi-word like 'język polski'
  const parts = wordKey.split(' ');
  if (parts.length === 2) {
    const w1 = WORD_BANK[parts[0]];
    const w2 = WORD_BANK[parts[1]];
    if (!w1 || !w2) return wordKey;
    const f1 = w1[caseName] || w1.nom;
    // Po "pani" nazwa funkcji/tytułu pozostaje nieodmienna:
    // Szanowna Pani Dyrektor! (a nie: Pani Dyrektorze!)
    if (parts[0] === 'pani') return f1 + ' ' + w2.nom;
    return f1 + ' ' + (w2[caseName] || w2.nom);
  }
  const w = WORD_BANK[wordKey];
  if (!w) return wordKey;
  return w[caseName] || w.nom;
}

// Generate a full exercise from templates

const PREPOSITIONS = [
  { prep: 'do', cases: 'Dopełniacz (kogo? czego?)', example: 'do domu, do szkoły, do sklepu', note: 'do + D. (to/towards)' },
  { prep: 'dla', cases: 'Dopełniacz (kogo? czego?)', example: 'dla mamy, dla ciebie', note: 'dla + D. (for someone)' },
  { prep: 'bez', cases: 'Dopełniacz (kogo? czego?)', example: 'bez cukru, bez problemu', note: 'bez + D. (without)' },
  { prep: 'od', cases: 'Dopełniacz (kogo? czego?)', example: 'od rana, od kolegi', note: 'od + D. (from)' },
  { prep: 'z', cases: 'Narzędnik (z kim? z czym?)', example: 'z bratem, z mamą', note: 'z + N. (with someone)' },
  { prep: 'nad', cases: 'Narzędnik (z kim? z czym?)', example: 'nad morzem, nad jeziorem', note: 'nad + N. (above/at, location)' },
  { prep: 'pod', cases: 'Narzędnik (z kim? z czym?)', example: 'pod stołem, pod domem', note: 'pod + N. (under, location)' },
  { prep: 'przed', cases: 'Narzędnik (z kim? z czym?) / Biernik', example: 'przed domem, przed komputerem', note: 'przed + N. (in front of)' },
  { prep: 'za', cases: 'Narzędnik (z kim? z czym?)', example: 'za domem, za drzwiami', note: 'za + N. (behind)' },
  { prep: 'na', cases: 'Miejscownik (o kim? o czym?) / Biernik', example: 'na stole, na ulicy, na koncert', note: 'na + Msc. (location) / B. (direction)' },
  { prep: 'w', cases: 'Miejscownik (o kim? o czym?) / Biernik', example: 'w domu, w szkole, w Gdańsku', note: 'w + Msc. (in) / B. (into)' },
  { prep: 'o', cases: 'Miejscownik (o kim? o czym?)', example: 'o filmie, o muzyce', note: 'o + Msc. (about)' },
  { prep: 'przy', cases: 'Miejscownik (o kim? o czym?)', example: 'przy stole, przy oknie', note: 'przy + Msc. (by/near)' },
  { prep: 'po', cases: 'Miejscownik (o kim? o czym?)', example: 'po pracy, po obiedzie', note: 'po + Msc. (after)' },
  { prep: 'między', cases: 'Narzędnik (z kim? z czym?)', example: 'między domem a sklepem', note: 'między + N. (between)' },
  { prep: 'przez', cases: 'Biernik (kogo? co?)', example: 'przez ulicę, przez okno', note: 'przez + B. (through/across)' },
];

function generatePrepExercise() {
  const questions = [];
  const available = [...PREPOSITIONS];
  const used = [];
  const count = Math.min(available.length, 8);
  
  for (let i = 0; i < count; i++) {
    const idx = Math.floor(Math.random() * available.length);
    const item = available.splice(idx, 1)[0];
    if (!item) break;
    used.push(item.prep);
    
    // Generate wrong prepositions from the pool (different cases)
    const wrongPool = PREPOSITIONS.filter(p => p.cases !== item.cases && !used.includes(p.prep));
    const wrongPreps = [];
    for (let j = 0; j < Math.min(3, wrongPool.length); j++) {
      if (wrongPool[j].prep !== item.prep) wrongPreps.push(wrongPool[j].prep);
    }
    // Pad
    const allPreps = ['w','na','z','do','od','przed','za','pod','nad','przy','po','dla','bez','przez','między','o'];
    while (wrongPreps.length < 3) {
      const p = allPreps[Math.floor(Math.random() * allPreps.length)];
      if (p !== item.prep && !wrongPreps.includes(p)) wrongPreps.push(p);
    }
    
    const options = [item.prep, ...wrongPreps.slice(0, 3)];
    const shuffled = options.sort(() => Math.random() - 0.5);
    
    questions.push({
      type: 'choice',
      question: 'Jaki przyimek łączy się z ' + item.cases + '?',
      polish: 'Przykład: ' + item.example,
      options: shuffled,
      correct: shuffled.indexOf(item.prep),
      explanation: item.note,
    });
  }
  
  return { title: 'Przyimki + przypadki', questions: questions };
}

// ========================================================================
// EXAM SIMULATION — timed mock test
// ========================================================================
let examTimer = null;

