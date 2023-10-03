import {useCallback, useEffect} from 'react'

export const useScrollToBottom = (onBottom: () => void, offset = 0) => {
  const handleOnScroll = useCallback(() => {
    const scrollNode: Element = document.scrollingElement || document.documentElement
    const scrollContainerBottomPosition = Math.round(scrollNode.scrollTop + window.innerHeight)
    const scrollPosition = Math.round(scrollNode.scrollHeight - offset)

    if (scrollPosition <= scrollContainerBottomPosition) {
      onBottom()
    }
  }, [offset, onBottom])

  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll)

    return () => window.removeEventListener('scroll', handleOnScroll)
  })
}
