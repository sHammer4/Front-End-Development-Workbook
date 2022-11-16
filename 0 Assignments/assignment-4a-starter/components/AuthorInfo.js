import Typography from "@mui/material/Typography"
import Box from "@mui/system/Box"

export default function AuthorInfo(props) {
    return <Box>
        <Typography
            component="h1"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
        >
            {props.name}
        </Typography>
        <Typography  align="center" color="text.primary" paragraph>
            {props.birthDate} - {props.deathDate != null ? props.deathDate : "Present Day"}
        </Typography>
    </Box>
    
    
}