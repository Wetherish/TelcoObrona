"use client";

import { useState } from "react";

const flashcards = [
    {
        "question": "Do jakiego typu sieci zalicza sie system Bluetooth?",
        "answer": "WPAN"
    },
    {
        "question": "Jakich zaników należy spodziec podczas odbioru szerokopasmowych sygnałów radiowych przez terminal mobilny w ruchu w środowisku miejskim?",
        "answer": "Zaniki wolnozmienne i zaniki selektywne"
    },
    {
        "question": "Ile kanałow fizycznych/wirtualnych zdefiniowano w kanale radiowym w systemie TETRA?",
        "answer": "4"
    },
    {
        "question": "Jakie szerokości kanału radiowego zdefiniowano w systemie TETRA?",
        "answer": "25 kHz , 50 kHz , 100 kHz"
    },
    {
        "question": "Które ze standardów definiują interfejs radiowy sieci WLAN",
        "answer": "IEEE 802.11ac IEEE 802.11ad"
    },
    {
        "question": "Maksymalny zasięg i szybkość poruszenia się terminali w systemach stosujących w TDMA jest limitowany:",
        "answer": "Ograniczoną częstotliwością sterowania czasem TA"
    },
    {
        "question": "Który z systemów jest dedykowany dla WBAN i WPAN?",
        "answer": "IEEE 802.15.6"
    },
    {
        "question": "Które pasma częstotliwości przeznaczone są do łączności systemów dyspozytorskich i trankingowych?",
        "answer": "380 MHz - 400 MHz"
    },
    {
        "question": "Komórkową sieć jednoczęstotliwościową można zbudować, gdy minimalne wymaganie na stosunek mocy sygnału do zakłóceńna wejściu odbiornika na obszarze komórki wynosi:",
        "answer": "nie więcej niz 0 dB minimalnie -10 dB"
    },
    {
        "question": "W której technice zwielokrotnienia dostępu użytkownicy mają dostęp do całego kanału dariowego w tym samym czasie?",
        "answer": "CDMA"
    },
    {
        "question": "Technikę dostępu rywalizacyjnego w kanale radiowym stosuje sie w:",
        "answer": "WLAN (np 802.11ac)"
    },
    {
        "question": "Odległość koordynacyjna jest to:",
        "answer": "Minimalna odległość między stacjami stosującymi te same zasoby radiowe"
    },
    {
        "question": "Techniką zwielokrotnienia dostępu do kanału w DMR jest",
        "answer": "TDMA/FDMA"
    },
    {
        "question": "Jaką jest maksymalna dopuszczalna moc prormemowana izotropowo dla urządzeń WLAN pracujących w paśmie ISM 2,4GHz?",
        "answer": "20dBm"
    },
    {
        "question": "W którym systemie może wystąpić zjawisko stacji ukrytej?",
        "answer": "WLAN"
    },
    {
        "question": "W technice AMC stosuje się adaptacyjny dobór zmianę następujących parametrów: modulacji i kodowania (AMC) zależną od warunków propagacyjnych stosuje się w systemach:",
        "answer": "kodowania kanałowego"
    },
    {
        "question": "Które usługi realizowane sa w systemie TETRA (Wydanie 1)",
        "answer": "SDS i polączenia grupowe z potwierdzeniem"
    },
    {
        "question": "Ile wynosi odstęp międzykanałowy i jaka jest szerokość kanałuradiowego w systemach WLAN pracujących w paśmie ISM 2.4GHz(np. 1EEE802.11 b)?",
        "answer": "2 MHz / 1MHz"
    },
    {
        "question": "Które z stemów są systemami trankingowymi?",
        "answer": "DMR tier 3, GoTa"
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
