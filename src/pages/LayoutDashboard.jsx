import React from "react";
import { Outlet } from 'react-router-dom';
import SideMenu from "../components/DashboardSideMenu";

const DashboardLayout = () =>{
    return(
        <>
            <main>
                <SideMenu></SideMenu>
            </main>
        
        </>
    )

}

export default DashboardLayout;