import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import SigninPage from './pages/SigninPage';
import InsertUser from "./pages/InsertUser/InsertUser";

import RelevantInfo from './components/RelevantInfo/RelevantInfo';


function App() {
  return (
    <>
      {/* <CssBaseline />
      <SigninPage /> */}
      <InsertUser/>
      
    </>
  );
}

export default App;