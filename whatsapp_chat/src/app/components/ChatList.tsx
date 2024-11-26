interface Users {
    name: string;
    lastMessage: string;
    timestamp: string;
}

interface ChatListProps {
    props: Users;
    isSelected: boolean;
    onClick: () => void;
}

export default function ChatList({ props, isSelected, onClick }: ChatListProps) {
    return (
        <div onClick={onClick} className={`conversation-container grid gap-2 m-[5px] p-[5px] pr-2 shadow-sm cursor-pointer border 
            ${isSelected ? "bg-blue-100 pr-2" : "bg-white"}`} style={{ gridTemplateColumns: "32px auto auto", gridTemplateRows: "auto auto", borderRadius: "10px" }}>
            <p className="con-icon flex justify-center items-center bg-[#d9d9d9] font-bold text-white h-8 w-8 p-[2px] justify-self-center self-center"
                style={{ gridArea: "1/1/3/2", fontFamily: "sans-serif", borderRadius: "50%" }}>{props.name ? props.name[0] : "?"}</p>
            <p className="con-title font-bold" style={{ gridArea: "1/2/2/4", fontFamily: "sans-serif", color: "rgba(0, 0, 0, 0.54)"}}>{props.name || "Unknown"}</p>
            <p className="con-lastMessage text-sm" style={{ fontFamily: "sans-serif" }}>{props.lastMessage || "No message available"}</p>
            <p className="con-timestamp justify-self-end text-sm" style={{ fontFamily: "sans-serif", color: "rgba(0, 0, 0, 0.54)"}}>{props.timestamp || "Unknown time"}</p>
        </div>
    );
}
