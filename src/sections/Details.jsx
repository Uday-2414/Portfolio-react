import { useState } from "react";

function Details() {
  const [activeTab, setActiveTab] = useState("experience");
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-10 px-4 md:px-20 lg:px-40 w-full mb-20">
        <div className="w-full md:w-1/3 flex flex-col gap-3">
        <p className="text-xl font-semibold pb-8 pt-8">Checkout my details which can explain my professional journey.</p>
          <button
            className={`btn-primary ${
              activeTab === "experience" ? "active" : ""
            }`}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </button>

          <button
            className={`btn-primary ${
              activeTab === "education" ? "active" : ""
            }`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>

          <button
            className={`btn-primary ${activeTab === "skills" ? "active" : ""}`}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
        </div>
        <div className="resume-box w-full md:w-2/3  ">
          <div
            className={`resume-detail experience ${
              activeTab === "experience" ? "active" : "hidden"
            } `}
          >
            <h2 className="text-3xl font-bold">
              My <span className="text-green-500">Experience</span>
            </h2>
            <div className="mt-5 h-96 overflow-y-auto scroll-visible scrollbar-green transition-all duration-300">
              <div className="flex flex-col gap-1 overflow-auto m-5 p-4 bg-gray-800">
                <p className="text-green-500">Jan 2025 - Feb 2025</p>
                <h3 className="text-xl font-bold">
                  Full Stack Developer - (on-site)
                </h3>
                <p className="">
                  {" "}
                  <span className="text-green-500 rounded-full bg-green-500 w-3 mr-2">
                    .
                  </span>
                  BICS GLOBAL
                </p>
                <p>
                  Gained hands-on experience in developing and maintaining web
                  applications using HTML, CSS and JavaScript. Collaborated with
                  the team to design and implement new features, ensuring a
                  responsive and user-friendly interface.
                </p>
              </div>

              <div className="flex flex-col gap-1 overflow-auto m-5 p-4 bg-gray-800">
                <p className="text-green-500">Feb 2025 - Mar 2025</p>
                <h3 className="text-xl font-bold">
                  Full Stack Developer - (off-site)
                </h3>
                <p className="">
                  {" "}
                  <span className="text-green-500 rounded-full bg-green-500 w-3 mr-2">
                    .
                  </span>
                  TECHNOHACKS
                </p>
                <p>
                  Developed and maintained web applications using React and
                  Node.js. Worked closely with the design team to create a
                  responsive and user-friendly interface. Implemented RESTful
                  APIs for seamless data integration.
                </p>
              </div>
              <div className="flex flex-col gap-1 overflow-auto m-5 p-4 bg-gray-800">
                <p className="text-green-500">2024</p>
                <h3 className="text-xl font-bold">Data Science</h3>
                <p className="">
                  {" "}
                  <span className="text-green-500 rounded-full mr-2 bg-green-500 w-3">
                    .
                  </span>
                  INTRAINZ
                </p>
                <p>
                  Worked as a Data Science Intern, where I gained hands-on
                  experience in data analysis and machine learning. Collaborated
                  with the team to develop predictive models and data
                  visualizations, enhancing decision-making processes.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`resume-detail education ${
              activeTab === "education" ? "active" : "hidden"
            }`}
          >
            <h2 className="text-3xl font-bold">
              My <span className="text-green-500">Education</span>
            </h2>
            <div className="mt-5 h-96 overflow-y-auto scroll-visible scrollbar-green transition-all duration-300">
              <div className="flex flex-col gap-1 overflow-auto m-5 p-4 bg-gray-800">
                <p className="text-green-500">2022 - present</p>
                <h3 className="text-xl font-bold">
                  Kingston Engineering College
                </h3>
                <p className="">
                  {" "}
                  <span className="text-green-500 rounded-full bg-green-500 w-3 mr-2">
                    .
                  </span>
                  BE - Computer Science and Engineering
                </p>
                <p>CGPA : 8.36</p>
              </div>

              <div className="flex flex-col gap-1 overflow-auto m-5 p-4 bg-gray-800">
                <p className="text-green-500">2020 - 2022</p>
                <h3 className="text-xl font-bold">
                  Sri Vidya Vikas Junior College
                </h3>
                <p className="">
                  {" "}
                  <span className="text-green-500 rounded-full bg-green-500 w-3 mr-2">
                    .
                  </span>
                  HSC
                </p>
                <p>PERCENTAGE - 81%</p>
              </div>

              <div className="flex flex-col gap-1 overflow-auto m-5 p-4 bg-gray-800">
                <p className="text-green-500">2020</p>
                <h3 className="text-xl font-bold">Sir CRR High School</h3>
                <p className="">
                  {" "}
                  <span className="text-green-500 rounded-full bg-green-500 w-3 mr-2">
                    .
                  </span>
                  SSC
                </p>
                <p>PERCENTAGE - 95%</p>
              </div>
            </div>
          </div>
          <div
            className={`resume-detail skills ${
              activeTab === "skills" ? "active" : "hidden"
            }`}
          >
            <h2 className="text-3xl font-bold">
              My <span className="text-green-500">Skills</span>
            </h2>
            <p>These are the skills I have acquired over the years:</p>
            <div className="mt-5 h-96 overflow-y-auto scroll-visible scrollbar-green transition-all duration-300">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
                <span className="icon-button">
                  <i class="bx bxl-python"></i> <span className="text-xl">Python</span>
                </span>
                <span className="icon-button">
                  <i class="bx bxl-javascript"></i><span className="text-xl">Javascript</span>
                </span>
                <span className="icon-button">
                  <i class="bx bxl-css3"></i><span className="text-xl">CSS</span>
                </span>
                <span className="icon-button">
                  <i class="bx bxl-nodejs"></i><span className="text-xl">Node js</span>
                </span>
                <span className="icon-button">
                  <i class="bx bxl-react"></i><span className="text-xl">React</span>
                </span>
                <span className="icon-button">
                  <i class="bx bxl-html5"></i><span className="text-xl">HTML</span>
                </span>
                <span className="icon-button">
                  <i class="bx bxl-bootstrap"></i><span className="text-xl">Bootstrap</span>
                </span>
                <span className="icon-button">
                  <i class="bx bxl-tailwind-css"></i><span className="text-xl">Tailwind CSS</span>
                </span>
                <span className="icon-button">
                  <i class="bx bxl-mongodb"></i><span className="text-xl">MongoDB</span>
                </span>
                <span className="icon-button">
                  <i class="bx bxl-postgresql"></i><span className="text-xl">Postgresql</span>
                </span>
                <span className="icon-button">
                  <i class="bx bxl-github"></i><span className="text-xl">Github</span>
                </span>
                <span className="icon-button">
                  <i class="bx bxl-visual-studio"></i><span className="text-xl">VS Code</span>
                </span>
                <span className="icon-button">
                  <i class="bx bxl-figma"></i><span className="text-xl">Figma</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
