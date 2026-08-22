// ========================================================================
// SŁUCHANIE — moduł "Rozumienie ze słuchu" (30 p., 30 minut, 5 zadań)
// Nagrania generowane przez syntezator mowy przeglądarki (pl-PL).
// Zadanie I  — nagranie odtwarzane RAZ (jak na egzaminie)
// Zadania II-IV — dwa razy
// ========================================================================

const SLUCHANIE = {

// ---- I. Krótkie wypowiedzi: gdzie? / co to znaczy? (raz!) ----
'wypowiedzi': {
  nr: 'I', tytul: 'Krótkie wypowiedzi — gdzie? co oznacza?',
  polecenie: 'Nagranie zostanie odtworzone TYLKO RAZ. Proszę zaznaczyć właściwą odpowiedź.',
  powtorzenia: 1,
  zadania: [
    { audio: 'Poproszę bilet miesięczny, ulgowy. Płacę kartą.',
      pytanie: 'Ta wypowiedź jest typowa:',
      opcje: ['w kasie biletowej', 'w aptece', 'w bibliotece'], ok: 0 },
    { audio: 'Proszę usiąść i rozebrać się do pasa. Co panu dolega?',
      pytanie: 'Ta wypowiedź jest typowa:',
      opcje: ['na basenie', 'u lekarza', 'w sklepie'], ok: 1 },
    { audio: 'Niestety, ten model jest chwilowo niedostępny. Mogę zamówić na przyszły tydzień.',
      pytanie: 'Ta wypowiedź oznacza, że towar:',
      opcje: ['jest w promocji', 'nie jest już produkowany', 'będzie dostępny później'], ok: 2 },
    { audio: 'Gdybym wiedziała, że będzie taki korek, wyszłabym pół godziny wcześniej.',
      pytanie: 'Ta wypowiedź oznacza, że osoba:',
      opcje: ['spóźni się', 'przyjdzie punktualnie', 'ma dużo czasu'], ok: 0 },
    { audio: 'Szanowni państwo, pociąg do Warszawy Centralnej odjedzie z peronu trzeciego, opóźniony o dwadzieścia minut.',
      pytanie: 'To jest fragment:',
      opcje: ['reklamy radiowej', 'komunikatu na dworcu', 'instrukcji obsługi'], ok: 1 },
    { audio: 'No wiesz, mogłeś się chociaż odezwać. Czekałam na ciebie dwie godziny.',
      pytanie: 'Ta wypowiedź oznacza:',
      opcje: ['pretensję', 'podziękowanie', 'zaproszenie'], ok: 0 },
    { audio: 'Świetnie ci poszło! Naprawdę nie spodziewałem się takiego wyniku.',
      pytanie: 'Ta wypowiedź oznacza:',
      opcje: ['krytykę', 'uznanie', 'obojętność'], ok: 1 },
    { audio: 'Przepraszam, czy to daleko stąd? Wolałbym dojść pieszo.',
      pytanie: 'Ta wypowiedź to pytanie o:',
      opcje: ['czas', 'odległość', 'cenę'], ok: 1 },
  ]
},

// ---- II. Dialogi (dwa razy) ----
'dialogi': {
  nr: 'II', tytul: 'Dialogi — co wynika z rozmowy?',
  polecenie: 'Nagranie zostanie odtworzone dwa razy. Proszę zaznaczyć właściwą odpowiedź.',
  powtorzenia: 2,
  zadania: [
    { audio: 'Kobieta: Przepraszam, czy ten autobus jedzie na Zaspę? — Mężczyzna: Na Zaspę? Nie, ten jedzie w przeciwną stronę. Musi pani wysiąść na następnym i przejść na drugą stronę ulicy.',
      pytanie: 'Z dialogu wynika, że kobieta:',
      opcje: ['jedzie w złym kierunku', 'zgubiła bilet', 'szuka postoju taksówek'], ok: 0 },
    { audio: 'Mężczyzna: I jak, podoba ci się mój projekt? — Kobieta: No… kolory są ciekawe. A długo nad tym pracowałeś?',
      pytanie: 'Z dialogu wynika, że kobieta:',
      opcje: ['jest zachwycona projektem', 'nie mówi wprost, co myśli', 'sama zrobiła ten projekt'], ok: 1 },
    { audio: 'Kobieta: Studiuję zaocznie, w tygodniu pracuję, a w weekendy mam zajęcia. — Mężczyzna: A dom, dzieci? — Kobieta: No właśnie, wszystko na mojej głowie.',
      pytanie: 'Z dialogu wynika, że kobieta:',
      opcje: ['ma dużo wolnego czasu', 'studiuje i zajmuje się domem', 'zrezygnowała ze studiów'], ok: 1 },
    { audio: 'Mężczyzna: Kurs jest bezpłatny, finansuje go urząd miasta. — Kobieta: Naprawdę? A trzeba się jakoś zapisywać? — Mężczyzna: Tylko wypełnić formularz przez internet.',
      pytanie: 'Z dialogu wynika, że uczestnicy kursu:',
      opcje: ['płacą za zajęcia', 'biorą udział bezpłatnie', 'muszą być pracownikami urzędu'], ok: 1 },
    { audio: 'Kobieta: Idziesz w sobotę na mecz? — Mężczyzna: Chciałbym, ale obiecałem żonie, że pójdziemy do teatru. — Kobieta: Szkoda, to może innym razem.',
      pytanie: 'Z dialogu wynika, że w sobotę kobieta i mężczyzna:',
      opcje: ['spędzą razem wieczór', 'mają inne plany na wieczór', 'idą razem na mecz'], ok: 1 },
  ]
},

// ---- III. Wywiad TAK/NIE (dwa razy) ----
'wywiad': {
  nr: 'III', tytul: 'Wywiad — TAK czy NIE?',
  polecenie: 'Nagranie zostanie odtworzone dwa razy. TAK — zdanie zgodne z tekstem, NIE — niezgodne.',
  powtorzenia: 2,
  zadania: [
    { audio: `Dziennikarz: Pani Joanno, skąd u pani zamiłowanie do podróży?
      Joanna Kamińska: To się zaczęło bardzo wcześnie. Jako mała dziewczynka jeździłam z rodzicami po całej Europie — samochodem, bo tak było taniej. W liceum natomiast co roku wyjeżdżałam na kursy językowe do Anglii, ale już sama, bez rodziców.
      Dziennikarz: A dzisiaj? Podróżuje pani służbowo?
      Joanna Kamińska: Dziś najczęściej sama, czasem z mężem. Grupy mnie męczą. Środek transportu wybieram zależnie od tego, gdzie jestem — w Azji to pociąg, w Skandynawii prom.
      Dziennikarz: Nie boi się pani bariery językowej?
      Joanna Kamińska: Absolutnie nie. Zawsze można się dogadać rękami, uśmiechem. Nigdy nie miałam z tego powodu żadnych kłopotów.`,
      pytanie: 'Bohaterka wywiadu:',
      items: [
        { text: 'w dzieciństwie podróżowała po Europie.', ok: true },
        { text: 'w szkole średniej wyjeżdżała do Anglii razem z rodzicami.', ok: false },
        { text: 'obecnie podróżuje z grupą przyjaciół.', ok: false },
        { text: 'wybiera środek transportu w zależności od miejsca.', ok: true },
        { text: 'boi się kłopotów z powodu nieznajomości języków.', ok: false },
      ] },
  ]
},

// ---- IV. Dopasowanie opinii ----
'opinie': {
  nr: 'IV', tytul: 'Kto to mówi? — dopasowanie opinii',
  polecenie: 'Proszę wysłuchać wypowiedzi i dopasować je do opinii.',
  powtorzenia: 2,
  zadania: [
    { audio: `Osoba pierwsza: W mieście jest wszystko, ale za wszystko trzeba płacić. Sam czynsz zjada połowę mojej pensji.
      Osoba druga: Mnie najbardziej przeszkadzają sąsiedzi. Ściany są cienkie, słychać każdy krok, a po nocach ktoś ciągle wierci.
      Osoba trzecia: Uwielbiam to, że mam wszędzie blisko — kino, teatr, basen, park nad rzeką. Zawsze jest co robić.
      Osoba czwarta: Powietrze jest fatalne. Zimą w ogóle nie da się otworzyć okna, wszędzie czuć smog.`,
      pytanie: 'Kto to mówi?',
      pary: [
        { left: 'Osoba 1', right: 'mówi, że życie w mieście jest drogie.' },
        { left: 'Osoba 2', right: 'narzeka na hałaśliwych sąsiadów.' },
        { left: 'Osoba 3', right: 'wymienia miejsca, gdzie można spędzić wolny czas.' },
        { left: 'Osoba 4', right: 'zwraca uwagę na zanieczyszczenie.' },
      ] },
  ]
},

};

const SLUCH_KOLEJNOSC = ['wypowiedzi','dialogi','wywiad','opinie'];
