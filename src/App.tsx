import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { defaultTheme } from './styles/theme/defaultTheme'
import { CartContext, CartContextProvider } from './contexts/CartContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router></Router>
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle></GlobalStyle>
    </ThemeProvider>
  )
}
