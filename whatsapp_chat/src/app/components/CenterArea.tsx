"use client";
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import ChatList from './ChatList';

interface Users {
    name: string;
    lastMessage: string;
    timestamp: string;
}

interface CenterAreaProps {
    onConversationSelect: (conversation: Users) => void;
    selectedConversation: Users | null;
}

export default function CenterArea({ onConversationSelect, selectedConversation }: CenterAreaProps) {
    const [conversations, setConversations] = useState<Users[]>([
        { name: "Neha", lastMessage: "Hello", timestamp: "today" },
        { name: "Vandana", lastMessage: "Where are you?", timestamp: "today" },
        { name: "Priya", lastMessage: "How are you?", timestamp: "today" },
        { name: "Prateeksha", lastMessage: "I'm fine", timestamp: "today" },
    ]);

    return (
        <div className="flex h-full flex-col flex-[0.3] ">
            <div className="border border-right-2 h-full">
                <div className='cb-header flex justify-between items-center bg-white mx-3 mt-3 mb-1 p-2 rounded-lg shadow-lg'>
                    <h6 className='pl-2'>Chats</h6>
                    <IconButton>
                        <LogoutIcon />
                    </IconButton>
                </div>

                <div className='cb-search flex items-center bg-white mx-3 mt-3 mb-1 p-1 rounded-lg shadow-lg'>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <input className='w-full text-lg focus:outline-none focus:shadow-none focus:ring-0 outline-none border-none' placeholder='Search' />
                </div>

                <div className="cb-conversations flex-1 bg-white rounded-lg p-2 m-3 overflow-scroll shadow-lg h-[calc(100%-155px)] border" style={{ scrollbarWidth: "none" }}>
                    {conversations.map((conversation, index) => (
                        <ChatList
                            key={index}
                            props={conversation}
                            isSelected={selectedConversation?.name === conversation.name}
                            onClick={() => onConversationSelect(conversation)} />
                    ))}
                </div>
            </div>
        </div>
    );
}
