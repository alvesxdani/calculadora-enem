import axios from "axios";

const fetchData = async () => {
  const api = 'https://script.google.com/macros/s/AKfycbwfpNvq40kYSEUxOoXjKGZOYe9wLwMtXAXPq7hbfQWwTPq6u2B5zDQ8AmDs-s6HmhH8sg/exec'
  const simulado1 = await axios.get(`${api}?edsas=1sas`).then(response => response.data.data)
  const simulado2 = await axios.get(`${api}?edsas=2sas`).then(response => response.data.data)
  const simulado3 = await axios.get(`${api}?edsas=3sas`).then(response => response.data.data)
  const simulado4 = await axios.get(`${api}?edsas=4sas`).then(response => response.data.data)
  const simulado5 = await axios.get(`${api}?edsas=5sas`).then(response => response.data.data)
  const simulado6 = await axios.get(`${api}?edsas=6sas`).then(response => response.data.data)

  return [simulado1, simulado2, simulado3, simulado4, simulado5, simulado6];
  }

export const fetchDataCourses = async () => {
  const api = 'https://script.google.com/macros/s/AKfycbxa9j5pF5qpRwNyB-uMQiOWDzEcAAwYNuGML7VHy4r0ecg8OvZB7V8_4wdR3ulwdTas/exec'
  const dataCourses = await axios.get(`${api}?data=notascorte`).then(response => response.data.data)

  return dataCourses;
}

export default fetchData