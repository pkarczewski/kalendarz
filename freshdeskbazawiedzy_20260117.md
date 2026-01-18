Budowane od 17.01.2026

---

### **ŹRÓDŁO: Ticket \#80003 (prospekt)**

PYTANIE:  
Co oznacza pole "Adres URL do prospektu" w edycji etapu inwestycji i jak je poprawnie uzupełnić?

ROZWIĄZANIE:  
Pole "Adres URL do prospektu" w edycji etapu inwestycji odnosi się bezpośrednio do pola \`URL\_prospectus\` w pliku CSV, który jest generowany na potrzeby portalu Dane.gov.pl. To pole służy do wskazania lokalizacji prospektu informacyjnego dla danego etapu.

Prospekt można wskazać na dwa sposoby:

1\.  \*\*Wgrać prospekt jako dokument w systemie:\*\* Należy dodać plik PDF z prospektem w zakładce "Dokumenty" danego etapu, wybierając kategorię "Prospekt informacyjny dane.gov.pl". System automatycznie wygeneruje odpowiedni URL do tego dokumentu.  
2\.  \*\*Wprowadzić bezpośredni link (URL) do prospektu:\*\* Jeśli prospekt jest już dostępny online na Państwa serwerze (np. na stronie internetowej firmy), można wkleić bezpośredni adres URL do tego pliku w polu "Adres URL do prospektu".

\*\*Wskazówka:\*\* Upewnij się, że link do prospektu jest poprawny i prowadzi bezpośrednio do pliku PDF. W przypadku wgrywania dokumentu do systemu, sprawdź, czy dokument został poprawnie zapisany i jest widoczny na liście dokumentów danego etapu.

KATEGORIA:  
Konfiguracja  
---

### **ŹRÓDŁO: Ticket \#79984 (Błąd w crm)**

PYTANIE:  
Dlaczego nie mogę zapisać harmonogramu płatności, mimo że wprowadzam poprawne dane? System zgłasza błąd.

ROZWIĄZANIE:  
System CRM weryfikuje, czy łączna wartość transz w harmonogramie nie przekracza ceny transakcyjnej umowy. Oznacza to, że suma wszystkich transz w danym momencie tworzenia harmonogramu nie może być wyższa od ceny, na jaką umówiono się z klientem.

Jeśli system uniemożliwia zapisanie harmonogramu, upewnij się, że suma wartości transz nie przekracza ceny umowy. Możesz to zrobić na dwa sposoby:

1\.  \*\*Usuń istniejące transze:\*\* Usuń wszystkie lub część transz z harmonogramu.  
2\.  \*\*Dodawaj transze po kolei:\*\* Dodawaj transze pojedynczo, kontrolując, czy po dodaniu każdej z nich suma wartości transz nie przekracza ceny umowy.

Pamiętaj, że system kontroluje sumę \*w trakcie\* tworzenia harmonogramu, a nie tylko na końcu. Oznacza to, że nawet jeśli ostateczna suma będzie prawidłowa, ale w którymś momencie dodawania transz suma przekroczy cenę umowy, system zablokuje zapis.

KATEGORIA:  
Umowy  
---

### **ŹRÓDŁO: Ticket \#79970 (Kilka poprawek do wdrożenia)**

PYTANIE:  
Dlaczego cena lokalu w ofercie online różni się od ceny widocznej na liście lokali w systemie?

ROZWIĄZANIE:  
Cena lokalu prezentowana w ofercie online może różnić się od ceny widocznej na liście lokali, ponieważ oferta online uwzględnia łączną cenę netto, czyli cenę netto samego lokalu powiększoną o cenę netto wykończenia i wyposażenia (jeśli dotyczy). Na liście lokali standardowo wyświetlana jest jedynie cena netto samego lokalu.

Aby sprawdzić, jak system kalkuluje cenę w ofercie online, przejdź do karty danego lokalu. Znajdziesz tam pola "Cena netto (PLN)" oraz "Wykończenie i wyposażenie netto". Suma tych dwóch wartości odpowiada cenie netto prezentowanej w ofercie online.

Jeśli chcesz, aby na liście lokali widoczna była również łączna cena netto (lokal \+ wykończenie/wyposażenie), skontaktuj się z naszym działem wsparcia (kontakt@voxcommerce.pl). Dodanie nowej kolumny z łączną ceną netto jest zmianą globalną, wpływającą na wszystkie inwestycje w systemie, dlatego wymaga zgłoszenia i akceptacji.

KATEGORIA:  
Oferty  
---

### **ŹRÓDŁO: Ticket \#79960 (Dostęp do panelu Vox)**

PYTANIE:  
Jak utworzyć konto użytkownika w systemie Vox Developer?

ROZWIĄZANIE:  
Aby utworzyć konto użytkownika w systemie Vox Developer, należy skontaktować się z działem wsparcia technicznego Voxcommerce (kontakt@voxcommerce.pl). W zgłoszeniu należy podać:  
\*   Imię i nazwisko użytkownika  
\*   Adres e-mail użytkownika  
\*   Informację o wymaganych uprawnieniach (np. analogiczne do istniejącego użytkownika)  
\*   Informację, do jakich inwestycji użytkownik ma mieć dostęp.

Dział wsparcia utworzy konto i poinformuje o tym. Po utworzeniu konta, warto zweryfikować poprawność uprawnień i dostępu do odpowiednich inwestycji. Utworzenie konta przez dział wsparcia jest konieczne, ponieważ konfiguracja uprawnień wymaga weryfikacji i odpowiedniego przypisania ról w systemie, co zapewnia bezpieczeństwo danych i zgodność z polityką uprawnień w firmie.

KATEGORIA:  
Użytkownicy  
---

### **ŹRÓDŁO: Ticket \#79945 (Kierbedzia umowa rezerwacyjna)**

PYTANIE:  
Jak mogę wprowadzić zmiany w treści umowy rezerwacyjnej w systemie?

ROZWIĄZANIE:  
Zmiany w szablonach umów (np. rezerwacyjnych) wymagają interwencji działu wsparcia technicznego. Wynika to z faktu, że szablony umów są powiązane z prawnymi aspektami sprzedaży i wymagają precyzyjnej konfiguracji, aby uniknąć błędów.

Aby zlecić modyfikację szablonu umowy rezerwacyjnej:

1\.  Przygotuj dokładny opis zmian, które chcesz wprowadzić. Najlepiej zaznacz konkretne fragmenty tekstu, które mają być zmienione (np. za pomocą screenów z zaznaczeniami, tak jak w zgłoszeniu).  
2\.  Wyślij zgłoszenie na adres kontakt@voxcommerce.pl, załączając opis zmian oraz nazwę inwestycji, której dotyczy umowa.  
3\.  Nasz zespół wprowadzi zmiany w szablonie i poinformuje Cię o ich wdrożeniu. Zwykle zajmuje to 1-2 dni roboczych.  
4\.  Po wprowadzeniu zmian, zweryfikuj poprawność szablonu, generując umowę testową.

KATEGORIA:  
Konfiguracja  
---

### **ŹRÓDŁO: Ticket \#79940 (szablon ośw. Nabywcy)**

PYTANIE:  
Jak dodać informację o rodzaju dokumentu tożsamości i nazwie państwa w szablonie "Oświadczenie Nabywcy" przy adresach nabywców?

ROZWIĄZANIE:  
Zmiana szablonów, takich jak "Oświadczenie Nabywcy", wymaga interwencji działu wsparcia technicznego. Nie ma możliwości samodzielnej edycji kodu HTML szablonu ze względów bezpieczeństwa i spójności wyświetlania na różnych urządzeniach.

Aby dodać pola "Rodzaj dokumentu tożsamości" i "Nazwa państwa" w sekcji adresów nabywców w szablonie "Oświadczenie Nabywcy":

1\.  Przygotuj dokładną specyfikację: Określ, w którym miejscu szablonu mają się pojawić nowe pola (np. po polu "Adres", przed polem "Kod pocztowy").  
2\.  Skontaktuj się z supportem: Wyślij wiadomość na adres kontakt@voxcommerce.pl z następującymi informacjami:  
    \*   Nazwa szablonu: "Oświadczenie Nabywcy".  
    \*   Dokładny opis, gdzie mają być dodane pola "Rodzaj dokumentu tożsamości" i "Nazwa państwa".  
    \*   Przykładowy wypełniony formularz (opcjonalnie), aby pokazać, jak to ma wyglądać.

Nasz zespół wprowadzi zmiany w szablonie w ciągu 1-2 dni roboczych i poinformuje o możliwości weryfikacji.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#79930 (umowy rezerwacyjne)**

PYTANIE:  
Czy na liście umów rezerwacyjnych mogę zobaczyć datę ważności umowy bez konieczności otwierania każdej z nich?

ROZWIĄZANIE:  
Tak, data ważności umowy rezerwacyjnej jest widoczna bezpośrednio na liście umów, obok numeru umowy. Dzięki temu możesz szybko sprawdzić, które umowy wkrótce wygasają, bez potrzeby otwierania każdej z nich osobno. W przypadku rezerwacji ustnych, informacja o dacie wygaśnięcia widoczna jest jako "WYGASA". Dla umów rezerwacyjnych data ważności jest wyświetlana w podobny sposób, zapewniając spójność i ułatwiając zarządzanie umowami.

KATEGORIA:  
Użytkownicy  
---

### **ŹRÓDŁO: Ticket \#79928 (FW: Norwida VII: protokół przekazania lokalu dla Etapu IV)**

PYTANIE:  
Jak dodać do systemu nowy szablon protokołu przekazania lokalu, aby móc go generować z poziomu systemu?

ROZWIĄZANIE:  
Aby dodać nowy szablon protokołu przekazania lokalu do systemu voxCRM, należy przesłać go do działu wsparcia technicznego. Szablon zostanie wgrany do systemu, a następnie konieczna będzie weryfikacja poprawności jego działania.

Dlaczego tak to działa? Generowanie dokumentów w oparciu o szablony wymaga ingerencji w konfigurację systemu, aby zapewnić prawidłowe formatowanie danych i integrację z istniejącymi funkcjonalnościami. Dział wsparcia posiada odpowiednie uprawnienia i wiedzę, aby bezpiecznie i efektywnie wdrożyć nowy szablon.

Kroki postępowania:  
1\. Przygotuj plik z szablonem protokołu (najlepiej w formacie .docx).  
2\. Skontaktuj się z działem wsparcia voxCRM, wysyłając e-mail na adres kontakt@voxcommerce.pl.  
3\. W tytule wiadomości wpisz "Wgranie szablonu protokołu przekazania lokalu".  
4\. W treści wiadomości załącz plik z szablonem i podaj nazwę etapu inwestycji, dla którego protokół ma być dostępny (np. Etap IV Norwida VII).  
5\. Po wgraniu szablonu przez dział wsparcia, sprawdź, czy poprawnie generuje dokumenty z danymi z systemu. W razie potrzeby zgłoś ewentualne poprawki.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#3123 (ROBYG \- Pliki XML)**

PYTANIE:  
Jak uzyskać pliki XML dla inwestycji?

ROZWIĄZANIE:  
Prześlij zgłoszenie z prośbą o przesłanie plików XML dla konkretnych inwestycji. W odpowiedzi otrzymasz linki do plików XML dla wskazanych inwestycji. Przykładowy link do pliku XML ma następujący format: https://robyg.voxdeveloper.com/webservice/realestatestatuslist/api\_key/00442738a121493ff55603c4ce2e23213c7d8e5d/investment\_id/NUMER\_ID\_INWESTYCJI

KATEGORIA:  
Integracje  
---

### **ŹRÓDŁO: Ticket \#11618 (Nowa Deweloper CRM \- wygenerowanie backupu)**

PYTANIE:  
Jak wygenerować backup bazy danych i gdzie go znaleźć?

ROZWIĄZANIE:  
Backup bazy danych systemu VoxCRM jest generowany przez support. Po wygenerowaniu, plik zabezpieczony hasłem jest umieszczany w udostępnionym katalogu Google Drive. Hasło do pliku jest przesyłane SMS-em na podany numer telefonu.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#16736 (Dane dla Klienta NDI)**

PYTANIE:  
Czy system voxCRM udostępnia ceny netto i brutto za lokal (całościowe i za m2)?

ROZWIĄZANIE:  
Dla inwestycji Jagiellońska 13 system CRM udostępnia cenę całkowitą oraz cenę za m2 netto oraz brutto.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#17657 (Nadanie dostępu.)**

PYTANIE:  
Jak nadać dostęp nowemu użytkownikowi w systemie VoxDeveloper?

ROZWIĄZANIE:  
W celu nadania dostępu nowemu użytkownikowi, należy podać adres e-mail osoby, dla której ma być nadany dostęp. Po zgłoszeniu, support utworzy nowe konto w systemie i prześle dane dostępowe. Można również określić, jakie uprawnienia ma posiadać nowy użytkownik, np. takie same jak inny, wskazany użytkownik w systemie.

KATEGORIA:  
Użytkownicy  
---

---

### **ŹRÓDŁO: Ticket \#22489 (DVME | Trojmiasto.pl \- uruchomienie automatycznego eksportu ogłoszeń.)**

PYTANIE:  
Jak uruchomić automatyczny eksport ogłoszeń do portalu trojmiasto.pl?

ROZWIĄZANIE:  
1\. Ustaw w programie VoxCrm dane dostępowe do konta FTP eksportu dla portalu trojmiasto.pl:  
   \- Serwer: importy.trojmiasto.pl  
   \- Użytkownik: \- odpowiednio podane  
   \- Hasło: odpowiednio podane  
2\. Uruchom wysyłanie danych.  
3\. Upewnij się, że w karcie edycji lokalu zaznaczony jest checkbox "Eksportuj do trójmiasto.pl".  
4\. Uzupełnij wymagane dane w edycji inwestycji (Województwo, Rok budowy) i lokalu (Karty i plany lokalu, Cena brutto).

KATEGORIA:  
Integracje  
---

### **ŹRÓDŁO: Ticket \#22489 (DVME | Trojmiasto.pl \- uruchomienie automatycznego eksportu ogłoszeń.)**

PYTANIE:  
Jak uruchomić automatyczny eksport ogłoszeń do portalu trojmiasto.pl?

ROZWIĄZANIE:  
1\. Ustaw w programie VoxCrm dane dostępowe do konta FTP eksportu:  
   \- Serwer: importy.trojmiasto.pl  
   \- Użytkownik: capitis\_development  
   \- Hasło: NeMXlHf4Hg  
2\. Po wykonaniu tej czynności można uruchomić wysyłanie.  
3\. Upewnij się, że w karcie edycji lokalu zaznaczony jest checkbox "Eksportuj do trójmiasto.pl".

KATEGORIA:  
Integracje  
---

### **ŹRÓDŁO: Ticket \#29561 (MFC | Podłączenie głównej poczty w systemie)**

PYTANIE:  
Jak podłączyć główną skrzynkę pocztową Outlook (na serwerze Microsoft) w systemie?

ROZWIĄZANIE:  
Upewnij się, że masz odpowiednie uprawnienia. Następnie przejdź do: \[adres URL\] i przeprowadź synchronizację skrzynki głównej poprzez połączenie z Exchange zgodnie z instrukcją: \[adres URL\]. Po podłączeniu skrzynki, poinformuj o tym wsparcie techniczne w celu przetestowania działania synchronizacji.

KATEGORIA:  
Konfiguracja  
---

### **ŹRÓDŁO: Ticket \#29599 (Proneko Kaskada Jasień \- aktualizacja cen w systemie VOX)**

PYTANIE:  
Jak włączyć widoczność cen promocyjnych w ofertach PDF i mailach do klientów?

ROZWIĄZANIE:  
Support włączył widoczność kolumn z cenami promocyjnymi podczas generowania oferty PDF oraz wysyłania maila do klientów. Dodatkowo włączono kolumny dotyczące cen promocyjnych w zakładce WYSZUKIWARKA, aby były widoczne od razu po wejściu na listę lokali.

KATEGORIA:  
Oferty  
---

### **ŹRÓDŁO: Ticket \#29694 (PEIRA \- udogonienia)**

PYTANIE:  
Jak ustawić domyślne typy lokali w wyszukiwarce?

ROZWIĄZANIE:  
Domyślne typy lokali w wyszukiwarce ustawia dział wsparcia. W tym celu skontaktuj się z działem wsparcia technicznego Vox Developer (kontakt@voxcommerce.pl, 534 571 638\) z prośbą o dodanie odpowiednich typów lokali.

KATEGORIA:  
Konfiguracja  
---

### **ŹRÓDŁO: Ticket \#29913 (OKRE | Dane dostępowe do systemu voxDeveloper \- P. Grzywińska)**

PYTANIE:  
Czy jest dostępna aplikacja mobilna do systemu voxCRM?

ROZWIĄZANIE:  
Tak, system voxCRM jest dostępny w formie aplikacji mobilnej. Instrukcja instalacji aplikacji mobilnej jest dostępna pod adresem: https://voxcommerce.freshdesk.com/support/solutions/articles/1000318088-jak-zainstalowa%C4%87-aplikacj%C4%99-mobiln%C4%85

KATEGORIA:  
Aplikacja Mobilna  
---

### **ŹRÓDŁO: Ticket \#30258 (prośba o pomoc)**

PYTANIE:  
Nie mogę wczytać pliku Alior xsl dotyczącego zwolnionych środków. Co zrobić?

ROZWIĄZANIE:  
System nie odnalazł odpowiedniej umowy, ponieważ numer rachunku nie został przypisany do żadnego lokalu w systemie. Należy przypisać numer rachunku do lokalu w systemie.

KATEGORIA:  
Import/Export  
---

### **ŹRÓDŁO: Ticket \#30276 (Formularz reklamacyjny)**

PYTANIE:  
Jak zmodyfikować treść części C formularza zgłoszenia?

ROZWIĄZANIE:  
Support zrealizował zadanie dotyczące możliwości zmiany treści części C formularza zgłoszenia i dodał nową treść.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#30465 (Serwer FTP do kopii zapasowej)**

PYTANIE:  
Jak zmienić serwer FTP do automatycznego backupu bazy danych?

ROZWIĄZANIE:  
Aby zmienić serwer FTP dla backupu, należy przekazać następujące dane: login, hasło oraz numer portu. Host serwera FTP. Połączenie realizowane jest przez port 22 (szyfrowany protokół SFTP).

KATEGORIA:  
Konfiguracja  
---

### **ŹRÓDŁO: Ticket \#30466 (uzupełnianie danych w Vox)**

PYTANIE:  
Jak wyeksportować przewidywaną datę podpisania przeniesienia własności w eksporcie listy umów?

ROZWIĄZANIE:  
Należy przejść do zakładki Umowy, zaznaczyć wybrane umowy, kliknąć przycisk Eksport i wybrać interesujące kolumny (nowa kolumna dostępna jest na dole listy). Na koniec należy kliknąć przycisk Eksport.

KATEGORIA:  
Import/Export  
---

### **ŹRÓDŁO: Ticket \#30488 (Aktualizacja wzorów stopek)**

PYTANIE:  
Jak zaktualizować banner w stopkach mailowych użytkowników?

ROZWIĄZANIE:  
W celu aktualizacji banneru w stopkach mailowych użytkowników, należy przesłać prośbę o aktualizację wraz z linkiem do baneru. Po otrzymaniu zgłoszenia, support zaktualizuje baner i podlinkuje go. Należy zweryfikować, czy stopka wyświetla się prawidłowo.

KATEGORIA:  
Użytkownicy  
---

### **ŹRÓDŁO: Ticket \#30643 (Nierozpoznane leady)**

PYTANIE:  
Jak przypisać nierozpoznane leady do odpowiednich inwestycji i podłączyć parsery?

ROZWIĄZANIE:  
Po zidentyfikowaniu nierozpoznanych leadów, należy podłączyć odpowiednie parsery w systemie. Po podłączeniu parserów, nierozpoznane leady zostaną zaczytane do zakładki Lead. Następnie należy zweryfikować, czy leady poprawnie zaczytały się do odpowiedniej zakładki.

KATEGORIA:  
Leady  
---

### **ŹRÓDŁO: Ticket \#30709 (Integracji z systemem CRM.)**

PYTANIE:  
Jak uzyskać link XML dla inwestycji w celu integracji?

ROZWIĄZANIE:  
W celu wygenerowania linków XML dla inwestycji, należy przesłać nazwy inwestycji, dla których mają zostać one wygenerowane. Przykładowy link XML: https://demo1.voxdeveloper.com/webservice/realestatestatuslist/api\_key/ab33c2fb8240c8c7ca015d924713b5d234b7778e/investment\_id/15

KATEGORIA:  
Integracje  
---

### **ŹRÓDŁO: Ticket \#30981 (TS Invest | Dane dostępowe do systemu voxDeveloper)**

PYTANIE:  
Jak uzyskać uprawnienia do dodawania zgłoszeń w zakładce Helpdesk?

ROZWIĄZANIE:  
W celu uzyskania uprawnień do dodawania nowych zgłoszeń w zakładce Helpdesk, skontaktuj się z działem wsparcia Voxcommerce.

KATEGORIA:  
Użytkownicy

Teraz przeanalizuję transkrypcję i przygotuję pytania i odpowiedzi w odpowiednim formacie:

---

## **Pytania i odpowiedzi ze szkolenia Mostostal (17.12.2025)**

---

**Pytanie:** Czy system weryfikuje klienta po dwóch danych (telefon i mail) czy tylko po jednym kontakcie?

**Odpowiedź:** System weryfikuje po obu rzeczach – po mailu i po telefonie. Podstawową metodą weryfikacji jest adres e-mail, ponieważ telefon może się różnić (spacje, numer kierunkowy itp.). Jeśli potrzebne jest także rozpoznawanie po telefonie, można to dodatkowo włączyć w konfiguracji systemu.

KATEGORIA: Leady

---

**Pytanie:** Czy można scalić duplikaty klientów w systemie?

**Odpowiedź:** Tak, duplikaty klientów można scalić. Podczas scalania wybieramy, który klient ma być tym podstawowym, a system połączy dane z wszystkich widoków. Alternatywnie można włączyć opcję tworzenia duplikatów klientów różniących się przypisaną inwestycją, co pozwala na obsługę jednego klienta przez różnych doradców w ramach różnych inwestycji.

KATEGORIA: Klienci

---

**Pytanie:** Jak działa status "powiązany" przy leadach?

**Odpowiedź:** Status "powiązany" nadawany jest automatycznie, gdy klient wysyła kolejne zapytanie (np. ze strony internetowej), a w systemie już istnieje jako skonwertowany klient z tym samym adresem e-mail. System rozpoznaje, że to ta sama osoba i oznacza lead jako powiązany z istniejącym klientem.

KATEGORIA: Leady

---

**Pytanie:** Jak usunąć testowe lub spamowe leady z listy?

**Odpowiedź:** Leady testowe lub spamowe oznaczamy statusem "usunięto". Wchodzimy w lead, zmieniamy status z "nowy" na "usunięto", wybieramy powód (test, błędne dane, inne) i opcjonalnie dodajemy notatkę. Lead znika z domyślnej listy, ale pozostaje w systemie i można go przywrócić przez filtrowanie po statusie "usunięto".

KATEGORIA: Leady

---

**Pytanie:** Czy system rejestruje połączenia telefoniczne z klientami?

**Odpowiedź:** Tak, ale tylko na urządzeniach z systemem Android. Aplikacja mobilna VoxCRM pobiera informacje o połączeniach przychodzących i wychodzących z klientami zapisanymi w systemie. iOS ze względu na politykę prywatności Apple nie pozwala aplikacjom na dostęp do rejestru połączeń.

KATEGORIA: Konfiguracja

---

**Pytanie:** Czy można śledzić, czy klient otworzył ofertę wysłaną mailem?

**Odpowiedź:** Tak, system śledzi otwarcia maili i kliknięcia w linki. W zakładce "wysłane" widoczne są kolumny "otwarto" i "kliknięto" z datami. Dodatkowo przy ofercie online system rejestruje liczbę wyświetleń, kliknięcia w poszczególne lokale, pobrania rzutów oraz wypełnienia formularza kontaktowego.

KATEGORIA: Oferty

---

**Pytanie:** Czy można ustawić automatyczny mail z podziękowaniem po wpłynięciu leada?

**Odpowiedź:** Tak, można skonfigurować automatyzację wysyłania maila po wpłynięciu leada. Dla każdej inwestycji można ustawić osobny szablon. Potrzebne jest podłączenie ogólnej skrzynki mailowej, z której będą wysyłane automatyczne wiadomości.

KATEGORIA: Automatyzacje

---

**Pytanie:** Gdzie można zostawić notatkę o kliencie?

**Odpowiedź:** Notatki można zapisywać w dwóch miejscach: 1\) W polu "Opis klienta" (widoczny od razu po lewej stronie karty klienta) – edytujemy przez "Edytuj dane". 2\) W historii aktywności – każda aktywność ma pole na notatkę. Dodatkowo można korzystać z asystenta AI do generowania podsumowań kontaktów z klientem.

KATEGORIA: Klienci

---

**Pytanie:** Jak obsługiwać urlopy pracowników w kontekście rozdzielania leadów?

**Odpowiedź:** W systemie jest zakładka "Urlopy", gdzie można określić, kiedy dana osoba ma urlop. W okresie urlopu leady nie będą do tej osoby przydzielane automatycznie. Dostęp do tej zakładki można ograniczyć do wyznaczonej osoby (np. kierownika).

KATEGORIA: Konfiguracja

---

**Pytanie:** Jak działa kolejka rezerwacji ustnych na jeden lokal?

**Odpowiedź:** System pilnuje kolejki rezerwacji. Gdy tworzysz rezerwację na lokal, który już ma rezerwację, system automatycznie ustawi datę rozpoczęcia po zakończeniu poprzedniej rezerwacji. Terminy rezerwacji nie mogą się nakładać. Po anulowaniu rezerwacji, następny klient w kolejce automatycznie przeskakuje na pierwsze miejsce, przejmując wcześniejszy termin rozpoczęcia (ale zachowując swój termin zakończenia).

KATEGORIA: Rezerwacje

---

**Pytanie:** Czy można wysyłać grupowe oferty do wielu klientów jednocześnie?

**Odpowiedź:** Tak, można wysyłać maile do grupy klientów. Na liście klientów zaznaczamy kilku klientów, wybieramy "wyślij maila", wstawiamy szablon i wysyłamy. Jednak dla masowych wysyłek (powyżej 300 odbiorców) zalecana jest integracja z platformą GetResponse, aby uniknąć problemów z blokadą poczty.

KATEGORIA: Oferty

---

**Pytanie:** Jak aktywować strefę klienta/formularz zgód online?

**Odpowiedź:** Z karty klienta wchodzimy w menu i wybieramy "wyślij formularz zgód". Na maila klienta zostanie wysłany link do formularza, gdzie może interaktywnie wyrazić lub odmówić zgód (marketingowa, telefoniczna, SMS). Po wypełnieniu zgody automatycznie odznaczają się w karcie klienta.

KATEGORIA: Klienci

---

**Pytanie:** Czy lista powodów zakończenia obsługi klienta jest edytowalna?

**Odpowiedź:** Tak, lista powodów zakończenia obsługi (np. "wybrał konkurencję", "wysoka cena", "brak finansowania") jest konfigurowalna. Można dodać własne powody, takie jak "układ mieszkania nie odpowiadał", "okolica", "nie chciał podać" – wystarczy zgłosić potrzebę do supportu.

KATEGORIA: Konfiguracja

---

**Pytanie:** Jak ukryć ceny w ofercie wysyłanej do klienta?

**Odpowiedź:** Podczas generowania oferty mailowej jest opcja "ukryj ceny". Po jej zaznaczeniu klient w otrzymanej ofercie nie zobaczy cen lokali. Można również zmienić ceny na ofertowe (np. po negocjacjach) – wtedy klient zobaczy zarówno cenę ofertową, jak i katalogową.

KATEGORIA: Oferty

---

**Pytanie:** Jak sprawdzić, w jakim etapie procesu sprzedaży znajduje się klient?

**Odpowiedź:** Status klienta widoczny jest w lewym górnym rogu karty klienta (np. "nowy", "wysłano ofertę", "rezerwacja ustna"). Statusy nadawane są automatycznie przez system na podstawie wykonanych działań. Na liście klientów widoczna jest również kolumna ze statusem i zaplanowanymi aktywnościami.

KATEGORIA: Klienci

---

**Pytanie:** Czy można dodać załączniki do oferty online zamiast do maila?

**Odpowiedź:** Tak, do oferty online można dołączyć stałe załączniki (PDF, Word itp.). Jest to zalecane rozwiązanie, ponieważ duże załączniki w mailu mogą powodować traktowanie wiadomości jako spam. Pliki w ofercie online klient może pobrać samodzielnie, a system zarejestruje każde pobranie.

KATEGORIA: Oferty

---

## **Pytania i odpowiedzi ze spotkania ASKO (15.01.2026)**

---

**Pytanie:** Czy system może wyświetlać historię zmian cen lokali na stronie internetowej (zgodnie z wymaganiami dane.gov)?

**Odpowiedź:** Tak, system może wystawić tabelkę/wyszukiwarkę mieszkań z funkcją wyświetlania historii zmian cen. Po kliknięciu w lokal pokazuje się historia zmian cen oraz informacja o najniższej cenie z ostatnich 30 dni. Taką tabelkę możemy przygotować i zintegrować z Państwa stroną internetową.

KATEGORIA: Konfiguracja

---

**Pytanie:** Czym jest oferta online i jakie ma zalety w porównaniu do zwykłego maila z ofertą?

**Odpowiedź:** Oferta online to interaktywna podstrona internetowa, którą klient otwiera po kliknięciu przycisku w mailu. Zalety: 1\) Załączniki nie obciążają skrzynki pocztowej, co zwiększa dostarczalność maili. 2\) Można dodać grafiki, filmy z YouTube, mapki, informacje o udogodnieniach. 3\) Klient może ocenić ofertę i zostawić kontakt. 4\) System śledzi otwarcia i kliknięcia w poszczególne lokale – wiemy, którymi lokalami klient się najbardziej interesował.

KATEGORIA: Oferty

---

**Pytanie:** Jak działa śledzenie aktywności klienta przy ofercie online?

**Odpowiedź:** W karcie klienta w sekcji "Oferty online" widoczne są wszystkie wysłane oferty wraz ze statystykami: data utworzenia, okres aktywności oferty, czy została otwarta, liczba wyświetleń oraz liczba kliknięć w poszczególne lokale. Te informacje są stuprocentowo wiarygodne – w przeciwieństwie do zwykłych maili, gdzie programy pocztowe mogą fałszować dane o otwarciu.

KATEGORIA: Oferty

---

**Pytanie:** Jak wysłać ofertę online z systemu?

**Odpowiedź:** 1\) Wchodzimy w inwestycję i wybieramy lokale. 2\) Dodajemy je do aktówki. 3\) Klikamy "wyślij mailem" i wybieramy klienta. 4\) Możemy ukryć cenę lub zmienić cenę ofertową. 5\) Zaznaczamy opcję "oferta online" i przypisujemy do klienta. 6\) Personalizujemy treść oferty (np. "Dzień dobry Pani Barbaro..."). 7\) Wybieramy szablon wiadomości mailowej – oferta będzie ukryta pod przyciskiem "Zobacz szczegóły". 8\) Wysyłamy.

KATEGORIA: Oferty

---

**Pytanie:** Czy można wysłać ofertę online z lokalami z kilku różnych inwestycji?

**Odpowiedź:** Tak, w ofercie online można przesłać lokale z kilku inwestycji jednocześnie. Klient może się przeklikiwać między inwestycjami i przeglądać lokale przypisane do każdej z nich.

KATEGORIA: Oferty

---

**Pytanie:** Co to jest asystent AI w karcie klienta i jak działa?

**Odpowiedź:** Asystent AI to wbudowany chat (oparty na ChatGPT), który przeszukuje korespondencję z klientem oraz jego klasyfikacje i generuje podsumowania lub rekomendacje. Można go poprosić np. o wskazanie najważniejszych informacji o kliencie, przygotowanie treści SMS-a lub maila. Skraca czas potrzebny na zorientowanie się w historii kontaktów z klientem.

KATEGORIA: Klienci

---

**Pytanie:** Jakie automatyzacje można ustawić w systemie?

**Odpowiedź:** Przykładowe automatyzacje: 1\) Powiadomienie do handlowca, gdy klient nie otworzy maila przez określony czas (np. 3 dni). 2\) Automatyczny SMS po wysłaniu oferty online z informacją "wysłaliśmy Ci ofertę, zachęcamy do zapoznania się". 3\) Przypomnienia o spotkaniach. Automatyzacje konfiguruje dział wsparcia zgodnie z potrzebami klienta.

KATEGORIA: Automatyzacje

---

**Pytanie:** Jak działają SMS-y w systemie?

**Odpowiedź:** SMS-y wysyłane są przez zewnętrzną usługę (np. SMSAPI), z którą system jest zintegrowany. Państwo kupujecie pakiet SMS-ów bezpośrednio u dostawcy usługi, a my zapewniamy integrację – można wysyłać SMS-y z systemu, korzystając z przygotowanych szablonów. Historia wysłanych SMS-ów zapisuje się w aktywności klienta.

KATEGORIA: Konfiguracja

---

**Pytanie:** Z jakich źródeł można podpiąć leady do systemu?

**Odpowiedź:** Możemy podpiąć leady ze wszystkich źródeł: strona WWW, portale ogłoszeniowe (Otodom, Domiporta, Nieruchomości Online, Rynek Pierwotny i inne), Facebook. Wszystkie leady trafiają do jednego miejsca w systemie – nie trzeba sprawdzać różnych kont i skrzynek pocztowych.

KATEGORIA: Leady

---

**Pytanie:** Czy integracja z portalem Rynek Pierwotny jest płatna?

**Odpowiedź:** Dla klientów VoxCRM API do przesyłania leadów z Rynku Pierwotnego jest darmowe (normalnie portal pobiera opłatę za API). Płacicie Państwo tylko za samo ogłoszenie na portalu.

KATEGORIA: Konfiguracja

---

**Pytanie:** Czy można eksportować oferty z systemu na portale ogłoszeniowe?

**Odpowiedź:** Tak, system umożliwia eksport ofert na portale takie jak Rynek Pierwotny, Otodom i inne. Dane są synchronizowane – zmiany w systemie (np. ceny, dostępność) mogą być automatycznie aktualizowane na portalach.

KATEGORIA: Konfiguracja

---

**Pytanie:** Jak działa moduł zgłoszeń serwisowych/usterek?

**Odpowiedź:** System posiada moduł do rejestrowania zgłoszeń usterek. Można również przygotować dedykowany formularz na stronie internetowej, przez który klienci samodzielnie zgłaszają usterki (z opisem, załącznikami). Zgłoszenia trafiają bezpośrednio do systemu. Dodatkowo można udostępnić klientowi panel, gdzie ma podgląd do swoich rozliczeń, usterek i odbiorów.

KATEGORIA: Posprzedaż

---

**Pytanie:** Jak działa moduł odbiorów?

**Odpowiedź:** W module odbiorów można wgrywać i generować protokoły odbiorów. Na planie lokalu można zaznaczać usterki. Niedługo będzie dostępna funkcja elektronicznego podpisywania protokołów w systemie.

KATEGORIA: Posprzedaż

---

**Pytanie:** Z jakiej skrzynki mailowej wysyłane są oferty?

**Odpowiedź:** Oferty można wysyłać ze skrzynki głównej (np. biuro@ lub kontakt@) lub ze skrzynek osobistych handlowców. Skrzynki podpinamy do systemu, następuje synchronizacja i można wysyłać maile z imienia i nazwiska konkretnego handlowca.

KATEGORIA: Konfiguracja

---

**Pytanie:** Czy aplikacja mobilna rejestruje połączenia telefoniczne?

**Odpowiedź:** Tak, ale tylko na urządzeniach z Androidem. Aplikacja mobilna VoxCRM rejestruje informacje o połączeniach (kto dzwonił, kiedy), umożliwia szybkie dodanie notatki oraz wysłanie oferty. Na iOS ta funkcja nie jest dostępna ze względu na ograniczenia systemu Apple.

KATEGORIA: Konfiguracja

---

**Pytanie:** Czy wpłaty klientów można zaciągać automatycznie z wyciągów bankowych?

**Odpowiedź:** Tak, system umożliwia automatyczne zaciąganie wpłat z wyciągów bankowych, co usprawnia pracę księgowości i eliminuje konieczność ręcznego wprowadzania każdej wpłaty.

KATEGORIA: Finanse

---

**Pytanie:** Czy system obsługuje KSeF (Krajowy System e-Faktur)?

**Odpowiedź:** Tak, system przygotowuje faktury w formacie wymaganym przez Ministerstwo. Na ten moment eksport jest ręczny, ale docelowo będzie realizowany automatycznie.

KATEGORIA: Finanse

---

---

### **ŹRÓDŁO: Ticket \#30994 (JDM Deweloper | CRM \- Podłączenie leadów ze strony www / Synchronizacja lokali na stronie WWW)**

PYTANIE:  
Jak podłączyć leady ze strony www do systemu CRM?

ROZWIĄZANIE:  
Należy przekierować zapytania ze strony www na dedykowany adres e-mail: jdm.lead@developercrm.com. System voxCRM automatycznie pobiera wiadomości z dedykowanego adresu e-mail i przekształca je w leady.

KATEGORIA:  
Leady  
---

### **ŹRÓDŁO: Ticket \#30995 (JDM Deweloper | Leady z portali zewnętrznych \- przekierowanie kopii maili z zapytaniami)**

PYTANIE:  
Jak podłączyć leady z portali zewnętrznych do systemu CRM?

ROZWIĄZANIE:  
W celu podłączenia leadów z portali zewnętrznych, takich jak Otodom, Obido, Domiporta czy Nieruchomosci-online, utwórz jedną skrzynkę mailową, na którą będą trafiały wszystkie zapytania. Następnie na tej skrzynce dodaj do DW adres mailowy jdm.lead@developercrm.com, aby wszystkie leady były przekierowywane na maila podłączonego w systemie. System CRM co 5 minut będzie logować się na skrzynkę i pobierać nowe wiadomości, a następnie automatycznie tworzyć z nich leady z danymi klientów. W przypadku Rynku Pierwotnego wymagane jest wykupienie dodatkowej opcji synchronizacji z systemem CRM i przesłanie wygenerowanego klucza API do konfiguracji połączenia.

KATEGORIA:  
Integracje  
---

### **ŹRÓDŁO: Ticket \#31027 (Integracja strony internetowej z systemem VoxCRM)**

PYTANIE:  
Jak uzyskać link XML do integracji strony internetowej z systemem VoxCRM?

ROZWIĄZANIE:  
W celu wygenerowania linku XML, należy przesłać nazwę dewelopera oraz nazwę inwestycji, której ma on dotyczyć. Po wprowadzeniu inwestycji do systemu CRM, zostanie przesłany dedykowany link XML.

KATEGORIA:  
Integracje  
---

### **ŹRÓDŁO: Ticket \#31063 (Leady Meta Ads)**

PYTANIE:  
Jak zintegrować formularze Meta Ads z systemem CRM Vox Developer?

ROZWIĄZANIE:  
Integracja z Facebookiem odbywa się przez Zapier. Należy podpiąć leady z Facebooka przez Zapier, aby automatycznie trafiały do systemu. Adres email, na który powinny dodatkowo trafiać zapytania to: lead@ndi.voxdeveloper.pl. Po skonfigurowaniu wysyłki i przesłaniu testowego zapytania na podany adres, należy poinformować o tym support, który skonfiguruje rozpoznawanie takich zgłoszeń w systemie.

KATEGORIA:  
Integracje

Oto propozycja nowych pytań i odpowiedzi do bazy wiedzy (FAQ), opracowana na podstawie analizy transkrypcji spotkania wdrożeniowego1.

Sekcja ta koncentruje się na specyfice pracy w modelu zintegrowanym (voxCRM ↔ System ERP/Dynamics), wyjaśniając przepływ danych, kwestie "źródła prawdy" oraz procedury obsługi umów i klientów w takim środowisku.

---

### **Integracje i Przepływ Danych (ERP/Dynamics ↔ voxCRM)**

Pytanie: Gdzie powinienem zmieniać ceny lub parametry lokali, jeśli korzystamy z integracji z zewnętrznym systemem (np. Microsoft Dynamics)?

Odpowiedź: W modelu zintegrowanym "źródłem prawdy" dla produktów i cen jest Państwa system ERP (np. Dynamics). Wszelkie zmiany powierzchni, cen katalogowych czy innych parametrów lokalu należy wprowadzać w systemie ERP2. System voxCRM cyklicznie pobiera te informacje i nadpisuje swoje dane. Zmiana ceny bezpośrednio w voxCRM może zostać cofnięta przy najbliższej synchronizacji 3\.

Pytanie: W jaki sposób procesowana jest umowa w modelu zintegrowanym? Czy w voxCRM muszę uzupełniać harmonogramy i wystawiać faktury?

Odpowiedź: W standardowym modelu integracji, voxCRM służy do przeprowadzenia procesu sprzedażowego do momentu podpisania umowy. W voxCRM inicjujemy umowę (wprowadzamy klienta, przedmiot umowy i datę), co wysyła "impuls" (trigger) do systemu ERP 4\. Dalsze procesowanie, takie jak tworzenie szczegółowych harmonogramów płatności, wystawianie faktur i rozliczenia, odbywa się już po stronie systemu ERP (np. Dynamics), aby nie dublować pracy 5\.

Pytanie: Anulowałem umowę w systemie ERP (Dynamics). Czy muszę ją anulować również w voxCRM?

Odpowiedź: Tak. Ze względów bezpieczeństwa i integralności danych, system voxCRM nie anuluje umów automatycznie na podstawie zmian w systemie zewnętrznym. Jeśli umowa nie dojdzie do skutku, należy ręcznie anulować ją w voxCRM 6\. Dopiero po ręcznym anulowaniu umowy, status lokalu w voxCRM wróci na "Dostępny"7.

Pytanie: Czy rezerwacje ustne ("miękkie") są przesyłane do zewnętrznego systemu ERP?

Odpowiedź: Istnieje taka możliwość techniczna, aby voxCRM udostępniał informacje o rezerwacjach ustnych. Wymaga to jednak indywidualnego ustalenia i konfiguracji endpointu 8\. Należy pamiętać, że rezerwacje ustne w voxCRM mogą wygasać automatycznie i na jednym lokalu może być ich kilka (kolejka), co należy uwzględnić przy integracji 9\.

Pytanie: Co dzieje się z klientem "z ulicy" (dodanym ręcznie przez handlowca w voxCRM)? Czy trafi on do systemu ERP?

Odpowiedź: Tak, system voxCRM może wystawić endpoint z listą nowo utworzonych klientów (również tych potencjalnych, dodanych ręcznie). Państwa system ERP może cyklicznie odpytywać voxCRM o nowych klientów, aby zaktualizować swoją bazę i uniknąć konieczności podwójnego wprowadzania danych 10\.

Pytanie: Czy przy integracji systemów handlowiec może nadać rabat wyższy niż ustalony w cenniku?

Odpowiedź: voxCRM posiada mechanizm limitów rabatowych na poziomie produktu. Handlowiec nie może systemowo zejść z ceną poniżej ustalonego limitu (np. 3% lub 5%) 11\. Aby udzielić wyższego rabatu, konieczna jest interwencja osoby z wyższymi uprawnieniami (np. Dyrektora Sprzedaży) bezpośrednio w voxCRM, która zmieni limit dla konkretnego lokalu12.

Pytanie: Dlaczego aplikacja mobilna na iPhone (iOS) nie rejestruje historii moich połączeń z klientami?

Odpowiedź: Wynika to z ograniczeń systemu operacyjnego iOS firmy Apple, który ze względów prywatności blokuje zewnętrznym aplikacjom dostęp do rejestru połączeń. Funkcja automatycznego rejestrowania historii połączeń w CRM działa w pełni na telefonach z systemem Android13.

Oto zestaw nowych pytań i odpowiedzi (FAQ) opracowany wyłącznie na podstawie dostarczonych transkrypcji spotkań z klientami (Unidevelopment, Szymichowski, Inwestor Dom, Jantar).

Pytania zostały podzielone na kategorie tematyczne, aby ułatwić ich dodanie do głównego pliku.

---

### **Integracje i Przepływ Danych (ERP/Dynamics)**

Pytanie: W jaki sposób zmieniać ceny lub statusy lokali, jeśli korzystamy z pełnej integracji z systemem zewnętrznym (np. Dynamics)?

Odpowiedź: W modelu zintegrowanym "źródłem prawdy" dla produktów (lokali) jest Państwa system ERP (np. Dynamics). Ceny i parametry należy zmieniać w systemie ERP, a voxCRM nadpisze swoje dane podczas cyklicznej synchronizacji. Zmiana ceny bezpośrednio w voxCRM może zostać cofnięta przy najbliższej aktualizacji danych z ERP 1111\.

Pytanie: Czy po anulowaniu umowy w systemie zewnętrznym (ERP), muszę anulować ją również w voxCRM?

Odpowiedź: Tak. Ze względów bezpieczeństwa system voxCRM nie anuluje umów automatycznie na podstawie zmian w systemie zewnętrznym. Jeśli umowa zostanie rozwiązana w ERP, należy ręcznie anulować ją w voxCRM, aby zwolnić lokal do ponownej sprzedaży 2222\.

Pytanie: Czy klienci dodani ręcznie przez handlowca (np. "z ulicy") trafią do zintegrowanego systemu ERP?

Odpowiedź: Tak, istnieje możliwość wystawienia endpointu z listą nowych klientów utworzonych w voxCRM (również tych potencjalnych). Państwa system ERP może cyklicznie pobierać te dane, aby zaktualizować swoją bazę i uniknąć ręcznego przepisywania danych 3\.

---

### **Rozliczenia, Umowy i DFG**

Pytanie: Jakie warunki muszą być spełnione, aby poprawnie wygenerować plik wsadowy do Deweloperskiego Funduszu Gwarancyjnego (DFG)?

Odpowiedź: Aby plik wygenerował się poprawnie i został przyjęty przez portal DFG, w systemie muszą być uzupełnione:

1. Status umowy ustawiony na "Podpisana" 4\.  
2. Numer indywidualnego rachunku powierniczego przypisany do konkretnego lokalu na umowie 5\.  
3. Numer budynku w danych lokalu lub inwestycji (nawet jeśli manualnie w DFG jest opcjonalny, przy imporcie może być wymagany) 6\.  
4. Dane dotyczące przeniesienia własności i numer księgi wieczystej w ustawieniach inwestycji 7\.

Pytanie: W jaki sposób mogę szybko utworzyć harmonogram płatności na umowie?

Odpowiedź: W systemie dostępne są trzy metody:

1. Ręcznie: Dodając każdą transzę osobno 8\.  
2. Z szablonu harmonogramu: Wybierając zdefiniowany wcześniej szablon (np. 10/90), co automatycznie rozpisze transze 9\.  
3. Z harmonogramu budowy: Jeśli w inwestycji uzupełniono etapy budowy, można wygenerować transze powiązane z datami zakończenia tych etapów. Pozwala to później na łatwą, grupową zmianę terminów płatności w wielu umowach jednocześnie, gdy przesunie się etap budowy 10\.

Pytanie: Czy system pozwala na import wpłat z wyciągów bankowych?

Odpowiedź: Tak, voxCRM obsługuje import wyciągów (np. format MT940 lub CSV). System stara się automatycznie dopasować wpłatę do umowy na podstawie numeru rachunku. Jeśli nie znajdzie powiązania, użytkownik może ręcznie wskazać właściwą umowę i transzę z listy przed zatwierdzeniem importu 11\. System posiada zabezpieczenie przed dwukrotnym zaimportowaniem tej samej wpłaty 12\.

Pytanie: Jak wysłać do klienta zawiadomienie o płatności lub zakończeniu etapu budowy?

Odpowiedź: Można to zrobić z poziomu "Listy transz". Należy przefiltrować listę (np. po nazwie etapu), zaznaczyć wybrane transze i skorzystać z akcji grupowej "Wyślij zawiadomienie do klientów". System wygeneruje wiadomości e-mail z odpowiednimi kwotami i danymi dla każdego klienta osobno 13\.

---

### **Dane.gov.pl i Jawność Cen (Dyrektywa Omnibus)**

Pytanie: Rozpoczynam sprzedaż nowego etapu. Co muszę zrobić, aby dane trafiły na portal dane.gov.pl?

Odpowiedź: Należy w edycji Inwestycji (lub Etapu) zaznaczyć opcję "Generuj dane dla dane.gov.pl" oraz ustawić datę w polu "Generuj dane od dnia". Data ta powinna być teraźniejsza lub przyszła (data startu sprzedaży). Następnie wygenerowane linki XML i MD5 należy przesłać mailem do Ministerstwa Cyfryzacji z prośbą o podłączenie automatyzacji 14141414\.

Pytanie: Czy muszę raportować do dane.gov.pl lokale sprzedane lub objęte umową rezerwacyjną?

Odpowiedź: Zgodnie z interpretacjami (m.in. PZFD), kluczowe jest raportowanie lokali w tzw. "aktywnej sprzedaży" (status "Dostępny"). Lokale na umowie rezerwacyjnej są wyłączone z aktywnej sprzedaży, więc teoretycznie nie muszą być raportowane, choć część deweloperów decyduje się na ich wysyłanie. Rezerwacje ustne nie wyłączają lokalu ze sprzedaży, więc te lokale powinny być raportowane 15\.

Pytanie: Dlaczego na mojej stronie WWW nie widzę historii zmian cen, mimo że system ją generuje?

Odpowiedź: System voxCRM udostępnia dane (pliki XML z historią cen), ale za ich wyświetlenie na Państwa stronie odpowiada osoba lub firma obsługująca stronę WWW. Musi ona odpowiednio oprogramować pobieranie i wyświetlanie tych danych z udostępnionego przez nas pliku 16\.

---

### **Funkcje Dodatkowe (Budżety, Aplikacja Mobilna)**

Pytanie: Czy kierownicy budowy mogą przesyłać dokumenty WZ (Wydanie Zewnętrzne) bezpośrednio do systemu?

Odpowiedź: Tak, istnieje możliwość wykorzystania aplikacji mobilnej voxCRM. Kierownik budowy może zrobić zdjęcie dokumentu WZ telefonem i wgrać je bezpośrednio do systemu, przypisując do konkretnej inwestycji. Pozwala to na szybszy obieg dokumentów między budową a biurem .

Pytanie: Czy system może przypominać pracownikom o zbliżających się terminach płatności klientów?

Odpowiedź: Tak, w systemie istnieje funkcja powiadomień. Możemy skonfigurować wysyłkę wiadomości e-mail do wskazanych pracowników (np. księgowości, windykacji) z wyprzedzeniem (np. 7 dni) przed terminem płatności raty przez klienta .

Pytanie: Jak zautomatyzować rejestrowanie wykonanych telefonów w systemie?

Odpowiedź: Jeśli korzystają Państwo z telefonów z systemem Android i aplikacji mobilnej voxCRM PRO, możemy włączyć funkcję automatycznego rejestrowania połączeń. Po zakończeniu rozmowy z klientem, system sam utworzy aktywność "Telefon" w historii tego klienta 17\. Funkcja ta nie jest dostępna na systemie iOS (iPhone) 18\.

---

### **ŹRÓDŁO: Ticket \#31276 (Stary Dworzec \- umowa rezerwacyjna)**

PYTANIE:  
Jak zaktualizować opłatę rezerwacyjną, aby wyliczała się od pełnej wartości umowy (lokal i przyległości)?

ROZWIĄZANIE:  
Ustawienia umów zostały zaktualizowane. W momencie tworzenia umowy rezerwacyjnej na lokal, który ma powiązane przyległości, opłata rezerwacyjna będzie wynosić 1% od zsumowanej kwoty lokalu i powiązanych do niego przyległości.

KATEGORIA:  
Konfiguracja  
---

### **ŹRÓDŁO: Ticket \#31376 (Wskazanie daty ceny ofertowej)**

PYTANIE:  
Jak dodać informację o dacie cennika do ceny ofertowej lokalu?

ROZWIĄZANIE:  
Dodano nowe pole "Ostatnia zmiana ceny", które wyświetla się po zmianie ceny lokalu.

KATEGORIA:  
Oferty  
---

### **ŹRÓDŁO: Ticket \#31414 (\[EXT\] Merem | Dane dostępowe do systemu voxDeveloper)**

PYTANIE:  
Co zrobić, gdy pojawia się błąd przy logowaniu przez Active Directory?

ROZWIĄZANIE:  
Błąd przy logowaniu przez Active Directory może być spowodowany wygaśnięciem ważności klucza wykorzystywanego do połączenia. W takim przypadku, skontaktuj się z administratorem odpowiedzialnym za Active Directory. Upewnij się, że błąd pojawia się od razu po kliknięciu w przycisk "Zaloguj przez Active Directory", a nie dopiero po wprowadzeniu danych do logowania.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#31482 (https://nowa.voxdeveloper.com/transaction/index/schedule-payment-list blazej.paczynski@nowadeweloper.pl (Paczyński Błażej) Daty wpłat przy liście wpłat)**

PYTANIE:  
Jak dodać kolumnę z datą wpłaty na liście transz?

ROZWIĄZANIE:  
Funkcja dodawania kolumny "Data wpłaty" na liście transz została zrealizowana.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#31529 (Generowanie panelu umowy)**

PYTANIE:  
Jak wygenerować teczkę klienta z danymi umowy?

ROZWIĄZANIE:  
Aby wygenerować teczkę klienta, przejdź do opcji Generuj Dokument \> Generuj z Szablonu \> Teczka (podobnie jak generuje się szablony umów) z poziomu umowy. Nowy szablon "Teczka" powinien wyświetlać się jako ostatni na liście dostępnych szablonów.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#31607 (RE: Propozycja Updatu-VOXDEVELOPER)**

PYTANIE:  
Jak podłączyć leady z formularza na stronie WWW do systemu Vox Developer?

ROZWIĄZANIE:  
Należy skorzystać z instrukcji dostępnej pod adresem: https://voxcommerce.freshdesk.com/support/solutions/articles/1000318008. Dodatkowo, można wykorzystać link do formularza zgłoszeniowego, aby klienci mogli zgłaszać usterki bezpośrednio do CRM. Przykładowy link do formularza: https://tsinvest.voxdeveloper.com/webservice/faultnoticeform/api\_key/65431d79ef0dc21381e2014d28c7493baa99c385.

KATEGORIA:  
Integracje  
---

### **ŹRÓDŁO: Ticket \#31681 (Inpro | Podłączenie leadów ze strony www do systemu CRM)**

PYTANIE:  
Jak podłączyć leady ze strony www do systemu CRM?

ROZWIĄZANIE:  
Należy przekierować zapytania ze strony www na adres lead@inpro.voxcrm.pl, aby były zaczytywane w systemie. Upewnij się, że dodatkowy adres mailowy został dodany do wysyłki zapytań z formularza kontaktowego.

KATEGORIA:  
Integracje  
---

### **ŹRÓDŁO: Ticket \#31699 (RE: Grupa Morizon-Gratka \- Inpro)**

PYTANIE:  
Jak zintegrować system voxDeveloper z Grupą Morizon-Gratka?

ROZWIĄZANIE:  
Aby zintegrować system voxDeveloper z portalami zarządzanymi przez Grupę Morizon-Gratka, należy dodać adres lead@inpro.voxcrm.pl jako dodatkowy adres do leadów w portalach. Po przekierowaniu leadów na ten adres, należy poinformować o tym support. Integracja umożliwi automatyczną aktualizację ofert co ok. 5 godzin.

KATEGORIA:  
Integracje  
---

### **ŹRÓDŁO: Ticket \#31840 (przykładowy raport sprzedaży wzorcowy dla wszystkich inwestycji Acciona)**

PYTANIE:  
Jak uzyskać raport sprzedaży z uwzględnieniem specyficznych parametrów i nazewnictwa dla każdej inwestycji?

ROZWIĄZANIE:  
W celu uzyskania raportu sprzedaży dostosowanego do specyficznych potrzeb, należy przekazać do supportu przykład raportu z oczekiwanymi parametrami i nazewnictwem (np. "Contract", "Unsold", "Flat" dla statusów). Należy określić, czy nazewnictwo ma być zachowane z przesłanego przykładu. Możliwe jest dodanie kolumny z datą aneksu do umowy.

KATEGORIA:  
Raporty  
---

### **ŹRÓDŁO: Ticket \#31848 (Skyinvestments WWW | Zabezpieczenie formularza przy pomocy reCaptcha)**

PYTANIE:  
Jak zabezpieczyć formularz kontaktowy na stronie WWW za pomocą reCaptcha?

ROZWIĄZANIE:  
Zabezpiecz formularz kontaktowy na stronie internetowej za pomocą reCaptcha. W przypadku stron działających na WordPress, można skorzystać z wtyczki Contact Form 7\. Należy również upewnić się, że formularze są przekierowane na adres lead@skyinvestments.voxdeveloper.pl. Po zabezpieczeniu formularza należy wysłać formularz testowy.

KATEGORIA:  
Integracje  
---

### **ŹRÓDŁO: Ticket \#31904 (CRM / Facebook)**

PYTANIE:  
Jak podłączyć leady z Facebooka do systemu?

ROZWIĄZANIE:  
Należy podłączyć leady z Facebooka poprzez Zapier. Zapytania powinny trafiać na adres lead@tsinvest.voxdeveloper.pl. Po podłączeniu należy przesłać testowe zapytanie oraz informację, aby można było podpiąć odpowiedni parser w systemie. Prośba o dostosowanie przesyłanych wiadomości, aby nagłówki przekazywane w wiadomości były takie jak w instrukcji. Przykładowo "Imię i nazwisko" powinno być "Name:", ponieważ system nie jest w stanie rozpoznać wiadomości.

KATEGORIA:  
Integracje  
---

### **ŹRÓDŁO: Ticket \#31906 (OKRE DEVELOPMENT \- ustawienie / spięcie VOXa ze stroną www)**

PYTANIE:  
Jak zintegrować formularz na stronie www z systemem Vox?

ROZWIĄZANIE:  
Należy dostosować zapytania z formularza i przekierować je na adres e-mail dedykowany leadom (okre.lead@developercrm.com). Adres ten powinien być skonfigurowany na takiej samej zasadzie, jak dla istniejących integracji (np. Dolna Górna Wilda). Po prawidłowej konfiguracji formularza, wiadomości przesyłane na podłączony adres e-mail leadów zostaną automatycznie przetworzone i zapisane w systemie VoxCRM jako nowe zgłoszenia.

KATEGORIA:  
Integracje

\# FAQ voxCRM \- Najczęściej zadawane pytania

\*\*Ostatnia aktualizacja:\*\* 17.01.2026

\---

\#\# Przetworzone pliki:  
\- \[x\] Muub-Spotkanie-dot-funkcji-PRO-voxCRM-20251216.pdf  
\- \[x\] Budner-Spotkanie-ws-funkcji-PRO-voxCRM-20251222.pdf  
\- \[x\] GHD-Szkolenie-z-rozliczen-20251117.pdf

\---

\#\# Spis treści  
1\. \[Klasyfikacja klientów\](\#klasyfikacja-klientów)  
2\. \[Automatyzacja i powiadomienia\](\#automatyzacja-i-powiadomienia)  
3\. \[Śledzenie maili i ofert\](\#śledzenie-maili-i-ofert)  
4\. \[Oferty online\](\#oferty-online)  
5\. \[SMS\](\#sms)  
6\. \[Autoresponder\](\#autoresponder)  
7\. \[Zarządzanie leadami i klientami\](\#zarządzanie-leadami-i-klientami)  
8\. \[Integracje i eksport danych\](\#integracje-i-eksport-danych)  
9\. \[Portale ogłoszeniowe\](\#portale-ogłoszeniowe)  
10\. \[Asystent AI\](\#asystent-ai)  
11\. \[Skrzynki pocztowe\](\#skrzynki-pocztowe)  
12\. \[Harmonogram płatności i transze\](\#harmonogram-płatności-i-transze)  
13\. \[Wpłaty i rozliczenia\](\#wpłaty-i-rozliczenia)  
14\. \[Środki zwolnione przez bank\](\#środki-zwolnione-przez-bank)  
15\. \[Umowy\](\#umowy)  
16\. \[Dokumenty i szablony\](\#dokumenty-i-szablony)  
17\. \[Uprawnienia użytkowników\](\#uprawnienia-użytkowników)  
18\. \[Funkcje w rozwoju\](\#funkcje-w-rozwoju)

\---

\#\# Klasyfikacja klientów

\#\#\# Czym jest klasyfikacja klientów i jak z niej korzystać?  
Klasyfikacja klientów to system tagowania, który pozwala oznaczać klientów według różnych kryteriów (np. cel zakupu, poziom zainteresowania, typ klienta). Po wejściu w kartę klienta, po lewej stronie znajduje się sekcja "Klasyfikacje", gdzie można nadawać i edytować tagi. Dzięki temu można łatwo filtrować klientów, tworzyć listy mailingowe i eksportować dane.

\#\#\# Czy mogę dostosować listę opcji klasyfikacji do własnych potrzeb?  
Tak, cała lista klasyfikacji jest w pełni edytowalna. Można zmieniać istniejące opcje, dodawać nowe grupy i kategorie. Wystarczy zgłosić potrzebę zmian do supportu, a lista zostanie dostosowana do potrzeb firmy.

\#\#\# Jak filtrować klientów według klasyfikacji?  
Na liście wszystkich klientów po lewej stronie znajduje się filtr "Klasyfikacja". Po wybraniu odpowiednich tagów i kliknięciu "Szukaj" system wyświetli tylko klientów z wybranymi klasyfikacjami. Można też eksportować przefiltrowaną listę do dalszego wykorzystania.

\---

\#\# Automatyzacja i powiadomienia

\#\#\# Gdzie pojawiają się powiadomienia systemowe (np. o nieotwarciu maila)?  
Powiadomienia systemowe pojawiają się w ikonie dzwoneczka w prawym górnym rogu ekranu. Dodatkowo można skonfigurować wysyłanie powiadomień na e-mail lub SMS \- w zależności od preferencji użytkownika. Konfiguracja dostępna jest w module automatyzacji.

\#\#\# Jakie metody powiadomień są dostępne w systemie?  
System oferuje trzy metody powiadomień dla doradców: powiadomienie w systemie (dzwoneczek), e-mail oraz SMS. Można je konfigurować niezależnie dla różnych scenariuszy automatyzacji.

\#\#\# Czy mogę ustawić automatyczne powiadomienie, gdy klient nie otworzy maila?  
Tak, w module automatyzacji można skonfigurować scenariusz, który powiadomi doradcę, jeśli klient nie otworzy wysłanego maila przez określony czas (np. 3 dni). Powiadomienie może przyjść jako alert w systemie, e-mail lub SMS.

\#\#\# Czy można ustawić automatyczny SMS do klienta po wysłaniu oferty?  
Tak, można skonfigurować automatyzację, która po wysłaniu oferty e-mailem wyśle również SMS do klienta z informacją o wysłanej ofercie. Wymaga to podłączenia SMS API oraz przygotowania treści wiadomości SMS.

\---

\#\# Śledzenie maili i ofert

\#\#\# Jak sprawdzić, czy klient otworzył wysłanego maila?  
W zakładce "Wysłane" w Inboxie znajduje się kolumna "Otwarto", która pokazuje, czy klient otworzył maila. System dodaje specjalny kod śledzący do każdego wysłanego maila, który z dużym prawdopodobieństwem pozwala określić, czy wiadomość została otwarta i czy klient kliknął w link.

\#\#\# Gdzie znajdę statystyki śledzenia ofert online?  
Śledzenie ofert online dostępne jest w zakładce "Więcej" → "Oferta online". Widoczne są tam informacje: data ostatniego otwarcia, liczba wyświetleń, liczba zapytań oraz średnia ocen (jeśli klient wypełnił formularz oceny oferty).

\#\#\# Czy system śledzi, które lokale interesują klienta?  
Tak, system rejestruje kliknięcia klienta w karty poszczególnych lokali w ofercie online. Pod nazwą każdego lokalu wyświetlana jest informacja, ile razy klient kliknął w daną kartę \- pozwala to określić, czym klient jest najbardziej zainteresowany.

\#\#\# Gdzie w karcie klienta znajdę informacje o otwieraniu maili?  
W karcie klienta, w zakładce z wysłanymi mailami, pojawiły się dwie nowe kolumny: "Otwarte" (informacja czy klient otworzył maila) oraz "Kliknięto" (czy kliknął w link). Wyświetlana jest data otwarcia/kliknięcia, co pozwala śledzić aktywność klienta.

\---

\#\# Oferty online

\#\#\# Gdzie znajdę listę wszystkich wysłanych ofert online?  
Lista ofert online dostępna jest w zakładce "Więcej" → "Oferty online". Widoczne są tam wszystkie wysłane oferty wraz z informacjami o ostatnim otwarciu, liczbie wyświetleń oraz kliknięciach w poszczególne lokale.

\#\#\# Czy mogę zobaczyć oferty online wysłane do konkretnego klienta?  
Tak, w karcie klienta obok zakładki z mailami znajduje się zakładka "Oferty online", gdzie widoczne są wszystkie oferty wysłane do tego klienta wraz ze statystykami otwarć i kliknięć.

\#\#\# Dlaczego moje maile z ofertami trafiają do spamu u klientów?  
Aby zmniejszyć ryzyko trafienia do spamu, warto: wysyłać maile z jak najmniejszą liczbą załączników, tworzyć krótsze i prostsze wiadomości, unikać wysyłania kart lokali bezpośrednio w mailu (lepiej zamieścić tylko link do oferty online). Można też wyłączyć automatyczne dołączanie kart lokali do załączników przy wysyłce oferty online.

\#\#\# Czy można wyłączyć automatyczne dołączanie kart lokali do maila?  
Tak, można skonfigurować system tak, aby przy wysyłce oferty online nie dołączał automatycznie kart lokali jako załączników. Dzięki temu mail jest lżejszy i ma mniejsze ryzyko trafienia do spamu. Klient zobaczy szczegóły lokali po kliknięciu w link do oferty online.

\#\#\# Czy można ustawić domyślny szablon maila dla ofert?  
Tak, dla każdej inwestycji można ustawić jeden domyślny szablon mailowy, który będzie się automatycznie podstawiał przy tworzeniu nowej oferty. Eliminuje to konieczność ręcznego wybierania szablonu za każdym razem.

\#\#\# Gdzie mogę dodać stałe załączniki do oferty online (prospekty, rzuty)?  
W samej ofercie online jest sekcja na załączniki, gdzie można umieścić stałe dokumenty jak prospekty, PZT czy inne materiały. Dzięki temu nie trzeba ich wysyłać mailowo, a klient pobiera je bezpośrednio z oferty online.

\---

\#\# SMS

\#\#\# Czy można wysyłać grupowe SMS-y do klientów?  
Tak, system umożliwia wysyłkę grupowych SMS-ów. Należy wejść na listę klientów, wyfiltrować odpowiednich odbiorców, zaznaczyć ich i skorzystać z opcji w akcjach grupowych. Można również użyć szablonów SMS.

\#\#\# Gdzie sprawdzę historię wysłanych SMS-ów i stan konta?  
W zakładce "Więcej" znajduje się "SMS Tracker", gdzie można przeglądać wszystkie SMS-y wysłane z systemu. Widoczny jest również aktualny stan środków na koncie SMS API.

\#\#\# Jak podłączyć wysyłkę SMS do systemu?  
System wymaga podłączenia zewnętrznego dostawcy SMS API. Po skonfigurowaniu integracji możliwe jest wysyłanie pojedynczych i grupowych SMS-ów oraz ustawienie automatycznych powiadomień SMS.

\---

\#\# Autoresponder

\#\#\# Czy można ustawić różne autorespodery dla różnych inwestycji?  
Tak, autoresponder można skonfigurować indywidualnie dla każdej inwestycji \- każda może mieć własny szablon wiadomości. Dodatkowo istnieje opcja ustawienia ogólnej wiadomości dla leadów nieprzypisanych do żadnej inwestycji.

\#\#\# Czy można włączyć autoresponder tylko dla wybranych źródeł leadów?  
Tak, można określić, dla których źródeł pochodzenia leadów autoresponder ma być aktywny. Uwaga: ustawienie źródeł jest globalne \- nie można jednocześnie wybrać konkretnej inwestycji i konkretnego źródła.

\#\#\# Czy jako użytkownik mogę samodzielnie edytować szablony autorespondera?  
Tak, po skonfigurowaniu autorespondera przez support, można nadać użytkownikowi uprawnienia do samodzielnej edycji szablonów wiadomości.

\---

\#\# Zarządzanie leadami i klientami

\#\#\# Co to jest autokonwersja leadów?  
Autokonwersja leadów to funkcja, która automatycznie przekształca nowego leada w klienta. Gdy wpada nowy lead, system sprawdza czy taki klient już istnieje \- jeśli nie, automatycznie tworzy nowego klienta ze statusem "nowy". Funkcja działa globalnie dla całego systemu.

\#\#\# Jak uporządkować listę przeterminowanych klientów?  
Można grupowo zamknąć klientów z nieaktywnych inwestycji lub starszych niż określona data. W przypadku klientów bez umowy można poprosić support o masowe zamknięcie wybranych grup klientów według inwestycji lub daty ostatniej aktywności.

\#\#\# Czym różnią się "klienci przeterminowani" od "klientów z umową"?  
Klienci przeterminowani to osoby bez umowy, z którymi była zaplanowana aktywność, ale nie została wykonana, lub nie było dalszej aktywności. Klienci z umową mają osobny status i nie pojawiają się na liście przeterminowanych.

\#\#\# Czy nowe leady z nieaktywnych inwestycji zaburzają raporty?  
Tak, leady z inwestycji które nie są już oferowane mogą zaburzać statystyki. Można odłączyć rozpoznawanie leadów z wybranych inwestycji lub skorzystać z autokonwersji, aby leady automatycznie trafiały na listę klientów zamiast pozostawać jako "nowe".

\---

\#\# Integracje i eksport danych

\#\#\# Czy voxCRM integruje się z portalem Rynek Pierwotny?  
Tak, voxCRM ma ścisłą współpracę z Rynkiem Pierwotnym. Klienci voxCRM mogą otrzymać bezpłatny dostęp do API Rynku Pierwotnego do pobierania leadów. Wystarczy skontaktować się z Rynkiem Pierwotnym i poprosić o klucz API w ramach współpracy z voxCRM.

\#\#\# Jak działa eksport do DFG (Deweloperski Fundusz Gwarancyjny)?  
System umożliwia eksport umów do DFG w formie pliku wsadowego. Na liście umów zaznaczamy wybrane pozycje i w akcjach grupowych wybieramy opcję eksportu (nowa umowa, korekta lub zmiana). Plik można następnie zaimportować do systemu DFG.

\#\#\# Jakie dane są wymagane do poprawnego eksportu do DFG?  
Do eksportu wymagane są: numer indywidualnego rachunku powierniczego (w edycji lokalu), numer głównego rachunku (w edycji projektu/inwestycji), data przeniesienia własności, numer księgi wieczystej oraz numer budynku. Dane można uzupełnić ręcznie lub przesłać zestawienie Excel do masowego importu.

\#\#\# Czy umowa musi być podpisana, żeby wyeksportować ją do DFG?  
Tak, aby wygenerować plik wsadowy do DFG, umowa musi mieć w systemie status "podpisana". Wszystkie dane z umowy (harmonogram płatności, dane klienta, numer rachunku) zostaną automatycznie zaciągnięte do eksportu.

\#\#\# Co zrobić, gdy przy imporcie do DFG pojawia się błąd?  
Należy przesłać screenshot błędu lub opis wraz z plikiem, który próbowano zaimportować, do supportu voxCRM. Zespół wskaże, jakie dane wymagają korekty w systemie. Większość pól można poprawić samodzielnie, a support odpowiada w ciągu 24 godzin.

\#\#\# Czy mogę hurtowo uzupełnić numery rachunków powierniczych dla wielu lokali?  
Tak, zamiast uzupełniać każdy lokal ręcznie, można przesłać do supportu zestawienie Excel z numerami mieszkań i przypisanymi numerami rachunków. Dane zostaną zaimportowane masowo do systemu.

\#\#\# Gdzie uzupełnić numer budynku dla lokali?  
Numer budynku można uzupełnić na trzech poziomach: dla całej inwestycji (w edycji projektu, zakładka Adres), dla etapu (w edycji etapu) lub dla pojedynczego lokalu (w edycji lokalu). System bierze najbardziej szczegółową dostępną wartość.

\#\#\# Czy voxCRM integruje się z systemem księgowym Optima/Comarch?  
Tak, system umożliwia eksport faktur w formacie XML do Optimy. Wymaga to wcześniejszej konfiguracji integracji (ID księgowości, numer rejestru). Po skonfigurowaniu można eksportować faktury zaliczkowe wystawione w voxCRM bezpośrednio do Optimy.

\#\#\# Jak zaimportować faktury z zewnętrznego systemu księgowego?  
Na liście umów (Umowy) użyj opcji "Import faktur XLSX". Wybierz system (np. Optima), załaduj plik Excel z listą faktur oraz pliki PDF faktur. System przypisze faktury do odpowiednich umów na podstawie danych w pliku Excel. Plik Excel musi mieć określoną strukturę \- poproś support o szablon.

\#\#\# Czy faktury zaimportowane z zewnętrznego systemu trafiają do właściwych klientów?  
Tak, pod warunkiem że plik Excel zawiera odpowiednie dane identyfikujące umowę (np. numer umowy, nazwisko klienta). System automatycznie przypisze faktury do właściwych umów.

\---

\#\# Portale ogłoszeniowe

\#\#\# Jak działa synchronizacja z portalami ogłoszeniowymi?  
Po skonfigurowaniu integracji dane o lokalach (ceny, dostępność, status) są automatycznie wysyłane na portal. Gdy zmienisz cenę lub status lokalu w CRM, informacja automatycznie zaktualizuje się na portalu \- zwykle w ciągu godziny.

\#\#\# Z jakimi portalami ogłoszeniowymi integruje się voxCRM?  
System integruje się m.in. z: Rynek Pierwotny, Otodom, Morizon, Gratka, Domiporta i Trójmiasto. Dla każdego portalu proces konfiguracji może się nieco różnić.

\#\#\# Co potrzeba do uruchomienia eksportu na Rynek Pierwotny?  
Należy uzyskać klucz API od Rynku Pierwotnego (dla klientów voxCRM jest bezpłatny) i przesłać go do supportu. Zespół sprawdzi dane w systemie i uruchomi synchronizację.

\#\#\# Co potrzeba do uruchomienia eksportu na Otodom?  
Wymagane jest uzupełnienie odpowiednich danych w systemie (zgodnie z instrukcją) oraz przekazanie dostępu do konta na Otodom, aby support mógł podłączyć eksport.

\#\#\# Co potrzeba do eksportu na Morizon, Gratka lub Trójmiasto?  
Należy uzupełnić dane w systemie oraz podać kontakt do opiekuna po stronie portalu. Support wygeneruje specjalny link, który trzeba przekazać portalowi \- oni z tego linku pobiorą dane o lokalach.

\---

\#\# Asystent AI

\#\#\# Co to jest Asystent AI i gdzie go znajdę?  
Asystent AI to wbudowany chatbot oparty na ChatGPT, dostępny w prawym górnym rogu systemu (ikona dymka). Można go pytać o funkcje systemu, prosić o pomoc w interpretacji danych na aktualnie otwartej stronie lub generować treści (np. SMS-y, maile).

\#\#\# Jak działa podsumowanie klienta przez AI?  
W karcie klienta po lewej stronie jest opcja "Podsumowanie klienta". Po kliknięciu AI analizuje wszystkie dane klienta (aktywności, maile, oferty, lokale) i generuje zwięzłe podsumowanie. Jest to przydatne przed powrotem do kontaktu z klientem po dłuższym czasie.

\#\#\# Czy podsumowanie klienta AI się zapisuje?  
Tak, wygenerowane podsumowanie zostaje zapisane w karcie klienta i nie znika po wyjściu. Widoczna jest data wygenerowania, a w każdej chwili można je odświeżyć przyciskiem, aby uwzględnić najnowsze aktywności.

\#\#\# Czy mogę poprosić AI o napisanie wiadomości do klienta?  
Tak, po wygenerowaniu podsumowania klienta jest opcja "Zadaj pytanie", gdzie można poprosić AI o przygotowanie treści SMS-a, maila czy innej wiadomości. AI uwzględni kontekst historii klienta przy tworzeniu treści.

\---

\#\# Skrzynki pocztowe

\#\#\# Ile skrzynek e-mail można podłączyć do systemu?  
Nie ma ścisłego ograniczenia liczby skrzynek pocztowych \- można podłączyć wiele skrzynek w ramach rozsądku. Każda skrzynka może być niezależnie włączana i wyłączana.

\#\#\# Jak rozpoznać, która skrzynka nie jest połączona z systemem?  
W ustawieniach skrzynek pocztowych, skrzynki które nie są zsynchronizowane (system nie ma z nimi połączenia) wyświetlają się z trzema kreskami w kolumnie "Połączenie" i są oznaczone jako wyłączone.

\#\#\# Co zrobić, gdy skrzynka pocztowa przestała się synchronizować?  
Należy ponownie autoryzować połączenie ze skrzynką pocztową. W ustawieniach skrzynki można sprawdzić dane do połączenia i wykonać ponowną autoryzację.

\---

\#\# Harmonogram płatności i transze

\#\#\# Jak utworzyć harmonogram płatności w umowie?  
Są trzy sposoby tworzenia harmonogramu płatności:  
1\. \*\*Ręcznie\*\* \- klikając "Dodaj transzę" przy każdej pozycji, wpisując nazwę, kwotę i termin płatności  
2\. \*\*Z szablonu\*\* \- wybierając gotowy szablon harmonogramu dla danej inwestycji (opcja "Szablon harmonogramu")  
3\. \*\*Z harmonogramu budowy\*\* \- generując transze na podstawie etapów budowy zdefiniowanych w inwestycji (opcja "Generuj z harmonogramu budowy")

\#\#\# Czym różni się szablon ogólny od szablonu z harmonogramu budowy?  
Szablon z harmonogramu budowy jest powiązany z etapami budowy inwestycji. Gdy zmieni się data zakończenia etapu w ustawieniach inwestycji, automatycznie zaktualizują się terminy transz we wszystkich umowach wygenerowanych z tego szablonu. Szablon ogólny takiego powiązania nie ma \- po wygenerowaniu transz są one niezależne.

\#\#\# Czy mogę edytować transze po ich wygenerowaniu z szablonu?  
Tak, każda transza może być edytowana po wygenerowaniu. Przy każdej transzy jest kolumna z akcjami (trzy kropki), gdzie można wybrać "Edytuj transzę" i zmienić nazwę, kwotę lub termin płatności.

\#\#\# Jak grupowo zmienić termin transz?  
Na liście transz (Umowy → Lista transz) można zaznaczyć wybrane transze, a następnie z akcji grupowych wybrać "Zmień datę w transzach". System zmieni termin we wszystkich zaznaczonych transzach jednocześnie.

\#\#\# Co oznacza pole "Płatne po zawiadomieniu"?  
Jest to pole informacyjne, które pozwala oznaczyć, czy klient ma zapłacić daną transzę dopiero po wysłaniu zawiadomienia (np. o zakończeniu etapu budowy). Pomaga to w filtrowaniu transz i nie wpływa na wyświetlanie zadłużenia.

\#\#\# Jak obsłużyć harmonogram dla klientów z rozdzielnością majątkową?  
Jeśli w umowie jest więcej niż jeden klient z rozdzielnością majątkową, można przy tworzeniu transzy wybrać, do którego klienta jest przypisana. Przy generowaniu z szablonu można też wybrać opcję podziału transz według udziałów (np. 50/50).

\#\#\# Gdzie znajdę "planowany harmonogram płatności" w umowie rezerwacyjnej?  
W umowie rezerwacyjnej, poza sekcją harmonogramu płatności (na opłatę rezerwacyjną), jest dodatkowa sekcja "Planowany harmonogram płatności". Służy ona do wprowadzenia harmonogramu ustalonego z klientem, który automatycznie przeniesie się do umowy deweloperskiej po jej utworzeniu.

\---

\#\# Wpłaty i rozliczenia

\#\#\# Jak dodać wpłatę do umowy?  
Wpłatę można dodać na trzy sposoby:  
1\. \*\*Z poziomu umowy\*\* \- przy transzy kliknąć akcję "Dodaj wpłatę", wpisać kwotę, datę i typ rachunku  
2\. \*\*Z listy transz\*\* \- znaleźć transzę klienta i dodać wpłatę z menu akcji  
3\. \*\*Import z wyciągu bankowego\*\* \- na liście wpłat (Umowy → Lista wpłat) użyć opcji "Import wpłat"

\#\#\# Jak zaimportować wpłaty z wyciągu bankowego?  
Na liście wpłat (Umowy → Lista wpłat) kliknij "Import wpłat". Wybierz format wyciągu (bank i typ pliku \- CSV, MT940 lub Excel), załaduj plik i kliknij "Import". System automatycznie rozpozna wpłaty i przypisze je do umów na podstawie numeru rachunku powierniczego. Jeśli nie rozpozna automatycznie \- można ręcznie wskazać umowę klikając w lupkę.

\#\#\# Czy system zabezpiecza przed podwójnym zaimportowaniem tej samej wpłaty?  
Tak, jeśli spróbujesz zaimportować ten sam wyciąg ponownie, system oznaczy wpłaty, które już wcześniej zostały zaimportowane i ostrzeże przed duplikacją.

\#\#\# Jak sprawdzić ile klient już zapłacił i ile zostało do zapłaty?  
\- \*\*W umowie\*\* \- na dole sekcji harmonogramu widoczna jest suma wpłat i kwota pozostała do zapłaty  
\- \*\*Na liście wpłat\*\* (Umowy → Lista wpłat) \- można wyszukać klienta po nazwisku i zobaczyć łączną kwotę wpłat  
\- \*\*Na liście transz\*\* (Umowy → Lista transz) \- widoczne są kolumny "Zapłacono" i "Pozostało do zapłaty"

\#\#\# Jak sprawdzić łączne saldo wpłat dla całej inwestycji?  
Na liście transz (Umowy → Lista transz) ustaw filtr na wybraną inwestycję i kliknij "Szukaj". System pokaże sumę zapłaconych kwot i sumę pozostałą do zapłaty dla wszystkich umów w tej inwestycji.

\#\#\# Jak oznaczyć zwrot opłaty klientowi?  
Należy dodać wpłatę z kwotą na minusie (np. \-7000 zł). System pozwala na wprowadzanie ujemnych kwot wpłat. Po zwrocie można anulować umowę (Menu → Anuluj umowę).

\#\#\# Jak przeksięgować opłatę rezerwacyjną na umowę deweloperską?  
W umowie rezerwacyjnej, przy wpłacie za opłatę rezerwacyjną, kliknij trzy kropki i wybierz "Przeksięguj wpłatę". Pojawi się lista transz z umowy deweloperskiej \- wybierz, na którą transzę przeksięgować. System doda wpłatę na minusie w rezerwacyjnej i wpłatę na plusie w deweloperskiej.

\#\#\# Dlaczego transze świecą się na czerwono na liście?  
Czerwony kolor oznacza, że termin transzy już minął, a nie ma zarejestrowanej pełnej wpłaty \- transza jest przeterminowana. Można filtrować takie transze używając filtra "Wymagalne".

\#\#\# Jak wysłać zawiadomienie o płatności do klienta?  
Na liście transz zaznacz odpowiednie transze (np. przeterminowane), z akcji grupowych wybierz "Wyślij zawiadomienie do klientów". Otworzy się okno z mailem, gdzie można wybrać szablon zawiadomienia. System automatycznie podstawi dane transzy (nazwę, kwotę, numer rachunku, numer umowy). Wymaga podłączonej skrzynki pocztowej.

\#\#\# Jak sprawdzić czy klient otworzył zawiadomienie o płatności?  
W karcie klienta przejdź do zakładki "Powiązane maile". Znajdziesz tam wysłane zawiadomienie \- w kolumnach "Otwarto" i "Kliknięto" widać, czy i kiedy klient otworzył maila oraz czy kliknął w link.

\#\#\# Czy można grupowo usunąć błędnie zaimportowane wpłaty?  
Obecnie wpłaty można usuwać tylko pojedynczo z poziomu listy wpłat (opcja wymaga odpowiedniego uprawnienia). Funkcja grupowego usuwania wpłat jest zgłoszona jako potrzeba rozwojowa.

\---

\#\# Środki zwolnione przez bank

\#\#\# Jak zarejestrować środki zwolnione przez bank?  
Są trzy sposoby:  
1\. \*\*Z poziomu umowy\*\* \- pod harmonogramem płatności kliknij "Zarejestruj zwolnione środki", wpisz kwotę i datę  
2\. \*\*Z listy środków zwolnionych\*\* (Umowy → Środki zwolnione) \- kliknij "Dodaj wpłatę" i wskaż umowę  
3\. \*\*Import z wyciągu bankowego\*\* \- na liście środków zwolnionych użyj opcji "Import wpłat"

\#\#\# Gdzie sprawdzić sumę środków zwolnionych dla umowy?  
W umowie, pod sekcją harmonogramu płatności, widoczna jest sekcja "Środki zwolnione przez bank" z sumą zwolnionych środków i kwotą pozostałą do zwolnienia.

\#\#\# Gdzie znajdę listę wszystkich zwolnionych środków?  
W menu Umowy → Środki zwolnione. Można filtrować po inwestycji, kliencie i innych parametrach.

\---

\#\# Umowy

\#\#\# Jak zmienić umowę rezerwacyjną na deweloperską?  
Umowa rezerwacyjna pozostaje w systemie. Należy utworzyć dodatkową umowę deweloperską klikając "Utwórz dodatkową umowę" po lewej stronie w umowie rezerwacyjnej. System automatycznie przeniesie dane klientów i lokali do nowej umowy.

\#\#\# Jak oznaczyć umowę jako podpisaną?  
W umowie kliknij "Edytuj dane" po lewej stronie, zmień status z "W toku" na "Podpisana" i zapisz. Umowy podpisane nie świecą się na czerwono na liście.

\#\#\# Jak założyć umowę na firmę/spółkę?  
Najpierw trzeba dodać osobę fizyczną, która jest przedstawicielem spółki. Następnie w karcie tego klienta, w sekcji "Powiązania", kliknij "Dodaj" i wybierz "Firma". Wskaż firmę z listy firm w systemie. Przy tworzeniu umowy system uwzględni powiązanie z firmą.

\---

\#\# Dokumenty i szablony

\#\#\# Jak wygenerować dokument dla notariusza z danymi umowy?  
W umowie, w sekcji "Generuj dokument", wybierz odpowiedni szablon (np. "Dane dla notariusza") i kliknij "Generuj PDF". Dokument zawiera dane klienta, lokalu, harmonogram płatności i inne informacje potrzebne do aktu notarialnego.

\#\#\# Harmonogram w wygenerowanym dokumencie rozjeżdża się między stronami \- co zrobić?  
Zgłoś problem do supportu \- można ustawić, aby harmonogram generował się na osobnej stronie. Support dostosuje szablon, żeby tabele nie były dzielone między strony.

\#\#\# Jak zmienić treść szablonu umowy rezerwacyjnej?  
Zmiany w szablonach umów wymagają przesłania nowego wzoru (w formacie Word) do supportu voxCRM. Zespół zaktualizuje szablon w systemie.

\#\#\# Jak dodać zmienne do szablonu (np. harmonogram płatności)?  
Szablony dokumentów mogą zawierać zmienne systemowe, które automatycznie wypełniają się danymi z umowy. Aby dodać lub zmienić zmienne w szablonie, skontaktuj się z supportem.

\---

\#\# Uprawnienia użytkowników

\#\#\# Kto może usuwać transze i wpłaty?  
Usuwanie transz i wpłat wymaga specjalnego uprawnienia. Domyślnie nikt nie ma tej opcji \- trzeba ją nadać wybranym użytkownikom poprzez zgłoszenie do supportu.

\#\#\# Jak ograniczyć uprawnienia doradców (np. eksport klientów, zmiana ceny poniżej minimum)?  
Uprawnienia można konfigurować indywidualnie dla każdego użytkownika lub grupy. Aby zmienić uprawnienia, wyślij maila do supportu z listą użytkowników i opisem, do czego mają (lub nie mają) mieć dostęp. Wymagane jest potwierdzenie mailowe od osoby decyzyjnej.

\#\#\# Czy podłączenie skrzynki pocztowej daje innym dostęp do moich maili?  
Nie. Skrzynki imienne są widoczne tylko dla ich właściciela. Inni użytkownicy nie widzą treści maili ani wysłanych wiadomości, chyba że mail został wysłany do klienta, do którego mają dostęp (wtedy widzą tylko fakt wysłania). Skrzynki ogólne/firmowe można udostępnić wybranym osobom.

\---

\#\# Funkcje w rozwoju

\#\#\# Czy system obsługuje podpis elektroniczny dokumentów?  
Obecnie nie, ale funkcja podpisu elektronicznego jest w planach rozwojowych. Na ten moment można wygenerować umowę w systemie i przesłać ją klientowi do podpisu zewnętrznymi narzędziami. Gdy funkcja będzie dostępna, klienci zostaną poinformowani.

\#\#\# Czy można dodać drugi numer księgi wieczystej do lokalu?  
Obecnie system obsługuje jedno pole na numer księgi wieczystej. Funkcja dodania drugiego numeru została zgłoszona jako pomysł rozwojowy i może zostać zrealizowana w przyszłości.

\---

\*Dokument będzie aktualizowany o pytania z kolejnych spotkań.\*

---

### **ŹRÓDŁO: Ticket \#31984 (przekierowanie leadów do CRM)**

PYTANIE:  
Jak przekierować leady ze strony WWW do CRM, aby system poprawnie przetwarzał dane?

ROZWIĄZANIE:  
Należy przekierować maile ze skrzynki, na którą wpadają zapytania, na adres SGI.LEAD@DEVELOPERCRM.COM. Maile wysyłane z formularzy na stronie WWW powinny zawierać informacje zgodnie z instrukcją: https://voxcommerce.freshdesk.com/support/solutions/articles/1000318008-w-jaki-spos%C3%B3b-pod%C5%82%C4%85czy%C4%87-leady-ze-strony-www-do-voxcrm. Treść wysyłana z WWW powinna być "poukładana" z nagłówkami, aby CRM mógł rozpoznać elementy (np. IMIE, EMAIL, TELEFON, OPIS).

KATEGORIA:  
Leady  
---

### **ŹRÓDŁO: Ticket \#32040 (Odbiory \- raporty)**

PYTANIE:  
Jak dodać nowe kolumny do eksportu danych odbiorowych?

ROZWIĄZANIE:  
Do eksportu listy odbiorów można dodać nowe kolumny. W celu dodania kolumn do eksportu oraz obsłużenia rozdzielenia kolumn dla klientów, skontaktuj się z działem wsparcia. Po zaakceptowaniu wyceny prac, zostanie zaplanowany start prac.

KATEGORIA:  
Raporty  
---

### **ŹRÓDŁO: Ticket \#32042 (Aktualizacja)**

PYTANIE:  
Jak zaktualizować cennik, karty lokali i karty kondygnacji w systemie?

ROZWIĄZANIE:  
Wyślij wykaz na adres kontakt@voxcommerce.pl z prośbą o aktualizację danych w systemie, podając nazwę inwestycji i etapy, których dotyczy zmiana. Dział wsparcia technicznego dokona aktualizacji w systemie w ciągu 1-2 dni roboczych. Po aktualizacji zweryfikuj poprawność wprowadzonych danych.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32097 (Trend)**

PYTANIE:  
Jak wygenerować raport sprzedanych lokali w danym okresie?

ROZWIĄZANIE:  
Aby wygenerować raport sprzedanych lokali, można skorzystać z raportu Podsumowania Sprzedaży dostępnego w systemie. Alternatywnie, można wykorzystać Raport Zestawienia Umów i wyfiltrować go po roku, miesiącu, doradcy oraz statusie umowy (Podpisana).

KATEGORIA:  
Raporty  
---

### **ŹRÓDŁO: Ticket \#32157 (Cennik ATUT III)**

PYTANIE:  
Jak dodać nową inwestycję i lokale w systemie?

ROZWIĄZANIE:  
Nową inwestycję wraz z lokalami dodaje dział wsparcia technicznego. Po dodaniu, należy zweryfikować poprawność danych.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32162 (dane do umów rezerwacyjnych)**

PYTANIE:  
Jak zaktualizować szablon umowy rezerwacyjnej i dodać zmienną generującą ceny transakcyjne schowków?

ROZWIĄZANIE:  
Szablon umowy rezerwacyjnej został zaktualizowany przez support. Zadanie dotyczące utworzenia zmiennej generującej ceny transakcyjne schowków zostało przekazane do realizacji i po zrealizowaniu szablon zostanie ponownie zaktualizowany. Po aktualizacji szablonu należy go zweryfikować.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32187 (Spięcie leadów z Callpage'a salticapartamenty.pl)**

PYTANIE:  
Jak przypisywać leady z Callpage do odpowiednich doradców w CRM?

ROZWIĄZANIE:  
Należy włączyć opcję przypisania odpowiedniego doradcy. System Callpage musi przesyłać dane doradcy w API, aby przypisanie było prawidłowe. Domyślny doradca, który będzie przypisywany, to Artur Szerszeń.

KATEGORIA:  
Integracje  
---

### **ŹRÓDŁO: Ticket \#32218 (Re: \[Dostęp\] Sgi.pl \- VOX CRM)**

PYTANIE:  
Jak podłączyć leady z Zapier do systemu voxCRM?

ROZWIĄZANIE:  
Leady z Zapier powinny być przesyłane na adres SGI.LEAD@DEVELOPERCRM.COM. System voxCRM co 5 minut sprawdza tę skrzynkę mailową i przetwarza otrzymane maile. Ważne jest, aby maile miały poprawną strukturę, aby system mógł odczytać z nich dane leada i wprowadzić w odpowiednie pola.

KATEGORIA:  
Leady  
---

### **ŹRÓDŁO: Ticket \#32303 (Propozycja updatu-c.d)**

PYTANIE:  
Jak interpretować kolory zgłoszeń w systemie?

ROZWIĄZANIE:  
System oznacza zgłoszenia kolorami w zależności od daty planowanego zakończenia:  
\- Czerwony kolor oznacza, że zgłoszenie nie jest zamknięte, a data planowanego zakończenia upłynęła.  
\- Pomarańczowy kolor oznacza, że zgłoszenie nie jest zamknięte, a data planowanego zakończenia minie za mniej niż 14 dni.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32336 (Aktualizacja kart lokali\_Brzegova Residence)**

PYTANIE:  
Jak zaktualizować dane powierzchni w ofercie lokalu w systemie voxCRM?

ROZWIĄZANIE:  
W celu aktualizacji danych powierzchni w ofercie lokalu, należy przesłać prośbę o aktualizację do działu wsparcia. Upewnij się, że podpięte są właściwe karty lokali, w których wymagana jest aktualizacja powierzchni.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32360 (Saltic | "Rozliczenia miesięczne" w Strefie Klienta)**

PYTANIE:  
Jak dodać kategorię faktury w widoku administratorskim i w Strefie Klienta?

ROZWIĄZANIE:  
W sekcji "LISTA FAKTUR POWIĄZANYCH Z UMOWĄ" została dodana kolumna z kategorią faktury. Dodano możliwość odłączenia faktury ze strefy, co pozwala na jej edycję i ponowne udostępnienie. Usunięto zdublowaną fakturę. Poprawiono kwoty w strefie klienta.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32381 (CRM- przeanalizowanie zagadnień)**

PYTANIE:  
Czy można zablokować możliwość dodania klienta z takim samym numerem telefonu, jeśli w systemie istnieje już klient o tym samym numerze telefonu i tej samej inwestycji w preferencjach?

ROZWIĄZANIE:  
Tak, w systemie CRM Vox Developer istnieje możliwość włączenia blokady dodawania klienta z takim samym numerem telefonu i tą samą inwestycją w preferencjach, analogicznie jak to działa dla adresów e-mail. Koszt dodania i obsługi blokowania numeru telefonu, gdy w bazie jest już klient o takim samym numerze z tą samą inwestycją w preferencjach, wynosi 1200 zł netto. Czas realizacji to około 10 dni roboczych od momentu rozpoczęcia prac.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32382 (Zielono Mi \- feed YL)**

PYTANIE:  
Jak uzyskać link do feedu dla YouLead dla konkretnej inwestycji?

ROZWIĄZANIE:  
Link do feedu dla YouLead można uzyskać pod adresem: \`https://novisa.voxdeveloper.com/webservice/youleadxml/api\_key/ef04e230479ef98febf7302aefe53edf/investment\_id/68\`. Należy pamiętać o weryfikacji, czy link XML wyświetla się poprawnie.

KATEGORIA:  
Integracje  
---

### **ŹRÓDŁO: Ticket \#32406 (BB CRM \- import wpłat z PEKAO SA)**

PYTANIE:  
Jak zaimportować wyciąg z Banku Pekao SA?

ROZWIĄZANIE:  
Należy wygenerować format "Pekao (CSV)", który powinien pasować do opcji w CRM o takiej samej nazwie. Wygenerowanego pliku nie można edytować samodzielnie. W przypadku problemów z importem należy przesłać przykład wyciągu do sprawdzenia. System oczekuje, że w kolumnie E będzie przekazany numer rachunku powierniczego dla danego lokalu.

KATEGORIA:  
Import/Export  
---

### **ŹRÓDŁO: Ticket \#32421 (Odpowiedź dotycząca \-  Szkolenie online dla działu sprzedaży)**

PYTANIE:  
Jak dodać nowych użytkowników do systemu CRM i ustawić im uprawnienia?

ROZWIĄZANIE:  
Należy przesłać listę użytkowników do założenia, podając adres e-mail każdego użytkownika. Należy określić uprawnienia dla każdego nowego użytkownika, np. takie same jak innego istniejącego użytkownika. Po założeniu konta, dane dostępowe zostaną wysłane bezpośrednio do nowych użytkowników.

KATEGORIA:  
Użytkownicy  
---

### **ŹRÓDŁO: Ticket \#32449 (Formularz do zgłoszeń serwisowych)**

PYTANIE:  
Jak wyłączyć wybrane inwestycje z formularza zgłoszeń serwisowych?

ROZWIĄZANIE:  
Należy przesłać listę inwestycji, które powinny być widoczne lub niewidoczne w formularzu. Po otrzymaniu listy, dział wsparcia może ograniczyć wybór inwestycji w formularzu zgłoszeń. Inwestycje niedostępne w formularzu nadal będzie można dodać podczas tworzenia usterki w systemie.

KATEGORIA:  
Konfiguracja  
---

### **ŹRÓDŁO: Ticket \#32476 (Flora / vox / nowy projekt)**

PYTANIE:  
Jak utworzyć nowy projekt w systemie?

ROZWIĄZANIE:  
W celu utworzenia nowego projektu w systemie, należy skontaktować się z działem wsparcia.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32504 (Kolejny etap inwestycji \- os.Modrzewie)**

PYTANIE:  
Jak dodać kolejny etap inwestycji w systemie voxCRM?

ROZWIĄZANIE:  
1\. Prześlij plik Excel z danymi dla nowego etapu inwestycji do supportu.  
2\. Zaimportuj dane z pliku do systemu.  
3\. Wgraj karty do nowych domów w formacie PDF.  
4\. Prześlij zestawienie zawierające: numer domu, powierzchnię działki oraz powierzchnię ogrodu.  
5\. Support utworzy nową inwestycję w systemie i przeniesie do niej lokale.  
6\. Wygeneruj nowy klucz API oraz link XML dla nowej inwestycji.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32507 (RE: \[\#32502\] prośba o podpięcie maila klienta do wysyłki faktur \[BB Capital\])**

PYTANIE:  
Jak podłączyć firmową skrzynkę pocztową do systemu voxCRM w celu wysyłania wiadomości?

ROZWIĄZANIE:  
Aby podłączyć skrzynkę pocztową do systemu voxCRM, należy podać adres e-mail oraz hasło do skrzynki. Dodatkowo, należy wskazać gdzie znajduje się poczta (np. home.pl).

KATEGORIA:  
Konfiguracja  
---

### **ŹRÓDŁO: Ticket \#32508 (Nowy format importu dla banku BoŚ)**

PYTANIE:  
Jak zaimportować wyciąg bankowy z Boś Banku w formacie ELIXIR?

ROZWIĄZANIE:  
W systemie został dodany nowy format importu wpłat dla Boś Banku o nazwie "Boś Bank (Elixir)". Należy wybrać ten format podczas importowania wyciągu bankowego w formacie ELIXIR.

KATEGORIA:  
Import/Export  
---

### **ŹRÓDŁO: Ticket \#32515 (Osiedle Kociewskie III \- zmiana wzoru umowy rezerwacyjnej)**

PYTANIE:  
Jak ustawić, aby po kliknięciu "Umowa rezerwacyjna" generował się od razu właściwy wzór umowy?

ROZWIĄZANIE:  
Support dodał szablon umowy rezerwacyjnej i skonfigurował, aby generował się po kliknięciu opcji "Umowa rezerwacyjna".

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32518 (Ledy bez inwestycji)**

PYTANIE:  
Leady wpadają do systemu bez przypisanej inwestycji, co może być przyczyną?

ROZWIĄZANIE:  
Przyczyną może być błędna nazwa inwestycji zapisana w systemie CRM. Należy zweryfikować, czy nazwa inwestycji w CRM zgadza się z nazwą w serwisach dostarczających leady (np. Gratka, Nowe Inwestycje). W zgłoszeniu, inwestycja "U-city Residence" była zapisana w CRM z wielkich liter, podczas gdy poprawna nazwa to "U-city". Po zaktualizowaniu ustawień dla leadów w inwestycji, poprawne działanie parsera będzie możliwe do zweryfikowania dopiero po zaczytaniu przez system nowych leadów.

KATEGORIA:  
Leady  
---

### **ŹRÓDŁO: Ticket \#32522 (Rozszerzenie uprawnień testowego konta)**

PYTANIE:  
Jak wygenerować dane do formatu zgodnego z programem Optima?

ROZWIĄZANIE:  
Aby wygenerować plik XML OPT\!MA z faktur, przejdź do podstrony Faktury, zaznacz dokumenty do eksportu i wybierz opcję generowania pliku XML OPT\!MA w sekcji "Wykonaj na zaznaczonych". Plik zawiera szczegóły faktur, takie jak numer, data, wartości netto, brutto, VAT oraz dane kontrahentów.

KATEGORIA:  
Integracje  
---

### **ŹRÓDŁO: Ticket \#32548 (Park Leśny Rembertów \- nowy pośrednik)**

PYTANIE:  
Jak podłączyć API do zgłoszeń klientów od pośrednika?

ROZWIĄZANIE:  
Support podłączy API do zgłoszeń klientów do Państwa panelu CRM. Następnie skontaktuje się z pośrednikiem w celu podłączenia API do pobierania zgłoszeń do Państwa systemu CRM do zakładki "Zgłoszenia".

KATEGORIA:  
Integracje  
---

### **ŹRÓDŁO: Ticket \#32588 (Oferta B.B\_zmiana)**

PYTANIE:  
Jak dodać mapę inwestycji jako stały załącznik do oferty?

ROZWIĄZANIE:  
Mapę inwestycji można dodać jako stały załącznik do szablonu oferty. W tym celu należy skontaktować się z działem wsparcia, który zaktualizuje szablon oferty dla danej inwestycji.

KATEGORIA:  
Oferty  
---

### **ŹRÓDŁO: Ticket \#32616 (Konfiguracja zakładki mail)**

PYTANIE:  
Jak ponownie zsynchronizować pocztę Outlook po zmianie hasła?

ROZWIĄZANIE:  
Po zmianie hasła do konta Microsoft, system CRM nie będzie mógł pobierać wiadomości. W celu przywrócenia synchronizacji, należy odłączyć konto Microsoft od konta w systemie CRM, a następnie ponownie je połączyć przy użyciu nowych danych do logowania.

KATEGORIA:  
Integracje  
---

### **ŹRÓDŁO: Ticket \#32684 (Mail ofertowy Cicha Oaza)**

PYTANIE:  
Jak zaktualizować szablon maila ofertowego w systemie?

ROZWIĄZANIE:  
W celu aktualizacji szablonu maila ofertowego, należy przesłać poprawioną wersję do supportu. Support zaktualizuje szablon i prześle plik html z zaktualizowanym mailem ofertowym.

KATEGORIA:  
Oferty  
---

### **ŹRÓDŁO: Ticket \#32703 (Podpięcie skrzynki The Sea Międzyzdroje i Plażowa 5\)**

PYTANIE:  
Jak podpiąć skrzynkę e-mail, aby leady z niej trafiały do systemu?

ROZWIĄZANIE:  
Należy dodać parsery dla wiadomości ze stron dotyczących danej inwestycji. Po dodaniu parserów, nierozpoznane wiadomości powinny zaczytać się do zakładki Leady.

KATEGORIA:  
Leady  
---

### **ŹRÓDŁO: Ticket \#32716 (brak naliczania kwoty Vat)**

PYTANIE:  
Jak rozwiązać problem z brakiem automatycznego naliczania kwoty VAT na fakturze?

ROZWIĄZANIE:  
Upewnij się, że w pierwszej kolejności wprowadzasz cenę brutto podczas dodawania pozycji na fakturze. System automatycznie przeliczy kwotę VAT. Jeśli opcja ręcznego wprowadzania kwoty VAT jest włączona, dane trzeba wpisywać ręcznie. Skontaktuj się z supportem, aby wyłączyć opcję ręcznego wprowadzania kwoty VAT, jeśli chcesz, aby system automatycznie obliczał VAT.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32741 (Inwestycja M69 \- harmonogram)**

PYTANIE:  
Jak dodać nowy harmonogram płatności dla inwestycji?

ROZWIĄZANIE:  
Należy przesłać plik z harmonogramem do działu wsparcia na adres kontakt@voxcommerce.pl z prośbą o dodanie go do systemu. Po dodaniu szablonu przez support, należy zweryfikować poprawność wdrożenia.

KATEGORIA:  
Konfiguracja  
---

### **ŹRÓDŁO: Ticket \#32745 (Pośrednicy expander/mbi prestige)**

PYTANIE:  
Jak zablokować możliwość zgłaszania klientów przez formularz?

ROZWIĄZANIE:  
Support zablokował możliwość zgłaszania klientów przy pomocy formularza. Klient został poproszony o weryfikację.

KATEGORIA:  
Użytkownicy  
---

### **ŹRÓDŁO: Ticket \#32746 (VoxCRM DACH BUD szablon oferty do CRM \--- Fwd: Fwd: FW: Szablon oferty)**

PYTANIE:  
Gdzie znaleźć dodany szablon oferty PDF?

ROZWIĄZANIE:  
Nowy szablon oferty PDF powinien być dostępny z pozycji Wyszukiwarka \> Wykonaj na zaznaczonych \> Pobierz ofertę oraz Wyślij na email.

KATEGORIA:  
Oferty  
---

### **ŹRÓDŁO: Ticket \#32753 (Oxygen Park, Etap II)**

PYTANIE:  
Jak zmienić status lokalu w systemie?

ROZWIĄZANIE:  
Status lokalu oraz cenę zaktualizował pracownik supportu.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32759 (Nierozpoznany lead)**

PYTANIE:  
Leady z portalu nieruchomości wpadają do nierozpoznanych leadów. Co zrobić?

ROZWIĄZANIE:  
Problem z niezaczytywaniem leadów mógł być spowodowany problemami z serwerem. Należy sprawdzić, czy sytuacja się powtarza.

KATEGORIA:  
Leady  
---

### **ŹRÓDŁO: Ticket \#32761 (Ukrycie buttonu kredy 2%)**

PYTANIE:  
Jak wyłączyć przekazywanie informacji o Kredycie 2% do portali zewnętrznych?

ROZWIĄZANIE:  
Należy wyłączyć przekazywanie opcji Kredyt 2% w XML. W celu wyłączenia opcji Kredyt 2% dla wszystkich lokali mieszkalnych skontaktuj się z działem wsparcia. Aktualizacja informacji na portalu zewnętrznym zależy od czasu odświeżania danych na danym portalu.

KATEGORIA:  
Integracje  
---

### **ŹRÓDŁO: Ticket \#32770 (FW: VOX \- problem w edycji czynności i ustawianiu na ponowny termin kontaktu)**

PYTANIE:  
Jak edytować datę w aktywności typu Telefon?

ROZWIĄZANIE:  
Aby móc edytować pole Data w aktywności o typie Telefon, należy w sekcji Rezultat wybrać opcję Zaplanowany. Jeżeli klient zadzwonił do doradcy przed zaplanowanym telefonem, doradca może odnotować ten fakt przy użyciu przycisku Zarejestruj aktywność, a następnie przy pomocy edycji aktywności przeplanować telefon na inny termin.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32771 (Zmiana cen mieszkań \- Wileńska Park)**

PYTANIE:  
Jak zmienić cenę mieszkań w inwestycji?

ROZWIĄZANIE:  
Ceny lokali zostały zaktualizowane. Należy zweryfikować zmiany.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32777 (https://granitsa.voxdeveloper.com/ krzysztof.jakubowski@gigranit.pl (Jakubowski Krzysztof) dostęp dla nowego pracownika \- Joanna Turowska)**

PYTANIE:  
Jak dodać nowego użytkownika do systemu voxCRM?

ROZWIĄZANIE:  
Konto dla nowego użytkownika zostało utworzone przez support. Dane dostępowe zostały wysłane w oddzielnym wątku. Należy zweryfikować poprawność utworzonego konta.

KATEGORIA:  
Użytkownicy  
---

### **ŹRÓDŁO: Ticket \#32782 (Maja Walo\_kalendarz)**

PYTANIE:  
Jak dodać kalendarz do konta użytkownika?

ROZWIĄZANIE:  
Uprawnienia konta użytkownika zostały zaktualizowane. Po aktualizacji użytkownik powinien mieć dostęp do kalendarza. Należy zweryfikować, czy kalendarz jest widoczny.

KATEGORIA:  
Użytkownicy  
---

### **ŹRÓDŁO: Ticket \#32787 (Wyświetlanie danych z "umową deweloperską")**

PYTANIE:  
Dlaczego po eksporcie danych z wyszukiwarki z filtrem "umowa deweloperska" brakuje niektórych danych?

ROZWIĄZANIE:  
Brak danych w eksporcie może wynikać ze statusu lokalu. Lokale ze statusem "Odebrano" lub "Umowa przedwstępna" nie zostaną wyświetlone, jeśli filtr "umowa deweloperska" jest aktywny.

KATEGORIA:  
Import/Export  
---

### **ŹRÓDŁO: Ticket \#32790 (RE: Lead na Zakopane \- prośba o zmianę)**

PYTANIE:  
Jak dezaktywować konto użytkownika w systemie?

ROZWIĄZANIE:  
Należy wysłać prośbę o dezaktywację konta na adres kontakt@voxcommerce.pl. W zgłoszeniu należy zawrzeć informację, którego użytkownika konto ma zostać dezaktywowane.

KATEGORIA:  
Użytkownicy  
---

### **ŹRÓDŁO: Ticket \#32793 (Dotyczy zmian w CRM)**

PYTANIE:  
Jak dodać nowe typy towarów na fakturze?

ROZWIĄZANIE:  
W systemie VoxCRM można włączyć nowy typ towaru na fakturach zwykłych o nazwie Produkt. Aby dodać nowe pozycje do listy produktów, należy przesłać listę produktów do wprowadzenia.

KATEGORIA:  
Konfiguracja  
---

### **ŹRÓDŁO: Ticket \#32794 (Robyg CRM \- Wall \- brakuje typu aktywności.)**

PYTANIE:  
Brakuje typu aktywności we wpisach na wall-u w CRM. Jak to naprawić?

ROZWIĄZANIE:  
Dla nowych wpisów typ aktywności będzie się już pokazywać prawidłowo. Trwają prace nad dodaniem typów aktywności dla wpisów już wygenerowanych, gdzie go brakowało. W pierwszej kolejności poprawione zostaną wpisy na wall-u dla nowo powstających aktywności, a później ustawione zostaną właściwe ikonki przy starszych wpisach.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32795 (Nadanie administratora)**

PYTANIE:  
Jak nadać uprawnienia administratora użytkownikowi w systemie?

ROZWIĄZANIE:  
W celu nadania uprawnień administratora, wymagane jest potwierdzenie od osoby decyzyjnej. Po uzyskaniu potwierdzenia, uprawnienia są rozszerzane o dostęp do podstawowych funkcji administracyjnych systemu. Nowe opcje są widoczne z poziomu Więcej \> Administracja.

KATEGORIA:  
Użytkownicy  
---

### **ŹRÓDŁO: Ticket \#32797 (prośba o nowe pole)**

PYTANIE:  
Jak wyeksportować dane dotyczące planowanej i faktycznej daty przepisania licznika energii elektrycznej?

ROZWIĄZANIE:  
Dodano możliwość eksportu pól z listy odbiorów: "Planowana data przepisania licznika energii elektrycznej" oraz "Data przepisania licznika energii elektrycznej".

KATEGORIA:  
Import/Export  
---

### **ŹRÓDŁO: Ticket \#32804 (CRM \- błąd do analizy)**

PYTANIE:  
Cena transakcyjna netto nie sumuje się w podsumowaniu. Co zrobić?

ROZWIĄZANIE:  
Błąd może być spowodowany nie wprowadzonymi stawkami VAT miejsc postojowych. Należy zweryfikować stawki VAT miejsc postojowych.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32813 (Nano Apart \- prośba o usunięcie wpłat rezerwacyjnych z faktury zaliczkowej do umowy przedwstępnej)**

PYTANIE:  
Jak usunąć wpłaty rezerwacyjne z faktury zaliczkowej do umowy przedwstępnej?

ROZWIĄZANIE:  
Support usunął powiązania we wskazanych fakturach.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32815 (prośba o wgranie rachunków MRP w inwestycji Kamienna Grobla 28\)**

PYTANIE:  
Jak wgrać numery rachunków MRP do lokali w inwestycji?

ROZWIĄZANIE:  
Dział wsparcia wgrał numery rachunków MRP do lokali w inwestycji Kamienna Grobla 28\. Po wgraniu danych, klient zweryfikował poprawność wprowadzonych informacji.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32817 (data promocji)**

PYTANIE:  
Jak usunąć wyświetlanie daty wygasłej promocji przy lokalu?

ROZWIĄZANIE:  
Błąd wyświetlania terminu promocji, pomimo wyłączenia opcji w karcie lokalu, został przekazany do kolejki prac programistów. Po wgraniu poprawki do systemu, informacja o promocji nie powinna się już wyświetlać.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32818 (Zmiana nazwy Spółki)**

PYTANIE:  
Jak zmienić nazwę spółki w systemie CRM?

ROZWIĄZANIE:  
Aby zmienić nazwę spółki, przejdź do widoku lokalu, a następnie do klienta. Wybierz opcję "Edytuj firmę". Zmień nazwę w odpowiednim polu i zapisz zmiany.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32819 (uprawnienia dla nowej osoby)**

PYTANIE:  
Jak dodać nowego użytkownika do systemu?

ROZWIĄZANIE:  
Konto użytkownika zostało utworzone w systemie. Dane dostępowe zostały przesłane bezpośrednio do nowego użytkownika. Należy zweryfikować poprawność utworzonego konta.

KATEGORIA:  
Użytkownicy  
---

### **ŹRÓDŁO: Ticket \#32823 (Nowy użytkownik assethome)**

PYTANIE:  
Jak dodać nowego użytkownika do systemu voxCRM?

ROZWIĄZANIE:  
Konto nowego użytkownika zostało utworzone w systemie. Dane dostępowe zostały przesłane bezpośrednio do nowego użytkownika.

KATEGORIA:  
Użytkownicy  
---

### **ŹRÓDŁO: Ticket \#32824 (FW: Kontakt VOXCOMMERCE)**

PYTANIE:  
Jak włączyć powiadomienia o zbliżających się terminach płatności transz?

ROZWIĄZANIE:  
W celu włączenia powiadomień o zbliżających się terminach płatności transz, skontaktuj się z działem wsparcia. Możliwe jest ustawienie powiadomień na jeden dzień przed terminem płatności. Możliwe jest również włączenie powiadomień o przeterminowanych płatnościach.

KATEGORIA:  
Konfiguracja  
---

### **ŹRÓDŁO: Ticket \#32829 (Ukryte inwestycje a zgłoszenia)**

PYTANIE:  
Dlaczego pośrednicy mogą zgłaszać klientów na inwestycje, mimo że mają je ukryte w swoim formularzu?

ROZWIĄZANIE:  
W przypadku Platformy Mieszkaniowej ukrycie inwestycji w formularzu edycji pośrednika może nie być wystarczające, ponieważ integracja z platformą dotycząca zgłoszeń odbywa się przy użyciu API. Należy zaktualizować ustawienia integracji API, aby ukryte inwestycje pokrywały się z tymi z formularza edycji pośrednika.

KATEGORIA:  
Integracje  
---

### **ŹRÓDŁO: Ticket \#32830 (zapytanie dot. kalendarza)**

PYTANIE:  
Jak ustawić domyślny widok tygodniowy kalendarza w systemie?

ROZWIĄZANIE:  
W celu zmiany domyślnego widoku kalendarza na tygodniowy, skontaktuj się z działem wsparcia technicznego Vox Developer.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32835 (FW: Prospekt i umowa deweloperska Willa Papiernia)**

PYTANIE:  
Jak wgrać prospekt informacyjny i umowę deweloperską jako szablon do systemu?

ROZWIĄZANIE:  
Support wgrał prospekt informacyjny do systemu i poprosił o weryfikację. W przypadku umowy deweloperskiej, support poprosił o przesłanie odblokowanego pliku lub hasła, aby móc wgrać szablon umowy do systemu.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32836 (prośba o pomoc w wygenerowaniu zestawienia)**

PYTANIE:  
Jak wygenerować zestawienie lokali z budynku z uwzględnieniem danych takich jak adres, piętro, ilość izb i udział w nieruchomości wspólnej?

ROZWIĄZANIE:  
Zestawienie można wygenerować przy pomocy zakładki Wyszukiwarka. Należy wybrać budynek, a następnie nacisnąć przycisk Eksportu. W nowym oknie należy wybrać interesujące kolumny do eksportu i zapisać. Funkcjonalność eksportowania pola "Udział w częściach wspólnych" z Wyszukiwarki została dodana. Dodano również pole "Liczba pomieszczeń" (ilość pokoi \+ kuchnia).

KATEGORIA:  
Import/Export  
---

### **ŹRÓDŁO: Ticket \#32837 (Integracja VoxCRM z Callpage)**

PYTANIE:  
Jak poprawnie zintegrować Callpage z VoxCRM, aby połączenia były przypisywane do właściwych doradców?

ROZWIĄZANIE:  
Upewnij się, że nazwisko doradcy w systemie Callpage jest identyczne z nazwiskiem w systemie VoxCRM. Dodatkowo, aby system poprawnie rozpoznawał inwestycję, której dotyczyło połączenie, wprowadź nazwę widgetu w Callpage, która będzie przesyłana do systemu VoxCRM.

KATEGORIA:  
Integracje  
---

### **ŹRÓDŁO: Ticket \#32838 (Nowa inwestycja)**

PYTANIE:  
Jak dodać nową inwestycję do systemu i przypisać do niej użytkowników?

ROZWIĄZANIE:  
Nową inwestycję do systemu oraz dostęp dla użytkowników dodaje dział wsparcia. Należy skontaktować się z działem wsparcia Voxcommerce z prośbą o dodanie nowej inwestycji i przypisanie do niej odpowiednich użytkowników. Po dodaniu inwestycji i użytkowników należy zweryfikować poprawność zmian.

KATEGORIA:  
Konfiguracja  
---

### **ŹRÓDŁO: Ticket \#32840 (wgranie szablonu maila)**

PYTANIE:  
Jak dodać nowy szablon maila w systemie?

ROZWIĄZANIE:  
Support dodał nowy szablon wiadomości w systemie. Należy go zweryfikować.

KATEGORIA:  
Konfiguracja  
---

### **ŹRÓDŁO: Ticket \#32841 (utworzenie nowego konta)**

PYTANIE:  
Jak utworzyć nowe konto użytkownika w systemie voxCRM i jakie są dane dostępowe?

ROZWIĄZANIE:  
W celu utworzenia nowego konta użytkownika w systemie voxCRM należy skontaktować się z działem wsparcia technicznego. Po utworzeniu konta, dane dostępowe (URL, login i hasło) zostaną przesłane do użytkownika. W przypadku braku dostępu do poczty przez nowego użytkownika, dane dostępowe mogą zostać przesłane do osoby kontaktowej.

KATEGORIA:  
Użytkownicy  
---

### **ŹRÓDŁO: Ticket \#32848 (Osoby fizyczne/ Firmy)**

PYTANIE:  
Jak wyświetlić adres e-mail firmy dołączonej do umowy i pobierać go w akcji grupowej "Wyślij mail do klientów"?

ROZWIĄZANIE:  
Adres e-mail dołączonej firmy do umowy oraz pobieranie adresu mailowego firmy do akcji grupowej "Wyślij mail do klientów" zostało wgrane na produkcję. Funkcja jest dostępna m.in. na podstronie listy umów.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32849 (problem ze strefa klienta p. Pazdrowski Ryszard)**

PYTANIE:  
Klient nie widzi w strefie klienta umów deweloperskich i przedwstępnych, a tylko rezerwacyjne. Jak to naprawić?

ROZWIĄZANIE:  
Należy odświeżyć dane w strefie klienta.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32851 (Nowa inwestycja do uzupełnienia VOX)**

PYTANIE:  
Jak dodać nową inwestycję do systemu voxCRM?

ROZWIĄZANIE:  
Inwestycja wraz z lokalami i kartami została dodana do systemu. Należy zweryfikować poprawność wprowadzonych danych.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32853 (Ustawienia użytkownika)**

PYTANIE:  
Czy system zapamiętuje ustawione filtry w zakładce Helpdesk po opuszczeniu strony?

ROZWIĄZANIE:  
Zadanie dotyczące zapamiętywania po opuszczeniu strony ustawionych filtrów w zakładce Helpdesk zostało zrealizowane. Należy zweryfikować czy filtry są zapamiętywane.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32859 (VoxCRM DACH BUD \- widok logów na panelu)**

PYTANIE:  
Jak wyłączyć widok historii logowania i aktywności użytkowników dla zwykłych użytkowników w systemie?

ROZWIĄZANIE:  
Support wyłączył widoczność sekcji "Historia" w zakładce "Pulpit" dla użytkowników. Od tej pory widoczność tej sekcji jest dostępna tylko dla administratorów systemu.

KATEGORIA:  
Użytkownicy  
---

### **ŹRÓDŁO: Ticket \#32861 (\[AnŁ\] Podwyżka cen lokali mieszkalnych, przyległości oraz lokalu usługowego)**

PYTANIE:  
Jak wprowadzić podwyżkę cen lokali w inwestycji?

ROZWIĄZANIE:  
Ceny lokali w inwestycji zostały zaktualizowane. Należy zweryfikować poprawność zmian.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32862 (FW: Utworzono nowy lead \- piotr)**

PYTANIE:  
Jak system automatycznie przypisuje lead do klienta?

ROZWIĄZANIE:  
System automatycznie wiąże lead z klientem po takim samym adresie e-mail.

KATEGORIA:  
Leady  
---

### **ŹRÓDŁO: Ticket \#32864 (stworzenie oferty)**

PYTANIE:  
Jak podłączyć szablon oferty w formacie PDF?

ROZWIĄZANIE:  
Należy dostarczyć szablon oferty, a następnie zostanie on podłączony do systemu. Firma VoxDeveloper nie zajmuje się tworzeniem szablonów ofert.

KATEGORIA:  
Oferty  
---

### **ŹRÓDŁO: Ticket \#32865 (szablon umowy rezerwacyjnej Małopolska blok C)**

PYTANIE:  
Jak zmienić numer umowy, aby nie generował się jako C1, tylko jako samo C?

ROZWIĄZANIE:  
Wgraliśmy do systemu szablony umów rezerwacyjnych. Prosimy o weryfikację.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32866 (Robyg CRM \- tabelka negocjacyjna nie pobiera domyślnej ceny)**

PYTANIE:  
Tabelka negocjacyjna nie pobiera domyślnej ceny. Co zrobić?

ROZWIĄZANIE:  
Wgraliśmy poprawkę do CRM.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32871 (prośba o wykasowanie aktu notarialnego)**

PYTANIE:  
Jak anulować umowę w systemie?

ROZWIĄZANIE:  
W widoku klienta przejdź do umowy, którą chcesz anulować. Następnie, w widoku umowy, otwórz menu i wybierz opcję "Anuluj umowę".

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32872 (FW: zmiany na stronie, vox, leady, adresy mailowe)**

PYTANIE:  
Czy w systemie voxCRM jest adnotacja o źródle pozyskania klienta, który kupił mieszkanie?

ROZWIĄZANIE:  
Tak, do karty klienta zaciągane jest jego źródło pochodzenia. W systemie zostały podłączone specjalne parsery, które automatycznie rozpoznają zapytania z portali: noweinwestycje.pl, trojmiasto.pl, morizon.pl, gratka.pl oraz rynekpierwotny.pl (po API).

KATEGORIA:  
Leady  
---

### **ŹRÓDŁO: Ticket \#32873 (FW: Nowy format importu dla banku BoŚ)**

PYTANIE:  
Jak dodać nowy format importu wpłat BOŚ Bank (ELIXIR)?

ROZWIĄZANIE:  
Nowy format importu wpłat BOŚ Bank (ELIXIR) został zrealizowany i będzie dostępny wraz z najbliższą aktualizacją systemu, która odbędzie się 09.01.2024 w godzinach wieczornych.

KATEGORIA:  
Integracje  
---

### **ŹRÓDŁO: Ticket \#32874 (Dostępy)**

PYTANIE:  
Jak dodać nowego użytkownika do systemu?

ROZWIĄZANIE:  
Nowe konta użytkowników zostały utworzone w systemie. Dane dostępowe zostały przesłane bezpośrednio do użytkowników. Należy zweryfikować poprawność utworzonych kont.

KATEGORIA:  
Użytkownicy  
---

### **ŹRÓDŁO: Ticket \#32879 (WIND YACHT RESORT \- połączenie VOX z TabelaOfert.pl)**

PYTANIE:  
Jak uzyskać link do integracji inwestycji z portalami Tabeli Ofert?

ROZWIĄZANIE:  
Należy uzyskać link XML dla danej inwestycji. Przykładowy link: \`https://condo.voxdeveloper.com/webservice/realestatestatuslist/api\_key/7bae76716df59ad60dc012289bad877ba817dfd0/investment\_id/90\`. Należy zweryfikować poprawność działania linku.

KATEGORIA:  
Integracje  
---

### **ŹRÓDŁO: Ticket \#32880 (nowy użytkownik)**

PYTANIE:  
Jak dodać użytkownika i ustawić powiadomienia o nowych leadach dla sprzedawców?

ROZWIĄZANIE:  
Konto użytkownika zostało utworzone. Ustawiono nową kolejkę rozdzielania leadów, do której podłączeni zostali użytkownicy. Leady w systemie będą rozdzielane na przemian pomiędzy doradców. Do każdego doradcy, do którego system przypisze leada, wysyłane będzie powiadomienie o nowym leadzie.

KATEGORIA:  
Użytkownicy  
---

### **ŹRÓDŁO: Ticket \#32881 (powiadomienia)**

PYTANIE:  
Jak zmodyfikować szablon dokumentu, aby zawierał imię i nazwisko nabywców, datę generowania i kwotę słownie?

ROZWIĄZANIE:  
Support zaktualizował szablon dokumentu zgodnie z prośbą klienta. Następnie, na prośbę klienta, support wprowadził do systemu nowy szablon dokumentu, usuwając żółty kolor.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32882 (Przypisanie Leady)**

PYTANIE:  
Jak zmienić doradcę przypisanego do leada?

ROZWIĄZANIE:  
W formularzu edycji leada, przed jego konwersją, można zmienić doradcę w polu "Lead przypisany do".

KATEGORIA:  
Leady  
---

### **ŹRÓDŁO: Ticket \#32883 (wybór poszczególnych budynków)**

PYTANIE:  
Jak dodać informację o budynku do lokali w inwestycji?

ROZWIĄZANIE:  
Dodaliśmy do lokali dla inwestycji informację o budynku.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32888 (dostępy pełne marcin.banka@kupimieszkaj.pl \- pilne)**

PYTANIE:  
Jak nadać użytkownikowi dostęp do wszystkich inwestycji w systemie?

ROZWIĄZANIE:  
Należy utworzyć nowe konto użytkownika w systemie i nadać mu pełen dostęp. Dane dostępowe zostaną przesłane bezpośrednio do użytkownika.

KATEGORIA:  
Użytkownicy  
---

### **ŹRÓDŁO: Ticket \#32891 (Nowy Reden 2.0 \- dodanie generowania umów rezerwacyjnych)**

PYTANIE:  
Jak dodać możliwość generowania umów rezerwacyjnych dla nowej inwestycji, jeśli szablony umów są już w systemie dla innej inwestycji?

ROZWIĄZANIE:  
Support dodał możliwość generowania istniejących już umów rezerwacyjnych dla inwestycji Nowy Reden, również dla inwestycji Nowy Reden 2.0. Następnie poprosił o weryfikację.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32895 (Slow\_Wilanów\_feed)**

PYTANIE:  
Jak zaktualizować dane w inwestycji, w tym opisy, atrybuty lokali i usunąć konkretne lokale?

ROZWIĄZANIE:  
W celu aktualizacji danych w inwestycji (w tym powierzchni poszczególnych kondygnacji, opisów, atrybutów lokali) oraz usunięcia wskazanych lokali, należy przesłać tabelę z danymi do aktualizacji.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32907 (DobryDom | System CRM \- voxDeveloper)**

PYTANIE:  
Jak uzyskać działające dane dostępowe do systemu voxCRM?

ROZWIĄZANIE:  
Po otrzymaniu danych dostępowych do systemu voxCRM, w przypadku problemów z logowaniem należy zweryfikować panel. W opisanym przypadku, po zgłoszeniu niedziałających danych dostępowych, support zweryfikował panel i przekazał poprawione dane dostępowe.

KATEGORIA:  
Użytkownicy  
---

### **ŹRÓDŁO: Ticket \#32911 (Jasieny Gdańsk \- dodanie plików pzt i pzt z miejscami postojowymi oraz oddanie miejsc postojowych i ich zmapowanie)**

PYTANIE:  
Jak dodać pliki PZT i zmapować miejsca postojowe w systemie?

ROZWIĄZANIE:  
Dodano pliki PZT do systemu oraz wgrano i zmapowano miejsca postojowe.

KATEGORIA:  
Inne  
---

### **ŹRÓDŁO: Ticket \#32916 (otodom \- ogłoszenia)**

PYTANIE:  
Jak zaktualizować ustawienia eksportu lokali na portalu Otodom?

ROZWIĄZANIE:  
Zaktualizowano ustawienia eksportu lokali z inwestycji na portal Otodom. Lokale dostępne i w rezerwacji ustnej powinny być eksportowane. Eksport lokali wykonywany jest w godzinach nocnych, więc lokale powinny być widoczne na portalu następnego dnia.

KATEGORIA:  
Integracje  
---

### **ŹRÓDŁO: Ticket \#32901 (TREI Osiedle Blask)**

PYTANIE:  
Jak usunąć nieużywane szablony i dodać nowy szablon w systemie?

ROZWIĄZANIE:  
Support usunął przestarzałe szablony i dodał nowy szablon. Należy zweryfikować, czy nowy szablon został poprawnie dodany do systemu.

KATEGORIA:  
Konfiguracja  
---

### **ŹRÓDŁO: Ticket \#32922 (Nieścisłości w wyszukiwaniu Aura Nova)**

PYTANIE:  
Dlaczego użytkownik widzi niekompletne dane umów w systemie?

ROZWIĄZANIE:  
Nieścisłość widoczności umów klientów może wynikać z ustawionego filtra Typ umowy. Należy sprawdzić, czy filtr nie ogranicza widoczności tylko do określonych typów umów (np. tylko umowy przedwstępne). Dodatkowo, konto użytkownika musi być dodane do odpowiedniego oddziału związanego z inwestycją, aby widział dane dotyczące tej inwestycji.

KATEGORIA:  
Użytkownicy