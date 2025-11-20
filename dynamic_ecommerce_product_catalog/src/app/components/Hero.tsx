import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-neutral-100 px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold leading-tight text-neutral-900 md:text-5xl">
            TIMELESS MEN’S FASHION FOR EVERY MOMENT
          </h1>
          <p className="text-lg text-neutral-600">
            Find clothes that match your vibe. Designed for men who want to look
            good effortlessly.
          </p>
          <button className="rounded-full bg-black px-10 py-3 text-sm font-semibold tracking-wide text-white">
            Start shopping
          </button>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/heroImg.png"
            alt="Curated men's essentials"
            width={1000}
            height={736}
            priority
            className="h-full w-full max-w-[460px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

