import Hero from "../Components/Hero/Hero"
import HomeCard from "../Components/HomeCard/HomeCard"
import JobListings from "../Components/JobListings/JobListings"
import ViewAll from "../Components/ViewAll/ViewAll"

const HomePage = () => {
    return (
        <>
            <Hero />
            <HomeCard />
            <JobListings isHomePage={true} />
            <ViewAll />
        </>
    )
}

export default HomePage