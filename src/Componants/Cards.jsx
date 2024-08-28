import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Checkbox, Menu, MenuItem, useTheme } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Cards = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
const myCards =[
  {letter: "A", color:"#A020F0", username: "Ahmed Shoaib", image: "../../images/18119222_1690557987651585_1044614154366282350_n.jpg"},
  {letter: "E", color: "#008080", username: "Ebrahim Shoaib", image: "../../images/2022-01-20 18.34.45.jpg"},
  {letter: "L", color: "#053ea8", username: "Layan Shoaib", image: "../../images/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg"},
]

  return (
    <Box component="main"
    sx={{flexGrow: "3"}} >

{myCards.map((item) => (
  
    <Card key={item.username} sx={{ maxWidth: {xs: "96%", sm: 345}, mx: "auto", my: 5 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ color: theme
// @ts-ignore
        .palette.getContrastText(item.color),bgcolor: item.color }}>
        {item.letter}
      </Avatar>
      }
      action={
        <Box>
        <IconButton aria-label="settings"
        onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>

<Menu
id="basic-menu"
anchorEl={anchorEl}
open={open}
onClose={handleClose}
MenuListProps={{
  'aria-labelledby': 'basic-button',
}}
>
<MenuItem onClick={handleClose}>Profile</MenuItem>
<MenuItem onClick={handleClose}>My account</MenuItem>
</Menu>

</Box>
      }
      
      title={item.username}
      subheader="September 14, 2016"
      
    />
    <CardMedia
      component="img"
      height="194"
      image={item.image}
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing sx={{justifyContent: "space-between"}}>
      
<Box>
    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}}/>} />
    
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
</Box>

<Box>
      <Checkbox {...label} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} sx={{}}/>
</Box>
    </CardActions>
  </Card>

))}
  

  </Box>
  );
}

export default Cards;

