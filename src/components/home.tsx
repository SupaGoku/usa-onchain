import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

import { Cta } from './cta'
import { European } from './european'
import { Faq } from './faq'
import { Footer } from './footer'
import { Header } from './header'
import { Hero } from './hero'
import { HowToBuy } from './how-to-buy'
import { Roadmap } from './road-map'
import { Socials } from './socials'
import { Whitepaper } from './whitepaper'

export const Home = () => {
  return (
    <>
      <main className="relative flex min-h-screen flex-col items-center overflow-x-hidden">
        <Header />

        <Hero />
        <Cta />
        <Socials />
        {/* <Dollar /> */}
        <Whitepaper />
        <Faq />
        <Roadmap />
        <HowToBuy />
        <European />

        <Footer />
      </main>
      <Analytics />
      <SpeedInsights />
    </>
  )
}
