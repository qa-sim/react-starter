import { CssBaseline, ThemeProvider } from '@mui/material'
import routes from 'core/navigation'
import darkTheme from 'core/theme/dark'
import lightTheme from 'core/theme/light'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useAppSelector } from 'store/hooks'

function App() {
  const { isDarkMode } = useAppSelector(state => state.app)
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          {routes.map(route => (
            <Route
              key={route.path}
              element={<route.component />}
              path={route.path}
            />
          ))}
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
