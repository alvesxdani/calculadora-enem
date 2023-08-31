import { useEffect, useState } from "react"
import { NotaSimulado } from "./api/api";

function App() {

  const [data, setData] = useState(null)
  const [notas, setNotas] = useState({})

  useEffect(() => {
    // try {
    //   fetch('https://script.google.com/macros/s/AKfycbwfpNvq40kYSEUxOoXjKGZOYe9wLwMtXAXPq7hbfQWwTPq6u2B5zDQ8AmDs-s6HmhH8sg/exec?edsas=1sas')
    //   .then(response => response.json())
    //   .then(json => setData(json.data))
    // } catch(e) {
    //   console.log(e)
    // }
  }, []);

  function handleNotas(value) {
    console.log(value)
    data.filter(item => {
      item.nome === value ? setNotas({
        'ling': item.ling,
        'mat': item.mat,
        'ch': item.ch,
        'cn': item.cn
      }) : null
    })
  }

  return (
  <>
  <label htmlFor="name">Nome do(a) aluno(a): </label>
  <select id="name" onChange={({target}) => handleNotas(target.value)}>
    {data && data.map((item, index) => {
      return (
        <option id="name" key={index} value={item.nome} defaultValue="">{item.nome}</option>
      )
    })}

  </select>

  <p>Linguagens: {notas['ling']}</p>
  <p>Matemática: {notas['mat']}</p>
  <p>Humanas: {notas['ch']}</p>
  <p>Natureza: {notas['ch']}</p>

    {NotaSimulado('1sas')}
  </>
  )
}

export default App
