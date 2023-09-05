import { useEffect, useState } from "react"
import './index.css'
import Header from "./components/Header/Header";
import fetchData from "./api/api";
import Tables from "./components/Tables/Tables";

function App() {

  const [data, setData] = useState(null)
  const [info, setInfo] = useState({})

  useEffect(() => {
    fetchData('1sas')
      .then((response) => setData(response))
  }, []);


  function handleInfoAluno(value) {
    data.filter(item => {
      item.nome === value ? setInfo({
        'turma': item.turma,
        'ling': item.ling.toFixed(1),
        'mat': item.mat.toFixed(1),
        'ch': item.ch.toFixed(1),
        'cn': item.cn.toFixed(1)
      }) : null
    })
  }

  return (
    <>
      <Header ano={2023} />

      <main className="p-2">

        <div className="container max-w-[700px] my-0 mx-auto border border-[#eee] rounded-sm p-3 text-dark-grey">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between mb-4 align-middle">
            <label htmlFor="name" className="font-bold">Nome do(a) aluno(a): </label>
            <select
              id="name"
              className="border rounded-sm p-1"
              onChange={({ target }) => handleInfoAluno(target.value)}
            >
              {data && data.map((item, index) => {
                return (
                  <option id="name" key={index} value={item.nome}>{item.nome}</option>
                )
              })}

            </select>
          </div>

          <div className="mb-4">
            <span className="font-bold">Turma</span>: {info['turma']}
          </div>

          <Tables {...info}/>
        </div>
      </main>


    </>
  )
}

export default App
