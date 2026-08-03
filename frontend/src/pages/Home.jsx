import useReveal from '../hooks/useReveal.js'
import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import Hero from '../components/home/Hero.jsx'
import About from '../components/home/About.jsx'
import Stack from '../components/home/Stack.jsx'
import Portfolio from '../components/home/Portfolio.jsx'
import Order from '../components/home/Order.jsx'
import Contact from '../components/home/Contact.jsx'

export default function Home() {
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stack />
        <Portfolio />
        <Order />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
