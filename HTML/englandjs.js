// const DOMAIN = "http://livescore-api.com/api-client/leagues/table.json?key=7RdxOmdooHD8HFJ7&secret=vpvAC0FwBlWjniou9C2YZgmnX0vFGeNb&league=25&season=2";
// const API_KEY = "7RdxOmdooHD8HFJ7"
// const BASE_URL = `${DOMAIN}?apiKey=${API_KEY}&s=`;


// Epl
async function requestFromAPI() {
  try {
    const result = await axios.get("https://cors-anywhere.herokuapp.com/https://livescore-api.com/api-client/leagues/table.json?competition_id=2&key=7RdxOmdooHD8HFJ7&secret=vpvAC0FwBlWjniou9C2YZgmnX0vFGeNb");
    // let standing = result.data.text;
    // tableEpl(eplTable)
    // return standing;
    console.log(result.data.data.table)
  } catch (error) {
    console.log(error)
  }
}

// requestFromAPI()
// const englandOne = document.querySelector(".eplT")



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

// requestFromAPIGer()



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
    // let standing = result.data.text;
    // tableEpl(eplTable)
    // return standing;
    console.log(resultSpa.data.data.table)
  } catch (error) {
    console.log(error)
  }
}


































