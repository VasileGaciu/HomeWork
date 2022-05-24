import React, {useState, useEffect} from 'react';

function Exercise9() {
  const [user, setUser] = useState([]);
  useEffect(() => {
  fetch("https://random-data-api.com/api/users/random_user?size=10")
  .then((response) => response.json())
  .then( data => setUser(data));
  },[]);
  return (
    <div>
      <div>
        <p>
          Fetch the data from this URL:
          <a href="https://random-data-api.com/api/users/random_user?size=10">
            https://random-data-api.com/api/users/random_user?size=10
          </a>
          . This will return a list of 10 random users.
          <br />
          Store it in React state and render a list with the information
          retrieved.
        </p>
        <div className="solution-container">
         
        </div>
      </div>
    </div>
  );
}

export default Exercise9;
