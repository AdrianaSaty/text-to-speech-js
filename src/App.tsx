import './App.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { Box, TextField, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';

function App() {
  const [textToSpeech, setTextToSpeech] = useState("");

  const onHandleSubmit = (event: ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(textToSpeech);
  }

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <Typography>
          Write the text you want to transfor to speech:
        </Typography>
        <Box>
          <TextField type='text' name='textToSpeech' value={textToSpeech} onChange={(e) => setTextToSpeech(e.target.value)} />
        </Box>
      </form>
      <Box mt={2}>
        <PlayCircleIcon />
        <PauseCircleIcon />
      </Box>

    </>
  )
}

export default App
