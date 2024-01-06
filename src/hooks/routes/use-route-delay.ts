import { gsap } from '@/animations/config'
import { useRouter } from 'next/navigation'
import { Url } from 'url'

const useRouteDelay = () => {
  const router = useRouter()
  const handleDelayedRouteChange = (delay: number, path: string | Url) => {
    gsap.delayedCall(delay, router.push, [path])
  }

  return handleDelayedRouteChange
}

export default useRouteDelay
