import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="home-page">
      <header className="flex items-center justify-between p-4">
        <img src="/images/logo.svg" alt="" />

        <div className="">
          <Link href="/" className="mr-12">
            Home
          </Link>
          <Link href="/about" className="mr-12">
            About
          </Link>
          <Link href="/pricing">Pricing</Link>
        </div>

        <div>
          <button className="rounded-2xl px-4 py-2 bg-[#B9FF66] text-black">
            Get Started
          </button>
        </div>
      </header>


      <section className="flex min-h-screen flex-col items-center p-24 custom-heading">
       <div className="mb-10">
       <h1>School Management Dashboard</h1>
       </div>

        <Image src="/images/banner.svg" width={100} height={100} className="w-full" alt="Cover picture" />
      </section>
    </main>
  );
}
