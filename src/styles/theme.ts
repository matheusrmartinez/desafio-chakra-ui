import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      "500": "#47585B",
    },
    darkGray: {
      "500": "#999999"
    },
    white: {
      "standard": "#ffff",
      "700": "#F5F8FA",
    },
    yellow: "#FFBA08"
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
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