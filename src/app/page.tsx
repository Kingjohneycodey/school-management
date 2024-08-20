"use client";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#" },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="home-page">
      <header className="fixed left-0 inset-x-0 top-0 z-50 bg-black">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button className="p-2 lg:hidden">
                <HamburgerMenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </Dialog.Trigger>
            <Dialog.Content className="fixed inset-0 z-50 bg-white p-6">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4"
              >
                <Cross2Icon className="h-6 w-6 text-red" aria-hidden="true" />
              </button>
              <div className="flex flex-col gap-4 mt-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-semibold leading-7 text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Dialog.Content>
          </Dialog.Root>
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-3">
              <img src="/images/logo.svg" alt="" className="max-w-[200px] md:max-w-[250px]" />
            </a>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/signup"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <button className="rounded-2xl px-4 py-2 bg-[#B9FF66] text-black">
                Get Started <span aria-hidden="true">&rarr;</span>
              </button>
            </Link>
          </div>
        </nav>
      </header>

      {/* <header className="flex items-center justify-between p-8 px-10">
        <img src="/images/logo.svg" alt="" className="max-w-[250px]" />


      </header> */}

      <section className="flex min-h-screen flex-col items-center p-4 md:p-24 mt-24 pt-16">
        <div className="mb-16 text-center">
          <h1 className="custom-heading text-[#B9FF66]">
            School Management Dashboard
          </h1>

          <p className="max-w-[70%] m-auto mt-4">
            A School Management SaaS product designed to manage student,
            Teacher, and Parent activities, enabling effective management of the
            school and learning resources.
          </p>
        </div>

        <Image
          src="/images/banner.svg"
          width={100}
          height={100}
          className="w-full"
          alt="Cover picture"
        />
      </section>
    </main>
  );
}
