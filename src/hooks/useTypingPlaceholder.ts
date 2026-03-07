import { useEffect, useState } from 'react'

interface UseTypingPlaceholderProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delay?: number
}

export const useTypingPlaceholder = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 1500
}: UseTypingPlaceholderProps) => {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[index]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.substring(0, text.length + 1))

          if (text === currentWord) {
            setTimeout(() => setIsDeleting(true), delay)
          }
        } else {
          setText(currentWord.substring(0, text.length - 1))

          if (text === '') {
            setIsDeleting(false)
            setIndex((prev) => (prev === words.length - 1 ? 0 : prev + 1))
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(timeout)
  }, [text, isDeleting, index, words, typingSpeed, deletingSpeed, delay])

  return text
}
