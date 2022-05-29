import { CodeBlock, dracula } from "react-code-blocks";

function Exercise5() {
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
  const usersArray = stringToArray(users);
  return (
    <div>
      <div>
        <p>
          Given an array:
          <CodeBlock
            customStyle={{ width: "20rem" }}
            text={users}
            language="js"
            showLineNumbers={false}
            theme={dracula}
          />
          <br />
          Use the map function to render the array in an unordered list.
        </p>
        <div className="solution-container">
          <ul>
            {usersArray.map(user => <li key={user}>{user}</li>)}
          </ul>
        </div>
      </div>
    </div>
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
export default Exercise5;
