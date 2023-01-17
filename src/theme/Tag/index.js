import { mode } from '@chakra-ui/theme-tools'

export const TagTheme = {
  components: {
    Tag: {
      baseStyle: {
        label: {
          color: 'teal.700',
          lineHeight: 1.3,
        },
        closeButton: {
          color: 'red.600',
        },
      },
      variants: {
        subtle: (props) => {
          const { colorScheme: c, theme } = props
          const { bg: bgBadge } = theme.components.Badge.variants.subtle(props)
          return {
            container: {
              bg: mode(`${c}.50`, bgBadge)(props),
            },
          }
        },
      },
    },
  },
}
