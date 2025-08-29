import Image from "next/image";
import Link from "next/link";
import ClientThreeBackground from '../../components/ClientThreeBackground'; 

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 md:py-32 flex items-center justify-center text-center overflow-hidden">
        <ClientThreeBackground /> 
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 bg-dots opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up max-w-2xl mx-auto">
            Astranova Client: Your Modern HTTP Companion
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
            A powerful, fast, and intuitive HTTP client built with Rust.
          </p>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 justify-center animate-fade-in-up animation-delay-400">
            <Link href="#download" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out shadow-lg">
              Download Now
            </Link>
            <Link href="https://github.com/vant3x/astranova-client-rust" target="_blank" rel="noopener noreferrer" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out shadow-lg">
              View on GitHub
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white" id="features">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Astranova Client?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Blazing Fast</h3>
              <p className="text-gray-700">
                Leveraging Rust&apos;s performance, Astranova Client delivers unparalleled speed for your HTTP requests.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Secure & Reliable</h3>
              <p className="text-gray-700">
                Built with security in mind, ensuring your data is handled with utmost care and reliability.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Intuitive Interface</h3>
              <p className="text-gray-700">
                A clean and user-friendly interface makes sending and managing HTTP requests a breeze.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 md:py-24 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How Astranova Client Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">1</div>
              <h3 className="text-xl font-semibold mb-4">Install & Launch</h3>
              <p className="text-gray-700">
                Download Astranova Client for your OS and run the installer. It&apos;s quick and easy!
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">2</div>
              <h3 className="text-xl font-semibold mb-4">Configure Your Request</h3>
              <p className="text-gray-700">
                Set up your HTTP method, URL, headers, and body in the intuitive interface.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">3</div>
              <h3 className="text-xl font-semibold mb-4">Send & Analyze</h3>
              <p className="text-gray-700">
                Send your request and instantly view the response, status, and detailed timings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 md:py-24 bg-gray-100" id="screenshots">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            See Astranova Client in Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image src="/assets/screens/screen1.png" alt="Screenshot 1" width={600} height={400} className="rounded-md w-full h-auto" />
              <p className="text-center mt-2 text-gray-600">Clean Request Interface</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image src="/assets/screens/screen2.png" alt="Screenshot 2" width={600} height={400} className="rounded-md w-full h-auto" />
              <p className="text-center mt-2 text-gray-600">Response Viewer</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image src="/assets/screens/screen3.png" alt="Screenshot 3" width={600} height={400} className="rounded-md w-full h-auto" />
              <p className="text-center mt-2 text-gray-600">History & Collections</p>
            </div>
          </div>
      
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 md:py-24 bg-white" id="download">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Get Astranova Client Today!
          </h2>
          <p className="text-lg mb-8">
            Download the latest version for your operating system.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg text-xl font-semibold transition duration-300 ease-in-out shadow-lg">
              Download for Windows
            </a>
            <a href="#" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg text-xl font-semibold transition duration-300 ease-in-out shadow-lg">
              Download for macOS
            </a>
            <a href="#" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg text-xl font-semibold transition duration-300 ease-in-out shadow-lg">
              Download for Linux
            </a>
          </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Astranova Client.           by <Link className="text-underline underline" href="https://x.com/alevant3x" target="_blank">Alevante</Link>
</p>
          <div className="mt-4 space-x-4">
            <Link href="https://github.com/vant3x/astranova-client-rust" target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </Link>
            {/* Add more footer links as needed */}
          </div>
        </div>
      </footer>
    </div>
  );
}
