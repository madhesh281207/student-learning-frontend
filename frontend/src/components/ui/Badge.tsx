type BadgeTone = 'success' | 'warning' | 'danger' | 'neutral'

interface BadgeProps {
  tone?: BadgeTone
  children: string
}

function Badge({ tone = 'neutral', children }: BadgeProps) {
  const tones: Record<BadgeTone, string> = {
    success: 'bg-green-50 text-green-700',
    warning: 'bg-yellow-50 text-yellow-700',
    danger: 'bg-red-50 text-red-700',
    neutral: 'bg-gray-100 text-gray-700',
  }

  return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${tones[tone]}`}>{children}</span>
}

export default Badge
