// ========================================================================
// PISANIE — moduł "Pisanie" (30 p., 75 minut)
// Na egzaminie: wybierasz JEDEN zestaw i piszesz OBA zadania (a + b).
// Kryteria: wykonanie zadania 0-10 | środki językowe 0-10 | poprawność 0-10
// ========================================================================

const KRYTERIA = [
  { id:'wykonanie', nazwa:'Wykonanie zadania', max:10,
    pytania:[
      'Czy poruszyłem WSZYSTKIE punkty z polecenia?',
      'Czy zmieściłem się w wymaganej długości (±10%)?',
      'Czy forma się zgadza (list / esej / opowiadanie / sprawozdanie)?',
      'Czy jest zwrot do adresata i podpis (jeśli to list)?',
    ]},
  { id:'srodki', nazwa:'Środki językowe', max:10,
    pytania:[
      'Czy użyłem słownictwa ponad podstawowe (nie tylko "dobry", "ładny", "fajny")?',
      'Czy są zdania złożone ze spójnikami (ponieważ, chociaż, dlatego że, żeby)?',
      'Czy użyłem zwrotów typowych dla tej formy (Szanowni Państwo, Moim zdaniem, Podsumowując)?',
      'Czy nie powtarzam w kółko tej samej konstrukcji?',
    ]},
  { id:'poprawnosc', nazwa:'Poprawność językowa', max:10,
    pytania:[
      'Czy sprawdziłem przypadki po przyimkach (w + Msc., do + Dop., z + Narz.)?',
      'Czy końcówki czasowników zgadzają się z osobą i rodzajem (byłem / byłam)?',
      'Czy przymiotniki zgadzają się z rzeczownikami (dobrą książkę, nie: dobra książkę)?',
      'Czy napisałem polskie znaki (ą, ę, ó, ł, ż, ź, ć, ń, ś)?',
    ]},
];

const PISANIE = {

// ---------------- FORMY KRÓTKIE (25-40 słów) ----------------
krotkie: [
  { forma:'SMS / wiadomość', dlugosc:'25 słów',
    temat:'Widzi Pan/Pani ogłoszenie: „Zamienię mieszkanie dwupokojowe na większe w tym samym bloku. Tel. 506 34 34 51. Anna”. Proszę napisać SMS do pani Anny, zapytać o szczegóły (cena, piętro) i umówić się na spotkanie.',
    szkielet:[
      'Zwrot: Dzień dobry, / Witam,',
      'Powód: piszę w sprawie ogłoszenia o zamianie mieszkania.',
      'Pytania: Na którym piętrze jest mieszkanie? Jaka jest cena?',
      'Propozycja spotkania: Czy moglibyśmy spotkać się w sobotę o 12?',
      'Podpis: Pozdrawiam, [imię]',
    ],
    wzor:'Dzień dobry, piszę w sprawie ogłoszenia o zamianie mieszkania. Chciałbym zapytać, na którym piętrze się ono znajduje i jaka jest cena. Czy moglibyśmy spotkać się w sobotę o dwunastej? Pozdrawiam, Andrzej' },

  { forma:'Życzenia', dlugosc:'25 słów',
    temat:'Proszę napisać życzenia z okazji świąt Bożego Narodzenia dla swojej dawnej nauczycielki języka polskiego.',
    szkielet:[
      'Zwrot (WOŁACZ!): Szanowna Pani Profesor! / Droga Pani Anno!',
      'Okazja: Z okazji świąt Bożego Narodzenia…',
      'Czego życzę: życzę Pani zdrowia, spokoju i radości.',
      'Dodatek: Niech ten czas przyniesie same dobre chwile.',
      'Podpis: Z wyrazami szacunku, [imię i nazwisko]',
    ],
    wzor:'Szanowna Pani Profesor! Z okazji świąt Bożego Narodzenia życzę Pani dużo zdrowia, spokoju i rodzinnego ciepła. Niech nadchodzący rok przyniesie same dobre chwile. Z wyrazami szacunku, Andrzej Nowak' },

  { forma:'Opinia na portalu', dlugosc:'40 słów',
    temat:'Spędził Pan wakacje w małym hotelu nad morzem. Proszę napisać opinię o tym miejscu na portalu turystycznym „(Nie)Polecamy”.',
    szkielet:[
      'Gdzie i kiedy: W lipcu spędziłem tydzień w hotelu „X” w Łebie.',
      'Co dobre: Pokoje były czyste, a personel bardzo miły.',
      'Co złe: Niestety, śniadania były skromne, a plaża daleko.',
      'Ocena/rada: Mimo to polecam — stosunek ceny do jakości jest dobry.',
    ],
    wzor:'W lipcu spędziłem tydzień w małym hotelu nad morzem w Łebie. Pokoje były czyste i ciche, a personel wyjątkowo uprzejmy. Niestety, śniadania były dość skromne, a do plaży trzeba było iść piętnaście minut. Mimo to polecam to miejsce, ponieważ stosunek ceny do jakości jest naprawdę dobry.' },

  { forma:'Zaproszenie', dlugosc:'30 słów',
    temat:'Proszę napisać zaproszenie na swoje urodziny do kolegi z pracy.',
    szkielet:[
      'Zwrot (WOŁACZ!): Kochany Tomku! / Drogi Marku!',
      'Co i z jakiej okazji: Zapraszam Cię serdecznie na moje trzydzieste urodziny.',
      'Kiedy i gdzie: w sobotę 22 marca o godzinie 18:00, u mnie w domu.',
      'Zachęta: Będzie muzyka, dobre jedzenie i mnóstwo znajomych.',
      'Podpis: Do zobaczenia! [imię]',
    ],
    wzor:'Kochany Tomku! Zapraszam Cię serdecznie na moje trzydzieste urodziny, które odbędą się w sobotę 22 marca o godzinie osiemnastej u mnie w domu. Będzie muzyka, dobre jedzenie i mnóstwo znajomych. Koniecznie przyjdź! Do zobaczenia, Andrzej' },
],

// ---------------- FORMY DŁUGIE (160-175 słów) ----------------
dlugie: [
  { forma:'Sprawozdanie', dlugosc:'175 słów',
    temat:'Proszę napisać sprawozdanie z uroczystości rodzinnej (np. z wesela siostry, z urodzin babci), w której ostatnio Pan uczestniczył.',
    szkielet:[
      'WSTĘP — co, kiedy, gdzie: W ostatnią sobotę uczestniczyłem w… Uroczystość odbyła się w…',
      'ROZWINIĘCIE 1 — przebieg po kolei: Najpierw… Następnie… Później… Około godziny…',
      'ROZWINIĘCIE 2 — szczegóły: goście, jedzenie, muzyka, atmosfera, coś nieoczekiwanego',
      'ZAKOŃCZENIE — ocena i wrażenia: Uroczystość bardzo mi się podobała, ponieważ… Na długo zapamiętam…',
    ],
    zwroty:['W ostatnią sobotę…','Uroczystość odbyła się w…','Najpierw… Następnie… W końcu…',
            'Wszyscy goście świetnie się bawili.','Największe wrażenie zrobiło na mnie…','Na długo zapamiętam ten dzień.'] },

  { forma:'Esej / wypracowanie', dlugosc:'160 słów',
    temat:'Proszę napisać esej na temat: „To jest praca moich marzeń”.',
    szkielet:[
      'WSTĘP — wprowadzenie tematu: Wiele osób zastanawia się, jaka praca daje szczęście. Moim zdaniem…',
      'ARGUMENT 1: Po pierwsze… ponieważ…',
      'ARGUMENT 2: Po drugie… Co więcej…',
      'KONTRARGUMENT: Oczywiście, taka praca ma też wady, na przykład… Mimo to…',
      'ZAKOŃCZENIE: Podsumowując… Uważam, że…',
    ],
    zwroty:['Moim zdaniem…','Po pierwsze… Po drugie…','Przede wszystkim…','Co więcej…',
            'Z jednej strony… z drugiej strony…','Mimo to…','Podsumowując…','Uważam, że…'] },

  { forma:'Opowiadanie', dlugosc:'175 słów',
    temat:'Proszę napisać opowiadanie pod tytułem „Przygoda na lotnisku”.',
    szkielet:[
      'WSTĘP — tło: Pewnego dnia… Był zwykły poniedziałek, kiedy…',
      'ROZWINIĘCIE — narastanie: Wszystko szło dobrze, dopóki… Nagle… Okazało się, że…',
      'PUNKT KULMINACYJNY: W tym momencie… Nie wiedziałem, co robić…',
      'ZAKOŃCZENIE — rozwiązanie i puenta: Na szczęście… Do dziś pamiętam…',
    ],
    zwroty:['Pewnego dnia…','Nagle…','Okazało się, że…','W tym momencie…',
            'Na szczęście…','Ku mojemu zdziwieniu…','Do dziś pamiętam ten dzień.'],
    uwaga:'CZAS PRZESZŁY przez cały tekst! Uważaj na rodzaj: byłem/byłam, poszedłem/poszłam.' },

  { forma:'List oficjalny', dlugosc:'160 słów',
    temat:'Proszę napisać list do dyrekcji szkoły językowej z prośbą o zwrot opłaty za kurs, w którym nie mógł Pan uczestniczyć.',
    szkielet:[
      'Miejscowość i data (prawy górny róg): Gdańsk, 5 grudnia 2026 r.',
      'Zwrot (WOŁACZ!): Szanowna Pani Dyrektor! / Szanowni Państwo!',
      'CEL: Zwracam się z uprzejmą prośbą o…',
      'UZASADNIENIE: Powodem mojej prośby jest… Niestety…',
      'PROPOZYCJA: Byłbym wdzięczny, gdyby… / Proszę o rozważenie…',
      'ZAKOŃCZENIE: Z góry dziękuję za pozytywne rozpatrzenie mojej prośby.',
      'Podpis: Z poważaniem, [imię i nazwisko]',
    ],
    zwroty:['Zwracam się z uprzejmą prośbą o…','Powodem mojej prośby jest…',
            'Niniejszym informuję, że…','Byłbym wdzięczny, gdyby…',
            'Z góry dziękuję za pozytywne rozpatrzenie.','Z poważaniem,'],
    uwaga:'NIGDY nie pisz "Cześć", "Pozdrawiam" ani form na "Ty". Tylko Pan/Pani/Państwo wielką literą.' },
],

};
