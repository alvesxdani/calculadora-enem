function notaSimulado(simulado) {

    const api = 'https://script.google.com/macros/s/AKfycbwfpNvq40kYSEUxOoXjKGZOYe9wLwMtXAXPq7hbfQWwTPq6u2B5zDQ8AmDs-s6HmhH8sg/exec'

    if(simulado == '1sas')
    try {
        fetch('edsas=1sas')
        .then(response => response.json())
        .then(json => setData(json.data))
      } catch(e) {
        console.log(e)
      }
}