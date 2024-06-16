"use client";

import { useState } from "react";

const flashcards = [
  {
    question: "Podac zalozenia dla modelu czwartej potegi:",
    answer: "Idealnie plaska, nieskonczenie rozlegla, odbijajaca, przewodzaca powierzchnia",
  },
  {
      "question": "Która organizacja w Europie zajmuje się harmonizacją wykorzystania widma radiowego, orbit satelitarnych i zasobów numeracyjnych? (Slajd: 461)",
      "answer": "CEPT"
  },
  {
      "question": "Podstawowymi parametrami opisującymi propagację fal EM są odpowiedź impulsowa kanału i tłumienie swobodnej przestrzeni",
      "answer": ""
  },
  {
      "question": "Zastosowanie której techniki umożliwia realizację przestrzennego zwielokrotnienia dostępu SDMA? (Slajd: 318)",
      "answer": "CDMA"
  },
  {
      "question": "Zjawisko stacji ukrytej c w protokołach rywalizacyjnych występuje gdy: (Slajd: 399)",
      "answer": "Część aktywnych nadajników lub odbiorników nie jest wykrywana na skutek różnych obszarów łączności radiowej urządzeń komunikacji"
  },
  {
      "question": "Jakie szerokości kanałów radiowych zdefiniowano dla systemu 802.11a? (Slajd: 497)",
      "answer": "20 MHz"
  },
  {
      "question": "Ile wynoszą typowe wartości strat sprzężenia MCL we współczesnych systemach radiowych (dalekiego zasięgu)?",
      "answer": "140 dB - 160 dB"
  },
  {
      "question": "Współczynnik ochrony pozwala na ocenę wystąpienia zakłóceń interferencyjnych: (Slajd: 30,918)",
      "answer": "deterministycznie (określenie stopnia wpływu zakłóceń na moc sygnału użytecznego)"
  },
  {
      "question": "W celu ograniczenia wpływu zaników na jakość odbioru wykorzystuje się w nadajniku systemu GSM (bez GPRS): (Slajd: 325,326,333)",
      "answer": "wolne skakanie po częstotliwościach, retransmisja pakietów"
  },
  {
      "question": "Jaka jest maksymalna szybkość transmisji danych w systemie ZigBee? (Slajd: 574)",
      "answer": "250 kb/s"
  },
  {
      "question": "Ile podnośnych OFDM zdefiniowano dla systemów WLAN IEEE 802.11 a/g? (Slajd : 727)",
      "answer": "52 podnośne w tym 4 na transmisję sygnału pilota"
  },
  {
    "question": "Współczynnik ochrony pozwala na ocenę wystąpienia zakłóceń interferencyjnych",
    "answer": "30,918"
  },
  {
      "question": "W celu ograniczenia wpływu zaników na jakość odbioru wykorzystuje się w nadajniku systemu GSM (bez GPRS) slide 325,326,333",
      "answer": "wolne skakanie po częstotliwościach retransmisja pakietów"
  },
  {
      "question": "Jaka jest maksymalna szybkość transmisji danych w systemie ZigBee? 574",
      "answer": "250 kb/s"
  },
  {
      "question": "Ile podnośnych OFDM zdefiniowano dla systemów WLAN IEEE 802.11 a/g? 727",
      "answer": "52 podnośne w tym 4 na transmisję sygnału pilota"
  },
  {
      "question": "Która z podwarstw warstwy 3 (warstwy sieciowej), wprowadzona do systemów komórkowych/mobilnych , jest wykorzystywana do zarządzania zasobami radiowymi w sieci radiowego dostępu GSM?",
      "answer": " RR Zarządzanie zasobami radiowymi (RR) Zarządzanie mobilnością (MM) Zarządzanie połączeniami (CM)"
  },
  {
      "question": "W których metodach obliczeń propagacyjnych wykorzystującej rodziny krzywych propagacyjnych? 847",
      "answer": "Metodach statycznych"
  },
  {
      "question": "Jaki efekt podczas planowania sieci komórkowej wielo-częstotliwościowej przyniesie zwiększenie liczebności klastra N (np. z 3 do 4)? 926",
      "answer": "Zwiększenie liczby dostępnych kanałów radiowych w każdej z komórek i zwiększenie pojemności sieci Zwiększenie poziomu zakłóceń wspólnokanałowych.",
  },
  {
      "question": "Czułość odbiornika jest to 27",
      "answer": "Minimalna wartość mocy sygnału użytecznego dla przyjętej stopy błędów określona niezależnie dla każdej ze stosowanych technik transmisji"
  },
  {
      "question": "W jakim paśmie częstotliwości nie pracuje system ZigBee? 113",
      "answer": "5 GHz"
  },
  {
      "question": "W jakim celu wprowadza się hierarchiczność (warstwowość) w strukturze sieci komórkowych? 929",
      "answer": "Aby zapewnić obsługę abonentów o różnym stopniu mobilności"
  },
  {
      "question": "Jaki jest optymalny zasięg i prędkość poruszania terminali dla efektywnej łączności w systemie WiMAX2? 811",
      "answer": "Do 5 km i 10 km/h"
  },
  {
      "question": "Ile niepokrywających się kanałów o szerokości 20 Mhz dostępnych jest dla systemów WLAN pracujących w paśmie nielicencjonowanym 5 GHz wewnątrz budynków?",
      "answer": "8"
  },
  {
      "question": "Sieć radiokomunikacyjna stanowi zbiór",
      "answer": "stacji bazowych i abonenckich"
  },
  {
      "question": "Na której częstotliwości pracują systemy NFC? 605",
      "answer": "13,56 MHz"
  },
  {
      "question": "W jakim celu jest obliczany bilans energetyczny łącza radiowego (medium transmisyjnego)? 831",
      "answer": "W celu określenia maksymalnego tłumienia łącza radiowego"
  },
  {
      "question": "Systemowe cechy odbiornika to 20",
      "answer": "czułość odbiornika tłumienie fidera zysk anteny wzniesienie anteny nad terenem"
  },
  {
      "question": "Tłumienie trasy zależy od 21",
      "answer":  "częstotliwości długości trasy właściwości środowiska propagacyjnego"
  },
  {
      "question": "W którym systemie umożliwiono bezpośrednie łączenie się sterowników stacji bazowych?",
      "answer": "GSM"
  },
  {
    "question": "Jaki jest typowy zasięg sieci WLAN? (Slajd: 617)",
    "answer": "do 10 m"
  },
  {
      "question": "Który rodzaj dupleksu stosuje się wyłącznie do łączności krótko-zasięgowej? (Slajd: 546)",
      "answer": "TDD"
  },
  {
      "question": "Komórkową sieć jednoczęstotliwościową można zbudować gdy minimalne wymaganie na stosunek sygnału do zakłóceń na wejściu odbiornika wynosi? (Slajd: 827 )",
      "answer": "mniej niż -10 dB, nie więcej niż 0 dB,"
  },
  {
      "question": "Który rodzaj modulacji zapewnia największą szybkość transmisji danych IWLAN IEEE 802.11ac? (Slajd: 624)",
      "answer": "256-QAM"
  },
  {
      "question": "Jaki rodzaj zwielokrotnienia dostępu zastosowano w systemie GSM? (Slajd: 152)",
      "answer": "FDMA , TDMA"
  },
  {
      "question": "Dla którego rodzaju modulacji uzyskuje się w sieciach 802.16.2004 największy zasięg łączności?",
      "answer": "BPSK"
  },
  {
      "question": "Dla którego rodzaju modulacji uzyskuje się w sieciach 802.16-2004 największą szybkość transmisji?",
      "answer": ""
  },
  {
      "question": "Natężenie ruchu radiowego w pewnym okresie czasu to: Stosunek łącznego czasu połączeń głosowych i czasu transmisji danych w określonym okresie czasu obserwacji",
      "answer": ""
  },
  {
      "question": "Jaką maksymalną szerokość kanałów radiowych zdefiniowano dla systemów IEE802.16e oraz systemów IEE802.16-2004?",
      "answer": "20MHz"
  },
  {
      "question": "Z jaką maksymalną mocą EIRP w paśmie 2,4GHz mogą nadawać wszystkie niespecyficzne urządzenia radiowe klasy 1 zgodnie z art. 1 ust 3 decyzji Komisji Europejskiej 2000/299WE?",
      "answer": "20 [nW]"
  },
  {
      "question": "Jaka jest częstotliwość przeskoków częstotliwości w systemie Bluetooth podczas jego maksymalnej transmisji?",
      "answer": "1600 [razy/sec]"
  },
  {
      "question": "Urządzeń sieci radiowych którego typu używa się do łączności urządzeń peryferyjnych i celów identyfikacyjnych?",
      "answer": "WPAN"
  },
  {
      "question": "Z jaką maksymalną mocą średnią EIRP w paśmie 5,25-5,35 GHz mogą być nadawane w Polsce nadajniki wewnątrz budynkowych sieci WLAN zgodnie z krajowymi regulacjami?",
      "answer": "200 [mW]"
  },
  {
      "question": "Współczynnik ochronny uwzględniony przy planowaniu sieci radiowej sieci (komórkowej) to minimalna wartość: stosunku mocy sygnału użytecznego do zakłucającego zapewniająca dostateczną jakość odbioru",
      "answer": ""
  },
  {
      "question": "Przy której konfiguracji uzyskamy najlepsza efektywność techniki odbioru zbiorczego przestrzennego (slajd: 349)",
      "answer": "Przy separacji pionowej anten umieszczonych w odległości nie większej niż długość fali radiowej."
  },
  {
      "question": "Komunikacja radiowa na obszarze każdej komórki w sieci komórkowej będzie zapewniona, gdy: (KOMISYJNIE) poziom mocy odbieranego sygnału radiowego będzie większy od czułości odbiornika oraz stosunek mocy tego sygnału do mocy szumów i zakłóceń będzie większy, od granicznej wymaganej wartości.",
      "answer": ""
  },
  {
      "question": "Co znacząco zwiększyło odporność OFDM na efekty propagacji wielodrogowej i wąskopasmowej zakłócenia występujące w kanale radiowym w stosunku do innych technik?",
      "answer": "Adaptacyjna zmiana modulacji i stosowanie jednoczesnej transmisji w wielu wąskich niezależnych pod pasmach częstotliwości."
  },
  {
      "question": "Ile może wynosić szerokość kanału w systemie TETRA wyd.2?",
      "answer": "-25, 50, 100,150kHz -max 150kHz"
  },
  {
      "question": "Który z protokołów dostępu do ?modemu? zapewnia dynamiczny podział szczelin czasowych w ramce radiowej pomiędzy usługi transmisji danych i głosu?i",
      "answer": "FRMA"
  },
  {
      "question": "W efekcie rozwoju którego systemu wyeliminowano transmisję z komutacją połączeń w sieci szkieletowej?",
      "answer": "LTE"
  },
  {
      "question": "W przypadku planowania sieci wewnątrzbudynkowej i małej izolacji od zewnętrznych nadajników(małe tłumienie ścian zewnętrznych) stacje bazowe BS/punkty dostępowe AP powinny być lokowano w następujących miejscach w budynku:",
      "answer": "przede wszystkim w centrum kondygnacji budynku i użyciem anten o dookólnej charakterystyce promieniowania oraz równomiernym rozmieszczeniu BS/AP na kolejnych piętrach"
  },
  {
      "question": "Z jaką szybkością nadawane są Preambuła i nagłówek PLCP w WLAN 802.11 Z najmniejszą dostępną w systemie, aby zapewnić maksymalny zasięg rozgłaszania informacji",
      "answer": ""
  },
  {
      "question": "W którym standardzie WLAN zastosowano technikę Mu-MIMO?",
      "answer": "IEEE 802.11ac"
  },
  {
      "question": "Pojęcie NLOS oznacza: brak bezpośredniej widoczności",
      "answer": ""
  },
  {
    "question": "Jakie techniki stosuje się w systemach radiokomunikacyjnych w celu ograniczenia wpływu zaników płaskich sygnałów radiowych (KOMISYJNIE)?",
    "answer": "Techniki regulacji mocy nadajników lub adaptacyjną metodą modulacji i kodowania."
},
{
    "question": "Która Dyrektywa aktualnie określa w Europie wymagania stawiane urządzeniom radiowym w zakresie użytkowania i ochrony widma elektromagnetycznego oraz kompatybilność elektromagnetycznej?",
    "answer": "EMC"
},
{
    "question": "Odbiornik którego z systemów będzie miał największą czułość?",
    "answer": "TETRA"
},
{
    "question": "Sieci WLAN I WPAN mają zdefiniowane wyłącznie rozwiązania dla warstwy:",
    "answer": "fizycznej"
},
{
    "question": "Które stwierdzenie NIE jest prawdziwe? Łączność radiową w pomieszczeniu lub na zewnątrz budynków charakteryzuje (KOMISYJNIE)",
    "answer": "stała w czasie charakterystyka transmitancji kanału radiowego"
},
{
    "question": "Do bezprzewodowych sieci lokalnych WLAN zaliczamy rozwiązania zdefiniowane w dokumentacjach IEEE",
    "answer": "802.11"
},
{
    "question": "Jaki jest typowy zasięg WLAN na zewnątrz budynków?",
    "answer": "100m(120-140m)"
},
{
    "question": "Jaki jest optymalny zasięg i prędkość poruszania terminali dla efektywnej łączności w systemie WIMAX2?",
    "answer": "do 5 km i 10 km/h"
},
{
    "question": "Które pasmo częstotliwości jest wg.ITU pasmem nielicencjonowanym typu no-ISM albo NON-ISM",
    "answer": "856 [MHz]"
},
{
    "question": "Od jakich parametrów zależy czułość odbiornika radiowego systemu transmisji danych?",
    "answer": "zastosowanego rodzaju modulacji i kodowania"
},
{
    "question": "Które techniki umożliwiają zwiększenie szybkości transmisji systemów radiowych?",
    "answer": "Stosowanie techniki kodowania kanałowego z mniejszą sprawnością kodową, Massive MIMO"
},
{
    "question": "W jakim celu jest obliczany bilans energetyczny łącza radiowego (medium transmisyjnego)?",
    "answer": "W celu określenia maksymalnego tłumienia łącza radiowego"
},
{
    "question": "W jaki sposób przeciwdziała się zanikom?",
    "answer": "Poprzez zastosowanie technik odbioru zbiorczego"
},
{
    "question": "Jakie szybkości transmisji w warstwie fizycznej mogą osiągnąć systemy 802.15-2016 pracujące w paśmie częstotliwości 60GHz?",
    "answer": "do ok. 5Gb/s"
},
{
    "question": "Odległość koordynacyjna jest to:",
    "answer": "suma zasięgu zakłóceniowego i zasięgu użytecznego"
},
{
    "question": "W jakim celu wprowadza się hierarchiczność (warstwowość) w strukturze sieci komórkowych?",
    "answer": "Aby zapewnić obsługę abonentów o różnym stopniu mobilności"
},
{
    "question": "Sensorowe sieci kratowe o niskim poborze mocy do stosowania w rozwiązaniach IoT automatyki domowej i budynkowej są budowane na bazie systemu:",
    "answer": "ZigBee"
},
];

export default function Home() {
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const displayFlashcard = () => {
    const currentFlashcard = flashcards[currentFlashcardIndex];
    return (
      <>
        <div id="question" className="mb-4 text-xl  text-black">
          {currentFlashcard.question}
        </div>
        <div
          id="answer"
          className={`${
            showAnswer ? "block" : "hidden"
          } mb-4 text-base text-gray-600`}
        >
          {currentFlashcard.answer}
        </div>
      </>
    );
  };

  const prevFlashcard = () => {
    if (currentFlashcardIndex > 0) {
      setCurrentFlashcardIndex(currentFlashcardIndex - 1);
      setShowAnswer(false);
    }
  };

  const nextFlashcard = () => {
    setCurrentFlashcardIndex(currentFlashcardIndex + 1);
    setShowAnswer(false);
  };

  const resultElement = (
    <div id="result" className="text-lg italic text-gray-600 mt-2"></div>
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div
        id="flashcard"
        className="bg-white rounded-lg shadow-md p-6 max-w-md text-center"
      >
        {displayFlashcard()}
        <div id="buttons" className="flex justify-between">
          <button
            onClick={() => setShowAnswer(true)}
            className={`py-2 px-4 rounded bg-blue-500 text-white text-lg transition-colors duration-300 hover:bg-blue-700 ${
              showAnswer ? "hidden" : "inline-block"
            }`}
          >
            Show Answer
          </button>
          <button
            onClick={() => setShowAnswer(false)}
            className={`py-2 px-4 rounded bg-gray-300 text-gray-700 text-lg transition-colors duration-300 hover:bg-gray-400 ${
              showAnswer ? "inline-block" : "hidden"
            }`}
          >
            Hide Answer
          </button>
          <button
            onClick={prevFlashcard}
            className="py-2 px-4 rounded bg-blue-500 text-white text-lg transition-colors duration-300 hover:bg-gray-700"
          >
            Go Back
          </button>
          <button
            onClick={nextFlashcard}
            className="py-2 px-4 rounded bg-green-500 text-white text-lg transition-colors duration-300 hover:bg-blue-700"
          >
            Next
          </button>
        </div>
        {resultElement}
      </div>
    </div>
  );
}
