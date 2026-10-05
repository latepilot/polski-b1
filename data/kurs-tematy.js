// ========================================================================
// KURS B1 — tematy (Katalog B, rozporządzenie 2025, poziom B1 dla dorosłych).
// Każdy temat: słownictwo, gotowe zwroty, monolog (zadanie 2 ustnego),
// sytuacja komunikacyjna (zadanie 3). Wzory są celowo na poziomie B1 —
// mają się dać zapamiętać i zaadaptować, a nie imponować.
// ========================================================================
const KURS_TEMATY = {};

KURS_TEMATY.T01 = {
  tytul:'Dane osobowe, pochodzenie, języki', ru:'О себе: данные, откуда ты, языки', blok:'7.1 Człowiek',
  foto:'ludzie poznają się na spotkaniu',
  slowa:[
    ['imię','имя'],['nazwisko','фамилия'],['wiek','возраст'],['data urodzenia','дата рождения'],
    ['miejsce urodzenia','место рождения'],['urodzić się (urodziłem się w…)','родиться'],
    ['pochodzić z (+ D.)','быть родом из'],['obywatelstwo','гражданство'],['narodowość','национальность'],
    ['stan cywilny','семейное положение'],['żonaty','женат (о мужчине)'],['zamężna','замужем'],
    ['kawaler / panna','холостяк / незамужняя'],['rozwiedziony','разведён'],
    ['język ojczysty','родной язык'],['mówić po polsku / po rosyjsku','говорить по-польски / по-русски'],
    ['znać język','знать язык'],['uczyć się (+ D.)','учить что-то'],['wykształcenie','образование'],
    ['zawód','профессия'],['z zawodu jestem…','по профессии я…'],['przeprowadzić się','переехать'],
    ['od trzech lat','уже три года'],['na stałe','насовсем, постоянно'],
    ['dowód osobisty','удостоверение личности'],['paszport','паспорт'],['karta pobytu','вид на жительство (карта побыту)'],
    ['wniosek','заявление'],['złożyć wniosek','подать заявление'],['formularz','бланк, анкета'],
    ['wypełnić formularz','заполнить анкету'],['podpis','подпись'],['urząd','учреждение, ведомство'],
  ],
  zwroty:[
    ['Nazywam się… / Mam na imię…','Меня зовут… (фамилия / имя)'],
    ['Pochodzę z Rosji, z Petersburga.','Я родом из России, из Петербурга.'],
    ['Od trzech lat mieszkam w Gdańsku.','Уже три года живу в Гданьске.'],
    ['Przyjechałem do Polski, bo…','Я приехал в Польшу, потому что…'],
    ['Z zawodu jestem inżynierem.','По профессии я инженер.'],
    ['Moim językiem ojczystym jest rosyjski.','Мой родной язык — русский.'],
    ['Mówię też trochę po angielsku.','Я также немного говорю по-английски.'],
    ['Uczę się polskiego, ponieważ…','Учу польский, потому что…'],
    ['W przyszłości chciałbym…','В будущем я хотел бы…'],
  ],
  monolog:{
    temat:'Proszę opowiedzieć o sobie.',
    plan:['Imię, wiek, skąd Pan pochodzi','Gdzie Pan mieszka i od kiedy','Praca, wykształcenie','Języki — dlaczego uczy się Pan polskiego','Zainteresowania i plany na przyszłość'],
    pytania:['Skąd Pan pochodzi?','Od kiedy mieszka Pan w Polsce?','Dlaczego przyjechał Pan do Polski?','Czym się Pan zajmuje?','Jakie języki Pan zna?','Dlaczego uczy się Pan polskiego?','Co Pan lubi robić w wolnym czasie?','Jakie ma Pan plany na przyszłość?'],
    ru:'Это первый вопрос почти любой устной части. Подготовь свой рассказ на 2 минуты и доведи до автоматизма.',
    wzor:'Dzień dobry. Nazywam się Iwan Pietrow i mam trzydzieści osiem lat. Pochodzę z Rosji, z Petersburga, ale od trzech lat mieszkam w Polsce, w Gdańsku. Przeprowadziłem się tutaj, ponieważ dostałem propozycję pracy. Z zawodu jestem inżynierem, pracuję w międzynarodowej firmie. Moim językiem ojczystym jest rosyjski. Mówię też dość dobrze po angielsku, a od roku uczę się polskiego. Polski jest dla mnie trudny, szczególnie przypadki i wymowa, ale bardzo go lubię. Uczę się, bo chcę swobodnie rozmawiać z sąsiadami i kolegami, a także zdać egzamin na poziomie B1. W wolnym czasie lubię spacerować nad morzem i robić zdjęcia. W przyszłości chciałbym kupić tu mieszkanie i zostać w Polsce na stałe.'
  },
  sytuacja:{
    polecenie:'Jest Pan w urzędzie. Chce Pan złożyć wniosek o kartę pobytu. Urzędnik pyta o Pana dane. Proszę odpowiedzieć na pytania i zapytać, jakie dokumenty trzeba przynieść i jak długo czeka się na decyzję.',
    rola_ja:'cudzoziemiec w urzędzie', rola_on:'urzędnik',
    ru:'Официальная ситуация: обращайся «Pan / Pani», без «cześć». Главное — понять вопрос и спокойно уточнить, если не понял.',
    cele:['Przedstawić się i podać swoje dane','Powiedzieć, w jakiej sprawie Pan przyszedł','Zapytać o potrzebne dokumenty','Zapytać o czas oczekiwania na decyzję','Podziękować i pożegnać się'],
    zwroty:[
      ['Dzień dobry, przyszedłem złożyć wniosek o kartę pobytu.','Добрый день, я пришёл подать заявление на карту побыту.'],
      ['Jakie dokumenty muszę przynieść?','Какие документы мне нужно принести?'],
      ['Czy potrzebne jest zaświadczenie z pracy?','Нужна ли справка с работы?'],
      ['Jak długo czeka się na decyzję?','Как долго ждать решения?'],
      ['Przepraszam, nie zrozumiałem. Czy może Pan powtórzyć?','Извините, я не понял. Можете повторить?'],
      ['Czy mogę wysłać dokumenty pocztą?','Могу ли я отправить документы почтой?'],
    ],
    wzor:'Urzędnik: Dzień dobry, w czym mogę pomóc?\nTy: Dzień dobry. Chciałbym złożyć wniosek o kartę pobytu.\nUrzędnik: Dobrze. Proszę podać imię i nazwisko.\nTy: Iwan Pietrow.\nUrzędnik: Kiedy się Pan urodził?\nTy: Dwunastego maja tysiąc dziewięćset osiemdziesiątego ósmego roku.\nUrzędnik: Jaki jest cel pobytu w Polsce?\nTy: Pracuję tutaj. Mam umowę o pracę na czas nieokreślony.\nUrzędnik: Rozumiem. Ma Pan wypełniony formularz?\nTy: Tak, mam. Przepraszam, a jakie dokumenty muszę jeszcze przynieść?\nUrzędnik: Paszport, cztery zdjęcia, umowę o pracę i potwierdzenie opłaty.\nTy: Czy mogę je wysłać pocztą, czy muszę przyjść osobiście?\nUrzędnik: Na odciski palców musi Pan przyjść osobiście.\nTy: Rozumiem. A jak długo czeka się na decyzję?\nUrzędnik: Zwykle kilka miesięcy.\nTy: Dziękuję bardzo za informację. Do widzenia.'
  }
};

KURS_TEMATY.T02 = {
  tytul:'Wygląd, ubranie, moda', ru:'Внешность и одежда', blok:'7.1 Człowiek',
  foto:'ludzie w sklepie z ubraniami',
  slowa:[
    ['wysoki / niski','высокий / низкий'],['średniego wzrostu','среднего роста'],['szczupły','стройный, худой'],
    ['tęgi, puszysty','полный (вежливо)'],['przystojny','симпатичный (о мужчине)'],['ładna','красивая, симпатичная'],
    ['włosy krótkie / długie','короткие / длинные волосы'],['włosy kręcone / proste','кудрявые / прямые волосы'],
    ['ciemne / jasne / siwe / rude włosy','тёмные / светлые / седые / рыжие волосы'],
    ['blondyn / brunet','блондин / брюнет'],['oczy niebieskie / zielone / piwne','голубые / зелёные / карие глаза'],
    ['broda, wąsy','борода, усы'],['okulary','очки'],['zmarszczki','морщины'],
    ['nosić (nosi okulary)','носить (носит очки)'],['mieć na sobie (+ B.)','быть одетым в'],
    ['ubierać się elegancko / na sportowo','одеваться элегантно / по-спортивному'],
    ['spodnie, dżinsy','брюки, джинсы'],['koszula, bluzka','рубашка, блузка'],['sukienka, spódnica','платье, юбка'],
    ['sweter','свитер'],['kurtka, płaszcz','куртка, пальто'],['garnitur, krawat','костюм, галстук'],
    ['buty','обувь'],['czapka, szalik','шапка, шарф'],['rozmiar','размер'],
    ['przymierzyć','примерить'],['przymierzalnia','примерочная'],['pasować (pasuje mi)','подходить, сидеть по размеру'],
    ['wyglądać na (+ B.) czterdzieści lat','выглядеть на сорок лет'],['być podobnym do (+ D.)','быть похожим на'],
  ],
  zwroty:[
    ['Jest wysokim, szczupłym mężczyzną.','Он высокий, стройный мужчина.'],
    ['Ma krótkie, ciemne włosy i niebieskie oczy.','У него короткие тёмные волосы и голубые глаза.'],
    ['Nosi okulary.','Он носит очки.'],
    ['Ma na sobie białą koszulę i ciemne spodnie.','На нём белая рубашка и тёмные брюки.'],
    ['Wygląda na około czterdzieści lat.','Выглядит лет на сорок.'],
    ['Jest bardzo podobna do mamy.','Она очень похожа на маму.'],
    ['Ta kurtka jest na mnie za duża.','Эта куртка мне велика.'],
  ],
  monolog:{
    temat:'Proszę opisać wygląd bliskiej osoby.',
    plan:['Kim jest ta osoba, ile ma lat','Wzrost i sylwetka','Włosy, oczy, twarz','Jak się ubiera na co dzień i na specjalne okazje','Do kogo jest podobna, jakie robi wrażenie'],
    pytania:['O kim chce Pan opowiedzieć?','Jak ta osoba wygląda?','Jakie ma włosy i oczy?','Jak się ubiera?','Czy nosi okulary?','Do kogo jest podobna?'],
    ru:'Описание человека бывает и в монологе, и в описании фото, и в письме. Держи порядок: общее → лицо → одежда → впечатление.',
    wzor:'Chcę opowiedzieć o mojej siostrze, Marii. Ma trzydzieści dwa lata, ale wygląda młodziej. Jest średniego wzrostu i szczupła. Ma długie, kręcone, ciemne włosy i duże piwne oczy. Często się uśmiecha, więc wszyscy mówią, że ma bardzo sympatyczną twarz. Na co dzień ubiera się na sportowo: nosi dżinsy, wygodne buty i kolorowe swetry. Do pracy zakłada elegancką bluzkę i ciemną spódnicę. Nie nosi okularów, tylko latem okulary przeciwsłoneczne. Moja siostra jest bardzo podobna do naszej mamy — obie są wesołe i energiczne.'
  },
  sytuacja:{
    polecenie:'Jest Pan w sklepie z odzieżą. Chce Pan kupić ciepłą kurtkę na zimę. Proszę zapytać sprzedawcę o rozmiar, kolor i cenę, przymierzyć kurtkę i zdecydować, czy ją Pan kupi.',
    rola_ja:'klient', rola_on:'sprzedawca',
    ru:'Типичная бытовая ситуация. Экзаменатор специально скажет, что нужного размера нет, — ты должен предложить вариант.',
    cele:['Powiedzieć, czego Pan szuka','Zapytać o rozmiar i kolor','Poprosić o przymierzenie','Zareagować, gdy rozmiar nie pasuje','Zapytać o cenę i zapłacić'],
    zwroty:[
      ['Szukam ciepłej kurtki na zimę.','Ищу тёплую куртку на зиму.'],
      ['Czy jest ta kurtka w rozmiarze L?','Есть эта куртка в размере L?'],
      ['Czy mogę ją przymierzyć?','Можно её примерить?'],
      ['Jest trochę za duża. Czy jest mniejszy rozmiar?','Немного велика. Есть размер поменьше?'],
      ['A w innym kolorze?','А в другом цвете?'],
      ['Ile kosztuje? Czy mogę zapłacić kartą?','Сколько стоит? Можно оплатить картой?'],
      ['Wezmę ją.','Возьму.'],
    ],
    wzor:'Sprzedawca: Dzień dobry, w czym mogę pomóc?\nTy: Dzień dobry. Szukam ciepłej kurtki na zimę.\nSprzedawca: Mamy kilka modeli. Jaki rozmiar Pan nosi?\nTy: Zwykle L. Czy ta granatowa kurtka jest w rozmiarze L?\nSprzedawca: Niestety, w granatowym kolorze został tylko rozmiar XL.\nTy: Szkoda. A w innym kolorze?\nSprzedawca: W rozmiarze L mamy czarną i zieloną.\nTy: To poproszę czarną. Czy mogę ją przymierzyć?\nSprzedawca: Oczywiście, przymierzalnia jest tam, po prawej stronie.\nTy: Dziękuję. … Pasuje idealnie. Ile kosztuje?\nSprzedawca: Czterysta pięćdziesiąt złotych, ale dziś jest dwadzieścia procent rabatu.\nTy: Świetnie, wezmę ją. Czy mogę zapłacić kartą?\nSprzedawca: Tak, oczywiście.'
  }
};

KURS_TEMATY.T03 = {
  tytul:'Rodzina i relacje rodzinne', ru:'Семья и отношения', blok:'7.1 Człowiek',
  foto:'rodzina przy stole, rodzinny obiad',
  slowa:[
    ['rodzice','родители'],['matka / mama','мать / мама'],['ojciec / tata','отец / папа'],['syn, córka','сын, дочь'],
    ['brat, siostra','брат, сестра'],['rodzeństwo','братья и сёстры'],['jedynak / jedynaczka','единственный ребёнок'],
    ['dziadek, babcia','дедушка, бабушка'],['dziadkowie','бабушка с дедушкой'],['wnuk, wnuczka','внук, внучка'],
    ['wujek, ciocia','дядя, тётя'],['kuzyn, kuzynka','двоюродный брат, сестра'],['mąż, żona','муж, жена'],
    ['teść, teściowa','тесть/свёкор, тёща/свекровь'],['krewni','родственники'],['małżeństwo','брак; супруги'],
    ['ślub','бракосочетание'],['wesele','свадьба (празднование)'],['brać ślub','жениться, выходить замуж'],
    ['rozwód','развод'],['wychowywać dzieci','воспитывать детей'],['opiekować się (+ N.)','заботиться о'],
    ['dogadywać się z (+ N.)','ладить с'],['kłócić się','ссориться'],['tęsknić za (+ N.)','скучать по'],
    ['spotykać się','встречаться'],['starszy / młodszy brat','старший / младший брат'],['na emeryturze','на пенсии'],
    ['liczna rodzina','большая семья'],['święta rodzinne','семейные праздники'],
  ],
  zwroty:[
    ['Moja rodzina nie jest bardzo duża.','Моя семья не очень большая.'],
    ['Mam starszego brata i młodszą siostrę.','У меня есть старший брат и младшая сестра.'],
    ['Jestem jedynakiem.','Я единственный ребёнок.'],
    ['Z siostrą bardzo dobrze się dogaduję.','С сестрой я очень хорошо лажу.'],
    ['Spotykamy się na święta i urodziny.','Мы встречаемся на праздники и дни рождения.'],
    ['Bardzo tęsknię za rodzicami.','Очень скучаю по родителям.'],
    ['Tata jest już na emeryturze.','Папа уже на пенсии.'],
  ],
  monolog:{
    temat:'Moja rodzina.',
    plan:['Ogólne informacje: ile osób, gdzie mieszkają','Członkowie rodziny — bliżsi i dalsi','Czym się zajmują','Dokładniejszy opis jednej osoby','Kiedy się spotykacie, jakie są relacje w rodzinie'],
    pytania:['Jak liczna jest Pana rodzina?','Gdzie mieszkają członkowie Pana rodziny?','Czym się zajmują Pana rodzice?','Kto jest dla Pana najważniejszy w rodzinie?','Jak wygląda ta osoba?','Jak często spotyka się Pan z rodziną?','Jakie okazje łączą Pana rodzinę?','Jak można opisać relacje w Pana rodzinie?'],
    ru:'Это тема из официального образца устной части. План и вопросы взяты оттуда же.',
    wzor:'Moja rodzina nie jest bardzo duża. Składa się z czterech osób: rodziców, mojej siostry i mnie. Rodzice mieszkają w Rosji, w małym mieście niedaleko Moskwy, a ja z żoną i synem mieszkam w Gdańsku. Mój tata ma sześćdziesiąt pięć lat i jest już na emeryturze. Kiedyś pracował jako kierowca. Mama jest nauczycielką, uczy matematyki w szkole podstawowej. Moja młodsza siostra, Ania, ma dwadzieścia osiem lat. Jest wysoka, ma długie jasne włosy i jest bardzo wesoła. Pracuje w banku i interesuje się sportem. Niestety, nie widzimy się często, bo mieszkamy daleko od siebie. Na co dzień rozmawiamy przez telefon albo przez internet. Cała rodzina spotyka się zwykle latem i na Boże Narodzenie. Myślę, że w mojej rodzinie są dobre relacje: wszyscy się wspieramy i bardzo za sobą tęsknimy.'
  },
  sytuacja:{
    polecenie:'Pana babcia za dwa tygodnie kończy osiemdziesiąt lat. Proszę zadzwonić do kuzynki i zaproponować wspólny prezent. Proszę ustalić, co kupić, ile każdy zapłaci i kiedy się spotkacie.',
    rola_ja:'wnuk', rola_on:'kuzynka',
    ru:'Неофициальная ситуация: на «ты», можно cześć. Нужно предложить, выслушать встречное предложение и договориться.',
    cele:['Przywitać się i powiedzieć, dlaczego Pan dzwoni','Zaproponować prezent','Wysłuchać propozycji kuzynki i dojść do porozumienia','Ustalić, ile każdy zapłaci','Umówić się na spotkanie'],
    zwroty:[
      ['Cześć, dzwonię w sprawie urodzin babci.','Привет, звоню насчёт дня рождения бабушки.'],
      ['Mam pomysł: może kupimy razem…?','У меня идея: может, купим вместе…?'],
      ['Co o tym myślisz?','Что ты об этом думаешь?'],
      ['To dobry pomysł, ale…','Хорошая идея, но…'],
      ['Ile to może kosztować?','Сколько это может стоить?'],
      ['Podzielimy się po połowie.','Разделим пополам.'],
      ['Kiedy ci pasuje?','Когда тебе удобно?'],
    ],
    wzor:'Kuzynka: Halo?\nTy: Cześć, Kasia, tu Iwan. Dzwonię w sprawie urodzin babci.\nKuzynka: O, cześć! Właśnie o tym myślałam.\nTy: Mam pomysł: może kupimy babci razem nowy telewizor? Jej telewizor jest już bardzo stary.\nKuzynka: Hm, to dobry pomysł, ale babcia prawie nie ogląda telewizji. Może raczej wycieczka do Zakopanego? Zawsze mówi, że chce zobaczyć góry.\nTy: Masz rację, to lepszy pomysł. Ile to może kosztować?\nKuzynka: Hotel i pociąg dla dwóch osób — około tysiąca dwustu złotych.\nTy: To podzielimy się po połowie, każdy po sześćset złotych. Pasuje?\nKuzynka: Pasuje. Kiedy się spotkamy, żeby wszystko zarezerwować?\nTy: Może w sobotę o jedenastej w kawiarni na rynku?\nKuzynka: Super, do zobaczenia w sobotę!\nTy: Do zobaczenia, cześć!'
  }
};

KURS_TEMATY.T04 = {
  tytul:'Dom i mieszkanie', ru:'Дом и квартира', blok:'7.2 Dom, mieszkanie, otoczenie',
  foto:'salon w mieszkaniu, ludzie w domu',
  slowa:[
    ['mieszkanie','квартира'],['dom jednorodzinny','частный дом'],['blok','многоквартирный дом'],['kamienica','старый многоквартирный дом'],
    ['osiedle','жилой район, микрорайон'],['piętro (na trzecim piętrze)','этаж (на четвёртом этаже!)'],['parter','первый этаж'],
    ['winda','лифт'],['balkon','балкон'],['pokój','комната'],['sypialnia','спальня'],['salon, pokój dzienny','гостиная'],
    ['kuchnia','кухня'],['łazienka','ванная'],['przedpokój','прихожая'],['piwnica','подвал'],
    ['metr kwadratowy','квадратный метр'],['dwupokojowe mieszkanie','двухкомнатная квартира'],
    ['jasny / ciemny','светлый / тёмный'],['przestronny / ciasny','просторный / тесный'],['cichy / głośny','тихий / шумный'],
    ['umeblowany','с мебелью'],['meble','мебель'],['szafa','шкаф'],['łóżko','кровать'],['kanapa','диван'],
    ['fotel','кресло'],['regał, półka','стеллаж, полка'],['lodówka','холодильник'],['kuchenka','плита'],
    ['pralka, zmywarka','стиральная, посудомоечная машина'],['widok na (+ B.)','вид на'],['położony blisko (+ D.)','расположенный рядом с'],
  ],
  zwroty:[
    ['Mieszkam w dwupokojowym mieszkaniu na czwartym piętrze.','Живу в двухкомнатной квартире на пятом этаже.'],
    ['Mieszkanie ma pięćdziesiąt metrów kwadratowych.','Квартира — пятьдесят квадратных метров.'],
    ['W salonie stoi duża kanapa.','В гостиной стоит большой диван.'],
    ['Z balkonu mam widok na park.','С балкона у меня вид на парк.'],
    ['Najbardziej lubię kuchnię, bo…','Больше всего люблю кухню, потому что…'],
    ['Brakuje mi dodatkowego pokoju.','Мне не хватает ещё одной комнаты.'],
    ['Mieszkanie jest dobrze położone.','Квартира удобно расположена.'],
  ],
  monolog:{
    temat:'Moje mieszkanie / mój dom.',
    plan:['Gdzie Pan mieszka, w jakim budynku','Wielkość i pokoje','Umeblowanie najważniejszych pomieszczeń','Co Pan lubi w swoim mieszkaniu, czego brakuje','Położenie: co jest blisko','Wymarzone mieszkanie'],
    pytania:['Gdzie Pan mieszka?','Ile pokoi ma Pana mieszkanie?','Które pomieszczenie lubi Pan najbardziej i dlaczego?','Czego brakuje w Pana mieszkaniu?','Co jest w pobliżu Pana domu?','Jak wygląda Pana wymarzone mieszkanie?'],
    ru:'Тема из официального образца. Внимание: «na czwartym piętrze» — это пятый этаж по-русски, потому что первый этаж — parter.',
    wzor:'Mieszkam w Gdańsku, na Przymorzu. Mam dwupokojowe mieszkanie na czwartym piętrze w dużym bloku. Na szczęście w bloku jest winda. Mieszkanie ma pięćdziesiąt metrów kwadratowych: jest tu salon, sypialnia, mała kuchnia, łazienka i przedpokój. Salon jest jasny i przestronny. Stoi w nim szara kanapa, stolik i regał z książkami, a na ścianie wisi telewizor. W sypialni jest duże łóżko i szafa. Kuchnia jest niestety dość ciasna, ale ma wszystko, czego potrzebuję: lodówkę, kuchenkę i zmywarkę. Najbardziej lubię balkon, bo widać z niego park, a latem piję tam rano kawę. Mieszkanie jest dobrze położone: do morza mam piętnaście minut pieszo, a przystanek tramwajowy jest tuż obok. Brakuje mi tylko dodatkowego pokoju na gabinet. W przyszłości chciałbym mieszkać w domu z ogrodem.'
  },
  sytuacja:{
    polecenie:'Razem z kolegą szukacie mieszkania do wynajęcia. Znalazł Pan ogłoszenie: „Mieszkanie — wysoki standard! 120 m², spokojne, jasne, 2 sypialnie, pokój dzienny, gabinet, kuchnia, łazienka. Po remoncie, centrum miasta, do wynajęcia od zaraz”. Proszę przedstawić koledze to mieszkanie i przekonać go, żeby razem je obejrzeć.',
    rola_ja:'osoba, która znalazła ogłoszenie', rola_on:'kolega, który ma wątpliwości',
    ru:'Задание из официального образца. Коллега будет сомневаться — цена, шум, парковка. Твоя задача — убедить.',
    cele:['Opisać mieszkanie z ogłoszenia','Wymienić zalety','Odpowiedzieć na wątpliwości kolegi','Zaproponować termin oglądania'],
    zwroty:[
      ['Znalazłem świetne ogłoszenie!','Я нашёл отличное объявление!'],
      ['Mieszkanie jest po remoncie.','Квартира после ремонта.'],
      ['Każdy z nas miałby swoją sypialnię.','У каждого из нас была бы своя спальня.'],
      ['Wiem, że to drogo, ale…','Знаю, что это дорого, но…'],
      ['Myślę, że warto je obejrzeć.','Думаю, стоит её посмотреть.'],
      ['Może zadzwonię i umówię nas na sobotę?','Может, я позвоню и договорюсь на субботу?'],
    ],
    wzor:'Ty: Słuchaj, znalazłem świetne ogłoszenie! Mieszkanie w samym centrum, sto dwadzieścia metrów.\nKolega: Sto dwadzieścia? To chyba bardzo drogie.\nTy: Wiem, że to nie jest tanie, ale są dwie sypialnie, więc każdy z nas miałby swój pokój. Jest też gabinet — możesz tam pracować z domu.\nKolega: A centrum? Tam jest strasznie głośno.\nTy: W ogłoszeniu piszą, że mieszkanie jest spokojne. Może okna wychodzą na podwórze.\nKolega: Hm. A w jakim jest stanie?\nTy: Jest po remoncie, więc niczego nie musimy naprawiać. I jest do wynajęcia od zaraz.\nKolega: No dobrze, brzmi nieźle.\nTy: Myślę, że warto je obejrzeć. Może zadzwonię i umówię nas na sobotę rano?\nKolega: Dobra, dzwoń.'
  }
};
