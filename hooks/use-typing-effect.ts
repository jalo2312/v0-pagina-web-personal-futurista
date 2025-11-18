import { useState, useEffect } from 'react'

export function useTypingEffect(text: string, speed: number = 50, delay: number = 0) {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let charIndex = 0

    const startTyping = () => {
      timeout = setTimeout(() => {
        if (charIndex < text.length) {
          setDisplayedText(text.slice(0, charIndex + 1))
          charIndex++
          startTyping()
        }
      }, speed)
    }

    const delayTimeout = setTimeout(() => {
      startTyping()
    }, delay)

    return () => {
      clearTimeout(timeout)
      clearTimeout(delayTimeout)
    }
  }, [text, speed, delay])

  return displayedText
}
