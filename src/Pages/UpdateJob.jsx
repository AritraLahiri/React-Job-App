import { toast } from "react-toastify";
import Loader from "../Components/Loader/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UpdateJob = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [salary, setSalary] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companyDescription, setCompanyDescription] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactPhone, setContactPhone] = useState("");

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await fetch(`/api/job/${id}`);
                const data = await res.json();
                setTitle(data[0].title);
                setType(data[0].type);
                setDescription(data[0].description);
                setSalary(data[0].salary);
                setCompanyName(data[0].companyName);
                setCompanyDescription(data[0].companyDescription);
                setContactEmail(data[0].contactEmail);
                setContactPhone(data[0].contactPhone);
                setLocation(data[0].location)
            }
            catch (e) {
                console.log("Error loading data" + e.Message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchJob();
    }, [id])
    const updateDataOnServer = async () => {
        try {
            setLoading(prevState => !prevState);
            const job = {
                id,
                title,
                type,
                description,
                location,
                salary,
                companyName,
                companyDescription,
                contactEmail,
                contactPhone

            }
            await fetch(`/api/job/${id}`, {
                method: "PATCH",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(job)
            })
            toast.success("Job updated successfully !!")
            navigate(`/job/${id}`);
        }
        catch (e) {
            console.log("Error updating data to server " + e.Message);
        }
        finally {
            setLoading(prevState => !prevState);
        }
        return;
    }

    return (
        (loading) ? <Loader isLoading={loading} /> :
            <>
                <section className="bg-indigo-50">
                    <div className="container m-auto max-w-2xl py-24">
                        <div
                            className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
                        >
                            <form onSubmit={updateDataOnServer}>
                                <h2 className="text-3xl text-center font-semibold mb-6">Update Job</h2>

                                <div className="mb-4">
                                    <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                                    >Job Type</label
                                    >
                                    <select
                                        id="type"
                                        name="type"
                                        className="border rounded w-full py-2 px-3"
                                        value={type}
                                        onChange={e => setType(e.target.value)}
                                        required
                                    >
                                        <option value="Full-Time">Full-Time</option>
                                        <option value="Part-Time">Part-Time</option>
                                        <option value="Remote">Remote</option>
                                        <option value="Internship">Internship</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2"
                                    >Job Listing Name</label
                                    >
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
                                        className="border rounded w-full py-2 px-3 mb-2"
                                        placeholder="eg. Beautiful Apartment In Miami"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="description"
                                        className="block text-gray-700 font-bold mb-2"
                                    >Description</label
                                    >
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={description}
                                        onChange={e => setDescription(e.target.value)}
                                        className="border rounded w-full py-2 px-3"
                                        rows="4"
                                        placeholder="Add any job duties, expectations, requirements, etc"
                                    ></textarea>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                                    >Salary</label
                                    >
                                    <select
                                        id="salary"
                                        name="salary"
                                        value={salary}
                                        onChange={e => setSalary(e.target.value)}
                                        className="border rounded w-full py-2 px-3"
                                        required
                                    >
                                        <option value="Under $50K">Under $50K</option>
                                        <option value="$50K - 60K">$50K - $60K</option>
                                        <option value="$60K - 70K">$60K - $70K</option>
                                        <option value="$70K - 80K">$70K - $80K</option>
                                        <option value="$80K - 90K">$80K - $90K</option>
                                        <option value="$90K - 100K">$90K - $100K</option>
                                        <option value="$100K - 125K">$100K - $125K</option>
                                        <option value="$125K - 150K">$125K - $150K</option>
                                        <option value="$150K - 175K">$150K - $175K</option>
                                        <option value="$175K - 200K">$175K - $200K</option>
                                        <option value="Over $200K">Over $200K</option>
                                    </select>
                                </div>

                                <div className='mb-4'>
                                    <label className='block text-gray-700 font-bold mb-2'>
                                        Location
                                    </label>
                                    <input
                                        type='text'
                                        id='location'
                                        name='location'
                                        value={location}
                                        onChange={e => setLocation(e.target.value)}
                                        className='border rounded w-full py-2 px-3 mb-2'
                                        placeholder='Company Location'
                                        required
                                    />
                                </div>

                                <h3 className="text-2xl mb-5">Company Info</h3>

                                <div className="mb-4">
                                    <label htmlFor="company" className="block text-gray-700 font-bold mb-2"
                                    >Company Name</label
                                    >
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={companyName}
                                        onChange={e => setCompanyName(e.target.value)}
                                        className="border rounded w-full py-2 px-3"
                                        placeholder="Company Name"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="company_description"
                                        className="block text-gray-700 font-bold mb-2"
                                    >Company Description</label
                                    >
                                    <textarea
                                        id="company_description"
                                        name="company_description"
                                        value={companyDescription}
                                        onChange={e => setCompanyDescription(e.target.value)}
                                        className="border rounded w-full py-2 px-3"
                                        rows="4"
                                        placeholder="What does your company do?"
                                    ></textarea>
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="contact_email"
                                        className="block text-gray-700 font-bold mb-2"
                                    >Contact Email</label
                                    >
                                    <input
                                        type="text"
                                        id="contact_email"
                                        name="contact_email"
                                        value={contactEmail}
                                        onChange={e => setContactEmail(e.target.value)}
                                        className="border rounded w-full py-2 px-3"
                                        placeholder="Email address for applicants"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="contact_phone"
                                        className="block text-gray-700 font-bold mb-2"
                                    >Contact Phone</label
                                    >
                                    <input
                                        type="tel"
                                        id="contact_phone"
                                        name="contact_phone"
                                        value={contactPhone}
                                        onChange={e => setContactPhone(e.target.value)}
                                        className="border rounded w-full py-2 px-3"
                                        placeholder="Optional phone for applicants"
                                    />
                                </div>

                                <div>
                                    <button
                                        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Update Job
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </>
    )
}

export default UpdateJob