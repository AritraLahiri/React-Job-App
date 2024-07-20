import Navbar from "../src/Components/Nav/Navbar"
import Hero from "../src/Components/Hero/Hero"
import HomeCard from "../src/Components/HomeCard/HomeCard"
import JobListings from "../src/Components/JobListings/JobListings"
import ViewAll from "../src/Components/ViewAll/ViewAll"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCard />
      <JobListings />
      <ViewAll />
    </>

  )
}

export default App