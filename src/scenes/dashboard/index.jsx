import { useRef } from "react"
import Header from "../../components/Header"
import ViewersLine from "../../components/ViewersLine"
import { viewersData } from "../../data/viewers_mockData"
import { useState } from "react"
import Chat from "../global/Chat"
import Player from "../global/VideoPlayer"
import { TextInput } from "../../components/TextInput"

const Dashboard = () => {
    const [secretKey, setSecretKey ] = useState({
        key: "7u<1KlNiee$c[-R_(4m@",
    })
    return(
        <div className="ml-20 mr-10">
            <Header title={"Dashboard"}/>
            <div className="grid grid-cols-[55%_45%] grid-rows-[40%_60%] gap-10 ">
                <div className="col-start-1 flex h-fit">  
                    <div className="w-1/2 aspect-video bg-secondary-500">
                        <Player url="https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8"/>
                    </div>
                    <div className="ml-5">
                        <ViewersLine data={viewersData}/>
                    </div>             
                </div>
                <div className=" col-start-1 h-fit mt-10">
                    <label htmlFor="secret-key" className=" text-xs">Your secret key, keep it safe!</label>
                    <TextInput className={"mt-2"} disabled id="secret-key" value={secretKey.key} isCopy isHidden/>
                </div>
                <div className=" top-0 row-start-1 col-start-2 row-span-2 
                w-4/5 h-[70vh] ml-auto mr-5">
                    <Chat className=""/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard