import Link from "next/link";

const TelecommunicationNotesPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Notatki z telekomunikacji</h2>
      <ul className="list-disc pl-4">
        <li className="hover:text-blue-500 hover:underline">
          <Link href="/notes/telecom/Cyfrowka">Cyfrowka</Link>
        </li>
        <li className="hover:text-blue-500 hover:underline">
          <Link href="/notes/telecom/FalaElektromagnetyczna">Magnesy</Link>
        </li>
        <div className="hover:text-blue-500 hover:underline">
          <li>
            <Link href="/notes/telecom/Filtry">Filtry</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default TelecommunicationNotesPage;
