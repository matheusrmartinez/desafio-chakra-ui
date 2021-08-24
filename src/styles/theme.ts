import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      "500": "#47585B",
    },
    white: {
      "standard": "#ffff"
    }
  },
  fonts: {
    heading: 'Popins',
    body: 'Popins'
  },
  styles: {
    global: {
      body: {
        bg: 'white.standard',
        color: 'gray.500'
      }
    }
  }
})