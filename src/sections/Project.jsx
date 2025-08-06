import FoodImage from "../assets/images/Food.png";
import NetflixImage from "../assets/images/Netflix.png";
import Weather from "../assets/images/Weather.png";
import Quiz from "../assets/images/Quiz.png";

function Project() {
  return (
    <>
      <div id="project" className="p-1">
        <div className="flex flex-col items-center justify-center text-center px-10 py-10 mt-20 scroll-smooth">
          <p className="text-yellow-200">REAL-WORLD RESULTS</p>
          <p className="text-4xl font-bold">Featured Projects</p>
          <p className="text-gray-400">
            See how I transformed concepts into engaging digital experiences.
          </p>
        </div>
        <div>
          <div className="flex flex-col justify-center ml:10 mr:10 lg:ml-60  md:mr-20 md:ml-20 lg:mr-60 gap-10">
 
{/* project-1 */}
            <div className="flex flex-col-reverse md:flex-row px-5 py-5 bg-gray-800 rounded-lg w-full border border-gray-500 overflow-hidden sm:px-5 sm:py-5 gap-4">
              <div className="w-full md:w-1/2 flex flex-col justify-center gap-2 sm:w-full">
                <p className="text-yellow-200">REAL-WORLD RESULTS</p>
                <p className="font-bold text-3xl">Portfolio</p>
                <div className="flex flex-col gap-3 p-2 text-gray-400">
                  <span className="items-center">
                    <i className="bx bxs-circle text-green-500 text-sm pr-2"></i>A
                    Responsive Portfolio with updated details.
                  </span>
                  <span>
                    <i className="bx bxs-circle text-green-500 text-sm pr-2"></i>Technologies
                    used are React Js and Tailwind CSS
                  </span>
                </div>
                <button className="bg-white text-gray-950 font-semibold rounded-lg p-3 hover:bg-green-500 hover:text-white transition-colors">
                  Visit Live Site
                  <i className="bx bx-right-top-arrow-circle"></i>
                </button>
              </div>
              <div className="w-full md:w-1/2 flex items-start justify-center sm:w-full pb-2">
                <img
                  src={Weather}
                  className="mt-6 w-full max-w-[400px] object-contain border-2 border-gray-600 rounded-lg"
                  alt="Food"
                />
              </div>
            </div>
{/* project-2 */}
            <div className="flex flex-col-reverse md:flex-row px-5 py-5 bg-gray-800 rounded-lg w-full border border-gray-500 overflow-hidden sm:px-5 sm:py-5 gap-4">
              <div className="w-full md:w-1/2 flex flex-col justify-center gap-2 sm:w-full">
                <p className="text-yellow-200">2024</p>
                <p className="font-bold text-3xl">Netflix Clone</p>
                <div className="flex flex-col gap-3 p-2 text-gray-400">
                  <span className="items-center">
                    <i className="bx bxs-circle text-green-500 text-sm pr-2"></i>
                    A Highly interactive frontend design of Netflix Clone.
                  </span>
                  <span>
                    <i className="bx bxs-circle text-green-500 text-sm pr-2"></i>Technologies
                    used are HTML, CSS & JAVASCRIPT
                  </span>
                </div>
                <a href="https://github.com/Uday-2414/My-Projects/tree/main/Netflix%20clone" className="bg-white text-gray-950 text-center font-semibold rounded-lg p-3 hover:bg-green-500 hover:text-white transition-colors">
                  Visit Live Site
                  <i className="bx bx-right-top-arrow-circle"></i>
                </a>
              </div>
              <div className="w-full md:w-1/2 flex items-start justify-center sm:w-full">
                <img
                  src={NetflixImage}
                  className="mt-6 w-full max-w-[400px] object-contain border-2 border-gray-600 rounded-lg"
                  alt="Food"
                />
              </div>
            </div>
{/* project-3  */}
            <div className="flex flex-col-reverse md:flex-row px-5 py-5 bg-gray-800 rounded-lg w-full border border-gray-500 overflow-hidden sm:px-5 sm:py-5 gap-4">
              <div className="w-full md:w-1/2 flex flex-col justify-center gap-2 sm:w-full">
                <p className="text-yellow-200">2025</p>
                <p className="font-bold text-3xl">Foodie Choco Website</p>
                <div className="flex flex-col gap-3 p-2 text-gray-400 text-sm">
                  <span className="items-center">
                    <i className="bx bxs-circle text-green-500 text-sm pr-2"></i>A
                    Responsive Food ordering website with special offers.
                  </span>
                  <span>
                    <i className="bx bxs-circle text-green-500 text-sm pr-2"></i>Technologies
                    used are HTML , CSS and JavaScript .
                  </span>
                </div>
                <button className="bg-white text-gray-950 font-semibold rounded-lg p-3 hover:bg-green-500 hover:text-white transition-colors">
                  Visit Live Site
                  <i className="bx bx-right-top-arrow-circle"></i>
                </button>
              </div>
              <div className="w-full md:w-1/2 flex items-start justify-center sm:w-full">
                <img
                  src={FoodImage}
                  className="mt-6 w-full max-w-[400px] object-contain border-2 border-gray-600 rounded-lg"
                  alt="Food"
                />
              </div>
            </div>
{/* project-4  */}
            <div className="flex flex-col-reverse md:flex-row px-5 py-5 bg-gray-800 rounded-lg w-full border border-gray-500 overflow-hidden sm:px-5 sm:py-5 gap-4">
              <div className="w-full md:w-1/2 flex flex-col justify-center gap-2 sm:w-full">
                <p className="text-yellow-200">2025</p>
                <p className="font-bold text-3xl">Weather Dashboard</p>
                <div className="flex flex-col gap-3 p-2 text-gray-400">
                  <span className="items-center">
                    <i className="bx bxs-circle text-green-500 text-sm pr-2"></i>
                    A Weather dashboard designed for weather updates.
                  </span>
                  <span>
                    <i className="bx bxs-circle text-green-500 text-sm pr-2"></i>Technologies
                    used are HTML , CSS & JAVASCRIPT
                  </span>
                </div>
                <button className="bg-white text-gray-950 font-semibold rounded-lg p-3 hover:bg-green-500 hover:text-white transition-colors">
                  Visit Live Site
                  <i className="bx bx-right-top-arrow-circle"></i>
                </button>
              </div>
              <div className="w-full md:w-1/2 flex items-start justify-center sm:w-full">
                <img
                  src={Weather}
                  className="mt-6 w-full max-w-[400px] object-contain border-2 border-gray-600 rounded-lg"
                  alt="Food"
                />
              </div>
            </div>
{/* project-5  */}
             <div className="flex flex-col-reverse md:flex-row px-5 py-5 bg-gray-800 rounded-lg w-full border border-gray-500 overflow-hidden sm:px-5 sm:py-5 gap-4">
              <div className="w-full md:w-1/2 flex flex-col justify-center gap-2 sm:w-full">
                <p className="text-yellow-200">2025</p>
                <p className="font-bold text-3xl">Online Quiz Application</p>
                <div className="flex flex-col gap-3 p-2 text-gray-400">
                  <span className="items-center">
                    <i className="bx bxs-circle text-green-500 text-sm pr-2"></i>
                    Here randomly the quizes are generated.
                  </span>
                  <span>
                    <i className="bx bxs-circle text-green-500 text-sm pr-2"></i>Technologies
                    used are HTML , CSS & JAVASCRIPT.
                  </span>
                </div>
                <button className="bg-white text-gray-950 font-semibold rounded-lg p-3 hover:bg-green-500 hover:text-white transition-colors">
                  Visit Live Site
                  <i className="bx bx-right-top-arrow-circle"></i>
                </button>
              </div>
              <div className="w-full md:w-1/2 flex items-start justify-center sm:w-full">
                <img
                  src={Quiz}
                  className="mt-6 w-full max-w-[400px] object-contain border-2 border-gray-600 rounded-lg"
                  alt="Food"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Project;
