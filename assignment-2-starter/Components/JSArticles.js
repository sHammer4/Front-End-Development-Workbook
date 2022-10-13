import { NEXT_JS_COOL_SITES } from "../nextjsSiteList";
import { List, ListItem, Typography } from "@mui/material";

export default function JSArticles() {
    return <List>
        {NEXT_JS_COOL_SITES.map((instance, index) => {
            return <ListItem key={index}>
                <a href={instance.url}>
                    <Typography color="primary">{instance.name}</Typography>
                </a>
            </ListItem>
        })}
    </List>
}