import Introduction from '../components/Introduction'
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Social from '../components/Social'

export default function Home() {
  return (
    <div className=' pt-[4rem] bg-gray-500'>
      <Navigation />
      <Introduction />
      <AboutMe />
      <Experience />
      <Social />
      <Footer />
    </div>
  )
  
}
