/* eslint-disable no-undef */

const goldenRatio = (1 + Math.sqrt(5)) / 2

export const ANIM_VARS = {
  ease: {
    out: 'power2.out',
    in: 'power2.in',
    inOut: 'power2.inOut',
    none: 'none',
    expoIn: 'expo.in',
    expoOut: 'expo.out',
    expoInOut: 'expo.inOut',
    circIn: 'circ.in',
    circOut: 'circ.out',
    circInOut: 'circ.inOut',
  },
  duration: {
    default: 1 / goldenRatio,
    goldenRatio: goldenRatio,
    stagger: 1 / goldenRatio / 5,
  },
}

export const ANIM_DEFAULTS = {
  scrollBar: {
    duration: ANIM_VARS.duration.goldenRatio,
    ease: ANIM_VARS.ease.expoOut,
  } as gsap.TweenVars,
  cursorMove: {
    duration: ANIM_VARS.duration.goldenRatio,
    ease: ANIM_VARS.ease.expoOut,
  } as gsap.TweenVars,
  title: {
    split: {
      type: 'chars, words',
      charsClass: 'split-title-chars',
      wordsClass: 'split-title-words',
      reduceWhiteSpace: false,
    } as SplitText.Vars,
    from: { autoAlpha: 0, y: '2rem' } as gsap.TweenVars,
    to: {
      autoAlpha: 1,
      stagger: { amount: ANIM_VARS.duration.default / 2 },
      duration: ANIM_VARS.duration.default,
      rotateX: 0,
      y: 0,
      ease: ANIM_VARS.ease.out,
    } as gsap.TweenVars,
  },
  fadeIn: {
    from: { autoAlpha: 0, y: '2rem' } as gsap.TweenVars,
    to: {
      autoAlpha: 1,
      y: 0,
      duration: ANIM_VARS.duration.default * 1.5,
      ease: ANIM_VARS.ease.out,
    } as gsap.TweenVars,
  },
  drawSvg: {
    targets: 'path, line, rect, circle',
    from: { drawSVG: 0 },
    to: {
      drawSVG: '100%',
      duration: ANIM_VARS.duration.goldenRatio,
      ease: 'power1.inOut',
      stagger: { amount: ANIM_VARS.duration.default / 2 },
    } as gsap.TweenVars,
  },
}
