import Grid from "@mui/material/Grid"
import Box from "@mui/system/Box"
import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Button from "@mui/material/Button"

import { Fragment } from "react"

import { POPULAR_AUTHORS } from "../utils/constants/popular_authors"

export default function PopularAuthorList(props) {
    return <Grid item xs={4}>
        <Box sx={{width: '100%'}}>
        <Typography
            component="h1"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
        >
            Popular Authors
        </Typography>
        <List sx={{width: '100%'}}>
            <Divider />
            {POPULAR_AUTHORS.map((author, index)=> {
            return <Fragment key={index}>
                <ListItem
                secondaryAction={
                    <Button
                    onClick={(event) => {props.setAuthorKey(author.key)}}
                    >show</Button>
                }
                >
                <ListItemText primary={author.name}></ListItemText>
                </ListItem>
                <Divider />
            </Fragment>
            })}
        </List>
        </Box>
    </Grid>
}