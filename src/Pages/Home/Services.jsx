import { useEffect, useState } from "react";
import SingleData from "./SingleData";

const Services = () => {
    const [services, setService] = useState([]);
    const [dataLength, setDataLength] = useState(6);

    useEffect(() => {
        fetch('social.json')
            .then(res => res.json())
            .then(data => setService(data.services))
    }, [])

    return (
        <div className="container mx-auto mt-10 pb-14">
            <h1 className="text-4xl font-semibold text-center mb-7">Our Services</h1>
            <div className="grid md:grid-cols-2 p-4 md:p-7 lg:grid-cols-3 gap-5 mt-10">
                {
                    services.slice(0, dataLength).map(service => <SingleData key={service.id} service={service}></SingleData>)
                }
            </div>
            <div className={services.length === dataLength ? 'hidden' : 'flex justify-center'}>
                <button onClick={() => setDataLength(services.length)} className="btn btn-primary w-1/4">Show More</button>
            </div>
        </div>
    );
};

export default Services;