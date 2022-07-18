import { Contact } from '../components/contact'
import Description from '../components/description'
import Events from '../components/events'
import Hero from '../components/hero'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Description />
      <Events />
      <Contact />
    </div>
  )
}
