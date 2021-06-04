import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  })
);
const SearchBar: React.FC = () => {
  const classes = useStyle();
  return (
    <div className='search-bar__container'>
      <form className={classes.root}>
        <TextField
          color='primary'
          variant='outlined'
          id='search-bar__input'
          label='search gif!'
        />
        <Button variant='contained' color='primary'>
          Primary
        </Button>
      </form>
    </div>
  );
};
export default SearchBar;
