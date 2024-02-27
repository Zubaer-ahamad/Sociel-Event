import PropTypes from 'prop-types'

const Category = ({ category }) => {
    const { title, image_logo, description } = category;
    // console.log(category);
    return (
        <div className="card card-compact bg-base-100 shadow-xl mb-10">
            <figure><img className='w-full' src={image_logo} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Category;

Category.propTypes = {
    category: PropTypes.object
}