import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '{Timestamp}',
    '{Issue Name}',
    '{User Name}',
    '{Priority level',
    '{Timestamp}',
  ),
  createData(
    1,
    '{Timestamp}',
    '{Issue Name}',
    '{User Name}',
    '{Priority level',
    '{Timestamp}',
  ),
  createData(
    2,     
    '{Timestamp}',
    '{Issue Name}',
    '{User Name}',
    '{Priority level',
    '{Timestamp}',),
  createData(
    3,
    '{Timestamp}',
    '{Issue Name}',
    '{User Name}',
    '{Priority level',
    '{Timestamp}',
  ),
  createData(
    4,
    '{Timestamp}',
    '{Issue Name}',
    '{User Name}',
    '{Priority level',
    '{Timestamp}',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <>
      <Title>Recent Tickets</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Assignee</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell align="right">SLA</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more tickets
      </Link>
    </>
  );
}