import { Checkbox, extendTheme } from '@chakra-ui/react'
import { Section } from '../../components/Section'
import { CheckboxTheme } from '../../theme/Checkbox'
import { ChkboxCustCtrl } from './ChkboxCustCtrl'
import { ChkboxSepLabel } from './ChkboxSepLabel'

export const CheckboxSection = () => (
  <Section heading='Checkbox' theme={extendTheme(CheckboxTheme)}>
    <ChkboxSepLabel mt={2} />
    <ChkboxCustCtrl mb={3} />
    <Checkbox ml={5} mb={3}>
      Checkbox Standard
    </Checkbox>
    <Checkbox ml={5} mb={3} isDisabled>
      Checkbox Disabled
    </Checkbox>
  </Section>
)
