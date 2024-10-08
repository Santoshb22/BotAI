import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import navLogo from "../../assets/nav-logo.png";
import newChat from "../../assets/new-chat.png";
import styles from "./Sidebar.module.css";
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

export default function Sidebar({onClick}) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const navigate = useNavigate();

  const DrawerList = (
    <Box sx={{ width: 208, height: 97,  }} role="presentation" onClick={isMobile ? toggleDrawer(false) : null}>
      <Box
      sx = {{height: 47, width: 208,  display: "flex", justifyContent: 'space-between', alignItems: "center", paddingX: 2, backgroundColor: theme.palette.secondary.light}}
      >
        <img className={styles.navbarLogo} onClick={() => navigate("/")} src={navLogo} alt="logo" />
        <Typography  sx={{color: "#414146", fontWeight: 400, fontSize: "20px", lineHeight: "22.98px"}}>New Chat</Typography>
        <img className={styles.newChatButton} onClick={onClick} src={newChat} alt="new chat icon" />
      </Box>
      
      <Box sx = {{height: 39, width: 175.16, borderRadius: "10px", alignContent: "center", textAlign: "center", marginTop:2, marginX: "auto",  backgroundColor: theme.palette.secondary.light}}>
        <Typography
         sx={{color: "#414146", fontWeight: 700, fontSize: {xs: "12px", sm: "16px"}, cursor: "pointer"}}
         onClick = {() => navigate("/past-conversations")}
         >
            Past Conversation
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box>
      {isMobile && <Button onClick={toggleDrawer(true)}>
        <MenuIcon sx = {{color: "#9785BA"}} /> 
      </Button>}

      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? open : true}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </Box>
  );
}
