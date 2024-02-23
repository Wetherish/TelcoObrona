import React from "react";

const ExamplePage: React.FC = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Witaj na stronie przykładu</h1>
      <p className="text-lg mb-2">To jest przykładowa strona Next.js.</p>
      <p className="text-lg mb-2">
        Tutaj znajduje się notatka na temat techniki cyfrowej:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li className="text-lg">
          Technika cyfrowa jest używana do przetwarzania i manipulacji sygnałami
          cyfrowymi.
        </li>
        <li className="text-lg">
          Obejmuje ona wykorzystanie bramek logicznych, przerzutników i innych
          komponentów cyfrowych.
        </li>
        <li className="text-lg">
          Technika cyfrowa jest szeroko stosowana w różnych dziedzinach, takich
          jak telekomunikacja, informatyka i systemy sterowania.
        </li>
      </ul>
    </>
  );
};

export default ExamplePage;
