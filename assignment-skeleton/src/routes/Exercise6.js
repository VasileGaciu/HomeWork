import { CodeBlock, dracula } from "react-code-blocks";
import React from "react"
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';

function Exercise6() {
  //If you want to use me, be aware I am a string not an Array.
  //So please just copy me in other variable
  const users = `[
    "Christopher Washington",
    "Ben Hayes",
    "Skye Roberts",
    "Hugo Gray",
    "Eddie Lee",
    "Hannah Reid",
  ];`;
  return (
    <div>
      <div>
        <p>
          Using the same array from exercise 5 create a custom component that
          displays each item.
          <br />
          <CodeBlock
            customStyle={{ width: "20rem" }}
            text={users}
            language="js"
            showLineNumbers={false}
            theme={dracula}
          />
          Instead of using the <i> ul </i> and <i> li</i> HTML tags, create a
          custom component that accepts a list as its prop, and renders it
          accordingly.
        </p>
        <div className="solution-container">
        <CustomList first = {users}/>
        </div>
      </div>
    </div>
  );
}

function stringToArray(users){
  const userSubString = users.substring(1,users.length - 6);
  const usersArray = userSubString.split(",");
  for(let i = 0; i < usersArray.length; i++){
    usersArray[i] = usersArray[i].substring(6,usersArray[i].length - 1);
  }
  return usersArray;
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

 function CustomList(users){
  const userToString = users.first.toString();
  const usersArray = stringToArray(userToString);
  return(
  <Grid item xs={6} md={1}>
        <Demo>
          <List>
          {usersArray.map(user => <ListItem key={user}>{user}</ListItem>)}
          </List>
        </Demo>
      </Grid> 
  );
}

export default Exercise6;
