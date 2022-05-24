import { CodeBlock, dracula } from "react-code-blocks";
import React from "react"
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';

function Exercise8() {
  //If you want to use me, be aware I am a string not an Array.
  //So please just copy me in other variable
  const users = `[
    {
      "id": 1,
      "name": "Christopher Washington",
      "favoriteColor": "red",
    },
    {
      "id": 2,
      "name": "Ben Hayes",
      "favoriteColor": "blue",
    },
    {
      "id": 3,
      "name": "Skye Roberts",
      "favoriteColor": "yellow",
    },
    {
      "id": 4,
      "name": "Hugo Gray",
      "favoriteColor": "violet",
    },
    {
      "id": 5,
      "name": "Eddie Lee",
      "favoriteColor": "pink",
    },
    {
      "id": 6,
      "name": "Hannah Reid",
      "favoriteColor": "green",
    },
  ]`;                 
  return (
    <div>
      <div>
        <p>
          Using the array of objects below, render a list of users using React.
          You should display for each user the name colored in the their
          favorite color.
        </p>
        <CodeBlock
          customStyle={{ width: "20rem" }}
          text={users}
          language="js"
          showLineNumbers={false}
          theme={dracula}
        />
        <div className="solution-container">
          <CustomList/>
        </div>
      </div>
    </div>
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
function CustomList(){
  const userArray = ["Christopher Washington", "Ben Hayes", "Skye Roberts",
  "Hugo Gray", "Eddie Lee", "Hannah Reid"];
  let index = 0;
  const styles = ["red" , "blue", "yellow", "violet", "pink", "green"];
  return(
  <Grid item xs={6} md={1}>
        <Demo>
          <List>
           {userArray.map(user => <ListItem key = {user} 
           style = {{color: styles[index++]}}>{user}</ListItem>)}
          </List>
        </Demo>
      </Grid> 
  );
}
export default Exercise8;
