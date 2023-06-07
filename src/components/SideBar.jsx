import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
import { HiOutlineNewspaper, HiOutlineUserGroup } from "react-icons/hi2";
import { Link } from "react-router-dom";

const SideMenu = () => {

    const side =[
        {
            Text:'Artikel',
            path: '/artikeldash',
        },
        {
            Text:'Komunitas',
            path: '/komunitasdash',
        }
    ]

  const SideMenus = [
    { name: "", link: "#", icon: HiOutlineUserCircle },
    { name: "Artikel", link: "#", icon: HiOutlineNewspaper },
    { name: "Komunitas", link: "#", icon: HiOutlineUserGroup },
  ];

  const [open, setOpen] = useState(true);
  return (
    <div>
      <section className="flex gap-6">
        <div
          className={`bg-[#223A26] min-h-screen ${
            open ? "w-72" : "w-24"
          } duration-500 text-gray-100 px-4`}
        >
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              size={46}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div>
            <h1 className={`text-center text-[45px] 
                font-semibold text-[#52C41A] 
                ${!open && "hidden"}`}
            >
                    Hijauin.
            </h1>
          </div>
          <div className="mt-4 flex flex-col gap-4 relative items-center">
            <div className="flex items-center justify-center">
              <div style={{ width: "100px", height: "100px" }}>
                {React.createElement(SideMenus[0]?.icon, { size: "100%" })}
              </div>
            </div>
            <h2
              className={`text-center mt-2 ${!open && "hidden"}`}
            >
              {SideMenus[0]?.name}
            </h2>
            <div className={`mt-auto text-center ${!open && "hidden"}`}>
              <p>Nama Pengguna</p>
              <p>Tempat Tinggal</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-4 relative">
            {SideMenus?.slice(1).map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={`${
                  menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-[#0A1C0E] rounded-md`}
              >
                <div style={{ width: "32px", height: "32px" }}>
                  {React.createElement(menu?.icon, { size: "40" })}
                </div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
        {/* <div className="m-5 text-4xl text-gray-900 font-semibold">
            Daftar Artikel
        </div> */}
      </section>
      
    </div>
  );
};

export default SideMenu;
