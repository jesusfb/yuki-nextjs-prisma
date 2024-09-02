import { Slot } from '@radix-ui/react-slot'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  description?: string
  message?: string
  asChild?: boolean
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  description,
  message,
  className = '',
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : Input

  return (
    <fieldset id={props.name} name={props.name} className={cn('space-y-2', className)}>
      {label && <Label htmlFor={props.name}>{label}</Label>}

      <Comp {...props} />

      {description && <small className="text-xs text-muted">{description}</small>}
      <small className="text-xs text-destructive">{message}</small>
    </fieldset>
  )
}
