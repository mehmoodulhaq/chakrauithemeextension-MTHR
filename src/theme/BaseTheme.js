import { extendTheme } from '@chakra-ui/react'
import { customAlertVariant } from './Alert/customAlert'

export const BaseTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  styles: {
    global: (props) => {
      return {
        _selection: {
          bg: 'purple.400',
          color: 'white',
        },
      }
    },
  },
  colors: {
    brand: {
      border: '#2D8540',
      focusColor: '#4BDF6B',
    },
  },
  fonts: {
    body: 'Inter, sans-serif',
  },
  components: {
    // This is a custom variant for Toast
    // It has to be here because Toast is rendered in a portal
    Alert: {
      variants: {
        subtle: customAlertVariant,
        'left-accent': customAlertVariant,
        'top-accent': customAlertVariant,
        solid: customAlertVariant,

        custom: {
          container: {
            border: '1px solid',
            borderColor: 'orange.500',
            bg: 'orange.800',
            color: 'orange.200',
          },
          icon: {
            color: 'orange.200',
          },
        },
      },
    },
  },
})
