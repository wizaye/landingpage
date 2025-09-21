import React from 'react'
import { cn } from '@/lib/utils'

interface PulsatingIndicatorProps {
  /** The size of the indicator */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** The color variant of the indicator */
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  /** Animation duration in milliseconds */
  duration?: number
  /** Whether the indicator should pulse */
  animate?: boolean
  /** Additional CSS classes */
  className?: string
  /** Custom color (overrides variant) */
  color?: string
}

const sizeClasses = {
  sm: 'w-2 h-2',
  md: 'w-3 h-3',
  lg: 'w-4 h-4',
  xl: 'w-6 h-6'
}

const variantClasses = {
  default: 'bg-blue-500',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  error: 'bg-red-500',
  info: 'bg-cyan-500'
}

export function PulsatingIndicator({
  size = 'md',
  variant = 'default',
  duration = 1000,
  animate = true,
  className,
  color
}: PulsatingIndicatorProps) {
  const baseClasses = cn(
    'rounded-full relative',
    sizeClasses[size],
    !color && variantClasses[variant],
    className
  )

  const pulseClasses = cn(
    'absolute inset-0 rounded-full opacity-75',
    !color && variantClasses[variant],
    animate && 'animate-ping'
  )

  const customStyle = color ? { backgroundColor: color } : {}
  const animationStyle = animate ? { animationDuration: `${duration}ms` } : {}

  return (
    <div className="relative inline-flex">
      {/* Pulsing ring */}
      <span
        className={pulseClasses}
        style={{ ...customStyle, ...animationStyle }}
      />
      {/* Solid center */}
      <span
        className={baseClasses}
        style={customStyle}
      />
    </div>
  )
}

// Preset variants for common use cases
export function OnlineIndicator({ className, ...props }: Omit<PulsatingIndicatorProps, 'variant'>) {
  return (
    <PulsatingIndicator
      variant="success"
      className={cn('', className)}
      {...props}
    />
  )
}

export function OfflineIndicator({ className, ...props }: Omit<PulsatingIndicatorProps, 'variant' | 'animate'>) {
  return (
    <PulsatingIndicator
      variant="error"
      animate={false}
      className={cn('', className)}
      {...props}
    />
  )
}

export function LoadingIndicator({ className, ...props }: Omit<PulsatingIndicatorProps, 'variant'>) {
  return (
    <PulsatingIndicator
      variant="info"
      duration={800}
      className={cn('', className)}
      {...props}
    />
  )
}

export function WarningIndicator({ className, ...props }: Omit<PulsatingIndicatorProps, 'variant'>) {
  return (
    <PulsatingIndicator
      variant="warning"
      className={cn('', className)}
      {...props}
    />
  )
}

// Composite indicator with label
interface IndicatorWithLabelProps extends PulsatingIndicatorProps {
  label: string
  position?: 'left' | 'right' | 'top' | 'bottom'
}

export function IndicatorWithLabel({
  label,
  position = 'right',
  className,
  ...indicatorProps
}: IndicatorWithLabelProps) {
  const wrapperClasses = cn(
    'inline-flex items-center gap-2',
    {
      'flex-row': position === 'right',
      'flex-row-reverse': position === 'left',
      'flex-col': position === 'bottom',
      'flex-col-reverse': position === 'top'
    },
    className
  )

  return (
    <div className={wrapperClasses}>
      <PulsatingIndicator {...indicatorProps} />
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  )
}

export default PulsatingIndicator