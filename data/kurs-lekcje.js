// ========================================================================
// KURS B1 — lekcje gramatyki. Teoria po rosyjsku (uczeń A1/A2),
// przykłady i ćwiczenia po polsku. Zakres = lista zagadnień gramatycznych
// dla B1 z rozporządzenia MNiSW z 14.02.2025 (Dz.U. 2025 poz. 217).
// Ćwiczenie: {zdanie:'…___…', opcje:[…], ok:indeks} — wybór
//            {zdanie:'…___ (forma bazowa)…', ok:'odpowiedź', alt:[…]} — wpisywanie
// ========================================================================
const KURS_LEKCJE = {};

KURS_LEKCJE.L01 = {
  tytul: 'Rodzaj i liczba mnoga',
  ru: 'Род и множественное число',
  cel: 'Научишься определять род существительного по окончанию и ставить его во множественное число. Главное отличие от русского — особые формы для групп мужчин.',
  teoria: [
    {t:'h', h:'Три рода — как в русском'},
    {t:'tab', head:['Род','Указатель','Окончание'], rows:[
      ['мужской (męski)','<b>ten</b> dom','согласная: dom, stół, brat, kot'],
      ['женский (żeński)','<b>ta</b> kawa','-a: kobieta, ulica, książka'],
      ['средний (nijaki)','<b>to</b> okno','-o, -e, -ę, -um: okno, morze, imię, muzeum']]},
    {t:'uwaga', h:'Особые случаи. Мужчины на <b>-a</b> — мужской род: <i>ten kierowca, ten kolega, ten mężczyzna</i>. Женский род на согласную: <i>ta noc, ta rzecz, ta miłość</i> (почти все слова на <b>-ść</b> — женские). На <b>-i</b> — женский: <i>ta pani</i>.'},
    {t:'pulapka', h:'Род часто не совпадает с русским: <b>ta herbata</b> (чай), <b>to dziecko</b> (ребёнок), <b>ten pies</b> (собака), <b>ten ból</b> (боль), <b>ten cień</b> (тень). Учи слово сразу с <i>ten / ta / to</i>.'},
    {t:'h', h:'Множественное число: два «рода» вместо трёх'},
    {t:'p', h:'Во множественном числе польский делит всё на две группы. От группы зависят окончания существительного, прилагательного и глагола в прошедшем времени.'},
    {t:'tab', head:['Группа','Кто','Указатель'], rows:[
      ['мужско-личная (męskoosobowa)','мужчины и смешанные группы людей','<b>ci</b> studenci, <b>oni</b>'],
      ['не мужско-личная','женщины, дети, животные, предметы','<b>te</b> kobiety, <b>one</b>']]},
    {t:'h', h:'Окончания: не мужско-личные'},
    {t:'tab', head:['Окончание','Когда','Пример'], rows:[
      ['-y','после твёрдых согласных','dom → domy, kobieta → kobiety'],
      ['-i','после k, g','książka → książki, noga → nogi'],
      ['-e','после мягких, c, cz, sz, rz, ż, j, l','klucz → klucze, ulica → ulice, pokój → pokoje'],
      ['-a','средний род','okno → okna, mieszkanie → mieszkania']]},
    {t:'h', h:'Окончания: мужско-личные (с чередованием!)'},
    {t:'tab', head:['Окончание','Пример'], rows:[
      ['-i','student → studen<b>ci</b>, Francuz → Francuzi, sąsiad → sąsie<b>dzi</b>'],
      ['-y','Polak → Pola<b>cy</b>, kolega → kole<b>dzy</b>, chłopiec → chłopcy'],
      ['-owie','pan → panowie, syn → synowie, ojciec → ojcowie'],
      ['-e','lekarz → lekarze, nauczyciel → nauczyciele']]},
    {t:'uwaga', h:'Исключения учим наизусть: <b>człowiek → ludzie</b>, <b>brat → bracia</b>, <b>dziecko → dzieci</b>, <b>rok → lata</b>.'},
    {t:'przyklady', items:[
      ['Te kobiety są z Polski.','Эти женщины из Польши.'],
      ['Ci mężczyźni pracują w porcie.','Эти мужчины работают в порту.'],
      ['Moi koledzy mieszkają w Gdyni.','Мои коллеги живут в Гдыне.'],
      ['Dzieci mają nowe zabawki.','У детей новые игрушки.']]},
  ],
  cwiczenia: [
    {zdanie:'___ herbata jest za gorąca.', opcje:['Ten','Ta','To'], ok:1, wyjasnienie:'herbata — женский род (в русском «чай» — мужской).'},
    {zdanie:'___ dziecko jest bardzo grzeczne.', opcje:['Ten','Ta','To'], ok:2, wyjasnienie:'dziecko — средний род: to dziecko.'},
    {zdanie:'___ pies jest duży.', opcje:['Ten','Ta','To'], ok:0, wyjasnienie:'pies — мужской род: ten pies.'},
    {zdanie:'___ noc była bardzo zimna.', opcje:['Ten','Ta','To'], ok:1, wyjasnienie:'noc — женский род на согласную.'},
    {zdanie:'Na stole leżą dwie ___ (książka).', ok:'książki', wyjasnienie:'после k → -i: książka → książki.'},
    {zdanie:'W tym mieście są piękne ___ (park).', ok:'parki', wyjasnienie:'после k → -i: park → parki.'},
    {zdanie:'Gdzie są moje ___ (klucz)?', ok:'klucze', wyjasnienie:'после cz → -e: klucz → klucze.'},
    {zdanie:'Te ___ (okno) są brudne.', ok:'okna', wyjasnienie:'средний род → -a: okno → okna.'},
    {zdanie:'To są moi ___ (kolega) z pracy.', ok:'koledzy', wyjasnienie:'мужско-личная форма: kolega → koledzy (g → dz).'},
    {zdanie:'W klasie są nowi ___.', opcje:['studenty','studenci','studentowie'], ok:1, wyjasnienie:'мужско-личная форма: student → studenci (t → ci).'},
    {zdanie:'Moi ___ (brat) mieszkają w Gdańsku.', ok:'bracia', wyjasnienie:'исключение: brat → bracia.'},
    {zdanie:'Pan Nowak i pan Kowalski to nasi nowi ___.', opcje:['sąsiady','sąsiedzi','sąsiadowie'], ok:1, wyjasnienie:'sąsiad → sąsiedzi (d → dzi).'},
    {zdanie:'___ kobiety rozmawiają przed sklepem.', opcje:['Ci','Te'], ok:1, wyjasnienie:'женщины — не мужско-личная группа: te.'},
    {zdanie:'___ mężczyźni grają w piłkę.', opcje:['Ci','Te'], ok:0, wyjasnienie:'мужчины — мужско-личная группа: ci.'},
    {zdanie:'Ci ___ są bardzo mili.', opcje:['ludzie','człowieki','ludzi'], ok:0, wyjasnienie:'исключение: człowiek → ludzie.'},
    {zdanie:'To są ___ (Polak) z Krakowa.', ok:'Polacy', wyjasnienie:'Polak → Polacy (k → c).'},
  ]
};

KURS_LEKCJE.L02 = {
  tytul: 'Biernik — kogo? co?',
  ru: 'Винительный падеж',
  cel: 'Винительный нужен постоянно: что ты имеешь, любишь, видишь, покупаешь. Он почти как русский — но у одушевлённых мужского рода и у групп мужчин свои формы.',
  teoria: [
    {t:'h', h:'Когда нужен'},
    {t:'p', h:'После глаголов действия над предметом: <b>mieć, lubić, kochać, znać, widzieć, kupować, jeść, pić, czytać, oglądać, robić</b>. После предлогов <b>przez</b> (через), <b>na / w</b> при движении (<i>idę na pocztę</i>), а также в устойчивых сочетаниях.'},
    {t:'h', h:'Окончания в единственном числе'},
    {t:'tab', head:['Род','Правило','Пример'], rows:[
      ['женский на -a','-a → <b>-ę</b>','kawa → kawę, mama → mamę'],
      ['женский на согласную','без изменений','noc, rzecz, pomoc'],
      ['pani','особая форма','pani → <b>panią</b>'],
      ['мужской неодушевлённый','= именительный','dom, telefon, samochód'],
      ['мужской одушевлённый','= родительный (<b>-a</b>)','brat → brata, kot → kota, pies → psa'],
      ['мужской на -a','как женский: <b>-ę</b>','kolega → kolegę, mężczyzna → mężczyznę'],
      ['средний','= именительный','okno, dziecko, mieszkanie']]},
    {t:'h', h:'Множественное число'},
    {t:'tab', head:['Группа','Правило','Пример'], rows:[
      ['мужско-личная','= родительный мн.ч.','znam studentów, kolegów, ludzi'],
      ['все остальные','= именительный мн.ч.','mam koty, kupuję książki']]},
    {t:'pulapka', h:'Польский требует предлог там, где в русском его нет или он другой: <b>czekać na autobus</b> (ждать автобус), <b>pytać o cenę</b> (спросить о цене — в русском предложный!), <b>prosić o pomoc</b> (просить помощи), <b>grać w piłkę</b> (играть в футбол), <b>dziękować za prezent</b> (благодарить за подарок).'},
    {t:'uwaga', h:'Указательное местоимение женского рода в винительном: <b>tę</b> (tę książkę). В разговоре слышно «tą», но в письме на экзамене пиши <b>tę</b>.'},
    {t:'przyklady', items:[
      ['Mam siostrę i dwóch braci.','У меня сестра и два брата.'],
      ['Czekam na tramwaj.','Жду трамвай.'],
      ['Znasz tego pana?','Ты знаешь этого господина?'],
      ['Kupiłem nowy rower.','Я купил новый велосипед.']]},
  ],
  cwiczenia: [
    {zdanie:'Codziennie piję ___ (kawa).', ok:'kawę', wyjasnienie:'женский на -a → -ę.'},
    {zdanie:'Mam ___ (siostra) i brata.', ok:'siostrę', wyjasnienie:'siostra → siostrę.'},
    {zdanie:'Znasz ___ (Marek)?', ok:'Marka', wyjasnienie:'одушевлённый мужской → -a; беглое e выпадает: Marek → Marka.'},
    {zdanie:'Kupiłem nowy ___ .', opcje:['telefon','telefonu','telefona'], ok:0, wyjasnienie:'неодушевлённый мужской = именительный.'},
    {zdanie:'Widzę ___ na ulicy.', opcje:['pies','psa','psem'], ok:1, wyjasnienie:'животное — одушевлённое: pies → psa.'},
    {zdanie:'Czekam na ___ (autobus).', ok:'autobus', wyjasnienie:'czekać na + винительный; autobus — неодушевлённый.'},
    {zdanie:'Czy możesz zapytać o ___ (cena)?', ok:'cenę', wyjasnienie:'pytać o + винительный: o cenę.'},
    {zdanie:'Bardzo lubię ___ .', opcje:['ta piosenka','tę piosenkę','tej piosenki'], ok:1, wyjasnienie:'lubić + винительный: tę piosenkę.'},
    {zdanie:'W sobotę gramy w ___ (piłka).', ok:'piłkę', wyjasnienie:'grać w + винительный: w piłkę.'},
    {zdanie:'Dobrze znam ___ .', opcje:['twoi koledzy','twoich kolegów','twoim kolegom'], ok:1, wyjasnienie:'мужско-личная группа во мн.ч. = родительный: twoich kolegów.'},
    {zdanie:'Mamy dwa ___ .', opcje:['koty','kotów','kotami'], ok:0, wyjasnienie:'животные во мн.ч. — не мужско-личная группа = именительный: koty.'},
    {zdanie:'Wieczorem oglądamy ___ (film).', ok:'film', wyjasnienie:'неодушевлённый = именительный.'},
    {zdanie:'Czy zna pan ___ Annę?', opcje:['pani','panią','panię'], ok:1, wyjasnienie:'pani → panią.'},
    {zdanie:'Dziękuję za ___ (pomoc).', ok:'pomoc', wyjasnienie:'pomoc — женский на согласную, форма не меняется.'},
    {zdanie:'Prosimy o ___ (rachunek).', ok:'rachunek', wyjasnienie:'prosić o + винительный; неодушевлённый = именительный.'},
    {zdanie:'Zaprosiłem na urodziny ___ (kolega) z pracy.', ok:'kolegę', wyjasnienie:'мужской на -a склоняется как женский: kolega → kolegę.'},
  ]
};

KURS_LEKCJE.L03 = {
  tytul: 'Dopełniacz — liczba pojedyncza',
  ru: 'Родительный падеж: единственное число',
  cel: 'Самый частый падеж польского. Нужен после отрицания, после большинства предлогов, для принадлежности и количества.',
  teoria: [
    {t:'h', h:'Пять случаев, когда нужен родительный'},
    {t:'tab', head:['Когда','Пример'], rows:[
      ['отрицание вместо винительного','Mam czas → Nie mam <b>czasu</b>'],
      ['принадлежность','samochód <b>brata</b>, dom <b>mamy</b>'],
      ['количество','szklanka <b>wody</b>, dużo <b>pracy</b>'],
      ['предлоги do, z, od, bez, dla, u, obok, koło, około','do <b>sklepu</b>, z <b>pracy</b>, bez <b>cukru</b>, u <b>lekarza</b>'],
      ['глаголы szukać, potrzebować, słuchać, uczyć się, bać się, używać, życzyć','szukam <b>pracy</b>, słucham <b>radia</b>']]},
    {t:'pulapka', h:'После этих глаголов в русском другой падеж, а в польском — родительный: <b>słuchać muzyki</b> (слушать музыку), <b>uczyć się języka</b> (учить язык), <b>szukać mieszkania</b> (искать квартиру), <b>używać komputera</b> (пользоваться компьютером — в русском творительный). И после отрицания всегда: <b>Nie lubię kawy</b> — «не люблю кофе».'},
    {t:'h', h:'Окончания'},
    {t:'tab', head:['Род','Окончание','Пример'], rows:[
      ['женский','-y (после твёрдых, c, cz, sz, rz, ż)','kawa → kawy, ulica → ulicy, praca → pracy, noc → nocy'],
      ['женский','-i (после k, g, мягких, -ia, -ść)','książka → książki, kuchnia → kuchni, miłość → miłości'],
      ['средний','-a','okno → okna, mieszkanie → mieszkania'],
      ['мужской','-a или -u','brata, psa · domu, czasu']]},
    {t:'h', h:'Мужской род: -a или -u?'},
    {t:'p', h:'Точного правила нет, но есть надёжные ориентиры. Слово всё равно учи вместе с формой.'},
    {t:'tab', head:['-a','-u'], rows:[
      ['люди и животные: brata, lekarza, psa, kota','абстрактное: czasu, problemu, sportu'],
      ['многие вещи: chleba, sera, klucza, komputera','вещества: cukru, soku, deszczu'],
      ['польские города: Gdańska, Krakowa','здания и места: domu, sklepu, hotelu, teatru'],
      ['месяцы: stycznia, marca','дни: poniedziałku, wtorku']]},
    {t:'uwaga', h:'Беглое <b>e</b> выпадает: pies → psa, ojciec → ojca, dzień → dnia, cukier → cukru, Marek → Marka. Слова на <b>-um</b> в единственном числе не меняются: w muzeum, do muzeum.'},
    {t:'przyklady', items:[
      ['Nie mam dziś czasu.','У меня сегодня нет времени.'],
      ['Idę do sklepu po chleb.','Иду в магазин за хлебом.'],
      ['Kawa bez cukru, proszę.','Кофе без сахара, пожалуйста.'],
      ['Uczę się języka polskiego.','Я учу польский язык.']]},
  ],
  cwiczenia: [
    {zdanie:'Nie mam ___ (czas).', ok:'czasu', wyjasnienie:'отрицание → родительный; czas → czasu.'},
    {zdanie:'Nie lubię ___ (kawa).', ok:'kawy', wyjasnienie:'отрицание → родительный: kawa → kawy.'},
    {zdanie:'Idę do ___ (sklep).', ok:'sklepu', wyjasnienie:'do + родительный: sklep → sklepu.'},
    {zdanie:'Wracam z ___ (praca) o piątej.', ok:'pracy', wyjasnienie:'z (откуда) + родительный: praca → pracy.'},
    {zdanie:'Poproszę szklankę ___ (woda).', ok:'wody', wyjasnienie:'количество → родительный: woda → wody.'},
    {zdanie:'Kupiłem kilogram ___ (cukier).', ok:'cukru', wyjasnienie:'вещество → -u, беглое e выпадает: cukier → cukru.'},
    {zdanie:'To jest samochód mojego ___ (brat).', ok:'brata', wyjasnienie:'принадлежность; человек → -a.'},
    {zdanie:'Codziennie rano słucham ___ .', opcje:['radio','radia','radiem'], ok:1, wyjasnienie:'słuchać + родительный: radio → radia.'},
    {zdanie:'Uczę się ___ polskiego.', opcje:['język','języka','językiem'], ok:1, wyjasnienie:'uczyć się + родительный: języka.'},
    {zdanie:'Szukam ___ (praca) w Gdańsku.', ok:'pracy', wyjasnienie:'szukać + родительный.'},
    {zdanie:'Kawa bez ___ , proszę.', opcje:['cukier','cukru','cukra'], ok:1, wyjasnienie:'bez + родительный: cukru.'},
    {zdanie:'Ten prezent jest dla ___ .', opcje:['mama','mamy','mamę'], ok:1, wyjasnienie:'dla + родительный: mamy.'},
    {zdanie:'Jutro idę do ___ (lekarz).', ok:'lekarza', wyjasnienie:'do + родительный; человек → -a.'},
    {zdanie:'Nigdzie nie widzę ___ .', opcje:['mój telefon','mojego telefonu','moim telefonem'], ok:1, wyjasnienie:'отрицание → родительный: mojego telefonu.'},
    {zdanie:'Mieszkam obok ___ (kino).', ok:'kina', wyjasnienie:'obok + родительный; средний → -a.'},
    {zdanie:'Boję się ___ .', opcje:['ten pies','tego psa','tym psem'], ok:1, wyjasnienie:'bać się + родительный: tego psa.'},
  ]
};

KURS_LEKCJE.L04 = {
  tytul: 'Miejscownik — gdzie? o kim? o czym?',
  ru: 'Предложный падеж',
  cel: 'Где ты живёшь и работаешь, о чём говоришь. Падеж всегда с предлогом, а главная сложность — чередования согласных перед окончанием -e.',
  teoria: [
    {t:'h', h:'Только с пятью предлогами'},
    {t:'tab', head:['Предлог','Значение','Пример'], rows:[
      ['w','внутри','w domu, w pracy, w Gdańsku'],
      ['na','на, а также многие учреждения и события','na poczcie, na uniwersytecie, na koncercie'],
      ['o','о ком, о чём','mówimy o filmie'],
      ['po','по (поверхности), после','po parku, po obiedzie'],
      ['przy','у, при','przy stole, przy ulicy Długiej']]},
    {t:'pulapka', h:'Предлоги не совпадают с русскими: <b>w pracy</b> (на работе), <b>w kuchni</b> (на кухне), <b>na uniwersytecie</b> (в университете), <b>na dworcu</b> (на вокзале — совпадает), <b>na zakupach</b> (в магазинах, за покупками).'},
    {t:'h', h:'Окончание -e с чередованием (твёрдая основа)'},
    {t:'tab', head:['Было','Стало','Пример'], rows:[
      ['t','cie','uniwersytet → na uniwersytecie'],
      ['d','dzie','samochód → w samochodzie, woda → w wodzie'],
      ['st','ście','miasto → w mieście, most → na moście'],
      ['r','rze','teatr → w teatrze, siostra → o siostrze'],
      ['ł','le','stół → na stole, szkoła → w szkole'],
      ['n, m, p, b, w, s, z','+ie','sklep → w sklepie, film → o filmie, las → w lesie'],
      ['k (жен.)','ce','Polska → w Polsce, matka → o matce'],
      ['g (жен.)','dze','noga → na nodze, droga → w drodze']]},
    {t:'h', h:'Окончание -u и -i'},
    {t:'tab', head:['Окончание','Когда','Пример'], rows:[
      ['-u','муж. и ср. род на k, g, ch и мягкие','w Gdańsku, na rynku, w hotelu, w pokoju, w mieszkaniu'],
      ['-i / -y','жен. род на мягкие, шипящие и согласную','w kuchni, na ulicy, w pracy, w nocy']]},
    {t:'uwaga', h:'Исключения: <b>w domu</b>, <b>o synu</b>, <b>o panu</b>. Во множественном числе всегда <b>-ach</b>: w sklepach, w górach, o dzieciach.'},
    {t:'przyklady', items:[
      ['Mieszkam w Gdańsku, na Przymorzu.','Живу в Гданьске, в районе Пшиможе.'],
      ['Pracuję w biurze w centrum.','Работаю в офисе в центре.'],
      ['Spotkajmy się na dworcu.','Давай встретимся на вокзале.'],
      ['Rozmawialiśmy o pogodzie.','Мы говорили о погоде.']]},
  ],
  cwiczenia: [
    {zdanie:'Mieszkam w ___ (Gdańsk).', ok:'Gdańsku', wyjasnienie:'после k → -u: Gdańsk → w Gdańsku.'},
    {zdanie:'Pracuję w ___ (szkoła).', ok:'szkole', wyjasnienie:'ł → le: szkoła → w szkole.'},
    {zdanie:'Studiuję na ___ (uniwersytet).', ok:'uniwersytecie', wyjasnienie:'t → cie; и предлог na!'},
    {zdanie:'Książka leży na ___ (stół).', ok:'stole', wyjasnienie:'ł → le, ó → o: stół → na stole.'},
    {zdanie:'Rozmawiamy o ___ (film).', ok:'filmie', wyjasnienie:'m → mie: o filmie.'},
    {zdanie:'Mój brat od roku mieszka w ___ (Polska).', ok:'Polsce', wyjasnienie:'k → ce: Polska → w Polsce.'},
    {zdanie:'Jesteśmy teraz w ___ .', opcje:['miasto','miastu','mieście'], ok:2, wyjasnienie:'st → ście, a → e: w mieście.'},
    {zdanie:'Spotkajmy się na ___ .', opcje:['dworzec','dworcu','dworca'], ok:1, wyjasnienie:'dworzec → na dworcu (беглое e).'},
    {zdanie:'Obiad gotuję w ___ (kuchnia).', ok:'kuchni', wyjasnienie:'-ia → -i: w kuchni (в русском «на кухне»).'},
    {zdanie:'Wczoraj byliśmy w ___ .', opcje:['teatr','teatrze','teatru'], ok:1, wyjasnienie:'r → rze: w teatrze.'},
    {zdanie:'Często myślę o ___ (siostra).', ok:'siostrze', wyjasnienie:'r → rze: o siostrze.'},
    {zdanie:'Pracuję w ___ (biuro) w centrum.', ok:'biurze', wyjasnienie:'r → rze: biuro → w biurze.'},
    {zdanie:'Dzieci bawią się w ___ .', opcje:['pokój','pokoju','pokoje'], ok:1, wyjasnienie:'мягкая основа → -u: w pokoju.'},
    {zdanie:'Po obiedzie spacerujemy po ___ (park).', ok:'parku', wyjasnienie:'после k → -u: po parku.'},
    {zdanie:'Latem odpoczywamy w ___ .', opcje:['góry','górach','górami'], ok:1, wyjasnienie:'множественное число → -ach: w górach.'},
    {zdanie:'Wieczorem jestem zawsze w ___ (dom).', ok:'domu', wyjasnienie:'исключение: w domu.'},
  ]
};

KURS_LEKCJE.L05 = {
  tytul: 'Narzędnik — kim? czym? z kim?',
  ru: 'Творительный падеж',
  cel: 'Профессия (jestem lekarzem), «с кем» (z kolegą), транспорт (jadę tramwajem), интересы (interesuję się muzyką) и «где» после nad / pod / przed / za / między.',
  teoria: [
    {t:'h', h:'Когда нужен'},
    {t:'tab', head:['Случай','Пример'], rows:[
      ['być / zostać + профессия, национальность','Jestem <b>lekarzem</b>. Chcę zostać <b>tłumaczem</b>.'],
      ['z — с кем, с чем','z <b>kolegą</b>, kawa z <b>mlekiem</b>'],
      ['транспорт (без предлога)','jadę <b>tramwajem</b>, lecę <b>samolotem</b>'],
      ['глаголы: interesować się, zajmować się, opiekować się','interesuję się <b>historią</b>'],
      ['где: nad, pod, przed, za, między','nad <b>morzem</b>, pod <b>stołem</b>, przed <b>kinem</b>']]},
    {t:'pulapka', h:'«Я врач» по-польски — <b>Jestem lekarzem</b>: после быть с существительным нужен творительный. Но после <b>to</b> — именительный: <b>To jest mój brat</b>, <b>To jest lekarz</b>. «Ехать на автобусе» — <b>jechać autobusem</b>, без предлога.'},
    {t:'h', h:'Окончания'},
    {t:'tab', head:['Род','Окончание','Пример'], rows:[
      ['мужской и средний','-em (после k, g: -iem)','studentem, oknem, pociągiem, dzieckiem'],
      ['женский и мужской на -a','-ą','mamą, kobietą, nocą, panią, kolegą'],
      ['множественное число','-ami','studentami, kobietami, oknami'],
      ['исключения мн.ч.','-mi','ludźmi, dziećmi, przyjaciółmi, pieniędzmi']]},
    {t:'uwaga', h:'Прилагательные: <b>-ym / -im</b> (z dobrym kolegą), <b>-ą</b> (z miłą koleżanką), во мн.ч. <b>-ymi / -imi</b> (z nowymi przyjaciółmi). С движением те же предлоги требуют винительного: <i>idę nad morze</i>, но <i>jestem nad morzem</i>.'},
    {t:'przyklady', items:[
      ['Z zawodu jestem fotografem.','По профессии я фотограф.'],
      ['Do pracy jeżdżę tramwajem.','На работу езжу на трамвае.'],
      ['Interesuję się fotografią.','Я увлекаюсь фотографией.'],
      ['Spotkajmy się przed dworcem.','Давай встретимся перед вокзалом.']]},
  ],
  cwiczenia: [
    {zdanie:'Jestem ___ (lekarz).', ok:'lekarzem', wyjasnienie:'być + профессия → творительный: lekarzem.'},
    {zdanie:'Moja siostra jest ___ (nauczycielka).', ok:'nauczycielką', wyjasnienie:'женский род → -ą.'},
    {zdanie:'Idę do kina z ___ (kolega).', ok:'kolegą', wyjasnienie:'мужской на -a → -ą, как женский.'},
    {zdanie:'Poproszę kawę z ___ (mleko).', ok:'mlekiem', wyjasnienie:'z + творительный; после k → -iem.'},
    {zdanie:'Do pracy jeżdżę ___ (tramwaj).', ok:'tramwajem', wyjasnienie:'транспорт — творительный без предлога.'},
    {zdanie:'Interesuję się ___ (historia).', ok:'historią', wyjasnienie:'interesować się + творительный.'},
    {zdanie:'Jestem ___ .', opcje:['Polak','Polakiem','Polaka'], ok:1, wyjasnienie:'być + национальность → творительный: Polakiem.'},
    {zdanie:'To jest mój ___ .', opcje:['brat','bratem','brata'], ok:0, wyjasnienie:'после «to» — именительный: To jest mój brat.'},
    {zdanie:'Rozmawiałem z ___ (pani) dyrektor.', ok:'panią', wyjasnienie:'pani → panią; название должности у женщины не склоняется.'},
    {zdanie:'Kot śpi pod ___ (stół).', ok:'stołem', wyjasnienie:'pod (где) + творительный.'},
    {zdanie:'Spotkamy się przed ___ (kino).', ok:'kinem', wyjasnienie:'przed (где) + творительный.'},
    {zdanie:'Latem odpoczywamy nad ___ .', opcje:['morze','morzem','morza'], ok:1, wyjasnienie:'nad (где, без движения) + творительный.'},
    {zdanie:'Wczoraj spotkałem się z ___ .', opcje:['przyjaciele','przyjaciółmi','przyjacielami'], ok:1, wyjasnienie:'исключение: przyjaciółmi.'},
    {zdanie:'Chcę zostać ___ (tłumacz).', ok:'tłumaczem', wyjasnienie:'zostać + творительный.'},
    {zdanie:'W ogrodzie bawię się z ___ .', opcje:['dzieci','dziećmi','dzieciami'], ok:1, wyjasnienie:'исключение: dziećmi.'},
    {zdanie:'Pojedziemy do Krakowa ___ (pociąg).', ok:'pociągiem', wyjasnienie:'транспорт; после g → -iem.'},
    {zdanie:'Opiekuję się ___ (babcia).', ok:'babcią', wyjasnienie:'opiekować się + творительный.'},
  ]
};

KURS_LEKCJE.L06 = {
  tytul: 'Celownik — komu? czemu?',
  ru: 'Дательный падеж',
  cel: 'Кому даёшь, помогаешь, говоришь, кому что нравится. И безличные фразы: jest mi zimno, podoba mi się.',
  teoria: [
    {t:'h', h:'Когда нужен'},
    {t:'tab', head:['Случай','Пример'], rows:[
      ['кому + что: dać, kupić, pokazać, powiedzieć, wysłać, pożyczyć','Kupiłem <b>córce</b> rower.'],
      ['глаголы только с дательным: pomagać, dziękować, ufać, wierzyć, przeszkadzać, gratulować, życzyć','Pomagam <b>bratu</b>. Dziękuję <b>mamie</b>.'],
      ['безличные: podobać się, smakować, jest mi zimno / przykro / smutno, brakuje mi','Podoba <b>mi</b> się ten film.'],
      ['предлоги: dzięki, wbrew, przeciwko','dzięki <b>przyjacielowi</b>']]},
    {t:'pulapka', h:'«Благодарить маму» — <b>dziękować mamie</b> (дательный, а не винительный). «Мне нравится фильм» — <b>Podoba mi się film</b>: нравящаяся вещь — подлежащее, поэтому <b>Te buty mi się podobają</b> (мн.ч.).'},
    {t:'h', h:'Окончания'},
    {t:'tab', head:['Род','Окончание','Пример'], rows:[
      ['мужской','-owi','studentowi, lekarzowi, Markowi'],
      ['мужской — исключения','-u','bratu, ojcu, panu, kotu, psu, chłopcu'],
      ['женский (как предложный)','-e / -i / -y','mamie, siostrze, córce, babci, ulicy, pani'],
      ['мужской на -a','как женский','koledze, tacie, mężczyźnie'],
      ['средний','-u','dziecku, oknu'],
      ['множественное число','-om','rodzicom, dzieciom, ludziom']]},
    {t:'przyklady', items:[
      ['Pomagam koledze w pracy.','Помогаю коллеге на работе.'],
      ['Jest mi zimno, zamknij okno.','Мне холодно, закрой окно.'],
      ['Ten film bardzo mi się podobał.','Этот фильм мне очень понравился.'],
      ['Życzę ci powodzenia!','Желаю тебе удачи!']]},
  ],
  cwiczenia: [
    {zdanie:'Dziękuję ___ (mama) za pomoc.', ok:'mamie', wyjasnienie:'dziękować + дательный: mamie.'},
    {zdanie:'Pomagam ___ (brat) w nauce.', ok:'bratu', wyjasnienie:'исключение: brat → bratu.'},
    {zdanie:'Kupiłem ___ (córka) rower.', ok:'córce', wyjasnienie:'k → ce: córce.'},
    {zdanie:'Daj ___ (kot) jeść.', ok:'kotu', wyjasnienie:'исключение: kot → kotu.'},
    {zdanie:'Muszę powiedzieć ___ (szef) prawdę.', ok:'szefowi', wyjasnienie:'мужской → -owi.'},
    {zdanie:'Ten film bardzo ___ się podobał.', opcje:['mnie','mi','mną'], ok:1, wyjasnienie:'безударная форма: mi się podobał.'},
    {zdanie:'Te buty mi się ___ .', opcje:['podoba','podobają','podobało'], ok:1, wyjasnienie:'подлежащее — buty (мн.ч.) → podobają.'},
    {zdanie:'Wysłałem ___ (rodzice) zdjęcia z wakacji.', ok:'rodzicom', wyjasnienie:'мн.ч. → -om.'},
    {zdanie:'Pożycz ___ długopis.', opcje:['kolega','koledze','kolegowi'], ok:1, wyjasnienie:'мужской на -a склоняется как женский: koledze.'},
    {zdanie:'Pokażę ___ (dziecko) zwierzęta w zoo.', ok:'dziecku', wyjasnienie:'средний → -u.'},
    {zdanie:'Jest ___ zimno, zamknij okno.', opcje:['mnie','mi','ja'], ok:1, wyjasnienie:'безличная конструкция: jest mi zimno.'},
    {zdanie:'Życzę ___ (pani) wszystkiego najlepszego.', ok:'pani', wyjasnienie:'pani в дательном не меняется.'},
    {zdanie:'Gratuluję ___ zdanego egzaminu!', opcje:['ty','ci','cię'], ok:1, wyjasnienie:'gratulować komu (ci) czego (egzaminu).'},
    {zdanie:'Dzięki ___ (przyjaciel) znalazłem pracę.', ok:'przyjacielowi', wyjasnienie:'dzięki + дательный.'},
    {zdanie:'Daliśmy prezenty wszystkim ___ .', opcje:['dzieci','dzieciom','dziećmi'], ok:1, wyjasnienie:'мн.ч. → -om: dzieciom.'},
    {zdanie:'Nie przeszkadzaj ___ (tata), on pracuje.', ok:'tacie', wyjasnienie:'tata склоняется как женский: tacie.'},
  ]
};

KURS_LEKCJE.L07 = {
  tytul: 'Dopełniacz w liczbie mnogiej i liczebniki',
  ru: 'Родительный во множественном числе. Числа 5+',
  cel: 'Dużo ludzi, pięć złotych, kilka dni, nie mam pieniędzy. Форма самая коварная — зато логика как в русском: «пять книг», «много людей».',
  teoria: [
    {t:'h', h:'Когда нужен'},
    {t:'p', h:'Все случаи родительного (отрицание, предлоги, количество) плюс числа <b>от 5</b> и слова <b>dużo, mało, wiele, kilka, ile</b>: <i>pięć osób, dużo ludzi, kilka dni, ile osób?</i>'},
    {t:'h', h:'Три типа окончаний'},
    {t:'tab', head:['Окончание','Когда','Пример'], rows:[
      ['-ów','большинство мужских','studentów, domów, Polaków, samochodów'],
      ['-i / -y','мужские на мягкие, cz, sz, rz, ż; женские на -ia и на согласную','lekarzy, nauczycieli, lekcji, nocy, rzeczy'],
      ['нулевое','женские на -a, средние на -o / -e','kobiet, szkół, okien, mieszkań, miast']]},
    {t:'uwaga', h:'В нулевом окончании часто появляется <b>e</b> или <b>o → ó</b>: książka → książek, okno → okien, siostra → sióstr, osoba → osób, droga → dróg.'},
    {t:'tab', head:['Особые формы','Родительный мн.ч.'], rows:[
      ['ludzie, dzieci','ludzi, dzieci'],['przyjaciele, pieniądze','przyjaciół, pieniędzy'],
      ['tydzień, miesiąc, dzień','tygodni, miesięcy, dni'],['rok','lat (pięć lat)'],['muzeum','muzeów']]},
    {t:'h', h:'Числа и существительные'},
    {t:'tab', head:['Число','Форма','Пример'], rows:[
      ['1','им. ед.ч.','jeden dom, jedna kobieta'],
      ['2, 3, 4 (22, 23, 24…)','им. мн.ч.','dwa domy, trzy kobiety, cztery okna'],
      ['5–21, 25…','род. мн.ч.','pięć domów, sześć kobiet, dziesięć okien']]},
    {t:'uwaga', h:'Деньги и годы: 1 złoty / 2 złote / 5 złotych; 1 rok / 2 lata / 5 lat. С 5+ глагол в 3-м лице ед.ч.: <i>Pięć osób czeka. Dziesięć osób przyszło.</i>'},
    {t:'pulapka', h:'Логика совпадает с русским, а формы — нет: «много книг» — <b>dużo książek</b>, «пять сестёр» — <b>pięć sióstr</b>, «нет денег» — <b>nie ma pieniędzy</b>, «пять дней» — <b>pięć dni</b>.'},
    {t:'przyklady', items:[
      ['W Gdańsku jest dużo turystów.','В Гданьске много туристов.'],
      ['Bilet kosztuje cztery złote.','Билет стоит четыре злотых.'],
      ['Mieszkam tu od pięciu lat.','Живу здесь уже пять лет.']]},
  ],
  cwiczenia: [
    {zdanie:'W Gdańsku jest dużo ___ (turysta).', ok:'turystów', wyjasnienie:'dużo + родительный мн.ч.: turystów.'},
    {zdanie:'To kosztuje pięć ___ (złoty).', ok:'złotych', wyjasnienie:'5+ → złotych.'},
    {zdanie:'Mam trzy ___ .', opcje:['siostry','sióstr','siostrami'], ok:0, wyjasnienie:'2–4 → именительный мн.ч.: siostry.'},
    {zdanie:'Mam pięć ___ .', opcje:['siostry','sióstr','siostrom'], ok:1, wyjasnienie:'5+ → родительный мн.ч.: sióstr (o → ó).'},
    {zdanie:'Na lekcji było dziesięć ___ (osoba).', ok:'osób', wyjasnienie:'нулевое окончание, o → ó: osób.'},
    {zdanie:'Nie mam ___ (pieniądze).', ok:'pieniędzy', wyjasnienie:'особая форма: pieniędzy.'},
    {zdanie:'Ile masz ___ ?', opcje:['lata','lat','roku'], ok:1, wyjasnienie:'Ile masz lat? — «Сколько тебе лет?»'},
    {zdanie:'Kupiłem kilo ___ (jabłko).', ok:'jabłek', wyjasnienie:'нулевое окончание с e: jabłek.'},
    {zdanie:'W tym mieście jest wiele ___ .', opcje:['muzea','muzeów','muzeum'], ok:1, wyjasnienie:'muzeum → muzeów.'},
    {zdanie:'Na parkingu stoi sześć ___ (samochód).', ok:'samochodów', wyjasnienie:'мужской → -ów.'},
    {zdanie:'Czekam już od dwóch ___ (tydzień).', ok:'tygodni', wyjasnienie:'tydzień → tygodni.'},
    {zdanie:'W pokoju było dużo ___ .', opcje:['ludzie','ludzi','ludźmi'], ok:1, wyjasnienie:'ludzie → ludzi.'},
    {zdanie:'Na półce jest sporo ___ (książka).', ok:'książek', wyjasnienie:'книги: książek (вставное e).'},
    {zdanie:'Mamy dziś pięć ___ .', opcje:['lekcje','lekcji','lekcjami'], ok:1, wyjasnienie:'на -cja → -cji.'},
    {zdanie:'W tym hotelu nie ma wolnych ___ (pokój).', ok:'pokoi', alt:['pokojów'], wyjasnienie:'pokój → pokoi (реже pokojów).'},
    {zdanie:'Ten film trwa dwie ___ .', opcje:['godziny','godzin','godzinach'], ok:0, wyjasnienie:'2 → именительный мн.ч.: dwie godziny.'},
    {zdanie:'Pracuję osiem ___ (godzina) dziennie.', ok:'godzin', wyjasnienie:'5+ → нулевое окончание: godzin.'},
  ]
};

KURS_LEKCJE.L08 = {
  tytul: 'Wołacz — zwroty do adresata',
  ru: 'Звательный падеж и обращения в письмах',
  cel: 'Как обращаться к человеку в письме и в разговоре: Kochana Mamo! Szanowny Panie Dyrektorze! На экзамене обращение в письме — отдельный пункт оценки.',
  teoria: [
    {t:'h', h:'Окончания'},
    {t:'tab', head:['Тип','Окончание','Пример'], rows:[
      ['женский на -a','-o','mama → mamo, Anna → Anno, Ewa → Ewo'],
      ['женский на -ia, уменьшительные','-u','Kasia → Kasiu, babcia → babciu, Ania → Aniu'],
      ['мужской на твёрдую согласную','-e (с чередованием)','Marcin → Marcinie, Piotr → Piotrze, Paweł → Pawle, pan → panie'],
      ['мужской на мягкую, k, g, ch','-u','Tomasz → Tomaszu, Marek → Marku, Jacek → Jacku'],
      ['мужской на -a','-o','kolega → kolego, tata → tato'],
      ['средний и мн.ч.','= именительный','Drodzy Państwo! Kochani! Dzieci!']]},
    {t:'uwaga', h:'Исключения: <b>pani → pani</b>, <b>ojciec → ojcze</b>, <b>chłopiec → chłopcze</b>, <b>człowiek → człowieku</b>. Должность у женщины не склоняется: <b>Szanowna Pani Profesor!</b> У мужчины склоняются оба слова: <b>Szanowny Panie Dyrektorze!</b>'},
    {t:'h', h:'Обращения в письме'},
    {t:'tab', head:['Письмо','Начало','Конец'], rows:[
      ['официальное','Szanowni Państwo! / Szanowny Panie! / Szanowna Pani!','Z poważaniem'],
      ['полуофициальное','Szanowny Panie Tomaszu! / Szanowna Pani Anno!','Z wyrazami szacunku / Łączę pozdrowienia'],
      ['неформальное','Drogi Marku! / Kochana Mamo! / Cześć, Kasiu!','Pozdrawiam serdecznie / Ściskam']]},
    {t:'pulapka', h:'В русском звательной формы почти нет, а в польском обращение без неё звучит небрежно: «Dzień dobry, panie Tomaszu», а не «panie Tomasz». Между друзьями в разговоре можно «Cześć, Marek!», но <b>в письме на экзамене — только звательный</b>.'},
    {t:'przyklady', items:[
      ['Kochana Mamo! Pozdrawiam Cię z Gdańska.','Дорогая мама! Привет тебе из Гданьска.'],
      ['Szanowny Panie Dyrektorze!','Уважаемый господин директор!'],
      ['Panie doktorze, boli mnie gardło.','Доктор, у меня болит горло.']]},
  ],
  cwiczenia: [
    {zdanie:'Kochana ___ (mama)!', ok:'Mamo', wyjasnienie:'-a → -o: Mamo.'},
    {zdanie:'Drogi ___ (Tomek)!', ok:'Tomku', wyjasnienie:'на -k → -u, беглое e выпадает: Tomku.'},
    {zdanie:'Szanowny ___ (pan) Dyrektorze!', ok:'Panie', wyjasnienie:'pan → panie.'},
    {zdanie:'Cześć, ___ (Kasia)!', ok:'Kasiu', wyjasnienie:'уменьшительные на -ia → -iu.'},
    {zdanie:'Szanowna Pani ___ !', opcje:['Profesor','Profesorze','Profesorko'], ok:0, wyjasnienie:'должность у женщины не склоняется.'},
    {zdanie:'___ (Piotr), pomóż mi, proszę!', ok:'Piotrze', wyjasnienie:'r → rze: Piotrze.'},
    {zdanie:'Dzień dobry, panie ___ (Marek)!', ok:'Marku', wyjasnienie:'Marek → Marku.'},
    {zdanie:'___ Państwo! (начало официального письма)', opcje:['Szanowny','Szanowna','Szanowni'], ok:2, wyjasnienie:'Państwo — мн.ч.: Szanowni Państwo.'},
    {zdanie:'Kochana ___ (babcia)!', ok:'babciu', wyjasnienie:'-ia → -iu: babciu.'},
    {zdanie:'Drogi ___ (Paweł)!', ok:'Pawle', wyjasnienie:'ł → le, e выпадает: Pawle.'},
    {zdanie:'Dziękuję, panie ___ !', opcje:['doktor','doktorze','doktora'], ok:1, wyjasnienie:'r → rze: doktorze.'},
    {zdanie:'___ (Anna), gdzie jesteś?', ok:'Anno', wyjasnienie:'-a → -o.'},
    {zdanie:'Moi ___ ! (к друзьям)', opcje:['drodzy','drogi','drogich'], ok:0, wyjasnienie:'мн.ч. мужско-личное: drodzy.'},
    {zdanie:'___ (kolega), masz chwilę?', ok:'Kolego', wyjasnienie:'мужской на -a → -o.'},
    {zdanie:'Как закончить официальное письмо?', opcje:['Ściskam mocno','Z poważaniem','Buziaki'], ok:1, wyjasnienie:'официальное письмо: Z poważaniem.'},
    {zdanie:'Cześć, ___ (Adam)!', ok:'Adamie', wyjasnienie:'m → mie: Adamie.'},
  ]
};

KURS_LEKCJE.L09 = {
  tytul: 'Zaimki osobowe',
  ru: 'Личные местоимения во всех падежах',
  cel: 'mnie / mi / mną, go / jego / niego, ją / nią. Короткие и длинные формы, формы с n- после предлогов. Задание I экзамена проверяет именно их.',
  teoria: [
    {t:'tab', head:['Падеж','ja','ty','on, ono','ona'], rows:[
      ['M.','ja','ty','on, ono','ona'],
      ['D.','mnie','ciebie, cię','jego, go, niego','jej, niej'],
      ['C.','mnie, mi','tobie, ci','jemu, mu, niemu','jej, niej'],
      ['B.','mnie','ciebie, cię','jego, go, niego (ono: je)','ją, nią'],
      ['N.','mną','tobą','nim','nią'],
      ['Msc.','mnie','tobie','nim','niej']]},
    {t:'tab', head:['Падеж','my','wy','oni / one'], rows:[
      ['M.','my','wy','oni / one'],['D.','nas','was','ich, nich'],['C.','nam','wam','im, nim'],
      ['B.','nas','was','ich, nich (one: je, nie)'],['N.','nami','wami','nimi'],['Msc.','nas','was','nich']]},
    {t:'h', h:'Три правила выбора формы'},
    {t:'tab', head:['Правило','Пример'], rows:[
      ['короткая форма (mi, ci, mu, go, cię) — без ударения, не в начале','Daj mi. Widzę go.'],
      ['длинная форма (mnie, tobie, jemu, jego, ciebie) — с ударением, в начале, при противопоставлении','Mnie się to nie podoba, a tobie?'],
      ['после предлога: 3-е лицо с n-, остальные — длинные','do niego, z nią, o nich, dla mnie, do ciebie, ze mną']]},
    {t:'pulapka', h:'«У меня есть» — просто <b>mam</b>. «У него» в значении «у него дома» — <b>u niego</b>. «Со мной» — <b>ze mną</b> (ze перед mn-).'},
    {t:'przyklady', items:[
      ['Czy możesz pójść ze mną?','Можешь пойти со мной?'],
      ['Rozmawiałem z nim wczoraj.','Я говорил с ним вчера.'],
      ['To prezent dla niej.','Это подарок для неё.']]},
  ],
  cwiczenia: [
    {zdanie:'Daj ___ ten długopis, proszę.', opcje:['mnie','mi','mną'], ok:1, wyjasnienie:'безударная позиция → mi.'},
    {zdanie:'Czy możesz pójść ze ___ ?', opcje:['mi','mną','mnie'], ok:1, wyjasnienie:'z + творительный: ze mną.'},
    {zdanie:'Widzę ___ codziennie w autobusie. (on)', opcje:['go','jemu','nim'], ok:0, wyjasnienie:'винительный, без предлога: go.'},
    {zdanie:'To prezent dla ___ . (ona)', opcje:['jej','niej','ją'], ok:1, wyjasnienie:'после предлога → n-форма: dla niej.'},
    {zdanie:'Rozmawiałem z ___ wczoraj. (on)', opcje:['nim','niego','jego'], ok:0, wyjasnienie:'z + творительный: z nim.'},
    {zdanie:'Kocham ___ . (ona)', opcje:['jej','ją','nią'], ok:1, wyjasnienie:'винительный без предлога: ją.'},
    {zdanie:'Myślę o ___ cały czas. (ty)', opcje:['tobą','tobie','ciebie'], ok:1, wyjasnienie:'o + предложный: o tobie.'},
    {zdanie:'Idziemy do ___ na kolację. (oni)', opcje:['ich','nich','nimi'], ok:1, wyjasnienie:'после предлога: do nich.'},
    {zdanie:'___ się to nie podoba, ale tobie tak.', opcje:['Mi','Mnie','Mną'], ok:1, wyjasnienie:'в начале и при противопоставлении — длинная форма: Mnie.'},
    {zdanie:'Pomóż ___ ! (my)', opcje:['nas','nam','nami'], ok:1, wyjasnienie:'pomóc + дательный: nam.'},
    {zdanie:'Znasz ___ ? (oni)', opcje:['ich','im','nimi'], ok:0, wyjasnienie:'винительный мужско-личный: ich.'},
    {zdanie:'Zadzwonię do ___ jutro. (ty)', opcje:['cię','ciebie','tobie'], ok:1, wyjasnienie:'после предлога — длинная: do ciebie.'},
    {zdanie:'Nie widziałem ___ od roku. (ona)', opcje:['jej','ją','niej'], ok:0, wyjasnienie:'отрицание → родительный, без предлога: jej.'},
    {zdanie:'Spotkaliśmy się z ___ w kawiarni. (one)', opcje:['nimi','nich','nim'], ok:0, wyjasnienie:'z + творительный мн.ч.: z nimi.'},
    {zdanie:'Powiedz ___ prawdę. (oni)', opcje:['ich','im','nim'], ok:1, wyjasnienie:'powiedzieć komu → дательный: im.'},
    {zdanie:'Bez ___ nie dam rady. (ty)', opcje:['cię','ciebie','tobie'], ok:1, wyjasnienie:'bez + родительный, после предлога длинная: bez ciebie.'},
  ]
};

KURS_LEKCJE.L10 = {
  tytul: 'Przymiotnik w przypadkach',
  ru: 'Прилагательные во всех падежах',
  cel: 'w nowym domu, z dobrą kawą, dla młodych ludzi. Прилагательное согласуется с существительным в роде, числе и падеже — и почти всегда предсказуемо.',
  teoria: [
    {t:'h', h:'Единственное число'},
    {t:'tab', head:['Падеж','мужской','женский','средний'], rows:[
      ['M.','nowy, polski','nowa, polska','nowe, polskie'],
      ['D.','nowego','nowej','nowego'],
      ['C.','nowemu','nowej','nowemu'],
      ['B.','nowy (вещь) / nowego (человек, животное)','nową','nowe'],
      ['N.','nowym','nową','nowym'],
      ['Msc.','nowym','nowej','nowym']]},
    {t:'h', h:'Множественное число'},
    {t:'tab', head:['Падеж','мужско-личные','остальные'], rows:[
      ['M.','nowi studenci, polscy turyści','nowe książki'],
      ['D.','nowych','nowych'],['C.','nowym','nowym'],
      ['B.','nowych (studentów)','nowe (książki)'],
      ['N.','nowymi','nowymi'],['Msc.','nowych','nowych']]},
    {t:'uwaga', h:'После k, g появляется <b>i</b>: polski → polskiego, polskim; drogi → drogiego. Мужско-личная форма мн.ч. с чередованием: dobry → <b>dobrzy</b>, miły → <b>mili</b>, polski → <b>polscy</b>, wysoki → <b>wysocy</b>, młody → <b>młodzi</b>, duży → <b>duzi</b>.'},
    {t:'pulapka', h:'Система почти как в русском, но женский род в родительном, дательном и предложном — <b>-ej</b>: w nowej szkole, dla starszej pani (в русском -ой). И мужско-личное мн.ч. — свои формы: <b>mili ludzie</b>, <b>nowi koledzy</b>.'},
    {t:'przyklady', items:[
      ['Mieszkam w starej kamienicy.','Живу в старом доме.'],
      ['Mam bardzo miłych sąsiadów.','У меня очень милые соседи.'],
      ['Rozmawiałem z nowym dyrektorem.','Я разговаривал с новым директором.']]},
  ],
  cwiczenia: [
    {zdanie:'Mieszkam w ___ (nowy) mieszkaniu.', ok:'nowym', wyjasnienie:'средний род, предложный: nowym.'},
    {zdanie:'Nie mam ___ (dobry) słownika.', ok:'dobrego', wyjasnienie:'отрицание → родительный: dobrego.'},
    {zdanie:'Rozmawiałem z ___ (miła) sprzedawczynią.', ok:'miłą', wyjasnienie:'женский, творительный: miłą.'},
    {zdanie:'To jest prezent dla ___ (młoda) pary.', ok:'młodej', wyjasnienie:'женский, родительный: młodej.'},
    {zdanie:'Ci ___ studenci są z Hiszpanii.', opcje:['nowe','nowi','nowych'], ok:1, wyjasnienie:'мужско-личное мн.ч.: nowi.'},
    {zdanie:'Lubię ___ muzykę.', opcje:['polska','polską','polskiej'], ok:1, wyjasnienie:'женский, винительный: polską.'},
    {zdanie:'Uczę się języka ___ (polski).', ok:'polskiego', wyjasnienie:'родительный, после k → i: polskiego.'},
    {zdanie:'Rozmawiamy o ___ (ciekawy) książce.', ok:'ciekawej', wyjasnienie:'женский, предложный: ciekawej.'},
    {zdanie:'Moi rodzice są bardzo ___ .', opcje:['mili','miłe','miłych'], ok:0, wyjasnienie:'мужско-личная группа: mili.'},
    {zdanie:'Kupiłem prezenty dla ___ (mały) dzieci.', ok:'małych', wyjasnienie:'родительный мн.ч.: małych.'},
    {zdanie:'Znam ___ lekarza.', opcje:['dobry','dobrego','dobrym'], ok:1, wyjasnienie:'одушевлённый, винительный = родительный: dobrego.'},
    {zdanie:'Kupiłem ___ samochód.', opcje:['nowy','nowego','nowym'], ok:0, wyjasnienie:'неодушевлённый, винительный = именительный: nowy.'},
    {zdanie:'Pracuję w ___ (duża) firmie.', ok:'dużej', wyjasnienie:'женский, предложный: dużej.'},
    {zdanie:'To są ___ ludzie.', opcje:['wysokie','wysocy','wysokich'], ok:1, wyjasnienie:'мужско-личное: wysocy (k → c).'},
    {zdanie:'Jedziemy z ___ (nowi) sąsiadami na grilla.', ok:'nowymi', wyjasnienie:'творительный мн.ч.: nowymi.'},
    {zdanie:'Dziękuję ___ (miły) pani za pomoc.', ok:'miłej', wyjasnienie:'дательный женского рода: miłej.'},
  ]
};

KURS_LEKCJE.L11 = {
  tytul: 'Czas teraźniejszy',
  ru: 'Настоящее время: спряжение',
  cel: 'Четыре модели спряжения покрывают почти все глаголы. Плюс десяток неправильных, без которых не обойтись: jestem, mam, idę, jadę, mogę, chcę, jem, wiem, biorę.',
  teoria: [
    {t:'tab', head:['Модель','ja · ty · on','my · wy · oni'], rows:[
      ['-ę / -esz','piszę · piszesz · pisze','piszemy · piszecie · piszą'],
      ['-ę / -isz','mówię · mówisz · mówi','mówimy · mówicie · mówią'],
      ['-am / -asz','czytam · czytasz · czyta','czytamy · czytacie · czytają'],
      ['-em / -esz','rozumiem · rozumiesz · rozumie','rozumiemy · rozumiecie · rozumieją']]},
    {t:'uwaga', h:'Глаголы на <b>-ować</b> → <b>-uję</b>: pracować → pracuję, pracujesz; kupować → kupuję. С «Pan / Pani» — 3-е лицо: <i>Czy pan wie? Co pani robi?</i> С «Państwo» — 3-е лицо мн.ч.: <i>Czy państwo mają rezerwację?</i>'},
    {t:'h', h:'Неправильные — выучи наизусть'},
    {t:'tab', head:['Глагол','ja · ty · oni'], rows:[
      ['być','jestem · jesteś · są'],['mieć','mam · masz · mają'],['iść','idę · idziesz · idą'],
      ['jechać','jadę · jedziesz · jadą'],['móc','mogę · możesz · mogą'],['chcieć','chcę · chcesz · chcą'],
      ['jeść','jem · jesz · jedzą'],['wiedzieć','wiem · wiesz · wiedzą'],['brać','biorę · bierzesz · biorą'],
      ['pić','piję · pijesz · piją'],['dawać','daję · dajesz · dają']]},
    {t:'pulapka', h:'Три «знаю»: <b>wiem</b> — знаю факт (wiem, gdzie on mieszka), <b>znam</b> — знаком с кем-то или чем-то (znam Marka, znam to miasto), <b>umiem</b> — умею (umiem pływać).'},
    {t:'przyklady', items:[
      ['Codziennie pracuję do siedemnastej.','Каждый день работаю до пяти вечера (до 17:00).'],
      ['Nie wiem, gdzie jest dworzec.','Не знаю, где вокзал.'],
      ['Znam dobrze to miasto.','Я хорошо знаю этот город.']]},
  ],
  cwiczenia: [
    {zdanie:'Codziennie ___ (pracować) do siedemnastej.', ok:'pracuję', wyjasnienie:'-ować → -uję.'},
    {zdanie:'Czy ty ___ (mówić) po angielsku?', ok:'mówisz', wyjasnienie:'mówić: mówię, mówisz.'},
    {zdanie:'Oni ___ (mieszkać) w Sopocie.', ok:'mieszkają', wyjasnienie:'-am / -asz: mieszkają.'},
    {zdanie:'Co pan ___ (robić) w weekend?', ok:'robi', wyjasnienie:'с «pan» — 3-е лицо: robi.'},
    {zdanie:'Jutro ___ (jechać — my) do Krakowa.', ok:'jedziemy', wyjasnienie:'jechać: jadę, jedziesz, jedziemy.'},
    {zdanie:'Nie ___ (wiedzieć — ja), gdzie jest dworzec.', ok:'wiem', wyjasnienie:'wiedzieć: wiem.'},
    {zdanie:'Dzieci ___ (jeść) obiad w szkole.', ok:'jedzą', wyjasnienie:'jeść: jem, jesz, jedzą.'},
    {zdanie:'___ tego pana, to mój sąsiad.', opcje:['Wiem','Znam','Umiem'], ok:1, wyjasnienie:'знаком с человеком — znam.'},
    {zdanie:'Nie ___ pływać.', opcje:['wiem','znam','umiem'], ok:2, wyjasnienie:'умение — umiem.'},
    {zdanie:'Czy ___ (móc) mi pan pomóc?', ok:'może', wyjasnienie:'móc, 3-е лицо: może.'},
    {zdanie:'Zawsze ___ (brać — ja) parasol do pracy.', ok:'biorę', wyjasnienie:'brać: biorę, bierzesz.'},
    {zdanie:'Wy ___ (chcieć) iść do kina?', ok:'chcecie', wyjasnienie:'chcieć: chcecie.'},
    {zdanie:'Ona ___ (pić) kawę bez cukru.', ok:'pije', wyjasnienie:'pić: piję, pijesz, pije.'},
    {zdanie:'Czy państwo ___ (mieć) rezerwację?', ok:'mają', wyjasnienie:'с «państwo» — 3-е лицо мн.ч.: mają.'},
    {zdanie:'Ja ___ (iść) na pocztę, a ty?', ok:'idę', wyjasnienie:'iść: idę.'},
    {zdanie:'Moi koledzy wszystko ___ (rozumieć) po polsku.', ok:'rozumieją', wyjasnienie:'-em / -esz: rozumieją.'},
  ]
};

KURS_LEKCJE.L12 = {
  tytul: 'Czas przeszły',
  ru: 'Прошедшее время',
  cel: 'byłem / byłam, poszliśmy, zjadły. Окончание зависит от лица, рода и от того, есть ли в группе мужчина.',
  teoria: [
    {t:'tab', head:['','мужской','женский','средний'], rows:[
      ['ja','byłem','byłam','—'],['ty','byłeś','byłaś','—'],['on, ona, ono','był','była','było']]},
    {t:'tab', head:['','мужско-личные','остальные'], rows:[
      ['my','byliśmy','byłyśmy'],['wy','byliście','byłyście'],['oni / one','byli','były']]},
    {t:'uwaga', h:'Группа с хотя бы одним мужчиной — <b>-li-</b> (byliśmy). Только женщины, дети, предметы — <b>-ły-</b> (byłyśmy, dzieci były). Норма ударения: <b>BY</b>liśmy, zro<b>BI</b>liśmy — третий слог с конца.'},
    {t:'h', h:'Чередования и неправильные'},
    {t:'tab', head:['Инфинитив','он · она · они (м.)'], rows:[
      ['mieć','miał · miała · mieli'],['chcieć','chciał · chciała · chcieli'],['wiedzieć','wiedział · wiedziała · wiedzieli'],
      ['iść','szedł · szła · szli'],['pójść','poszedł · poszła · poszli'],['móc','mógł · mogła · mogli'],
      ['jeść / zjeść','jadł · jadła · jedli'],['wziąć','wziął · wzięła · wzięli']]},
    {t:'pulapka', h:'В русском «мы были» — одна форма, в польском выбор <b>byliśmy / byłyśmy</b> зависит от состава группы. И <b>ł</b> произносится как английское w: był ≈ «быу».'},
    {t:'przyklady', items:[
      ['Wczoraj byłem z żoną w kinie.','Вчера я был с женой в кино.'],
      ['Dzieci bawiły się w parku.','Дети играли в парке.'],
      ['W sobotę poszliśmy na mecz.','В субботу мы пошли на матч.']]},
  ],
  cwiczenia: [
    {zdanie:'Wczoraj Marek ___ (być) w kinie.', ok:'był', wyjasnienie:'он: był.'},
    {zdanie:'Anna ___ (mieszkać) kiedyś w Krakowie.', ok:'mieszkała', wyjasnienie:'она: -ła.'},
    {zdanie:'W sobotę ___ (być — ja) z żoną na koncercie.', ok:'byłem', wyjasnienie:'я (мужчина): byłem.'},
    {zdanie:'Dzieci ___ (bawić się) w parku cały dzień.', ok:'bawiły się', wyjasnienie:'dzieci — не мужско-личная группа: bawiły się.'},
    {zdanie:'Moi koledzy ___ (pracować) wczoraj do późna.', ok:'pracowali', wyjasnienie:'мужчины: pracowali.'},
    {zdanie:'Ania i Kasia ___ w kinie.', opcje:['byli','były','było'], ok:1, wyjasnienie:'только женщины: były.'},
    {zdanie:'Piotr i Ania ___ w kinie.', opcje:['byli','były'], ok:0, wyjasnienie:'смешанная группа: byli.'},
    {zdanie:'Co ___ (robić — ty) wczoraj wieczorem, Tomku?', ok:'robiłeś', wyjasnienie:'ты (мужчина): -łeś.'},
    {zdanie:'Gdzie ___ (być — ty) w zeszłym tygodniu, Kasiu?', ok:'byłaś', wyjasnienie:'ты (женщина): -łaś.'},
    {zdanie:'Wczoraj z kolegami ___ (pójść — my) na mecz.', ok:'poszliśmy', wyjasnienie:'pójść: poszliśmy.'},
    {zdanie:'Kiedyś ___ (mieć — ja) psa, ale teraz mam kota.', ok:'miałem', wyjasnienie:'mieć: miałem (e → a).'},
    {zdanie:'Oni nie ___ , co powiedzieć.', opcje:['wiedzieli','wiedziały','wiedział'], ok:0, wyjasnienie:'oni (мужчины): wiedzieli.'},
    {zdanie:'Na śniadanie ___ (zjeść — ja) jajecznicę.', ok:'zjadłem', wyjasnienie:'zjeść: zjadłem.'},
    {zdanie:'Ona nie ___ (móc) przyjść, bo była chora.', ok:'mogła', wyjasnienie:'móc: mogła.'},
    {zdanie:'Dokąd ___ (iść — ty), kiedy cię spotkałem?', ok:'szedłeś', wyjasnienie:'iść: szedłem, szedłeś.'},
    {zdanie:'Wczoraj ___ na zakupach. (my — kobiety)', opcje:['byliśmy','byłyśmy'], ok:1, wyjasnienie:'только женщины: byłyśmy.'},
  ]
};

KURS_LEKCJE.L13 = {
  tytul: 'Aspekt: dokonany i niedokonany',
  ru: 'Вид глагола: совершенный и несовершенный',
  cel: 'Хорошая новость: система видов почти такая же, как в русском. Нужно выучить польские пары и пару отличий.',
  teoria: [
    {t:'tab', head:['Несовершенный (ndk)','Совершенный (dk)'], rows:[
      ['процесс, повторение, привычка','результат, одно законченное действие'],
      ['codziennie, często, zawsze, długo','wreszcie, nagle, już, w końcu'],
      ['настоящее: piszę','форма настоящего = будущее: napiszę (= напишу)'],
      ['прошедшее: pisałem cały dzień','прошедшее: napisałem list'],
      ['будущее: będę pisać','будущее: napiszę']]},
    {t:'h', h:'Как образуются пары'},
    {t:'tab', head:['Способ','Пары'], rows:[
      ['приставка','pisać — napisać, robić — zrobić, czytać — przeczytać, jeść — zjeść, pić — wypić, płacić — zapłacić, dzwonić — zadzwonić, gotować — ugotować'],
      ['смена суффикса','kupować — kupić, dawać — dać, otwierać — otworzyć, zamykać — zamknąć, wracać — wrócić, zaczynać — zacząć, pomagać — pomóc'],
      ['другой глагол','brać — wziąć, mówić — powiedzieć, oglądać — obejrzeć, widzieć — zobaczyć, kłaść — położyć']]},
    {t:'uwaga', h:'После <b>zaczynać / kończyć / przestać</b> — только несовершенный инфинитив: zaczynam pracować. Отрицательный приказ — обычно несовершенный: <b>Nie otwieraj!</b>, положительный — совершенный: <b>Otwórz!</b>'},
    {t:'przyklady', items:[
      ['Cały wieczór czytałem książkę.','Весь вечер читал книгу (процесс).'],
      ['Wreszcie przeczytałem tę książkę.','Наконец я прочитал эту книгу (результат).'],
      ['Kiedy jadłem obiad, zadzwoniła mama.','Когда я обедал, позвонила мама.']]},
  ],
  cwiczenia: [
    {zdanie:'Codziennie ___ kawę o ósmej.', opcje:['piję','wypiję'], ok:0, wyjasnienie:'привычка → несовершенный.'},
    {zdanie:'Wczoraj ___ list i wysłałem go.', opcje:['pisałem','napisałem'], ok:1, wyjasnienie:'результат → совершенный.'},
    {zdanie:'Kiedy byłem dzieckiem, często ___ do babci.', opcje:['jeździłem','pojechałem'], ok:0, wyjasnienie:'często — повторение → несовершенный.'},
    {zdanie:'Jutro ___ do ciebie po pracy.', opcje:['dzwonię','zadzwonię'], ok:1, wyjasnienie:'одно действие в будущем → совершенный.'},
    {zdanie:'Cały wieczór ___ telewizję.', opcje:['oglądałem','obejrzałem'], ok:0, wyjasnienie:'cały wieczór — процесс → несовершенный.'},
    {zdanie:'W końcu ___ klucze pod kanapą.', opcje:['szukałem','znalazłem'], ok:1, wyjasnienie:'результат поиска — znalazłem.'},
    {zdanie:'Zaczynam ___ o dziewiątej.', opcje:['pracować','popracować'], ok:0, wyjasnienie:'после zaczynać — несовершенный.'},
    {zdanie:'Nie ___ okna, jest zimno!', opcje:['otwieraj','otwórz'], ok:0, wyjasnienie:'отрицательный приказ — несовершенный.'},
    {zdanie:'___ okno, proszę, jest gorąco.', opcje:['Otwieraj','Otwórz'], ok:1, wyjasnienie:'одна просьба — совершенный.'},
    {zdanie:'Pary aspektowe: robić → ___', ok:'zrobić', wyjasnienie:'приставка z-.'},
    {zdanie:'Pary aspektowe: kupować → ___', ok:'kupić', wyjasnienie:'смена суффикса.'},
    {zdanie:'Pary aspektowe: brać → ___', ok:'wziąć', wyjasnienie:'другой глагол.'},
    {zdanie:'Pary aspektowe: mówić → ___', ok:'powiedzieć', wyjasnienie:'другой глагол.'},
    {zdanie:'Jak długo ___ ten raport?', opcje:['pisałeś','napisałeś'], ok:0, wyjasnienie:'jak długo — длительность → несовершенный.'},
    {zdanie:'Kiedy ___ obiad, zadzwoniła mama.', opcje:['jadłem','zjadłem'], ok:0, wyjasnienie:'фон, процесс → несовершенный.'},
    {zdanie:'Czy już ___ pracę domową?', opcje:['robiłeś','zrobiłeś'], ok:1, wyjasnienie:'już + результат → совершенный.'},
  ]
};

KURS_LEKCJE.L14 = {
  tytul: 'Czas przyszły',
  ru: 'Будущее время',
  cel: 'Простое будущее (pójdę, kupię) и сложное (będę pracować). Логика как в русском: «сделаю» и «буду делать».',
  teoria: [
    {t:'tab', head:['Вид','Как образуется','Пример'], rows:[
      ['совершенный','спряжение как в настоящем','zrobię, kupisz, pojedziemy, napiszą'],
      ['несовершенный','być + инфинитив','będę pracować, będziesz czytać'],
      ['несовершенный (вариант)','być + форма на -ł','będę pracował / pracowała']]},
    {t:'tab', head:['być','будущее'], rows:[
      ['ja · ty · on','będę · będziesz · będzie'],['my · wy · oni','będziemy · będziecie · będą']]},
    {t:'uwaga', h:'Вариант с инфинитивом проще — не нужно думать о роде. Модальные глаголы обычно с формой на -ł: <b>będę mógł</b>, <b>będę musiał</b>, <b>będę chciał</b>.'},
    {t:'h', h:'Маркеры будущего'},
    {t:'p', h:'jutro, pojutrze, za tydzień, w przyszłym tygodniu / miesiącu / roku, wkrótce, niedługo, od września.'},
    {t:'przyklady', items:[
      ['Jutro będę w pracy do szóstej.','Завтра буду на работе до шести.'],
      ['W przyszłym roku kupimy mieszkanie.','В следующем году купим квартиру.'],
      ['Od września będę pracować w nowej firmie.','С сентября буду работать в новой фирме.']]},
  ],
  cwiczenia: [
    {zdanie:'Jutro ___ (być — ja) w pracy do szóstej.', ok:'będę', wyjasnienie:'być в будущем: będę.'},
    {zdanie:'W przyszłym roku ___ (kupić — my) mieszkanie.', ok:'kupimy', wyjasnienie:'совершенный → простое будущее.'},
    {zdanie:'Wieczorem ___ (pójść — ja) na spacer.', ok:'pójdę', wyjasnienie:'pójść: pójdę.'},
    {zdanie:'Jutro cały dzień ___ mieszkanie.', opcje:['będę sprzątać','posprzątam','sprzątałem'], ok:0, wyjasnienie:'cały dzień — процесс → będę sprzątać.'},
    {zdanie:'Jutro rano ___ ci ten dokument.', opcje:['będę wysyłać','wyślę','wysłałem'], ok:1, wyjasnienie:'одно действие → wyślę.'},
    {zdanie:'Czy ___ (móc — ty) mi jutro pomóc?', ok:'będziesz mógł', alt:['będziesz mogła'], wyjasnienie:'móc в будущем: będziesz mógł.'},
    {zdanie:'Za tydzień ___ (pojechać — oni) na urlop.', ok:'pojadą', wyjasnienie:'pojechać: pojadą.'},
    {zdanie:'Kiedy ___ (skończyć — ty) ten projekt?', ok:'skończysz', wyjasnienie:'skończyć: skończysz.'},
    {zdanie:'Od września ___ (pracować — ja) w nowej firmie.', ok:'będę pracować', alt:['będę pracował','będę pracowała'], wyjasnienie:'регулярное действие → będę pracować.'},
    {zdanie:'Myślę, że jutro ___ (być) ładna pogoda.', ok:'będzie', wyjasnienie:'будущее być: będzie.'},
    {zdanie:'Obiecuję, że ___ do ciebie wieczorem.', opcje:['zadzwonię','dzwonię','dzwoniłem'], ok:0, wyjasnienie:'обещание одного действия → zadzwonię.'},
    {zdanie:'W sobotę ___ (spotkać się — my) z przyjaciółmi.', ok:'spotkamy się', wyjasnienie:'spotkać się: spotkamy się.'},
    {zdanie:'Pociąg ___ (przyjechać) o 17:20.', ok:'przyjedzie', wyjasnienie:'przyjechać: przyjedzie.'},
    {zdanie:'Nie wiem, czy ___ przyjść na twoje urodziny.', opcje:['będę mógł','mogę mógł','móc będę'], ok:0, wyjasnienie:'будущее модального: będę mógł.'},
    {zdanie:'Dzieci ___ (zjeść) obiad w szkole.', ok:'zjedzą', wyjasnienie:'zjeść: zjedzą.'},
    {zdanie:'Co ___ (robić — wy) w weekend?', ok:'będziecie robić', alt:['będziecie robili','będziecie robiły'], wyjasnienie:'несовершенный → będziecie robić.'},
  ]
};

KURS_LEKCJE.L15 = {
  tytul: 'Czasowniki ruchu',
  ru: 'Глаголы движения',
  cel: 'iść / chodzić, jechać / jeździć и приставки: przyjść, wyjść, wejść, dojechać. Польский строго различает «пешком» и «на транспорте».',
  teoria: [
    {t:'tab', head:['','сейчас, в одну сторону','регулярно, туда-обратно'], rows:[
      ['пешком','iść: idę, idziesz, idą','chodzić: chodzę, chodzisz, chodzą'],
      ['на транспорте','jechać: jadę, jedziesz, jadą','jeździć: jeżdżę, jeździsz, jeżdżą']]},
    {t:'pulapka', h:'В русском «иду в театр» можно сказать, даже если едешь на автобусе. В польском — нет: пешком <b>idę</b>, на чём-то <b>jadę</b>. «Ехать в отпуск» — <b>jechać na urlop</b>, «идти к врачу» — <b>iść do lekarza</b>.'},
    {t:'h', h:'Приставки (совершенный вид)'},
    {t:'tab', head:['Пешком','На транспорте','Значение'], rows:[
      ['przyjść','przyjechać','прийти / приехать'],['wyjść','wyjechać','выйти / уехать'],
      ['wejść','wjechać','войти / въехать'],['dojść','dojechać','дойти / доехать'],
      ['przejść','przejechać','перейти / проехать'],['odejść','odjechać','отойти / отъехать'],
      ['pójść','pojechać','пойти / поехать']]},
    {t:'uwaga', h:'Несовершенные пары: przychodzić / przyjeżdżać, wychodzić / wyjeżdżać, wchodzić / wjeżdżać. Прошедшее: <b>szedłem, szła, szli</b>; <b>poszedłem, poszła, poszli</b>.'},
    {t:'h', h:'Куда'},
    {t:'tab', head:['Предлог','Когда','Пример'], rows:[
      ['do + D.','города, здания, люди','do Krakowa, do domu, do lekarza'],
      ['na + B.','события, учреждения на «na»','na koncert, na pocztę, na dworzec'],
      ['nad + B.','к воде','nad morze, nad jezioro'],
      ['w + B.','в горы','w góry']]},
    {t:'przyklady', items:[
      ['Codziennie chodzę do pracy pieszo.','Каждый день хожу на работу пешком.'],
      ['Jutro jadę do Warszawy pociągiem.','Завтра еду в Варшаву на поезде.'],
      ['O której wyjdziesz z domu?','Во сколько выйдешь из дома?']]},
  ],
  cwiczenia: [
    {zdanie:'Codziennie ___ do pracy pieszo.', opcje:['idę','chodzę','jadę'], ok:1, wyjasnienie:'регулярно, пешком → chodzę.'},
    {zdanie:'Teraz ___ do sklepu, zaraz wracam.', opcje:['idę','chodzę'], ok:0, wyjasnienie:'сейчас, в одну сторону → idę.'},
    {zdanie:'Jutro ___ do Krakowa pociągiem.', opcje:['idę','chodzę','jadę'], ok:2, wyjasnienie:'на поезде → jadę.'},
    {zdanie:'Często ___ na rowerze nad morze.', opcje:['jedziemy','jeździmy'], ok:1, wyjasnienie:'często → jeździmy.'},
    {zdanie:'O której ___ (wyjść — ty) jutro z domu?', ok:'wyjdziesz', wyjasnienie:'wyjść: wyjdę, wyjdziesz.'},
    {zdanie:'Gość ___ (przyjść) o siódmej.', ok:'przyjdzie', wyjasnienie:'przyjść: przyjdzie.'},
    {zdanie:'Pociąg do Gdyni ___ (odjeżdżać) z peronu drugiego.', ok:'odjeżdża', wyjasnienie:'odjeżdżać: odjeżdża.'},
    {zdanie:'Przepraszam, jak ___ na dworzec piechotą?', opcje:['dojść','dojechać','wyjść'], ok:0, wyjasnienie:'пешком до цели → dojść.'},
    {zdanie:'Wczoraj ___ (wrócić — ja) do domu bardzo późno.', ok:'wróciłem', wyjasnienie:'wrócić: wróciłem.'},
    {zdanie:'Proszę ___ ! (в кабинет, вежливо)', opcje:['wejść','wejdź','wchodzić'], ok:0, wyjasnienie:'Proszę + инфинитив: Proszę wejść!'},
    {zdanie:'W zeszłym roku ___ (pojechać — my) nad morze.', ok:'pojechaliśmy', wyjasnienie:'pojechać: pojechaliśmy.'},
    {zdanie:'Ulicę trzeba ___ na zielonym świetle.', opcje:['przejść','przyjść','wejść'], ok:0, wyjasnienie:'przejść przez ulicę — перейти улицу.'},
    {zdanie:'Na urlop jedziemy ___ morze.', opcje:['do','na','nad'], ok:2, wyjasnienie:'к воде — nad.'},
    {zdanie:'Idę ___ lekarza.', opcje:['do','na','u'], ok:0, wyjasnienie:'к человеку — do.'},
    {zdanie:'Wieczorem idziemy ___ koncert.', opcje:['do','na','w'], ok:1, wyjasnienie:'на событие — na.'},
    {zdanie:'Kiedy ___ (przyjechać — ty) do Gdańska?', ok:'przyjedziesz', wyjasnienie:'przyjechać: przyjedziesz.'},
  ]
};

KURS_LEKCJE.L16 = {
  tytul: 'Przyimki i przypadki',
  ru: 'Предлоги и падежи',
  cel: 'Какой падеж после какого предлога. Задание VIII экзамена — вставить предлог; задание I — поставить слово после предлога в правильную форму.',
  teoria: [
    {t:'tab', head:['Падеж','Предлоги'], rows:[
      ['Dopełniacz','do, z (откуда), od, bez, dla, u, obok, koło, naprzeciwko, podczas, według, zamiast, oprócz, około'],
      ['Celownik','dzięki, przeciwko, wbrew'],
      ['Biernik','przez; na, w, nad, pod, przed, za, między — при движении (куда); za (через / за что); o (просить о); po (за чем)'],
      ['Narzędnik','z (с кем); nad, pod, przed, za, między — где'],
      ['Miejscownik','w, na, o, po, przy']]},
    {t:'h', h:'Предлоги с двумя падежами'},
    {t:'tab', head:['Предлог','Пример'], rows:[
      ['z','z pracy (D., откуда) · z kolegą (N., с кем)'],
      ['na','na poczcie (Msc., где) · na pocztę (B., куда) · na tydzień (B., на срок)'],
      ['w','w Gdańsku (Msc., где) · w środę (B., когда) · w góry (B., куда)'],
      ['za','za domem (N., где) · za tydzień (B., через) · dziękuję za pomoc (B.)'],
      ['po','po obiedzie (Msc., после) · po chleb (B., за чем)']]},
    {t:'h', h:'Время'},
    {t:'tab', head:['По-русски','По-польски'], rows:[
      ['в пять часов','o piątej'],['в среду','w środę'],['в октябре','w październiku'],
      ['через неделю','za tydzień'],['неделю назад','tydzień temu'],['в течение недели','przez tydzień'],
      ['на неделю','na tydzień'],['с понедельника до пятницы','od poniedziałku do piątku'],['после работы','po pracy']]},
    {t:'pulapka', h:'«Через неделю» — <b>za tydzień</b>, а не «przez tydzień» (это «в течение недели»). «За хлебом» — <b>po chleb</b>. «Неделю назад» — <b>tydzień temu</b>.'},
    {t:'przyklady', items:[
      ['Wrócę za godzinę.','Вернусь через час.'],
      ['Idę do sklepu po chleb.','Иду в магазин за хлебом.'],
      ['Byłem w Polsce dwa lata temu.','Я был в Польше два года назад.']]},
  ],
  cwiczenia: [
    {zdanie:'Wrócę ___ godzinę.', opcje:['przez','za','po'], ok:1, wyjasnienie:'через час — za godzinę.'},
    {zdanie:'Uczyłem się ___ cały wieczór.', opcje:['przez','za','na'], ok:0, wyjasnienie:'в течение — przez.'},
    {zdanie:'Byłem w Polsce dwa lata ___ .', opcje:['przed','temu','za'], ok:1, wyjasnienie:'назад — temu.'},
    {zdanie:'Spotkamy się ___ piątej.', opcje:['w','o','na'], ok:1, wyjasnienie:'время по часам — o piątej.'},
    {zdanie:'Idę do sklepu ___ chleb.', opcje:['za','po','dla'], ok:1, wyjasnienie:'за чем — po + B.'},
    {zdanie:'Kupiłem kwiaty ___ mamy na urodziny.', opcje:['do','dla','od'], ok:1, wyjasnienie:'для кого — dla + D.'},
    {zdanie:'Jadę na urlop ___ dwa tygodnie.', opcje:['przez','na','za'], ok:1, wyjasnienie:'на срок — na + B.'},
    {zdanie:'Mieszkam obok ___ .', opcje:['park','parku','parkiem'], ok:1, wyjasnienie:'obok + D.: parku.'},
    {zdanie:'Kot leży pod ___ .', opcje:['stół','stołem','stole'], ok:1, wyjasnienie:'где — pod + N.: stołem.'},
    {zdanie:'Kot wszedł pod ___ .', opcje:['stół','stołem','stole'], ok:0, wyjasnienie:'куда (движение) — pod + B.: stół.'},
    {zdanie:'Rozmawiałem ___ kolegą.', opcje:['z','od','do'], ok:0, wyjasnienie:'с кем — z + N.'},
    {zdanie:'Wracam ___ pracy o szóstej.', opcje:['z','od','do'], ok:0, wyjasnienie:'откуда — z + D.'},
    {zdanie:'Pracuję od poniedziałku ___ piątku.', opcje:['po','do','za'], ok:1, wyjasnienie:'od … do …'},
    {zdanie:'___ obiedzie idziemy na spacer.', opcje:['Przed','Po','Za'], ok:1, wyjasnienie:'po + Msc.: po obiedzie (przed требовал бы obiadem).'},
    {zdanie:'Dziękuję ___ zaproszenie!', opcje:['o','za','na'], ok:1, wyjasnienie:'dziękować za + B.'},
    {zdanie:'W ___ mam lekcję polskiego.', opcje:['środa','środę','środzie'], ok:1, wyjasnienie:'день недели — w + B.: w środę.'},
  ]
};

KURS_LEKCJE.L17 = {
  tytul: 'Zaimki dzierżawcze i „swój”',
  ru: 'Притяжательные местоимения и «swój»',
  cel: 'mój, twój, nasz склоняются как прилагательные; jego, jej, ich — никогда. И «swój» — когда владелец и подлежащее одно лицо.',
  teoria: [
    {t:'tab', head:['Чей','Склоняется?','Пример'], rows:[
      ['mój, twój, nasz, wasz','да, как прилагательное','mojego brata, w naszym domu, z twoją siostrą'],
      ['jego, jej, ich','нет, никогда','z jego bratem, w jej domu, dla ich dzieci'],
      ['Pana, Pani, Państwa (вежливо)','нет','Czy to Pana samochód?'],
      ['swój','да','Marek wziął swój telefon.']]},
    {t:'h', h:'Когда swój'},
    {t:'p', h:'Если владелец — подлежащее этого же предложения, в 3-м лице нужно <b>swój</b>: <i>Anna dzwoni do swojej mamy</i> (к своей). <i>Anna dzwoni do jej mamy</i> — к маме другой женщины. С ja / ty / my / wy можно и так, и так: <i>Wziąłem swój / mój telefon</i>.'},
    {t:'uwaga', h:'Указательное: ten, ta, to, ci, te; tamten — тот. Винительный женского рода — <b>tę</b>: <i>Lubię tę książkę</i>. Мужско-личное мн.ч. — <b>ci</b>: <i>Ci ludzie są mili</i>.'},
    {t:'pulapka', h:'Как в русском «свой». Главная ошибка — склонять jego / jej / ich: «z jejem», «dla jegom» — такого нет.'},
    {t:'przyklady', items:[
      ['To jest moja żona, Olga.','Это моя жена, Ольга.'],
      ['Każdy powinien dbać o swoje zdrowie.','Каждый должен заботиться о своём здоровье.'],
      ['Znasz jej męża?','Ты знаешь её мужа?']]},
  ],
  cwiczenia: [
    {zdanie:'To jest ___ siostra, Anna.', opcje:['mój','moja','moje'], ok:1, wyjasnienie:'siostra — женский: moja.'},
    {zdanie:'Nie znam ___ (twój) brata.', ok:'twojego', wyjasnienie:'отрицание + одушевлённый: twojego.'},
    {zdanie:'Marek zapomniał ___ kluczy.', opcje:['swoich','jego','swój'], ok:0, wyjasnienie:'владелец = подлежащее → swoich (zapomnieć + D.).'},
    {zdanie:'Anna dzwoni do ___ mamy.', opcje:['swojej','jej','swoja'], ok:0, wyjasnienie:'к своей маме → swojej.'},
    {zdanie:'Piotr pożyczył auto od Marka i jeździł ___ autem cały tydzień.', opcje:['swoim','jego'], ok:1, wyjasnienie:'машина Марка, не Петра → jego.'},
    {zdanie:'Państwo Nowakowie mieszkają w ___ (nasz) bloku.', ok:'naszym', wyjasnienie:'предложный: naszym.'},
    {zdanie:'Czy to jest ___ walizka, proszę pani?', opcje:['Pani','Pana','swoja'], ok:0, wyjasnienie:'вежливо к женщине: Pani.'},
    {zdanie:'Rozmawialiśmy o ___ planach. (my)', opcje:['naszych','nasze','naszymi'], ok:0, wyjasnienie:'o + Msc. мн.ч.: naszych.'},
    {zdanie:'Lubię ___ (ta) książkę.', ok:'tę', wyjasnienie:'винительный женского рода: tę.'},
    {zdanie:'Kto mieszka w ___ (ten) domu?', ok:'tym', wyjasnienie:'предложный: tym.'},
    {zdanie:'___ ludzie są z Ukrainy.', opcje:['Te','Ci','Tamte'], ok:1, wyjasnienie:'мужско-личное мн.ч.: ci.'},
    {zdanie:'Pojechałem na wakacje z ___ (moi) rodzicami.', ok:'moimi', wyjasnienie:'творительный мн.ч.: moimi. Со swój было бы «ze swoimi» — перед sw- предлог z становится ze.'},
    {zdanie:'Każdy powinien dbać o ___ zdrowie.', opcje:['swoje','jego','twoje'], ok:0, wyjasnienie:'владелец — «każdy» → swoje.'},
    {zdanie:'Znasz ___ (jej) męża?', ok:'jej', wyjasnienie:'jej не склоняется.'},
    {zdanie:'Spotkałem ___ (twoja) siostrę w sklepie.', ok:'twoją', wyjasnienie:'винительный женского рода: twoją.'},
    {zdanie:'Dzieci bawią się ___ zabawkami.', opcje:['swoimi','ich','swoje'], ok:0, wyjasnienie:'свои игрушки (владелец — dzieci) → swoimi.'},
  ]
};

KURS_LEKCJE.L18 = {
  tytul: 'Liczebniki: liczby, daty, godziny',
  ru: 'Числительные, даты, время',
  cel: 'dwie kobiety, czterej studenci, pięciu mężczyzn; piątego grudnia; o wpół do szóstej. Числа нужны в любом задании: цены, время, даты, адреса.',
  teoria: [
    {t:'tab', head:['Число','мужско-личные','остальные'], rows:[
      ['2','dwaj panowie = dwóch panów','dwa domy, dwa okna · dwie kobiety'],
      ['3, 4','trzej / czterej studenci = trzech / czterech studentów','trzy, cztery książki'],
      ['5+','pięciu mężczyzn (+ D. мн.ч.)','pięć kobiet (+ D. мн.ч.)']]},
    {t:'uwaga', h:'С формой на <b>-u / -ch</b> (pięciu, czterech) и с 5+ глагол в 3-м лице ед.ч., в прошедшем — средний род: <i>Pięciu studentów przyszło. Pięć osób czeka.</i> Собирательные для детей: <b>dwoje, troje dzieci</b>.'},
    {t:'h', h:'Порядковые и даты'},
    {t:'p', h:'pierwszy, drugi, trzeci, czwarty, piąty, szósty, siódmy, ósmy, dziewiąty, dziesiąty, jedenasty, dwunasty… dwudziesty, trzydziesty. Склоняются как прилагательные.'},
    {t:'tab', head:['Вопрос','Ответ'], rows:[
      ['Który jest dzisiaj?','Dzisiaj jest <b>piąty</b> grudnia. (именительный)'],
      ['Kiedy jest egzamin?','Egzamin jest <b>piątego</b> grudnia. (родительный)'],
      ['W którym roku?','w dwa tysiące dwudziestym szóstym roku']]},
    {t:'h', h:'Который час'},
    {t:'tab', head:['Время','Разговорно','Официально'], rows:[
      ['8:00','ósma · o ósmej','ósma zero zero'],
      ['5:15','piętnaście po piątej','piąta piętnaście'],
      ['5:30','wpół do szóstej','piąta trzydzieści'],
      ['5:45','za piętnaście szósta','piąta czterdzieści pięć'],
      ['17:30','—','siedemnasta trzydzieści']]},
    {t:'pulapka', h:'«Пол шестого» — <b>wpół do szóstej</b>, логика как в русском. Деньги: 1 złoty, 2–4 <b>złote</b>, 5+ <b>złotych</b>. Годы: 1 rok, 2–4 <b>lata</b>, 5+ <b>lat</b>.'},
  ],
  cwiczenia: [
    {zdanie:'Mam ___ siostry.', opcje:['dwa','dwie','dwóch'], ok:1, wyjasnienie:'женский род: dwie.'},
    {zdanie:'W pokoju są ___ okna.', opcje:['dwa','dwie','dwaj'], ok:0, wyjasnienie:'средний род: dwa.'},
    {zdanie:'Przyszło ___ studentów.', opcje:['cztery','czterech','czterej'], ok:1, wyjasnienie:'с родительным — czterech (и глагол в ед.ч.).'},
    {zdanie:'___ studenci czekają na profesora.', opcje:['Cztery','Czterej','Czterech'], ok:1, wyjasnienie:'с именительным мн.ч. — czterej.'},
    {zdanie:'Na spotkaniu było pięciu ___ (mężczyzna).', ok:'mężczyzn', wyjasnienie:'5+ → родительный мн.ч.: mężczyzn.'},
    {zdanie:'Pięć kobiet ___ na autobus.', opcje:['czeka','czekają','czekało'], ok:0, wyjasnienie:'с 5+ глагол в ед.ч.: czeka.'},
    {zdanie:'Egzamin jest ___ (5) grudnia.', ok:'piątego', wyjasnienie:'«когда» — родительный: piątego.'},
    {zdanie:'Dzisiaj jest ___ października.', opcje:['szósty','szóstego','szóstym'], ok:0, wyjasnienie:'«какое сегодня» — именительный: szósty.'},
    {zdanie:'Spotkajmy się o ___ . (8:00)', opcje:['ósma','ósmej','ósmą'], ok:1, wyjasnienie:'o + Msc.: o ósmej.'},
    {zdanie:'Jest wpół do ___ . (5:30)', opcje:['piątej','szóstej','piąta'], ok:1, wyjasnienie:'5:30 — wpół do szóstej.'},
    {zdanie:'To kosztuje dwa ___ (złoty).', ok:'złote', wyjasnienie:'2–4 → złote.'},
    {zdanie:'Mieszkam na ___ (3) piętrze.', ok:'trzecim', wyjasnienie:'na + Msc.: trzecim.'},
    {zdanie:'Mam ___ dzieci: syna i córkę.', opcje:['dwa','dwoje','dwóch'], ok:1, wyjasnienie:'дети — собирательное: dwoje.'},
    {zdanie:'Pociąg odjeżdża o siedemnastej ___ . (17:30)', opcje:['trzydzieści','trzydziestej','trzydzieście'], ok:0, wyjasnienie:'минуты — количественное: trzydzieści.'},
    {zdanie:'Ten film ma już dwadzieścia ___ (rok).', ok:'lat', wyjasnienie:'20 → lat.'},
    {zdanie:'Urodziłem się ___ (12) maja.', ok:'dwunastego', wyjasnienie:'«когда» — родительный: dwunastego.'},
  ]
};

KURS_LEKCJE.L19 = {
  tytul: 'Tryb rozkazujący',
  ru: 'Повелительное наклонение',
  cel: 'Weź! Napiszcie! Zróbmy! Niech pan usiądzie! Proszę mówić wolniej. Просьбы, советы, инструкции — в устной ситуации и в письме.',
  teoria: [
    {t:'p', h:'Основа — 3-е лицо настоящего (или будущего у совершенного вида): czyta → <b>czytaj</b>, robi → <b>rób</b>, pisze → <b>pisz</b>, zrobi → <b>zrób</b>, pomoże → <b>pomóż</b>.'},
    {t:'tab', head:['Кому','Окончание','Пример'], rows:[
      ['ty','—','czytaj, zrób, weź'],['my (давай)','-my','czytajmy, zróbmy'],['wy','-cie','czytajcie, zróbcie'],
      ['он / они','niech + 3-е лицо','niech on przyjdzie, niech oni poczekają'],
      ['Pan / Pani (вежливо)','niech + 3-е лицо или Proszę + инфинитив','Niech pan usiądzie. Proszę usiąść.']]},
    {t:'tab', head:['Инфинитив','Повелительное'], rows:[
      ['być','bądź, bądźcie'],['mieć','miej'],['jeść','jedz'],['iść','idź'],['przyjść','przyjdź'],
      ['wziąć','weź'],['dać','daj'],['pomóc','pomóż'],['powiedzieć','powiedz'],['spać','śpij']]},
    {t:'uwaga', h:'Запрет — обычно несовершенный вид: <b>Nie otwieraj! Nie mów!</b> Исключение — предостережения: <b>Nie zapomnij! Nie spóźnij się!</b>'},
    {t:'pulapka', h:'«Давай сделаем» — одно слово: <b>zróbmy</b>. Вежливая просьба к незнакомому — не повелительное, а <b>Proszę + инфинитив</b>: «Proszę poczekać», «Proszę mówić wolniej».'},
    {t:'przyklady', items:[
      ['Proszę mówić wolniej, nie rozumiem.','Говорите, пожалуйста, медленнее, я не понимаю.'],
      ['Weź parasol, będzie padać.','Возьми зонт, будет дождь.'],
      ['Niech pan chwilę poczeka.','Подождите минутку.']]},
  ],
  cwiczenia: [
    {zdanie:'___ (czytać — ty) głośno!', ok:'Czytaj', wyjasnienie:'czyta → czytaj.'},
    {zdanie:'___ (pisać — wy) wyraźnie!', ok:'Piszcie', wyjasnienie:'pisze → pisz → piszcie.'},
    {zdanie:'___ (zrobić — my) przerwę na kawę!', ok:'Zróbmy', wyjasnienie:'zrobi → zrób → zróbmy.'},
    {zdanie:'___ mi, proszę, ten długopis.', opcje:['Daj','Dać','Dajesz'], ok:0, wyjasnienie:'dać → daj.'},
    {zdanie:'Proszę ___ ! (садитесь, вежливо)', opcje:['siadaj','usiąść','usiądź'], ok:1, wyjasnienie:'Proszę + инфинитив.'},
    {zdanie:'Niech pan ___ chwilę.', opcje:['poczeka','poczekaj','czekać'], ok:0, wyjasnienie:'niech + 3-е лицо: poczeka.'},
    {zdanie:'Nie ___ tak głośno, dzieci śpią!', opcje:['mów','powiedz'], ok:0, wyjasnienie:'запрет → несовершенный: nie mów.'},
    {zdanie:'___ (pomóc — ty) mi, proszę!', ok:'Pomóż', wyjasnienie:'pomoże → pomóż.'},
    {zdanie:'___ (wziąć — ty) parasol, będzie padać.', ok:'Weź', wyjasnienie:'неправильная форма: weź.'},
    {zdanie:'___ cierpliwy!', opcje:['Bądź','Być','Jesteś'], ok:0, wyjasnienie:'być → bądź.'},
    {zdanie:'___ (przyjść — wy) do nas w sobotę!', ok:'Przyjdźcie', wyjasnienie:'przyjdzie → przyjdź → przyjdźcie.'},
    {zdanie:'Niech oni ___ jutro.', opcje:['przyjdą','przyjdźcie','przychodzić'], ok:0, wyjasnienie:'niech + 3-е лицо мн.ч.: przyjdą.'},
    {zdanie:'Nie ___ się! (опоздать)', opcje:['spóźnij','spóźniaj'], ok:0, wyjasnienie:'предостережение → совершенный: nie spóźnij się.'},
    {zdanie:'___ (jeść — ty) więcej warzyw!', ok:'Jedz', wyjasnienie:'jeść → jedz.'},
    {zdanie:'Proszę ___ wolniej, nie rozumiem.', opcje:['mówić','mów','mówi'], ok:0, wyjasnienie:'Proszę + инфинитив: mówić.'},
    {zdanie:'___ (otworzyć — ty) okno, proszę.', ok:'Otwórz', wyjasnienie:'otworzy → otwórz.'},
  ]
};

KURS_LEKCJE.L20 = {
  tytul: 'Tryb przypuszczający',
  ru: 'Условное наклонение',
  cel: 'Chciałbym…, Czy mógłby pan…?, Gdybym miał czas, pojechałbym… Вежливые просьбы, мечты, советы и нереальные условия.',
  teoria: [
    {t:'p', h:'Форма на <b>-ł</b> (как в прошедшем) + <b>by</b> + личное окончание.'},
    {t:'tab', head:['','мужской','женский'], rows:[
      ['ja','zrobiłbym','zrobiłabym'],['ty','zrobiłbyś','zrobiłabyś'],['on / ona','zrobiłby','zrobiłaby'],
      ['my','zrobilibyśmy','zrobiłybyśmy'],['wy','zrobilibyście','zrobiłybyście'],['oni / one','zrobiliby','zrobiłyby']]},
    {t:'h', h:'Зачем нужно'},
    {t:'tab', head:['Функция','Пример'], rows:[
      ['вежливая просьба','Czy mógłby mi pan pomóc? Chciałbym zapłacić kartą.'],
      ['желание, мечта','Chętnie pojechałbym do Włoch.'],
      ['совет','Na twoim miejscu poszedłbym do lekarza.'],
      ['нереальное условие (gdyby)','Gdybym miał czas, pojechałbym nad morze.']]},
    {t:'h', h:'jeśli или gdyby'},
    {t:'tab', head:['Реальное — jeśli','Нереальное — gdyby'], rows:[
      ['Jeśli będzie ładnie, pójdziemy na spacer.','Gdyby było ładnie, poszlibyśmy na spacer.'],
      ['будущее, это возможно','это не так сейчас, мечта или гипотеза']]},
    {t:'uwaga', h:'После gdyby — форма на -ł с окончанием: <b>gdybym wiedział</b>, <b>gdybyś miał</b>, <b>gdybyśmy mieli</b>. Норма ударения: ударение остаётся там же, где в zrobił / zrobiła / zrobili — <b>ZRO</b>biłbym, zro<b>BI</b>łabym, zro<b>BI</b>libyśmy. В разговоре часто слышно zro<b>BIŁ</b>bym — на экзамене это не ошибка.'},
    {t:'pulapka', h:'В русском «бы» — отдельное слово: «сделал бы». В польском оно сливается с окончанием лица: <b>zrobiłbym, zrobiłabyś</b>. «Если бы» — одно слово <b>gdyby</b>.'},
  ],
  cwiczenia: [
    {zdanie:'___ kawę z mlekiem, proszę.', opcje:['Chcę bym','Chciałbym','Chciałby'], ok:1, wyjasnienie:'я (мужчина): chciałbym.'},
    {zdanie:'Czy ___ mi pan pomóc?', opcje:['mógłby','może by','mógłbym'], ok:0, wyjasnienie:'pan → 3-е лицо: mógłby.'},
    {zdanie:'Gdybym miał więcej pieniędzy, ___ dom.', opcje:['kupię','kupiłbym','kupowałem'], ok:1, wyjasnienie:'нереальное условие → kupiłbym.'},
    {zdanie:'Gdybyś miał czas, ___ (pójść — ty) z nami do kina?', ok:'poszedłbyś', wyjasnienie:'pójść → poszedł + byś.'},
    {zdanie:'Gdyby była ładna pogoda, ___ na spacer.', opcje:['pójdziemy','poszlibyśmy','poszliśmy'], ok:1, wyjasnienie:'нереальное → poszlibyśmy.'},
    {zdanie:'___ będzie padać, zostaniemy w domu.', opcje:['Gdyby','Jeśli','Żeby'], ok:1, wyjasnienie:'реальное будущее → jeśli.'},
    {zdanie:'Na twoim miejscu ___ (zadzwonić — ja) do lekarza.', ok:'zadzwoniłbym', wyjasnienie:'совет: zadzwoniłbym.'},
    {zdanie:'Czy ___ otworzyć okno? (к женщине на «ты»)', opcje:['mogłabyś','mógłbyś','mogłaby'], ok:0, wyjasnienie:'ты (женщина): mogłabyś.'},
    {zdanie:'Chętnie ___ (pojechać — my) w góry.', ok:'pojechalibyśmy', wyjasnienie:'мы: pojechalibyśmy.'},
    {zdanie:'Gdybym ___ , pomógłbym ci.', opcje:['wiem','wiedziałem','wiedział'], ok:2, wyjasnienie:'после gdybym — чистая форма на -ł: wiedział.'},
    {zdanie:'Czy państwo ___ (chcieć) coś do picia?', ok:'chcieliby', wyjasnienie:'państwo → 3-е лицо мн.ч.: chcieliby.'},
    {zdanie:'Co byś zrobił, gdybyś ___ milion złotych?', opcje:['wygrał','wygrałeś','wygrasz'], ok:0, wyjasnienie:'gdybyś + форма на -ł: wygrał.'},
    {zdanie:'Ona ___ (chcieć) mieszkać nad morzem.', ok:'chciałaby', wyjasnienie:'она: chciałaby.'},
    {zdanie:'Gdyby nie padało, ___ grilla.', opcje:['zrobimy','zrobilibyśmy','zrobiliśmy'], ok:1, wyjasnienie:'нереальное → zrobilibyśmy.'},
    {zdanie:'Gdybyście mieszkali w Gdańsku, ___ (chodzić — wy) nad morze codziennie.', ok:'chodzilibyście', wyjasnienie:'вы: chodzilibyście.'},
    {zdanie:'Czy ___ pani powtórzyć?', opcje:['mogłaby','mógłby','może by'], ok:0, wyjasnienie:'pani → mogłaby.'},
  ]
};

KURS_LEKCJE.L21 = {
  tytul: 'Stopniowanie przymiotników i przysłówków',
  ru: 'Степени сравнения',
  cel: 'lepszy, najlepszy, bardziej, więcej, coraz lepiej, im… tym… Задание III экзамена целиком об этом.',
  teoria: [
    {t:'h', h:'Прилагательные'},
    {t:'tab', head:['Как','Пример'], rows:[
      ['-szy','nowy → nowszy → najnowszy, tani → tańszy, młody → młodszy'],
      ['-ejszy (после групп согласных)','ładny → ładniejszy, trudny → trudniejszy, ciepły → cieplejszy'],
      ['с чередованием','wysoki → wyższy, długi → dłuższy, drogi → droższy, lekki → lżejszy, krótki → krótszy'],
      ['другая основа','dobry → lepszy, zły → gorszy, duży → większy, mały → mniejszy'],
      ['описательная','bardziej / najbardziej zmęczony, mniej ważny']]},
    {t:'h', h:'Наречия'},
    {t:'tab', head:['Основа','Сравн.','Превосх.'], rows:[
      ['szybko','szybciej','najszybciej'],['dobrze','lepiej','najlepiej'],['źle','gorzej','najgorzej'],
      ['dużo','więcej','najwięcej'],['mało','mniej','najmniej'],['często','częściej','najczęściej'],
      ['późno','później','najpóźniej'],['blisko','bliżej','najbliżej'],['drogo','drożej','najdrożej']]},
    {t:'h', h:'Сравнение'},
    {t:'p', h:'<b>niż</b> + именительный: <i>Jestem starszy niż brat</i>. <b>od</b> + родительный: <i>Jestem starszy od brata</i>. Превосходная: <i>najlepszy w klasie, najwyższy z nas</i>. <b>coraz</b> + сравнительная — «всё более»: coraz lepiej. <b>im…, tym…</b> — «чем…, тем…»: <i>Im więcej się uczę, tym lepiej mówię</i>.'},
    {t:'pulapka', h:'«Лучше» бывает прилагательным и наречием: «план лучше» — <b>plan jest lepszy</b>, «говоришь лучше» — <b>mówisz lepiej</b>. «Больше времени» — <b>więcej czasu</b> (количество), а не «większy».'},
  ],
  cwiczenia: [
    {zdanie:'Mój brat jest ___ ode mnie.', opcje:['starszy','starszym','najstarszy'], ok:0, wyjasnienie:'сравнение с od → сравнительная: starszy.'},
    {zdanie:'Ten samochód jest ___ (drogi) niż tamten.', ok:'droższy', wyjasnienie:'drogi → droższy.'},
    {zdanie:'To ___ restauracja w mieście.', opcje:['lepsza','najlepsza','dobra'], ok:1, wyjasnienie:'«w mieście» → превосходная.'},
    {zdanie:'Dziś jest ___ (ciepło) niż wczoraj.', ok:'cieplej', wyjasnienie:'наречие: cieplej.'},
    {zdanie:'Mówisz po polsku coraz ___ .', opcje:['lepszy','lepiej','dobrze'], ok:1, wyjasnienie:'как говоришь → наречие: lepiej.'},
    {zdanie:'Gdańsk jest ___ (duży) od Sopotu.', ok:'większy', wyjasnienie:'duży → większy.'},
    {zdanie:'Mam teraz ___ czasu niż kiedyś.', opcje:['mniej','mniejszy','najmniej'], ok:0, wyjasnienie:'количество → mniej.'},
    {zdanie:'To było ___ (trudny) zadanie na egzaminie.', ok:'najtrudniejsze', wyjasnienie:'превосходная, средний род.'},
    {zdanie:'Im dłużej się uczę, ___ lepiej rozumiem.', opcje:['tym','tak','to'], ok:0, wyjasnienie:'im…, tym…'},
    {zdanie:'Ten film jest ___ interesujący niż książka.', opcje:['bardziej','więcej','lepiej'], ok:0, wyjasnienie:'длинное прилагательное → bardziej.'},
    {zdanie:'Pociąg jedzie ___ (szybko) niż autobus.', ok:'szybciej', wyjasnienie:'szybko → szybciej.'},
    {zdanie:'Kto jest ___ w waszej rodzinie?', opcje:['wysoki','wyższy','najwyższy'], ok:2, wyjasnienie:'«в семье» → превосходная.'},
    {zdanie:'Mieszkać w centrum jest ___ (drogo) niż na obrzeżach.', ok:'drożej', wyjasnienie:'наречие: drożej.'},
    {zdanie:'Moja siostra śpiewa ___ niż ja.', opcje:['gorzej','gorsza','zły'], ok:0, wyjasnienie:'как поёт → наречие: gorzej.'},
    {zdanie:'Jutro przyjdę trochę ___ (późno).', ok:'później', wyjasnienie:'późno → później.'},
    {zdanie:'Zimą dni są ___ niż latem.', opcje:['krótkie','krótsze','najkrótsze'], ok:1, wyjasnienie:'сравнение с niż → krótsze.'},
  ]
};

KURS_LEKCJE.L22 = {
  tytul: 'Kto, co, nikt, nic, który',
  ru: 'Вопросительные, неопределённые и отрицательные местоимения',
  cel: 'Z kim? O czym? Czyj? Nikt nie przyszedł. Nic nie wiem. Kobieta, którą znam… Местоимения во всех падежах и двойное отрицание.',
  teoria: [
    {t:'tab', head:['Падеж','kto','co','nikt','nic'], rows:[
      ['M.','kto','co','nikt','nic'],['D.','kogo','czego','nikogo','niczego'],['C.','komu','czemu','nikomu','niczemu'],
      ['B.','kogo','co','nikogo','nic'],['N.','kim','czym','nikim','niczym'],['Msc.','o kim','o czym','o nikim','o niczym']]},
    {t:'tab', head:['Вопрос','Значение'], rows:[
      ['jaki, jaka, jakie','какой (качество): Jaki kolor lubisz?'],['który','который (выбор): Który autobus jedzie do centrum?'],
      ['czyj, czyja, czyje','чей: Czyj to telefon?'],['ile','сколько + D.: Ile masz lat? Ile osób przyjdzie?']]},
    {t:'h', h:'Неопределённые и отрицательные'},
    {t:'tab', head:['Неопределённые','Отрицательные (всегда с nie!)'], rows:[
      ['ktoś — кто-то','nikt — никто: Nikt nie dzwonił.'],['coś — что-то','nic — ничего: Nic nie wiem.'],
      ['jakiś — какой-то','żaden — никакой: Nie mam żadnych pytań.'],['gdzieś, kiedyś','nigdzie, nigdy: Nigdy nie byłem w Rzymie.']]},
    {t:'h', h:'który в придаточном'},
    {t:'p', h:'Род и число — по существительному, падеж — по роли в придаточном: <i>Kobieta, <b>którą</b> widzisz</i> (видишь кого — B.), <i>dom, w <b>którym</b> mieszkam</i>, <i>mężczyzna, <b>któremu</b> dałem klucze</i>. Перед który всегда запятая.'},
    {t:'pulapka', h:'Двойное отрицание как в русском: <b>Nikt nic nie wie</b>. «Нет никого» — <b>Nie ma nikogo</b> (родительный). «Ничего страшного» — <b>Nic się nie stało</b>.'},
  ],
  cwiczenia: [
    {zdanie:'___ nie przyszedł na spotkanie.', opcje:['Ktoś','Nikt','Kto'], ok:1, wyjasnienie:'с nie → nikt.'},
    {zdanie:'Nic ___ wiem.', opcje:['nie','tak','już'], ok:0, wyjasnienie:'двойное отрицание: nic nie wiem.'},
    {zdanie:'Czy ___ dzwonił do mnie?', opcje:['nikt','ktoś','kogo'], ok:1, wyjasnienie:'кто-то → ktoś.'},
    {zdanie:'Z ___ rozmawiałeś?', opcje:['kto','kim','kogo'], ok:1, wyjasnienie:'z + N.: z kim.'},
    {zdanie:'O ___ myślisz?', opcje:['co','czym','czego'], ok:1, wyjasnienie:'o + Msc.: o czym.'},
    {zdanie:'___ jest ten samochód? — Marka.', opcje:['Czyj','Jaki','Który'], ok:0, wyjasnienie:'чей → czyj.'},
    {zdanie:'___ kolor lubisz najbardziej?', opcje:['Jaki','Kto','Czyj'], ok:0, wyjasnienie:'какой (качество) → jaki.'},
    {zdanie:'Nigdy ___ w Rzymie.', opcje:['byłem','nie byłem'], ok:1, wyjasnienie:'nigdy требует nie.'},
    {zdanie:'Nie znam tu ___ (nikt).', ok:'nikogo', wyjasnienie:'отрицание → родительный: nikogo.'},
    {zdanie:'Kobieta, ___ widzisz, to moja szefowa.', opcje:['która','którą','której'], ok:1, wyjasnienie:'widzisz kogo → B.: którą.'},
    {zdanie:'To jest dom, w ___ mieszkam.', opcje:['który','którym','którego'], ok:1, wyjasnienie:'w + Msc.: w którym.'},
    {zdanie:'Mężczyzna, ___ dałem klucze, to sąsiad.', opcje:['który','któremu','którego'], ok:1, wyjasnienie:'dać komu → C.: któremu.'},
    {zdanie:'Nie mam ___ pytań.', opcje:['żadne','żadnych','nic'], ok:1, wyjasnienie:'отрицание → родительный мн.ч.: żadnych.'},
    {zdanie:'Kogo szukasz? — ___ (nikt), tylko się rozglądam.', ok:'Nikogo', wyjasnienie:'szukać + D.: nikogo.'},
    {zdanie:'Chcę ci ___ powiedzieć.', opcje:['coś','nic','cokolwiek'], ok:0, wyjasnienie:'что-то → coś.'},
    {zdanie:'Ludzie, ___ poznałem w Gdańsku, są bardzo mili.', opcje:['którzy','których','które'], ok:1, wyjasnienie:'poznałem kogo → B. мужско-личный: których.'},
  ]
};

KURS_LEKCJE.L23 = {
  tytul: 'Zdania złożone i spójniki',
  ru: 'Сложные предложения и союзы',
  cel: 'że, żeby, bo, ponieważ, chociaż, kiedy, zanim, jeśli, więc, dlatego, czyli. Задание II экзамена — союзы, а в письме связные предложения дают баллы за «средства языка».',
  teoria: [
    {t:'h', h:'Сочинительные — равные части'},
    {t:'tab', head:['Союз','Значение','Пример'], rows:[
      ['i, oraz, a także','и, а также','Kupiłem chleb oraz masło.'],
      ['a','а (сопоставление)','Lubię góry, a żona woli morze.'],
      ['ale, jednak','но, однако','Chciałem przyjść, ale nie mogłem.'],
      ['albo, lub','или','Przyjdę w poniedziałek albo we wtorek.'],
      ['czy','или (в вопросе-выборе)','Kawa czy herbata?'],
      ['więc, dlatego','поэтому','Byłem zmęczony, więc poszedłem spać.'],
      ['czyli','то есть','Wracam w piątek, czyli za trzy dni.']]},
    {t:'h', h:'Подчинительные — главная + придаточная'},
    {t:'tab', head:['Союз','Значение','Пример'], rows:[
      ['że','что','Myślę, że masz rację.'],
      ['żeby','чтобы','Uczę się, żeby zdać egzamin.'],
      ['bo / ponieważ / dlatego że','потому что','Nie przyszedłem, bo byłem chory.'],
      ['kiedy, gdy','когда','Kiedy byłem dzieckiem, mieszkałem nad morzem.'],
      ['zanim','прежде чем','Zanim wyjdziesz, zamknij okno.'],
      ['chociaż, mimo że','хотя','Chociaż padało, poszliśmy na spacer.'],
      ['jeśli / jeżeli … (to)','если','Jeśli będzie ładnie, to pojedziemy nad morze.']]},
    {t:'uwaga', h:'<b>Запятая перед каждым подчинительным союзом</b>: że, żeby, bo, ponieważ, który, kiedy, chociaż, jeśli, gdyby. На письме её отсутствие снимает баллы за правильность. Перед одиночными i, oraz, albo, lub запятой нет.'},
    {t:'pulapka', h:'«Хочу, чтобы ты пришёл» — <b>Chcę, żebyś przyszedł</b>: если подлежащие разные, żeby получает окончание лица и форму на -ł. <b>Bo</b> — разговорное и не начинает предложение; <b>ponieważ</b> может стоять в начале.'},
  ],
  cwiczenia: [
    {zdanie:'Uczę się polskiego, ___ zdać egzamin.', opcje:['że','żeby','bo'], ok:1, wyjasnienie:'цель → żeby.'},
    {zdanie:'Myślę, ___ masz rację.', opcje:['że','żeby','który'], ok:0, wyjasnienie:'мнение → że.'},
    {zdanie:'Nie poszedłem do pracy, ___ byłem chory.', opcje:['bo','żeby','ale'], ok:0, wyjasnienie:'причина → bo.'},
    {zdanie:'___ padał deszcz, poszliśmy na spacer.', opcje:['Chociaż','Ponieważ','Jeśli'], ok:0, wyjasnienie:'уступка → chociaż.'},
    {zdanie:'Chcesz kawę ___ herbatę?', opcje:['albo','czy','lub'], ok:1, wyjasnienie:'вопрос-выбор → czy.'},
    {zdanie:'___ będzie ładna pogoda, pojedziemy nad morze.', opcje:['Gdyby','Jeśli','Żeby'], ok:1, wyjasnienie:'реальное условие → jeśli.'},
    {zdanie:'Mama prosi, ___ wrócił przed dziesiątą.', opcje:['żebym','że','żeby'], ok:0, wyjasnienie:'разные подлежащие: żebym wrócił.'},
    {zdanie:'Byłem zmęczony, ___ wcześnie poszedłem spać.', opcje:['więc','ale','bo'], ok:0, wyjasnienie:'следствие → więc.'},
    {zdanie:'___ wyjdziesz, zamknij okno.', opcje:['Zanim','Kiedy','Chociaż'], ok:0, wyjasnienie:'прежде чем → zanim.'},
    {zdanie:'Lubię góry, ___ moja żona woli morze.', opcje:['i','a','więc'], ok:1, wyjasnienie:'сопоставление → a.'},
    {zdanie:'Kupiłem chleb, mleko ___ masło.', opcje:['oraz','ale','czyli'], ok:0, wyjasnienie:'перечисление → oraz.'},
    {zdanie:'Przyjdę w poniedziałek ___ we wtorek.', opcje:['albo','ale','czy'], ok:0, wyjasnienie:'или (не вопрос) → albo.'},
    {zdanie:'Spóźniłem się, ___ autobus nie przyjechał.', opcje:['dlatego','ponieważ','więc'], ok:1, wyjasnienie:'причина → ponieważ.'},
    {zdanie:'Autobus nie przyjechał, ___ się spóźniłem.', opcje:['dlatego','ponieważ','bo'], ok:0, wyjasnienie:'следствие → dlatego.'},
    {zdanie:'Wracam w piątek, ___ za trzy dni.', opcje:['czyli','ale','albo'], ok:0, wyjasnienie:'то есть → czyli.'},
    {zdanie:'Chcę, ___ przyszedł na moje urodziny.', opcje:['żebyś','że','żeby ty'], ok:0, wyjasnienie:'разные подлежащие: żebyś przyszedł.'},
  ]
};

KURS_LEKCJE.L24 = {
  tytul: 'Pytania i rekcja czasowników',
  ru: 'Вопрос к части предложения и управление глаголов',
  cel: 'Задания V и VI экзамена: задать вопрос к подчёркнутому слову (Na kogo czekasz?) и перефразировать предложение другим глаголом (lubić → interesować się + N.).',
  teoria: [
    {t:'h', h:'Вопрос — в том же падеже и с тем же предлогом'},
    {t:'tab', head:['Предложение','Вопрос'], rows:[
      ['Czekam <b>na Annę</b>.','<b>Na kogo</b> czekasz?'],['Myślę <b>o pracy</b>.','<b>O czym</b> myślisz?'],
      ['Jadę <b>pociągiem</b>.','<b>Czym</b> jedziesz?'],['Pomagam <b>bratu</b>.','<b>Komu</b> pomagasz?'],
      ['Wracam <b>z pracy</b>.','<b>Skąd</b> wracasz?'],['Jadę <b>do Krakowa</b>.','<b>Dokąd</b> jedziesz?'],
      ['Mieszkam tu <b>od roku</b>.','<b>Od kiedy</b> tu mieszkasz?'],['Pociąg jest <b>o piątej</b>.','<b>O której</b> jest pociąg?']]},
    {t:'h', h:'Управление — учи глагол вместе с падежом'},
    {t:'tab', head:['Падеж','Глаголы'], rows:[
      ['+ D.','szukać, potrzebować, słuchać, uczyć się, bać się, używać, życzyć, unikać, zależeć od'],
      ['+ C.','pomagać, dziękować, ufać, wierzyć, przeszkadzać, podobać się, gratulować, przyglądać się'],
      ['+ B.','mieć, lubić, znać, widzieć, obserwować, odwiedzać, zwiedzać, pamiętać'],
      ['+ N.','interesować się, zajmować się, opiekować się, kierować, martwić się (czym)'],
      ['+ предлог','czekać na + B., myśleć o + Msc., pytać / prosić / dbać / martwić się o + B., tęsknić za + N., rozmawiać z + N., płacić za + B.']]},
    {t:'h', h:'Как устроено задание VI (перефразирование)'},
    {t:'tab', head:['Исходное','С данным словом'], rows:[
      ['Anna lubi literaturę.','Anna <b>interesuje się</b> literaturą.'],
      ['Przyglądała się kotu.','<b>Obserwowała</b> kota.'],
      ['Wspomina ten koncert.','<b>Opowiada o</b> tym koncercie.'],
      ['Był w teatrze.','<b>Poszedł do</b> teatru.'],
      ['Znasz adres sklepu?','<b>Wiesz</b>, jaki jest adres sklepu?']]},
    {t:'pulapka', h:'Ловушка задания V — забыть предлог: «Kogo czekasz?» — ошибка, нужно <b>Na kogo czekasz?</b> Предлог из предложения переходит в вопрос.'},
  ],
  cwiczenia: [
    {zdanie:'Czekam na autobus. → ___ czekasz?', ok:'na co', wyjasnienie:'czekać na + B.: Na co czekasz?'},
    {zdanie:'Myślę o mamie. → ___ myślisz?', ok:'o kim', wyjasnienie:'о человеке: O kim myślisz?'},
    {zdanie:'Jadę do Krakowa. → ___ jedziesz?', ok:'dokąd', alt:['gdzie'], wyjasnienie:'направление: Dokąd jedziesz? (разговорно — Gdzie jedziesz?)'},
    {zdanie:'Pomagam siostrze. → ___ pomagasz?', ok:'komu', wyjasnienie:'pomagać + C.: Komu?'},
    {zdanie:'Interesuję się sportem. → ___ się interesujesz?', ok:'czym', wyjasnienie:'interesować się + N.: Czym?'},
    {zdanie:'Wracam z pracy. → ___ wracasz?', ok:'skąd', wyjasnienie:'откуда: Skąd wracasz?'},
    {zdanie:'Spotkałem się z kolegą. → ___ się spotkałeś?', ok:'z kim', wyjasnienie:'z + N.: Z kim?'},
    {zdanie:'Szukam kluczy. → ___ szukasz?', ok:'czego', wyjasnienie:'szukać + D.: Czego szukasz?'},
    {zdanie:'Mieszkam tu od roku. → ___ tu mieszkasz?', ok:'od kiedy', wyjasnienie:'Od kiedy?'},
    {zdanie:'Pociąg odjeżdża o piątej. → ___ odjeżdża pociąg?', ok:'o której', wyjasnienie:'время по часам: O której?'},
    {zdanie:'Interesuję się ___ .', opcje:['historia','historii','historią'], ok:2, wyjasnienie:'interesować się + N.'},
    {zdanie:'Dziękuję ___ za pomoc.', opcje:['pan','panu','pana'], ok:1, wyjasnienie:'dziękować + C.'},
    {zdanie:'Boję się ___ .', opcje:['pająki','pająków','pająkami'], ok:1, wyjasnienie:'bać się + D.'},
    {zdanie:'Tęsknię ___ rodziną.', opcje:['za','o','po'], ok:0, wyjasnienie:'tęsknić za + N.'},
    {zdanie:'To zależy ___ pogody.', opcje:['od','z','na'], ok:0, wyjasnienie:'zależeć od + D.'},
    {zdanie:'Martwię się ___ syna.', opcje:['o','za','od'], ok:0, wyjasnienie:'martwić się o + B.'},
  ]
};

KURS_LEKCJE.L25 = {
  tytul: 'Trudne rzeczowniki',
  ru: 'Трудные существительные',
  cel: 'człowiek → ludzie, tydzień, miesiąc, ręka, oko → oczy, imię, muzeum, Amerykanin, фамилии. Эти слова прямо названы в официальном списке B1.',
  teoria: [
    {t:'tab', head:['Слово','D. ед.','им. мн.','D. мн.'], rows:[
      ['człowiek','człowieka','ludzie','ludzi'],['tydzień','tygodnia','tygodnie','tygodni'],
      ['miesiąc','miesiąca','miesiące','miesięcy'],['dzień','dnia','dni','dni'],['rok','roku','lata','lat'],
      ['ręka','ręki','ręce','rąk'],['oko','oka','oczy','oczu'],['ucho','ucha','uszy','uszu'],
      ['imię','imienia','imiona','imion'],['muzeum','muzeum','muzea','muzeów'],
      ['przyjaciel','przyjaciela','przyjaciele','przyjaciół'],['Amerykanin','Amerykanina','Amerykanie','Amerykanów'],
      ['Rosjanin','Rosjanina','Rosjanie','Rosjan']]},
    {t:'uwaga', h:'Предложный ед.ч.: <b>w ręce</b>, <b>w oku</b>, <b>w muzeum</b> (на -um в ед.ч. не склоняется), <b>o człowieku</b>, <b>w tygodniu</b>. Творительный мн.ч.: ludźmi, dziećmi, przyjaciółmi, pieniędzmi.'},
    {t:'h', h:'Фамилии и Państwo'},
    {t:'tab', head:['Тип','Мужчина','Женщина','Пара'], rows:[
      ['-ski','pan Kowalski — z panem Kowalskim','pani Kowalska — z panią Kowalską','państwo Kowalscy'],
      ['на согласную','pan Nowak — z panem Nowakiem','pani Nowak — z panią Nowak (не склоняется!)','państwo Nowakowie']]},
    {t:'pulapka', h:'Женская фамилия на согласную не склоняется: <b>z panią Nowak</b>, <b>dla pani Nowak</b>. «Как тебя зовут?» — <b>Jak masz na imię?</b> (на + винительный).'},
  ],
  cwiczenia: [
    {zdanie:'Na ulicy było dużo ___ (człowiek).', ok:'ludzi', wyjasnienie:'człowiek → ludzie → ludzi.'},
    {zdanie:'Wrócę za dwa ___ (tydzień).', ok:'tygodnie', wyjasnienie:'2 → им. мн.ч.: tygodnie.'},
    {zdanie:'Nie byłem w domu od trzech ___ (miesiąc).', ok:'miesięcy', wyjasnienie:'od + D. мн.ч.: miesięcy.'},
    {zdanie:'Mam coś w ___ .', opcje:['oku','oce','oko'], ok:0, wyjasnienie:'oko → w oku.'},
    {zdanie:'Ona ma piękne niebieskie ___ .', opcje:['oka','oczy','oki'], ok:1, wyjasnienie:'oko → oczy.'},
    {zdanie:'Trzymam dziecko za ___ (ręka).', ok:'rękę', wyjasnienie:'za + B.: rękę.'},
    {zdanie:'Jak masz na ___ ?', opcje:['imię','imienia','imieniu'], ok:0, wyjasnienie:'mieć na imię — винительный: imię.'},
    {zdanie:'Byliśmy w trzech ___ (muzeum).', ok:'muzeach', wyjasnienie:'мн.ч. склоняется: w muzeach.'},
    {zdanie:'Mój sąsiad jest ___ .', opcje:['Amerykaninem','Amerykanem','Amerykanin'], ok:0, wyjasnienie:'być + N.: Amerykaninem.'},
    {zdanie:'W naszej firmie pracuje dwóch ___ (Rosjanin).', ok:'Rosjan', wyjasnienie:'-anin → D. мн.ч. без окончания: Rosjan.'},
    {zdanie:'Spotkałem się z ___ z pracy.', opcje:['przyjacielami','przyjaciółmi','przyjaciółami'], ok:1, wyjasnienie:'исключение: przyjaciółmi.'},
    {zdanie:'Nie mam ___ na nowy telefon.', opcje:['pieniądze','pieniędzy','pieniądzów'], ok:1, wyjasnienie:'pieniądze → pieniędzy.'},
    {zdanie:'Rozmawiałem z panią ___ (Nowak).', ok:'Nowak', wyjasnienie:'женская фамилия на согласную не склоняется.'},
    {zdanie:'Rozmawiałem z panem ___ (Nowak).', ok:'Nowakiem', wyjasnienie:'мужская склоняется: Nowakiem.'},
    {zdanie:'Szanowni ___ ! Dziękujemy za przybycie.', opcje:['Państwo','Państwa','Państwu'], ok:0, wyjasnienie:'обращение: Szanowni Państwo.'},
    {zdanie:'Kupiłem prezent dla pani ___ (Kowalska).', ok:'Kowalskiej', wyjasnienie:'-ska склоняется как прилагательное: Kowalskiej.'},
    {zdanie:'Pracuję tu już pięć ___ (rok).', ok:'lat', wyjasnienie:'5 → lat.'},
  ]
};
