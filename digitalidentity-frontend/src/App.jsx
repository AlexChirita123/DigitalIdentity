import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import SigninPage from './pages/SigninPage';
import {Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <SigninPage />
    </>
  );
}

export default App;