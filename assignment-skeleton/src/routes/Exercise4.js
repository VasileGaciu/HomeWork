import React, { useState } from 'react';
import Button from '@mui/material/Button';

function Exercise4() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <p>
          Use the useState React hook to track how many times a button is
          clicked, and display the number.
        </p>
        <div className="solution-container">
         <p>You pressed the button {count} times</p> 
         <Button variant="contained" style={{textTransform: 'none'}} onClick={() => setCount(count + 1)}>Button 1</Button>
       </div>
      </div>
    </div>
  );
}

export default Exercise4;
