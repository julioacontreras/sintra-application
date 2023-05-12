import { Screen } from '../types/screen'

export function getDimensions (): Screen {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}
