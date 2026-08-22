// ========================================================================
// GRAMATYKA — 8 typów zadań modułu "Poprawność gramatyczna"
// Struktura wzorowana na oficjalnym teście B1 (30 p., 45 minut)
// ========================================================================
// typy interakcji:
//   'wybor'     — wybrać poprawną formę z nawiasu
//   'ramka'     — wstawić wyraz z ramki (jeden zbędny)
//   'wpisz'     — wpisać poprawną formę wyrazu z nawiasu
//   'pytanie'   — ułożyć pytanie o podkreśloną część zdania
//   'parafraza' — przekształcić zdanie z użyciem podanego wyrazu

const GRAMATYKA = {

// ---------- I. Odmiana rzeczowników, przymiotników, zaimków ----------
'odmiana': {
  nr: 'I', tytul: 'Odmiana rzeczowników, przymiotników i zaimków',
  polecenie: 'Proszę wybrać poprawną formę wyrazu.',
  interakcja: 'wybor',
  zadania: [
    { zdanie: 'Wczoraj długo rozmawiałem z ___ o pracy.',
      opcje: ['moim bratem', 'mojego brata', 'mojemu bratu'], ok: 0,
      wyjasnienie: 'z + Narzędnik → z moim bratem' },
    { zdanie: 'Niestety nie znam ___, o których mówisz.',
      opcje: ['te piosenki', 'tych piosenek', 'tymi piosenkami'], ok: 1,
      wyjasnienie: 'Przeczenie (nie znam) → Dopełniacz: nie znam tych piosenek' },
    { zdanie: 'Od dziecka interesuję się ___ Europy.',
      opcje: ['historia', 'historii', 'historią'], ok: 2,
      wyjasnienie: 'interesować się + Narzędnik → historią' },
    { zdanie: 'Bardzo dziękuję ___ za wszystko.',
      opcje: ['mojej mamie', 'moją mamą', 'mojej mamy'], ok: 0,
      wyjasnienie: 'dziękować + Celownik → mojej mamie' },
    { zdanie: 'Od pięciu lat mieszkam w ___ nad morzem.',
      opcje: ['małym mieście', 'małego miasta', 'małym miastem'], ok: 0,
      wyjasnienie: 'w + Miejscownik → w małym mieście (miasto → mieście, st→ść)' },
    { zdanie: 'W bibliotece jest wiele ciekawych ___.',
      opcje: ['książki', 'książek', 'książkach'], ok: 1,
      wyjasnienie: 'wiele + Dopełniacz l.mn. → wiele książek' },
    { zdanie: 'Ten film podobał się ___ bardziej niż tobie.',
      opcje: ['nas', 'nam', 'nami'], ok: 1,
      wyjasnienie: 'podobać się + Celownik → nam' },
    { zdanie: 'Poprosiliśmy ___ ludzi o opinię.',
      opcje: ['młodzi', 'młodych', 'młodymi'], ok: 1,
      wyjasnienie: 'prosić + Biernik; męskoosobowy B.lm = D.lm → młodych ludzi' },
    { zdanie: 'Krzyżaków czytałem razem z ___.',
      opcje: ['rodzicach', 'rodzicami', 'rodziców'], ok: 1,
      wyjasnienie: 'z + Narzędnik l.mn. → z rodzicami' },
    { zdanie: 'Po kilku ___ wiedziałem, że to książka dla mnie.',
      opcje: ['stron', 'stronach', 'strony'], ok: 1,
      wyjasnienie: 'po + Miejscownik l.mn. → po kilku stronach' },
  ]
},

// ---------- II. Spójniki ----------
'spojniki': {
  nr: 'II', tytul: 'Spójniki',
  polecenie: 'Proszę uzupełnić zdania wyrazami z ramki. Uwaga! Jeden wyraz jest niepotrzebny.',
  interakcja: 'ramka',
  ramka: ['że', 'więc', 'ani', 'żeby', 'czyli', 'chociaż', 'ponieważ'],
  zadania: [
    { zdanie: 'Nie mam dziś czasu, ___ nie pójdę na spotkanie.', ok: 'więc',
      wyjasnienie: 'więc — skutek, wynik' },
    { zdanie: 'Wszyscy wiedzą, ___ masz rację.', ok: 'że',
      wyjasnienie: 'że — zdanie podrzędne dopełnieniowe' },
    { zdanie: 'Nie lubię ___ kawy, ___ herbaty.', ok: 'ani',
      wyjasnienie: 'ani… ani… — podwójne przeczenie' },
    { zdanie: 'Uczę się codziennie, ___ zdać egzamin w grudniu.', ok: 'żeby',
      wyjasnienie: 'żeby + bezokolicznik — cel' },
    { zdanie: 'Poszedł na spacer, ___ padał deszcz.', ok: 'chociaż',
      wyjasnienie: 'chociaż — przyzwolenie (mimo że)' },
    { zdanie: 'Mieszkam na Pomorzu, ___ na północy Polski.', ok: 'czyli',
      wyjasnienie: 'czyli — wyjaśnienie, inaczej mówiąc' },
  ]
},

// ---------- III. Stopniowanie ----------
'stopniowanie': {
  nr: 'III', tytul: 'Stopniowanie przymiotników i przysłówków',
  polecenie: 'Proszę wybrać poprawną formę.',
  interakcja: 'wybor',
  zadania: [
    { zdanie: 'To ___ film, jaki w życiu widziałem.',
      opcje: ['dobry', 'lepszy', 'najlepszy'], ok: 2,
      wyjasnienie: 'dobry → lepszy → najlepszy. "jaki w życiu widziałem" wymaga stopnia najwyższego' },
    { zdanie: 'Mam teraz ___ czasu niż rok temu.',
      opcje: ['mało', 'mniej', 'najmniej'], ok: 1,
      wyjasnienie: 'mało → mniej → najmniej. "niż" wymaga stopnia wyższego' },
    { zdanie: 'Dzisiaj jest ___ niż wczoraj.',
      opcje: ['ciepło', 'cieplej', 'najcieplej'], ok: 1,
      wyjasnienie: 'ciepło → cieplej → najcieplej (przysłówek, stopień wyższy)' },
    { zdanie: 'Mój brat mówi po polsku ___ ode mnie.',
      opcje: ['dobrze', 'lepiej', 'najlepiej'], ok: 1,
      wyjasnienie: 'dobrze → lepiej → najlepiej. "ode mnie" = porównanie' },
    { zdanie: 'Emeryci mają ___ obowiązków niż osoby pracujące.',
      opcje: ['mniej', 'mniejszych', 'najmniejsze'], ok: 0,
      wyjasnienie: 'mniej + Dopełniacz (ilość), nie "mniejszych"' },
    { zdanie: 'Dziadek jest w grafice komputerowej ___ od wnuka.',
      opcje: ['lepiej', 'lepszy', 'najlepszy'], ok: 1,
      wyjasnienie: 'jest jaki? → przymiotnik "lepszy" (nie przysłówek "lepiej")' },
    { zdanie: '___ wybierane przez seniorów formy aktywności to podróże.',
      opcje: ['Częste', 'Najczęstsze', 'Najczęściej'], ok: 2,
      wyjasnienie: 'określa imiesłów "wybierane" → przysłówek: najczęściej wybierane' },
  ]
},

// ---------- IV. Czas teraźniejszy i przyszły ----------
'czasy': {
  nr: 'IV', tytul: 'Czas teraźniejszy i przyszły',
  polecenie: 'Proszę wpisać poprawną formę czasownika z nawiasu.',
  interakcja: 'wpisz',
  zadania: [
    { zdanie: 'Jutro ___ (pójść) do lekarza.', ok: 'pójdę',
      wyjasnienie: 'dokonany w czasie przyszłym prostym: pójdę' },
    { zdanie: 'Codziennie ___ (jeść) śniadanie o ósmej.', ok: 'jem',
      wyjasnienie: 'jeść: jem, jesz, je, jemy, jecie, jedzą' },
    { zdanie: 'Oni ___ (móc) przyjść dopiero jutro.', ok: 'mogą',
      wyjasnienie: 'móc: mogę, możesz, może, możemy, możecie, mogą' },
    { zdanie: 'Doskonale ___ (wiedzieć), że masz rację.', ok: 'wiem',
      wyjasnienie: 'wiedzieć: wiem, wiesz, wie, wiemy, wiecie, wiedzą' },
    { zdanie: 'W przyszłym miesiącu ___ (kupić) nowy samochód.', ok: 'kupię',
      wyjasnienie: 'kupić (dk) → czas przyszły prosty: kupię' },
    { zdanie: 'Zawsze ___ (brać) ze sobą parasol.', ok: 'biorę',
      wyjasnienie: 'brać: biorę, bierzesz, bierze, bierzemy, bierzecie, biorą' },
    { zdanie: 'Czy w sobotę ___ (być) w domu?', ok: 'będziesz',
      wyjasnienie: 'być w przyszłości: będę, będziesz, będzie…' },
    { zdanie: 'Ona nigdy nie ___ (rozumieć) moich żartów.', ok: 'rozumie',
      wyjasnienie: 'rozumieć: rozumiem, rozumiesz, rozumie…' },
  ]
},

// ---------- V. Pytanie o podkreśloną część ----------
'pytania': {
  nr: 'V', tytul: 'Pytanie o podkreśloną część zdania',
  polecenie: 'Proszę zapytać o podkreśloną część zdania (wpisz tylko słowo pytające z przyimkiem, np. "Na kogo").',
  interakcja: 'pytanie',
  zadania: [
    { zdanie: 'Michał czekał na dworcu na *Annę*.', ok: 'na kogo',
      alt: ['na kogo?'], wyjasnienie: 'czekać na kogo? → Na kogo czekał Michał?' },
    { zdanie: 'Spotkanie odbędzie się *w piątek*.', ok: 'kiedy',
      alt: ['kiedy?'], wyjasnienie: 'okoliczność czasu → Kiedy odbędzie się spotkanie?' },
    { zdanie: 'Kupiłem ten prezent *dla siostry*.', ok: 'dla kogo',
      alt: ['dla kogo?'], wyjasnienie: 'dla + Dopełniacz → Dla kogo kupiłeś prezent?' },
    { zdanie: 'Jadę do Krakowa *pociągiem*.', ok: 'czym',
      alt: ['czym?'], wyjasnienie: 'Narzędnik środka transportu → Czym jedziesz do Krakowa?' },
    { zdanie: 'Ta książka kosztuje *czterdzieści złotych*.', ok: 'ile',
      alt: ['ile?'], wyjasnienie: 'cena → Ile kosztuje ta książka?' },
    { zdanie: 'Matka pomogła znaleźć pracę *Piotrowi*.', ok: 'komu',
      alt: ['komu?'], wyjasnienie: 'pomóc + Celownik → Komu matka pomogła znaleźć pracę?' },
    { zdanie: 'Michał próbował podzielić jabłko *widelcem*.', ok: 'czym',
      alt: ['czym?'], wyjasnienie: 'narzędzie → Czym Michał próbował podzielić jabłko?' },
    { zdanie: 'Nasza decyzja będzie zależeć *od pogody*.', ok: 'od czego',
      alt: ['od czego?'], wyjasnienie: 'zależeć od + Dopełniacz → Od czego będzie zależeć decyzja?' },
  ]
},

// ---------- VI. Parafraza ----------
'parafraza': {
  nr: 'VI', tytul: 'Przekształcanie zdań',
  polecenie: 'Proszę przekształcić zdanie, używając wyrazu w nawiasie, tak by znaczenie zostało to samo.',
  interakcja: 'parafraza',
  zadania: [
    { zdanie: 'Anna lubi literaturę polską.', wyraz: 'interesuje się',
      ok: 'anna interesuje się literaturą polską',
      wyjasnienie: 'interesować się + Narzędnik → literaturą polską' },
    { zdanie: 'W twoim pokoju zawsze jest bałagan.', wyraz: 'porządku',
      ok: 'w twoim pokoju nigdy nie ma porządku',
      wyjasnienie: 'zawsze bałagan = nigdy nie ma porządku (przeczenie + Dopełniacz)' },
    { zdanie: 'Czy znasz adres tego sklepu?', wyraz: 'wiesz',
      ok: 'czy wiesz, jaki jest adres tego sklepu',
      alt: ['czy wiesz jaki jest adres tego sklepu'],
      wyjasnienie: 'znać coś → wiedzieć, jaki/gdzie/co (zdanie podrzędne)' },
    { zdanie: 'Marta bez przerwy wspomina ten koncert.', wyraz: 'opowiada',
      ok: 'marta bez przerwy opowiada o tym koncercie',
      wyjasnienie: 'opowiadać o + Miejscownik → o tym koncercie' },
    { zdanie: 'Wczoraj Michał był w teatrze pierwszy raz w życiu.', wyraz: 'poszedł',
      ok: 'wczoraj michał poszedł do teatru pierwszy raz w życiu',
      wyjasnienie: 'być w + Msc. → pójść do + Dop.' },
    { zdanie: 'Joanna przyglądała się małemu kotu.', wyraz: 'obserwowała',
      ok: 'joanna obserwowała małego kota',
      wyjasnienie: 'przyglądać się + Celownik → obserwować + Biernik' },
  ]
},

// ---------- VII. Aspekt i tryby ----------
'tryby': {
  nr: 'VII', tytul: 'Aspekt, tryb rozkazujący i przypuszczający',
  polecenie: 'Proszę wybrać poprawną formę.',
  interakcja: 'wybor',
  zadania: [
    { zdanie: '___ do mnie SMS-a, kiedy dojedziesz na miejsce!',
      opcje: ['Napisz', 'Napiszesz', 'Pisałbyś'], ok: 0,
      wyjasnienie: 'polecenie → tryb rozkazujący dokonany: Napisz!' },
    { zdanie: 'Gdybym miał więcej czasu, ___ na ten koncert.',
      opcje: ['pójdę', 'poszedłbym', 'chodziłem'], ok: 1,
      wyjasnienie: 'gdyby + tryb przypuszczający: poszedłbym' },
    { zdanie: 'Kochani, ___ o spotkaniu w sobotę!',
      opcje: ['pamiętamy', 'pamiętajcie', 'pamiętaliby'], ok: 1,
      wyjasnienie: 'zwrot do grupy (wy) → pamiętajcie!' },
    { zdanie: 'Niech on ___ jutro trochę wcześniej.',
      opcje: ['przyjdzie', 'przyjdź', 'przyszedłby'], ok: 0,
      wyjasnienie: 'niech + 3. osoba czasu przyszłego: niech przyjdzie' },
    { zdanie: 'Czy ___ mi pomóc? Sam nie dam rady.',
      opcje: ['możesz', 'mógłbyś', 'mogłeś'], ok: 1,
      wyjasnienie: 'grzeczna prośba → tryb przypuszczający: mógłbyś' },
    { zdanie: 'Gdybyśmy mieli pieniądze, ___ dziadkowi wyremontować dom.',
      opcje: ['pomożemy', 'pomogliśmy', 'pomoglibyśmy'], ok: 2,
      wyjasnienie: 'my + tryb przypuszczający: pomoglibyśmy' },
    { zdanie: 'Wczoraj cały wieczór ___ tę książkę, ale jej nie skończyłem.',
      opcje: ['przeczytałem', 'czytałem', 'poczytam'], ok: 1,
      wyjasnienie: '"ale nie skończyłem" → proces, aspekt niedokonany: czytałem' },
    { zdanie: 'W końcu ___ ten artykuł i wysłałem go do redakcji.',
      opcje: ['pisałem', 'napisałem', 'piszę'], ok: 1,
      wyjasnienie: 'wynik, zakończenie → dokonany: napisałem' },
  ]
},

// ---------- VIII. Przyimki ----------
'przyimki': {
  nr: 'VIII', tytul: 'Przyimki',
  polecenie: 'Proszę uzupełnić zdania wyrazami z ramki. Uwaga! Jeden wyraz jest niepotrzebny.',
  interakcja: 'ramka',
  ramka: ['do', 'na', 'za', 'o', 'pod', 'przed', 'bez'],
  zadania: [
    { zdanie: 'Codziennie o ósmej wychodzę ___ pracy.', ok: 'do',
      wyjasnienie: 'do + Dopełniacz — kierunek: do pracy' },
    { zdanie: 'Od dziesięciu minut czekam ___ autobus.', ok: 'na',
      wyjasnienie: 'czekać na + Biernik' },
    { zdanie: 'Nie martw się, wrócę ___ godzinę.', ok: 'za',
      wyjasnienie: 'za + Biernik — po upływie czasu: za godzinę' },
    { zdanie: 'Wczoraj długo rozmawialiśmy ___ pogodzie.', ok: 'o',
      wyjasnienie: 'rozmawiać o + Miejscownik' },
    { zdanie: 'Mieszkam ___ Gdańskiem, dwadzieścia minut autem.', ok: 'pod',
      wyjasnienie: 'pod + Narzędnik — okolice miasta: pod Gdańskiem' },
    { zdanie: 'Spotkajmy się ___ kinem o siódmej.', ok: 'przed',
      wyjasnienie: 'przed + Narzędnik — miejsce: przed kinem' },
  ]
},

};

const GRAM_KOLEJNOSC = ['odmiana','spojniki','stopniowanie','czasy','pytania','parafraza','tryby','przyimki'];
