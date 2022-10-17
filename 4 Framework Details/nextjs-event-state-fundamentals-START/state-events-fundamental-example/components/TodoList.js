import { useState } from 'react'
import { Box, TextField, Button, Grid, Typography } from '@mui/material'

export default function TodoList() {
    const [todoText, setTodoText] = useState("")
    const [allTodos, setAllTodos] = useState([])
    //To do this we need to essentially combine the todo and the existing

    const onAddTodoClick = () => {
        console.log(todoText)
        setTodoText("")

        let newAllTodoList = [todoText, ...allTodos]
        setAllTodos(newAllTodoList)

        setTodoText("")
    }
    
    return <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant='h2'>
                    Todo List
                </Typography>
            </Grid>
            <Grid item xs={10}>
                <TextField 
                    id='standard-basic' 
                    label="New Todo" 
                    variant='standard' 
                    fullWidth 
                    onChange={(event) => setTodoText(event.target.value)}
                    value={todoText}
                />
            </Grid>
            <Grid item xs={2}>
                <Button 
                    variant='contained' 
                    onClick={onAddTodoClick}
                >Add Todo</Button>
            </Grid>
            <Grid item xs={12}>
                <ul>
                    {   allTodos.map((todo, index) => {
                        return <li key={index}>{todo}</li>
                    })}
                </ul>
            </Grid>
        </Grid>
    </Box>
}

/*
<TextField id="standard-basic" label="New Todo?" variant="standard" 
            sx={{width: '100%'}} onChange={onTodoTextChange} value={todoText} />
        <Button variant="contained" onClick={onAddTodoClick}>Add Todo</Button>
*/