/* eslint-disable react/prop-types */
const Banner = ({ handleSearch }) => {

    return (
        <div style={{ backgroundImage: `url('/banner.png')`, backgroundPosition: `center center`, backgroundSize: `cover` }} className="banner sm:py-60 pt-60 pb-36 -mt-32 flex flex-col justify-center items-center gap-10">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center font-extrabold">
                I Grow By Helping People In Need
            </h1>

            <div className="form-control">
                <form onSubmit={handleSearch} className="input-group">
                    <input name="search" id="search-input" type="text" placeholder="Search here..." className="input input-bordered focus:outline-none sm:w-96" />

                    <input placeholder="Search" type="submit" style={{ background: `#ff444a` }} className="btn text-white border-none"/> 
                </form>
            </div>
        </div>
    );
};

export default Banner;