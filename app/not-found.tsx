import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <html>
      <body className="min-h-screen bg-[#F5F0E8] flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/logo.png"
              alt="Cabaña Sancibrian"
              width={120}
              height={120}
              className="opacity-80"
            />
          </div>

          <h1 className="text-8xl font-bold text-[#0A4D68] mb-4">404</h1>

          <p className="text-2xl font-semibold text-[#1A1A1A] mb-2">
            Page Not Found
          </p>
          <p className="text-lg text-[#1A1A1A]/60 mb-2">
            Página No Encontrada
          </p>

          <p className="text-[#1A1A1A]/50 mb-8">
            Looks like this page drifted out to sea.
            <br />
            Parece que esta página se fue con la marea.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en"
              className="inline-block bg-[#0A4D68] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0A4D68]/90 transition-colors"
            >
              Go Home (English)
            </Link>
            <Link
              href="/es"
              className="inline-block border-2 border-[#0A4D68] text-[#0A4D68] px-8 py-3 rounded-full font-semibold hover:bg-[#0A4D68]/10 transition-colors"
            >
              Ir al Inicio (Español)
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
