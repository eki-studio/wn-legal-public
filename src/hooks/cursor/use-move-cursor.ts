/**
 * Custom hook that moves the cursor based on user interaction and updates the store.
 * @param cursorRef - Reference to the cursor element.
 */

import { DEBUG, USE } from '$/eki.config'
import { ScrollTrigger, gsap } from '@/animations/config'
import { useStoreCursor } from '@/store'
import { useEffect } from 'react'

const useMoveCursor = (cursorRef: any) => {
  //access store
  const hasMoved = useStoreCursor.use.hasMoved()
  const setHasMoved = useStoreCursor.use.setHasMoved()

  DEBUG.cursor && console.log('---------Cursor Debug-----------')
  DEBUG.cursor && console.log('Cursor Store', useStoreCursor.getState())

  useEffect(() => {
    if (USE.cursor === false) return
    gsap.registerPlugin(ScrollTrigger)
    //Initial movemenet
    const { innerWidth, innerHeight } = window
    cursorRef.current.moveTo(innerWidth / 2, innerHeight / 2)

    const observe = ScrollTrigger.observe({
      target: window,
      type: 'pointer',
      onMove: (self) => {
        cursorRef.current.moveTo(self.x, self.y)
        hasMoved === false && setHasMoved(true)
        DEBUG.cursor && console.log('cursor position', self.x, self.y)
      },
    })

    // Cleanup function to remove event listeners
    return () => {
      observe.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMoved])
}

export default useMoveCursor
