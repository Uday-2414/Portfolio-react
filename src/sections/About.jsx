import memojimage from "../assets/images/dp.jpg";
import RotatingText from "../components/RotatingText";

// BlurText
function About() {
 

  return (
    <>
      <div className="overflow-x-clip p-15 scroll-smooth" id="about">
        <div className="flex flex-col-reverse justify-center items-center sm:flex-row md:flex-row gap-10 py-10 md:py-10">
          <div className="w-1/2 sm:w-full justify-center">
            <img src={memojimage} alt="Myself" className="border-white rounded-full"/>
          </div>
          <div className="flex justify-start flex-col">
            <h1 className="text-5xl font-bold">UDAY KUMAR</h1>
            <div className="flex flex-row text-xl sm:text-xl md:text-2xl gap-4 min-h-[2rem] justify-start font-bold pt-2">
              <div>
                <h1 className="whitespace-nowrap">I'm a</h1>
              </div>

              <div className="relative w-[260px] sm:w-[240px] md:w-[350px]">
                <RotatingText
                  texts={[
                    "Modern Web Developer",
                    "Full Stack Developer",
                    "Freelancer",
                    "Coder",
                    "Prompt Engineer",
                    "AI Enthusiast",
                  ]}
                  mainClassName="absolute left-0 top-0 w-full text-green-500 font-bold overflow-hidden"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>
            </div>

            <div className="text-gray-300 mt-4 mx-auto md:text-lg break-words w-full">
              I design and build clean, high-performing websites and
              applications with a focus on user experience and scalable
              architecture. Whether it's frontend or backend. I bring ideas to
              life with code.
            </div>
            <div className="flex flex-row gap-3 items-center pt-3">
              <a className="text-gray-900 bg-green-500 rounded-full p-3  hover:bg-gray-900 hover:text-green-500 hover:border-green-500 border-2 font-bold" href="/Uday_resume.pdf">Download Resume</a>
              <div className="text-3xl flex gap-5 ">
                <span className="hover:text-green-500"> <a href="https://www.linkedin.com/in/udaykumar24" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin-square'></i></a></span>
                <span className="hover:text-green-500"><a href="https://github.com/Uday-2414" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github' ></i></a></span>
                <span className="hover:text-green-500"><a href="https://www.instagram.com/_.mr._.choco.__?igsh=MTdvZzQ0b3NwZWU5OQ==" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram-alt' ></i></a></span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
