import "./assets/styles/App.scss"
import Layout from "./layout/Layout"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"

function App() {

  return (
    <div className="bg-black text-white dark">
      <Layout>
        <Home key="home" />
        <About key="about" />
        <Resume key="resume" />
        <Portfolio key="portfolio" />
        <Contact key="contact" />
      </Layout>
    </div>
  )
}

export default App
