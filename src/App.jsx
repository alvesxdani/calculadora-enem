import { useEffect, useState } from "react";
import "./index.css";
import Header from "./components/Header/Header";
import fetchData from "./api/api";
import Tables from "./components/Tables/Tables";

function App() {
  const [data, setData] = useState([]);
  const [turma, setTurma] = useState(null);
  const [simulado1, setSimulado1] = useState({});
  const [simulado2, setSimulado2] = useState({});
  const [simulado3, setSimulado3] = useState({});
  const [simulado4, setSimulado4] = useState({});
  const [simulado5, setSimulado5] = useState({});
  const [simulado6, setSimulado6] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetchData()
      .then((response) => {
        setData(response);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function handleInfoAluno(value) {
    data[0].filter((item) => {
      item.nome === value
        ? setSimulado1({
            turma: setTurma(item.turma),
            ling: item.ling.toFixed(1),
            mat: item.mat.toFixed(1),
            ch: item.ch.toFixed(1),
            cn: item.cn.toFixed(1),
          })
        : null;
    });

    data[1].filter((item) => {
      item.nome === value
        ? setSimulado2({
            turma: setTurma(item.turma),
            ling: item.ling.toFixed(1),
            mat: item.mat.toFixed(1),
            ch: item.ch.toFixed(1),
            cn: item.cn.toFixed(1),
          })
        : null;
    });

    data[2].filter((item) => {
      item.nome === value
        ? setSimulado3({
            turma: setTurma(item.turma),
            ling: item.ling.toFixed(1),
            mat: item.mat.toFixed(1),
            ch: item.ch.toFixed(1),
            cn: item.cn.toFixed(1),
          })
        : null;
    });

    data[3].filter((item) => {
      item.nome === value
        ? setSimulado4({
            turma: setTurma(item.turma),
            ling: item.ling.toFixed(1),
            mat: item.mat.toFixed(1),
            ch: item.ch.toFixed(1),
            cn: item.cn.toFixed(1),
          })
        : null;
    });

    data[4].filter((item) => {
      item.nome === value
        ? setSimulado5({
            turma: setTurma(item.turma),
            ling: item.ling.toFixed(1),
            mat: item.mat.toFixed(1),
            ch: item.ch.toFixed(1),
            cn: item.cn.toFixed(1),
          })
        : null;
    });

    data[5].filter((item) => {
      item.nome === value
        ? setSimulado6({
            turma: setTurma(item.turma),
            ling: item.ling.toFixed(1),
            mat: item.mat.toFixed(1),
            ch: item.ch.toFixed(1),
            cn: item.cn.toFixed(1),
          })
        : null;
    });
  }

  return (
    <>
      <Header ano={2023} />

      <main className="p-2">
        <div
          className="container flex flex-wrap max-w-[1064px] my-0 mx-auto border border-[#eee] rounded-sm p-3 text-dark-grey"
        >
          <div className="flex flex-col gap-3 justify-around mb-4 align-middle w-[100%]">
            
            <div className="flex gap-3">
            <label htmlFor="name" className="font-bold">
              Nome do(a) aluno(a):{" "}
            </label>

            {loading && <span>Carregando...</span>}

            {!loading && (
              <select
                id="name"
                className="border rounded-sm p-1 grow"
                onChange={({ target }) => handleInfoAluno(target.value)}
              >
                {data[0] &&
                  data[0].map((item, index) => {
                    return (
                      <option id="name" key={index} value={item.nome}>
                        {item.nome}
                      </option>
                    );
                  })}
              </select>
            )}
            </div>

            <div className="">
              <span className="font-bold">Turma</span>: {turma}
            </div>

            <div>
            <span className="font-bold">Curso</span>:
            </div>
          </div>

          <div className="w-[50%] mr-1">
            <Tables {...simulado1} num={1} />
            <Tables {...simulado2} num={2} />
            <Tables {...simulado3} num={3} />
            <Tables {...simulado4} num={4} />
            <Tables {...simulado5} num={5} />
            <Tables {...simulado6} num={6} />
          </div>

          <div className="w-[40%]">
            Teste
          </div>

        </div>
      </main>
    </>
  );
}

export default App;
