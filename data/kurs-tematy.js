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
    ['kawaler','холостяк (о мужчине)'],['panna','незамужняя (о женщине)'],['rozwiedziony','разведён'],
    ['język ojczysty','родной язык'],['mówić po polsku','говорить по-польски'],['mówić po rosyjsku','говорить по-русски'],
    ['znać język','знать язык'],['uczyć się (+ D.)','учить что-то'],['wykształcenie','образование'],
    ['zawód','профессия'],['z zawodu jestem…','по профессии я…'],['przeprowadzić się','переехать'],
    ['od trzech lat','уже три года'],['na stałe','насовсем, постоянно'],
    ['dowód osobisty','удостоверение личности'],['paszport','паспорт'],['karta pobytu','вид на жительство (карта побыту)'],
    ['wniosek','заявление'],['złożyć wniosek','подать заявление'],['formularz','бланк, анкета'],
    ['wypełnić formularz','заполнить анкету'],['podpis','подпись'],['urząd','учреждение, ведомство'],
  ],
  zwroty:[
    ['Nazywam się…','Меня зовут… (имя и фамилия)'],['Mam na imię…','Меня зовут… (только имя)'],
    ['Pochodzę z Rosji, z Petersburga.','Я родом из России, из Петербурга.'],
    ['Od trzech lat mieszkam w Gdańsku.','Уже три года живу в Гданьске.'],
    ['Przyjechałem do Polski, bo…','Я приехал в Польшу, потому что…'],
    ['Z zawodu jestem fotografem.','По профессии я фотограф.'],
    ['Z wykształcenia jestem inżynierem.','По образованию я инженер.'],
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
    wzor:'Dzień dobry. Nazywam się Iwan Pietrow i mam trzydzieści osiem lat. Pochodzę z Rosji, z Petersburga, ale od trzech lat mieszkam w Polsce, w Gdańsku. Przeprowadziłem się tutaj, ponieważ dostałem propozycję pracy. Z wykształcenia jestem inżynierem, a z zawodu fotografem: robię zdjęcia dla banków zdjęć. Moim językiem ojczystym jest rosyjski. Mówię też dość dobrze po angielsku, a od roku uczę się polskiego. Polski jest dla mnie trudny, szczególnie przypadki i wymowa, ale bardzo go lubię. Uczę się, bo chcę swobodnie rozmawiać z sąsiadami i kolegami, a także zdać egzamin na poziomie B1. W wolnym czasie zbieram płyty winylowe, tworzę muzykę elektroniczną, chodzę na nordic walking i dużo podróżuję. W przyszłości chciałbym kupić tu mieszkanie i zostać w Polsce na stałe.'
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
    ['wysoki','высокий'],['niski','низкий'],['średniego wzrostu','среднего роста'],['szczupły','стройный, худой'],
    ['tęgi','полный, тучный'],['puszysty','полненький (вежливо; также: пушистый)'],['przystojny','симпатичный (о мужчине)'],['ładna','красивая, симпатичная'],
    ['krótkie włosy','короткие волосы'],['długie włosy','длинные волосы'],['kręcone włosy','кудрявые волосы'],['proste włosy','прямые волосы'],
    ['ciemne włosy','тёмные волосы'],['jasne włosy','светлые волосы'],['siwe włosy','седые волосы'],['rude włosy','рыжие волосы'],
    ['blondyn','блондин'],['brunet','брюнет'],['niebieskie oczy','голубые глаза'],['zielone oczy','зелёные глаза'],['piwne oczy','карие глаза'],
    ['broda','борода'],['wąsy','усы'],['okulary','очки'],['zmarszczki','морщины'],
    ['nosić (nosi okulary)','носить (носит очки)'],['mieć na sobie (+ B.)','быть одетым в'],
    ['ubierać się elegancko','одеваться элегантно'],['ubierać się na sportowo','одеваться по-спортивному'],
    ['spodnie','брюки'],['dżinsy','джинсы'],['koszula','рубашка'],['bluzka','блузка'],['sukienka','платье'],['spódnica','юбка'],
    ['sweter','свитер'],['kurtka','куртка'],['płaszcz','пальто'],['garnitur','костюм (мужской)'],['krawat','галстук'],
    ['buty','обувь'],['czapka','шапка'],['szalik','шарф'],['rozmiar','размер'],
    ['przymierzyć','примерить'],['przymierzalnia','примерочная'],['pasować (pasuje mi)','подходить, сидеть по размеру'],
    ['wyglądać na (+ B.) czterdzieści lat','выглядеть на сорок лет'],['być podobnym do (+ D.)','быть похожим на'],
    ['koszulka','футболка'],['bluza','толстовка'],['w kratkę','в клетку'],['w paski','в полоску'],
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
    wzor:'Chcę opowiedzieć o mojej młodszej siostrze, Ani. Ma dwadzieścia osiem lat, ale wygląda młodziej. Jest wysoka i szczupła. Ma długie, proste, jasne włosy i duże niebieskie oczy. Często się uśmiecha, więc wszyscy mówią, że ma bardzo sympatyczną twarz. Na co dzień ubiera się na sportowo: nosi dżinsy, wygodne buty i kolorowe swetry. Do pracy zakłada elegancką bluzkę i ciemną spódnicę. Nie nosi okularów, tylko latem okulary przeciwsłoneczne. Moja siostra jest bardzo podobna do naszej mamy — obie są wesołe i energiczne.'
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
    ['rodzice','родители'],['matka','мать'],['mama','мама'],['ojciec','отец'],['tata','папа'],['syn','сын'],['córka','дочь'],
    ['brat','брат'],['siostra','сестра'],['rodzeństwo','братья и сёстры'],['jedynak','единственный ребёнок в семье (мальчик)'],['jedynaczka','единственный ребёнок в семье (девочка)'],
    ['dziadek','дедушка'],['babcia','бабушка'],['dziadkowie','бабушка с дедушкой'],['wnuk','внук'],['wnuczka','внучка'],
    ['wujek','дядя'],['ciocia','тётя'],['kuzyn','двоюродный брат'],['kuzynka','двоюродная сестра'],['mąż','муж'],['żona','жена'],
    ['teść','тесть или свёкор (отец жены или мужа)'],['teściowa','тёща или свекровь (мать жены или мужа)'],['krewni','родственники'],['małżeństwo','брак; супруги'],
    ['ślub','бракосочетание'],['wesele','свадьба (празднование)'],['brać ślub','жениться, выходить замуж'],
    ['rozwód','развод'],['wychowywać dzieci','воспитывать детей'],['opiekować się (+ N.)','заботиться о'],
    ['dogadywać się z (+ N.)','ладить с'],['kłócić się','ссориться'],['tęsknić za (+ N.)','скучать по'],
    ['spotykać się','встречаться'],['starszy brat','старший брат'],['młodszy brat','младший брат'],['na emeryturze','на пенсии'],
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
    wzor:'Moja rodzina nie jest bardzo duża. Składa się z czterech osób: rodziców, mojej siostry i mnie. Rodzice mieszkają w Rosji, w Petersburgu, a ja z żoną Natalią i córką Oliwią mieszkam w Gdańsku. Oliwia ma dziesięć lat i chodzi do czwartej klasy szkoły podstawowej. Mój tata ma sześćdziesiąt pięć lat i jest już na emeryturze. Kiedyś pracował jako kierowca. Mama jest nauczycielką, uczy matematyki w szkole podstawowej. Moja młodsza siostra, Ania, ma dwadzieścia osiem lat. Jest wysoka, ma długie jasne włosy i jest bardzo wesoła. Pracuje w banku i interesuje się sportem. Niestety, nie widzimy się często, bo mieszkamy daleko od siebie. Na co dzień rozmawiamy przez telefon albo przez internet. Cała rodzina spotyka się zwykle latem i na Boże Narodzenie. Myślę, że w mojej rodzinie są dobre relacje: wszyscy się wspieramy i bardzo za sobą tęsknimy.'
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
    ['osiedle','жилой район, микрорайон'],['piętro (na trzecim piętrze)','этаж (этажи считают от parter: trzecie piętro = наш четвёртый этаж)'],['parter','первый этаж'],
    ['winda','лифт'],['balkon','балкон'],['pokój','комната'],['sypialnia','спальня'],['salon','гостиная, салон'],['pokój dzienny','гостиная (букв. «дневная комната»)'],
    ['kuchnia','кухня'],['łazienka','ванная'],['przedpokój','прихожая'],['piwnica','подвал'],
    ['metr kwadratowy','квадратный метр'],['dwupokojowe mieszkanie','двухкомнатная квартира'],
    ['jasny','светлый'],['ciemny','тёмный'],['przestronny','просторный'],['ciasny','тесный'],['cichy','тихий'],['głośny','шумный, громкий'],
    ['umeblowany','с мебелью'],['meble','мебель'],['szafa','шкаф'],['łóżko','кровать'],['kanapa','диван'],
    ['fotel','кресло'],['regał','стеллаж'],['półka','полка'],['lodówka','холодильник'],['kuchenka','плита'],
    ['pralka','стиральная машина'],['zmywarka','посудомоечная машина'],['widok na (+ B.)','вид на'],['położony blisko (+ D.)','расположенный рядом с'],
  ],
  zwroty:[
    ['Mieszkam w dwupokojowym mieszkaniu na czwartym piętrze.','Живу в двухкомнатной квартире на пятом этаже (czwarte piętro = наш пятый: счёт от parter).'],
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

KURS_TEMATY.T05 = {
  tytul:'Praca i zawody', ru:'Работа и профессии', blok:'7.1 Człowiek · 7.9 Praca',
  foto:'ludzie w biurze, spotkanie w pracy',
  slowa:[
    ['praca','работа'],['zawód','профессия'],['stanowisko','должность'],['firma','фирма, компания'],['biuro','офис'],
    ['szef','начальник'],['szefowa','начальница'],['kierownik','руководитель'],['pracownik','сотрудник'],['pracodawca','работодатель'],
    ['umowa o pracę','трудовой договор'],['na pełny etat','на полную ставку'],['na pół etatu','на полставки'],
    ['pensja','зарплата, оклад'],['wynagrodzenie','вознаграждение, оплата труда'],['zarabiać','зарабатывать'],['urlop','отпуск'],['zwolnienie lekarskie','больничный'],
    ['nadgodziny','сверхурочные'],['pracować zdalnie','работать удалённо'],['obowiązki','обязанности'],
    ['szukać pracy','искать работу'],['rozmowa kwalifikacyjna','собеседование'],['doświadczenie','опыт'],
    ['awans','повышение'],['stracić pracę','потерять работу'],['emerytura','пенсия'],['zmienić pracę','сменить работу'],
    ['zespół','команда (на работе), коллектив'],['zebranie','совещание'],['klient','клиент'],
    ['fotograf','фотограф'],['zdjęcie','фотография, снимок'],['sesja zdjęciowa','фотосессия, съёмка'],['bank zdjęć','фотобанк, фотосток'],['obróbka zdjęć','обработка фотографий'],
  ],
  zwroty:[
    ['Pracuję jako fotograf w studiu fotograficznym.','Работаю фотографом в фотостудии.'],
    ['Robię zdjęcia dla banków zdjęć.','Снимаю для фотостоков.'],
    ['Pracuję na pełny etat, od poniedziałku do piątku.','Работаю на полную ставку, с понедельника по пятницу.'],
    ['Do moich obowiązków należy…','В мои обязанности входит…'],
    ['W pracy najbardziej lubię…','В работе больше всего люблю…'],
    ['Mam dobry kontakt z kolegami.','У меня хорошие отношения с коллегами.'],
    ['Chciałbym kiedyś dostać awans.','Хотел бы когда-нибудь получить повышение.'],
  ],
  monolog:{
    temat:'Moja praca (albo praca marzeń).',
    plan:['Gdzie i jako kto Pan pracuje','Jak wygląda zwykły dzień pracy','Obowiązki','Co Pan lubi, a czego nie lubi w pracy','Plany zawodowe'],
    pytania:['Gdzie Pan pracuje?','Od kiedy pracuje Pan w tej firmie?','Jak wygląda Pana dzień pracy?','Co należy do Pana obowiązków?','Czy lubi Pan swoją pracę? Dlaczego?','Jakie ma Pan relacje z kolegami?','Jaka byłaby Pana praca marzeń?'],
    ru:'Если сейчас не работаешь — говори о прошлой работе или о работе мечты в условном наклонении: chciałbym pracować…',
    wzor:'Od trzech lat pracuję jako fotograf w małym studiu we Wrzeszczu. Robimy zdjęcia dla banków zdjęć, czyli fotostocków. Potem firmy z całego świata kupują je do reklam, gazet i na strony internetowe. Pracuję na pełny etat, od poniedziałku do piątku, zwykle od dziewiątej do siedemnastej. Dwa dni w tygodniu pracuję zdalnie, z domu: wtedy zajmuję się obróbką zdjęć. Do moich obowiązków należy planowanie sesji zdjęciowych, fotografowanie i kontakt z modelami. Rano zawsze sprawdzam, które zdjęcia sprzedają się najlepiej, a potem mamy krótkie spotkanie zespołu. Najbardziej lubię w mojej pracy to, że każdy dzień jest inny i że mam bardzo sympatycznych kolegów. Nie lubię natomiast długiego siedzenia przy komputerze i pracy w nadgodzinach. Zarabiam nieźle, ale życie w Polsce jest coraz droższe. W przyszłości chciałbym otworzyć własne studio. Dlatego uczę się polskiego — muszę swobodnie rozmawiać z klientami, modelami i urzędnikami.'
  },
  sytuacja:{
    polecenie:'Jest Pan na rozmowie kwalifikacyjnej. Proszę krótko opowiedzieć o swoim doświadczeniu, odpowiedzieć na pytania pracodawcy i zapytać o godziny pracy, wynagrodzenie i możliwość pracy zdalnej.',
    rola_ja:'kandydat', rola_on:'pracodawca',
    ru:'Официальная ситуация: Pan / Pani, вежливые формы условного наклонения. На экзамене часто просят рассказать о себе и спросить об условиях.',
    cele:['Przywitać się i przedstawić','Opowiedzieć o doświadczeniu','Powiedzieć o swoich mocnych stronach','Zapytać o warunki pracy','Podziękować za rozmowę'],
    zwroty:[
      ['Mam osiem lat doświadczenia w fotografii.','У меня восемь лет опыта в фотографии.'],
      ['Pracowałem jako… w firmie…','Я работал… в компании…'],
      ['Moją mocną stroną jest…','Моя сильная сторона —…'],
      ['Chciałbym zapytać o godziny pracy.','Хотел бы спросить о рабочем времени.'],
      ['Czy jest możliwość pracy zdalnej?','Есть ли возможность удалённой работы?'],
      ['Jakie jest wynagrodzenie na tym stanowisku?','Какая зарплата на этой должности?'],
      ['Kiedy mogę spodziewać się odpowiedzi?','Когда ждать ответа?'],
    ],
    wzor:'Pracodawca: Dzień dobry, proszę usiąść. Proszę powiedzieć kilka słów o sobie.\nTy: Dzień dobry. Nazywam się Iwan Pietrow. Jestem fotografem, mam osiem lat doświadczenia w fotografii reklamowej. Ostatnie trzy lata pracowałem w studiu fotograficznym w Petersburgu.\nPracodawca: Dlaczego chce Pan zmienić pracę?\nTy: Chciałbym rozwijać się w międzynarodowym zespole. Poza tym razem z żoną chcemy zamieszkać w Polsce, nad morzem.\nPracodawca: Jakie są Pana mocne strony?\nTy: Jestem dobrze zorganizowany, mam dużo pomysłów i umiem pracować pod presją czasu. Mówię po rosyjsku, po angielsku i coraz lepiej po polsku.\nPracodawca: Dobrze. Czy ma Pan jakieś pytania?\nTy: Tak. Chciałbym zapytać o godziny pracy. Czy jest możliwość pracy zdalnej?\nPracodawca: Pracujemy od dziewiątej do siedemnastej. Dwa dni w tygodniu można obrabiać zdjęcia w domu.\nTy: A jakie jest wynagrodzenie na tym stanowisku?\nPracodawca: Od siedmiu do ośmiu tysięcy złotych brutto, zależnie od doświadczenia.\nTy: Rozumiem. Kiedy mogę spodziewać się odpowiedzi?\nPracodawca: Zadzwonimy do Pana w ciągu tygodnia.\nTy: Bardzo dziękuję za rozmowę. Do widzenia.'
  }
};

KURS_TEMATY.T06 = {
  tytul:'Charakter, uczucia, relacje', ru:'Характер, чувства, отношения', blok:'7.1 Człowiek',
  foto:'przyjaciele rozmawiają w kawiarni',
  slowa:[
    ['charakter','характер'],['cecha charakteru','черта характера'],['życzliwy','доброжелательный'],['uczynny','отзывчивый, готовый помочь'],
    ['szczery','искренний'],['cierpliwy','терпеливый'],['niecierpliwy','нетерпеливый'],['spokojny','спокойный'],['nerwowy','нервный'],
    ['odpowiedzialny','ответственный'],['pracowity','трудолюбивый'],['leniwy','ленивый'],['wesoły','весёлый'],['smutny','грустный'],
    ['nieśmiały','застенчивый'],['otwarty','открытый'],['towarzyski','общительный'],['uparty','упрямый'],['zazdrosny','ревнивый, завистливый'],
    ['przyjaźń','дружба'],['znajomy','знакомый'],['poznać kogoś','познакомиться с кем-то'],['zaprzyjaźnić się z (+ N.)','подружиться с'],
    ['ufać (+ C.)','доверять'],['polegać na (+ Msc.)','полагаться на'],['kłócić się','ссориться'],['pogodzić się','помириться'],
    ['cieszyć się z (+ D.)','радоваться чему-то'],['martwić się o (+ B.)','переживать за'],['denerwować się','нервничать, злиться'],
    ['czuć się samotnie','чувствовать себя одиноко'],['zaufanie','доверие'],
    ['zaręczyć się','обручиться'],['narzeczony','жених'],['narzeczona','невеста'],['pierścionek','кольцо (на палец)'],['ślub','свадьба (церемония)'],['brać ślub','жениться, выходить замуж'],['oświadczyć się','сделать предложение'],
  ],
  zwroty:[
    ['Jest bardzo życzliwym człowiekiem.','Он очень доброжелательный человек.'],
    ['Można na nim polegać.','На него можно положиться.'],
    ['Łatwo nawiązuje kontakty.','Он легко заводит знакомства.'],
    ['Czasami bywa uparty.','Иногда бывает упрямым.'],
    ['Cieszę się, że cię widzę!','Рад тебя видеть!'],
    ['Bardzo mi przykro.','Мне очень жаль.'],
    ['Pokłóciliśmy się, ale szybko się pogodziliśmy.','Мы поссорились, но быстро помирились.'],
  ],
  monolog:{
    temat:'Mój przyjaciel / moja przyjaciółka.',
    plan:['Kim jest i skąd się znacie','Cechy charakteru — z przykładami','Co lubicie robić razem','Czy kiedyś się pokłóciliście','Co jest dla Pana ważne w przyjaźni'],
    pytania:['Jak poznał Pan swojego najlepszego przyjaciela?','Jaki on jest?','Co lubicie robić razem?','Jak często się widujecie?','Czy kiedyś się pokłóciliście?','Co jest najważniejsze w przyjaźni?'],
    ru:'Каждую черту характера подкрепляй примером — это и есть «развёрнутый ответ», за который ставят баллы.',
    wzor:'Moją najbliższą przyjaciółką w Gdańsku jest Ola. Poznaliśmy się dwa lata temu na kursie polskiego — ona była nauczycielką, a ja studentem. Ola jest bardzo cierpliwa i życzliwa. Kiedy nie rozumiałem gramatyki, zawsze tłumaczyła mi wszystko jeszcze raz, bez nerwów. Jest też towarzyska i wesoła, więc łatwo nawiązuje kontakty: zna chyba połowę miasta. Czasami bywa trochę uparta, ale to mi nie przeszkadza. Spotykamy się zwykle w weekendy. Chodzimy razem na długie spacery po plaży albo do kawiarni na starówce, gdzie rozmawiamy o książkach i filmach. Raz pokłóciliśmy się o politykę, ale szybko się pogodziliśmy. Myślę, że w przyjaźni najważniejsze są szczerość i zaufanie. Prawdziwy przyjaciel cieszy się z twoich sukcesów i pomaga, kiedy masz problem.'
  },
  sytuacja:{
    polecenie:'Pana kolega z pracy jest smutny, bo nie dostał awansu. Proszę z nim porozmawiać: zapytać, co się stało, pocieszyć go i zaproponować, żebyście razem gdzieś wyszli.',
    rola_ja:'kolega z pracy', rola_on:'smutny kolega',
    ru:'Неформальная ситуация, на «ты». Функции из официального каталога: выразить сочувствие, утешить, предложить.',
    cele:['Zapytać, co się stało','Wyrazić współczucie','Pocieszyć','Zaproponować wspólne wyjście','Ustalić, kiedy'],
    zwroty:[
      ['Co się stało? Wyglądasz na smutnego.','Что случилось? Ты выглядишь грустным.'],
      ['Bardzo mi przykro.','Мне очень жаль.'],
      ['Nie przejmuj się.','Не переживай.'],
      ['Na pewno następnym razem się uda.','В следующий раз обязательно получится.'],
      ['Może pójdziemy gdzieś po pracy?','Может, сходим куда-нибудь после работы?'],
      ['To ci dobrze zrobi.','Тебе это пойдёт на пользу.'],
    ],
    wzor:'Ty: Cześć, Tomek. Co się stało? Wyglądasz na smutnego.\nKolega: A, nic… Nie dostałem tego awansu. Szef wybrał Kasię.\nTy: Naprawdę? Bardzo mi przykro. Wiem, jak bardzo ci zależało.\nKolega: Pracowałem nad tym projektem pół roku…\nTy: Wiem i wszyscy widzieli, że świetnie ci poszło. Nie przejmuj się, na pewno następnym razem się uda.\nKolega: Może… Ale teraz nie mam na nic ochoty.\nTy: Rozumiem. Słuchaj, może pójdziemy dziś po pracy na kręgle? To ci dobrze zrobi.\nKolega: Kręgle brzmią nieźle. Ale dzisiaj nie mogę, muszę odebrać córkę.\nTy: To może jutro o szóstej?\nKolega: Jutro pasuje. Dzięki, że ze mną porozmawiałeś.\nTy: Nie ma za co. Do jutra!'
  }
};

KURS_TEMATY.T07 = {
  tytul:'Zakupy i pieniądze', ru:'Покупки и деньги', blok:'7.10 Zakupy',
  foto:'ludzie robią zakupy na targu',
  slowa:[
    ['sklep spożywczy','продуктовый магазин'],['supermarket','супермаркет'],['piekarnia','пекарня'],['drogeria','магазин косметики и бытовой химии'],
    ['targ','рынок'],['bazar','базар, рынок'],['centrum handlowe','торговый центр'],['kasa','касса'],['kasjer','кассир'],['kasjerka','кассирша'],['sprzedawca','продавец'],
    ['koszyk','корзина (в магазине)'],['wózek','тележка'],['paragon','чек'],['reklamacja','жалоба, рекламация'],['zwrot towaru','возврат товара'],
    ['promocja','акция (в магазине)'],['rabat','скидка'],['wyprzedaż','распродажа'],['cena','цена'],['tani','дешёвый'],['drogi','дорогой'],
    ['płacić gotówką','платить наличными'],['płacić kartą','платить картой'],['reszta','сдача'],['portfel','кошелёк'],
    ['kilogram','килограмм'],['pół kilo','полкило'],['deko (dekagram)','10 граммов'],['opakowanie','упаковка'],['butelka','бутылка'],['puszka','банка (жестяная)'],
    ['bochenek chleba','буханка хлеба'],['para butów','пара обуви'],['kosztować','стоить'],['wydawać pieniądze','тратить деньги'],['oszczędzać','экономить, копить'],
  ],
  zwroty:[
    ['Poproszę kilo jabłek i dwadzieścia deko sera.','Дайте, пожалуйста, кило яблок и двести граммов сыра (20 deko = 200 г).'],
    ['Ile to kosztuje?','Сколько это стоит?'],
    ['Czy mogę zapłacić kartą?','Можно оплатить картой?'],
    ['Poproszę paragon.','Дайте, пожалуйста, чек.'],
    ['Chciałbym to zwrócić.','Я хотел бы это вернуть.'],
    ['Czy jest coś tańszego?','Есть что-нибудь подешевле?'],
    ['Reszty nie trzeba.','Сдачи не надо.'],
  ],
  monolog:{
    temat:'Jak i gdzie robi Pan zakupy?',
    plan:['Gdzie robi Pan zakupy na co dzień','Jak często i z kim','Co kupuje Pan najczęściej','Sklep czy internet — zalety i wady','Czy oszczędza Pan pieniądze'],
    pytania:['Gdzie robi Pan zakupy?','Jak często chodzi Pan do sklepu?','Co kupuje Pan najczęściej?','Czy kupuje Pan przez internet?','Co Pan sądzi o zamkniętych sklepach w niedzielę?','Czy lubi Pan chodzić na zakupy?'],
    ru:'Хорошая тема, чтобы показать сравнения: taniej, świeższe, wygodniej — за это ставят баллы за «средства языка».',
    wzor:'Zakupy spożywcze robię zwykle dwa razy w tygodniu w supermarkecie niedaleko domu. Kupuję tam chleb, nabiał, mięso, warzywa i owoce. W sobotę rano chodzę z żoną na targ, bo tam warzywa są świeższe i często tańsze niż w sklepie. Lubię też małą piekarnię na naszej ulicy — mają tam najlepszy chleb w okolicy. Ubrania i elektronikę kupuję najczęściej przez internet. To wygodne, bo nie tracę czasu, a towar przychodzi do domu. Z drugiej strony czasem ubrania nie pasują i trzeba je zwracać. W Polsce większość sklepów jest zamknięta w niedziele, więc trzeba planować zakupy wcześniej. Na początku to mnie denerwowało, ale teraz uważam, że to dobre rozwiązanie, bo sprzedawcy też mają prawo do odpoczynku. Staram się nie wydawać za dużo i zawsze robię listę zakupów.'
  },
  sytuacja:{
    polecenie:'Tydzień temu kupił Pan czajnik elektryczny. Dzisiaj przestał działać. Proszę pójść do sklepu, wyjaśnić problem i poprosić o wymianę albo zwrot pieniędzy.',
    rola_ja:'klient', rola_on:'sprzedawca',
    ru:'Жалоба — одна из самых частых экзаменационных ситуаций. Вежливо, но настойчиво. Не забудь про чек (paragon).',
    cele:['Powiedzieć, w jakiej sprawie Pan przychodzi','Opisać problem','Pokazać paragon','Poprosić o wymianę lub zwrot','Zgodzić się na rozwiązanie'],
    zwroty:[
      ['Chciałbym złożyć reklamację.','Хочу подать жалобу.'],
      ['Kupiłem ten czajnik tydzień temu.','Я купил этот чайник неделю назад.'],
      ['Przestał działać.','Он перестал работать.'],
      ['Mam paragon.','У меня есть чек.'],
      ['Czy mogę go wymienić na nowy?','Можно обменять на новый?'],
      ['Wolałbym zwrot pieniędzy.','Я бы предпочёл возврат денег.'],
      ['Jak długo to potrwa?','Сколько это займёт?'],
    ],
    wzor:'Sprzedawca: Dzień dobry, w czym mogę pomóc?\nTy: Dzień dobry. Chciałbym złożyć reklamację. Tydzień temu kupiłem w państwa sklepie ten czajnik, a dziś rano przestał działać.\nSprzedawca: Co dokładnie się stało?\nTy: Włączam go, ale woda się nie gotuje. Lampka też się nie świeci.\nSprzedawca: Ma Pan paragon?\nTy: Tak, proszę.\nSprzedawca: Dziękuję. Niestety, musimy wysłać czajnik do serwisu. To potrwa około dwóch tygodni.\nTy: Dwa tygodnie? To długo. Czy mogę go po prostu wymienić na nowy?\nSprzedawca: Niestety, tego modelu już nie mamy.\nTy: W takim razie wolałbym zwrot pieniędzy albo inny czajnik w tej samej cenie.\nSprzedawca: Dobrze, może Pan wybrać inny model. Ten za osiemdziesiąt dziewięć złotych jest bardzo dobry.\nTy: Dobrze, wezmę go. Dziękuję za pomoc.'
  }
};

KURS_TEMATY.T08 = {
  tytul:'Kontakt: telefon, wiadomości, listy', ru:'Связь: телефон, сообщения, письма', blok:'7.1 Człowiek',
  foto:'człowiek rozmawia przez telefon',
  slowa:[
    ['utrzymywać kontakt','поддерживать связь'],['dzwonić do (+ D.)','звонить кому-то'],['zadzwonić do (+ D.)','позвонить кому-то'],['oddzwonić','перезвонить'],
    ['odebrać telefon','взять трубку'],['rozmowa telefoniczna','телефонный разговор'],['wiadomość','сообщение'],
    ['wysłać wiadomość','отправить сообщение'],['dostać wiadomość','получить сообщение'],['e-mail','электронное письмо'],['załącznik','вложение (к письму)'],
    ['nadawca','отправитель'],['adresat','получатель, адресат'],['list','письмо'],['kartka pocztowa','открытка'],['znaczek','марка (почтовая)'],['koperta','конверт'],
    ['komunikator','мессенджер'],['wideorozmowa','видеозвонок'],['media społecznościowe','социальные сети'],
    ['umówić się z (+ N.) na (+ B.)','договориться о встрече'],['odwołać spotkanie','отменить встречу'],
    ['przełożyć na (+ B.)','перенести на'],['przekazać wiadomość','передать сообщение'],['pozdrowić','поприветствовать, передать привет'],['pozdrowienia','приветы, привет (в письме)'],
    ['poczta głosowa','голосовая почта'],['pomyłka','ошибка (не туда попали)'],
  ],
  zwroty:[
    ['Halo? Kto mówi?','Алло? Кто говорит?'],
    ['Dzwonię w sprawie…','Звоню по поводу…'],
    ['Czy zastałem Marka?','Марек дома / на месте?'],
    ['Przepraszam, to chyba pomyłka.','Извините, вы, кажется, ошиблись номером.'],
    ['Proszę przekazać, że dzwoniłem.','Передайте, пожалуйста, что я звонил.'],
    ['Oddzwonię za godzinę.','Перезвоню через час.'],
    ['Pozdrów ode mnie rodziców!','Передай привет родителям!'],
  ],
  monolog:{
    temat:'Jak utrzymuje Pan kontakt z rodziną i przyjaciółmi?',
    plan:['Z kim utrzymuje Pan kontakt','Jak: telefon, internet, spotkania','Jak często','Rozmowa na żywo czy przez internet — co lepsze','Czy pisze Pan jeszcze listy lub kartki'],
    pytania:['Jak często rozmawia Pan z rodziną?','Z jakich komunikatorów Pan korzysta?','Woli Pan dzwonić czy pisać wiadomości?','Kiedy ostatnio wysłał Pan kartkę pocztową?','Czy media społecznościowe pomagają utrzymywać kontakty?'],
    ru:'Тема из официального каталога: «utrzymywanie kontaktu (korespondowanie, spotkania)».',
    wzor:'Moja rodzina i wielu przyjaciół mieszkają daleko, w innym kraju, więc kontakt jest dla mnie bardzo ważny. Z rodzicami rozmawiam przez wideorozmowę dwa albo trzy razy w tygodniu, zwykle wieczorem. Mama zawsze pyta, czy dobrze jem i czy nie jest mi zimno. Z siostrą piszemy do siebie prawie codziennie na komunikatorze — wysyłamy sobie zdjęcia i krótkie wiadomości. Z kolegami w Polsce wolę spotykać się na żywo, na przykład w kawiarni albo na rowerach. Myślę, że internet bardzo pomaga utrzymywać kontakty, ale nie zastąpi prawdziwej rozmowy przy jednym stole. Tradycyjnych listów nie piszę już wcale. Wysyłam tylko kartki pocztowe — na Boże Narodzenie i z wakacji. Moja babcia bardzo je lubi i trzyma wszystkie w specjalnym pudełku.'
  },
  sytuacja:{
    polecenie:'Dzwoni Pan do kolegi, ale odbiera jego żona. Kolegi nie ma w domu. Proszę się przedstawić, przekazać wiadomość (spotkanie z piątku jest przełożone na sobotę) i poprosić, żeby kolega oddzwonił.',
    rola_ja:'dzwoniący', rola_on:'żona kolegi',
    ru:'Телефонный разговор — отдельное требование стандарта B1: представиться, попросить к телефону, оставить сообщение. С незнакомой женщиной — на «Pani».',
    cele:['Przywitać się i przedstawić','Poprosić do telefonu kolegę','Przekazać wiadomość o zmianie terminu','Poprosić o oddzwonienie','Podziękować i pożegnać się'],
    zwroty:[
      ['Dzień dobry, mówi Iwan Pietrow.','Добрый день, это Иван Петров.'],
      ['Czy zastałem Marka?','Можно Марека? (Марек дома?)'],
      ['Kiedy wróci?','Когда он вернётся?'],
      ['Czy mogę zostawić wiadomość?','Можно оставить сообщение?'],
      ['Proszę mu przekazać, że…','Передайте ему, пожалуйста, что…'],
      ['Niech do mnie oddzwoni.','Пусть он мне перезвонит.'],
      ['Dziękuję, do usłyszenia.','Спасибо, до свидания (по телефону).'],
    ],
    wzor:'Żona kolegi: Halo?\nTy: Dzień dobry, mówi Iwan Pietrow, kolega Marka z pracy. Czy zastałem Marka?\nŻona kolegi: Dzień dobry. Niestety, Marka nie ma. Pojechał do mamy.\nTy: A kiedy wróci?\nŻona kolegi: Chyba dopiero wieczorem, koło dziewiątej. Coś mu przekazać?\nTy: Tak, jeśli można. Proszę mu przekazać, że nasze piątkowe spotkanie jest przełożone na sobotę.\nŻona kolegi: Na sobotę… O której godzinie?\nTy: O tej samej, o szóstej, w tej samej kawiarni na Długiej.\nŻona kolegi: Dobrze, zapisałam. Coś jeszcze?\nTy: Niech do mnie oddzwoni, jeśli sobota mu nie pasuje. Ma mój numer.\nŻona kolegi: Dobrze, przekażę.\nTy: Bardzo dziękuję. Do usłyszenia.'
  }
};

KURS_TEMATY.T09 = {
  tytul:'Dzień codzienny', ru:'Распорядок дня', blok:'7.3 Życie codzienne',
  foto:'rodzina rano przy śniadaniu',
  slowa:[
    ['budzić się','просыпаться'],['obudzić się','проснуться'],['wstawać','вставать'],['wstać','встать'],['myć się','умываться'],
    ['brać prysznic','принимать душ'],['ubierać się','одеваться'],['jeść śniadanie','завтракать'],['jeść obiad','обедать'],['jeść kolację','ужинать'],
    ['wychodzić z domu','выходить из дома'],['wracać do domu','возвращаться домой'],['sprzątać','убирать'],['gotować','готовить'],
    ['robić pranie','стирать'],['prasować','гладить'],['zmywać naczynia','мыть посуду'],['robić zakupy','делать покупки'],
    ['odpoczywać','отдыхать'],['kłaść się spać','ложиться спать'],['zasypiać','засыпать'],
    ['rano','утром'],['po południu','днём, после обеда'],['wieczorem','вечером'],['w nocy','ночью'],['w dzień roboczy','в будний день'],['w weekend','в выходные'],
    ['zwykle','обычно'],['zazwyczaj','обычно, как правило'],['czasami','иногда'],['rzadko','редко'],['nigdy','никогда'],['o której?','во сколько?'],
    ['za kwadrans ósma','без четверти восемь'],['obowiązki domowe','домашние обязанности'],
  ],
  zwroty:[
    ['Zwykle wstaję o siódmej.','Обычно встаю в семь.'],
    ['Najpierw biorę prysznic, potem jem śniadanie.','Сначала принимаю душ, потом завтракаю.'],
    ['Z domu wychodzę za kwadrans ósma.','Из дома выхожу без четверти восемь.'],
    ['Po pracy robię zakupy.','После работы делаю покупки.'],
    ['W weekendy śpię dłużej.','По выходным сплю дольше.'],
    ['Kładę się spać około jedenastej.','Ложусь спать около одиннадцати.'],
  ],
  monolog:{
    temat:'Mój zwykły dzień.',
    plan:['Poranek: o której wstajesz, co robisz','Praca lub nauka','Popołudnie i obowiązki domowe','Wieczór i czas wolny','Czym różni się weekend'],
    pytania:['O której Pan zwykle wstaje?','Co je Pan na śniadanie?','Jak dojeżdża Pan do pracy?','Kto w Pana domu sprząta i gotuje?','Co robi Pan wieczorem?','Jak wygląda Pana weekend?'],
    ru:'Самая «безопасная» тема: её почти всегда можно вплести в любой монолог. Отработай связки: najpierw, potem, po pracy, wieczorem.',
    wzor:'W dni robocze wstaję o siódmej. Najpierw biorę prysznic i robię kawę, potem jem szybkie śniadanie — zwykle owsiankę albo kanapki. Za kwadrans ósma wychodzę z domu i jadę tramwajem do pracy. Podróż trwa około dwudziestu minut, więc w tramwaju słucham polskich podcastów. Pracuję do siedemnastej. Po pracy robię zakupy, a potem gotuję obiad. W naszym domu obowiązki dzielimy po równo: ja gotuję, a żona sprząta i robi pranie. Wieczorem uczę się polskiego albo oglądamy z żoną serial, a kiedy Oliwia już śpi, zakładam słuchawki i tworzę muzykę. Kładę się spać około jedenastej, bo rano trudno mi wstać. Weekend wygląda zupełnie inaczej. W sobotę śpię dłużej, a potem idę na nordic walking do parku niedaleko domu. Po południu idziemy całą rodziną na długi spacer nad morze. W niedzielę często odwiedzamy znajomych albo zapraszamy ich do siebie. Brakuje mi tylko czasu na podróże.'
  },
  sytuacja:{
    polecenie:'Chce Pan umówić się z kolegą na wspólną naukę polskiego. Proszę zaproponować dzień i godzinę. Kolega ma dużo zajęć — proszę znaleźć termin, który pasuje wam obu, i ustalić miejsce.',
    rola_ja:'kolega', rola_on:'zajęty kolega',
    ru:'Договориться о времени: дни недели, часы, «pasuje ci?». Отлично тренирует числительные и время.',
    cele:['Zaproponować wspólną naukę','Zaproponować dzień i godzinę','Reagować na odmowę i proponować inne terminy','Ustalić miejsce','Potwierdzić termin'],
    zwroty:[
      ['Pasuje ci środa o szóstej?','Тебе подходит среда в шесть?'],
      ['A może w czwartek wieczorem?','А может, в четверг вечером?'],
      ['Niestety, wtedy nie mogę.','К сожалению, тогда не могу.'],
      ['O której ci pasuje?','Во сколько тебе удобно?'],
      ['To jesteśmy umówieni.','Значит, договорились.'],
      ['Do zobaczenia w piątek!','Увидимся в пятницу!'],
    ],
    wzor:'Ty: Cześć, Paweł! Słuchaj, może będziemy się razem uczyć polskiego do egzaminu? We dwóch łatwiej.\nKolega: Dobry pomysł! Ale mam teraz strasznie dużo zajęć.\nTy: Pasuje ci środa o szóstej?\nKolega: W środę mam basen od szóstej do siódmej.\nTy: To może w czwartek wieczorem?\nKolega: W czwartek pracuję do późna. Wolne popołudnie mam dopiero w piątek.\nTy: Piątek jest dobry. O której ci pasuje?\nKolega: Może o piątej?\nTy: O piątej kończę pracę… Może wpół do szóstej?\nKolega: Dobrze, wpół do szóstej. A gdzie?\nTy: Może w bibliotece na Przymorzu? Jest cicho i są duże stoły.\nKolega: Super. To jesteśmy umówieni: piątek, wpół do szóstej, biblioteka.\nTy: Do zobaczenia w piątek!'
  }
};

KURS_TEMATY.T10 = {
  tytul:'Jedzenie i restauracja', ru:'Еда и ресторан', blok:'7.11 Żywność i napoje',
  foto:'ludzie jedzą w restauracji',
  slowa:[
    ['posiłek','приём пищи'],['śniadanie','завтрак'],['obiad','обед'],['kolacja','ужин'],['danie główne','основное блюдо'],['przystawka','закуска'],
    ['zupa','суп'],['deser','десерт'],['napój','напиток'],['mięso','мясо'],['ryba','рыба'],['warzywa','овощи'],['owoce','фрукты'],
    ['pieczywo','хлеб и выпечка'],['nabiał','молочные продукты'],['wegetariański','вегетарианский'],['ostry','острый'],['słodki','сладкий'],['słony','солёный'],['kwaśny','кислый'],
    ['smaczny','вкусный'],['pyszny','очень вкусный'],['gotować','готовить (еду), варить'],['smażyć','жарить'],['piec','печь (в духовке)'],['przepis (kulinarny)','рецепт (кулинарный)'],
    ['kawiarnia','кафе'],['bar mleczny','столовая (бар млечны)'],['karta (w restauracji)','меню (букв. «карта»)'],['menu','меню'],['kelner','официант'],['kelnerka','официантка'],
    ['zamówić','заказать'],['rachunek','счёт'],['napiwek','чаевые'],['zarezerwować stolik','забронировать столик'],
    ['sztućce','столовые приборы'],['nóż','нож'],['widelec','вилка'],['łyżka','ложка'],['talerz','тарелка'],['szklanka','стакан'],['filiżanka','чашка'],
    ['pierogi','вареники (польские пироги)'],['żurek','журек (кислый суп на закваске)'],['bigos','бигос (тушёная капуста с мясом)'],['schabowy','свиная отбивная'],['Smacznego!','Приятного аппетита!'],
    ['rezerwacja','бронь'],['menu dla dzieci','детское меню'],
  ],
  zwroty:[
    ['Poproszę kartę.','Дайте, пожалуйста, меню.'],
    ['Co pan poleca?','Что вы посоветуете?'],
    ['Na pierwsze danie poproszę żurek.','На первое — журек, пожалуйста.'],
    ['Dla mnie kotlet schabowy z ziemniakami.','Мне отбивную с картофелем.'],
    ['Czy to danie jest ostre?','Это блюдо острое?'],
    ['Poproszę rachunek.','Счёт, пожалуйста.'],
    ['Smacznego!','Приятного аппетита!'],['Dziękuję, nawzajem.','Спасибо, и вам тоже.'],
  ],
  monolog:{
    temat:'Kuchnia polska i moje ulubione jedzenie.',
    plan:['Co Pan je na co dzień','Kto gotuje w domu','Ulubione dania','Kuchnia polska — co Pan lubi, czego nie','Jak często chodzi Pan do restauracji'],
    pytania:['Co Pan zwykle je na śniadanie?','Czy lubi Pan gotować?','Jakie jest Pana ulubione danie?','Co Pan sądzi o polskiej kuchni?','Jakie polskie danie poleciłby Pan turyście?','Jak często jada Pan w restauracji?'],
    ru:'Сравни кухни — это повод показать степени сравнения и союзы natomiast, chociaż, dlatego.',
    wzor:'Na co dzień jem dość prosto. Na śniadanie zwykle jem owsiankę albo kanapki z serem, w pracy jem obiad w stołówce, a wieczorem gotujemy z żoną coś ciepłego. Lubię gotować, szczególnie w weekendy, kiedy mam więcej czasu. Moim ulubionym daniem są pierogi ruskie — z ziemniakami, serem i cebulką. Kiedy przyjechałem do Polski, byłem zdziwiony, że nazywają się „ruskie”, chociaż u nas w domu robiliśmy je inaczej. Bardzo smakuje mi też żurek, szczególnie podawany w chlebie. Natomiast bigos jest dla mnie trochę za ciężki. Polska kuchnia jest smaczna, ale dość tłusta, dlatego staram się jeść też dużo warzyw i ryb. Do restauracji chodzimy mniej więcej raz w miesiącu. Lubię też bary mleczne — są tanie, a jedzenie jest jak domowe. Turyście poleciłbym na pewno pierogi i pączki.'
  },
  sytuacja:{
    polecenie:'Jest Pan w restauracji ze znajomą, która jest wegetarianką. Proszę zapytać kelnera o dania bez mięsa, zamówić jedzenie i napoje dla was obojga, a na końcu poprosić o rachunek.',
    rola_ja:'gość restauracji', rola_on:'kelner',
    ru:'Ресторан — классика экзамена. Осложнение: спутница не ест мясо, придётся расспросить официанта.',
    cele:['Poprosić o kartę','Zapytać o dania wegetariańskie','Zamówić dla siebie i znajomej','Zamówić napoje','Poprosić o rachunek i zapłacić'],
    zwroty:[
      ['Czy macie państwo coś bez mięsa?','Есть ли у вас что-нибудь без мяса?'],
      ['Co pan poleca?','Что вы посоветуете?'],
      ['Dla pani… a dla mnie…','Для дамы… а мне…'],
      ['Na początek poprosimy…','Для начала нам…'],
      ['Do picia poproszę…','Из напитков…'],
      ['Płacimy razem.','Платим вместе.'],
    ],
    wzor:'Kelner: Dzień dobry, proszę bardzo, oto karta.\nTy: Dziękuję. Moja znajoma jest wegetarianką. Czy macie państwo coś bez mięsa?\nKelner: Oczywiście. Polecam pierogi ruskie albo krem z dyni.\nTy: To dla pani poproszę pierogi ruskie. A co pan poleca z dań mięsnych?\nKelner: Naszą specjalnością jest kotlet schabowy z ziemniakami i kapustą.\nTy: Dobrze, dla mnie schabowy. A na początek dwa razy krem z dyni.\nKelner: Co podać państwu do picia?\nTy: Dla pani sok jabłkowy, a dla mnie wodę gazowaną.\nKelner: Dziękuję.\nTy: Przepraszam, poproszę rachunek.\nKelner: Płacą państwo razem czy osobno?\nTy: Razem. Czy mogę zapłacić kartą?\nKelner: Oczywiście. Proszę bardzo.'
  }
};

KURS_TEMATY.T11 = {
  tytul:'Czas wolny, hobby, sport', ru:'Свободное время, хобби, спорт', blok:'7.4 Czas wolny, rozrywka',
  foto:'ludzie uprawiają sport w parku',
  slowa:[
    ['czas wolny','свободное время'],['hobby','хобби'],['zainteresowania','интересы, увлечения'],['interesować się (+ N.)','интересоваться'],
    ['uprawiać sport','заниматься спортом'],['biegać','бегать'],['pływać','плавать'],['jeździć na rowerze','кататься на велосипеде'],['jeździć na nartach','кататься на лыжах'],
    ['grać w piłkę','играть в мяч, в футбол'],['grać w tenisa','играть в теннис'],['grać w szachy','играть в шахматы'],['grać na gitarze','играть на гитаре'],['grać na pianinie','играть на пианино'],
    ['chodzić na siłownię','ходить в спортзал'],['chodzić na basen','ходить в бассейн'],['chodzić po górach','ходить в походы по горам'],
    ['robić zdjęcia','делать снимки, фотографировать'],['fotografować','фотографировать'],['malować','рисовать'],['słuchać muzyki','слушать музыку'],['oglądać seriale','смотреть сериалы'],
    ['pracować w ogrodzie','работать в саду'],['drużyna','команда (спортивная)'],['trening','тренировка'],['mecz','матч'],
    ['nordic walking','скандинавская ходьба'],['kolekcjonować','коллекционировать'],['płyta winylowa','виниловая пластинка'],['gramofon','проигрыватель пластинок'],['kijki','палки (для ходьбы)'],['muzyka elektroniczna','электронная музыка'],['tworzyć muzykę','писать (создавать) музыку'],['słuchawki','наушники'],
    ['projektować','проектировать, делать дизайн'],['programować','программировать'],['sztuczna inteligencja','искусственный интеллект'],
    ['kibicować (+ C.)','болеть за'],['karnet','абонемент'],['kondycja','физическая форма'],['odprężać się','расслабляться'],
  ],
  zwroty:[
    ['W wolnym czasie lubię…','В свободное время люблю…'],
    ['Interesuję się designem i muzyką elektroniczną.','Я увлекаюсь дизайном и электронной музыкой.'],
    ['Tworzę muzykę na komputerze: techno, house i ambient.','Пишу музыку на компьютере: техно, хаус и эмбиент.'],
    ['Programuję z pomocą sztucznej inteligencji.','Программирую с помощью искусственного интеллекта.'],
    ['Trzy razy w tygodniu chodzę na nordic walking.','Три раза в неделю хожу на скандинавскую ходьбу.'],
    ['Uwielbiam podróże.','Обожаю путешествия.'],
    ['Kolekcjonuję płyty winylowe.','Я коллекционирую виниловые пластинки.'],
    ['Gram z córką w badmintona, a chciałbym nauczyć się grać na pianinie.','Играю с дочкой в бадминтон, а хотел бы научиться играть на пианино.'],
    ['To mnie odpręża.','Это меня расслабляет.'],
    ['Chciałbym nauczyć się…','Хотел бы научиться…'],
  ],
  monolog:{
    temat:'Moje hobby i czas wolny.',
    plan:['Co Pan robi w wolnym czasie','Hobby: od kiedy i dlaczego','Sport','Czas wolny w dzień roboczy i w weekend','Czego chciałby się Pan nauczyć'],
    pytania:['Co lubi Pan robić w wolnym czasie?','Od kiedy interesuje się Pan swoim hobby?','Czy uprawia Pan jakiś sport?','Ile ma Pan czasu wolnego?','Woli Pan spędzać czas sam czy z innymi?','Jakiego hobby chciałby Pan spróbować?'],
    ru:'Ловушка темы: <b>grać w</b> + винительный — игры и спорт (w piłkę, w szachy), <b>grać na</b> + предложный — инструменты (na gitarze).',
    wzor:'Fotografia to moja praca, więc w wolnym czasie wolę robić coś zupełnie innego. Moją największą pasją jest muzyka. Kolekcjonuję płyty winylowe: mam ich już ponad dwieście, głównie z muzyką elektroniczną i jazzem. W weekendy lubię szukać starych płyt w małych sklepach i na pchlich targach. Od kilku lat sam też tworzę muzykę na komputerze — najczęściej techno, house i ambient. Robię to wieczorem, w słuchawkach, kiedy córka już śpi. To mnie odpręża lepiej niż telewizja. Interesuję się też designem: lubię projektować okładki do swoich utworów i proste aplikacje. Od niedawna zajmuję się vibe codingiem, czyli programowaniem z pomocą sztucznej inteligencji. W ten sposób zrobiłem nawet aplikację do nauki polskiego! Dbam również o kondycję. Trzy razy w tygodniu chodzę na nordic walking do parku niedaleko domu, a czasem gram z córką w badmintona. W weekendy mam więcej czasu, więc często wyjeżdżamy całą rodziną za miasto. Uwielbiam podróże: każdego roku staramy się zobaczyć nowy kraj. Chciałbym nauczyć się grać na pianinie, bo przyda mi się to przy tworzeniu muzyki. Myślę, że hobby jest bardzo ważne, bo pomaga odpocząć od pracy i poznać nowych ludzi.'
  },
  sytuacja:{
    polecenie:'Dzwoni Pan do klubu sportowego, żeby zapisać się na zajęcia z pływania dla dorosłych. Proszę zapytać o dni i godziny zajęć, cenę karnetu, zniżki i o to, co trzeba ze sobą zabrać.',
    rola_ja:'klient', rola_on:'recepcjonistka klubu',
    ru:'Официальный звонок: расписание, цена, условия. Много чисел и вопросов.',
    cele:['Powiedzieć, w jakiej sprawie Pan dzwoni','Zapytać o dni i godziny zajęć','Zapytać o cenę i zniżki','Zapytać, co trzeba zabrać','Zapisać się'],
    zwroty:[
      ['Chciałbym zapisać się na zajęcia z pływania.','Хочу записаться на плавание.'],
      ['W jakie dni są zajęcia?','По каким дням занятия?'],
      ['Ile kosztuje karnet miesięczny?','Сколько стоит абонемент на месяц?'],
      ['Czy jest jakaś zniżka?','Есть ли какая-нибудь скидка?'],
      ['Co muszę ze sobą zabrać?','Что нужно взять с собой?'],
      ['Proszę mnie zapisać na wtorek.','Запишите меня, пожалуйста, на вторник.'],
    ],
    wzor:'Recepcjonistka: Klub Sportowy „Fala”, dzień dobry.\nTy: Dzień dobry. Chciałbym zapisać się na zajęcia z pływania dla dorosłych. Nie umiem dobrze pływać.\nRecepcjonistka: Oczywiście. Mamy grupę dla początkujących.\nTy: W jakie dni są zajęcia?\nRecepcjonistka: We wtorki i czwartki o dziewiętnastej albo w soboty o dziesiątej rano.\nTy: Wtorki i czwartki wieczorem mi pasują. Ile kosztuje karnet?\nRecepcjonistka: Karnet na miesiąc, osiem zajęć, kosztuje dwieście czterdzieści złotych.\nTy: Czy jest jakaś zniżka?\nRecepcjonistka: Jeśli kupi Pan karnet na trzy miesiące, jest dziesięć procent taniej.\nTy: Na początek wezmę miesięczny. Co muszę ze sobą zabrać?\nRecepcjonistka: Strój kąpielowy, czepek, klapki i ręcznik.\nTy: Rozumiem. Proszę mnie zapisać na najbliższy wtorek. Nazywam się Iwan Pietrow.\nRecepcjonistka: Zapisałam. Zapraszamy we wtorek o dziewiętnastej.\nTy: Dziękuję bardzo, do widzenia.'
  }
};

KURS_TEMATY.T12 = {
  tytul:'Kultura: kino, teatr, muzea', ru:'Культура: кино, театр, музеи', blok:'7.4 Czas wolny, rozrywka',
  foto:'ludzie zwiedzają muzeum',
  slowa:[
    ['kino','кино, кинотеатр'],['seans','сеанс'],['komedia','комедия'],['dramat','драма'],['horror','фильм ужасов'],['film akcji','боевик'],['film dokumentalny','документальный фильм'],
    ['bilet normalny','полный билет'],['bilet ulgowy','льготный билет'],['rząd (w kinie)','ряд (в кино, театре)'],['miejsce','место'],['napisy','субтитры'],['dubbing','дубляж'],
    ['teatr','театр'],['spektakl','спектакль'],['przedstawienie','представление, спектакль'],['aktor','актёр'],['aktorka','актриса'],['reżyser','режиссёр'],
    ['scena','сцена'],['koncert','концерт'],['zespół (muzyczny)','музыкальная группа'],['wystawa','выставка'],['muzeum','музей'],['galeria','галерея'],
    ['obraz','картина'],['zwiedzać','осматривать (достопримечательности)'],['przewodnik','экскурсовод; путеводитель'],['audioprzewodnik','аудиогид'],
    ['wstęp wolny','вход бесплатный'],['wstęp płatny','вход платный'],['wzruszający','трогательный'],['nudny','скучный'],['zabawny','смешной'],
    ['robić wrażenie na (+ Msc.)','производить впечатление на'],['polecać (komu co)','рекомендовать'],
  ],
  zwroty:[
    ['Ostatnio byłem w kinie na filmie…','Недавно был в кино на фильме…'],
    ['Film opowiada o…','Фильм рассказывает о…'],
    ['Główną rolę gra…','Главную роль играет…'],
    ['Największe wrażenie zrobiła na mnie…','Больше всего меня впечатлила…'],
    ['Poproszę dwa bilety na seans o dziewiętnastej.','Два билета на сеанс в семь вечера (в 19:00).'],
    ['Polecam ten film każdemu, kto lubi…','Советую этот фильм всем, кто любит…'],
  ],
  monolog:{
    temat:'Kino, teatr, muzea — jak korzysta Pan z kultury?',
    plan:['Jak często chodzi Pan do kina, teatru, muzeum','Relacja: ostatnio obejrzany film lub zwiedzone muzeum','Co zrobiło na Panu największe wrażenie','Kino czy filmy w domu','Co poleciłby Pan turyście w Gdańsku'],
    pytania:['Jak często chodzi Pan do kina?','Jaki film ostatnio Pan obejrzał?','O czym był ten film?','Czy był Pan w polskim teatrze?','Jakie muzeum poleciłby Pan turyście?','Woli Pan oglądać filmy w kinie czy w domu?'],
    ru:'Это монолог-«отчёт» (relacja) — прошедшее время, совершенный вид для событий: byłem, zwiedziliśmy, zobaczyłem.',
    wzor:'W zeszłą niedzielę byłem z żoną w Europejskim Centrum Solidarności. To nowoczesne muzeum w Gdańsku, niedaleko stoczni, które opowiada historię „Solidarności” i zmian w Polsce w latach osiemdziesiątych. Zwiedzanie trwało prawie trzy godziny. Wypożyczyliśmy audioprzewodnik, ale część tekstów czytałem po polsku. Największe wrażenie zrobiły na mnie oryginalne tablice z postulatami strajkujących robotników. Na końcu weszliśmy na taras na dachu — widać stamtąd całą stocznię. Do kina chodzę rzadziej, mniej więcej raz w miesiącu, zwykle na filmy z napisami. Częściej oglądam filmy w domu, bo jest wygodniej i taniej. W polskim teatrze byłem tylko raz, na komedii w Teatrze Wybrzeże. Rozumiałem niewiele, ale atmosfera była wspaniała. Myślę, że muzea i teatr to świetny sposób, żeby lepiej poznać kraj, w którym się mieszka.'
  },
  sytuacja:{
    polecenie:'Jest Pan w kasie kina. Chce Pan kupić dwa bilety na wieczorny seans. Proszę zapytać o godziny seansów i o to, czy film jest z napisami, wybrać miejsca, zapytać o zniżki i zapłacić.',
    rola_ja:'widz', rola_on:'kasjerka w kinie',
    ru:'Покупка билетов: время сеанса, места, цена, льготы. Внимание к числам: 22 злотых — dwadzieścia dwa złote.',
    cele:['Zapytać o wieczorne seanse','Zapytać o napisy','Kupić dwa bilety i wybrać miejsca','Zapytać o zniżki','Zapłacić'],
    zwroty:[
      ['O której są dziś seanse na…?','Во сколько сегодня сеансы на…?'],
      ['Czy film jest z napisami?','Фильм с субтитрами?'],
      ['Czy są jeszcze miejsca w środku sali?','Есть ли ещё места в середине зала?'],
      ['Ile kosztuje bilet?','Сколько стоит билет?'],
      ['Czy jest zniżka dla studentów?','Есть ли скидка для студентов?'],
      ['Jeden normalny i jeden ulgowy.','Один полный и один льготный.'],
    ],
    wzor:'Kasjerka: Dzień dobry, słucham.\nTy: Dzień dobry. O której są dziś wieczorem seanse na film „Ostatni pociąg”?\nKasjerka: O osiemnastej trzydzieści i o dwudziestej pierwszej.\nTy: Czy film jest z napisami?\nKasjerka: To polski film, ale na seansie o dwudziestej pierwszej są angielskie napisy.\nTy: To poproszę dwa bilety na osiemnastą trzydzieści. Czy są jeszcze miejsca w środku sali?\nKasjerka: W środku już nie ma. Mogę zaproponować rząd ósmy, miejsca dwanaście i trzynaście, trochę z boku.\nTy: Dobrze, mogą być. Ile płacę?\nKasjerka: Dwa bilety normalne — pięćdziesiąt osiem złotych.\nTy: Czy jest zniżka dla studentów? Moja żona studiuje.\nKasjerka: Tak, z legitymacją studencką bilet kosztuje dwadzieścia dwa złote.\nTy: To jeden normalny i jeden ulgowy. Proszę, oto karta.'
  }
};

KURS_TEMATY.T13 = {
  tytul:'Podróże: transport, dworzec, lotnisko', ru:'Транспорт, вокзал, аэропорт', blok:'7.5 Podróże',
  foto:'ludzie na peronie, dworzec kolejowy',
  slowa:[
    ['podróż','поездка, путешествие'],['podróżować','путешествовать'],['komunikacja miejska','городской транспорт'],['przystanek','остановка'],
    ['dworzec kolejowy','железнодорожный вокзал'],['dworzec autobusowy','автовокзал'],['peron','платформа, перрон'],['tor','путь (железнодорожный)'],['rozkład jazdy','расписание'],
    ['bilet jednorazowy','разовый билет'],['bilet miesięczny','месячный проездной'],['skasować bilet','прокомпостировать билет'],['kontroler','контролёр'],['mandat','штраф'],
    ['przesiadka','пересадка'],['przesiąść się','пересесть'],['połączenie bezpośrednie','прямое сообщение'],['opóźnienie','опоздание, задержка'],['opóźniony','задерживается, опаздывает (о поезде, рейсе)'],
    ['odjazd','отправление'],['przyjazd','прибытие'],['wsiąść','сесть (в транспорт)'],['wysiąść','выйти (из транспорта)'],['lotnisko','аэропорт'],
    ['odprawa','регистрация (на рейс)'],['bagaż podręczny','ручная кладь'],['bagaż rejestrowany','багаж (сдаваемый)'],['walizka','чемодан'],['plecak','рюкзак'],
    ['rezerwacja','бронь'],['miejsce przy oknie','место у окна'],['w jedną stronę','в одну сторону'],['tam i z powrotem','туда и обратно'],
    ['godziny szczytu','часы пик'],['prom','паром'],
    ['zagubiony bagaż','потерянный багаж'],['kwit bagażowy','багажная квитанция'],['biuro bagażu','бюро багажа'],['zgłosić zgubienie','заявить о потере'],
    ['lęk przed lataniem','страх летать'],['turbulencje','турбулентность'],
  ],
  zwroty:[
    ['Poproszę bilet normalny do Krakowa, w jedną stronę.','Полный билет до Кракова в одну сторону, пожалуйста.'],
    ['Z którego peronu odjeżdża pociąg do Warszawy?','С какой платформы отходит поезд в Варшаву?'],
    ['Czy muszę się przesiadać?','Мне нужно делать пересадку?'],
    ['Pociąg jest opóźniony o dwadzieścia minut.','Поезд задерживается на двадцать минут.'],
    ['Gdzie mam wysiąść?','Где мне выйти?'],
    ['Ile trwa podróż?','Сколько длится поездка?'],
  ],
  monolog:{
    temat:'Podróżowanie — jak lubi Pan podróżować?',
    plan:['Jak jeździ Pan na co dzień','Długie trasy: pociąg, samochód, samolot — zalety i wady','Komunikacja miejska w Pana mieście','Najciekawsza i najgorsza podróż','Podróż marzeń'],
    pytania:['Jak dojeżdża Pan do pracy?','Woli Pan pociąg czy samochód?','Co Pan sądzi o komunikacji miejskiej w Gdańsku?','Jaka była Pana najciekawsza podróż?','Czy zdarzyło się Panu spóźnić na pociąg albo samolot?','Dokąd chciałby Pan pojechać?'],
    ru:'Хорошее место для сравнений: szybciej, wygodniej, taniej, najciekawsza podróż.',
    wzor:'Na co dzień jeżdżę komunikacją miejską — tramwajem albo kolejką SKM. Bilety kupuję w aplikacji w telefonie, co jest bardzo wygodne. Komunikacja w Trójmieście działa dobrze, chociaż w godzinach szczytu tramwaje są zatłoczone. Samochodu nie mam i na razie go nie potrzebuję. Na dłuższe trasy najchętniej jeżdżę pociągiem. Pociągi w Polsce są coraz nowocześniejsze i szybsze — do Warszawy jadę niecałe trzy godziny. W pociągu mogę czytać, pracować albo po prostu patrzeć przez okno. Samolotem latam tylko za granicę. To szybko, ale odprawa na lotnisku jest męcząca. Najciekawszą podróżą była dla mnie wycieczka promem z Gdyni do Szwecji. Płynęliśmy całą noc, a rano zobaczyliśmy piękne wybrzeże. Najgorszą był lot do Hiszpanii, kiedy linia lotnicza zgubiła moją walizkę. W przyszłości chciałbym przejechać pociągiem całą Europę.'
  },
  sytuacja:{
    polecenie:'Jest Pan na dworcu w Gdańsku. Chce Pan kupić bilet do Krakowa na jutro rano. Proszę zapytać o godziny odjazdu, czas podróży i przesiadki, wybrać połączenie i kupić bilet.',
    rola_ja:'podróżny', rola_on:'kasjer na dworcu',
    ru:'Классическая ситуация на вокзале. Официальное время: siódma czterdzieści, а не «без двадцати восемь».',
    cele:['Powiedzieć, dokąd i kiedy Pan jedzie','Zapytać o godziny odjazdu','Zapytać o czas podróży i przesiadki','Wybrać bilet i miejsce','Zapytać o peron i zapłacić'],
    zwroty:[
      ['Poproszę bilet do Krakowa na jutro rano.','Билет до Кракова на завтра утром, пожалуйста.'],
      ['O której odjeżdżają pociągi?','Во сколько отходят поезда?'],
      ['Czy to połączenie bezpośrednie?','Это прямой поезд?'],
      ['Wolę połączenie bez przesiadki.','Предпочитаю без пересадки.'],
      ['Czy mogę prosić o miejsce przy oknie?','Можно место у окна?'],
      ['Z którego peronu odjeżdża pociąg?','С какой платформы отправляется поезд?'],
    ],
    wzor:'Kasjer: Dzień dobry, słucham.\nTy: Dzień dobry. Poproszę bilet do Krakowa na jutro rano.\nKasjer: Jutro rano mamy pociągi o szóstej dziesięć i o siódmej czterdzieści.\nTy: Ile trwa podróż?\nKasjer: Pociąg o siódmej czterdzieści jedzie bezpośrednio, około pięciu i pół godziny. Ten o szóstej dziesięć jest z przesiadką w Warszawie.\nTy: To wolę połączenie bezpośrednie. Ile kosztuje bilet?\nKasjer: Normalny w drugiej klasie — sto dwadzieścia dziewięć złotych. W jedną stronę czy tam i z powrotem?\nTy: W jedną stronę. Czy mogę prosić o miejsce przy oknie?\nKasjer: Oczywiście. Wagon szósty, miejsce czterdzieści pięć.\nTy: Z którego peronu odjeżdża pociąg?\nKasjer: Peron będzie podany jutro na tablicy.\nTy: Rozumiem. Płacę kartą. Dziękuję, do widzenia.'
  }
};

KURS_TEMATY.T14 = {
  tytul:'Wakacje i noclegi', ru:'Отпуск и жильё в поездке', blok:'7.5 Podróże',
  foto:'turyści na plaży, ludzie w górach',
  slowa:[
    ['wakacje','каникулы, летний отдых'],['urlop','отпуск (на работе)'],['wypoczynek','отдых'],['odpoczywać','отдыхать'],['wyjechać nad morze','уехать на море'],['wyjechać w góry','уехать в горы'],['wyjechać za granicę','уехать за границу'],
    ['wycieczka','экскурсия, поездка'],['zwiedzać zabytki','осматривать достопримечательности'],['plaża','пляж'],['opalać się','загорать'],
    ['chodzić po górach','ходить по горам'],['nocleg','ночлег'],['hotel','отель, гостиница'],['pensjonat','пансионат, гостевой дом'],['schronisko','горный приют'],
    ['kemping','кемпинг'],['zarezerwować pokój','забронировать номер'],['pokój jednoosobowy','одноместный номер'],['pokój dwuosobowy','двухместный номер'],
    ['ze śniadaniem','с завтраком'],['recepcja','ресепшн'],['zameldować się','заселиться (в отель)'],['wymeldować się','выселиться (из отеля)'],
    ['doba','сутки'],['widok na morze','вид на море'],['pamiątka','сувенир'],['biuro podróży','турагентство'],
    ['słonecznie','солнечно'],['deszczowo','дождливо'],['zmienna pogoda','переменчивая погода'],['mieć szczęście z pogodą','повезти с погодой'],
  ],
  zwroty:[
    ['Chciałbym zarezerwować pokój dwuosobowy na trzy noce.','Хочу забронировать двухместный номер на три ночи.'],
    ['Czy śniadanie jest wliczone w cenę?','Завтрак включён в стоимость?'],
    ['Czy pokój ma widok na morze?','В номере вид на море?'],
    ['Od której można się zameldować?','Со скольки можно заселиться?'],
    ['W zeszłym roku byliśmy w…','В прошлом году мы были в…'],
    ['Mieliśmy szczęście z pogodą.','Нам повезло с погодой.'],
  ],
  monolog:{
    temat:'Moje ostatnie wakacje.',
    plan:['Gdzie i kiedy','Z kim i jak tam Pan dojechał','Gdzie Pan mieszkał','Co robiliście','Wrażenia i plany na przyszłość'],
    pytania:['Gdzie spędził Pan ostatnie wakacje?','Z kim Pan pojechał?','Gdzie mieszkaliście?','Co najbardziej się Panu podobało?','Woli Pan morze czy góry?','Dokąd chciałby Pan pojechać w przyszłym roku?'],
    ru:'Это и монолог, и готовая основа для письма «sprawozdanie». Прошедшее время, совершенный вид для событий.',
    wzor:'W sierpniu pojechaliśmy z żoną na tydzień w Tatry, do Zakopanego. Jechaliśmy pociągiem — podróż z Gdańska trwała prawie dziesięć godzin, ale było wygodnie. Mieszkaliśmy w małym pensjonacie niedaleko centrum. Pokój był skromny, ale czysty, z balkonem i widokiem na góry. Właściciele byli bardzo mili, a śniadania — domowe i pyszne. Codziennie chodziliśmy po górach. Najpiękniejsza była wycieczka nad Morskie Oko, chociaż było tam bardzo dużo turystów. Raz złapała nas burza i musieliśmy szybko schodzić do schroniska. Wieczorami spacerowaliśmy po Krupówkach i jedliśmy oscypki. Pogoda była zmienna, ale mieliśmy szczęście — padało tylko dwa razy. Zwykle wolę odpoczywać nad morzem, ale tym razem góry bardzo mi się podobały. W przyszłym roku chcielibyśmy pojechać w Bieszczady.'
  },
  sytuacja:{
    polecenie:'Dzwoni Pan do pensjonatu nad morzem, żeby zarezerwować pokój na przyszły weekend. Proszę zapytać o wolne pokoje, cenę, śniadanie i parking, a potem zrobić rezerwację.',
    rola_ja:'gość', rola_on:'właścicielka pensjonatu',
    ru:'Бронирование по телефону: даты, ночи, что входит в цену. В конце надо продиктовать фамилию и номер телефона.',
    cele:['Powiedzieć, w jakiej sprawie Pan dzwoni','Podać termin i liczbę osób','Zapytać o cenę, śniadanie i parking','Zarezerwować pokój i podać dane','Zapytać o godzinę zameldowania'],
    zwroty:[
      ['Chciałbym zarezerwować pokój dwuosobowy.','Хочу забронировать двухместный номер.'],
      ['od piątku do niedzieli, czyli na dwie noce','с пятницы до воскресенья, то есть на две ночи'],
      ['Ile kosztuje doba?','Сколько стоят сутки?'],
      ['Czy śniadanie jest wliczone w cenę?','Завтрак включён?'],
      ['Czy jest parking?','Есть ли парковка?'],
      ['Od której można się zameldować?','Со скольки можно заселиться?'],
    ],
    wzor:'Właścicielka: Pensjonat „Bałtyk”, dzień dobry.\nTy: Dzień dobry. Chciałbym zarezerwować pokój dwuosobowy na przyszły weekend, od piątku do niedzieli.\nWłaścicielka: Na dwie noce, tak? Mamy jeszcze jeden wolny pokój z widokiem na morze.\nTy: Świetnie. Ile kosztuje doba?\nWłaścicielka: Trzysta dwadzieścia złotych za pokój.\nTy: Czy śniadanie jest wliczone w cenę?\nWłaścicielka: Tak, śniadanie jest w cenie. Podajemy je od ósmej do dziesiątej.\nTy: A czy jest parking? Przyjedziemy samochodem.\nWłaścicielka: Tak, mamy bezpłatny parking przed budynkiem.\nTy: To poproszę ten pokój. Od której można się zameldować?\nWłaścicielka: Od czternastej. Proszę podać nazwisko i numer telefonu.\nTy: Iwan Pietrow, numer sześćset dwanaście, trzysta czterdzieści, pięćset sześćdziesiąt.\nWłaścicielka: Dziękuję, rezerwacja przyjęta. Do zobaczenia w piątek!\nTy: Dziękuję bardzo, do widzenia.'
  }
};

KURS_TEMATY.T15 = {
  tytul:'Miasto i orientacja', ru:'Город: как пройти, учреждения, достопримечательности', blok:'7.13 Miejsca',
  foto:'turyści na starym mieście',
  slowa:[
    ['miasto','город'],['wieś','деревня'],['dzielnica','район'],['centrum','центр'],['starówka','старый город, исторический центр'],['stare miasto','старый город'],
    ['rynek','рыночная площадь'],['ulica','улица'],['plac','площадь'],['skrzyżowanie','перекрёсток'],['rondo','круговой перекрёсток, кольцо'],
    ['światła','светофор'],['przejście dla pieszych','пешеходный переход'],['chodnik','тротуар'],['most','мост'],
    ['zabytek','памятник архитектуры'],['kościół','костёл, церковь'],['ratusz','ратуша'],['urząd miasta','городская администрация'],
    ['szpital','больница'],['policja','полиция'],['prosto','прямо'],['w lewo','налево'],['w prawo','направо'],['skręcić','повернуть'],
    ['na rogu','на углу'],['naprzeciwko (+ D.)','напротив'],['niedaleko','недалеко'],['daleko','далеко'],['pieszo','пешком'],['piechotą','пешком (разг.)'],
    ['zgubić się','заблудиться'],['pytać o drogę','спрашивать дорогу'],
    ['rower miejski','городской велосипед'],['ścieżka rowerowa','велодорожка'],['korek','пробка (на дороге)'],
  ],
  zwroty:[
    ['Przepraszam, jak dojść do dworca?','Извините, как пройти к вокзалу?'],
    ['Proszę iść prosto, a potem skręcić w lewo.','Идите прямо, потом поверните налево.'],
    ['To jest na rogu, naprzeciwko poczty.','Это на углу, напротив почты.'],
    ['Czy to daleko stąd?','Это далеко отсюда?'],
    ['Około dziesięciu minut pieszo.','Около десяти минут пешком.'],
    ['Zgubiłem się. Gdzie jestem na mapie?','Я заблудился. Где я на карте?'],
  ],
  monolog:{
    temat:'Moje miasto.',
    plan:['Gdzie leży i jak jest duże','Dzielnice i gdzie Pan mieszka','Zabytki i ciekawe miejsca','Plusy i minusy życia w tym mieście','Co poleciłby Pan turyście'],
    pytania:['Gdzie leży Pana miasto?','Ile ma mieszkańców?','Jakie są najważniejsze zabytki?','Co lubi Pan w swoim mieście?','Czego brakuje w Pana mieście?','Co poleciłby Pan turyście?'],
    ru:'Расскажи про город, где живёшь, — экзаменаторы в Гданьске оценят. Предлоги места: na północy, nad morzem, niedaleko, w centrum.',
    wzor:'Mieszkam w Gdańsku, który leży na północy Polski, nad Morzem Bałtyckim. To duże miasto — ma prawie pół miliona mieszkańców. Razem z Sopotem i Gdynią tworzy Trójmiasto. Najpiękniejszą częścią Gdańska jest Główne Miasto ze starymi, kolorowymi kamienicami. Na Długim Targu stoi Fontanna Neptuna, symbol miasta, a niedaleko jest Bazylika Mariacka — jeden z największych ceglanych kościołów na świecie. Warto też zobaczyć Żuraw nad Motławą i Westerplatte, gdzie zaczęła się druga wojna światowa. Mieszkam na Przymorzu, w spokojnej dzielnicy blisko morza. Lubię Gdańsk, bo ma i historię, i plaże, a komunikacja miejska działa dobrze. Minusem są ceny mieszkań, które ciągle rosną, i pogoda: często wieje silny wiatr i pada deszcz. Turyście poleciłbym spacer po starówce wieczorem, a potem kolację z rybą nad Motławą.'
  },
  sytuacja:{
    polecenie:'Turysta pyta Pana na ulicy, jak dojść do dworca głównego. Proszę wytłumaczyć mu drogę, powiedzieć, ile to zajmie, i doradzić, czy lepiej iść pieszo, czy jechać tramwajem.',
    rola_ja:'mieszkaniec miasta', rola_on:'turysta z ciężką walizką',
    ru:'Ты объясняешь дорогу незнакомцу: Proszę iść prosto, skręcić w lewo, na rogu, naprzeciwko. Тренирует предлоги места и вежливую форму.',
    cele:['Zrozumieć, dokąd turysta chce dojść','Wytłumaczyć drogę krok po kroku','Powiedzieć, ile to zajmie','Doradzić tramwaj lub spacer','Pożegnać się'],
    zwroty:[
      ['Proszę iść prosto do skrzyżowania.','Идите прямо до перекрёстка.'],
      ['Potem proszę skręcić w lewo.','Потом поверните налево.'],
      ['Dworzec będzie po prawej stronie.','Вокзал будет справа.'],
      ['To jakieś piętnaście minut pieszo.','Это примерно пятнадцать минут пешком.'],
      ['Może pan też pojechać tramwajem.','Можете также поехать на трамвае.'],
      ['Nie ma za co. Miłej podróży!','Не за что. Счастливого пути!'],
    ],
    wzor:'Turysta: Przepraszam, czy może mi pan pomóc? Jak dojść do dworca głównego?\nTy: Oczywiście. Proszę iść prosto tą ulicą aż do dużego skrzyżowania ze światłami.\nTurysta: Prosto do świateł…\nTy: Tak. Potem proszę skręcić w lewo i przejść przez most. Za mostem proszę iść cały czas prosto.\nTurysta: Czy to daleko?\nTy: Pieszo to jakieś piętnaście, dwadzieścia minut. Dworzec będzie po prawej stronie, naprzeciwko dużego centrum handlowego.\nTurysta: Mam ciężką walizkę… Czy jest tu jakiś tramwaj?\nTy: Tak, przystanek jest tuż za rogiem. Każdy tramwaj w stronę centrum zatrzymuje się przy dworcu, to tylko trzy przystanki.\nTurysta: A gdzie kupię bilet?\nTy: W automacie na przystanku albo w tramwaju, kartą.\nTurysta: Bardzo panu dziękuję!\nTy: Nie ma za co. Miłej podróży!'
  }
};

KURS_TEMATY.T16 = {
  tytul:'Usługi: bank, poczta, fryzjer, warsztat', ru:'Услуги: банк, почта, парикмахер, автосервис', blok:'7.12 Usługi',
  foto:'kolejka na poczcie, klient w banku',
  slowa:[
    ['założyć konto','открыть счёт'],['przelew','перевод'],['wpłacić pieniądze','внести деньги (на счёт)'],['wypłacić pieniądze','снять деньги (со счёта)'],['bankomat','банкомат'],
    ['karta płatnicza','платёжная карта'],['kredyt','кредит'],['rata','взнос, платёж по кредиту'],['nadać paczkę','отправить посылку'],['list polecony','заказное письмо'],
    ['paczkomat','почтомат'],['odebrać przesyłkę','получить отправление'],['awizo','извещение'],['okienko','окошко'],['kolejka','очередь'],
    ['formularz','бланк, анкета'],['wypełnić','заполнить'],['fryzjer','парикмахер'],['ostrzyc się','подстричься'],['umówić się na wizytę','записаться на приём'],
    ['pralnia','прачечная, химчистка'],['warsztat samochodowy','автосервис'],['mechanik','механик'],['zepsuć się','сломаться'],
    ['naprawić','починить'],['wymienić opony','поменять шины'],['stacja benzynowa','заправка (АЗС)'],['zatankować','заправиться, заправить машину'],
    ['wypożyczyć książkę','взять книгу (в библиотеке)'],['oddać książkę','вернуть книгу'],
    ['pomoc drogowa','эвакуатор, техпомощь на дороге'],['laweta','эвакуатор (платформа)'],['awaria','поломка, авария (техническая)'],['pobocze','обочина'],['światła awaryjne','аварийная сигнализация'],
  ],
  zwroty:[
    ['Chciałbym założyć konto.','Я хотел бы открыть счёт.'],
    ['Chcę nadać paczkę do Niemiec.','Хочу отправить посылку в Германию.'],
    ['Przyszedłem odebrać przesyłkę — mam awizo.','Я пришёл получить отправление — у меня извещение.'],
    ['Chciałbym się umówić na strzyżenie.','Хотел бы записаться на стрижку.'],
    ['Samochód nie chce zapalić.','Машина не заводится.'],
    ['Kiedy będzie gotowe?','Когда будет готово?'],
  ],
  monolog:{
    temat:'Jak załatwia Pan codzienne sprawy: bank, poczta, usługi?',
    plan:['Co Pan załatwia przez internet, a co osobiście','Bank i płatności','Poczta i paczkomaty','Fryzjer, mechanik, inne usługi','Co było trudne na początku w Polsce'],
    pytania:['Jak często chodzi Pan do banku?','Płaci Pan raczej kartą czy gotówką?','Jak wysyła Pan paczki?','Czy ma Pan swojego fryzjera?','Co było trudne, kiedy przyjechał Pan do Polski?','Czy wszystko można dziś załatwić przez internet?'],
    ru:'Здесь естественно звучат придаточные цели и времени: żeby założyć konto, musiałem…; kiedy dostanę awizo…',
    wzor:'Dzisiaj większość spraw załatwiam przez internet. Do banku chodzę bardzo rzadko — przelewy robię w aplikacji, a płacę prawie zawsze kartą albo telefonem. Gotówki używam tylko na targu. Na początku w Polsce było trudniej. Żeby założyć konto, musiałem pójść do oddziału z paszportem i umową o pracę, a pani w banku mówiła bardzo szybko. Na szczęście była cierpliwa i wszystko mi wytłumaczyła. Paczki wysyłam i odbieram przez paczkomaty, bo są czynne całą dobę i nie trzeba stać w kolejce na poczcie. Na pocztę idę tylko wtedy, kiedy dostanę awizo, na przykład z listem poleconym z urzędu. Do fryzjera chodzę raz w miesiącu, zawsze do tego samego, niedaleko domu. Raz w roku wymieniam w warsztacie opony w samochodzie żony. Myślę, że w Polsce usługi działają szybko i nowocześnie.'
  },
  sytuacja:{
    polecenie:'Jest Pan na poczcie. Chce Pan wysłać paczkę do rodziny za granicę. Proszę zapytać o sposób wysyłki, cenę i czas dostawy, wypełnić formularz z pomocą pracownicy i zapłacić.',
    rola_ja:'klient', rola_on:'pracownica poczty',
    ru:'Официальная ситуация с бланком: надо понять вопросы о весе, содержимом и вариантах доставки.',
    cele:['Powiedzieć, co i dokąd chce Pan wysłać','Zapytać o cenę i czas dostawy','Wybrać sposób wysyłki','Odpowiedzieć na pytanie o zawartość','Zapłacić i odebrać potwierdzenie'],
    zwroty:[
      ['Chciałbym wysłać paczkę do Niemiec.','Я хотел бы отправить посылку в Германию.'],
      ['Ile to będzie kosztować?','Сколько это будет стоить?'],
      ['Jak długo idzie paczka?','Сколько идёт посылка?'],
      ['Wybieram wysyłkę ekonomiczną.','Выбираю экономичную доставку.'],
      ['W środku są ubrania i książki.','Внутри одежда и книги.'],
      ['Gdzie mam wpisać swój adres?','Где мне вписать свой адрес?'],
    ],
    wzor:'Pracownica: Dzień dobry, słucham pana.\nTy: Dzień dobry. Chciałbym wysłać tę paczkę do Niemiec, do mojej siostry.\nPracownica: Proszę ją położyć na wadze. Trzy kilogramy. Wysyłka priorytetowa czy ekonomiczna?\nTy: A jaka jest różnica?\nPracownica: Priorytetowa idzie około tygodnia i kosztuje sto dwadzieścia złotych. Ekonomiczna — dwa, trzy tygodnie, za osiemdziesiąt złotych.\nTy: To wybieram ekonomiczną, nie spieszy mi się.\nPracownica: Dobrze. Co jest w środku?\nTy: Ubrania i kilka książek. Nic szklanego.\nPracownica: Proszę wypełnić ten formularz: adres odbiorcy i nadawcy.\nTy: Przepraszam, gdzie mam wpisać swój adres?\nPracownica: Tutaj, na górze, w rubryce „nadawca”.\nTy: Rozumiem. Proszę. Czy mogę zapłacić kartą?\nPracownica: Oczywiście. A to jest potwierdzenie nadania z numerem przesyłki.\nTy: Dziękuję bardzo. Do widzenia.'
  }
};

KURS_TEMATY.T17 = {
  tytul:'Zdrowie i wizyta u lekarza', ru:'Здоровье, врач, аптека', blok:'7.7 Zdrowie i higiena osobista',
  foto:'pacjent u lekarza w gabinecie',
  slowa:[
    ['głowa','голова'],['gardło','горло'],['ząb','зуб'],['ręka','рука'],['noga','нога'],['plecy','спина'],['brzuch','живот'],['serce','сердце'],
    ['boli mnie głowa','у меня болит голова'],['bolą mnie plecy','у меня болит спина'],['gorączka','температура, жар (при болезни)'],
    ['kaszel','кашель'],['katar','насморк'],['przeziębienie','простуда'],['grypa','грипп'],['alergia','аллергия'],['złamać nogę','сломать ногу'],
    ['czuć się dobrze','чувствовать себя хорошо'],['czuć się źle','чувствовать себя плохо'],['lekarz rodzinny','семейный врач'],['przychodnia','поликлиника'],
    ['szpital','больница'],['pogotowie','скорая помощь (служба)'],['karetka','машина скорой помощи'],['zapisać się do lekarza','записаться к врачу'],['zbadać','осмотреть'],
    ['recepta','рецепт (от врача)'],['lekarstwo','лекарство'],['lek','лекарство, препарат'],['tabletka','таблетка'],['syrop','сироп'],['apteka','аптека'],
    ['zwolnienie lekarskie','больничный'],['dentysta','стоматолог'],['dbać o zdrowie','заботиться о здоровье'],
  ],
  zwroty:[
    ['Źle się czuję.','Я плохо себя чувствую.'],
    ['Boli mnie gardło i głowa.','У меня болит горло и голова.'],
    ['Mam gorączkę i kaszel.','У меня температура и кашель.'],
    ['Chciałbym się zapisać do lekarza rodzinnego.','Хотел бы записаться к семейному врачу.'],
    ['Wypiszę panu receptę.','Выпишу вам рецепт.'],
    ['Proszę brać tabletkę trzy razy dziennie po jedzeniu.','Принимайте таблетку три раза в день после еды.'],
  ],
  monolog:{
    temat:'Jak dba Pan o zdrowie?',
    plan:['Czy Pan często choruje','Co Pan robi, kiedy jest chory','Jak dba Pan o zdrowie: ruch, jedzenie, sen','Wizyta u lekarza w Polsce','Rady dla innych'],
    pytania:['Jak często Pan choruje?','Co Pan robi, kiedy jest przeziębiony?','Kiedy ostatnio był Pan u lekarza?','Jak Pan dba o zdrowie?','Co jest najważniejsze dla zdrowia?','Jaką radę dałby Pan komuś, kto często choruje?'],
    ru:'Ловушка: «у меня болит голова» — boli <b>mnie</b> głowa (винительный); во мн.ч. — <b>bolą</b> mnie plecy. Советы — в условном наклонении: radziłbym.',
    wzor:'Na szczęście rzadko choruję — zwykle raz w roku, jesienią, przeziębiam się. Wtedy mam katar, boli mnie gardło i czasem mam lekką gorączkę. Zostaję w domu, piję herbatę z cytryną i miodem i dużo śpię. Do lekarza idę tylko wtedy, kiedy gorączka trwa dłużej niż trzy dni. Ostatnio byłem u lekarza rodzinnego w zeszłym roku. Zapisałem się przez internet, a w przychodni czekałem tylko dwadzieścia minut. Lekarka była bardzo miła, zbadała mnie i wypisała receptę na antybiotyk. Żeby nie chorować, staram się zdrowo żyć. Trzy razy w tygodniu chodzę na nordic walking, a na co dzień jem dużo warzyw i owoców. Najtrudniej jest mi dobrze się wyspać, bo wieczorami często siedzę do późna nad muzyką. Myślę, że najważniejsze dla zdrowia są ruch, sen i spokój. Każdemu radziłbym mniej się stresować i więcej odpoczywać.'
  },
  sytuacja:{
    polecenie:'Jest Pan u lekarza. Od trzech dni źle się Pan czuje. Proszę opisać objawy, odpowiedzieć na pytania lekarza, zapytać, jak brać lekarstwo, i poprosić o zwolnienie lekarskie.',
    rola_ja:'pacjent', rola_on:'lekarz rodzinny',
    ru:'Визит к врачу — одна из самых частых экзаменационных ситуаций. Обращение: «panie doktorze».',
    cele:['Powiedzieć, co Panu dolega','Odpowiedzieć na pytania o objawy','Zapytać o lekarstwo i dawkowanie','Poprosić o zwolnienie lekarskie','Podziękować'],
    zwroty:[
      ['Od trzech dni źle się czuję.','Уже три дня плохо себя чувствую.'],
      ['Mam gorączkę, trzydzieści osiem stopni.','У меня температура тридцать восемь.'],
      ['Kaszlę, szczególnie w nocy.','Кашляю, особенно ночью.'],
      ['Jak mam brać to lekarstwo?','Как мне принимать это лекарство?'],
      ['Czy mogę iść do pracy?','Можно ли мне идти на работу?'],
      ['Czy mogę dostać zwolnienie lekarskie?','Можно получить больничный?'],
    ],
    wzor:'Lekarz: Dzień dobry, proszę usiąść. Co panu dolega?\nTy: Dzień dobry, panie doktorze. Od trzech dni źle się czuję. Boli mnie gardło i głowa, mam katar.\nLekarz: Czy ma pan gorączkę?\nTy: Tak, wczoraj wieczorem miałem trzydzieści osiem i pół stopnia.\nLekarz: Kaszle pan?\nTy: Trochę, szczególnie w nocy.\nLekarz: Proszę otworzyć usta… Gardło jest czerwone. To infekcja wirusowa, na szczęście nic poważnego. Przepiszę panu syrop na kaszel i coś na gorączkę.\nTy: Jak mam brać ten syrop?\nLekarz: Jedną łyżkę trzy razy dziennie, po jedzeniu. I dużo pić, najlepiej ciepłą herbatę.\nTy: Czy mogę jutro iść do pracy?\nLekarz: Nie, przez najbliższe trzy dni powinien pan zostać w domu.\nTy: W takim razie czy mogę dostać zwolnienie lekarskie?\nLekarz: Oczywiście, wystawię panu zwolnienie do piątku.\nTy: Bardzo dziękuję. Do widzenia.'
  }
};

KURS_TEMATY.T18 = {
  tytul:'Edukacja i nauka języków', ru:'Образование и изучение языков', blok:'7.8 Edukacja',
  foto:'studenci na wykładzie, lekcja w klasie',
  slowa:[
    ['szkoła podstawowa','начальная школа'],['liceum','лицей (старшая школа)'],['technikum','техникум'],['studia','учёба в вузе'],['uczelnia','вуз'],
    ['uniwersytet','университет'],['politechnika','политехнический институт'],['wydział','факультет'],['kierunek studiów','специальность (направление учёбы)'],
    ['uczeń','школьник, ученик'],['student','студент'],['nauczyciel','учитель'],['wykładowca','преподаватель вуза'],['przedmiot','предмет'],
    ['lekcja','урок'],['wykład','лекция'],['zajęcia','занятия'],['egzamin','экзамен'],['zdać egzamin','сдать экзамен'],['nie zdać egzaminu','не сдать экзамен (после «nie» — родительный падеж)'],
    ['ocena','оценка'],['stopień (w szkole)','оценка (в школе)'],['świadectwo','аттестат, свидетельство'],['dyplom','диплом'],['zadanie domowe','домашнее задание'],
    ['przerwa','перемена, перерыв'],['podręcznik','учебник'],['zeszyt','тетрадь'],['kurs językowy','языковой курс'],
    ['uczyć się (+ D.)','учить (что-то)'],['nauczyć się','выучить, научиться'],['studiować','учиться в вузе'],
    ['skończyć studia','окончить вуз'],['test poziomujący','тест на определение уровня'],
  ],
  zwroty:[
    ['Skończyłem studia na politechnice.','Я окончил политехнический институт.'],
    ['Studiowałem logistykę.','Я изучал логистику.'],
    ['Nie pracuję w wyuczonym zawodzie.','Я работаю не по специальности.'],
    ['W szkole najbardziej lubiłem matematykę.','В школе больше всего любил математику.'],
    ['Uczę się polskiego od roku.','Учу польский уже год.'],
    ['Najtrudniejsze są dla mnie przypadki.','Труднее всего для меня падежи.'],
    ['Mam nadzieję, że zdam egzamin.','Надеюсь, что сдам экзамен.'],
  ],
  monolog:{
    temat:'Moja edukacja i nauka języków.',
    plan:['Szkoła: gdzie, jakie przedmioty Pan lubił','Studia: co i gdzie','Jak uczy się Pan polskiego','Szkoła w Polsce i w Pana kraju','Plany edukacyjne'],
    pytania:['Gdzie chodził Pan do szkoły?','Jaki przedmiot lubił Pan najbardziej?','Co Pan studiował?','Jak uczy się Pan polskiego?','Co jest dla Pana najtrudniejsze w polskim?','Czego chciałby się Pan jeszcze nauczyć?'],
    ru:'Вопрос «как ты учишь польский» почти наверняка прозвучит на экзамене. Подготовь честный ответ на 1 минуту.',
    wzor:'Do szkoły chodziłem w Petersburgu. Najbardziej lubiłem matematykę i fizykę, a najmniej historię, bo trzeba było uczyć się na pamięć wielu dat. Z matematyki miałem zawsze bardzo dobre oceny. Po szkole studiowałem logistykę na politechnice. Studia trwały pięć lat i były dość trudne, szczególnie na początku. Najbardziej podobały mi się praktyki w porcie. Po studiach kilka lat pracowałem jako inżynier. Teraz nie pracuję w wyuczonym zawodzie, bo moje hobby, fotografia, stało się moją pracą. Polskiego uczę się od roku. Dwa razy w tygodniu chodzę na kurs, a codziennie ćwiczę w aplikacji i słucham podcastów. Najtrudniejsze są dla mnie przypadki i wymowa, na przykład różnica między „sz” i „ś”. Wydaje mi się, że w polskiej szkole uczniowie mają mniej zadań domowych niż u nas, ale więcej projektów. W grudniu chcę zdać egzamin na poziomie B1. Potem chciałbym zrobić kurs zawodowy, który pomoże mi w pracy.'
  },
  sytuacja:{
    polecenie:'Chce Pan zapisać się na kurs języka polskiego w szkole językowej. Proszę zapytać o terminy zajęć, cenę i liczbę osób w grupie, a potem zdecydować, czy się Pan zapisuje.',
    rola_ja:'kandydat na kurs', rola_on:'pracownica sekretariatu szkoły',
    ru:'Официальная ситуация: запись на курс. Назови свой уровень, спроси о расписании, цене, размере группы и оплате.',
    cele:['Powiedzieć, jaki kurs Pana interesuje','Określić swój poziom','Zapytać o terminy i cenę','Zapytać o liczbę osób w grupie i o raty','Zapisać się'],
    zwroty:[
      ['Interesuje mnie kurs przygotowujący do egzaminu B1.','Меня интересует курс подготовки к экзамену B1.'],
      ['Mój poziom to chyba A2.','Мой уровень, наверное, A2.'],
      ['Ile osób jest w grupie?','Сколько человек в группе?'],
      ['Czy można płacić w ratach?','Можно платить частями?'],
      ['To mi pasuje.','Мне это подходит.'],
      ['Muszę się jeszcze zastanowić.','Мне нужно ещё подумать.'],
    ],
    wzor:'Sekretarka: Szkoła Językowa „Lingwa”, w czym mogę pomóc?\nTy: Dzień dobry. Interesuje mnie kurs polskiego przygotowujący do egzaminu B1.\nSekretarka: Mamy taki kurs. Jaki jest pana poziom?\nTy: Myślę, że A2. Uczę się od roku.\nSekretarka: Przed zapisem robimy krótki test poziomujący, około pół godziny.\nTy: Dobrze. A kiedy są zajęcia?\nSekretarka: W poniedziałki i środy od osiemnastej do dziewiętnastej trzydzieści.\nTy: Ile osób jest w grupie?\nSekretarka: Maksymalnie osiem.\nTy: A ile kosztuje kurs?\nSekretarka: Tysiąc dwieście złotych za trzy miesiące.\nTy: Czy można płacić w ratach?\nSekretarka: Tak, w trzech ratach po czterysta złotych.\nTy: To mi pasuje. Kiedy mogę napisać test?\nSekretarka: Może pan przyjść jutro o siedemnastej.\nTy: Świetnie, będę. Dziękuję, do widzenia.'
  }
};

KURS_TEMATY.T19 = {
  tytul:'Wynajem i koszty mieszkania', ru:'Аренда и расходы на жильё', blok:'7.2 Dom, mieszkanie, otoczenie',
  foto:'mieszkanie do wynajęcia, oglądanie mieszkania',
  slowa:[
    ['wynajmować mieszkanie','снимать квартиру'],['wynająć mieszkanie','снять квартиру'],['właściciel','владелец'],['właścicielka','владелица'],
    ['najemca','арендатор'],['umowa najmu','договор аренды'],['czynsz','арендная плата'],['kaucja','залог'],
    ['opłaty','платежи, плата'],['media (w mieszkaniu)','коммунальные услуги (свет, газ, вода)'],['prąd','электричество, ток'],['gaz','газ'],['woda','вода'],['ogrzewanie','отопление'],
    ['rachunek za prąd','счёт за электричество'],['wspólnota mieszkaniowa','товарищество жильцов'],['awaria','авария, поломка'],
    ['przeciekać (kran przecieka)','протекать (кран течёт)'],['kaloryfer','батарея'],['hydraulik','сантехник'],['elektryk','электрик'],
    ['zepsuć się','сломаться'],['naprawić','починить'],['wprowadzić się','въехать (в квартиру)'],['wyprowadzić się','съехать (с квартиры)'],
    ['mieszkanie umeblowane','квартира с мебелью'],['okres wypowiedzenia','срок уведомления о расторжении'],['przedłużyć umowę','продлить договор'],
    ['kredyt hipoteczny','ипотека'],
    ['serwis','сервисный центр'],['technik','мастер, техник'],['lodówka','холодильник'],['naprawa','ремонт (починка)'],
  ],
  zwroty:[
    ['Ile wynosi czynsz?','Какая арендная плата?'],
    ['Czy opłaty są wliczone w czynsz?','Коммунальные платежи включены?'],
    ['Ile wynosi kaucja?','Какой залог?'],
    ['Kran w łazience przecieka.','В ванной течёт кран.'],
    ['Czy mógłby pan przysłać hydraulika?','Не могли бы вы прислать сантехника?'],
    ['Kiedy mogę się wprowadzić?','Когда я могу въехать?'],
  ],
  monolog:{
    temat:'Wynajem mieszkania w Polsce — moje doświadczenia.',
    plan:['Wynajmuje Pan czy ma własne mieszkanie','Jak szukał Pan mieszkania','Ile kosztuje wynajem i opłaty','Relacje z właścicielem i sąsiadami','Wynajem czy kupno — co lepsze'],
    pytania:['Czy wynajmuje Pan mieszkanie?','Jak znalazł Pan mieszkanie?','Ile płaci Pan miesięcznie?','Co jest wliczone w czynsz?','Jaki ma Pan kontakt z właścicielem?','Co jest lepsze: wynajmować czy kupić mieszkanie?'],
    ru:'Тема из официального каталога: «wynajmowanie mieszkania, koszty utrzymania (czynsz, opłaty)». Нужны числа и сравнение.',
    wzor:'Od trzech lat wynajmuję mieszkanie w Gdańsku. Szukałem go przez internet ponad miesiąc, bo dobre mieszkania szybko znikają, a chętnych jest bardzo dużo. W końcu znalazłem dwupokojowe mieszkanie na Przymorzu. Płacę trzy tysiące złotych czynszu plus opłaty za prąd i internet — razem około trzech tysięcy trzystu złotych miesięcznie. Przy podpisaniu umowy zapłaciłem też kaucję w wysokości jednego czynszu. Umowa jest na rok i co roku ją przedłużamy. Z właścicielką mam dobry kontakt. Kiedy coś się zepsuje, na przykład przecieka kran, piszę do niej SMS, a ona szybko przysyła hydraulika. Sąsiedzi są spokojni, chociaż czasem słychać psa zza ściany. Wynajem jest wygodny, ale niestety drogi. Myślę, że w przyszłości lepiej będzie kupić własne mieszkanie, nawet na kredyt, bo raty mogą być podobne do czynszu.'
  },
  sytuacja:{
    polecenie:'Dzwoni Pan do właściciela mieszkania, które Pan wynajmuje. W łazience przecieka kran, a od wczoraj nie działa ogrzewanie. Proszę opisać problem, podkreślić, że sprawa jest pilna, i ustalić termin wizyty fachowca.',
    rola_ja:'najemca', rola_on:'właściciel mieszkania',
    ru:'Жалоба владельцу: описать поломку, подчеркнуть срочность, договориться о времени. Вежливая просьба — условное наклонение: Czy mógłby pan…?',
    cele:['Przywitać się i przedstawić','Opisać dwa problemy','Podkreślić, że sprawa jest pilna','Ustalić termin naprawy','Zapytać, kto płaci, i podziękować'],
    zwroty:[
      ['Dzwonię w sprawie mieszkania na Przymorzu.','Звоню по поводу квартиры в Пшиможе.'],
      ['Od wczoraj nie działa ogrzewanie.','Со вчерашнего дня не работает отопление.'],
      ['To pilna sprawa, w mieszkaniu jest zimno.','Это срочно, в квартире холодно.'],
      ['Czy mógłby przyjść jeszcze dziś?','Не мог бы он прийти сегодня?'],
      ['Będę w domu po siedemnastej.','Буду дома после пяти вечера (после 17:00).'],
      ['Kto zapłaci za naprawę?','Кто заплатит за ремонт?'],
    ],
    wzor:'Właściciel: Słucham?\nTy: Dzień dobry, panie Marku. Mówi Iwan Pietrow, wynajmuję od pana mieszkanie na Przymorzu.\nWłaściciel: A, dzień dobry. Coś się stało?\nTy: Niestety tak. W łazience przecieka kran, a od wczoraj nie działa ogrzewanie.\nWłaściciel: Ogrzewanie? To dziwne. Sprawdzał pan kaloryfery?\nTy: Tak, wszystkie są zimne. W mieszkaniu jest tylko szesnaście stopni, a mamy małe dziecko.\nWłaściciel: Rozumiem, to pilne. Zadzwonię do hydraulika. Kiedy pan jest w domu?\nTy: Dzisiaj po siedemnastej. Czy mógłby przyjść jeszcze dziś?\nWłaściciel: Spróbuję. Jeśli nie dziś, to jutro rano. Dam panu znać SMS-em.\nTy: Dobrze. A kto zapłaci za naprawę?\nWłaściciel: Oczywiście ja, to moja sprawa.\nTy: Bardzo dziękuję, panie Marku. Czekam na wiadomość.'
  }
};

KURS_TEMATY.T20 = {
  tytul:'Pogoda, przyroda, klimat', ru:'Погода, природа, климат', blok:'7.14 Środowisko naturalne',
  foto:'ludzie na spacerze w deszczu, jesienny park',
  slowa:[
    ['pogoda','погода'],['prognoza pogody','прогноз погоды'],['słońce','солнце'],['słonecznie','солнечно'],['pada deszcz','идёт дождь'],['pada śnieg','идёт снег'],
    ['wieje wiatr','дует ветер'],['mgła','туман'],['burza','гроза'],['pochmurno','облачно, пасмурно'],
    ['temperatura','температура'],['stopień (temperatury)','градус'],['minus pięć stopni','минус пять градусов'],['ciepło','тепло'],['zimno','холодно'],['gorąco','жарко'],
    ['upał','жара'],['mróz','мороз'],['wilgotno','влажно'],['wiosna','весна'],['lato','лето'],['jesień','осень'],['zima','зима'],
    ['klimat','климат'],['ochrona środowiska','охрана окружающей среды'],['zanieczyszczenie','загрязнение'],['smog','смог'],
    ['segregować śmieci','сортировать мусор'],['las','лес'],['jezioro','озеро'],['rzeka','река'],['wybrzeże','побережье'],
    ['zwierzęta domowe','домашние животные'],['rośliny','растения'],['zapowiadać (deszcz)','обещать, прогнозировать'],
    ['środowisko naturalne','окружающая среда'],['oszczędzać energię','экономить энергию'],['ograniczać plastik','сокращать пластик'],
  ],
  zwroty:[
    ['Jaka jutro będzie pogoda?','Какая завтра будет погода?'],
    ['Pada deszcz i wieje silny wiatr.','Идёт дождь и дует сильный ветер.'],
    ['Jest minus pięć stopni.','Минус пять градусов.'],
    ['Moją ulubioną porą roku jest jesień, bo…','Моё любимое время года — осень, потому что…'],
    ['Zapowiadają burze.','Обещают грозы.'],
    ['Gdyby było cieplej, poszlibyśmy na plażę.','Если бы было теплее, мы пошли бы на пляж.'],
  ],
  monolog:{
    temat:'Pogoda i pory roku. Klimat w Polsce i w Pana kraju.',
    plan:['Jaka jest dziś pogoda','Ulubiona pora roku i dlaczego','Klimat w Polsce i w Pana kraju — porównanie','Jak pogoda wpływa na nastrój','Czy dba Pan o środowisko'],
    pytania:['Jaka jest dziś pogoda?','Jaką porę roku lubi Pan najbardziej?','Czym różni się klimat w Polsce od klimatu w Pana kraju?','Jak pogoda wpływa na Pana nastrój?','Co robi Pan dla ochrony środowiska?','Gdyby mógł Pan wybrać, gdzie by Pan mieszkał?'],
    ru:'Тема для сравнений (łagodniejszy, krótsze, cieplejsze) и условного наклонения (gdybym mógł…).',
    wzor:'Dzisiaj jest typowy październikowy dzień w Gdańsku: pochmurno, chłodno i wieje silny wiatr od morza. Jest około dziesięciu stopni. Moją ulubioną porą roku jest późna wiosna, bo dni są długie, wszystko kwitnie, a jeszcze nie ma upałów. Lubię też złotą polską jesień we wrześniu. Klimat w Gdańsku jest łagodniejszy niż w moim rodzinnym mieście. Zimy są tu krótsze i cieplejsze, rzadko jest mróz, ale za to często pada deszcz i jest wilgotno. Śniegu jest mało, czasem tylko kilka dni w roku. Kiedy przez cały tydzień jest szaro, mam gorszy nastrój i trudniej mi się uczyć. Wtedy pomaga mi spacer nad morzem, nawet w deszczu. Staram się dbać o środowisko: segreguję śmieci, jeżdżę tramwajem, a nie samochodem, i nie kupuję plastikowych toreb. Gdybym mógł wybrać, mieszkałbym tam, gdzie jest ciepło przez cały rok.'
  },
  sytuacja:{
    polecenie:'Planujecie z kolegą wycieczkę rowerową w sobotę, ale prognoza zapowiada deszcz i silny wiatr. Proszę przekazać koledze prognozę, zaproponować inny plan albo inny dzień i wspólnie podjąć decyzję.',
    rola_ja:'kolega', rola_on:'kolega, który chce jechać mimo deszczu',
    ru:'Обсуждение планов: передать прогноз, предложить альтернативу, ответить на возражения, договориться. Хорошо идут jeśli и gdyby.',
    cele:['Przekazać prognozę pogody','Zaproponować inny plan lub dzień','Odpowiedzieć na argumenty kolegi','Podjąć wspólną decyzję'],
    zwroty:[
      ['Widziałeś prognozę na sobotę?','Видел прогноз на субботу?'],
      ['Zapowiadają deszcz i silny wiatr.','Обещают дождь и сильный ветер.'],
      ['A może przełożymy wycieczkę na niedzielę?','А может, перенесём поездку на воскресенье?'],
      ['Jeśli będzie padać, możemy…','Если будет дождь, можем…'],
      ['W tym punkcie masz rację, ale…','В этом ты прав, но…'],
      ['Umowa stoi.','Договорились.'],
    ],
    wzor:'Ty: Cześć, Michał. Widziałeś prognozę na sobotę?\nKolega: Nie, a co?\nTy: Zapowiadają deszcz przez cały dzień i silny wiatr od morza. Na rowerze to nie będzie przyjemne.\nKolega: E tam, trochę deszczu nam nie zaszkodzi. Mamy kurtki przeciwdeszczowe.\nTy: Wiem, ale przy takim wietrze jazda wzdłuż morza jest naprawdę niebezpieczna. A może przełożymy wycieczkę na niedzielę? W niedzielę ma być słonecznie.\nKolega: W niedzielę rano nie mogę, jadę do rodziców. Mogę dopiero po czternastej.\nTy: To pojedźmy w niedzielę po południu. Zrobimy krótszą trasę, do Sopotu i z powrotem.\nKolega: A w sobotę co robimy?\nTy: Jeśli będzie padać, możemy pójść na basen albo do kina.\nKolega: Dobra: basen w sobotę, rower w niedzielę o czternastej. Umowa stoi.\nTy: Super. Spotkajmy się przy molo w Brzeźnie.'
  }
};

KURS_TEMATY.T21 = {
  tytul:'Święta i tradycje', ru:'Праздники и традиции', blok:'7.15 Tradycje, zwyczaje, święta',
  foto:'rodzina przy wigilijnym stole',
  slowa:[
    ['święto','праздник'],['świętować','праздновать'],['obchodzić (urodziny, święta)','отмечать'],['uroczystość','торжество'],
    ['Boże Narodzenie','Рождество'],['Wigilia','Сочельник (24 декабря)'],['opłatek','облатка (оплатек)'],['choinka','ёлка'],
    ['kolędy','рождественские песни'],['Wielkanoc','Пасха'],['pisanki','расписные яйца'],['święconka','освящение пасхальной корзинки'],
    ['Sylwester','канун Нового года (31 декабря)'],['Nowy Rok','Новый год'],['Wszystkich Świętych','День всех святых (1 ноября)'],['znicz','лампадка на могиле'],
    ['cmentarz','кладбище'],['Święto Niepodległości','День независимости (11 ноября)'],['imieniny','именины'],
    ['ślub','бракосочетание, венчание'],['wesele','свадьба (праздник)'],['rocznica','годовщина'],['składać życzenia','поздравлять'],['zwyczaj','обычай'],['tradycja','традиция'],
    ['dzień wolny od pracy','выходной день'],['Tłusty Czwartek','Жирный четверг'],['pączki','пончики'],
    ['przyjęcie świąteczne','праздничный приём, корпоратив'],['menu wegetariańskie','вегетарианское меню'],
  ],
  zwroty:[
    ['Wszystkiego najlepszego z okazji imienin!','Поздравляю с именинами!'],
    ['Wesołych Świąt!','Весёлых праздников!'],
    ['Szczęśliwego Nowego Roku!','Счастливого Нового года!'],
    ['W Polsce obchodzi się imieniny.','В Польше отмечают именины.'],
    ['Na Wigilię dzielimy się opłatkiem.','В Сочельник делимся облаткой.'],
    ['U nas w domu jest taki zwyczaj, że…','У нас дома есть такой обычай, что…'],
  ],
  monolog:{
    temat:'Święta w Polsce i w moim kraju.',
    plan:['Najważniejsze święta w Polsce','Jak obchodzi się Boże Narodzenie','Święta w Pana kraju — podobieństwa i różnice','Pana ulubione święto','Polski zwyczaj, który Pana zaskoczył'],
    pytania:['Jakie święta są najważniejsze w Polsce?','Jak Polacy obchodzą Boże Narodzenie?','Jakie święto lubi Pan najbardziej?','Czym różnią się święta w Polsce i w Pana kraju?','Czy obchodzi Pan imieniny?','Jaki polski zwyczaj Pana zaskoczył?'],
    ru:'Экзамен 5 декабря — разговор о Рождестве вполне вероятен. Безличная форма (obchodzi się, zostawia się) звучит естественно и даёт баллы.',
    wzor:'Najważniejsze święta w Polsce to Boże Narodzenie i Wielkanoc. Najbardziej uroczysta jest Wigilia, czyli wieczór dwudziestego czwartego grudnia. Cała rodzina siada do stołu, kiedy na niebie pojawi się pierwsza gwiazdka. Przed kolacją wszyscy dzielą się opłatkiem i składają sobie życzenia. Na stole jest dwanaście potraw, na przykład barszcz z uszkami, pierogi i karp. Ciekawy jest zwyczaj, że zostawia się jedno wolne miejsce dla niespodziewanego gościa. W moim kraju najważniejszym świętem jest Nowy Rok, a Boże Narodzenie obchodzimy w styczniu. Dlatego w Polsce świętuję dwa razy! Zaskoczyło mnie też, że Polacy obchodzą imieniny, które bywają nawet ważniejsze niż urodziny. Pierwszego listopada, we Wszystkich Świętych, ludzie odwiedzają groby bliskich i zapalają znicze. Wieczorem cmentarze wyglądają niesamowicie. Moim ulubionym polskim świętem jest jednak Tłusty Czwartek, bo wtedy wszyscy jedzą pączki.'
  },
  sytuacja:{
    polecenie:'Koleżanka z pracy zaprasza Pana na Wigilię do swojej rodziny. Proszę podziękować za zaproszenie, zapytać o godzinę, o to, co przynieść, i o zwyczaje wigilijne, a potem przyjąć zaproszenie.',
    rola_ja:'zaproszony gość', rola_on:'koleżanka z pracy',
    ru:'Принять приглашение и расспросить о традициях. Функции из каталога: поблагодарить, спросить, принять приглашение.',
    cele:['Podziękować za zaproszenie','Zapytać o godzinę i adres','Zapytać, co przynieść','Zapytać o zwyczaje wigilijne','Przyjąć zaproszenie'],
    zwroty:[
      ['Bardzo dziękuję za zaproszenie!','Большое спасибо за приглашение!'],
      ['Z przyjemnością przyjdę.','С удовольствием приду.'],
      ['O której mam być?','К какому времени мне прийти?'],
      ['Co mam przynieść?','Что мне принести?'],
      ['Jak wygląda u was Wigilia?','Как у вас проходит Сочельник?'],
      ['Nie mogę się doczekać!','Жду не дождусь!'],
    ],
    wzor:'Koleżanka: Słuchaj, co robisz w Wigilię? Może przyjdziesz do nas? Moi rodzice bardzo chcieliby cię poznać.\nTy: Naprawdę? Bardzo dziękuję za zaproszenie! Z przyjemnością przyjdę. O której mam być?\nKoleżanka: Zaczynamy około siedemnastej, kiedy pojawi się pierwsza gwiazdka. Mieszkamy na Oruni, dam ci dokładny adres.\nTy: Co mam przynieść? Może wino albo ciasto?\nKoleżanka: Wina nie trzeba, w Wigilię u nas nie pije się alkoholu. Jeśli chcesz, przynieś coś słodkiego.\nTy: Dobrze, upiekę sernik. A jak wygląda u was Wigilia? Nie chcę zrobić czegoś nie tak.\nKoleżanka: Nie martw się. Najpierw dzielimy się opłatkiem i składamy sobie życzenia, potem jemy dwanaście potraw, wszystkie bez mięsa. Po kolacji śpiewamy kolędy i otwieramy prezenty.\nTy: Czy powinienem przynieść prezenty dla wszystkich?\nKoleżanka: Wystarczy coś małego dla moich rodziców.\nTy: Świetnie. Nie mogę się doczekać!'
  }
};

KURS_TEMATY.T22 = {
  tytul:'Społeczeństwo, prawo, problemy społeczne', ru:'Общество, закон, социальные проблемы', blok:'7.6 Stosunki społeczne',
  foto:'policjant rozmawia z mieszkańcem',
  slowa:[
    ['państwo','государство'],['rząd (w państwie)','правительство'],['prezydent','президент'],['premier','премьер-министр'],['wybory','выборы'],['głosować','голосовать'],
    ['obywatel','гражданин'],['prawo','закон, право'],['przepis (prawny)','правило, предписание'],['zakaz','запрет'],['przestrzegać prawa','соблюдать закон'],
    ['policja','полиция'],['komisariat','отделение полиции'],['przestępstwo','преступление'],['kradzież','кража'],['ukraść','украсть'],['złodziej','вор'],
    ['zgłosić kradzież','заявить о краже'],['mandat','штраф'],['bezpieczeństwo','безопасность'],['bezrobocie','безработица'],
    ['bieda','бедность'],['bezdomność','бездомность'],['uzależnienie','зависимость'],['samotność','одиночество'],
    ['cudzoziemiec','иностранец'],['imigrant','иммигрант'],['tolerancja','терпимость, толерантность'],['równość','равенство'],['wojna','война'],['pokój (na świecie)','мир (не война)'],
    ['uchodźca','беженец'],['wolontariat','волонтёрство'],['wolontariusz','волонтёр'],['pomagać potrzebującym','помогать нуждающимся'],
    ['sprawca','виновный, преступник'],['zawiadomienie','заявление (о преступлении), уведомление'],
  ],
  zwroty:[
    ['Moim zdaniem największym problemem jest…','По-моему, самая большая проблема —…'],
    ['Z jednej strony…, z drugiej strony…','С одной стороны…, с другой стороны…'],
    ['Uważam, że państwo powinno…','Считаю, что государство должно…'],
    ['Każdy z nas może coś zmienić.','Каждый из нас может что-то изменить.'],
    ['Trudno się z tym zgodzić, ponieważ…','С этим трудно согласиться, потому что…'],
    ['Podsumowując…','Подводя итог…'],
  ],
  monolog:{
    temat:'Jaki jest według Pana największy problem współczesnego społeczeństwa?',
    plan:['Jaki problem Pan wybiera','Argument 1 z przykładem','Argument 2','Co może zrobić państwo, a co każdy z nas','Podsumowanie'],
    pytania:['Jaki problem społeczny uważa Pan za najważniejszy?','Dlaczego?','Czy ten problem jest też w Pana kraju?','Co powinno zrobić państwo?','Co może zrobić zwykły człowiek?','Czy angażuje się Pan w pomoc innym?'],
    ru:'Это «мнение с обоснованием» — отдельный тип монолога по стандарту B1. Структура как в эссе: тезис → po pierwsze → po drugie → что делать → podsumowując.',
    wzor:'Moim zdaniem jednym z największych problemów współczesnego społeczeństwa jest samotność, szczególnie ludzi starszych. Po pierwsze, coraz więcej osób mieszka samotnie. Dzieci wyjeżdżają do innych miast albo za granicę, a rodzice zostają sami. Na przykład moja sąsiadka, pani Krystyna, ma osiemdziesiąt lat i całymi dniami nie ma z kim porozmawiać. Po drugie, samotność jest niebezpieczna dla zdrowia. Lekarze mówią, że samotni ludzie częściej chorują i mają depresję. Co można zrobić? Z jednej strony państwo powinno organizować kluby seniora i tanie zajęcia dla starszych osób. Z drugiej strony każdy z nas może coś zmienić: odwiedzić sąsiada, zrobić mu zakupy albo po prostu porozmawiać. Ja raz w tygodniu robię zakupy pani Krystynie i zawsze zostaję na herbatę. Podsumowując, uważam, że walka z samotnością zaczyna się od zwykłej życzliwości.'
  },
  sytuacja:{
    polecenie:'Ktoś ukradł Panu rower spod sklepu. Idzie Pan na komisariat policji, żeby zgłosić kradzież. Proszę opisać, co się stało, kiedy i gdzie, jak wyglądał rower, i zapytać, co będzie dalej.',
    rola_ja:'poszkodowany', rola_on:'policjant',
    ru:'Официальная ситуация: рассказать о событии в прошедшем времени, описать предмет, понять вопросы полицейского.',
    cele:['Powiedzieć, w jakiej sprawie Pan przyszedł','Opisać, co, kiedy i gdzie się stało','Opisać rower','Odpowiedzieć na pytania policjanta','Zapytać, co będzie dalej'],
    zwroty:[
      ['Chcę zgłosić kradzież roweru.','Хочу заявить о краже велосипеда.'],
      ['Zostawiłem go przed sklepem.','Я оставил его перед магазином.'],
      ['Był przypięty do stojaka.','Он был пристёгнут к стойке.'],
      ['To był czarny rower górski.','Это был чёрный горный велосипед.'],
      ['Czy jest szansa, że go znajdziecie?','Есть ли шанс, что вы его найдёте?'],
      ['Czy dostanę jakieś zaświadczenie?','Получу ли я какую-нибудь справку?'],
    ],
    wzor:'Policjant: Dzień dobry, w jakiej sprawie?\nTy: Dzień dobry. Chcę zgłosić kradzież roweru.\nPolicjant: Kiedy i gdzie to się stało?\nTy: Dzisiaj, między siedemnastą a siedemnastą trzydzieści. Zostawiłem rower przed supermarketem na ulicy Kołobrzeskiej. Kiedy wyszedłem ze sklepu, roweru już nie było.\nPolicjant: Czy rower był zabezpieczony?\nTy: Tak, był przypięty do stojaka, ale zapięcia też nie ma.\nPolicjant: Proszę opisać rower.\nTy: To czarny rower górski, prawie nowy, z czerwonym siodełkiem i koszykiem z przodu. Kupiłem go w lipcu za dwa tysiące złotych. Mam paragon i zdjęcie w telefonie.\nPolicjant: Dobrze, to bardzo pomoże. Czy ktoś coś widział?\nTy: Nie wiem, ale nad wejściem do sklepu jest kamera.\nPolicjant: Sprawdzimy nagranie. Proszę podać swoje dane i numer telefonu.\nTy: Oczywiście. Czy jest szansa, że go znajdziecie? I czy dostanę jakieś zaświadczenie?\nPolicjant: Szansa jest, bo jest nagranie. Zaświadczenie o zgłoszeniu dostanie pan od razu.\nTy: Dziękuję bardzo.'
  }
};

KURS_TEMATY.T23 = {
  tytul:'Media i styl życia', ru:'СМИ, интернет, образ жизни', blok:'7.16 Tematy ogólne',
  foto:'ludzie z telefonami, rodzina przed telewizorem',
  slowa:[
    ['środki masowego przekazu','средства массовой информации'],['media','СМИ, медиа'],['telewizja','телевидение'],['radio','радио'],['prasa','пресса'],['gazeta','газета'],['czasopismo','журнал'],
    ['portal internetowy','интернет-портал'],['wiadomości','новости; сообщения'],['aktualności','новости, актуальное (на сайте)'],['dziennikarz','журналист'],['artykuł','статья'],
    ['reklama','реклама'],['media społecznościowe','соцсети'],['smartfon','смартфон'],['aplikacja','приложение'],
    ['nieprawdziwe informacje','недостоверная информация'],['uzależnienie od telefonu','зависимость от телефона'],
    ['spędzać czas przed ekranem','проводить время перед экраном'],['wyłączyć telefon','выключить телефон'],['ograniczać','ограничивать'],
    ['styl życia','образ жизни'],['poziom życia','уровень жизни'],['warunki życia','условия жизни'],['pośpiech','спешка'],['stres','стресс'],
    ['równowaga między pracą a życiem prywatnym','баланс между работой и личной жизнью'],['korzystać z (+ D.)','пользоваться'],
  ],
  zwroty:[
    ['Wiadomości czytam w internecie.','Новости читаю в интернете.'],
    ['Codziennie spędzam przed ekranem kilka godzin.','Каждый день провожу перед экраном несколько часов.'],
    ['Nie wierzę we wszystko, co piszą w internecie.','Не верю всему, что пишут в интернете.'],
    ['Media społecznościowe mają więcej wad niż zalet.','У соцсетей больше минусов, чем плюсов.'],
    ['Staram się ograniczać czas w telefonie.','Стараюсь ограничивать время в телефоне.'],
    ['Trzeba z tego korzystać z umiarem.','Этим нужно пользоваться в меру.'],
  ],
  monolog:{
    temat:'Internet i media społecznościowe — więcej zalet czy wad?',
    plan:['Jak Pan korzysta z mediów, skąd bierze informacje','Zalety — z przykładem','Wady — z przykładem','Własna opinia','Podsumowanie'],
    pytania:['Skąd czerpie Pan informacje?','Ile czasu spędza Pan w internecie?','Jakie są zalety mediów społecznościowych?','Jakie są ich wady?','Czy wierzy Pan w to, co czyta w internecie?','Czy dzieci powinny mieć smartfony?'],
    ru:'Ещё одно «мнение с обоснованием». Эта же тема — хорошая основа для эссе в письменной части.',
    wzor:'Wiadomości czytam głównie w internecie, na polskich portalach i w aplikacjach. Telewizji prawie nie oglądam, a gazet papierowych nie kupuję. Myślę, że internet ma wiele zalet. Po pierwsze, informacje są dostępne od razu i za darmo. Po drugie, dzięki mediom społecznościowym mogę codziennie rozmawiać z rodziną, która mieszka daleko. Dla mnie ważne jest też to, że w internecie mogę uczyć się polskiego: słucham podcastów i oglądam filmy z napisami. Z drugiej strony internet ma też poważne wady. Spędzamy przed ekranem za dużo czasu — zauważyłem, że wieczorem potrafię przeglądać telefon dwie godziny bez celu. Poza tym w internecie jest dużo nieprawdziwych informacji i trzeba sprawdzać, kto jest autorem tekstu. Dlatego staram się ograniczać czas w telefonie: wieczorem go wyłączam i czytam książkę. Podsumowując, uważam, że internet jest bardzo przydatny, ale trzeba z niego korzystać z umiarem.'
  },
  sytuacja:{
    polecenie:'Rozmawia Pan ze znajomym o tym, czy dzieci w szkole podstawowej powinny mieć smartfony. Znajomy uważa, że tak. Proszę przedstawić swoje zdanie, podać argumenty i spróbować znaleźć kompromis.',
    rola_ja:'rozmówca, który ma wątpliwości', rola_on:'znajomy, który właśnie kupił dziecku smartfon',
    ru:'«Короткая простая дискуссия» — отдельный тип по стандарту B1. Вежливо не соглашаться, признавать правоту в чём-то, искать компромисс.',
    cele:['Wyrazić swoje zdanie','Podać dwa argumenty','Odpowiedzieć na argument rozmówcy','Grzecznie się nie zgodzić','Zaproponować kompromis'],
    zwroty:[
      ['Rozumiem twój punkt widzenia, ale…','Понимаю твою точку зрения, но…'],
      ['Nie do końca się z tobą zgadzam.','Не совсем с тобой согласен.'],
      ['W tym punkcie masz rację.','В этом ты прав.'],
      ['Z drugiej strony…','С другой стороны…'],
      ['Może lepiej byłoby, gdyby…','Может, лучше было бы, если бы…'],
      ['To jest jakiś kompromis.','Это неплохой компромисс.'],
    ],
    wzor:'Znajomy: Kupiłem córce smartfon. Ma dziewięć lat i wszyscy w klasie już mają.\nTy: Rozumiem, ale moim zdaniem to za wcześnie. Dzieci w tym wieku spędzają przed ekranem za dużo czasu.\nZnajomy: Ale telefon to bezpieczeństwo. Zawsze mogę do niej zadzwonić i wiem, gdzie jest.\nTy: W tym punkcie masz rację. Z drugiej strony smartfon to nie tylko telefon: gry, filmy, media społecznościowe… Trudno to kontrolować.\nZnajomy: Można ustawić kontrolę rodzicielską.\nTy: Można, ale dzieci szybko uczą się ją omijać. Poza tym widzę, że dzieci z telefonami mniej się ruszają i rzadziej bawią się razem.\nZnajomy: Może i tak. Ale nie chcę, żeby czuła się gorsza od kolegów.\nTy: Rozumiem. To może lepiej byłoby, gdyby miała prosty telefon do dzwonienia, a smartfon dopiero za kilka lat?\nZnajomy: Hm, to jest jakiś kompromis. Albo smartfon, ale tylko godzina dziennie.\nTy: Też dobry pomysł. Najważniejsze, żeby rodzice to kontrolowali.'
  }
};

KURS_TEMATY.T24 = {
  tytul:'Miasto czy wieś? Kiedyś i dziś', ru:'Город или деревня? Раньше и сейчас', blok:'7.16 Tematy ogólne',
  foto:'dom na wsi, ulica w dużym mieście',
  slowa:[
    ['mieszkać w mieście','жить в городе'],['mieszkać na wsi','жить в деревне'],['przedmieście','пригород'],['obrzeża','окраина'],['spokój','покой, спокойствие'],['hałas','шум'],
    ['korki','пробки'],['przyroda','природа'],['natura','природа, натура'],['czyste powietrze','чистый воздух'],['zanieczyszczone powietrze','загрязнённый воздух'],
    ['dojazd','дорога (до места), проезд'],['dojeżdżać do pracy','ездить на работу'],['oferta kulturalna','культурная жизнь'],['koszty życia','стоимость жизни'],
    ['zarobki','заработки'],['anonimowość','анонимность'],['wygoda','удобство'],['wygodny','удобный'],
    ['kiedyś','когда-то, раньше'],['dawniej','раньше, в прежние времена'],['teraz','сейчас'],['obecnie','в настоящее время'],['zmienić się','измениться'],
    ['coraz lepszy','всё лучше и лучше'],['coraz gorszy','всё хуже и хуже'],['spokojniejszy','спокойнее (более спокойный)'],['droższy','дороже (более дорогой)'],['bliżej','ближе'],['dalej','дальше'],
    ['mieć coś pod ręką','иметь что-то под рукой'],['na emeryturze','на пенсии'],
  ],
  zwroty:[
    ['Na wsi jest spokojniej niż w mieście.','В деревне спокойнее, чем в городе.'],
    ['W mieście życie jest wygodniejsze, ale droższe.','В городе жизнь удобнее, но дороже.'],
    ['Im dłużej mieszkam w mieście, tym bardziej…','Чем дольше живу в городе, тем больше…'],
    ['Kiedyś ludzie…, a dziś…','Раньше люди…, а сегодня…'],
    ['Wolałbym mieszkać…, ponieważ…','Я предпочёл бы жить…, потому что…'],
    ['Najważniejsze jest dla mnie…','Для меня важнее всего…'],
  ],
  monolog:{
    temat:'Życie w mieście czy na wsi — gdzie lepiej?',
    plan:['Gdzie Pan mieszka i gdzie mieszkał wcześniej','Zalety życia w mieście','Zalety życia na wsi','Co jest dla Pana ważniejsze','Gdzie chciałby Pan mieszkać w przyszłości'],
    pytania:['Gdzie Pan mieszka: w mieście czy na wsi?','Jakie są zalety życia w dużym mieście?','Co jest lepsze na wsi?','Czy mieszkał Pan kiedyś na wsi?','Jak zmieniło się życie w miastach w ostatnich latach?','Gdzie chciałby Pan mieszkać na emeryturze?'],
    ru:'Тема-тренажёр для степеней сравнения: bliżej, szybsza, bogatsza, głośniej, spokojniejsze, zdrowsze. Используй их как можно больше.',
    wzor:'Całe życie mieszkam w dużych miastach, najpierw w Petersburgu, a teraz w Gdańsku. Życie w mieście ma dużo zalet. Wszystko jest bliżej: praca, sklepy, lekarze i szkoły. Komunikacja jest szybsza, a oferta kulturalna — dużo bogatsza niż na wsi. W mieście łatwiej też znaleźć dobrą pracę i więcej zarobić. Z drugiej strony w mieście jest głośniej, powietrze jest gorsze, a mieszkania są coraz droższe. Ludzie się spieszą i często nie znają nawet swoich sąsiadów. Na wsi życie jest spokojniejsze i zdrowsze. Ludzie są bliżej przyrody i lepiej się znają. Niestety do pracy, do lekarza czy do kina trzeba dojeżdżać samochodem, a autobusy jeżdżą rzadko. Myślę, że kiedyś różnice były większe, a dziś dzięki internetowi na wsi też można pracować i robić zakupy. Teraz wolę miasto, ale na emeryturze chciałbym mieszkać w małym domu pod Gdańskiem, blisko lasu i morza.'
  },
  sytuacja:{
    polecenie:'Pana znajomi zastanawiają się, czy przeprowadzić się z mieszkania w centrum do domu pod miastem. Proszę doradzić znajomej: zapytać o potrzeby rodziny, przedstawić zalety i wady obu możliwości i powiedzieć, co by Pan zrobił na ich miejscu.',
    rola_ja:'znajomy, który doradza', rola_on:'znajoma, która nie może się zdecydować',
    ru:'Совет и сравнение: na waszym miejscu…, musielibyście…, z jednej strony… Условное наклонение во множественном числе.',
    cele:['Zapytać o potrzeby rodziny','Przedstawić zalety życia pod miastem','Przedstawić wady','Doradzić, co zrobić','Zakończyć rozmowę życzliwie'],
    zwroty:[
      ['Co jest dla was najważniejsze?','Что для вас важнее всего?'],
      ['Pod miastem jest spokojniej i taniej.','За городом спокойнее и дешевле.'],
      ['Musielibyście codziennie dojeżdżać.','Вам пришлось бы каждый день ездить.'],
      ['To dużo zmienia.','Это многое меняет.'],
      ['Na waszym miejscu…','На вашем месте…'],
      ['Trzymam kciuki!','Держу за вас кулаки!'],
    ],
    wzor:'Znajoma: Nie wiemy, co robić. Kamil chce kupić dom pod Gdańskiem, a ja nie jestem pewna.\nTy: A co jest dla was najważniejsze?\nZnajoma: Chcemy, żeby dzieci miały ogród i więcej miejsca. W mieszkaniu jest nam już ciasno.\nTy: Rozumiem. Z jednej strony pod miastem jest spokojniej, czyściej i domy są tańsze niż mieszkania w centrum. Dzieci mogłyby się bawić na dworze.\nZnajoma: No właśnie. Ale boję się dojazdów.\nTy: I słusznie. Z drugiej strony musielibyście codziennie dojeżdżać do pracy i do szkoły, a rano są korki. Potrzebowalibyście chyba drugiego samochodu.\nZnajoma: Kamil może pracować z domu trzy dni w tygodniu.\nTy: To dużo zmienia. A czy jest tam szkoła i sklep?\nZnajoma: Szkoła jest w sąsiedniej wsi, dwa kilometry dalej.\nTy: Na waszym miejscu pojechałbym tam kilka razy rano i sprawdził, ile naprawdę trwa droga. Jeśli to mniej niż pół godziny, kupiłbym dom.\nZnajoma: Dobry pomysł, tak zrobimy. Dzięki za radę!\nTy: Nie ma za co. Trzymam kciuki!'
  }
};


// ========================================================================
// Dodatkowe monologi i sytuacje (monolog2 / sytuacja2) — z rad egzaminatorów:
// monolog bywa trzech typów (opowiedz o… / opinia o problemie / wybór z dwóch),
// a w dialogu trzeba wykonać każdy punkt polecenia. Pokazują się jako
// «Ещё вариант» na ekranie monologu lub sytuacji danego tematu; plan kursu
// się nie zmienia.
// ========================================================================
KURS_TEMATY.T07.monolog2 = {
  typ:'opinia',
  temat:'Co Pan myśli o zakazie handlu w niedzielę?',
  plan:['Wstęp: na czym polega zakaz','Argumenty za — z przykładami','Argumenty przeciw','Moje zdanie i podsumowanie'],
  pytania:['Czy robi Pan zakupy w niedzielę?','Kto zyskuje na zakazie, a kto traci?','Jak to wygląda w Pana kraju?','Co Pan robi w niedzielę zamiast zakupów?'],
  ru:'Монолог-мнение: вступление (о чём речь) → аргументы за → аргументы против → твоё мнение. В Польше уже несколько лет большинство магазинов по воскресеньям закрыто, торговых воскресений в году всего несколько.',
  wzor:'W Polsce od kilku lat większość sklepów w niedzielę jest zamknięta. Otwarte są tylko małe sklepy, stacje benzynowe i piekarnie. Kiedy przyjechałem do Gdańska, bardzo mnie to zdziwiło, bo w Rosji sklepy działają codziennie. Ten zakaz ma swoje zalety i wady. Z jednej strony pracownicy sklepów mogą odpocząć i spędzić niedzielę z rodziną. To bardzo ważne, bo praca w handlu jest ciężka. Poza tym ludzie mniej czasu spędzają w galeriach handlowych, a więcej na spacerach. Z drugiej strony to niewygodne dla osób, które pracują od poniedziałku do soboty i nie mają kiedy zrobić zakupów. Na początku często zapominałem kupić chleb w sobotę. Teraz planuję zakupy wcześniej i właściwie mi to nie przeszkadza. Podsumowując, uważam, że zakaz handlu w niedzielę to dobry pomysł, chociaż nie dla wszystkich jest wygodny. Dzięki niemu niedziela jest naprawdę dniem odpoczynku.',
};
KURS_TEMATY.T23.monolog2 = {
  typ:'opinia',
  temat:'Dlaczego współczesny człowiek nie potrafi przeżyć dnia bez telefonu komórkowego?',
  plan:['Wstęp: jak ważny jest dziś telefon','Do czego go używamy — przykłady z życia','Wady: uzależnienie, mniej rozmów','Moje zdanie i rada'],
  pytania:['Ile godzin dziennie korzysta Pan z telefonu?','Do czego najczęściej używa Pan telefonu?','Czy potrafiłby Pan żyć tydzień bez telefonu?','Czy dzieci powinny mieć smartfony?'],
  ru:'Монолог-мнение о социальной теме. Обязательно примеры из своей жизни: за них ставят баллы за выполнение задания.',
  wzor:'Dzisiaj telefon komórkowy to coś więcej niż telefon. Moim zdaniem nie potrafimy bez niego żyć, ponieważ zastępuje nam wiele innych rzeczy. W telefonie mamy mapę, aparat, bank, bilety, kalendarz i kontakt z bliskimi. Ja na przykład codziennie rozmawiam przez telefon z rodzicami w Petersburgu, kupuję bilety na tramwaj i uczę się polskiego w aplikacji. Jako fotograf często sprawdzam też w telefonie, jak sprzedają się moje zdjęcia. Z drugiej strony telefon zabiera nam dużo czasu. Wiele osób sprawdza wiadomości co kilka minut, nawet podczas obiadu z rodziną. Ludzie mniej ze sobą rozmawiają, a dzieci wolą gry niż zabawę na dworze. To jest już prawdziwe uzależnienie. Podsumowując, uważam, że telefon jest bardzo przydatny, ale trzeba używać go z umiarem. W naszym domu mamy prostą zasadę: przy stole nikt nie używa telefonu.',
};
KURS_TEMATY.T10.monolog2 = {
  typ:'opinia',
  temat:'„Jesteś tym, co jesz”. Czy zgadza się Pan z tą opinią?',
  plan:['Wstęp: co znaczy to powiedzenie','Argumenty: jedzenie a zdrowie i nastrój','Przykład z własnego życia','Podsumowanie: moje zdanie'],
  pytania:['Czy zdrowo się Pan odżywia?','Co jada Pan na śniadanie?','Czy często je Pan fast foody?','Czy polska kuchnia jest zdrowa?'],
  ru:'Монолог «согласен ли ты с мнением». Можно согласиться частично — главное, обоснуй и приведи пример.',
  wzor:'Powiedzenie „Jesteś tym, co jesz” znaczy, że jedzenie ma wpływ na nasze zdrowie, wygląd i nastrój. Moim zdaniem to prawda, chociaż nie cała. Po pierwsze, kiedy jemy dużo warzyw, owoców i ryb, mamy więcej energii i rzadziej chorujemy. Kiedy jemy fast foody i słodycze, szybko tyjemy i czujemy się zmęczeni. Po drugie, jedzenie wpływa na nastrój. Ja na przykład po ciężkim obiedzie nie mam siły pracować. Kilka lat temu jadłem dużo w biegu i często bolał mnie brzuch. Teraz razem z żoną gotujemy w domu, a w weekendy chodzę na nordic walking i czuję się dużo lepiej. Z drugiej strony jedzenie to nie wszystko. Na zdrowie wpływają też sen, ruch i stres. Podsumowując, zgadzam się z tą opinią, ale tylko częściowo. Uważam, że jesteśmy tym, co jemy, ale też tym, jak żyjemy.',
};
KURS_TEMATY.T22.monolog2 = {
  typ:'opinia',
  temat:'Jakimi wartościami kierują się dziś młodzi ludzie?',
  plan:['Wstęp: czym są wartości','Co jest ważne dla młodych — przykłady','Czym różnią się od pokolenia rodziców','Podsumowanie: moja opinia'],
  pytania:['Co było dla Pana najważniejsze, kiedy miał Pan dwadzieścia lat?','Czy młodzi ludzie są dziś inni niż kiedyś?','Co jest ważniejsze: kariera czy rodzina?','Jakie wartości chciałby Pan przekazać dziecku?'],
  ru:'Монолог-мнение. Удобная схема: «во-первых… во-вторых… в-третьих…», потом сравнение с поколением родителей и вывод.',
  wzor:'Wartości to rzeczy, które są dla nas najważniejsze i pomagają nam podejmować decyzje. Moim zdaniem młodzi ludzie dzisiaj cenią przede wszystkim wolność i niezależność. Chcą sami decydować, gdzie mieszkać i gdzie pracować. Wielu z nich podróżuje, studiuje za granicą i nie boi się zmian. Po drugie, dla młodych bardzo ważna jest praca, która daje satysfakcję, a nie tylko pieniądze. Po trzecie, coraz więcej młodych ludzi dba o środowisko i zdrowie. Moi rodzice uważali, że najważniejsze są stabilna praca i własne mieszkanie. Dla mojego pokolenia to też jest ważne, ale chcemy mieć także czas na pasję. Z drugiej strony młodzi ludzie często za dużo czasu spędzają w internecie i mają mniej prawdziwych przyjaciół. Podsumowując, uważam, że wartości młodych się zmieniają, ale rodzina i przyjaźń wciąż są dla nich ważne. Mojej córce chcę przekazać przede wszystkim uczciwość i szacunek do innych ludzi.',
};
KURS_TEMATY.T12.monolog2 = {
  typ:'wybor',
  temat:'Książka papierowa czy e-book? Co Pan wybiera i dlaczego?',
  plan:['Wstęp: czy i kiedy Pan czyta','Zalety książki papierowej','Zalety e-booka','Mój wybór i uzasadnienie'],
  pytania:['Jaką książkę ostatnio Pan przeczytał?','Gdzie najczęściej Pan czyta?','Czy kupuje Pan książki, czy pożycza je z biblioteki?','Czy dzieci powinny czytać papierowe książki?'],
  ru:'Монолог-выбор из двух вариантов: плюсы первого → плюсы второго → твой выбор с причиной. Можно выбрать «и то и другое», но объясни когда что.',
  wzor:'Lubię czytać przed snem, więc często zastanawiam się, co jest lepsze: książka papierowa czy e-book. Obie formy mają swoje zalety. Książka papierowa ma swój zapach i ciężar. Kiedy trzymam ją w rękach, łatwiej mi się skupić. Poza tym oczy mniej się męczą, a papierowej książki nie trzeba ładować. Ładną książkę można też komuś podarować albo postawić na półce. Z drugiej strony e-book jest bardzo praktyczny. W jednym małym czytniku mieszczą się setki książek, więc zabieram go w każdą podróż. E-booki są też często tańsze, a w nocy mogę czytać bez lampy i nie budzę żony. Dla mnie ważne jest jeszcze to, że w czytniku mogę od razu sprawdzić trudne polskie słowo w słowniku. Podsumowując, na co dzień wybieram e-book, bo jest wygodniejszy i pomaga mi w nauce polskiego. Mimo to książki dla córki kupujemy zawsze papierowe, bo dzieci powinny mieć z nimi kontakt.',
};
KURS_TEMATY.T05.monolog2 = {
  typ:'wybor',
  temat:'Praca zdalna czy praca w biurze? Co jest lepsze?',
  plan:['Wstęp: jak wygląda moja praca','Zalety pracy zdalnej','Zalety pracy w biurze','Mój wybór i uzasadnienie'],
  pytania:['Czy pracuje Pan czasem z domu?','Co przeszkadza Panu w pracy w domu?','Czy kontakt z kolegami jest ważny?','Jak będzie wyglądała praca za dwadzieścia lat?'],
  ru:'Монолог-выбор. Опыт Ивана: жена работает из дома, он сам три дня в студии и два дня дома — это и есть живые примеры.',
  wzor:'W mojej rodzinie mamy oba modele pracy. Moja żona pracuje z domu, a ja trzy dni w tygodniu jeżdżę do studia, a dwa dni obrabiam zdjęcia w domu. Dlatego dobrze znam zalety i wady obu rozwiązań. Praca zdalna oszczędza czas i pieniądze, bo nie trzeba dojeżdżać. Można pracować w wygodnym ubraniu i samemu planować dzień. Kiedy córka jest chora, jedno z nas zawsze jest w domu. Z drugiej strony w domu łatwo się rozproszyć: pranie, zakupy, telewizor. Czasem trudno też oddzielić pracę od życia prywatnego. W studiu mam kontakt z ludźmi. Z Tomkiem i Ewą wymieniamy się pomysłami, a przy kawie szybciej rozwiązujemy problemy. Poza tym łatwiej mi mówić po polsku, kiedy codziennie rozmawiam z kolegami. Podsumowując, najlepsze jest dla mnie połączenie obu modeli. Myślę, że w przyszłości większość firm wybierze właśnie pracę hybrydową.',
};
KURS_TEMATY.T11.monolog2 = {
  typ:'wybor',
  temat:'Siłownia czy sport na świeżym powietrzu? Co Pan woli?',
  plan:['Wstęp: dlaczego ruch jest ważny','Zalety siłowni','Zalety sportu na świeżym powietrzu','Mój wybór i uzasadnienie'],
  pytania:['Jak często uprawia Pan sport?','Czy chodził Pan kiedyś na siłownię?','Jaki sport jest popularny w Pana kraju?','Czy sport w złą pogodę to dobry pomysł?'],
  ru:'Монолог-выбор. Сначала честно назови плюсы варианта, который ты не выбираешь, — так ответ звучит взвешенно.',
  wzor:'Uważam, że ruch jest bardzo ważny, szczególnie kiedy ktoś pracuje przy komputerze tak jak ja. Ludzie często wybierają między siłownią a sportem na świeżym powietrzu. Siłownia ma kilka zalet. Można tam ćwiczyć niezależnie od pogody, a trener pomoże dobrać ćwiczenia. Jest dużo sprzętu, więc łatwo zbudować mięśnie. Z drugiej strony karnet jest drogi, a na siłowni jest głośno i tłoczno. Ja wolę sport na świeżym powietrzu. Trzy razy w tygodniu chodzę na nordic walking do parku niedaleko domu. To nic nie kosztuje, a po całym dniu przy komputerze mogę odetchnąć i odpocząć od ekranu. Jesienią park jest piękny, a zimą wystarczy ciepła kurtka. Czasem zabieram ze sobą córkę, która jeździ obok na rolkach. Podsumowując, siłownia jest dobra dla osób, które chcą szybko zobaczyć efekty, ale ja wybieram ruch na świeżym powietrzu, bo daje mi energię i spokój.',
};
KURS_TEMATY.T04.sytuacja2 = {
  polecenie:'Pana sąsiad z góry od tygodnia słucha głośno muzyki późno w nocy, a Pana córka nie może spać. Proszę porozmawiać z sąsiadem: wyjaśnić problem, poprosić o ciszę i zaproponować rozwiązanie.',
  rola_ja:'sąsiad z dołu',
  rola_on:'sąsiad, który słucha muzyki',
  ru:'Вежливая ситуация с соседом на «Pan», без претензий в голосе. Объясни проблему, попроси и предложи компромисс. Выполни каждый пункт задания.',
  cele:['Przywitać się i przedstawić','Wyjaśnić problem','Poprosić o ciszę po 22:00','Zaproponować rozwiązanie','Podziękować i pożegnać się'],
  zwroty:[['Przepraszam, że przeszkadzam.','Извините, что беспокою.'],['Mieszkam piętro niżej.','Я живу этажом ниже.'],['Od tygodnia w nocy jest bardzo głośno.','Уже неделю по ночам очень шумно.'],['Moja córka nie może przez to spać.','Моя дочь из-за этого не может спать.'],['Czy mógłby Pan ściszyć muzykę po dwudziestej drugiej?','Не могли бы Вы делать музыку тише после 22:00?'],['Bardzo dziękuję za zrozumienie.','Большое спасибо за понимание.']],
  wzor:'Sąsiad: Dzień dobry. Słucham?\nTy: Dzień dobry. Przepraszam, że przeszkadzam. Nazywam się Iwan Pietrow, mieszkam piętro niżej.\nSąsiad: Aha, dzień dobry. W czym mogę pomóc?\nTy: Mam mały problem. Od tygodnia późno w nocy słychać u Pana głośną muzykę. Moja córka ma dziesięć lat i przez to nie może spać.\nSąsiad: Naprawdę? Nie wiedziałem, że tak dobrze słychać. Przepraszam.\nTy: Rozumiem, każdy lubi muzykę. Ja też, sam ją tworzę. Czy mógłby Pan ściszyć muzykę po dwudziestej drugiej?\nSąsiad: Oczywiście. Wieczorem będę słuchał w słuchawkach.\nTy: To świetny pomysł. Bardzo dziękuję za zrozumienie.\nSąsiad: Nie ma za co. Jeśli znowu będzie za głośno, proszę po prostu zapukać.\nTy: Dobrze. Miłego wieczoru!\nSąsiad: Nawzajem. Do widzenia.',
};
KURS_TEMATY.T07.sytuacja2 = {
  polecenie:'Zamówił Pan w sklepie internetowym kurtkę dla córki. Kurtka przyszła za mała, a zamek jest zepsuty. Proszę zadzwonić do działu obsługi klienta: opisać problem, podać numer zamówienia i ustalić, czy sklep wymieni kurtkę, czy zwróci pieniądze.',
  rola_ja:'klient',
  rola_on:'pracownik działu obsługi klienta',
  ru:'Официальный звонок: Pan/Pani. Назови проблему, номер заказа, выбери обмен или возврат денег и спроси, как отправить посылку и когда ждать.',
  cele:['Przywitać się i powiedzieć, w jakiej sprawie Pan dzwoni','Opisać oba problemy','Podać numer zamówienia','Wybrać wymianę albo zwrot pieniędzy','Zapytać, jak odesłać paczkę i kiedy przyjdzie nowa'],
  zwroty:[['Dzwonię w sprawie zamówienia numer…','Звоню по поводу заказа номер…'],['Dzwonię, żeby złożyć reklamację.','Звоню, чтобы подать жалобу.'],['Kurtka jest za mała i ma zepsuty zamek.','Куртка мала, и у неё сломана молния.'],['Czy mogę ją wymienić na większy rozmiar?','Могу ли я обменять её на больший размер?'],['Wolałbym zwrot pieniędzy.','Я бы предпочёл возврат денег.'],['Jak mam odesłać paczkę?','Как мне отправить посылку обратно?']],
  wzor:'Pracownik: Dział obsługi klienta, dzień dobry. W czym mogę pomóc?\nTy: Dzień dobry. Dzwonię, żeby złożyć reklamację. W zeszłym tygodniu zamówiłem kurtkę dla córki.\nPracownik: Rozumiem. Jaki jest numer zamówienia?\nTy: Numer zamówienia to 481 523.\nPracownik: Dziękuję. Co jest nie tak z kurtką?\nTy: Są dwa problemy. Kurtka jest za mała, chociaż zamówiłem rozmiar 140. Poza tym zamek jest zepsuty.\nPracownik: Bardzo przepraszam. Możemy wymienić kurtkę albo zwrócić pieniądze.\nTy: Czy mają Państwo tę samą kurtkę w rozmiarze 146?\nPracownik: Tak, mamy ją jeszcze w magazynie.\nTy: To poproszę o wymianę. Jak mam odesłać paczkę?\nPracownik: Wyślemy Panu e-mailem etykietę. Przesyłka zwrotna jest bezpłatna.\nTy: Świetnie. A kiedy dostanę nową kurtkę?\nPracownik: Do pięciu dni roboczych od otrzymania zwrotu.\nTy: Dziękuję bardzo za pomoc. Do widzenia.',
};
KURS_TEMATY.T17.sytuacja2 = {
  polecenie:'Kolega zaprosił Pana na urodziny w sobotę, ale jest Pan chory. Proszę do niego zadzwonić: przeprosić, wyjaśnić, co Panu jest, złożyć życzenia i zaproponować spotkanie w innym terminie.',
  rola_ja:'chory kolega',
  rola_on:'kolega, który ma urodziny',
  ru:'Неформальный звонок на «ты». Извинись, объясни, что болен (симптомы!), поздравь и предложи другой день. Лексика болезни: przeziębić się, katar, kaszel, gorączka, boli mnie gardło.',
  cele:['Przywitać się','Przeprosić i powiedzieć, że nie przyjdziesz','Wyjaśnić, co Ci jest','Złożyć życzenia','Zaproponować inny termin'],
  zwroty:[['Słuchaj, mam złą wiadomość.','Слушай, у меня плохая новость.'],['Niestety nie dam rady przyjść.','К сожалению, я не смогу прийти.'],['Przeziębiłem się.','Я простудился.'],['Mam katar, kaszel i trochę gorączki.','У меня насморк, кашель и небольшая температура.'],['Nie chcę nikogo zarazić.','Я не хочу никого заразить.'],['Może spotkamy się w przyszłym tygodniu?','Может, встретимся на следующей неделе?']],
  wzor:'Kolega: Cześć, Iwan! Wszystko aktualne na sobotę?\nTy: Cześć, Tomek. Słuchaj, mam złą wiadomość. Niestety nie dam rady przyjść na twoje urodziny.\nKolega: Szkoda! A co się stało?\nTy: Przeziębiłem się. Od wczoraj mam katar, kaszel i trochę gorączki. Lekarz kazał mi zostać w domu.\nKolega: Oj, to nie brzmi dobrze. Bierzesz jakieś leki?\nTy: Tak, biorę tabletki i piję dużo herbaty z miodem. Poza tym nie chcę nikogo zarazić.\nKolega: Rozumiem, zdrowie jest najważniejsze.\nTy: Bardzo mi przykro. Z okazji urodzin życzę ci dużo zdrowia i szczęścia! Może spotkamy się w przyszłym tygodniu? Zapraszam cię na piwo.\nKolega: Dzięki! Może w piątek po pracy?\nTy: Piątek pasuje. Wtedy dam ci też prezent.\nKolega: Super. Kuruj się!\nTy: Dzięki, cześć!',
};

// ------------------------------------------------------------------------
// Z prawdziwych sesji (relacje zdających, 2026): monologi marzeń i opinii
// oraz dialogi, których brakowało — kolejne warianty tematów (monolog3, sytuacja3…).
// ------------------------------------------------------------------------
KURS_TEMATY.T04.monolog2 = {
  typ:'marzenie',
  temat:'Jaki dom lub jakie mieszkanie chciałby Pan mieć?',
  plan:['Wstęp: gdzie bym chciał mieszkać','Opis: pokoje, ogród, otoczenie','Dlaczego właśnie tak','Podsumowanie: czy to realne'],
  pytania:['Gdzie chciałby Pan mieszkać?','Ile pokoi miałoby Pana wymarzone mieszkanie?','Co byłoby w ogrodzie?','Jak daleko od centrum chciałby Pan mieszkać?'],
  ru:'Монолог-мечта: условное наклонение (chciałbym, byłby, miałbym) и описание комнат. Тема реально была на экзамене в июне 2026.',
  wzor:'Moje wymarzone mieszkanie jest duże i jasne. Chciałbym mieszkać w domu z ogrodem, najlepiej niedaleko morza i lasu. Na parterze byłby duży salon z kuchnią otwartą na jadalnię, bo lubimy gotować całą rodziną. Obok salonu chciałbym mieć mały pokój z biurkiem, regałem na płyty winylowe i dobrym gramofonem. To byłoby moje miejsce do pracy i do słuchania muzyki. Na piętrze byłyby trzy sypialnie: dla nas, dla córki i jedna dla gości, żeby przyjaciele z Petersburga i Warszawy mogli nas odwiedzać. Oliwia na pewno chciałaby mieć własną łazienkę i duże okno. W ogrodzie postawiłbym stół, grill i huśtawkę. Taki dom nie musiałby być luksusowy. Najważniejsze, żeby było w nim dużo światła i ciszy. Dzisiaj mieszkamy w małym mieszkaniu na czwartym piętrze, ale kiedyś chciałbym spełnić to marzenie. Dlatego co miesiąc odkładamy trochę pieniędzy.',
};
KURS_TEMATY.T13.monolog2 = {
  typ:'marzenie',
  temat:'Miejsce, do którego chciałby Pan pojechać. Dlaczego właśnie tam?',
  plan:['Wstęp: gdzie chciałbym pojechać','Dlaczego to miejsce','Co bym tam zobaczył i robił','Z kim i kiedy; podsumowanie'],
  pytania:['Dokąd chciałby Pan pojechać?','Dlaczego właśnie tam?','Z kim by Pan pojechał?','Jak długo trwałaby taka podróż?'],
  ru:'Монолог-мечта о поездке. Тема была на экзамене в июне 2026. Опора: условное наклонение + «dlatego że…».',
  wzor:'Moim wymarzonym miejscem na podróż jest Japonia. Zawsze chciałem tam pojechać, ponieważ interesuję się fotografią, designem i muzyką elektroniczną, a Tokio jest dla mnie stolicą wszystkich trzech. Chciałbym zobaczyć nowoczesne dzielnice pełne neonów, ale też stare świątynie i spokojne ogrody w Kioto. Bardzo zależy mi na tym, żeby odwiedzić sklepy z płytami winylowymi. Podobno można tam znaleźć rzadkie wydania, których nie ma nigdzie indziej. Pojechałbym tam z żoną i córką, bo Oliwia uwielbia japońskie bajki i chce spróbować prawdziwego sushi. Podróż trwa długo, więc zaplanowałbym co najmniej dwa tygodnie. Jeździlibyśmy szybkim pociągiem, jedlibyśmy lokalne potrawy i robilibyśmy mnóstwo zdjęć. Na razie nie mamy na to pieniędzy, ale zbieramy je od roku. Myślę, że taka wyprawa jest dla dziecka lekcją ciekawości świata, której nie da żadna szkoła.',
};
KURS_TEMATY.T07.monolog3 = {
  typ:'marzenie',
  temat:'Co by Pan zrobił, gdyby wygrał milion złotych?',
  plan:['Wstęp: pierwsza reakcja','Po pierwsze, po drugie, po trzecie — na co wydam','Co zostawię na później','Podsumowanie: czy pieniądze dają szczęście'],
  pytania:['Co by Pan kupił za pierwsze pieniądze?','Czy rzuciłby Pan pracę?','Komu by Pan pomógł?','Czy pieniądze dają szczęście?'],
  ru:'Монолог «что бы ты сделал, если бы…»: период условия gdybym + прошедшее время, главная часть — условное. Тема была на экзамене в июне 2026.',
  wzor:'Gdybym wygrał milion złotych, najpierw bardzo bym się ucieszył, a potem spokojnie zastanowił, co zrobić z tymi pieniędzmi. Po pierwsze, kupiłbym mieszkanie dla rodziny, żeby żona i córka miały własny kąt. Po drugie, odłożyłbym część pieniędzy na naukę Oliwii, bo wykształcenie jest bardzo ważne. Dalej, kupiłbym dobry sprzęt do nagrywania muzyki i kilka rzadkich płyt winylowych, o których od dawna marzę. Poza tym wybralibyśmy się całą rodziną w daleką podróż, na przykład do Japonii. Chciałbym też pomóc rodzicom w Petersburgu i dziadkowi Michałowi. Na koniec zostawiłbym trochę pieniędzy na czarną godzinę. Nie rzuciłbym pracy, bo fotografia sprawia mi przyjemność, ale mógłbym pracować mniej i mieć więcej czasu dla rodziny. Myślę, że pieniądze nie dają szczęścia, ale na pewno pomagają żyć spokojniej.',
};
KURS_TEMATY.T15.monolog2 = {
  typ:'opinia',
  temat:'Czy warto korzystać z roweru miejskiego?',
  plan:['Wstęp: co to jest rower miejski','Zalety','Wady','Moje zdanie i podsumowanie'],
  pytania:['Czy korzysta Pan z roweru miejskiego?','Dlaczego rowery miejskie są popularne?','Jakie są ich wady?','Czy w Pana mieście są ścieżki rowerowe?'],
  ru:'Монолог-мнение о городском велосипеде (на экзамене в июне 2026 просили выразить мнение). Схема: за → против → вывод.',
  wzor:'W Gdańsku od kilku lat działa rower miejski, z którego korzystają tysiące osób. Moim zdaniem warto z niego korzystać, szczególnie w dużym mieście. Po pierwsze, to tani i szybki środek transportu. Rower można wypożyczyć w jednym miejscu i zostawić w innym, a w korkach jedzie się szybciej niż samochodem. Po drugie, jazda na rowerze jest zdrowa i pomaga dbać o środowisko, bo rower nie produkuje spalin. Ja sam często jeżdżę rowerem miejskim, kiedy jest ładna pogoda i nie spieszę się do pracy. Z drugiej strony są też wady. Zimą i w deszczu nie każdy ma ochotę jechać, a w centrum brakuje bezpiecznych ścieżek rowerowych. Zdarza się też, że w pobliżu nie ma wolnego roweru. Podsumowując, uważam, że rower miejski to świetne uzupełnienie komunikacji miejskiej, ale miasto powinno budować więcej ścieżek.',
};
KURS_TEMATY.T20.monolog2 = {
  typ:'opinia',
  temat:'Jak dbać o środowisko naturalne?',
  plan:['Wstęp: dlaczego to ważne','Co robię ja i moja rodzina','Co powinni robić inni, firmy i państwo','Podsumowanie'],
  pytania:['Czy segreguje Pan śmieci?','Jak dojeżdża Pan do pracy?','Co jest największym problemem dla środowiska?','Co robią w Pana kraju, żeby chronić przyrodę?'],
  ru:'Монолог «как заботиться об окружающей среде» (был на экзамене в июне 2026). Примеры из своей жизни дают баллы за выполнение задания.',
  wzor:'Dbanie o środowisko jest dziś ważniejsze niż kiedykolwiek, dlatego staram się robić swoje, chociaż to nie zawsze jest łatwe. W domu segregujemy śmieci: papier, plastik i szkło wyrzucamy osobno. Nie kupuję wody w plastikowych butelkach, tylko piję wodę z kranu. Do pracy jeżdżę tramwajem, a w weekendy chodzę pieszo albo jeżdżę rowerem, więc rzadko używamy samochodu. Poza tym uczę córkę, żeby wyłączała światło i nie marnowała jedzenia. Moim zdaniem każdy powinien zacząć od małych rzeczy, bo razem możemy dużo zmienić. Z drugiej strony ważne jest też to, co robią firmy i państwo. Powinny inwestować w czystą energię i ograniczać plastik w sklepach. Kiedy chodzę na nordic walking do parku i widzę śmieci, zawsze jest mi smutno. Podsumowując, uważam, że ochrona środowiska to obowiązek nas wszystkich, bo mamy tylko jedną planetę.',
};
KURS_TEMATY.T10.sytuacja2 = {
  polecenie:'Chce Pan zarezerwować stolik w restauracji na sobotni wieczór z okazji urodzin żony. Proszę zadzwonić do restauracji: podać termin, godzinę i liczbę osób, zapytać o menu dla dzieci i o możliwość zamówienia tortu.',
  rola_ja:'klient',
  rola_on:'pracownik restauracji',
  ru:'Официальный звонок: Pan/Pani. Назови день, время, число людей, фамилию по буквам и телефон. Задание реально было на экзамене в июне 2026.',
  cele:['Przywitać się i powiedzieć, że chce Pan zarezerwować stolik','Podać dzień, godzinę i liczbę osób','Zapytać o menu dla dzieci','Zapytać o tort urodzinowy','Podać nazwisko i numer telefonu, podziękować'],
  zwroty:[['Chciałbym zarezerwować stolik na sobotę.','Хотел бы забронировать столик на субботу.'],['Na godzinę osiemnastą, dla sześciu osób.','На 18:00, на шесть человек.'],['Mamy urodziny mojej żony.','У моей жены день рождения.'],['Czy macie menu dla dzieci?','Есть ли у вас детское меню?'],['Czy mogę zamówić tort urodzinowy?','Могу ли я заказать праздничный торт?'],['Nazwisko: Pietrow, P-I-E-T-R-O-W.','Фамилия: Петров, П-И-Е-Т-Р-О-В.']],
  wzor:'Pracownik: Restauracja „Pod Żurawiem”, dzień dobry. Słucham.\nTy: Dzień dobry. Chciałbym zarezerwować stolik na sobotę wieczorem.\nPracownik: Na którą godzinę i dla ilu osób?\nTy: Na godzinę osiemnastą, dla sześciu osób, w tym dla dwojga dzieci. Mamy urodziny mojej żony.\nPracownik: Bardzo mi miło. Na jakie nazwisko mam zapisać rezerwację?\nTy: Pietrow, P-I-E-T-R-O-W.\nPracownik: Dziękuję. Stolik będzie czekał od osiemnastej.\nTy: Czy macie menu dla dzieci? Moja córka ma dziesięć lat i nie lubi ostrego jedzenia.\nPracownik: Tak, mamy specjalne menu: zupy, makaron i naleśniki.\nTy: Świetnie. Czy mogę zamówić u Państwa tort urodzinowy?\nPracownik: Oczywiście, ale proszę zamówić go dzień wcześniej. Mamy tort czekoladowy i sernik.\nTy: Poproszę czekoladowy, dla sześciu osób.\nPracownik: Dobrze, zapisuję. Proszę jeszcze o numer telefonu.\nTy: Sześćset sto dwadzieścia trzy, czterysta pięćdziesiąt sześć.\nPracownik: Dziękuję, rezerwacja potwierdzona. Do zobaczenia w sobotę.\nTy: Bardzo dziękuję. Do widzenia.',
};
KURS_TEMATY.T10.sytuacja3 = {
  polecenie:'Wczoraj był Pan z żoną w nowej restauracji. Jedzenie było zimne, obsługa niemiła, a na stolik czekali Państwo prawie godzinę. Opowiada Pan o tym koledze z pracy, który chciał tam pójść. Proszę opisać, co się stało, powiedzieć, co Panu się nie podobało, i doradzić koledze, czy warto tam iść.',
  rola_ja:'klient, który był w restauracji',
  rola_on:'kolega z pracy',
  ru:'Неформальный разговор на «ты»: расскажи, что случилось, что не понравилось, и дай совет. Задание реально было на экзамене в июне 2026 (пожаловаться подруге на ресторан).',
  cele:['Zacząć rozmowę i powiedzieć, gdzie Pan był','Opisać, co się stało (czekanie, obsługa, jedzenie)','Powiedzieć, co Panu się nie podobało','Doradzić koledze, czy iść do tej restauracji','Zaproponować inne miejsce'],
  zwroty:[['Niestety, nie polecam tej restauracji.','К сожалению, не рекомендую этот ресторан.'],['Mieliśmy bardzo złe doświadczenie.','У нас был очень плохой опыт.'],['Czekaliśmy na stolik prawie godzinę.','Мы ждали столик почти час.'],['Kelner był niemiły i pomylił zamówienie.','Официант был груб и перепутал заказ.'],['Zupa była zimna, a rachunek bardzo wysoki.','Суп был холодным, а счёт очень высоким.'],['Polecam raczej inne miejsce.','Рекомендую скорее другое место.']],
  wzor:'Ty: Cześć, Tomek! Pytałeś mnie o tę nową restaurację przy Długiej. Byliśmy tam wczoraj z Natalią.\nKolega: No właśnie! I jak? Warto iść?\nTy: Niestety, nie polecam. Mieliśmy bardzo złe doświadczenie.\nKolega: Naprawdę? Co się stało?\nTy: Najpierw czekaliśmy na stolik prawie godzinę, chociaż mieliśmy rezerwację.\nKolega: Oj, to długo.\nTy: Potem kelner był bardzo niemiły. Ani razu się nie uśmiechnął i pomylił nasze zamówienie. Zamiast ryby dostałem mięso, a zupa była zimna.\nKolega: A mówiliście o tym kelnerowi?\nTy: Tak, ale powiedział tylko, że kuchnia ma dużo pracy. A rachunek był wysoki: prawie trzysta złotych.\nKolega: To rzeczywiście przykre. Znasz jakieś lepsze miejsce?\nTy: Jasne. Polecam małą knajpkę w Oliwie, jedzenie jest tam pyszne i niedrogie. Możemy pójść razem w piątek.\nKolega: Super, chętnie. Dzięki za radę!\nTy: Nie ma za co. Do piątku!',
};
KURS_TEMATY.T13.sytuacja2 = {
  polecenie:'Wylądował Pan na lotnisku, ale Pana walizka nie dotarła. Proszę zgłosić zgubienie bagażu w biurze bagażu: opisać walizkę, podać numer lotu i adres, pod który ma zostać odesłana, i zapytać, co będzie dalej.',
  rola_ja:'pasażer',
  rola_on:'pracownik biura bagażu',
  ru:'Официальная ситуация. Опиши чемодан (размер, цвет, особая примета), назови рейс, адрес и телефон. Задание реально было на экзамене в июне 2026 (сообщить о потере багажа).',
  cele:['Przywitać się i zgłosić zgubiony bagaż','Podać numer lotu i numer z kwitka','Opisać walizkę i powiedzieć, co jest w środku','Podać adres i numer telefonu','Zapytać, co będzie dalej'],
  zwroty:[['Moja walizka nie dotarła.','Мой чемодан не прибыл.'],['Numer lotu to…','Номер рейса —…'],['To duża, granatowa walizka na kółkach.','Это большой тёмно-синий чемодан на колёсиках.'],['Na rączce jest kolorowa wstążka.','На ручке цветная ленточка.'],['Proszę odesłać ją do hotelu…','Прошу отправить его в отель…'],['Kiedy mogę się spodziewać walizki?','Когда мне ждать чемодан?']],
  wzor:'Pracownik: Biuro bagażu, dzień dobry. W czym mogę pomóc?\nTy: Dzień dobry. Przyleciałem z Gdańska do Rzymu, ale moja walizka nie dotarła.\nPracownik: Bardzo mi przykro. Proszę podać numer lotu i numer z kwitka bagażowego.\nTy: Numer lotu to LO 3911, a numer na kwitku to GDN 482 915.\nPracownik: Dziękuję. Jak wygląda ta walizka?\nTy: To duża, granatowa walizka na kółkach, z czarnym uchwytem. Na rączce jest kolorowa wstążka, żeby łatwo ją poznać.\nPracownik: A co jest w środku?\nTy: Ubrania, kosmetyki i leki dla córki. Leki są dla nas bardzo ważne.\nPracownik: Rozumiem. Spróbujemy ją znaleźć jak najszybciej. Pod jaki adres mamy ją odesłać?\nTy: Do hotelu „Roma”, przy ulicy Via Veneto 12. Mój numer telefonu to 600 123 456.\nPracownik: Dobrze, zapisałem. Zwykle walizka dociera w ciągu doby.\nTy: A co mam zrobić do tego czasu? Potrzebuję kupić najpotrzebniejsze rzeczy.\nPracownik: Wypełnimy formularz, a Pan zachowa rachunki. Zwrócimy koszty zakupów.\nTy: Bardzo dziękuję za pomoc. Do widzenia.',
};
KURS_TEMATY.T22.sytuacja2 = {
  polecenie:'Ukradziono Panu telefon w tramwaju. Proszę zgłosić kradzież na policji: opisać telefon, powiedzieć, kiedy i gdzie to się stało, i podać swój numer telefonu.',
  rola_ja:'poszkodowany',
  rola_on:'policjant',
  ru:'Официальная ситуация: Pan/Pani. Опиши телефон (цвет, чехол, особая примета) и назови СВОЙ номер. Задание реально было на экзамене в июне 2026.',
  cele:['Przywitać się i zgłosić kradzież','Powiedzieć, kiedy i gdzie to się stało','Opisać telefon','Podać swój numer telefonu','Podziękować i pożegnać się'],
  zwroty:[['Chcę zgłosić kradzież telefonu.','Хочу заявить о краже телефона.'],['Ukradziono mi telefon w tramwaju.','У меня украли телефон в трамвае.'],['To czarny smartfon w niebieskim etui.','Это чёрный смартфон в синем чехле.'],['Z tyłu ma małą rysę.','Сзади у него небольшая царапина.'],['Mój numer telefonu to…','Мой номер телефона —…'],['Zablokowałem już kartę SIM.','Я уже заблокировал сим-карту.']],
  wzor:'Policjant: Dzień dobry, w jakiej sprawie?\nTy: Dzień dobry. Chcę zgłosić kradzież telefonu.\nPolicjant: Kiedy i gdzie to się stało?\nTy: Dzisiaj rano, około ósmej, w tramwaju jadącym w stronę Wrzeszcza. Ukradziono mi telefon z kieszeni kurtki.\nPolicjant: Jak wyglądał ten telefon?\nTy: To czarny smartfon z dużym ekranem, w niebieskim silikonowym etui. Z tyłu, przy aparacie, ma małą rysę.\nPolicjant: Jaki jest numer telefonu?\nTy: Mój numer to 600 123 456. Zablokowałem już kartę SIM.\nPolicjant: Czy telefon był zabezpieczony hasłem?\nTy: Tak, kodem i odciskiem palca. Mam w nim ważne zdjęcia z pracy.\nPolicjant: Czy widział Pan sprawcę?\nTy: Niestety nie. Poczułem tylko, że ktoś mnie popchnął, a po chwili telefonu już nie było.\nPolicjant: Dobrze, spiszemy zawiadomienie. Proszę podać imię i nazwisko.\nTy: Iwan Pietrow, mieszkam w Gdańsku na Przymorzu.\nPolicjant: Dziękuję. Skontaktujemy się z Panem, jeśli telefon się znajdzie.\nTy: Bardzo dziękuję. Do widzenia.',
};
KURS_TEMATY.T06.sytuacja2 = {
  polecenie:'Pana koleżanka ma jutro ważny egzamin i bardzo się denerwuje. Proszę z nią porozmawiać: zapytać, jaki to egzamin, uspokoić ją i udzielić rady, co zrobić dzień przed egzaminem, żeby zmniejszyć stres.',
  rola_ja:'przyjaciel',
  rola_on:'zdenerwowana koleżanka',
  ru:'Неформальный разговор на «ты»: спроси, какой экзамен, успокой и дай 2–3 совета. Задание реально было на экзамене в июне 2026.',
  cele:['Zapytać, jak się czuje i jaki to egzamin','Uspokoić koleżankę','Dać radę (przed egzaminem)','Zaproponować coś miłego po egzaminie','Życzyć powodzenia'],
  zwroty:[['Jak się czujesz? Jaki to egzamin?','Как себя чувствуешь? Какой это экзамен?'],['Spokojnie, na pewno dasz radę.','Спокойно, ты обязательно справишься.'],['Po pierwsze, nie ucz się do późna.','Во-первых, не учись допоздна.'],['Idź na spacer, to pomaga na stres.','Сходи на прогулку, это помогает от стресса.'],['Połóż się dziś wcześnie spać.','Ложись сегодня пораньше.'],['Trzymam kciuki!','Держу кулачки!']],
  wzor:'Ty: Cześć, Kasiu! Słyszałem, że jutro masz egzamin. Jak się czujesz?\nKoleżanka: Cześć! Strasznie się denerwuję. Nie mogę się skupić.\nTy: Rozumiem. A jaki to egzamin?\nKoleżanka: Teoria na prawo jazdy. Boję się, że wszystko zapomnę.\nTy: Spokojnie, na pewno dobrze się przygotowałaś. Ile razy robiłaś testy?\nKoleżanka: Chyba dwadzieścia.\nTy: No widzisz! To naprawdę dużo. Mam kilka rad na dzień przed egzaminem. Po pierwsze, nie ucz się już do późna, tylko przejrzyj najtrudniejsze pytania.\nKoleżanka: A co jeszcze?\nTy: Po drugie, idź na spacer albo poćwicz, to pomaga na stres. Wieczorem zjedz coś dobrego i połóż się wcześnie spać.\nKoleżanka: Spróbuję. Myślisz, że dam radę?\nTy: Oczywiście! Zawsze dawałaś sobie radę. A po egzaminie zapraszam cię na kawę, żeby to uczcić.\nKoleżanka: Dzięki, jesteś kochany. Trzymaj kciuki!\nTy: Trzymam z całych sił. Daj znać, jak poszło!',
};
KURS_TEMATY.T06.sytuacja3 = {
  polecenie:'Spotkał Pan przypadkiem koleżankę, której nie widział Pan od dawna. Dowiedział się Pan, że jest zaręczona. Proszę wyrazić radość, pogratulować i zaprosić ją na kawę.',
  rola_ja:'dawny kolega',
  rola_on:'koleżanka, która się zaręczyła',
  ru:'Неформальный диалог. Больше времени оставь на приглашение: это обязательный пункт и в нём больше всего шагов (позвать, день, время, место). Экзаменатор часто создаёт препятствие: «в этот день не могу».',
  cele:['Przywitać się i wyrazić radość ze spotkania','Zapytać o nowości, zauważyć pierścionek','Wyrazić radość i pogratulować','Zaprosić na kawę, uzgodnić dzień, godzinę i miejsce','Pożegnać się, pozdrowić narzeczonego'],
  zwroty:[['Tak dawno cię nie widziałem!','Так давно тебя не видел!'],['Świetnie wyglądasz!','Отлично выглядишь!'],['O, widzę, że masz piękny pierścionek!','О, вижу, у тебя красивое кольцо!'],['To wspaniała wiadomość! Gratuluję!','Какая чудесная новость! Поздравляю!'],['Masz ochotę na kawę?','Хочешь кофе?'],['Pozdrów ode mnie narzeczonego!','Передай привет жениху!']],
  wzor:'Ty: Cześć, Marto! Tak dawno cię nie widziałem!\nKoleżanka: Iwan! Co za niespodzianka!\nTy: Świetnie wyglądasz! A co ty tu robisz? Myślałem, że mieszkasz w Krakowie.\nKoleżanka: Bo mieszkam, ale przyjechałam na weekend do rodziców. A ty dalej pracujesz w tym samym studiu?\nTy: Tak, dalej. O, widzę, że masz na palcu piękny pierścionek!\nKoleżanka: No tak, zaręczyłam się miesiąc temu!\nTy: Naprawdę? To wspaniała wiadomość! Gratuluję ci, bardzo się cieszę! Jak on ma na imię?\nKoleżanka: Marek. Poznaliśmy się na kursie tańca.\nTy: Jak romantycznie! A kiedy bierzecie ślub?\nKoleżanka: W przyszłym roku, latem.\nTy: Chcę wszystko wiedzieć, ale niestety trochę się spieszę. Opowiem ci o sobie przy kawie. Masz ochotę na kawę?\nKoleżanka: Z przyjemnością! Kiedy masz czas?\nTy: Co robisz w sobotę po południu?\nKoleżanka: W sobotę niestety nie mogę.\nTy: Szkoda. A może w niedzielę? Znam nową kawiarnię przy rynku. Mają tam świetną kawę i ciasto.\nKoleżanka: W niedzielę mi pasuje. O której?\nTy: O piętnastej. Dasz mi swój numer telefonu?\nKoleżanka: Jasne, zapisz.\nTy: Będziemy w kontakcie. Do zobaczenia w niedzielę! Pozdrów ode mnie narzeczonego!\nKoleżanka: Dziękuję, pozdrowię. Cześć!',
};

// ------------------------------------------------------------------------
// Z prawdziwych sesji (relacje zdających, 2026): monologi marzeń i opinii
// oraz dialogi, których brakowało — kolejne warianty tematów (monolog3, sytuacja3…).
// ------------------------------------------------------------------------
KURS_TEMATY.T03.monolog2 = {
  typ:'opinia',
  temat:'Czy zgadza się Pan ze stwierdzeniem, że w życiu najważniejsza jest rodzina?',
  plan:['Wstęp: czy się zgadzam','Argumenty: bezpieczeństwo, wartości, wspólny czas','Kontrargument: inne ważne rzeczy','Podsumowanie'],
  pytania:['Kto jest dla Pana najważniejszy w rodzinie?','Jak często spotyka się Pan z rodziną?','Czy przyjaciele mogą zastąpić rodzinę?','Czego nauczył Pana ktoś z rodziny?'],
  ru:'Монолог «согласны ли вы с утверждением» (пример из методички центра). Можно согласиться частично, главное — аргументы и пример из своей жизни.',
  wzor:'Zgadzam się ze stwierdzeniem, że w życiu najważniejsza jest rodzina, chociaż nie jest to jedyna ważna rzecz. Po pierwsze, rodzina daje nam poczucie bezpieczeństwa. Kiedy mam problem, wiem, że żona, rodzice i siostra mnie wysłuchają, nawet jeśli mieszkają daleko. Po drugie, w rodzinie uczymy się wartości, na przykład szacunku i cierpliwości. Mój dziadek Michał nauczył mnie, że pracę trzeba wykonywać dokładnie i z sercem. Po trzecie, z rodziną spędzamy najpiękniejsze chwile: wakacje, święta i zwykłe niedzielne obiady. Z drugiej strony ważni są także przyjaciele i praca, bo dają nam rozwój i satysfakcję. Zdarza się też, że rodzina bywa trudna i potrzebny jest dystans. Mimo to uważam, że rodzina jest fundamentem życia. Dlatego staram się spędzać z żoną i córką jak najwięcej czasu, nawet kiedy mam dużo pracy.',
};
KURS_TEMATY.T06.monolog2 = {
  typ:'opis',
  temat:'Proszę scharakteryzować osobę, którą Pan podziwia. Proszę uzasadnić swój wybór.',
  plan:['Wstęp: kim jest ta osoba i skąd ją znam','Wygląd i cechy charakteru z przykładami','Za co ją podziwiam','Podsumowanie: czego się od niej uczę'],
  pytania:['Kto to jest?','Jak długo się znacie?','Jaka to osoba?','Za co Pan ją podziwia?'],
  ru:'Монолог-описание человека (пример из методички центра). Каждую черту характера подтверди примером из жизни.',
  wzor:'Osobą, którą podziwiam, jest moja żona Natalia. Poznaliśmy się kilkanaście lat temu w Petersburgu. Natalia jest spokojna, cierpliwa i bardzo odpowiedzialna. Podziwiam ją przede wszystkim za to, że potrafi pogodzić pracę zdalną z wychowywaniem córki. Na przykład kiedy przeprowadzaliśmy się do Polski, to ona załatwiła wszystkie dokumenty i znalazła szkołę dla Oliwii. Podziwiam też jej optymizm: nawet w trudnych sytuacjach mówi, że wszystko się ułoży, i zwykle ma rację. Poza tym świetnie gotuje i zawsze znajduje czas dla przyjaciół. Z wyglądu jest szczupłą kobietą o ciemnych włosach i ciepłym uśmiechu. Dzięki niej czuję, że mam oparcie. Uważam, że od takich ludzi można się wiele nauczyć, dlatego chciałbym być dla Natalii takim samym wsparciem, jakim ona jest dla mnie.',
};
KURS_TEMATY.T11.monolog3 = {
  typ:'opinia',
  temat:'Czy zgadza się Pan ze stwierdzeniem, że sport bez diety nie ma sensu?',
  plan:['Wstęp: częściowo się zgadzam','Dlaczego dieta ma znaczenie','Dlaczego sport ma sens sam w sobie','Podsumowanie: najlepiej łączyć'],
  pytania:['Czy trzyma Pan jakąś dietę?','Co Pan je przed treningiem i po nim?','Jaki sport Pan uprawia?','Co ważniejsze: sport czy jedzenie?'],
  ru:'Монолог «согласны ли вы» (пример из методички). Хороший ход: согласиться частично и объяснить, в чём именно.',
  wzor:'Częściowo zgadzam się ze stwierdzeniem, że sport bez diety nie ma sensu. Po pierwsze, jedzenie daje organizmowi energię. Kiedy jem słodycze i fast foody, na treningu szybko się męczę. Po drugie, jeśli ktoś chce schudnąć, sam ruch nie wystarczy: łatwo zjeść w pięć minut więcej, niż spali się w godzinę. Po trzecie, zdrowa dieta pomaga szybciej się regenerować. Z drugiej strony uważam, że sport ma sens sam w sobie, bo poprawia samopoczucie i sen, nawet kiedy dieta nie jest idealna. Ja nie trzymam żadnej diety, ale staram się jeść dużo warzyw i mało słodyczy. Trzy razy w tygodniu chodzę na nordic walking i dzięki temu czuję się lepiej, a córka mówi, że jestem weselszy. Podsumowując, najlepiej łączyć ruch ze zdrowym jedzeniem, ale nie trzeba być perfekcyjnym.',
};
KURS_TEMATY.T16.sytuacja2 = {
  polecenie:'Jedzie Pan wynajętym samochodem do Krakowa, ale auto zepsuło się na autostradzie. Proszę zadzwonić po pomoc drogową: opisać, co się stało i gdzie Pan stoi, podać dane samochodu i zapytać, jak długo będzie Pan czekać.',
  rola_ja:'kierowca',
  rola_on:'dyspozytor pomocy drogowej',
  ru:'Официальный звонок: Pan/Pani. Назови место (трасса, километр), что случилось, марку и номер, есть ли пострадавшие, и спроси время ожидания. Это один из примеров диалогов из методички центра.',
  cele:['Przywitać się i zgłosić awarię','Powiedzieć, gdzie Pan stoi','Opisać, co się stało','Podać dane samochodu','Zapytać, jak długo będzie Pan czekać'],
  zwroty:[['Zepsuł mi się samochód.','У меня сломалась машина.'],['Stoję na poboczu z włączonymi światłami awaryjnymi.','Стою на обочине с включённой аварийкой.'],['Silnik nagle zgasł.','Двигатель вдруг заглох.'],['Numer rejestracyjny to…','Регистрационный номер —…'],['Czy ktoś jest ranny?','Есть ли пострадавшие?'],['Jak długo będziemy czekać na pomoc?','Как долго нам ждать помощи?']],
  wzor:'Dyspozytor: Pomoc drogowa, dzień dobry. Słucham.\nTy: Dzień dobry. Zepsuł mi się samochód i potrzebuję pomocy.\nDyspozytor: Gdzie Pan teraz jest?\nTy: Na autostradzie A1, w kierunku Katowic, przy kilometrze 245. Stoję na poboczu z włączonymi światłami awaryjnymi.\nDyspozytor: Co się stało?\nTy: Silnik nagle zgasł i na desce rozdzielczej zapaliła się czerwona lampka. Nie mogę go uruchomić.\nDyspozytor: Jaki to samochód?\nTy: Szary Volkswagen Golf, numer rejestracyjny GD 12345. To samochód wynajęty.\nDyspozytor: Czy ktoś jest ranny?\nTy: Nie, jestem z żoną i córką, wszyscy są cali.\nDyspozytor: Dobrze, wyślemy lawetę. Proszę nie wychodzić na jezdnię.\nTy: Rozumiem. Jak długo będziemy czekać?\nDyspozytor: Około czterdziestu minut.\nTy: Dobrze. Czy mogę prosić o numer, pod który zadzwonię, jeśli pomoc się spóźni?\nDyspozytor: Oczywiście. Numer to 800 123 123.\nTy: Dziękuję bardzo. Do widzenia.',
};
KURS_TEMATY.T19.sytuacja2 = {
  polecenie:'W wynajmowanym mieszkaniu zepsuła się lodówka. Proszę zadzwonić do serwisu: opisać problem, podać adres, zapytać, kiedy technik może przyjść i ile będzie kosztowała naprawa.',
  rola_ja:'klient',
  rola_on:'pracownik serwisu',
  ru:'Официальный звонок. Опиши неисправность (не холодит, шумит), назови адрес, договорись о времени и спроси цену. Пример диалога из методички центра.',
  cele:['Przywitać się i zgłosić awarię','Opisać problem','Podać adres','Umówić termin wizyty technika','Zapytać o koszt naprawy'],
  zwroty:[['Zepsuła mi się lodówka.','У меня сломался холодильник.'],['Lodówka nie chłodzi.','Холодильник не охлаждает.'],['Słychać dziwny hałas.','Слышен странный шум.'],['Kiedy technik może przyjść?','Когда может прийти мастер?'],['Czy możliwe jest po szesnastej?','Возможно ли после 16:00?'],['Ile będzie kosztowała naprawa?','Сколько будет стоить ремонт?']],
  wzor:'Pracownik: Serwis AGD, dzień dobry. W czym mogę pomóc?\nTy: Dzień dobry. Zepsuła mi się lodówka. Potrzebuję technika.\nPracownik: Co dokładnie się dzieje?\nTy: Lodówka nie chłodzi, a w zamrażarce topi się lód. Wczoraj jeszcze działała, ale dzisiaj rano jest w środku ciepła. Słychać też dziwny hałas.\nPracownik: Jaka to marka i ile ma lat?\nTy: To lodówka Bosch, ma około pięciu lat. Należy do właściciela mieszkania, ale on poprosił, żebym sam wezwał serwis.\nPracownik: Rozumiem. Jaki jest adres?\nTy: Gdańsk, ulica Obrońców Wybrzeża 12, mieszkanie 48, czwarte piętro. Jest winda.\nPracownik: Technik może być u Pana jutro między dziesiątą a dwunastą.\nTy: Niestety jutro pracuję. Czy możliwe jest po szesnastej?\nPracownik: Dobrze, jutro o siedemnastej.\nTy: Ile będzie kosztowała naprawa?\nPracownik: Dojazd kosztuje osiemdziesiąt złotych, a cenę naprawy ustali technik na miejscu.\nTy: Dobrze, dziękuję. Mój numer telefonu to 600 123 456.\nPracownik: Zapisałem. Do jutra!',
};
KURS_TEMATY.T21.sytuacja2 = {
  polecenie:'Musi Pan zorganizować świąteczne przyjęcie dla całej firmy. Proszę zadzwonić do restauracji i zapytać o ofertę: termin, liczbę osób, menu i cenę.',
  rola_ja:'klient',
  rola_on:'pracownik restauracji',
  ru:'Официальный звонок. Назови дату, время, число людей, спроси о меню (в том числе без мяса), цене и попроси предложение на почту. Пример диалога из методички центра.',
  cele:['Przywitać się i powiedzieć, w jakiej sprawie Pan dzwoni','Podać termin i liczbę osób','Zapytać o menu (także wegetariańskie)','Zapytać o cenę i napoje','Poprosić o ofertę mailem i podziękować'],
  zwroty:[['Dzwonię w sprawie przyjęcia świątecznego dla firmy.','Звоню по поводу праздничного корпоратива.'],['Na piątek 18 grudnia, od osiemnastej.','На пятницу 18 декабря, с 18:00.'],['Czy macie wtedy wolną salę?','Есть ли у вас тогда свободный зал?'],['Czy jest opcja wegetariańska?','Есть ли вегетарианский вариант?'],['Czy w cenie są napoje?','Входят ли напитки в стоимость?'],['Czy mógłbym prosić o ofertę mailem?','Могу ли я попросить предложение по почте?']],
  wzor:'Pracownik: Restauracja „Stary Młyn”, dzień dobry.\nTy: Dzień dobry. Dzwonię w sprawie przyjęcia świątecznego dla firmy. Chciałbym zapytać o Państwa ofertę.\nPracownik: Chętnie pomogę. Na kiedy planują Państwo przyjęcie?\nTy: Na piątek 18 grudnia, od osiemnastej do dwudziestej drugiej. Czy macie wtedy wolną salę?\nPracownik: Tak, mamy salę na pierwszym piętrze. Dla ilu osób?\nTy: Dla dwunastu osób.\nPracownik: Mamy dwa menu: tradycyjne polskie z barszczem i karpiem oraz bufet.\nTy: Poproszę o szczegóły. Czy jest też opcja wegetariańska? Dwie osoby nie jedzą mięsa.\nPracownik: Oczywiście, przygotujemy dania bez mięsa. Menu tradycyjne kosztuje sto sześćdziesiąt złotych za osobę, a bufet sto czterdzieści.\nTy: Czy w cenie są napoje?\nPracownik: Napoje bezalkoholowe tak, alkohol jest dodatkowo płatny.\nTy: Dobrze. Czy mógłbym prosić o ofertę mailem? Muszę jeszcze uzgodnić ją z szefem.\nPracownik: Oczywiście. Proszę podać adres.\nTy: Podaję, proszę zapisać. Dziękuję za informacje, odezwę się w tym tygodniu. Do widzenia.',
};
KURS_TEMATY.T13.sytuacja3 = {
  polecenie:'Chce Pan namówić kolegę na wspólny wyjazd za granicę, ale kolega boi się latać. Proszę zaproponować wyjazd, wysłuchać jego obaw i znaleźć rozwiązanie.',
  rola_ja:'przyjaciel',
  rola_on:'kolega, który boi się latać',
  ru:'Неформальный диалог: убеди друга, выслушай страх и предложи выход (поезд вместо самолёта). Пример диалога из методички центра.',
  cele:['Zaproponować wspólny wyjazd','Zapytać, czego kolega się boi','Uspokoić go argumentami','Zaproponować inny środek transportu','Umówić się na odpowiedź'],
  zwroty:[['Mam pomysł na wakacje.','У меня есть идея на отпуск.'],['Może pojedziemy razem do Włoch?','Может, поедем вместе в Италию?'],['A co dokładnie cię niepokoi?','А что именно тебя тревожит?'],['Samolot jest bezpieczniejszy niż samochód.','Самолёт безопаснее машины.'],['Możemy pojechać pociągiem.','Можем поехать на поезде.'],['Zastanów się i daj mi znać.','Подумай и дай мне знать.']],
  wzor:'Ty: Cześć, Tomek! Mam pomysł na wakacje. Może pojedziemy razem do Włoch we wrześniu?\nKolega: Włochy? Brzmi super, ale boję się latać.\nTy: Rozumiem, wiele osób się boi. A co dokładnie cię niepokoi?\nKolega: Turbulencje i to, że nie mam nad niczym kontroli. Poza tym lot jest długi.\nTy: Z Gdańska do Rzymu leci się niecałe trzy godziny. To naprawdę krótko. A samolot jest statystycznie bezpieczniejszy niż samochód.\nKolega: Wiem, ale i tak się stresuję.\nTy: Mam inny pomysł. Możemy pojechać pociągiem i autobusem. To dłużej, ale po drodze zobaczylibyśmy Wiedeń i Wenecję.\nKolega: To brzmi lepiej. A ile to potrwa?\nTy: Około dwudziestu godzin, z przesiadkami. Możemy rozłożyć to na dwa dni i w drodze zwiedzać.\nKolega: Hm, a nie jest to za drogie?\nTy: Bilety kupimy z wyprzedzeniem, więc wyjdzie podobnie jak samolot. Zastanów się i daj mi znać do piątku.\nKolega: Dobrze, brzmi sensownie. Pomyślę.\nTy: Super! Zobaczysz, że będzie fajnie. Do piątku!',
};
