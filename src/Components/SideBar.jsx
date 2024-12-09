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
import { useNavigate } from 'react-router-dom';



export const SideBar = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const navigate = useNavigate();

  const handleListItemClick = (event, index, path) => {
    setSelectedIndex(index);
    navigate(path);

  }

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
            onClick={(event) => handleListItemClick(event, 0,'/eventos')}
          >
            <ListItemIcon>
              <CelebrationIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Eventos" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1, '/calendario')}
          >
            <ListItemIcon>
              <CalendarMonthIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Calendario" />
          </ListItemButton>
          <Divider />
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2, '/ubicacion')}
          >
            <ListItemIcon>
              <LocationOnIcon sx={{ color: 'white' }} />

            </ListItemIcon>
            <ListItemText primary="Ubicación" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3, '/search')}
          >
            <ListItemIcon>
              <SearchIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Busqueda" />
          </ListItemButton>
          <Divider />
          <ListItemButton
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4, '/finanzas')}
          >
            <ListItemIcon>
              <AccountBalanceIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Finanzas" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 5}
            onClick={(event) => handleListItemClick(event, 5, '/administracion')}
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
