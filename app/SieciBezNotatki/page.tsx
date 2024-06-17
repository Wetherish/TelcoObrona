import React from 'react';

const Page: React.FC = () => {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Parametry interfejsu radiowego systemu TETRA wyd. 2</h1>
            
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Technika łączności dwukierunkowej w interfejsie radiowym:</h2>
                <p><strong>Duplex:</strong> TETRA (Terrestrial Trunked Radio) wykorzystuje technikę Time Division Duplex (TDD), która pozwala na dwukierunkową komunikację w tym samym paśmie częstotliwości poprzez rozdzielenie sygnałów w czasie.</p>
            </section>
            
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Technika zwielokrotnienia dostępu:</h2>
                <p><strong>TDMA:</strong> TETRA stosuje Time Division Multiple Access (TDMA), gdzie kanał radiowy jest podzielony na szczeliny czasowe. Wersja 2 systemu TETRA wykorzystuje 4 szczeliny czasowe na kanał radiowy, co umożliwia obsługę wielu użytkowników na jednym kanale.</p>
            </section>
            
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Maksymalna moc nadawania MS:</h2>
                <p><strong>1 do 3 W:</strong> Maksymalna moc nadawania stacji ruchomej (Mobile Station - MS) w systemie TETRA wynosi od 1 do 3 watów, w zależności od klasy urządzenia i zastosowania.</p>
            </section>
            
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Stosowane modulacje:</h2>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>π/4 DQPSK (Differential Quadrature Phase Shift Keying):</strong> Jest to główna modulacja stosowana w TETRA, zapewniająca efektywne kodowanie danych i odporność na zakłócenia.</li>
                    <li><strong>QAM (Quadrature Amplitude Modulation):</strong> Dla transmisji wysokiej przepływności danych w TETRA wyd. 2 mogą być stosowane bardziej zaawansowane modulacje, takie jak 16-QAM lub 64-QAM.</li>
                </ul>
            </section>
            
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Szerokości kanału radiowego:</h2>
                <p><strong>25 kHz:</strong> Kanał radiowy w systemie TETRA ma szerokość 25 kHz, co pozwala na efektywne wykorzystanie dostępnego spektrum częstotliwości.</p>
            </section>
            
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Liczba kanałów fizycznych w kanale radiowym:</h2>
                <p><strong>4 kanały fizyczne:</strong> Każdy kanał radiowy w TETRA jest podzielony na 4 kanały fizyczne dzięki zastosowaniu TDMA. Każdy kanał fizyczny może obsługiwać jedną rozmowę lub transmisję danych.</p>
            </section>
            
            <footer className="mt-8">
                <p>Powyższe parametry definiują, jak działa interfejs radiowy systemu TETRA, zapewniając niezawodną i efektywną komunikację dla użytkowników, w tym służb ratunkowych, policji oraz innych służb publicznych i prywatnych.</p>
            </footer>

            <h1 className="text-2xl font-bold mb-4">Jaki rozkład mają szybkie fluktuacje odbieranego sygnału radiowego i czym są one spowodowane?</h1>
            <p className="mb-6">Logarytmiczno - normalny</p>

            <h1 className="text-2xl font-bold mb-4">Jakie zjawiska fizyczne determinują propagację fal radiowych w zakresie częstotliwości od 400 MHz do 2 GHz</h1>
            <p className="mb-6">dyfrakcja, odbicia, rozproszenia</p>

            <h1 className="text-2xl font-bold mb-4">Wymień systemowe cechy nadajnika</h1>
            <p className="mb-6">tłumienie fidera, zysk anteny, wysokość nad terenem, moc na wyjściu nadajnika</p>

            <h1 className="text-2xl font-bold mb-4">Co to są systemy trankingowe (definicja i idea trankingu) oraz wymienić podstawowe cechy systemów trankingowych?</h1>
            <p className="mb-4">Tranking - automatyczny i dynamiczny przydział kanałów (spośród wspólnego i ograniczonego zbioru kanałów) do realizacji łączności pomiędzy dużą liczbę użytkowników – komutacja kanałów radiowych.</p>
            <ul className="list-disc list-inside ml-4">
                <li>Jeden system techniczny do realizacji usług</li>
                <li>Wyodrębnienie grup użytkowników (organizacji, flot) w warstwie logicznej a nie fizycznej</li>
                <li>Więcej zasobów / współdzielone zasoby radiowe do realizacji usług – większa efektywność</li>
                <li>Większa niezawodność systemu</li>
                <li>Możliwość współpracy służb poprzez wspólną łączność</li>
                <li>Możliwość kolejkowania i priorytetyzacji zgłoszeń przy ich natłoku</li>
                <li>Konieczność wyodrębnienia co najmniej jednego dwukierunkowego kanału/zasobu radiowego jako głównego kanału sterującego (do transmisji zgłoszeń i wywołań abonentów, uwierzytelniania, przydziału kanałów transmisyjnych itp.) i zarządzanych wielu kanałów trafiku</li>
            </ul>
            <h1>Radio Systems</h1>
      
            <h1 className="text-3xl font-bold text-center mb-8">Radio Systems</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. The Purpose of Interleaving in Radio Systems and the Methods Used</h2>
        <p className="text-gray-700">
          Interleaving is divided into block interleaving and bit interleaving. Interleaving is used because in radio systems, errors occur in bursts, and coding allows for the correction of random errors. Therefore, systematic changes in the order of bits in code sequences are applied.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. The Exposed Station Problem in Radio Systems and Its Conditions</h2>
        <p className="text-gray-700">
          The station is within the range of the transmitter but outside the range of the information receiver. This occurs in the case of contention-based protocols.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. The Purpose of Channel Coding Methods in Radio Systems and the Methods Used</h2>
        <p className="text-gray-700">
          Insufficient transmission quality in the radio link – delays and dropouts. The need to introduce redundancy in the transmitted signal to enable error detection and/or correction procedures at the cost of increasing the amount of transmitted data in the link and introducing additional delay. Channel coding is not used in all systems.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. System Features of the Receiver</h2>
        <p className="text-gray-700">
          Sensitivity of the receiver, feeder attenuation, antenna gain, elevation of the antenna above the ground.
        </p>
      </section>
        </div>
        
    );
};

export default Page;
