import { ekiLog, isProd } from '@/utils/constants/constants'
import { useEffect } from 'react'

const useApp = () => {
  useEffect(() => {
    isProd && console.log(ekiLog)
  }, [])
}

export default useApp
