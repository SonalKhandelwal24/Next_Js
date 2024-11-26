export default function Welcome() {
    
    return(
        <>
        <div className="welcome-container flex-[0.7] flex flex-col justify-center items-center gap-5 rounded-lg shadow-sm" style={{fontFamily:"sans-serif", color:"rgba(0, 0, 0, 0.54)", borderBottom:"5px solid #63d7b0" }}>
            <img src="logo.png" alt="Logo"/>
            <div className="welcome-logo h-[20vh]"> 
                <p>View and text to people present in the chat room</p>
            </div>

        </div>
        </>
    )
};
