import Home from "./Pages/Home/Home"
import { theme } from "./CustomTheme/CustomTheme"
import { ThemeProvider } from "@emotion/react"
import { Box } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import PastConversation from "./Pages/PastConversation/PastConversation"

const App = () => {
  return (
    <ThemeProvider theme = {theme}>
    <Box>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/past-conversations" element= {<PastConversation/>}/>
      </Routes>
    </Box>
    </ThemeProvider>
  )
}

export default App