"use client";

import { useState } from "react";

const flashcards = [
  {
    question: "Podac zalozenia dla modelu czwartej potegi:",
    answer:
      "Idealnie plaska, nieskonczenie rozlegla, odbijajaca, przewodzaca powierzchnia",
  },
  {
    question: "Wymienic podstatwowe parametry charakteryzujace troposfere?",
    answer:
      "cisnienie p[mb] temperatura bezwzgledna T[K] wilgotnosc beywygldna e[mb]",
  },
  {
    question: "Wymien parametry anten",
    answer:
      "charakterystyka promieniowania kierunkowosc zysk energetyczny impedancja wejsciowa szerokosc pasma pracy powierzchnia skuteczna polaryzacja",
  },
  {
    question: "Co to jest antena",
    answer:
      "Jest to element systemu radiokomunikacyjnego sluzacy do transformowania niosacej informacje energii elektromagnetycznej z postaci przewodzonej na promieniowana (antena nadawcza), badzz promieniowanej na przewodzona(antena odbiorcza)",
  },
  {
    question: "Wymien rodzaje anten",
    answer:
      "Anteny liniowe Anteny aperturowe Anteny mikropasmowe Anteny szczelinowe Anteny szerokopasmowe",
  },
  {
    question: "Sposoby rozchodzenia sie fali w otoczeniu Ziemi",
    answer:
      "Fala przyziemna Fala powierzchniowa Fala przestrzenna Fala bezposrednia Fala odbita Fala jonosferyczna Fala troposferyczna",
  },
  {
    question: "Kierunkowosc anteny",
    answer:
      "Stosunek maksymalnej gestosci promieniowania do sredniej gestosci promieniowania D=Umax / Usr srednia gestosc promieniowania calkowita moc promieniowana przez antene podzielona przezpelny kat brylowy. Przy czym Un to unormowana charakterystyka promieniowania mocy Kierunkowosc nie uwzglednia straty mocy w antenie.",
  },
  {
    question: "Zysk energetyczny anteny",
    answer:
      "Zysk energetyczny anteny Okresla wlasciwosci kierunkowe anteny z uwzglednieniem jej sprawnosci G=[ max natezenie pola elektrycznego wytwarzane przez badana antene / max natezenie pola elektrycznego wytwarzane przez wzorcowa antene zasilana taka sama moca ] ^2",
  },
  {
    question: "Tlumiennosc miedzyantenowa",
    answer:
      "Tlumiennosc miedzyantenowa L wyraza straty z powodu rozpraszania energii fal radiowych wprzestrzeni oraz pochlaniania przez osrodki propagacji i dotyczy przestrzeni pomiedzy hipotetycznymi antenami izotropowymi",
  },
  {
    question: "Wymien sposoby podzialu widma czestotliwosci radiowych",
    answer: "podzial dekadowy, podzial tradycyjny",
  },
  {
    question: "Co to jest fala plaska",
    answer:
      "Jest to fala elektromagnetyczna, w ktorej wektory E, H, sa prostopadle oraz sa prostopadle dokierunku propagacji i E/H=Zf",
  },
  {
    question: "Od czego zalezy wielkosc strefy Fresnela",
    answer:
      "czyli promien n-tej strefy zalezy od odleglosci miedzy antenami, dlugosci fali oraz numeru strefy",
  },
  {
    question:
      "Co to jest strefa daleka promieniowania i czym sie charakteryzuje",
    answer:
      "Jest to obszar rozciagajacy sie na zewnatrz kuli o promieniu r>>2D^2 / λ D-najwiekszy rozmiar anteny λ – dlugosc fali",
  },
  {
    question: "Rodzaje polaryzacji fal radiowych",
    answer: "Polaryzacja liniowa, polaryzacja kolowa, polaryzacja eliptyczna",
  },
  {
    question: "W jakim celu stosuje sie kryterium Rayleigha",
    answer: "To kryterium stosuje sie do oceny stopnia nierownosci powierzchni",
  },
  {
    question:
      "Jak zdefiniowana jest wysokosc skuteczna zawieszenia anteny w metodzie ITU-370?",
    answer:
      "Odleglosc od anteny do sredniej wysokosci terenu, ktora obliczona jest w odleglosci 3-15 km",
  },
  {
    question:
      "Jaki charakter ma stosunek amplitudy pola elektrycznego do amplitudy pola magnetycznego dla fali plaskiej w osrodku bezstratnym?",
    answer: "E=Z*H gdzie Z=337",
  },
  {
    question: "Zasada wzajemnosci",
    answer:
      "Parametry anteny traktowanej jako nadawcza sa identyczne z parametrami tej samej anteny traktowanej jako antena odbiorcza",
  },
  {
    question:
      "Jak polozony jest wektor pola elektrycznego fali elektromagnetycznej o polaryzacji pionowej?",
    answer:
      "Wektor E o polaryzacji poziomej polozony jest prostopadle wzgledem Ziemi (alfa=pi/2)",
  },
  {
    question:
      "Jak polozony jest wektor pola elektrycznego fali elektromagnetycznej o polaryzacji poziomej?",
    answer:
      "Wektor E o polaryzacji poziomej polozony jest rownolegle wzgledem Ziemi (alfa=0)",
  },
  {
    question: "O czym mowi parametr delta h?",
    answer:
      "Jest to roznica pomiedzy dwoma prostymi ograniczajacymi obszar zawierajacy 80% terenu, na ktorym delta h jest obliczany",
  },
  {
    question: "Dla jakich krzywych wykresla sie krzywa z modelu 370?",
    answer:
      "czestotliwosc, warunki klimatyczne, wysokosc efektywna zawieszenia anteny nadawczej, nieregularnosc terenu, natezenie pola przekraczane przez rozny procent czasu",
  },
  {
    question: "Opisac metode cosT-HI?",
    answer:
      "Ta metoda sluzy do prognozowania tlumienia w zakresach 900MHz/1800MHz. Uwzglednia wysokosc budynkow, szerokosc ulic, odstepy miedzy budynkami, polozenie ulic w stosunku do trasy propagacji",
  },
  {
    question: "W jakim celu analizuje sie przestrzenny rozklad Fresnela?",
    answer:
      "Aby sprawdzic, czy w przestrzeni istotnej dla propagacji fal radiowych nie ma porzeszkod Sprawdzamy wiec, czy mozna zastosowac model swobodnej przestrzeni.",
  },
  {
    question: "Dlaczego wystepuje tlumienie w przestrzeni swobodnej",
    answer: "Poniewaz energia fali ulega rozproszeniu",
  },
  {
    question: "Jakie parametry fali moga sie zmienic po odbiciu?",
    answer: "Amplituda i faza, zaleznie od polaryzacji",
  },
  {
    question: "Moc czulosciowa odbiornika",
    answer:
      "Pcz=(S+N+Z) / (N+Z), gdzie S-sygnal uzytkowy, N-szumy, Z-zaklocenia zewnetrzne",
  },
  {
    question: "Co to jest zanik",
    answer: "Znaczne obnizenie poziomu sygnalu w stosunku do wartosci sredniej",
  },
  {
    question:
      "Kiedy moze wystepowac wieksze natezenie pola niz w przestrzeni swobodnej",
    answer:
      "Chodzi o interferencje kontruktywna, fala odbita ma taka sama faze jak fala bezposrednia i sie doniej dodaje",
  },
  {
    question:
      "Od jakich parametrow zalezy tlumienie na pojedynczej przeszkodzie(ostrzu)",
    answer:
      "Od usytuowania tej przeszkody w stosunku do linii bezposredniej widocznosci oraz usyttuowania przeszkody miedzy nadajnikiem a odbiornikiem",
  },
  {
    question: "Wspolczynnik oslabienia",
    answer:
      "Okresla zmniejszenie natezenia pola fali rozchodzacej sie w rzeczywistym osrodku w stosunku do natezenia pola fali jakie wystepowaloby przy rozchodzeniu sie fali w przestrzeni swobodnej.",
  },
  {
    question: "Troposfera standardowa",
    answer:
      "Troposfera hipotetyczna odpowiadajaca przecietnemu stanowi rzeczywistej troposfery",
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
