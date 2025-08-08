import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Body } from './components/Body';

function App() {
  const anoAtual = new Date().getFullYear();
  return (
    <>
      <Header titulo={'Maycon Gibson'} />
      <Body />
      <Footer autor={`Copyright © ${anoAtual} Todos os direitos reservados.`}/>
    </>
  )
}

export default App
