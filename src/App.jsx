import { useEffect, useState } from "react";
import "./index.css";
import Header from "./components/Header/Header";
import fetchData, { fetchDataCourses } from "./api/api";
import CoursesTable from "./components/CoursesTable/CoursesTable";
import TablesNotes from "./components/TablesNotes/TablesNotes";

function App() {
  const [data, setData] = useState([]);
  const [dataCourses, setDataCourses] = useState([]);
  const [turma, setTurma] = useState(null);
  const [simulado1, setSimulado1] = useState({});
  const [simulado2, setSimulado2] = useState({});
  const [simulado3, setSimulado3] = useState({});
  const [simulado4, setSimulado4] = useState({});
  const [simulado5, setSimulado5] = useState({});
  const [simulado6, setSimulado6] = useState({});
  const [loadingData, setLoadingData] = useState(false);
  const [loadingCourses, setLoadingCourses] = useState(false);
  let courses = []

  useEffect(() => {
    setLoadingData(true);
    setLoadingCourses(true);

    fetchData()
      .then((response) => {
        setData(response);
      })
      .catch((e) => console.error(e))
      .finally(() => {
        setLoadingData(false);
      });

    fetchDataCourses()
      .then((response) => {
        setDataCourses(response);
      })
      .catch((e) => console.error(e))
      .finally(() => {
        setLoadingCourses(false);
      });
  }, []);
  
  dataCourses.map(item => {
    if(courses.includes(item['curso']) === false) {
      courses.push(item['curso'])
    }
  })

  courses = courses.sort()

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
        <div className="container flex flex-wrap max-w-[1064px] my-0 mx-auto border border-[#eee] rounded-sm p-3 text-dark-grey">
          <div className="flex flex-col gap-3 justify-around mb-4 align-middle w-[100%]">
            <div className="flex gap-3 align-middle">
              <label htmlFor="name" className="font-bold">
                Nome do(a) aluno(a):{" "}
              </label>

              {loadingData ? (
                <span>Carregando...</span>
              ) : (
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

            <div className="flex gap-3 align-middle">
              <span className="font-bold">Curso:</span>

              {loadingCourses ? (
                <span>Carregando...</span>
              ) : (
                <select
                  id="course"
                  className="border rounded-sm p-1 grow"
                >
                  {courses.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </select>
              )}
              
            </div>
          </div>

          <div className="w-[50%] pr-3">
            <TablesNotes {...simulado1} num={1} />
            <TablesNotes {...simulado2} num={2} />
            <TablesNotes {...simulado3} num={3} />
            <TablesNotes {...simulado4} num={4} />
            <TablesNotes {...simulado5} num={5} />
            <TablesNotes {...simulado6} num={6} />
          </div>

          <div className="w-[50%]">
            <CoursesTable />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
