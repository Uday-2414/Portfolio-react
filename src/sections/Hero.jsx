import memojimage from "../assets/images/memoji-computer.png";
import SplitText from "../components/SplitText";
import grainImage from "../assets/images/grain.jpg";
import StarIcon from "../assets/icons/star.svg?react";
import SparkleIcon from "../assets/icons/sparkle.svg?react";
import { HeroOrbit } from "../components/HeroOrbit";
import Arrow from "../assets/icons/arrow-down.svg";

function Hero() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  const handleExploreClick = () => {
    console.log("Explore my work button clicked!");
    // Add your logic here
  };

  const handleConnectClick = () => {
    console.log("Let's connect button clicked!");
    // Add your logic here
  };
  return (
    <>
      <div
        className="py-32 md:py-48 lg:py-50 w-full mx-auto flex flex-col justify-center items-center relative z-0 overflow-x-clip scroll-smooth"
        id="hero"
      >
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_70%,transparent)]">
          <div
            className="absolute inset-0 -z-30 opacity-5"
            style={{
              backgroundImage: `url(${grainImage})`,
            }}
          ></div>
          <div className="size-[620px] hero-ring"></div>
          <div className="size-[820px] hero-ring"></div>
          <div className="size-[1020px] hero-ring"></div>
          <div className="size-[1220px] hero-ring"></div>

          <HeroOrbit
            size={430}
            rotation={-14}
            shouldOrbit={true}
            orbitDuration={30}
            shouldSpin={true}
            spinDuration={6}
          >
            <SparkleIcon className="size-8 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit
            size={440}
            rotation={79}
            shouldOrbit={true}
            orbitDuration={34}
            shouldSpin={true}
            spinDuration={6}
          >
            <SparkleIcon className="size-5 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit
            size={520}
            rotation={-41}
            shouldOrbit={true}
            orbitDuration={36}
            shouldSpin={true}
            spinDuration={3}
          >
            <div className="size-3 rounded-full bg-emerald-300/20"></div>
          </HeroOrbit>
          <HeroOrbit
            size={530}
            rotation={178}
            shouldOrbit={true}
            orbitDuration={38}
            shouldSpin={true}
            spinDuration={6}
          >
            <SparkleIcon className="size-10 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit
            size={550}
            rotation={20}
            shouldOrbit={true}
            orbitDuration={40}
            shouldSpin={true}
            spinDuration={3}
          >
            <StarIcon className="size-12 text-emerald-300 z-0" />
          </HeroOrbit>
          <HeroOrbit
            size={590}
            rotation={98}
            shouldOrbit={true}
            orbitDuration={44}
            shouldSpin={true}
            spinDuration={3}
          >
            <StarIcon className="size-8 text-emerald-300 z-0" />
          </HeroOrbit>
          <HeroOrbit
            size={650}
            rotation={-5}
            shouldOrbit={true}
            orbitDuration={48}
            shouldSpin={true}
            spinDuration={6}
          >
            <div className="size-2 rounded-full bg-emerald-300/20"></div>
          </HeroOrbit>
          <HeroOrbit
            size={710}
            rotation={144}
            shouldOrbit={true}
            orbitDuration={52}
            shouldSpin={true}
            spinDuration={6}
          >
            <SparkleIcon className="size-14 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit
            size={720}
            rotation={85}
            shouldOrbit={true}
            orbitDuration={54}
            shouldSpin={true}
            spinDuration={6}
          >
            <div className="size-3 rounded-full bg-emerald-300/20"></div>
          </HeroOrbit>
          <HeroOrbit
            size={800}
            rotation={-72}
            shouldOrbit={true}
            orbitDuration={58}
            shouldSpin={true}
            spinDuration={3}
          >
            <StarIcon className="size-28 text-emerald-300" />
          </HeroOrbit>
        </div>

        <div className="container flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center py-4">
            <img
              src={memojimage}
              className="h-25 w-25 mt-8 md:h-40 md:w-40"
              alt="boy with computer"
            />
            <div className="bg-gray-950 border border-gray-800 rounded-lg max-w-fit px-4 py-1.5 inline-flex items-center gap-4 text-sm md:text-sm">
              {" "}
              <div className="bg-green-500 size-2.5 rounded-full relative">
                <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
              </div>
              <div className="font-medium text-sm">
                {" "}
                Available for new projects
              </div>
            </div>
          </div>
          <div className="max-w-lg mx-auto text-center">
            <div className="mt-5 mb-2">
              <SplitText
                text="Hello,I'm UDAY KUMAR"
                className="text-3xl font-semibold text-center md:text-[2.75rem]"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>
            <div className="text-gray-400 text-center md:text-lg">
              I specialize in tranforming designs into functional, high
              performing web applications.
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-8 md:flex-row justify-center items-center mt-5 sm:mt-5 md:mt-8">
          {/* Button 1 */}
          <button
            onClick={handleExploreClick}
            className="inline-flex flex-row justify-center items-center border-2 border-gray-800 rounded-xl px-4 py-2 h-12 gap-2 min-w-[160px] text-white font-semibold bg-gray-800 hover:bg-gray-600 hover:text-white cursor-pointer hover:shadow-lg hover:scale-105 transform transition-all"
          >
            <span className="inline-block">
              <a href="#project">Explore my work</a>
            </span>
            <img src={Arrow} className="h-6 w-6 invert p-1" alt="arrow-down" />
          </button>

          <button
            onClick={handleConnectClick}
            className="flex justify-center items-center border rounded-xl bg-white text-gray-800 hover:bg-green-500 hover:text-white hover:border-none font-semibold py-2 px-4 h-12 min-w-[160px] duration-200 cursor-pointer hover:shadow-lg hover:scale-105 transform transition-all"
          >
            <a href="#contact">👋 Let's connect</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
