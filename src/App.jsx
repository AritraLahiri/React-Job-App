import Navbar from "../src/Components/Nav/Navbar"
import Hero from "../src/Components/Hero/Hero"
import HomeCard from "../src/Components/HomeCard/HomeCard"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCard />
      {/* <!-- Browse Jobs --> */}
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* <!-- Job Listing 1 --> */}
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Full-Time</div>
                  <h3 className="text-xl font-bold">Senior React Developer</h3>
                </div>

                <div className="mb-5">
                  We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript...
                </div>

                <h3 className="text-indigo-500 mb-2">10-12 LPA</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Bangalore , India
                  </div>
                  <a
                    href="job.html"
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Job Listing 2 --> */}
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Remote</div>
                  <h3 className="text-xl font-bold">Front-End Engineer (React)</h3>
                </div>

                <div className="mb-5">
                  Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion...
                </div>

                <h3 className="text-indigo-500 mb-2">8-10 LPA</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Miami, FL
                  </div>
                  <a
                    href="job.html"
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Job Listing 3 --> */}
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Remote</div>
                  <h3 className="text-xl font-bold">React.js Developer</h3>
                </div>

                <div className="mb-5">
                  Are you passionate about front-end development? Join our team in vibrant Hyderabad, India, and work on exciting projects that make a difference...
                </div>

                <h3 className="text-indigo-500 mb-2">5-7 LPA</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Hyderabad, India
                  </div>
                  <a
                    href="job.html"
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
        >
      </section>

    </>

  )
}

export default App