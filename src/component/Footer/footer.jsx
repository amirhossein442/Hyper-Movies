export const Footer = () => {
  return (
    <div
      className="flex bottom-0 right-0  lg:h-96 text-slate-300"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgb(2 13 24/ 50%), rgb(2 13 24/ 75%), rgb(0 0 0/ 90%)),url('/images/bg-cinema.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        objectFit: "bottom",
      }}
    >
      <div className="flex flex-col px-10 py-5 lg:grid lg:grid-cols-5 lg:gap-20 lg:py-20 lg:px-16">
        <div className=" justify-center">
          <div className="flex items-center">
            <h1 className="text-2xl mr-12">
              Hyper<span className="text-rose-600 font-bold">Movies</span>
              <p className="text-xs text-center text-slate-400">Film review</p>
            </h1>
          </div>
          <p className="mt-16">5th Avenue st, manhattan New York, NY 10001</p>
          <p className="mt-5">Call us: (+01) 202 342 6789</p>
        </div>

        <div className="flex flex-col ml-10 leading-8">
          <p className="font-bold text-white mb-5 mt-8 lg:mt-0">Resources</p>
          <a href="#" className="hover:text-rose-600 ">
            About
          </a>
          <a href="#" className="hover:text-rose-600">
            Blockbuster
          </a>
          <a href="#" className="hover:text-rose-600">
            Contact Us
          </a>
          <a href="#" className="hover:text-rose-600">
            Forums
          </a>
          <a href="#" className="hover:text-rose-600">
            Blog
          </a>
          <a href="#" className="hover:text-rose-600">
            Help Center
          </a>
        </div>

        <div className="flex flex-col ml-10 leading-8">
          <p className="font-bold text-white mb-5 mt-8 lg:mt-0">Legal</p>
          <a href="#" className="hover:text-rose-600">
            Terms of Use
          </a>
          <a href="#" className="hover:text-rose-600">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-rose-600">
            Security
          </a>
        </div>

        <div className="flex flex-col ml-10 leading-8">
          <p className="font-bold text-white mb-5 mt-8 lg:mt-0">Account</p>
          <a href="#" className="hover:text-rose-600">
            My Account
          </a>
          <a href="#" className="hover:text-rose-600">
            Watchlist
          </a>
          <a href="#" className="hover:text-rose-600">
            Collections
          </a>
          <a href="#" className="hover:text-rose-600">
            User Guide
          </a>
        </div>

        <div className="flex flex-col lg:-ml-10 leading-8 lg:w-56 text-sm">
          <p className="font-bold text-white mb-5 mt-8 lg:mt-0">Newsletter</p>
          <p className="flex">
            Subscribe to our newsletter system now to get latest news from us.
          </p>
          <input
            type="text"
            placeholder="Enter your email..."
            className="bg-transparent border border-slate-300 px-3 rounded mt-3"
          />
          <a href="#" className="mt-4 text-rose-600 font-bold">
            SUBSCRIPE NOW &gt;
          </a>
        </div>
      </div>
    </div>
  );
};
