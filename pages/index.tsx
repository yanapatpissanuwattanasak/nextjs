import Introduction from '../components/Introduction'
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Social from '../components/Social'
import Youtube from '../components/Youtube'
import AboutMe2 from '../components/AboutMe2'

export default function Home() {
  return (
    <div className=' pt-[4rem] bg-gray-500'>
      <Navigation />
      < Introduction  />
      <AboutMe2 />
      <Experience />
      <Social />
      <Youtube />
      <Footer />
    </div>
  )
  
}
