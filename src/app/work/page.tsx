import Header from '@/components/Header';

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col justify-center p-8 pt-32 pl-16 bg-[#6320EE]">
        <div className="text-left space-y-12">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight items-start text-white">
            work
          </h1>
          
          {/* Work content to follow */}
          <div className="pt-12 space-y-8">
            {/* Portfolio items will go here */}
          </div>
        </div>
      </main>
    </>
  );
}
