const Banner = () => {
    return (
        <div className="banner sm:py-60 pt-60 pb-36 -mt-32 flex flex-col justify-center items-center gap-10">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center font-extrabold">
                I Grow By Helping People In Need
            </h1>

            <div className="form-control">
                <div className="input-group">
                    <input type="text" placeholder="Search here..." className="input input-bordered focus:outline-none sm:w-96" />
                    <button className="btn btn-error text-white">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;