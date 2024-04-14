import Image from "next/image";

export default function Home() {
  return (
    <div className="flex max-h-screen flex-col items-center justify-between z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content={[&apos;&apos;]} after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content={[&apos;&apos;]} before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
      <Image
        className="flex w-full max-h-screen relative object-fit"
        src="/rock.jpg"
        alt="Logo"
        width={1080}
        height={700}
        priority
      />

      <main className="flex min-h-screen flex-col items-center justify-between absolute p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <a className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
            href="https://www.instagram.com/sohni_karada/"
            target="_blank"
            rel="noopener noreferrer">
            Contact Us&nbsp;
          </a>
          <div>
            <img
              src="event.png"
              alt="logo"
              className="dark:invert"
              width={150}
              height={40}
            />
          </div>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 text-white hover:tracking-wide"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <h2 className="mb-2 text-2xl font-semibold">
                Hansa
              </h2>
              {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}
            </a>
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl font-bold font-serif text-white text-center leading-[2] tracking-widest italic">
            Make your special moments with our exclusive event services for <br /> an unforgettable experience.
          </h1>
        </div>
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          <a
            href="services"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold text-white">
              Services{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50 text-white">
              Explore our comprehensive range of services tailored to meet your needs.
            </p>
          </a>

          <a
            href="clients"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold text-white">
              Clients{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50 text-white">
              Explore our diverse clientele and discover how we&apos;ve helped them succeed.
            </p>
          </a>

          <a
            href="events/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold text-white">
              Events{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50 text-white">
              Dive into our array of events and experience unforgettable moments.
            </p>
          </a>

          <a
            href="/about"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold text-white">
              About Me{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50 text-white">
              Get to know me and my journey in the industry.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
