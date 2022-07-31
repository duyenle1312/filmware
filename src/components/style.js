import { makeStyles } from '@mui/styles';

// Return an object
export default makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
    width: '100%',
  },
  toolbar: {
    height: '70px',
  },
  content: {
    flexGrow: 1,
    padding: '2em',
  },
}));
