import Typography from "@mui/material/Typography";
import Container from "@mui/system/Container";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import Navbar from "../../components/Navbar";
import LoadingCircle from "../../components/LoadingCircle";
import { getBookData } from "../../utils/api/books";
import { COVERS_BASE_URL } from "../../utils/api/base";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";


export default function Books(props) {
    const [bookData, setBookData] = useState()

    //pushed ID must match name of file in []
    const router = useRouter()
    const {bookId} = router.query
    const TEST_ID = "OL82577W"

    useEffect(() => {
        //getBookData(TEST_ID).then((data) => {
        getBookData(bookId).then((data) => {
            setBookData(data)
        })
    }, [bookId])

    const getCoverURL = (coverID) => {
        return `${COVERS_BASE_URL}${coverID}-M.jpg`
    }

    return <>
        <Navbar />
        {!bookData ?
        <LoadingCircle />
        :
        <Container sx={{paddingTop: 2}} component="main">
            <Typography
                component="h1"
                variant="h4"
                align="center"
                color="text.primary"
                gutterBottom
            >
                {bookData.title}
            </Typography>
            <Typography variant="h5" align="center" color="text.primary" paragraph>
                Covers
            </Typography>
            <div align="center">
                {!bookData.covers ? 
                    <Typography
                        variant="h3"
                        align="center"
                        color="error"
                        gutterBottom
                    >
                        No Covers Found
                    </Typography> :
                    <ImageList sx={{ width: 3/4 }} cols={3} >
                        {bookData.covers.map((coverID) => (
                            <ImageListItem key={getCoverURL(coverID)} >
                                <img
                                    src={getCoverURL(coverID)}
                                    srcSet={getCoverURL(coverID)}
                                    alt={`${bookData.title} Cover`}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                }
            </div>
        </Container>
        }
    </>
}