import { useState, useEffect } from 'react'

/**
 * Hook for handling closing when clicking outside of an element
 * @param {React.node} el
 * @param {boolean} initialState
 */

export const useDetectOutsideClick = (el, initialState, isBlocked = true, content) => {
  const [isActive, setIsActive] = useState(initialState)

  useEffect(() => {
    const onClick = e => {
      // If the active element exists and is clicked outside of
      // console.group('')
      if (isBlocked && el.current !== null && !el.current.contains(e.target)) {
        console.log('No bloqueado, Existe y click fuera de el')
        setIsActive(!isActive)
      }

      if (!isBlocked && el.current !== null && !el.current.contains(e.target)) {
        // console.log('Bloqueado y click afuera')
        setIsActive(!isActive)
      }

      if (!isBlocked && el.current.contains(e.target)) {
        // console.log('bliqueado, Existe y click en el elemento')
        setIsActive(isActive)
      }

      // console.log('Bloqueado', isBlocked)
      // console.log('el.current', el.current)
      // console.log('e.target', e.target)
      // console.log('contains', el.current.contains(e.target))
      // console.groupEnd()
    }

    // If the item is active (ie open) then listen for clicks outside
    if (isActive) {
      window.addEventListener('click', onClick)
    }

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [isActive, el])

  return [isActive, setIsActive]
}
