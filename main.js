const url = "https://rickandmortyapi.com/api/character"


fetch(url)
    .then(res => res.json())
    .then((resJson) => console.log(resJson))
    .catch((err) => console.log(err))