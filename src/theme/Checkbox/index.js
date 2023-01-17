import { mode } from '@chakra-ui/theme-tools'

export const CheckboxTheme = {
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          borderRadius: 'md',
          bg: 'blue.700',
          border: '2px solid',
          borderColor: 'red.400',
          _disabled: {
            bg: 'gray.600',
            border: '2px solid',
            color: 'green.500',
            opacity: '0.4',
          },
        },
      },
      sizes: {
        xl: {
          control: {
            w: '1.5em',
            h: '1.5em',
          },
        },
      },
      variants: {
        'custom-control': (props) => ({
          control: {
            position: 'relative',
            border: '0.1em solid',
            borderRadius: 'full',
            borderColor: mode('blue.300', 'blue.500')(props),
            backgroundColor: mode('white', 'gray.900')(props),
            backgroundClip: 'padding-box',
            _checked: {
              border: '0.1em solid transparent',
            },
            _hover: {
              border: '0.1em solid transparent',
              _before: {
                content: "''",
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: -1,
                margin: '-0.1em',
                borderRadius: 'inherit',
                border: '0.1em solid transparent',
                background: `linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))`,
              },
            },
          },
        }),
      },
      defaultProps: {
        size: 'xl',
      },
    },
  },
}
