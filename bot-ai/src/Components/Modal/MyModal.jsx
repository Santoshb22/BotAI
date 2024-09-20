import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import bulbIcon from "../../assets/bulb.png"
import styles from "./MyModal.module.css";
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   bgcolor: '#FAF7FF',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
//   Height: 355,
//   width: 766,
// };

export default function MyModal({setChatQnA}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [feedback, setFeedback] = React.useState("");


  const handleFeedback = (value) => {
    setFeedback(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(feedback) {
      setChatQnA(prev => 
        prev.map((item) => ({...item, feedback: feedback}))
      )
    }

    handleClose();
  }

  return (
    <div>
      <button className={styles.likeButton} onClick={handleOpen}>
        <ThumbDownOffAltIcon 
        sx={{width: 16, height: 16, opacity: "50%",}}
        />
      </button>
      
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <Box className={styles.modalStyle}>
          <form className={styles.feedbackForm} onSubmit={handleSubmit}>
              <Box sx={{display:"flex", justifyContent: "space-between", alignItems: "center", marginBottom: 1}}>
                <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
                  <img src={bulbIcon} alt="Bulb icon" />
                  <Typography sx={{fontWeight: 400, fontSize: "22px", lineHeight: "22.96px"}}>
                    Provide Additional Feedback
                  </Typography>
                </Box>

                <Typography variant='h2' onClick = {handleClose} sx = {{cursor: "pointer"}} >X</Typography>
              </Box>

              <Box sx={{marginY: 2}}>
                <textarea 
                className={styles.feedbackInput} 
                rows="4" cols="50" 
                placeholder="Enter your feedback here..."
                onChange={(e) => handleFeedback(e.target.value)}
                ></textarea>
              </Box>

              <Box sx={{textAlign: "end"}}>
                <button className={styles.submitButton} type = "submit" buttonText={"Submit"}>
                  Submit
                </button>
              </Box>
           
          </form>
        </Box>
        
      </Modal>
    </div>
  );
}
