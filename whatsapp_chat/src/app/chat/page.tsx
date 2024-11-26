"use client";
import Sidebar from "../components/SideBar";
import CenterArea from "../components/CenterArea";
import ChatArea from "../components/ChatArea";
import { useState } from "react";

interface Users {
    name: string;
    lastMessage: string;
    timestamp: string;
}

export default function Page() {
    const [selectedConversation, setSelectedConversation] = useState<Users | null>(null);

    const handleConversationSelect = (conversation: Users) => {
        setSelectedConversation(conversation);
    };

    return (
        <div className='min-h-screen bg-[#dddedd] flex justify-center items-center shadow-sm'>
            <div className="h-[90vh] w-[90vw] bg-[#f4f5f8] flex rounded-lg shadow-md">
                <Sidebar />
                <CenterArea onConversationSelect={handleConversationSelect} selectedConversation={selectedConversation} />
                <ChatArea selectedConversation={selectedConversation} />
            </div>
        </div>
    );
}
