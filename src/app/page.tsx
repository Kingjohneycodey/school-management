import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <header className="flex items-center justify-between">
        <img src="/images/logo.svg" alt="" />

        <div className="">
          <Link href="/about">Home</Link>
        </div>

        <div>
          <button>Get Started</button>
        </div>
      </header>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>School dashboard</h1>
      </div>
    </main>
  );
}
