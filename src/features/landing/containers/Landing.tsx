import { Button, Paper, Typography } from '@mui/material'
import appSlice from 'features/app/reducers'
import React from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'

const styles = {
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    mt: 2,
  },
}

const Landing = () => {
  const dispatch = useAppDispatch()
  const isDarkMode = useAppSelector(state => state.app.isDarkMode)
  return (
    <Paper sx={styles.root}>
      <Typography variant="h2">React Starter</Typography>
      <Button
        sx={styles.button}
        variant="outlined"
        onClick={() => dispatch(appSlice.actions.setDarkMode(!isDarkMode))}
      >
        Toggle Theme
      </Button>
    </Paper>
  )
}

export default Landing
