import { Hero } from '@/components/Hero'
import { LogoGrid } from '@/components/LogoGrid'
import { CenteredCTAText } from '@/components/CenteredCTAText'
import { Features } from '@/components/Features'

export default function Home() {
  return (
    <>
      <Hero />
      <LogoGrid />
      <CenteredCTAText />
      <Features />
    </>
  )
}
