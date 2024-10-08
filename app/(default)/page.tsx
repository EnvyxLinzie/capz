export const metadata = {
  title: 'Candra Apple Solution',
  description: 'Service Iphone Dengan Pelayanan Terbaik',
}

import Hero from '@/components/hero-home'
import Process from '@/components/process'
import FeaturesHome from '@/components/features'
import Tabs from '@/components/tabs'
import Target from '@/components/target'
import News from '@/components/news'


export default function Home() {
  return (
    <>
      <Hero />
      <Process />
      <FeaturesHome />
      <Tabs />
      <Target />
      <News />    
    </>
  )
}
