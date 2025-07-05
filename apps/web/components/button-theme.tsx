'use client'
import { Button } from '@nuicoder/neko-ui/components/button'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <Button onClick={() => setIsDark(!isDark)} variant="secondary" size="icon">
      {isDark ? '🌙' : '☀️'}
    </Button>
  )
}
