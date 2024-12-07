import '../Styles/SideBar.css'
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CelebrationIcon from '@mui/icons-material/Celebration';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LogoutIcon from '@mui/icons-material/Logout';
import FallbackAvatars from './Avatar';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';



export const SideBar = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };



  return (
    <div className="sidebar">
      <h3>MICROTECH SOLUCIONES IT</h3>
      <div className='usuario'>
      <FallbackAvatars/>
        <p className='pUsers'>Usuario: Administrador</p>
      </div>
      <div>
        <List component="nav" aria-label="main mailbox folders">
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <CelebrationIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Eventos" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <CalendarMonthIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Calendario" />
          </ListItemButton>
          <Divider />
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <LocationOnIcon sx={{ color: 'white' }} />

            </ListItemIcon>
            <ListItemText primary="Ubicación" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <SearchIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Busqueda" />
          </ListItemButton>
          <Divider />
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <AccountBalanceIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Finanzas" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <SupervisorAccountIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Administración" />
          </ListItemButton>
          <Divider />
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <LogoutIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Salir" />
          </ListItemButton>

        </List>

      </div>

    </div >
  )
}
