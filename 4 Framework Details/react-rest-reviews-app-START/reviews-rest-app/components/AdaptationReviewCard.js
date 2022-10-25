import Avatar from "@mui/material/Avatar"

import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"

import Typography from "@mui/material/Typography"

export default function AdaptationReviewCard(props) {
    return <Card>
        <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
                    {props.rating}
                </Avatar>
            }
                    
            title={
                <Typography variant="body2" color="text.secondary">
                    {props.title}
                </Typography>
            }
                    
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                {props.comment}
            </Typography>
        </CardContent>
    </Card>
}