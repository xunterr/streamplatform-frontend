import { IoSettingsSharp, IoHome, IoAnalytics } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { BsBroadcast } from "react-icons/bs";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom"
import Button from "../../components/Button";
import { useEffect } from "react";
import { useSignOut } from "react-auth-kit";

const Item = ({ to, icon, selected, onClick, tooltip, className}) => {
    return (
        <li
         className="mb-4">
            <Link onClick={() => {
            onClick(to)}} 
            to={to} className={`flex items-center group`}>
                <Button className={`${selected===to ? 'border rounded-md ease-in': "border-none"}
                ${className} h-10 w-10 p-0
                border-teal-500 border-2 round-button`}
                inner={icon}/>
            <span className="tooltip group-hover:scale-100 left-16">{tooltip}</span>
            </Link>
        </li>
    )
}

const Sidebar = () => {
    const getLive = () => {
        return window.localStorage.getItem("isLive") === "true"
    }
    const location = useLocation()
    const lastActivePage = Number(localStorage.getItem("lastActivePage"))
    const [isLive, setIsLive] = useState(getLive())
    const [selected, setSelected] = useState(lastActivePage || "/home")
    const signOut = useSignOut()

    useEffect(() => {
        window.localStorage.setItem("lastActivePage", location.pathname)
        setSelected(location.pathname)
    }, [location])

    useEffect(()=>{
        window.addEventListener('liveChange', () => {
            setIsLive(getLive())
        })
    }, [])

    return (
        <div className={`h-screen w-14 m-0 pt-4 
        flex flex-col gap-y-12 justify-between items-center
        bg-secondary-500 text-white shadow-lg z-50`}>   
            <ul>
                <Item icon={<IoHome size="22"/>}
                id={0} onClick={setSelected} 
                tooltip="Home" to="/home" selected={selected}/>

                <Item icon={<HiUserGroup size="22"/>}
                id={1} onClick={setSelected} 
                tooltip="Social" to="/social" selected={selected}/>

                {isLive ? 
                    <Item icon={<IoAnalytics size="22"/>} 
                    id={2} onClick={setSelected} 
                    className={"bg-live"}
                    tooltip="Dashboard" to={"/dashboard"} selected={selected}/>
                    :
                    <Item icon={<BsBroadcast size="22"/>} 
                    id={2} onClick={setSelected} 
                    tooltip="Go live" to={"/start"} selected={selected}/>
                }
                
            </ul>
            <ul>
                <Item icon={<MdOutlineAccountCircle size="26"/>} 
                id={3} onClick={setSelected} 
                tooltip="Account" to="/account" selected={selected}/>

                <Item icon={<IoSettingsSharp size="22"/>} 
                id={4} onClick={setSelected} 
                tooltip="Settings" to="/settings" selected={selected}/>

                <Item icon={<IoMdLogOut size="22"/>} 
                id={5} onClick={() => signOut()} 
                tooltip="Log Out" selected={selected}/>
            </ul>
        </div>
    );
};

export default Sidebar;