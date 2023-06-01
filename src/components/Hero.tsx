import { myInfo } from "@/data/data";

const Hero = () => {
  return (
    <section id="home" className="hero mt-20">
      <div className="container mx-auto px-5 py-10 md:py-20 flex flex-col gap-4">
        <span className="block text-xl md:text-2xl">Hi, I am</span>
        <h1 className="font-bold text-3xl md:text-5xl uppercase">{myInfo.name}</h1>
        <div>
          <h2 className="font-semibold text-xl md:text-2xl bg-red-400 inline-block px-4 py-1.5">{myInfo.title}</h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;