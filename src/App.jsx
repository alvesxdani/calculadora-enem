import { useEffect, useState } from "react";
import "./index.css";
import Header from "./components/Header/Header";
import fetchData, { fetchDataCourses } from "./api/api";
import CoursesTable from "./components/CoursesTable/CoursesTable";
import TablesNotes from "./components/TablesNotes/TablesNotes";
import ResumeNotes from "./components/ResumeNotes/ResumeNotes";

function App() {
  const [data, setData] = useState([]);
  const [course, setCourse] = useState([]);
  const [dataCourses, setDataCourses] = useState([]);
  const [turma, setTurma] = useState(null);
  const [simulado1, setSimulado1] = useState({ling: 0, mat: 0, ch: 0, cn: 0});
  const [simulado2, setSimulado2] = useState({ling: 0, mat: 0, ch: 0, cn: 0});
  const [simulado3, setSimulado3] = useState({ling: 0, mat: 0, ch: 0, cn: 0});
  const [simulado4, setSimulado4] = useState({ling: 0, mat: 0, ch: 0, cn: 0});
  const [simulado5, setSimulado5] = useState({ling: 0, mat: 0, ch: 0, cn: 0});
  const [simulado6, setSimulado6] = useState({ling: 0, mat: 0, ch: 0, cn: 0});
  const [media, setMedia] = useState({})
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
            ling: Number(item.ling.toFixed(1)),
            mat: Number(item.mat.toFixed(1)),
            ch: Number(item.ch.toFixed(1)),
            cn: Number(item.cn.toFixed(1)),
          })
        : null;
    });

    data[1].filter((item) => {
      item.nome === value
        ? setSimulado2({
            turma: setTurma(item.turma),
            ling: Number(item.ling.toFixed(1)),
            mat: Number(item.mat.toFixed(1)),
            ch: Number(item.ch.toFixed(1)),
            cn: Number(item.cn.toFixed(1)),
          })
        : null;
    });

    data[2].filter((item) => {
      item.nome === value
        ? setSimulado3({
            turma: setTurma(item.turma),
            ling: Number(item.ling.toFixed(1)),
            mat: Number(item.mat.toFixed(1)),
            ch: Number(item.ch.toFixed(1)),
            cn: Number(item.cn.toFixed(1)),
          })
        : null;
    });

    data[3].filter((item) => {
      item.nome === value
        ? setSimulado4({
            turma: setTurma(item.turma),
            ling: Number(item.ling.toFixed(1)),
            mat: Number(item.mat.toFixed(1)),
            ch: Number(item.ch.toFixed(1)),
            cn: Number(item.cn.toFixed(1)),
          })
        : null;
    });

    data[4].filter((item) => {
      item.nome === value
        ? setSimulado5({
            turma: setTurma(item.turma),
            ling: Number(item.ling.toFixed(1)),
            mat: Number(item.mat.toFixed(1)),
            ch: Number(item.ch.toFixed(1)),
            cn: Number(item.cn.toFixed(1)),
          })
        : null;
    });

    data[5].filter((item) => {
      item.nome === value
        ? setSimulado6({
            turma: setTurma(item.turma),
            ling: Number(item.ling.toFixed(1)),
            mat: Number(item.mat.toFixed(1)),
            ch: Number(item.ch.toFixed(1)),
            cn: Number(item.cn.toFixed(1)),
          })
        : null;
    });

    setMedia({
      ling: Number((simulado1['ling'] + simulado2['ling'] + simulado3['ling'] + simulado4['ling'] + simulado5['ling'] + simulado6['ling']) / 4).toFixed(1),
      mat: Number((simulado1['mat'] + simulado2['mat'] + simulado3['mat'] + simulado4['mat'] + simulado5['mat'] + simulado6['mat']) / 4).toFixed(1),
      ch: Number((simulado1['ch'] + simulado2['ch'] + simulado3['ch'] + simulado4['ch'] + simulado5['ch'] + simulado6['ch']) / 4).toFixed(1),
      cn: Number((simulado1['cn'] + simulado2['cn'] + simulado3['cn'] + simulado4['cn'] + simulado5['cn'] + simulado6['cn']) / 4).toFixed(1)
    })
  }

  function handleCourse(value) {
    setCourse([])
    dataCourses.filter((item) => {
      if(item['curso'] === value)
       setCourse(prev => [...prev, {
      ano: item.ano,
      ies: item.ies,
      campus: item.campus,
      nota: item.notasCorte.toFixed(1)
      }])
    })
  }

  return (
    <>
      <Header ano={2023} />

      <main className="p-2">
        <div className="container flex flex-wrap max-w-[1064px] my-0 mx-auto border border-[#eee] rounded-sm p-3 text-dark-grey max-sm:flex-col">
          <div className="flex flex-col gap-3 justify-between mb-4 align-middle w-[100%]">
            <div className="flex gap-3 align-middle">
              <label htmlFor="name" className="font-bold">
                Nome do(a) aluno(a):{" "}
              </label>

              {loadingData ? (
                <span>Carregando...</span>
              ) : (
                <select
                  id="name"
                  className="border rounded-sm p-1 grow w-[80%] "
                  onChange={({ target }) => handleInfoAluno(target.value)}
                >
                  <option id="name" value={''}></option>
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

            <div className="flex gap-3 items-center">
              <span className="font-bold">Curso:</span>

              {loadingCourses ? (
                <span>Carregando...</span>
              ) : (
                <select
                  id="course"
                  className="border rounded-sm p-1 w-[100%]"
                  onChange={({target}) => handleCourse(target.value)}
                >
                  <option id="name" value={''}></option>
                  {courses.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </select>
              )}
              
            </div>
          </div>

          <div className="w-[100%] pb-10 pt-10">
            <ResumeNotes {...media}/>
          </div>

          <div className="w-[50%] pr-3 max-sm:w-[100%]">
            <TablesNotes {...simulado1} num={1} />
            <TablesNotes {...simulado2} num={2} />
            <TablesNotes {...simulado3} num={3} />
            <TablesNotes {...simulado4} num={4} />
            <TablesNotes {...simulado5} num={5} />
            <TablesNotes {...simulado6} num={6} />
          </div>

          <div className="w-[50%] max-sm:w-[100%]">
            <CoursesTable course={course}/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
