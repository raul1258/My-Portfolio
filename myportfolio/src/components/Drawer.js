import {useState} from 'react';
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";



function MobileDrawer() {
    const [open, setOpen] = useState(false);

  return (
    <div className="drawerDiv">
    <MenuRoundedIcon
      className="link"
      style={{ fontSize: "1.5rem", margin: 0 }}
      onClick={() => setOpen(true)}
    />
    <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
      <div className="drawer">
        <a href="/">
          <p className="link">About</p>
        </a>
        <a href="/skills">
          <p className="link">Skills</p>
        </a>
        <a href="/projects">
          <p className="link">Projects</p>
        </a>
        <a href="/socials">
          <p className="link">Socials</p>
        </a>
        
      </div>
    </Drawer>
    </div>

  )
}

export default MobileDrawer
