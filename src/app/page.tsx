import Header from '@/components/Header';
import { ScrollScrubAnimation } from '@/components/ScrollScrubAnimation';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <ScrollScrubAnimation />
      
      {/* Fixed overlay content - Header is hidden */}
      <div className="fixed inset-0 z-0 flex flex-col pointer-events-none">
        {/* Header hidden from home page */}
        <main className="flex-1 flex flex-col justify-center p-8 pt-32 pl-16 pointer-events-none">
          <div className="text-left space-y-12">
            {/* Main Heading */}
            {/* <div className="space-y-6 space-x-64">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight items-start text-white">
                worra
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium items-center max-w-4xl">
                so, 
                <br />
                <span className="italic font-bold">shall we?</span>
              </p>
            </div> */}
          </div>
        </main>
      </div>
      {/* Invisible scrollable content to enable scroll scrubbing */}
      <div className="relative h-[600vh] bg-transparent"></div>
    </>
  );
}