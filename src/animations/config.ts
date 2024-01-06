import { ENV } from '$/eki.config'
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/dist/DrawSVGPlugin'
import MotionPathPlugin from 'gsap/dist/MotionPathPlugin'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'

//import { DrawSVGPlugin, ScrollTrigger, SplitText } from 'gsap/all'

// Configuring GSAP
gsap.config({
  autoSleep: 120,
  nullTargetWarn: ENV === 'development' ? true : false,
})

gsap.ticker.fps(100)

//Moved in the useGsapConfig hook
const SCROLLTRIGGER_CONFIG: ScrollTrigger.ConfigVars = {
  //autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
  syncInterval: 100,
  limitCallbacks: true,
}
const SCROLLTRIGGER_NORMALIZE = true
const SCROLLTRIGGER_DEFAULTS: ScrollTrigger.Vars = {}

export {
  DrawSVGPlugin,
  MotionPathPlugin,
  SCROLLTRIGGER_CONFIG,
  SCROLLTRIGGER_DEFAULTS,
  SCROLLTRIGGER_NORMALIZE,
  ScrollTrigger,
  SplitText,
  gsap,
}
