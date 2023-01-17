import { Button, Stack, useToast } from '@chakra-ui/react'
import { Section } from '../components/Section'

export const ToastSection = () => {
  const toast = useToast()

  return (
    <Section heading='Toast' description='Customized Toast'>
      <Stack m={4} spacing={3}>
        <Button
          onClick={() =>
            toast({
              status: 'info',
              title: `Custom variant toast`,
              variant: 'custom',
              position: 'bottom-right',
              isClosable: true,
            })
          }
        >
          Custom Variant
        </Button>
        <Button
          onClick={() =>
            toast({
              status: 'info',
              title: `Toast with colors`,
              position: 'bottom-right',
              isClosable: true,
            })
          }
        >
          Info (default)
        </Button>
        <Button
          onClick={() =>
            toast({
              variant: 'subtle',
              status: 'success',
              title: `Toast with colors`,
              position: 'bottom-right',
              isClosable: true,
            })
          }
        >
          Success (subtle)
        </Button>
        <Button
          onClick={() =>
            toast({
              variant: 'left-accent',
              status: 'warning',
              title: `Toast with colors`,
              position: 'bottom-right',
              isClosable: true,
            })
          }
        >
          Warning (left-accent)
        </Button>
        <Button
          onClick={() =>
            toast({
              variant: 'top-accent',
              status: 'error',
              title: `Toast with colors`,
              position: 'bottom-right',
              isClosable: true,
            })
          }
        >
          Error (top-accent)
        </Button>
      </Stack>
    </Section>
  )
}
