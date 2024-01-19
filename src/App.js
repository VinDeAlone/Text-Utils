import './App.css';
import Actions from './Components/Actions/Actions';
import Display from './Components/Display/Display';
import Type from './Components/Type/Type';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

function App() {
  return (
    <div>
      <AppBar position="fixed" color="primary">
        <Typography variant="h6" align='center'>
          Text Decoder
        </Typography>
      </AppBar>
      <br />
      <br />
      <Type />
      <div>
        Actions :
      </div>
      <hr />
      <Actions />
      <hr />
      <Display />
    </div>
  );
}

export default App;
