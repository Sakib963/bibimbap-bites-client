const Footer = () => {
  return (
    <div className=" footer-bg text-white">
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:w-3/4 mx-auto px-4 lg:px-0 footer py-10">
        <div className="col-span-2 lg:col-span-1">
          <h2 className="normal-case lg:text-3xl text-xl font-semibold lg:font-bold text-black w-full">
            Bibimbap<span className="text-white ps-1">Bites</span>
          </h2>
          <p>Experience Korean Food <br />
          like Never Before</p>
        </div>
        <div>
          <span className="text-black text-lg font-bold">Services</span>
          <a className="link link-hover">Table service</a>
          <a className="link link-hover">Buffet</a>
          <a className="link link-hover">Drive-thru</a>
          <a className="link link-hover">Takeout</a>
        </div>
        <div>
          <span className="text-black text-lg font-bold">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Menu</a>
          <a className="link link-hover">Career</a>
        </div>
        <div>
          <span className="text-black text-lg font-bold">Healthy Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span>Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="absolute top-0 right-0 rounded-l-none bg-[#FF4A22] py-[14px] px-6 rounded-lg text-white hover:scale-105 hover:ease-in hover:duration-200 hover:transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
