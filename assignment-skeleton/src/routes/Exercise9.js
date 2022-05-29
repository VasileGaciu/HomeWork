import React, { useState, useEffect } from 'react';
import UsersTable from './UsersTable'

function Exercise9() {
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
          <UsersTable />
        </div>
      </div>
    </div>
  );
}

export default Exercise9;
