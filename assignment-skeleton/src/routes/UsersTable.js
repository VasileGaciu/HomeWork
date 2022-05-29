import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UseState, { useState, useEffect } from 'react';

export default function DenseTable() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then((response) => response.json())
      .then(data => setUser(data));
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minwidth: 900 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left" width="100">First name</TableCell>
            <TableCell align="left" width="100">Last Name</TableCell>
            <TableCell align="left" width="100">Email</TableCell>
            <TableCell align="left" width="100">Phone</TableCell>
            <TableCell align="left" width="100">date_of_birth</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((user) => (
            <TableRow
              key={user.first_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{user.first_name}</TableCell>
              <TableCell align="left">{user.last_name}</TableCell>
              <TableCell align="left">{user.email}</TableCell>
              <TableCell align="left">{user.phone_number}</TableCell>
              <TableCell align="left">{user.date_of_birth}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
