import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import NightLightIcon from '@mui/icons-material/NightLight';
import LightModeIcon from '@mui/icons-material/LightMode';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from 'react';
import '../style.css';

export default function Sidebar() {

  const [lightTheme, setLightTheme] = useState(true);
  return (
    <>
      <div className="sidebar-container flex flex-col justify-between px-2 py-2 border border-r-2">

        <div className='flex flex-col'>
          <IconButton> <ChatIcon/> </IconButton>
          <IconButton> <AddCircleIcon/> </IconButton>
          <IconButton> <PersonAddAlt1Icon /> </IconButton>
          <IconButton> <GroupAddIcon /> </IconButton>
          <IconButton onClick={() => {setLightTheme((preValue) => {return !preValue})}}> 
            { lightTheme && <NightLightIcon/> }
            { !lightTheme && <LightModeIcon/> }
             </IconButton>
        </div>

        <div className='flex flex-col'>
          <IconButton>  <SettingsIcon /> </IconButton>
          <IconButton>  <AccountCircleIcon /> </IconButton>
        </div>

      </div>
    </>
  )
};
