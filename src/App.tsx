import './App.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { Box, Button, TextField, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';

function App() {
  const [textToSpeech, setTextToSpeech] = useState("");

  const onHandleSubmit = (event: ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onTransformTextToSpeech();
  }

  const onTransformTextToSpeech = () => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = textToSpeech;
    speech.lang = "es";
    window.speechSynthesis.speak(speech);
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
        <Button onClick={onTransformTextToSpeech}>
          <PlayCircleIcon />
        </Button>
        <Button>
          <PauseCircleIcon />
        </Button>
      </Box>

    </>
  )
}

export default App
