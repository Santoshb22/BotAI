import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function RandomQuestion({data, setRandomClicked}) {
  const {question} = data;
  return (
    <Box 
    sx={{ maxWidth: 514, height: 111, borderRadius: "5px", boxShadow: '0px 4px 5px 0px rgba(0, 0, 0, 0.25)'}}
    onClick = {() => setRandomClicked(data)}
    >
      <Card sx ={{height: 111, cursor: 'pointer'}}>
      <CardContent>
        <Typography sx = {{fontFamily: "Ubuntu", fontWeight: 700, fontSize: "20px", lineHeight: "22.96px"}}>
            {question}
        </Typography>

        <Typography sx = {{fontFamily: "typography.fontFamily", lineHeight: "21.79px", fontSize: "16px", color: 'GrayText', marginTop: 1.6}}>
            Get immediate AI generated response
        </Typography>
    </CardContent>
      </Card>
    </Box>
  );
}