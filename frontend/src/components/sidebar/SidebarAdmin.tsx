import { UserGroupIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export enum NavbarAdmin {
    ADMIN, USERS
}

type SidebarProps = {
    active : NavbarAdmin
}

export default function SidebarAdmin({active}:SidebarProps){

    return(
        <div className="min-w-[240px] h-screen bg-[#272343] text-[#F3FBFB] fixed">
            {/* TITLE */}
            <h1 className="font-['Poppins'] font-bold text-[20px] text-center pt-[60px]">E-PROCTOR</h1>
            {/* LIST */}
            <div className="list-none mt-[34px] font-['Open Sans']">
                <NavLink to={"/admin-guru"} className={ active == NavbarAdmin.ADMIN ? 'flex ml-[27px] font-semibold p-[10px] rounded-l-[20px] mb-[35px] text-black bg-[#EFF0F3]' : 'flex ml-[27px] p-[10px] rounded-l-[20px] mb-[35px]'}>
                    <div className="flex">
                        <UserPlusIcon className="h-[20px] w-[20px] my-auto ml-[20px]"/>
                        <li className="ml-[20px] my-auto text-[14px]">Guru</li>
                    </div>
                </NavLink>
                
                <NavLink to={"/admin-users"} className={active == NavbarAdmin.USERS ? 'flex ml-[27px] font-semibold p-[10px] rounded-l-[20px] mb-[35px] text-black bg-[#EFF0F3]' : 'flex ml-[27px] p-[10px] rounded-l-[20px] mb-[35px]'}>
                    <div className="flex">
                       <UserGroupIcon className="h-[20px] w-[20px] my-auto ml-[20px]"/>
                        <li className="ml-[20px] my-auto text-[14px]">Users</li>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}