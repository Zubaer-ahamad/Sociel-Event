import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";


const Details = () => {
    const { services } = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const service = services.find(service => service.id === intId);
    const { name, image, price, description } = service;

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className="container mx-auto pr-4 pl-5 pt-14 pb-10">
            <div>
                <div className="card card-compact w-1/2 bg-base-100 shadow-xl mb-10 mx-auto" >
                    <figure><img className="w-full" src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <h3 className='text-2xl font-semibold'>{price}</h3>
                        <p className='text-lg'>{description}</p>
                        <div className="card-actions justify-end">
                            <Link onClick={handleGoBack}><button className="btn btn-primary">Go Back</button></Link>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default Details;
