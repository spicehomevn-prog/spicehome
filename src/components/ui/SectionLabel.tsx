interface Props {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className = '' }: Props) {
  return (
    <p className={`text-sm font-medium uppercase tracking-widest text-accent font-inter mb-3 ${className}`}>
      {children}
    </p>
  )
}
