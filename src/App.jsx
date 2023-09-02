import { useEffect, useState } from "react"
import './index.css'
import Header from "./components/Header/Header";
import fetchData from "./api/api";

function App() {

  const [data, setData] = useState(null)
  const [notas, setNotas] = useState({})

  useEffect(() => {
     fetchData('1sas')
     .then((response) => setData(response))
  }, []);


  function handleInfoAluno(value) {
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
    <Header ano={2023} />

    <main>

      <div className="my-0 mx-auto w-4 border rounded-sm">
        aa
      </div>

    {/* <label htmlFor="name">Nome do(a) aluno(a): </label>
      <select id="name" onChange={({ target }) => handleInfoAluno(target.value)}>
        {data && data.map((item, index) => {
          return (
            <option id="name" key={index} value={item.nome} defaultValue="">{item.nome}</option>
          )
        })}

      </select>

      <table className="table-auto">

        <thead>
          <tr>
            <th align="center" colSpan={4}>1º Simulado</th>
          </tr>

          <tr>
            <th>
              LING
            </th>

            <th>
              MAT
            </th>

            <th>
              CH
            </th>

            <th>
              CN
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              {notas['ling']}
            </td>

            <td>
              {notas['mat']}
            </td>

            <td>
              {notas['ch']}
            </td>

            <td>
              {notas['cn']}
            </td>
          </tr>
        </tbody>
      </table> */}
    </main>
      

    </>
  )
}

export default App
