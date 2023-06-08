const ArtikelCard = () => {
    return (
      <div className="h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
          <img
            className="rounded-t-lg w-[300px] h-[200px]"
            src="https://res.cloudinary.com/dbmiqiqf4/image/upload/v1682821489/samples/hijauin/xavier-balderas-cejudo-kxIE049IZ1g-unsplash_grqxdi.jpg"
            alt=""
          />
        </a>
        <div className="flex flex-col">
          <a href="#">
            <p className="text-2xl w-[300px] m-2 font-bold tracking-tight text-gray-900">
              Lapisan es terus mencair! Apa dampaknya?
            </p>
          </a>
          <div className="flex w-[270px] m-2 justify-between items-center">
            <p className=" font-normal text-gray-700 dark:text-gray-400">11/02/2023</p>
            <a
              href="#"
              className="flex inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#00C22C] bg-[#C9F4D2] rounded-lg hover:bg-[#00C22C] hover:text-[#C9F4D2] focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Read more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default ArtikelCard;
  