import React from 'react'
import Button from '@mui/material/Button';
import { ButtonBiz } from '@/components/ui';
import TextField from '@mui/material/TextField';

const Search = () => {
  return (
    <div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="contained">Contained</Button>
        <Button variant="contained">Learn more</Button>

        <ButtonBiz>See more</ButtonBiz>
        <ButtonBiz>Lorem iupsm</ButtonBiz>
    </div>
  )
}

export default Search