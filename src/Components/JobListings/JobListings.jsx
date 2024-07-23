/* eslint-disable react/prop-types */
import JobListing from '../JobListing/JobListing'
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';

const JobListings = ({ isHomePage = false, title = "Recent Jobs" }) => {
    const [showJobs, setJobs] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch("/api/jobs");
                let data = await res.json();
                data = (isHomePage) ? data.slice(0, 3) : data;
                setJobs(data);
            }
            catch (e) {
                console.log("Error loading data" + e.Message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchJobs();
    })
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {title}
                </h2>
                {isLoading ? <Loader isLoading={isLoading} /> :
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {showJobs.map((job) =>
                                <JobListing job={job} key={job.id} />
                            )}
                        </div>
                    </>

                }

            </div>
        </section>
    )
}

export default JobListings