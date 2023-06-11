import { IoAnalytics, IoNotifications, IoSearchOutline } from "react-icons/io5";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Topbar = () => {
    return (
        <div className=" w-full sticky top-0 flex 
        justify-between p-2 bg-transparent 
        backdrop-blur-md backdrop-grayscale-[.7] bg-opacity-75 z-40">
            <div/>
            <div className=" flex items-center w-2/6 gap-2">
                <input className="input m-0 flex-1"/>
                <Button className="h-9 w-9" inner={<IoSearchOutline />}/>
            </div>
            <div className="flex items-center gap-0 mr-9">
                <Button className={" h-9 w-9 bg-transparent"} inner={<IoNotifications/>}/>
            </div>
        </div>
    );
};

export default Topbar;