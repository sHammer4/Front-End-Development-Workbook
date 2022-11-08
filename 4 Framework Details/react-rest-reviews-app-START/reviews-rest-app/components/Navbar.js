import AppBar from '@mui/material/AppBar';
import { Typography } from '@mui/material/Typography';
import { Toolbar } from '@mui/material/Toolbar';

export default function Navbar() {
    return <AppBar position="relative">
        <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
            Adaptations Reviews
        </Typography>
        </Toolbar>
    </AppBar>
}