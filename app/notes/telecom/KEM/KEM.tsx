// podstawowe pojecia metody pomiarowej KEM
import React from 'react';

const AntennaDefinition: React.FC = () => {
  return (
    <div className="container mx-auto max-w-3xl p-5">
      <h2 className="text-2xl font-bold mb-4">Definicja anteny:</h2>
      <p className="text-lg text-gray-700 mb-4">
        Antena jest ważnym ogniwem w torze telekomunikacyjnym. Jest to urządzenie, które umożliwia
        transformację prowadzonych fal EM na fale promieniowane. Przekształcenie kierowanych fal
        elektromagnetycznych w falę w przybliżeniu płaską w swobodnej przestrzeni – to antena nadawcza,
        odwrotnie – odbiorcza. Antenę można traktować jako „interfejs” między prowadnicą falowodową a
        wolną przestrzenią. Antena nie jest zaliczana do grupy przetworników elektromagnetycznych.
        Antena modyfikuje tylko sposób transportu energii.
      </p>
      
      {/* <div className="text-center">
        <img src="/rys1.jpg" alt="Rysunek 1: Zamiana energii elektrycznej na fale EM" className="max-w-full mb-4" />
        <p className="text-gray-600">Rysunek 1. Zamiana energii elektrycznej na fale EM</p>
      </div>
      
      <div className="text-center">
        <img src="/rys2.jpg" alt="Rysunek 2: Zamiana fal prowadzonych na promieniowane" className="max-w-full mb-4" />
        <p className="text-gray-600">Rysunek 2. Zamiana fal prowadzonych na promieniowane</p>
      </div> */}
    </div>
  );
};

export default AntennaDefinition;
