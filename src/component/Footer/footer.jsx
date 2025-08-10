export const Footer = () => {
  return (
    <footer
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
          <div className="relative">
            <input
            
              type="text"
              placeholder="Enter your email..."
              className="bg-transparent border border-slate-300 px-3  rounded mt-3"
            />

            <a href="#" >
              <svg
                className="absolute right-12 top-5 hover:text-rose-500 "
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
            </a>
          </div>

          <a href="#" className="mt-4 text-rose-600 font-bold">
            SUBSCRIPE NOW &gt;
          </a>
        </div>
      </div>
    </footer>
  );
};
