import Intro from "./components/Intro/Intro"
import Bar from "./components/Bar/Bar"
import Features from './components/Feactures/Features'
import Findout from "./components/Findout/Findout"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <header>
        <Bar />
        <Intro />
      </header>
      <main>
        <Features />
        <Findout />
      </main>
      <Footer />
    </>
  )
}

export default App
