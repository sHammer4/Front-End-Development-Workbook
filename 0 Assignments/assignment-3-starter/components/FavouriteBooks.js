import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Box } from '@mui/system';

import Title from './Title'

export default function FavouriteBooks(props) {
  const [titleFilter, setTitleFilter] = useState("")

  //When filter handler triggers, title filter is changed to user input
  const filterHandler = (event) => {
    setTitleFilter(event.target.value)
  }

  return <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <Title>Favourite Books</Title>
      {/* Added text field to record user input to filter books */}
      <Box sx={{ pb: 1 }}>
        <TextField
          id="filter"
          name="filter"
          label="Search title"
          variant="standard"
          onChange={filterHandler}
          value={titleFilter}
        />
      </Box>
      
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Filters the book array first before map */}
          { props.books.filter((book) => {
            // Turns both values to lower case to eliminate case-sensistivity
            // Only selects books whos title contains the text from the search query
              return book.title.toLowerCase().includes(titleFilter.toLowerCase())
            })
              .map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.author}</TableCell>
              <TableCell>{row.rating}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  </Paper>
}
;
// 