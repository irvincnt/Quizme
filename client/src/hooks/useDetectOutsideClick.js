import { useState, useEffect } from 'react'

/**
 * Hook for handling closing when clicking outside of an element
 * @param {React.node} el
 * @param {boolean} initialState
 */

export const useDetectOutsideClick = (el, initialState, nValidate = true) => {
  const [isActive, setIsActive] = useState(initialState)

  useEffect(() => {
    const onClick = e => {
      // If the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(e.target)) {
        console.log('Existe y click fuera de el')
        setIsActive(!isActive)
      }

      console.group('EXIT')
      console.log('el.current', el.current)
      console.log('e.target', e.target)
      console.log('contains', el.current.contains(e.target))
      console.groupEnd()

      if (!nValidate && el.current.contains(e.target)) {
        console.log('Existe y click en el elemento')
        setIsActive(isActive)
      }
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
