import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white text-gray-900 p-4 fixed w-full z-10 shadow-md top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <Image src="/assets/logo-bg.png" alt="Astranova Logo" width={80} height={80} className="mr-2" />
          Astranova Client
        </Link>
        <div className="space-x-4">
          <Link href="#features" className="hover:text-blue-600 transition duration-300">Features</Link>
          <Link href="#screenshots" className="hover:text-blue-600 transition duration-300">Doc</Link>
          <Link href="#screenshots" className="hover:text-blue-600 transition duration-300">Screenshots</Link>
          <Link href="#download" className="hover:text-blue-600 transition duration-300">Download</Link>
          <Link href="https://github.com/vant3x/astranova-client-rust" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition duration-300">GitHub</Link>
        </div>
      </div>
    </nav>
  );
}
