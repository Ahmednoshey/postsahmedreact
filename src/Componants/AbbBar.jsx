import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

import styled from "@emotion/styled";
import { alpha, Avatar, InputBase, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  // @ts-ignore
  borderRadius: theme.shape.borderRadius,
  // @ts-ignore
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    // @ts-ignore
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  // @ts-ignore
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  // @ts-ignore
  [theme.breakpoints.up("sm")]: {
    // @ts-ignore
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

// @ts-ignore
const SearchIconWrapper = styled("div")(({ theme }) => ({
  // @ts-ignore
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    // @ts-ignore
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // @ts-ignore
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // @ts-ignore
    transition: theme.transitions.create("width"),
    width: "100%",
    // @ts-ignore
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const AbbBarr = ({setshowmenue, showmenue}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar
            alt="Ahmed Shoaib"
            src="./images/18119222_1690557987651585_1044614154366282350_n.jpg"
          />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (

    <AppBar component="header"
     sx={{ position: "sticky" }}>
      <Toolbar>
        <IconButton
        onClick={() => {
          setshowmenue(showmenue ? false : true)
        }}
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2, display: {xs: "flex", md: "none"} }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ mr: 2}}  
        >
          Ahmed<sup>S</sup>hoaib
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <IconButton
            sx={{ height: "37px", width: "37px" }}
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton
            sx={{ height: "37px", width: "37px" }}
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={handleClick}
            color="inherit"
          >
            <Avatar
              alt="Ahmed Shoaib"
              sx={{ height: "37px", width: "37px" }}
              src="./images/18119222_1690557987651585_1044614154366282350_n.jpg"
            />
          </IconButton>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
      {renderMobileMenu}
    </AppBar>

  );
};

export default AbbBarr;
