import { useNavigate, useSearchParams } from "react-router-dom";
import Player from "../global/VideoPlayer";
import Chat from "../global/Chat";
import { useEffect } from "react";
import streamApi from "../../api/streamApi";
import useApi from "../../api/useApi";
import Avatar from "boring-avatars";
import { Link } from "react-router-dom/dist";
import Tag from "../../components/Tag";

const Description = ({inner}) => {
    return(
        <div className=" bg-secondary-800 rounded-lg mt-5 w-full p-2">
            <h2 className="text-sm font-mono m-5 mb-2">
                Hello guys today i will play FORTNITE!! New Season is Available. 
                
            </h2>
        </div>
    )
}

const AuthorInfo = ({author}) => {
    return(
        <>
        <Link to={`/profile?id=${author}`} className="flex items-center w-max gap-2 m-4">
            <Avatar
                size={40}
                name="biba"
                variant="beam"
                colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
            />
            <text className="text-l  text-teal-500">{author}</text>
        </Link>
        
        </>
    )
}

export const Watch = () => {
    const [params] = useSearchParams()
    const nav = useNavigate()
    const streamId = params.get("s")
    const getStream = useApi(streamApi.getStream)
    const stream = {
        id: {streamId},
        title: getStream.data?.title,
        description: getStream.data?.body,
        author: "bob",
        tags: ["fortninte", "new", "season", "free-skins"]
    }
    useEffect(()=>{
        if(!streamId){
            nav("/home")
        }
        getStream.request(streamId)
    }, [])
    return(
        <div className="grid grid-cols-[60%_40%] ml-20 mr-20 mt-10">
            <div className="flex flex-col">
                <Player url={"http://78.26.128.59:9876/play/218/index.m3u8"}/>
                <h2 className="text-xl m-5 mb-2">{stream.title}</h2>
                <div className="flex ml-5 gap-2">
                    {stream.tags.map((t, i) => (
                        <Tag key={i} text={t}/>
                    ))}
                </div>
                <AuthorInfo author={stream.author}/>
                
                <Description inner={" Lorem asiddddddddddddddddddddddddddddddddddddddddd"} />
            </div>
            <div className="top-0 row-start-1 col-start-2 row-span-2 
                w-4/5 h-[70vh] ml-auto mr-5">
                <Chat className={""}/>
            </div>
        </div>
    )
};