import datetime as dt, json, os
# Uruchom z katalogu repozytorium: python3 tools/gen_kurs_plan.py
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'data', 'kurs-plan.js')
START = dt.date(2026,10,6)
D = {}

def lekcja(L,m=45): return {'typ':'lekcja','ref':L,'min':m}
def slowa(T,m=25):  return {'typ':'slowa','ref':T,'min':m}
def mowa(T,co,m=25):return {'typ':'mowa','ref':T,'co':co,'min':m}
def egz(k,m=20):    return {'typ':'egz','modul':'gram','klucz':k,'min':m}
def sluch(k,m=15):  return {'typ':'egz','modul':'sluch','klucz':k,'min':m}
def pis(f,m=30):    return {'typ':'pisanie','ref':f,'min':m}
def powt(refs,m=30):return {'typ':'powtorka','refs':refs,'min':m}
def bledy(m=20):    return {'typ':'bledy','min':m}
def fiszki(m=10):   return {'typ':'fiszki','min':m}
def zewn(z,opis,m=20): return {'typ':'zewn','zrodlo':z,'opis':opis,'min':m}
def probny(nr,m=190):  return {'typ':'probny','nr':nr,'min':m}
def wynik(nr,m=15):    return {'typ':'wynik','nr':nr,'min':m}

POD = lambda m=15: zewn('podcast','Один выпуск подкаста: сначала послушай без текста, потом с транскрипцией.',m)

def day(n, faza, tytul, cel, zadania):
    D[n] = {'d':n,'data':str(START+dt.timedelta(n-1)),'faza':faza,'tytul':tytul,'cel':cel,'zadania':zadania}

F1, F2, F3 = 'Fundament', 'Egzamin', 'Finisz'

# ---------------- FAZA 1: FUNDAMENT ----------------
day(1,F1,'Start: kim jestem',
 'Род и множественное число — фундамент всех окончаний. Учишься представляться и рассказывать о себе.',
 [lekcja('L01'), slowa('T01'), mowa('T01','monolog'), egz('odmiana',15), sluch('wypowiedzi'), fiszki()])
day(2,F1,'Biernik — kogo? co?',
 'Винительный падеж: что ты имеешь, видишь, любишь. Описываешь внешность и одежду.',
 [lekcja('L02'), slowa('T02'), mowa('T02','opis_osoby'), egz('odmiana'), sluch('dialogi'), pis('zyczenia',20), fiszki()])
day(3,F1,'Dopełniacz — kogo? czego?',
 'Родительный падеж в единственном числе: отрицание, «нет кого-чего», предлоги do / z / bez / dla. Тема — семья.',
 [lekcja('L03'), slowa('T03'), mowa('T03','monolog'), egz('odmiana'), sluch('wywiad'), fiszki()])
day(4,F1,'Miejscownik — gdzie? o czym?',
 'Предложный падеж и чередования (miasto → w mieście). Рассказываешь о своём жилье.',
 [lekcja('L04'), slowa('T04'), mowa('T04','monolog'), egz('odmiana'), sluch('opinie'), pis('pozdrowienia',20), fiszki()])
day(5,F1,'Sobota: powtórka i pierwszy opis',
 'Повторение четырёх падежей. Первое настоящее письменное задание — описание человека.',
 [powt(['L01','L02','L03','L04']), pis('opis_osoby',50), mowa('T02','ilustracja'), zewn('badz_czytanie','«Bądź na B1», часть C (чтение), одно задание. Ключ — в конце книги.',25), fiszki()])
day(6,F1,'Niedziela: przegląd tygodnia',
 'Повторяешь ошибки недели и проходишь первую полную симуляцию устной части с Claude.',
 [bledy(25), mowa('T03','pelny',30), slowa('T01',15), slowa('T04',15), egz('odmiana'), POD(20), fiszki()])

day(7,F1,'Narzędnik — kim? czym?',
 'Творительный: профессия (jestem lekarzem), «с кем» (z kolegą), интересы (interesuję się muzyką). Тема — работа.',
 [lekcja('L05'), slowa('T05'), mowa('T05','monolog'), egz('odmiana'), sluch('wypowiedzi'), fiszki()])
day(8,F1,'Celownik — komu? czemu?',
 'Дательный: кому помогаешь, кому нравится. Характер и чувства.',
 [lekcja('L06'), slowa('T06'), mowa('T06','sytuacja'), egz('zaimki'), sluch('dialogi'), pis('zyczenia_oficjalne',20), fiszki()])
day(9,F1,'Dopełniacz w liczbie mnogiej',
 'Самая коварная форма: dużo ludzi, pięć złotych, bez pieniędzy. Тема — покупки.',
 [lekcja('L07'), slowa('T07'), mowa('T07','sytuacja'), egz('odmiana'), sluch('wywiad'), fiszki()])
day(10,F1,'Wołacz i list prywatny',
 'Звательный падеж: Kochana Mamo! Szanowna Pani! Первое неформальное письмо.',
 [lekcja('L08'), slowa('T08'), pis('list_nieformalny',40), mowa('T08','sytuacja'), sluch('opinie'), fiszki()])
day(11,F1,'Zaimki osobowe',
 'Местоимения во всех падежах: mnie / mi / mną, go / jego / niego. Распорядок дня.',
 [lekcja('L09'), slowa('T09'), mowa('T09','monolog'), egz('zaimki'), sluch('wypowiedzi'), fiszki()])
day(12,F1,'Sobota: powtórka i zaproszenie',
 'Смешанное повторение пяти падежей. Письмо: приглашение. Описание фотографии.',
 [powt(['L05','L06','L07','L08','L09']), pis('zaproszenie',30), pis('sms',20), mowa('T07','ilustracja'), zewn('badz_czytanie','«Bądź na B1», часть C, следующее задание на чтение.',25), fiszki()])
day(13,F1,'Niedziela: symulacja',
 'Ошибки недели, полная устная симуляция, повторение лексики.',
 [bledy(25), mowa('T05','pelny',30), slowa('T06',15), slowa('T09',15), egz('odmiana'), POD(20), fiszki()])

day(14,F1,'Przymiotnik w przypadkach',
 'Прилагательные во всех падежах: w nowym domu, z dobrą kawą, dla młodych ludzi. Еда и ресторан.',
 [lekcja('L10'), slowa('T10'), mowa('T10','sytuacja'), egz('odmiana'), sluch('dialogi'), fiszki()])
day(15,F1,'Czas teraźniejszy',
 'Спряжение: -ę/-esz, -ę/-isz, -am/-asz, -em/-esz и неправильные (jem, wiem, mogę, biorę). Свободное время.',
 [lekcja('L11'), slowa('T11'), mowa('T11','monolog'), egz('czasy'), sluch('wywiad'), pis('ogloszenie',20), fiszki()])
day(16,F1,'Czas przeszły',
 'Прошедшее время: byłem / byłam, poszliśmy, zjadły. Культура — кино, театр, музеи.',
 [lekcja('L12'), slowa('T12'), mowa('T12','monolog'), egz('przeszly'), sluch('opinie'), fiszki()])
day(17,F1,'Aspekt: dokonany i niedokonany',
 'Вид глагола — главное, без чего не построить ни одно время. Транспорт и вокзал.',
 [lekcja('L13'), slowa('T13'), mowa('T13','sytuacja'), egz('tryby'), sluch('wypowiedzi'), pis('zawiadomienie',20), fiszki()])
day(18,F1,'Czas przyszły',
 'Будущее простое (pójdę, kupię) и сложное (będę pracować). Отпуск и гостиница.',
 [lekcja('L14'), slowa('T14'), mowa('T14','monolog'), egz('czasy'), sluch('dialogi'), fiszki()])
day(19,F1,'Sobota: pierwsze sprawozdanie',
 'Повторение глаголов. Первая длинная форма — отчёт о поездке (175 слов).',
 [powt(['L10','L11','L12','L13','L14']), pis('sprawozdanie',55), mowa('T14','ilustracja'), zewn('badz_czytanie','«Bądź na B1», часть C, следующее задание.',25), fiszki()])
day(20,F1,'Niedziela: symulacja',
 'Ошибки, устная симуляция, лексика недели.',
 [bledy(25), mowa('T11','pelny',30), slowa('T10',15), slowa('T13',15), egz('przeszly'), POD(20), fiszki()])

day(21,F1,'Czasowniki ruchu',
 'iść / chodzić, jechać / jeździć и приставки: przyjść, wyjść, wejść, dojechać. Город и как пройти.',
 [lekcja('L15'), slowa('T15'), mowa('T15','sytuacja'), egz('przyimki'), sluch('wywiad'), fiszki()])
day(22,F1,'Przyimki i przypadki',
 'Какой падеж после какого предлога: do / na / w / z / za / przed / po. Банк, почта, услуги.',
 [lekcja('L16'), slowa('T16'), mowa('T16','sytuacja'), egz('przyimki'), sluch('opinie'), pis('opis_przedmiotu',35), fiszki()])
day(23,F1,'Zaimki dzierżawcze i „swój”',
 'mój / twój / nasz и коварное swój: Wziął swój telefon. Здоровье и врач.',
 [lekcja('L17'), slowa('T17'), mowa('T17','sytuacja'), egz('zaimki'), sluch('wypowiedzi'), fiszki()])
day(24,F1,'Liczebniki',
 'Числа с существительными (dwie kobiety, czterej studenci, pięć osób), даты и время. Учёба.',
 [lekcja('L18'), slowa('T18'), mowa('T18','monolog'), egz('odmiana'), sluch('dialogi'), pis('opis_miejsca',35), fiszki()])
day(25,F1,'Tryb rozkazujący',
 'Повелительное: Weź! Napiszcie! Niech pan usiądzie! Аренда жилья.',
 [lekcja('L19'), slowa('T19'), mowa('T19','sytuacja'), egz('tryby'), sluch('wywiad'), fiszki()])
day(26,F1,'Sobota: opowiadanie',
 'Повторение пяти уроков. Длинная форма — рассказ в прошедшем времени.',
 [powt(['L15','L16','L17','L18','L19']), pis('opowiadanie',55), mowa('T15','ilustracja'), zewn('badz_czytanie','«Bądź na B1», часть C, следующее задание.',25), fiszki()])
day(27,F1,'Niedziela: Wszystkich Świętych',
 'Праздник поминовения — хороший повод для темы традиций. Ошибки и устная симуляция.',
 [bledy(25), mowa('T17','pelny',30), slowa('T16',15), slowa('T19',15), egz('przyimki'), POD(20), fiszki()])

day(28,F1,'Tryb przypuszczający',
 'Условное наклонение: chciałbym, gdybym miał czas, to bym pojechał. Погода и природа.',
 [lekcja('L20'), slowa('T20'), mowa('T20','monolog'), egz('tryby'), sluch('opinie'), fiszki()])
day(29,F1,'Stopniowanie',
 'Степени сравнения: lepszy, najlepszy, bardziej, więcej. Город или деревня — что лучше.',
 [lekcja('L21'), slowa('T24'), mowa('T24','monolog'), egz('stopniowanie'), sluch('wypowiedzi'), pis('opinia',20), fiszki()])
day(30,F1,'Nikt, nic, nigdy',
 'Вопросительные, неопределённые и отрицательные местоимения, двойное отрицание. Праздники.',
 [lekcja('L22'), slowa('T21'), mowa('T21','monolog'), egz('pytania'), sluch('dialogi'), fiszki()])
day(31,F1,'Zdania złożone',
 'Союзы: że, żeby, ponieważ, chociaż, który, jeśli…to, im…tym. Общество и его проблемы.',
 [lekcja('L23'), slowa('T22'), mowa('T22','monolog'), egz('spojniki'), sluch('wywiad'), pis('esej',40), fiszki()])
day(32,F1,'Pytania i rekcja czasowników',
 'Как задать вопрос к любой части предложения и какой падеж требует глагол. Медиа и образ жизни.',
 [lekcja('L24'), slowa('T23'), mowa('T23','monolog'), egz('pytania'), egz('parafraza',15), sluch('opinie'), fiszki()])
day(33,F1,'Sobota: list oficjalny',
 'Повторение последних пяти уроков. Официальное письмо — самая «экзаменационная» форма.',
 [powt(['L20','L21','L22','L23','L24']), pis('list_oficjalny',55), mowa('T20','ilustracja'), zewn('badz_czytanie','«Bądź na B1», часть C, следующее задание.',25), fiszki()])
day(34,F1,'Niedziela: koniec fundamentu',
 'Весь курс грамматики пройден. Большое повторение ошибок и устная симуляция.',
 [bledy(30), mowa('T22','pelny',30), egz('spojniki'), egz('stopniowanie'), POD(20), fiszki()])

# ---------------- FAZA 2: EGZAMIN ----------------
def tydzien_egz(n, tytul, cel, gram, form, temat, sl):
    day(n,F2,tytul,cel,[egz(gram[0],25), egz(gram[1],25), pis(form,50), mowa(temat,'pelny',25), sluch(sl,15), zewn('cert_mp3','Официальные записи для аудирования B1 (certyfikatpolski.pl → Zbiory zadań). Одна часть, один раз, без паузы.',15), bledy(15)])

day(35,F2,'Trudne rzeczowniki',
 'Последний урок: człowiek → ludzie, tydzień, ręka, oko, imię, muzeum, Amerykanin. Начинается фаза экзамена.',
 [lekcja('L25'), egz('odmiana',25), pis('charakterystyka',45), mowa('T06','pelny'), sluch('wypowiedzi'), bledy(15)])
tydzien_egz(36,'Spójniki i przyimki na czas','Задания II и VIII в экзаменационном формате, по таймеру.',['spojniki','przyimki'],'recenzja','T12','dialogi')
day(37,F2,'11 Listopada',
 'День независимости. Степени сравнения и времена на время; чтение о празднике.',
 [egz('stopniowanie',25), egz('czasy',25), pis('opis_sytuacji',40), mowa('T21','pelny'), zewn('badz_czytanie','«Bądź na B1», часть C — одно задание по таймеру (8 минут).',20), bledy(15)])
tydzien_egz(38,'Pytania i parafraza','Задания V и VI — те, где теряют больше всего баллов.',['pytania','parafraza'],'list_nieformalny','T08','wywiad')
tydzien_egz(39,'Aspekt i tryby','Задание VII: вид, повелительное и условное — в одном тексте.',['tryby','przeszly'],'opowiadanie','T13','opinie')
day(40,F2,'PRÓBNY EGZAMIN 1',
 'Первый полный пробный экзамен: четыре модуля подряд, 190 минут, без словаря и без пауз.',
 [probny(1)])
day(41,F2,'Analiza egzaminu 1',
 'Вносишь баллы по модулям, разбираешь каждую ошибку и переписываешь письменную работу.',
 [wynik(1), bledy(30), pis('list_oficjalny',45), mowa('T19','pelny',30), egz('odmiana',20)])

tydzien_egz(42,'Tydzień egzaminacyjny: list oficjalny','Каждый день: два грамматических задания по таймеру, длинная форма, полная устная часть.',['odmiana','zaimki'],'list_oficjalny','T16','wypowiedzi')
tydzien_egz(43,'Tydzień egzaminacyjny: opowiadanie','',['czasy','przeszly'],'opowiadanie','T14','dialogi')
tydzien_egz(44,'Tydzień egzaminacyjny: esej','',['spojniki','pytania'],'esej','T23','wywiad')
tydzien_egz(45,'Tydzień egzaminacyjny: opis miejsca','',['stopniowanie','przyimki'],'opis_miejsca','T15','opinie')
tydzien_egz(46,'Tydzień egzaminacyjny: sprawozdanie','',['tryby','parafraza'],'sprawozdanie','T11','wypowiedzi')
day(47,F2,'PRÓBNY EGZAMIN 2','Второй полный пробный экзамен по таймеру.',[probny(2)])
day(48,F2,'Analiza egzaminu 2','Баллы по модулям, разбор ошибок, переписывание.',[wynik(2), bledy(30), pis('esej',45), mowa('T24','pelny',30), egz('zaimki',20)])

tydzien_egz(49,'Najsłabszy moduł','Неделя прицельной работы: всё лишнее время — в модуль с самым низким баллом пробника.',['odmiana','czasy'],'charakterystyka','T03','dialogi')
tydzien_egz(50,'Najsłabszy moduł','',['zaimki','tryby'],'list_oficjalny','T17','wywiad')
tydzien_egz(51,'Najsłabszy moduł','',['przeszly','spojniki'],'recenzja','T12','opinie')
tydzien_egz(52,'Najsłabszy moduł','',['pytania','stopniowanie'],'sprawozdanie','T14','wypowiedzi')
tydzien_egz(53,'Najsłabszy moduł','',['parafraza','przyimki'],'opowiadanie','T22','dialogi')
day(54,F2,'PRÓBNY EGZAMIN 3','Последний полный пробный экзамен — самый свежий официальный тест 2020 года.',[probny(3)])
day(55,F2,'Analiza egzaminu 3','Финальный разбор. После него — только повторение, ничего нового.',[wynik(3), bledy(30), mowa('T01','pelny',30), pis('zaproszenie',25), egz('odmiana',20)])

# ---------------- FAZA 3: FINISZ ----------------
day(56,F3,'Tabele: przypadki','Быстрый прогон всех падежей по урокам. Только повторение.',
 [powt(['L01','L02','L03','L04','L05','L06','L07','L08','L09','L10'],40), bledy(30), mowa('T04','pelny',25), egz('odmiana',20), fiszki(15)])
day(57,F3,'Tabele: czasowniki','Времена, вид, наклонения, предлоги, союзы.',
 [powt(['L11','L12','L13','L14','L15','L16','L19','L20','L21','L23'],40), bledy(30), mowa('T09','pelny',25), egz('tryby',20), fiszki(15)])
day(58,F3,'Ostatnia symulacja','Две письменные формы по таймеру и полная устная часть — как на экзамене.',
 [pis('list_oficjalny',35), pis('zyczenia',15), mowa('T05','pelny',30), sluch('wypowiedzi',15), egz('spojniki',20)])
day(59,F3,'Spokojna powtórka','Лёгкий день: обороты для устной части, каркасы письма, логистика.',
 [zewn('logistyka','Документ (паспорт), подтверждение записи, адрес центра, дорога туда. Проверь, когда начинается устная часть.',20), mowa('T01','opis_frazy',20), pis('powtorka_szkieletow',20), fiszki(15)])
day(60,F3,'Odpoczynek','Полчаса оборотов — и отдых. Выспаться важнее последних слов.',
 [mowa('T01','opis_frazy',15), zewn('odpoczynek','Никакой новой грамматики. Прогулка, ранний сон. Завтра в 9:00 — слушание.',15)])

plan = [D[n] for n in range(1,61)]
assert len(plan)==60 and all(p['d']==i+1 for i,p in enumerate(plan))
tot=[sum(t['min'] for t in p['zadania']) for p in plan]
print('min/day: min',min(tot),'max',max(tot),'avg',round(sum(tot)/60))
refs=set()
for p in plan:
    for t in p['zadania']:
        for k in ('ref',): 
            if k in t: refs.add((t['typ'],t[k]))
        if t['typ']=='powtorka': refs.update(('lekcja',r) for r in t['refs'])
        if t['typ']=='egz': refs.add(('egz:'+t['modul'],t['klucz']))
print(sorted(r for r in refs if r[0] in('pisanie',)))
print(sorted({r[1] for r in refs if r[0]=='lekcja'}))
print(sorted({r[1] for r in refs if r[0] in('slowa','mowa')}))
print(sorted({r[1] for r in refs if r[0].startswith('egz')}))
js = "// ========================================================================\n// KURS B1 — plan 60 dni (6.10–4.12.2026). Egzamin: 5–6.12.2026, Gdańsk.\n// Wygenerowane skryptem — przy zmianach edytuj generator, nie ręcznie.\n// ========================================================================\nconst KURS_START = '2026-10-06';\nconst KURS_PLAN = " + json.dumps(plan, ensure_ascii=False, indent=1) + ";\n"
open(OUT,'w',encoding='utf-8').write(js)
print('written', len(js),'bytes')
