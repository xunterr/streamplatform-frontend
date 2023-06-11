import { IoSend } from "react-icons/io5";
import * as yup from "yup";
import { useEffect, useRef, useState } from "react";
import { TextInput } from "../../components/TextInput";
import { useFormik } from "formik";
import { messagesData } from "../../data/chat_mockData";
import ReactLoading from 'react-loading';
import ScrollableFeed from "react-scrollable-feed";
import useApi from "../../api/useApi";
import chatApi from "../../api/chatApi";

const Messages = ({ messages }) => {  
    return (
        <ScrollableFeed className="flex flex-col scrollbar-thin overflow-x-hidden w-full">
            {messages?.slice(messages.length-31, messages.length).map((message, index) => (
                <ChatMessage key={index} index={index} author={"DarkEmojiKiller1234"} text={message.body}/>
            ))}
        </ScrollableFeed>
    );
  };

const ChatMessage = ({index, text, author}) => {
    const message = {
        author: author,
        text: text,
        timestamp: new Date()
    } 

    return (
        <div className={` ${index % 2 ? "bg-secondary-700" : "bg-secondary-600"} 
         p-3 text-[10px] `}>
            <span className="pr-2 text-teal-500">{message.timestamp.getHours()}:{message.timestamp.getMinutes()}</span>
            <span className="pr-2 text-gray-200 font-mono font-medium">{message.author}:</span>
            <span className="text-gray-300">{message.text}</span>
        </div>
    );  
};

const Chat = () => {
    const [isBanned, setBanned] = useState(false) 
    const getMessages = useApi(chatApi.getMessages)
    const [messages, setMessages] = useState([])

    useEffect(()=>{
        getMessages.request()
        setMessages(getMessages.data)
        console.log(getMessages.data)
    }, [])

    const handleFormSubmit = (values, actions)=>{
        messages.push({
            author: "me",
            body: values.text
        })
        setMessages(messages)
        actions.resetForm()
    }

    const {values, handleChange, handleSubmit} = useFormik({
        initialValues:{
            text: '',
        },
        validationSchema: yup.object().shape({
            text: yup.string().required("required")
        }),
        onSubmit:handleFormSubmit,
    })

    return (
        <div className=" w-full h-full bg-secondary-800 p-5
        flex flex-col justify-between items-center gap-2 rounded-lg">
            <h5 className="p-2 w-full bg-inherit">Chat</h5>
            {getMessages.loading && (
                <ReactLoading type="bars" color="#03c988" delay={100}/> 
            )}
            <Messages messages={getMessages.data}/>
            <form className=" w-full h-fit flex items-center gap-1"
             onSubmit={handleSubmit}>
                <TextInput id="text" onChange={handleChange} className="min-w-0 h-8 w-full" placeholder="message here"
                disabled={isBanned} value={values.text} autoComplete="off"/>
                <button className={"button w-8 h-8"} type="submit">
                    <IoSend/>
                </button>
            </form>
        </div>
    );
};

export default Chat;