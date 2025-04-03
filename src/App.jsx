import { HelloWorld } from "./helloWorld";
import { Pessoa } from "./Pessoa";

function App() {

  return (
    <>

    <h1>1ª aula de React </h1>
    <h2>Mãos a obra</h2>
    <HelloWorld />
    <Pessoa
      nome="Jeferson" 
      idade="28"
      profissao="Aux. Administrativo"
      foto="https://i.postimg.cc/Z5mPWjrM/busto.png"
    />

    </>
  )
}

export default App
