import React from "react";
import rys1 from "../img/ArchitekturaGSM.png";
import GPRS from "../img/GPRS.png";
import Tetra from "../img/Tetra.png";
import Image from "next/image";
const Page: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Parametry interfejsu radiowego systemu TETRA wyd. 2
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Technika łączności dwukierunkowej w interfejsie radiowym:
        </h2>
        <p>
          <strong>Duplex:</strong> TETRA (Terrestrial Trunked Radio)
          wykorzystuje technikę Time Division Duplex (TDD), która pozwala na
          dwukierunkową komunikację w tym samym paśmie częstotliwości poprzez
          rozdzielenie sygnałów w czasie.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Technika zwielokrotnienia dostępu:
        </h2>
        <p>
          <strong>TDMA:</strong> TETRA stosuje Time Division Multiple Access
          (TDMA), gdzie kanał radiowy jest podzielony na szczeliny czasowe.
          Wersja 2 systemu TETRA wykorzystuje 4 szczeliny czasowe na kanał
          radiowy, co umożliwia obsługę wielu użytkowników na jednym kanale.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Maksymalna moc nadawania MS:
        </h2>
        <p>
          <strong>1 do 3 W:</strong> Maksymalna moc nadawania stacji ruchomej
          (Mobile Station - MS) w systemie TETRA wynosi od 1 do 3 watów, w
          zależności od klasy urządzenia i zastosowania.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Stosowane modulacje:</h2>
        <ul className="list-disc list-inside ml-4">
          <li>
            <strong>
              π/4 DQPSK (Differential Quadrature Phase Shift Keying):
            </strong>{" "}
            Jest to główna modulacja stosowana w TETRA, zapewniająca efektywne
            kodowanie danych i odporność na zakłócenia.
          </li>
          <li>
            <strong>QAM (Quadrature Amplitude Modulation):</strong> Dla
            transmisji wysokiej przepływności danych w TETRA wyd. 2 mogą być
            stosowane bardziej zaawansowane modulacje, takie jak 16-QAM lub
            64-QAM.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Szerokości kanału radiowego:
        </h2>
        <p>
          <strong>25 kHz:</strong> Kanał radiowy w systemie TETRA ma szerokość
          25 kHz, co pozwala na efektywne wykorzystanie dostępnego spektrum
          częstotliwości.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Liczba kanałów fizycznych w kanale radiowym:
        </h2>
        <p>
          <strong>4 kanały fizyczne:</strong> Każdy kanał radiowy w TETRA jest
          podzielony na 4 kanały fizyczne dzięki zastosowaniu TDMA. Każdy kanał
          fizyczny może obsługiwać jedną rozmowę lub transmisję danych.
        </p>
      </section>

      <footer className="mt-8">
        <p>
          Powyższe parametry definiują, jak działa interfejs radiowy systemu
          TETRA, zapewniając niezawodną i efektywną komunikację dla
          użytkowników, w tym służb ratunkowych, policji oraz innych służb
          publicznych i prywatnych.
        </p>
      </footer>

      <h1 className="text-2xl font-bold mb-4">
        Jaki rozkład mają szybkie fluktuacje odbieranego sygnału radiowego i
        czym są one spowodowane?
      </h1>
      <p className="mb-6">Logarytmiczno - normalny</p>

      <h1 className="text-2xl font-bold mb-4">
        Jakie zjawiska fizyczne determinują propagację fal radiowych w zakresie
        częstotliwości od 400 MHz do 2 GHz
      </h1>
      <p className="mb-6">dyfrakcja, odbicia, rozproszenia</p>

      <h1 className="text-2xl font-bold mb-4">
        Wymień systemowe cechy nadajnika
      </h1>
      <p className="mb-6">
        tłumienie fidera, zysk anteny, wysokość nad terenem, moc na wyjściu
        nadajnika
      </p>

      <h1 className="text-2xl font-bold mb-4">
        Co to są systemy trankingowe (definicja i idea trankingu) oraz wymienić
        podstawowe cechy systemów trankingowych?
      </h1>
      <p className="mb-4">
        Tranking - automatyczny i dynamiczny przydział kanałów (spośród
        wspólnego i ograniczonego zbioru kanałów) do realizacji łączności
        pomiędzy dużą liczbę użytkowników – komutacja kanałów radiowych.
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>Jeden system techniczny do realizacji usług</li>
        <li>
          Wyodrębnienie grup użytkowników (organizacji, flot) w warstwie
          logicznej a nie fizycznej
        </li>
        <li>
          Więcej zasobów / współdzielone zasoby radiowe do realizacji usług –
          większa efektywność
        </li>
        <li>Większa niezawodność systemu</li>
        <li>Możliwość współpracy służb poprzez wspólną łączność</li>
        <li>
          Możliwość kolejkowania i priorytetyzacji zgłoszeń przy ich natłoku
        </li>
        <li>
          Konieczność wyodrębnienia co najmniej jednego dwukierunkowego
          kanału/zasobu radiowego jako głównego kanału sterującego (do
          transmisji zgłoszeń i wywołań abonentów, uwierzytelniania, przydziału
          kanałów transmisyjnych itp.) i zarządzanych wielu kanałów trafiku
        </li>
      </ul>

      <h1 className="text-3xl font-bold text-center mb-8"> :( </h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          6.W jakim celu w systemach radiowych stosuje się przeplot i jakie są
          stosowane metody przeplotu?
        </h2>
        <p className="text-gray-700">
          Przeplot dzielimy na blokowy i bitowy. Przeplot stosuje się ponieważ w
          systemach radiowych błędy występują paczkowo a kodowanie umożliwia
          korekcję błędów losowych dlatego stosuje się systematyczne zmiany
          kolejności bitów w ciągach kodowych.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          7.Na czym w systemach radiowych polgea efekt stacji odkrytej i w
          jakich warunkach on występuje?
        </h2>
        <p className="text-gray-700">
          Stacja znajduje się w zasięgu nadajnika, ale poza zasięgiem odbiornika
          informacji. Występuje w przypadku protokołów rywalizacyjnych.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          W jakim celu w systemach radiowych stosuje się metody kodowania
          kanałowego i jakie są stosowane metody kodowania kanałowego?
        </h2>
        <p className="text-gray-700">
          Niewystarczająca jakość transmisji w łączu radiowym – opóźnienia i
          zaniki. Konieczność wprowadzenia nadmiarowości w transmitowanym
          sygnale w celu umożliwienia realizacji procedur detekcji lub/i
          korekcji błędów kosztem zwiększenia ilości transmitowanych danych w
          łączu i wprowadzenia dodatkowego opóźnienia. Kodowanie kanałowe nie
          jest stosowane we wszystkich systemach.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          9.Systemowe cechy odbiornika:
        </h2>
        <p className="text-gray-700">
          czułość odbiornika, tłumienie fidera, zysk anteny, wzniesienie anteny
          nad terenem
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. Co to jest MIMO i jakie techniki transmisji w MIMO i w jakim celu
          są stosowane?:
        </h2>
        <p className="text-gray-700">
          Rozwiązanie zwiększające przepustowość sieci bezprzewodowej polegające
          na transmisji wieloantenowej zarówno po stronie nadawczej, jak i po
          stronie odbiorczej. Techniki: Multipleksacja przestrzenna i kodowanie
          przestrzenno-czasowe Cel: Stosuje się ją w celu poprawy stosunku
          sygnału do szumów i zakłóceń oraz ograniczenie wpływu zaników sygnałów
          – nadawanie replik tej samej informacji, a także zwiększenia szybkości
          transmisji - nadawanie niezależnych zakodowanych strumieni informacji
          każdą z anten
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Podać charakterystyczne parametry interfejsu radiowego systemu GSM
          1800
        </h2>
        <p className="text-gray-700">
          Pasma częstotliwości - kanały “w górę” (MS BTS) - 1710 - 1785 MHz -
          kanały w dół” (BTS MS) - 1805 - 1880 MHz Częstotliwości nośne -
          kanały w górę": fi= 1710 MHz+(0,2 MHz)·(i-511) - kanały w dół: fi=
          1805 MHz+(0,2 MHz)·(i-511) i jest numerem kanału (ARCFN), wiecej niz 512 i
          mniej niz 885 Odstęp dupleksowy: 95 MHz 374 kanały radiowe + 2*100
          kHz(pasmo ochronne)
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. Wyjaśnij na czym polega zjawisko stacji ukrytej i odkrytej oraz dla
          jakiego rodzaju dostępu występuje?
        </h2>
        <p className="text-gray-700">
          Nie wszystkie stacje mają wzajemną bezpośrednią łączność Stacja
          odkryta jest w zasięgu nadajnika informacji Stacja odkryta jest poza
          zasięgiem odbiornika informacji Odkryty nadajnik i odbiornik nie mogą
          informować innych stacji o swoim statusie! Nie wszystkie stacje mają
          wzajemną bezpośrednią łączność Stacja ukryta A jest w zasięgu
          odbiornika informacji Stacja ukryta A jest poza zasięgiem nadajnika
          informacji (stacji C) Dwa przypadki: ukryty nadajnik – stacja ukryta
          ma dane do wysłania ukryty odbiornik – stacja ukryta jest adresatem
          informacji wysłanej z innej stacji
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Wyjaśnij jakie funkcje pełni pakiet dostępu w GSM?
        </h2>
        <p className="text-gray-700">
          Stosowany do określenia opóźnienia transmisji sygnału przy pierwszej
          transmisji MS do BTS oraz przy przełączaniu połączeń między BTS’ami,
          do wyznaczenia czasu wyprzedzenia transmisji TA (Timing Advance) bez
          kolizji z transmisjami w innych szczelinach czasowych TS
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. Jakie techniki są stosowane w systemach komórkowych do zwiększenia
          szybkości transmisji danych i pojemności sieci?
        </h2>
        <p className="text-gray-700">
          - stosowanie kodowania sygnału
          <br />
          - stosowanie MIMO
          <br />
          - Dodatkowe kanały radiowe dla operatora ??
          <br />
          - Podział komórek
          <br />
          - Pożyczanie kanałów – dynamiczny przydział
          <br />
          - Sektoryzacja
          <br />- Wykorzystanie koncepcji stref mikrokomórkowych
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          6. Jakie techniki stosuje się w MIMO w celu poprawy jakości oraz
          szybkości transmisji?
        </h2>
        <p className="text-gray-700">
          • Multipleksacja przestrzenna – zwiększenie szybkości transmisji
          poprzez demultipleksację strumienia danych i równoległą transmisję
          poszczególnych symboli (różne sygnały na poszczególne anteny nadawcze
          zamiast symboli kodowych kodu ST)
          <br />• Kodowanie przestrzenno-czasowe - uzyskanie lepszej jakości
          transmisji
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          7. Narysować architekturę sieci GSM
        </h2>
        <Image src={rys1} alt="7. Narysować architekturę sieci GSM" />
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          8. Wyjaśnij jakie funkcje pełni pakiet korekcji częstotliwości w GSM?
        </h2>
        <p className="text-gray-700">
          Synchronizacja generatora stacji mobilnej do częstotliwości stacji
          bazowej
          <br />
          ● Stacja bazowa w stałych odstępach czasowych wysyła pakiety
          składające się z samych zer. Pakiet wygląda następująco:
          <br />| 3 bity TB | 142 bity zerowe | 3 bity TB | 8,25 bitów GP |
          (łącznie 156,25 bitów) GP - odstęp ochronny, TB - Bity końcowe
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          13. Wyjaśnij jakie funkcje pełni pakiet zastępczy (dummy burst) w GSM
        </h2>
        <p className="text-gray-700">
          • Struktura pakietu taka sama jak pakietu podstawowego
          <br />
          • Długość 148 bitów + 8,25 odstęp ochronny
          <br />
          • Nie jest wykorzystywany do transmisji informacji użytkowej
          <br />
          • Stosowany wyłącznie do wypełnienia wolnych szczelin w kanale
          radiowym, w którym umieszczono kanał sygnalizacyjny
          <br />• Wypełnienie wszystkich szczelin zapewnia stałą średnią moc
          nadawaną w kanale radiowym (ułatwienie poszukiwania kanału
          sygnalizacyjnego przez MS) — wspiera procedurę przenoszenia połączeń
          MAHO (Mobile Assisted Hand Over)
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          14. Scharakteryzuj sieci WPAN (zasięg, szybkość transmisji, przykłady
          systemów, liczba urządzeń w sieci, pobór mocy)
        </h2>
        <p className="text-gray-700">
          WPAN – Osobiste Sieci Bezprzewodowe (Wireless Personal Area Networks),
          <br />
          ● WPAN łączy urządzenia zlokalizowane wokół osoby, jej pikosieci WBAN
          lub urządzeń jej w otoczeniu
          <br />
          ● Łączność jest zapewniana na małych obszarach w promieniu do 10 m
          (czasami do 100 m) w pasmach nielicencjonowanych
          <br />
          Przykłady:
          <br />
          ● Bluetooth (IEEE 802.15.1)
          <br />
          ● ZigBee (IEEE 802.15.4)
          <br />● RFID (Radio-frequency identification)
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"></h2>
        <p className="text-gray-700"></p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          10. Wyjaśnij sposób komunikacji w trybie semi-duplex
        </h2>
        <p className="text-gray-700">
          Tryb pracy w połączeniu radiowym w którym jedna strona łącza pracuje w
          trybie duo-simpleksowym, a druga w dupleksowym
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          11. Podaj charakterystyczne parametry interfejsu radiowego systemu
          TETRA
        </h2>
        <p className="text-gray-700">
          ● Cyfrowy System Trunkingowy
          <br />
          ● Częstotliwości 380-400MHz
          <br />
          ● Szerokość kanału: Tetra I - 25kHz, Tetra II - 50kHz
          <br />
          ● Nośna TDMA
          <br />
          ● Transmisja danych do 28,8 kbps
          <br />
          ● Możliwość wysyłania SDS (odpowiednik SMS)
          <br />
          ● Możliwość wysyłania poczty E-Mail
          <br />
          ● Połączenia priorytetowe
          <br />
          ● Rodzaje połączeń (5): grupowe, grupowe z potwierdzeniem,
          indywidualne, rozsiewcze, bezpośrednie (DMO)
          <br />● Dupleksowe połączenia głosowe
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          12. Narysować architekturę sieci GPRS
        </h2>
        <Image src={GPRS} alt="7. Narysować architekturę sieci GPRS" />
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          15. Jakie warunki są koniecznie do spełnienia dla skutecznego
          nawiązania łączności radiowej?
        </h2>
        <p className="text-gray-700">
          warunek konieczny: praca urządzeń w tym samym kanale
          częstotliwościowym oraz określonym czasie
          <br />
          • warunek wystarczający: możliwość nawiązania łączności w dowolnym
          punkcie zadanego (ograniczonego) obszaru
          <br />
          łączność możliwa tylko na określonym obszarze geograficznym!
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          16. Podać charakterystyczne parametry interfejsu radiowego systemu
          GSM900
        </h2>
        <p className="text-gray-700">
          ● Najwcześniejszy standard GSM (phase 1)
          <br />
          ● Częstotliwości 890-960MHz (uplink 890-915 MHz, downlink 935-960 MHz)
          <br />
          ● Kanały 1-124, szerokość kanałów co 200kHz
          <br />
          ● Nośna TDMA
          <br />
          ● Rozmiar komórki ~35,36 km
          <br />
          ● Pierwsze komercyjne zastosowanie - 1992 rok
          <br />● Najpopularniejszy, najbardziej rozpowszechniony standard na
          świecie
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          17. Narysować architekturę sieci TETRA Str. 963
        </h2>
        <Image src={Tetra} alt="7. Narysować architekturę sieci GSM" />
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          {" "}
          Przydziału między stacje bazowe których zasobów należy dokonywać w
          przypadku planowania poszczególnych systemów GSM/GPRS, UMTS oraz LTE?
          str. 282
        </h2>
        <p className="text-gray-700">
          zaplanowanie optymalnego przestrzennego rozmieszczenia odpowiedniej
          liczby komórek - radiowych stacji bazowych o niewielkich obszarach
          działania (zasięgu łączności radiowej) w stosunku do obszaru sieci,
          przydział odpowiednich zasobów radiowych poszczególnym komórkom
          /stacjom bazowym i ich połączenie ze szkieletem sieci
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          W jakim celu w systemach radiowych stosuje sie przeplot i jake są
          stosowane metody przeplotu? Str. 182
        </h2>
        <p className="text-gray-700">
          Systematyczna zmiana kolejności zakodowanego ciągu bitów po stronie
          nadawczej w celu zwiększenia efektywności dekodera kanałowego po
          stronie odbiorczej poprzez rozpraszanie w określonym przedziale czasu
          błędów paczkowych będących skutkiem głębokich zaników.
          <br />
          Przeplot sprawia, że błędy transmisji mają charakter losowy i
          występują sporadycznie (nie w paczkach):
          <br />
          - Przeplot bitowy – przeciwdziałanie krótkim sekwencjom błędów
          paczkowych
          <br />- Przeplot blokowy – przeciwdziałanie długim sekwencjom błędów
          paczkowych (utrata całego lub większości pakietu radiowego)
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"></h2>
        <p className="text-gray-700"></p>
      </section>
    </div>
  );
};

export default Page;
