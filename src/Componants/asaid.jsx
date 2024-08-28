import { Box, Divider, ImageList, ImageListItem,  List,  ListItem,  ListItemAvatar,  ListItemText,  Typography, useTheme } from '@mui/material';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const Asaid = () => {
  const theme = useTheme()
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
  ];
  return (
    <Box component="aside"
    sx={{flexGrow: "auto",pl: 2, bgcolor:theme.palette
// @ts-ignore
    .favColor.main, display: {xs: "none", lg: "block"},minWidth: "416px"}}>

<Box sx={{position:"fixed"}}>
      <Typography sx={{fontWeight: "100", fontSize: "18px", my: 1}} variant="h6">Online Friends</Typography>

      <AvatarGroup total={24} sx={{justifyContent: "center", my: 1}} >
      <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
    </AvatarGroup>

    <Typography sx={{fontWeight: "100", my: 1, fontSize: "18px"}}variant="h6">Last Photo</Typography>
      
    <ImageList gap={6} sx={{width: 400, height: 140, overflow: "hidden" }} cols={3} rowHeight={99}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            style={{borderRadius:"5px"}}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>

    <Typography sx={{ fontWeight: "100", fontSize: "18px", my: 1}} variant="h6" >Latest Conversation</Typography>

    <List sx={{ width: '100%', maxWidth: 380, bgcolor: 'background.paper', mx: "auto" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://mui.com/static//images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem >
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://mui.com/static//images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://mui.com/static//images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>


    </Box>

    </Box>
  );
}

export default Asaid;
