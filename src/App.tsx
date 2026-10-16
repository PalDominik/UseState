import ColorChanger from "./components/ColorChanger"
import Fejlec from "./components/fejlec"
import Lablec from "./components/lablec"
import ReactKapcsolo from "./components/ReactKomponens"
import SzovegKezeles from "./components/SzovegKezeles"

const App = () => {
  return (
  <>
  <header>
    <h1>Gyakorlás feladatok</h1>
  </header>
    <main>
      <section>
      <Fejlec feladatNeve="Kapcsoló komponens készitése" />
      <ReactKapcsolo/>
      <Lablec feladatNeve="Kapcsoló komponens készitése" feladatKeszitoje="P.Dominik"></Lablec>
      </section>
      <hr />
      <section>
        <Fejlec feladatNeve="Color changer"/>
        <ColorChanger/>
        <Lablec feladatNeve="Hatterszív Váltó komponones" feladatKeszitoje="P.Dominik"/>
      </section>
      <hr />
      <section>
        <Fejlec feladatNeve="Szöveg fgv-ek"/>
        <SzovegKezeles/>
        <Lablec feladatNeve="Szöveg fgv-ek" feladatKeszitoje="P.Dominik"/>
      </section>
      <hr />
    </main>
    <footer>
      <p>UseState feladatok megoldása</p>
    </footer>
  </>
  )
}

export default App
