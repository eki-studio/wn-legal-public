import anim_transition_fade from '../components/transition/anim-transition-fade'
import { GenerateTransition } from '../types'

const generateTransition = ({ ...props }: GenerateTransition) => {
  switch (props.transition) {
    case 'fade':
      return anim_transition_fade({
        tl: props.tl,
        context: props.context,
        linkRef: props.linkRef,
      })
  }
}

export default generateTransition
