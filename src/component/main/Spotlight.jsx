export const Spotlight = () => {
  return (
    <div className="hidden lg:block w-4/12 mt-20">
      <h2 className="text-white text-bold text-2xl mb-3">
        Spotlight Celebrities
      </h2>
      <hr />
      <div className=" mt-5 text-white hover:cursor-pointer hover:text-rose-500 transition-all duration-300">
        <div className="flex items-center gap-4">
          <img
            src="/images/spotlight1.jpg"
            alt="test"
            className="h-[70px] w-[70px] object-top object-cover"
          />
          <div className="flex flex-col">
            <span>Jake Gyllenhaal</span>
            <span className="text-gray-400">Actor</span>
          </div>
        </div>
      </div>

      <div className=" items-center gap-4 mt-5 text-white hover:cursor-pointer hover:text-rose-500 transition-all duration-300">
        <div className="flex items-center gap-4">
          <img src="/images/spotlight3.jpg" alt="test" className="rounded" />
          <div className="flex flex-col">
            <span>Samuel N. Jack</span>
            <span className="text-gray-400">Actor</span>
          </div>
        </div>
      </div>

      <div className=" items-center gap-4 mt-5 text-white hover:cursor-pointer hover:text-rose-500 transition-all duration-300">
        <div className="flex items-center gap-4">
          <img
            src="/images/spotlight2.webp"
            alt="test"
            className="h-[70px] w-[70px] object-top object-cover"
          />
          <div className="flex flex-col " >
            <span>Brad pitt</span>
            <span className="text-gray-400">Actor</span>
          </div>
        </div>
      </div>

      <div className="mb-10 items-center gap-4 mt-5 text-white  hover:text-rose-500 transition-all duration-300 cursor-pointer">
        <div className="flex items-center gap-4">
          <img src="/images/spotlight4.jpg" alt="test" className="rounded" />
          <div className="flex flex-col">
            <span>Beverly Griffin</span>
            <span className="text-gray-400">Actor</span>
          </div>
        </div>
      </div>

      <a href="/people" className="text-gray-400 text-bold text-xl hover:text-rose-500 transition-all duration-300 cursor-pointer">
        See All Celebrities &gt;
      </a>
    </div>
  );
};
