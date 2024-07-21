import { Outlet } from "react-router-dom"
import Navbar from "../Components/Nav/Navbar"

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default MainLayout