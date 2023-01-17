import { getColor, mode } from '@chakra-ui/theme-tools'

const getOutlineSpecial = (props) => {
  return {
    field: {
      background: 'transparent',
      border: '3px solid',
      borderColor: mode('gray.800', 'gray.600')(props),
      borderRadius: '15px',
      height: '3em',
      fontSize: '1.5em',
      fontWeight: '400',
      '>option': {
        background: mode('white', 'gray.800')(props),
      },
    },
    icon: {
      border: '3px solid',
      borderColor: mode('gray.800', 'gray.600')(props),
      borderRadius: 'full',
      width: '3rem',
      height: '3rem',
      insetEnd: '1.0rem',
      position: 'relative',
      color: mode('currentColor', 'gray.400')(props),
      fontSize: '1.75rem',
    },
  }
}
const getOutlineVariantSelect = (props) => {
  const { theme } = props

  return {
    field: {
      background: mode('green.200', 'green.100')(props),
      color: 'gray.900',
      borderColor: getColor(theme, 'brand.border'),
      // _placeholder: {
      //   color: 'gray.900',
      //   opacity: '1',
      // },
      _focus: {
        borderColor: getColor(theme, 'brand.focusColor'),
        boxShadow: `0px 0px 0px 1px ${getColor(theme, 'brand.focusColor')}`,
      },
      '>option': {
        background: 'inherit',
      },
      ">option[value='coffee']": {
        background: 'black',
        color: 'white',
      },
    },
  }
}

export const SelectTheme = {
  components: {
    Select: {
      variants: {
        outline: getOutlineVariantSelect,
        special: getOutlineSpecial,
      },
    },
  },
}
