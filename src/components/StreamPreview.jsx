import { Link } from "react-router-dom";
import {TbPointFilled} from "react-icons/tb"; 

const StreamPreview = ({stream}) => {
    return (
        <Link to={"/watch?s=" + stream.id} className="
         w-1/5 flex flex-col 
         align-bottom hover:scale-105 group duration-150">
            <div className="videobox group-hover:shadow-streamPreviewHover
            group-hover:bg-secondary-600 
            transition-all flex justify-center relative">
                <img src={stream.thumbnailUrl} alt="" />
                <div className=" 
                absolute bg-secondary-500 p-1 
                rounded-tl-lg bottom-0 right-0
                 text-xs flex items-center">
                    <TbPointFilled className=" text-live"/>
                    {stream.viewers}
                 </div>
            </div>
            <div className="text-gray-200 bg-primary-500 bg-opacity-60 w-full p-2" >
                <h2 className=" text-xs font-source-sans-pro font-medium">{stream.title}</h2>
                <h5 className=" text-teal-500 text-xs font-mono font-light">{stream.author}</h5>
            </div>
        </Link>
    );
};

export default StreamPreview;