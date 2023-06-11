import { useEffect } from "react";
import streamApi from "../../api/streamApi";
import useApi from "../../api/useApi";
import Header from "../../components/Header";
import StreamPreview from "../../components/StreamPreview";
import { Greeting } from "../../components/Greeting";
import ReactLoading from 'react-loading';
import { useSignOut } from "react-auth-kit";

const Home = () => {
    const getStreams = useApi(streamApi.getStreams)
    
    useEffect(()=>{
        getStreams.request()
    }, [])
    return (
        <div className="">
            <Header className="ml-20" title={"Home"} subtitle={<Greeting/>}/>
            <div className="flex flex-col items-center w-full mb-40">
                <h1 className="text-2xl text-gray-200">Live now</h1>
                <div className="mt-16 flex gap-4 flex-wrap w-full justify-center">
                    {getStreams.loading && (
                        <ReactLoading type="bars" color="#03c988"/>
                    )}
                    {getStreams.data?.slice(0, 10).map((stream, id) => {
                        stream.author="bob"
                        stream.viewers=stream.title.length
                        return <StreamPreview key={stream.id} stream={stream} preview={stream.thumbnailUrl}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;