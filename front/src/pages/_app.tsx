import '@/styles/levels.css'
import '@/styles/opacities.css'
import '@/styles/fonts.css'
import '@/styles/colors.css'
import '@/styles/radius.css'
import '@/styles/globals.css'
import '@/styles/spaces.css'
import '@/styles/buttons.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
