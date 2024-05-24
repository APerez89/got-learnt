'use client';
import Image from "next/image";
import StartForm from "./ui/form/form";

export default function Home() {
  const bgGradient = {
    height: '100vh',
    filter: 'contrast(100%) brightness(100%)',
    background: `linear-gradient(0deg, rgba(35,120,195,1) 0%, rgba(0,0,0,0)), linear-gradient(240deg, rgba(54,77,112,1), rgba(255,0,0,0)), radial-gradient(circle at 41% 54%, rgba(215,219,226,1), rgba(255,0,255,0)), url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center" style={bgGradient}>
      <div className="w-full max-w-screen-2xl grid grid-cols-12 font-mono p-8 text-sm z-10">
        <div className="flex col-span-8 justify-start items-center">
          <Image
            src='/forklift_lg.png'
            width={800}
            height={800}
            alt='3d cartoon like forklift'
            className="rotate-12"
          />
        </div>
        <div className="w-full h-full flex bg-slate-100/50 p-6 backdrop-blur-md col-span-4 rounded-3xl shadow-2xl items-center justify-center">
          <StartForm />
        </div>
      </div>
    </main>
  );
}
