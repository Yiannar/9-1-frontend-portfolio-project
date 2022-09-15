// I need to get the click submit button on the chararcters page 
//1. const query select form, 
// 2. use addEventListener click, 
// to be able to run the api to get the character inputted 
// name, image, status, species, and episodes





const form = document.querySelector("form")
    // console.log(form)

const id = document.querySelector("#character")
    // console.log(id)

const output = document.querySelector(".output")
    // console.log(output)
const p = document.querySelector(".hidden")
const searched = document.querySelector(".searched")


// using addEventListener to Submit so that nameId can have the same value as the character name to match up with api character id#
form.addEventListener("submit", (event) => {
    // prevents default behavior (page will not refresh)
    event.preventDefault()

    console.log(event.target.value)

    let nameId
    if (id.value.toLowerCase() === "rick sanchez" || id.value.toLowerCase() === "rick") {
        nameId = 1
    } else if (id.value.toLowerCase() === "morty smith" || id.value.toLowerCase() === "morty") {
        nameId = 2
    } else if (id.value.toLowerCase() === "summer smith" || id.value.toLowerCase() === "summer") {
        nameId = 3
    } else if (id.value.toLowerCase() === "beth smith" || id.value.toLowerCase() === "beth") {
        nameId = 4
    } else if (id.value.toLowerCase() === "jerry Smith" || id.value.toLowerCase() === "jerry") {
        nameId = 5
    } else if (id.value.toLowerCase() === "abadango cluster princess" || id.value.toLowerCase() === "princess") {
        nameId = 6
    } else if (id.value.toLowerCase() === "abradolf lincler" || id.value.toLowerCase() === "abradolf") {
        nameId = 7
    } else if (id.value.toLowerCase() === "adjudicator rick" || id.value.toLowerCase() === "adjudicator") {
        nameId = 8
    } else if (id.value.toLowerCase() === "agency director" || id.value.toLowerCase() === " director") {
        nameId = 9
    } else if (id.value.toLowerCase() === "alan rails" || id.value.toLowerCase() === "alan") {
        nameId = 10
    } else if (id.value.toLowerCase() === "albert einstein" || id.value.toLowerCase() === "einstein") {
        nameId = 11
    } else if (id.value.toLowerCase() === "alexander") {
        nameId = 12
    } else if (id.value.toLowerCase() === "alien googah" || id.value.toLowerCase() === "googah") {
        nameId = 13
    } else if (id.value.toLowerCase() === "alien morty") {
        nameId = 14
    } else if (id.value.toLowerCase() === "alien rick") {
        nameId = 15
    } else if (id.value.toLowerCase() === "amish cyborg" || id.value.toLowerCase() === "cyborg") {
        nameId = 16
    } else if (id.value.toLowerCase() === "annie") {
        nameId = 17
    } else if (id.value.toLowerCase() === "antenna morty") {
        nameId = 17
    } else if (id.value.toLowerCase() === "antenna rick") {
        nameId = 18
    } else if (id.value.toLowerCase() === "ants in my eyes johnson" || id.value.toLowerCase() === "johnson" || id.value.toLowerCase() === "ant") {
        nameId = 19
    }
    form.reset()
        // using ${nameId} to allow the id number to recieve the character data to be dynamic
    const url = `https://rickandmortyapi.com/api/character/${nameId}`
    console.log(url)




    fetch(url)
        .then(res => res.json())
        .then((res) => {
            console.log(res)
            console.log(res.status)
                // append everything


            let charName = res.name

            let currentStat = res.status
            let pic = res.image
            let speciesOfChar = res.species
                // since episodes is an array we can use a for loop to iterate through each index and return an episode link?/ or iterate through each index to return a random link to an episode
            let episodesCharIsIn = res.episode
            console.log(episodesCharIsIn)
            let numEpisode = res.episode.length
            const episode = document.createElement("p")
            episode.innerHTML = `<strong>Number of Episodes featured in:</strong> ${numEpisode}`


            const name = document.createElement("p")
            name.innerHTML = `<strong>Name</strong>:${charName}`
                // Used data variables given via api
            const status = document.createElement("p")
            status.innerHTML = `<strong>Status</strong>:${currentStat}`
            const image = document.createElement("p")
            image.innerHTML = `<img src=${pic} alt=Photo of the character></img>`
            const species = document.createElement("p")
            species.innerHTML = `<strong>Species</strong>:${speciesOfChar}`
                // for each episode make a link 
                // const episodeLink = document.createElement("a")
                // episodeLink.setAttribute("href", "#")
                // episodeLink.innerHTML = '<strong>Episode</strong>:'
                // episodeLink.innerHTML = `${episodesCharIsIn}`

            output.innerHTML = ""
            output.append(image, name, status, species, episode)
                // console.log(status, species, episodeLink)

            p.remove()
            const link = document.createElement("a")
            link.setAttribute("href", "#")
            link.innerHTML = `${charName}`

            searched.append(link)

            p.innerHTML = ""
            link.addEventListener("click", (event) => {
                fetch(url)
                    .then(res => res.json())
                    .then((res) => {
                        const ul = document.createElement("ul")
                        ul.innerHTML = `${charName}`
                        searched.innerHTML = ""
                        searched.append(name)
                    })
                    // .innerHTML = `<h2>${charName}</h2>` // this is allowing the text to be dynamic 
                    // searched.append(image, name, status, species, episodeLink)

            })
        })


    .catch((error) => {
        console.log(error)
    })

})