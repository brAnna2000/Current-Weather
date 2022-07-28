import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import './style.css';

export default function FavoriteCitiesList(citiesList:string[]) {
  const favoriteCities = citiesList;
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
    <ul>
      {Object.values(favoriteCities).map((item) => (
        <ListItem key={`item-${item}`}>
          <ListItemText primary={`${item}`} />
        </ListItem>
      ))}
    </ul>
    </List>
  );
}
