import { Typography } from "@mui/material"

const BotAiText = () => {
  return (
    <Typography       
    variant="h2" 
    color="primary.dark" 
    sx={{
      fontSize: { xs: '1.2rem', sm: '2rem' }, // Adjust font size for small and extra small screens
    }}>Bot AI</Typography>
  )
}

export default BotAiText