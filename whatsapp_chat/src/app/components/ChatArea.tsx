import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";
import Image from "next/image";

interface Users {
    name: string;
    lastMessage: string;
    timestamp: string;
}

interface ChatAreaProps {
    selectedConversation: Users | null;
}

export default function ChatArea({ selectedConversation }: ChatAreaProps) {
    if (!selectedConversation) {
        // return <div className=" flex flex-[0.7] items-center justify-center text-gray-500">
        //     <Image src="/EmptyWhatsapp.webp" alt="WhatsApp Chat" width={500} height={500}/>
        // </div>;
        return <div className=" flex flex-[0.7] items-center font-semibold text-2xl justify-center text-gray-500">Select a conversation to start chatting..</div>;
    }

    return (
        <div className="chatArea-container flex flex-col flex-[0.7] ">
            <div className="chatArea-header flex items-center gap-2 bg-white p-2 mx-3 mb-1 mt-3 rounded-lg shadow-lg">
                <p className="con-icon flex justify-center items-center bg-[#d9d9d9] font-bold text-white h-8 w-8 p-[2px] justify-self-center self-center"
                    style={{ gridArea: "1/1/3/2", fontFamily: "sans-serif", borderRadius: "50%" }}>
                    {selectedConversation.name[0] ?? "?"}
                </p>
                <div className="ml-2 header-text flex flex-col justify-content-center flex-1">
                    <p className="con-title font-bold" style={{ gridArea: "1/2/2/4", fontFamily: "sans-serif", color: "rgba(0, 0, 0, 0.54)" }}>
                        {selectedConversation.name ?? "Unknown"} 
                    </p>
                    <p className="con-timeStamp justify-self-end text-sm" style={{ fontFamily: "sans-serif", color: "rgba(0, 0, 0, 0.54)" }}>
                        {selectedConversation.timestamp ?? "Unknown time"} 
                    </p>
                </div>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </div>

            <div className="message-container flex-1 bg-white-500 mx-3 mb-1 mt-3 p-2 rounded-lg overflow-scroll" style={{ scrollbarWidth: "none" }}>
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
                {/* Additional messages here */}
            </div>

            <div className="text-input-area flex justify-between bg-white m-3 p-2 rounded-lg shadow-lg">
                <input placeholder="Type a message" type="text" className="w-full text-md focus:outline-none focus:shadow-none focus:ring-0 outline-none border-none ml-2" style={{ color: "rgba(0, 0, 0, 0.54)" }} />
                <IconButton>
                    <SendIcon />
                </IconButton>
            </div>
        </div>
    );
}
