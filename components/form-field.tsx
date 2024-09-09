import { Slot } from '@radix-ui/react-slot'

import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Label } from './ui/label'

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  description?: string
  message?: string
  asChild?: boolean
}

export const FormField: React.FC<FormFieldProps> = ({
  className,
  disabled = false,
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : Input

  return (
    <fieldset name={props.name} className={cn('space-y-2', className)} disabled={disabled}>
      {props.label && <Label htmlFor={props.name}>{props.label}</Label>}
      <Comp {...props} />
      {props.description && <small className="text-muted">{props.description}</small>}
      {props.message && <small className="text-destructive">{props.message}</small>}
    </fieldset>
  )
}
FormField.displayName = 'FormField'
