import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const SingleData = ({ service }) => {
  const { id, name, image, price, description } = service;
  return (
    <div className="card card-compact bg-base-100 shadow-xl mb-10" >
      <figure><img className="w-full" src={image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h3 className='text-2xl font-semibold'>{price}</h3>
        <p className='text-lg'>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/services/${id}`}><button className="btn btn-primary">Show More</button></Link>
        </div>
      </div>
    </div >
  );
};

export default SingleData;

SingleData.propTypes = {
  service: PropTypes.object
}

