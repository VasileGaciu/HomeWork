import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import React from "react"

function CustomList(users) {
  const userToString = users.first.toString();
  const usersArray = stringToArray(userToString);
  return (
    <Grid item xs={6} md={1}>
      <List>
        {usersArray.map(user => <ListItem key={user}>{user}</ListItem>)}
      </List>
    </Grid>
  );
}

function stringToArray(users) {
  const userSubString = users.substring(1, users.length - 6);
  const usersArray = userSubString.split(",");
  for (let i = 0; i < usersArray.length; i++) {
    usersArray[i] = usersArray[i].substring(6, usersArray[i].length - 1);
  }
  return usersArray;
}

export default CustomList;