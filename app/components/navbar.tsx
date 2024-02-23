// Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex-row items-start justify-between p-4 bg-gray-800 text-white">
      <Link href="/" className="text-white hover:text-gray-300 mr-4">
        Home
      </Link>
      <Link href="/notes" className="text-white hover:text-gray-300 mr-4">
        Notatki
      </Link>
      <Link href="/fiszki" className="text-white hover:text-gray-300 mr-4">
        Fiszki
      </Link>
    </nav>
  );
};

export default Navbar;
