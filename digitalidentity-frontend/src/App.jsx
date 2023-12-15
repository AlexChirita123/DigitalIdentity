import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import SigninPage from './pages/SigninPage';
import { Switch, Route } from "react-router-dom";
import InsertUser from "./pages/InsertUser/InsertUser";
import Header from './components/Header/Header';
import RelevantInfo from './components/RelevantInfo/RelevantInfo';


function App() {
  return (
    <>
      <Header />
      <CssBaseline />
      <SigninPage />
    </>
  );
}

export default App;