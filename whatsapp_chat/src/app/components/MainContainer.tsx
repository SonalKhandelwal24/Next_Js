// "use client"
// import { useState } from "react";
// import CenterBox from "./CenterBox";
// import ChatArea from "./ChatArea";
// import Sidebar from "./SideBar";
// import Welcome from "./Welcome";
// import CreateGroups from "./CreateGroups";
// // import Users_Groups from "./Users_Groups";

// interface Users {
//     name: string;
//     lastMessage: string;
//     timestamp: string
// }

// export default function MainContainer() {
    
//     const [conversations, setConversations] = useState<Users[]>([
//         { name: "Neha",lastMessage: "Hello", timestamp: "today"},
//         { name: "Vandana", lastMessage: "Where are you?", timestamp: "today"},
//         { name: "Priya", lastMessage: "How are you?", timestamp: "today" },
//     ]);

//     return (
//         <>
//         <div className="h-[90vh] w-[90vw] bg-[#f4f5f8] flex rounded-lg shadow-md">
//             <Sidebar />
//             <CenterBox />
//             {/* <Welcome /> */}
//             {/* <CreateGroups /> */}
//             < ChatArea props={conversations[0]} />

//         </div>
//         </>
//     )
// };
