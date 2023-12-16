import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import SigninPage from './pages/SigninPage/SigninPage';
import { Switch, Route } from "react-router-dom";
import InsertUser from "./pages/InsertUser/InsertUser";
import Header from './components/Header/Header';
import '../src/assets/styles/index.scss'
import ConfirmIdentity from './pages/ConfirmIdentity.jsx/ConfirmIdentity';


function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      {/* <SigninPage /> */}
      {/* <InsertUser /> */}
      <ConfirmIdentity />
    </>
  );
}

export default App;