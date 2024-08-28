
import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, TextField, Tooltip, Typography } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius:  "10px",
  boxShadow: 24,
  p: 3,
  outline: "none",
};

const Addpost = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
        <Tooltip title="Add Post">
      <Fab 
      onClick={handleOpen}
      size="small" color="primary" aria-label="add" sx={{ml: 1,position: "fixed", bottom: "16px"}}>
        <AddIcon />
      </Fab>
      </Tooltip>

      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography sx={{textAlign: "center", fontWeight: "300"}} variant="h6" component="h2">
      Creat Post
    </Typography>
  <Box sx={{display: "flex", alignItems: "center", mt: 1}}>
  <Avatar alt="Remy Sharp" src="../../images/18119222_1690557987651585_1044614154366282350_n.jpg" />
  <Typography sx={{fontWeight: "300", fontSize: "18px", ml: 2}} variant="h6">Ahmed Shoaib</Typography>
  </Box>

  <TextField
        sx={{width: "100%", mt: 2}}
          multiline
          placeholder="What is in your mind"
          rows={3}
          variant="standard"
        />

<ButtonGroup sx={{mt: 2}}>
<IconButton color="primary" onClick={() => {
  
}}>
  <EmojiEmotionsIcon/>
</IconButton>

<IconButton color="secondary" onClick={() => {
  
}}>
<ImageIcon/>  
</IconButton>

<IconButton color="success" onClick={() => {
  
}}>
  <VideoCameraBackIcon/>
</IconButton>

<IconButton color="error" onClick={() => {
  
}}>
  <PersonAddIcon/>
</IconButton>

</ButtonGroup>


<ButtonGroup sx={{mt: 2, width:"100%"}}>

<Button sx={{flexGrow: "1"}} variant="contained">
  Post
</Button>

<Button variant="contained">
<DateRangeIcon />
</Button>

</ButtonGroup>

</Box>
</Modal>
    </Box>
  );
}

export default Addpost;
