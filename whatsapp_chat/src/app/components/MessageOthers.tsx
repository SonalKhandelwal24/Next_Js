export default function MessageOthers() {

    var props1 = { name: "Neha", message: "How are you?" };

    return (
        <>
            <div className="other-message-container max-w-max p-2 m-3 justify-content-between">
                <div className="conversation-container flex flex-row ">
                    <p className="con-icon flex justify-center items-center bg-[#d9d9d9] font-bold text-white h-8 w-8 p-[2px] justify-self-center self-center"
                        style={{ gridArea: "1/1/3/2", fontFamily: "sans-serif", borderRadius: "50%" }}>
                        {props1.name[0]}
                    </p>
                    <div className="other-text-content bg-[#d9d9d9] p-3 m-1 rounded-xl">
                        <p className="con-title font-bold" style={{ gridArea: "1/2/2/4", fontFamily: "sans-serif", color: "rgba(0, 0, 0, 0.54)" }}>
                            {props1.name}
                        </p>
                        <p className="con-lastMessage text-sm" style={{ fontFamily: "sans-serif" }}>
                            {props1.message}
                        </p>
                        <p className="self-timeStamp flex" style={{fontFamily:"sans-serif", fontSize:"10px", justifyContent:"end"}}>12:00am</p>
                    </div>
                </div>
            </div>
        </>
    )
};
