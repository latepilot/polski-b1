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
    {t:'pulapka', h:'После этих глаголов в русском винительный, а в польском — родительный: <b>słuchać muzyki</b> (слушать музыку), <b>uczyć się języka</b> (учить язык), <b>szukać mieszkania</b> (искать квартиру), <b>używać komputera</b> (пользоваться компьютером). И после отрицания всегда: <b>Nie lubię kawy</b> — «не люблю кофе».'},
    {t:'h', h:'Окончания'},
    {t:'tab', head:['Род','Окончание','Пример'], rows:[
      ['женский','-y (после твёрдых, c, cz, sz, rz, ż)','kawa → kawy, ulica → ulicy, praca → pracy'],
      ['женский','-i (после k, g, мягких, -ia, на согласную)','książka → książki, kuchnia → kuchni, noc → nocy'],
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
