import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import React from "react"

function ColoredList() {
  const usersArray = [
    {
      id: 1,
      name: "Christopher Washington",
      favoriteColor: "red"
    },
    {
      id: 2,
      name: "Ben Hayes",
      favoriteColor: "blue"
    },
    {
      id: 3,
      name: "Skye Roberts",
      favoriteColor: "yellow"
    },
    {
      id: 4,
      name: "Hugo Gray",
      favoriteColor: "violet"
    },
    {
      id: 5,
      name: "Eddie Lee",
      favoriteColor: "pink"
    },
    {
      id: 6,
      name: "Hannah Reid",
      favoriteColor: "green"
    },
  ];
  return (
    <Grid item xs={6} md={1}>
      <List>
        {usersArray.map(({ id, name, favoriteColor }) => <ListItem key={id} style={{ color: favoriteColor }}>
          {name}</ListItem>)};
      </List>
    </Grid>
  );
}

export default ColoredList;