// podstawowe pojecia metody pomiarowej KEM
import React from "react";
import Image from "next/image";
import rys1 from "../../../img/rys1.jpg";
const AntennaDefinition: React.FC = () => {
  return (
    <div className="container mx-auto max-w-3xl p-5">
      <h2 className="text-2xl font-bold mb-4">Definicja anteny:</h2>
      <div className="shadow-md rounded-lg overflow-hidden bg-white">
        <div className="p-4">
          <p className="text-lg mb-4 text-gray-800">
            Antena jest ważnym ogniwem w torze telekomunikacyjnym. Jest to
            urządzenie, które umożliwia transformację prowadzonych fal EM na
            fale promieniowane. Przekształcenie kierowanych fal
            elektromagnetycznych w falę w przybliżeniu płaską w swobodnej
            przestrzeni - to antena nadawcza, odwrotnie - odbiorcza. Antenę
            można traktować jako „interfejs” między prowadnicą falowodową a
            wolną przestrzenią. Antena nie jest zaliczana do grupy przetworników
            elektromagnetycznych. Antena modyfikuje tylko sposób transportu
            energii.
          </p>
        </div>
        <div>
          <Image
            src={rys1}
            alt="Rysunek 1: Zamiana energii elektrycznej na fale EM"
          />
        </div>

        <div className="shadow-md rounded-lg overflow-hidden bg-white">
          <div className="p-4">
            <p className="text-lg mb-4 text-gray-800">
              Antena jest ważnym ogniwem w torze telekomunikacyjnym. Jest to
              urządzenie, które umożliwia transformację prowadzonych fal EM na
              fale promieniowane. Przekształcenie kierowanych fal
              elektromagnetycznych w falę w przybliżeniu płaską w swobodnej
              przestrzeni – to antena nadawcza, odwrotnie – odbiorcza. Antenę
              można traktować jako „interfejs” między prowadnicą falowodową a
              wolną przestrzenią. Antena nie jest zaliczana do grupy
              przetworników elektromagnetycznych. Antena modyfikuje tylko sposób
              transportu energii.
            </p>
            <p className="text-lg mb-4 text-gray-800">
              Rozmiar elementu promieniującego jest dużo mniejszy od długości
              fali (przynajmniej 1/100 długości). Fale, które mogą zostać
              wypromieniowane przez taką antenę to fala:
              <ul className="list-disc ml-6">
                <li>Płaska,</li>
                <li>Kulista,</li>
                <li>Cylindryczna.</li>
              </ul>
            </p>
            <p className="text-lg mb-4 text-gray-800">
              Kluczowe parametry anteny opisujące jej własności z punktu
              widzenia systemu telekomunikacyjnego:
              <ul className="list-disc ml-6">
                <li>charakterystyka promieniowania,</li>
                <li>kierunkowość (zysk energetyczny),</li>
                <li>polaryzacja zamierzona,</li>
                <li>
                  charakterystyka częstotliwościowa (np. ze względu na
                  dopasowanie impedancyjne do odbiornika).
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntennaDefinition;
