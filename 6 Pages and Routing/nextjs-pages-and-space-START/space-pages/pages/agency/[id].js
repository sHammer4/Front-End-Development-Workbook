import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import NavBar from "@components/NavBar";

import { useRouter } from "next/router";

export default function Agency() {
    const router = useRouter()
    const {id} = router.query //This uses destructuring

    return <>
        <NavBar />
        <Container sx={{paddingTop:2}} component="main">
            <Typography variant="h3">
                Agency {id}
            </Typography>
        </Container>
    </>
}