import axios from "axios";

const fetchData = async (edSimulado) => {
    let data;

    try {
      const response = await axios.get(`https://script.google.com/macros/s/AKfycbwfpNvq40kYSEUxOoXjKGZOYe9wLwMtXAXPq7hbfQWwTPq6u2B5zDQ8AmDs-s6HmhH8sg/exec?edsas=${edSimulado}`)
      data = await response.data.data;
    }
    catch (e) {
      console.log(e)
    }

    return data;
  }

  export default fetchData