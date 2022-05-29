import React from "react";
import Button from '@mui/material/Button';
function Exercise3() {
  return (
    <div>
      <div>
        <p>
          Create a custom Button component and render it four times. On click,
          it should alert which button was clicked, by displaying the name of
          the button.
        </p>
      </div>
      <div className="solution-container">
        <div className="solution-exercice3">
          <Button variant="contained" uppercase={false} onClick={getButtonClickName}>Button 1</Button>
          <Button variant="contained" uppercase={false} onClick={getButtonClickName}>Button 2</Button>
          <Button variant="contained" uppercase={false} onClick={getButtonClickName}>Button 3</Button>
          <Button variant="contained" uppercase={false} onClick={getButtonClickName}>Button 4</Button>
        </div>
      </div>
    </div>
  );
}

function getButtonClickName(event) {
  alert(event.target.innerText);
}

export default Exercise3;
