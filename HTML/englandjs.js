// const DOMAIN = "http://livescore-api.com/api-client/leagues/table.json?key=7RdxOmdooHD8HFJ7&secret=vpvAC0FwBlWjniou9C2YZgmnX0vFGeNb";
// const API_KEY = "7RdxOmdooHD8HFJ7"
// const BASE_URL = `${DOMAIN}?apiKey=${API_KEY}&s=`;


// Epl

const eplTableDiv = document.querySelector(".EplTable")
async function requestFromAPI() {
  try {
    const result = await axios.get("https://cors-anywhere.herokuapp.com/https://livescore-api.com/api-client/leagues/table.json?competition_id=2&key=7RdxOmdooHD8HFJ7&secret=vpvAC0FwBlWjniou9C2YZgmnX0vFGeNb");
    // dataDisplay(result.data.data.table)
    console.log(result.data.data.table)
    result.data.data.table.forEach((team) => {
      let teamWrapper = document.createElement('div')
      teamWrapper.className = "team-results"

      let teamName = document.createElement('h2')
      teamName.textContent = team.name
      console.log(team.name)
      teamWrapper.append(teamName)
    }
    )
    
  } catch (error) {
    console.log(error)
  }
}

requestFromAPI()

// function dataDisplay(dataArray) {
//   for (let i = 0; i < dataArray.length; i++) {
//     console.log(dataArray[i].name)
//   }

// }




// function displayLoadedData(table) {
//   for (let i = 0; i < table; i++) {
//     console.log(displayLoadedData(i))
  





    // const rank = document.getElementById("#epl")
    // console.log(rank)
    // const name = document.createElement("div")
    // const goals = document.createElement("div")
    // const points = document.createElement("div")
    // const matches = document.createElement("div")
    // result.appendChild(rank)

    // rank.appendChild(name)

    // name.appendChild(goals)

    // points.innerText = dataEpl[i].rank

    // goals.appendChild(points)
    // goals.appendChild(matches)

    // rank.classList.add("rank")
    // name.classList.add("name")
    // goals.classList.add("goals")
    // points.classList.add("points")
    // matches.classList.add("matches")



/* example info i want in table : 
                "rank": "1",
                "name": "Tottenham Hotspur",
                "points": "9",
                "matches": "3",
                "goal_diff": "3",
                "goals_scored": "3",
                "goals_conceded": "0",
                "lost": "0",
                "drawn": "0",
                "won": "3",
                */

// Is the table information we are looking for/ Next possible to take and append all names within league and push them to an array(teams) and have it presented in order A-Z above the standing 2 rows of 10?




// German
async function requestFromAPIGer() {
  try {
    const resultGerman = await axios.get("https://cors-anywhere.herokuapp.com/https://livescore-api.com/api-client/leagues/table.json?competition_id=1&key=7RdxOmdooHD8HFJ7&secret=vpvAC0FwBlWjniou9C2YZgmnX0vFGeNb");
    // let standing = result.data.text;
    // tableEpl(eplTable)
    // return standing;
    console.log(resultGerman.data.data.table)
  } catch (error) {
    console.log(error)
  }
}

 //requestFromAPIGer()



//spain 


async function requestFromAPISpa() {
  try {
    const resultSpa = await axios.get("https://cors-anywhere.herokuapp.com/https://livescore-api.com/api-client/leagues/table.json?competition_id=3&key=7RdxOmdooHD8HFJ7&secret=vpvAC0FwBlWjniou9C2YZgmnX0vFGeNb");
    // let standing = result.data.text;
    // tableEpl(eplTable)
    // return standing;
    console.log(resultSpa.data.data.table)
  } catch (error) {
    console.log(error)
  }
}

// requestFromAPISpa()


// italy 

async function requestFromAPIItaly() {
  try {
    const resultIta = await axios.get("https://cors-anywhere.herokuapp.com/https://livescore-api.com/api-client/leagues/table.json?competition_id=4&key=7RdxOmdooHD8HFJ7&secret=vpvAC0FwBlWjniou9C2YZgmnX0vFGeNb");
    // let standing = result.data.text;
    // tableEpl(eplTable)
    // return standing;
    console.log(resultIta.data.data.table)
  } catch (error) {
    console.log(error)
  }
}


// france

async function requestFromAPIFran() {
  try {
    const resultFran = await axios.get("https://cors-anywhere.herokuapp.com/https://livescore-api.com/api-client/leagues/table.json?competition_id=5&key=7RdxOmdooHD8HFJ7&secret=vpvAC0FwBlWjniou9C2YZgmnX0vFGeNb");
    // let standing = result.data.text;
    // tableEpl(eplTable)
    // return standing;
    console.log(resultFran.data.data.table)
  } catch (error) {
    console.log(error)
  }
}


// portugal


async function requestFromAPISpa() {
  try {
    const resultSpa = await axios.get("https://cors-anywhere.herokuapp.com/https://livescore-api.com/api-client/leagues/table.json?competition_id=8&key=7RdxOmdooHD8HFJ7&secret=vpvAC0FwBlWjniou9C2YZgmnX0vFGeNb");
    // let standing = result.data.text;
    // tableEpl(eplTable)
    // return standing;
    console.log(resultSpa.data.data.table)
  } catch (error) {
    console.log(error)
  }
}



// netherlands

async function requestFromAPISpa() {
  try {
    const resultSpa = await axios.get("https://cors-anywhere.herokuapp.com/https://livescore-api.com/api-client/leagues/table.json?competition_id=196&key=7RdxOmdooHD8HFJ7&secret=vpvAC0FwBlWjniou9C2YZgmnX0vFGeNb");
    // let standing = result.data.text;
    // tableEpl(eplTable)
    // return standing;
    console.log(resultSpa.data.data.table)
  } catch (error) {
    console.log(error)
  }
}




// champions League

async function requestFromAPISpa() {
  try {
    const resultSpa = await axios.get("https://cors-anywhere.herokuapp.com/https://livescore-api.com/api-client/leagues/table.json?competition_id=244&key=7RdxOmdooHD8HFJ7&secret=vpvAC0FwBlWjniou9C2YZgmnX0vFGeNb");
    // let standing = result.data.text;
    // tableEpl(eplTable)
    // return standing;
    console.log(resultSpa.data.data.table)
  } catch (error) {
    console.log(error)
  }
}



// euro champ

async function requestFromAPISpa() {
  try {
    const resultSpa = await axios.get("https://cors-anywhere.herokuapp.com/https://livescore-api.com/api-client/leagues/table.json?competition_id=387&key=7RdxOmdooHD8HFJ7&secret=vpvAC0FwBlWjniou9C2YZgmnX0vFGeNb");
    // let standing = result.data.text;
    // tableEpl(eplTable)
    // return standing;
    console.log(resultSpa.data.data.table)
  } catch (error) {
    console.log(error)
  }
}





// world cup

async function requestFromAPISpa() {
  try {
    const resultSpa = await axios.get("https://cors-anywhere.herokuapp.com/https://livescore-api.com/api-client/leagues/table.json?competition_id=362&key=7RdxOmdooHD8HFJ7&secret=vpvAC0FwBlWjniou9C2YZgmnX0vFGeNb");
    console.log(resultSpa.data.data.table)
  } catch (error) {
    console.log(error)
  }
}


































