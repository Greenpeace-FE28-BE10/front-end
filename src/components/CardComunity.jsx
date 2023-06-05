import React from "react";

const CardCom = () => {
    return(      
        <div className="flex flex-col max-w-[360px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5 ml-10 mb-5">
            <a href="#">
                <img className="rounded-t-lg" src="https://res.cloudinary.com/dbmiqiqf4/image/upload/v1685715653/Rectangle_34624149_r2dmkg.png " alt="" />
            </a>
            <div className="flex flex-col p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hijauin Medan</h5>
                </a>
                <p className="mb-0.5 font-normal text-gray-700 dark:text-gray-400">Leader : Asep Saifuddin</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Kota Medan dan sekitarnya</p>
                <a href="#" className="btn-gabung flex items-center justify-center w-[110px]  px-3 py-2 text-sm font-medium text-center text-white bg-[#52C41A] rounded-lg hover:bg-[#223A26] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Gabung
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>

    )

}

export default CardCom