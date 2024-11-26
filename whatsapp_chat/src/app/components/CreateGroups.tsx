import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IconButton } from '@mui/material';

export default function CreateGroups() {
    return (
        <>
            <div className="createGropus-container flex-[0.7] self-center py-4 px-2 m-3 bg-white rounded-lg flex justify-between shadow-sm">
                <input type="text" placeholder="Enter Group Name" className="text-lg focus:outline-none focus:shadow-none focus:ring-0 outline-none border-none ml-2 " style={{ color: "rgba(0, 0, 0, 0.54)" }} />
                <IconButton>
                    <DoneOutlineIcon />
                </IconButton>
            </div>
        </>
    )
};
