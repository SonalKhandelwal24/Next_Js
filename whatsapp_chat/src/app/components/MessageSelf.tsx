export default function MessageSelf() {
    var props2 = { name: "You", message: "I'm fine" };

    return (
        <>
            <div className="self-message-container flex justify-end">
                <div className="messageBox flex flex-col bg-[#63d7b0] max-w-max p-3 m-1 rounded-xl" style={{fontFamily:"sans-serif"}}>
                    <p>{props2.message}</p>
                    <p className="self-timeStamp flex align-self-end" style={{fontFamily:"sans-serif", fontSize:"10px", justifyContent:"end"}}>12:00 am</p>
                </div>
            </div>
        </>
    )
};
