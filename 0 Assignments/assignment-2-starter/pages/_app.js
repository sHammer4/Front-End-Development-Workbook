import '../styles/globals.css'
import { ThemeProvider } from '@mui/material'
import { theme } from '../theme/config.js'

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
  
}

export default MyApp
