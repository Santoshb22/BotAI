import { Button as MuiButton } from "@mui/material"
const Button = ({buttonText, onClick}) => {
  return (
    <MuiButton 
    onClick={onClick}
    sx = {{
        backgroundColor: "secondary.light",
         color: "black", 
         fontSize: "20px",fontWeight: 400,
          lineHeight: "22.98px", borderRadius: "5px", 
          height: 41,
          width: 73,
    }} >{buttonText}</MuiButton>
  )
}

export default Button