import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { toast } from "react-toastify";

const JobDetail = () => {
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams()
    const navigate = useNavigate()
    const deleteJobFromServer = async () => {
        setLoading(true);
        const confirm = window.confirm("Are you sure you wanna delete the job ?");
        if (!confirm) return;
        try {
            await fetch(`/api/job/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': "application/json"
                }
            })
            toast.success("Job deleted successfully !!")
            navigate("/jobs");
        }
        catch (e) {
            console.log("Error deleting data" + e.Message);
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await fetch(`/api/job/${id}`);
                const data = await res.json();
                setJob(data);
            }
            catch (e) {
                console.log("Error loading data" + e.Message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchJob();
    })
    return loading ? <Loader /> :
        (
            <>
                <section>
                    <div className="container m-auto py-6 px-6">
                        <Link
                            to="/jobs"
                            className="text-indigo-500 hover:text-indigo-600 flex items-center"
                        >
                            <FaArrowLeft className="mr-5" /> Back to Job Listings
                        </Link>
                    </div>
                </section>

                <section className="bg-indigo-50">
                    <div className="container m-auto py-10 px-6">
                        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                            <main>
                                <div
                                    className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
                                >
                                    <div className="text-gray-500 mb-4">{job.type}</div>
                                    <h1 className="text-3xl font-bold mb-4">
                                        {job.title}
                                    </h1>
                                    <div
                                        className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                                    >
                                        <FaMapMarker className="text-orange-700 mr-2" />
                                        <p className="text-orange-700">{job.location}</p>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                    <h3 className="text-indigo-800 text-lg font-bold mb-6">
                                        Job Description
                                    </h3>

                                    <p className="mb-4">
                                        {job.description}
                                    </p>

                                    <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

                                    <p className="mb-4">{job.salary} / Year</p>
                                </div>
                            </main>

                            {/* <!-- Sidebar --> */}
                            <aside>
                                {/* <!-- Company Info --> */}
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-bold mb-6">Company Info</h3>

                                    <h2 className="text-2xl">{job.company.name}</h2>

                                    <p className="my-2">
                                        {job.company.description}
                                    </p>

                                    <hr className="my-4" />

                                    <h3 className="text-xl">Contact Email:</h3>

                                    <p className="my-2 bg-indigo-100 p-2 font-bold">
                                        {job.company.contactEmail}
                                    </p>

                                    <h3 className="text-xl">Contact Phone:</h3>

                                    <p className="my-2 bg-indigo-100 p-2 font-bold"> {job.company.contactPhone}</p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                    <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                                    <a
                                        href="/add-job.html"
                                        className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                    >Edit Job</a
                                    >
                                    <button
                                        onClick={deleteJobFromServer}
                                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                    >
                                        Delete Job
                                    </button>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>


            </>

        )
}

export default JobDetail