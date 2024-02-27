const Banner = () => {
    return (
        <div className="hero min-h-[600px] rounded-lg" style={{ backgroundImage: 'url(https://www.vcs.ca/wp-content/uploads/2020/04/events.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div>
                    <h1 className="mb-5 text-5xl font-bold max-w-lg text-indigo-100">One Step Closer To Your <span className="text-indigo-300 font-semibold">Happy Event</span></h1>
                    <p className="mb-5"></p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;

