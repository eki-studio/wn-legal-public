import anim_btnIcon from '../components/button/anim-button'
import anim_FadeIn from '../components/fade/anim-fade-in'
import anim_FooterLinks from '../components/footer/anim-footer-links'
import anim_ModalBtn from '../components/modal/anim-modal-btn'
import anim_ServiceDropdown from '../components/pages/home/services/anim-service-dropdown'
import anim_TeamDropdown from '../components/pages/home/team/anim-team-dropdown'
import anim_TeamImage from '../components/pages/home/team/anim-team-image'
import anim_SvgDraw from '../components/svg/anim-svg-draw'
import anim_SvgFooter from '../components/svg/anim-svg-footer'
import anim_SvgHero from '../components/svg/anim-svg-hero'
import anim_Title from '../components/title/anim-title'
import { GenerateAnim } from '../types'

export const generateAnim = ({ ...props }: GenerateAnim) => {
  switch (props.anim) {
    case 'title':
      anim_Title({
        comp: props.comp,
        tl: props.tl,
        context: props.context,
        animVars: props.animVars,
        id: props.id,
      })
      break
    case 'fade-in':
      return anim_FadeIn({
        comp: props.comp,
        tl: props.tl,
        context: props.context,
        animVars: props.animVars,
        id: props.id,
      })
    case 'draw-svg':
      return anim_SvgDraw({
        comp: props.comp,
        tl: props.tl,
        context: props.context,
        animVars: props.animVars,
        id: props.id,
      })
    case 'team-image':
      return anim_TeamImage({
        comp: props.comp,
        tl: props.tl,
        context: props.context,
        animVars: props.animVars,
        id: props.id,
      })
    case 'team-dropdown':
      return anim_TeamDropdown({
        comp: props.comp,
        tl: props.tl,
        context: props.context,
        animVars: props.animVars,
        id: props.id,
      })

    case 'service-dropdown':
      return anim_ServiceDropdown({
        comp: props.comp,
        tl: props.tl,
        context: props.context,
        animVars: props.animVars,
        id: props.id,
        theme: props.theme,
      })
    case 'modal-btn':
      return anim_ModalBtn({
        comp: props.comp,
        tl: props.tl,
        context: props.context,
        animVars: props.animVars,
        id: props.id,
      })

    case 'footer-links':
      return anim_FooterLinks({
        comp: props.comp,
        tl: props.tl,
        context: props.context,
        animVars: props.animVars,
        id: props.id,
      })
    case 'hero-svg':
      return anim_SvgHero({
        comp: props.comp,
        tl: props.tl,
        context: props.context,
        animVars: props.animVars,
        id: props.id,
      })
    case 'footer-svg':
      return anim_SvgFooter({
        comp: props.comp,
        tl: props.tl,
        context: props.context,
        animVars: props.animVars,
        id: props.id,
      })

    case 'btn-icon':
      return anim_btnIcon({
        comp: props.comp,
        tl: props.tl,
        context: props.context,
        animVars: props.animVars,
        id: props.id,
      })
  }
}
