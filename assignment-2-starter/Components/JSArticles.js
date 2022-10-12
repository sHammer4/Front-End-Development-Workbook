import { NEXT_JS_COOL_SITES } from "../nextjsSiteList";
import { List, ListItem, Typography } from "@mui/material";

export default function NextJsCoolSites() {
    return <List>
        {NEXT_JS_COOL_SITES.map((name, url, index) => {
            return <ListItem key={index}>
                <a href={url}>
                    <Typography>{name}</Typography>
                </a>
            </ListItem>
        })}
    </List>
}