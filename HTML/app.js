// const DOMAIN = "http://livescore-api.com/api-client/leagues/table.json?key=7RdxOmdooHD8HFJ7&secret=vpvAC0FwBlWjniou9C2YZgmnX0vFGeNb";
// const API_KEY = "7RdxOmdooHD8HFJ7"
// const BASE_URL = `${DOMAIN}?apiKey=${API_KEY}&s=`;
let video = document.querySelector('.video')
let mainP = document.querySelector('.MainP')
let results = document.querySelector('.results')
let leagueLinks = document.querySelectorAll('[data-id]')
console.log(leagueLinks)
leagueLinks.forEach(league => {
  console.log(league.dataset.id)
  league.addEventListener("click", () => requestFromAPI(league.dataset.id))
  // Epl
})
const eplTableDiv = document.querySelector(".EplTable")

async function requestFromAPI(id) {
  video.innerHTML = ''
  mainP.innerHTML = ''
  try {
    const result = await axios.get(`https://cors-anywhere.herokuapp.com/https://livescore-api.com/api-client/leagues/table.json?competition_id=${id}&key=7RdxOmdooHD8HFJ7&secret=vpvAC0FwBlWjniou9C2YZgmnX0vFGeNb`);
    // dataDisplay(result.data.data.table)
    console.log(result.data.data.table)
    results.innerHTML = ''
    let leagueHeaders = document.createElement('div')
    leagueHeaders.classList.add("leagueHeaders")
    leagueHeaders.innerHTML =
      ("<p class='headers'> Rank  &nbsp;  &nbsp; &nbsp;   Name                  Won Lost Draw Total Points Matches Played</p>")
     results.append(leagueHeaders)
    

    result.data.data.table.forEach((team) => {
      let teamWrapper = document.createElement('div')
      teamWrapper.className = "team-results"
      results.append(teamWrapper)

      let leagueRank = document.createElement('h4')
      leagueRank.textContent = team.rank
      leagueRank.className = "league-rank"
      console.log(team.rank)
      teamWrapper.append(leagueRank)

    
      let teamName = document.createElement('h4')
      teamName.textContent = team.name
      teamName.className = "name"
      console.log(team.name)
      teamWrapper.append(teamName)

      let gamesWon = document.createElement('h4')
      gamesWon.textContent = team.won
      gamesWon.className = "games-won"
      console.log(team.won)
      teamWrapper.append(gamesWon)

      let gamesLost = document.createElement('h4')
      gamesLost.textContent = team.lost
      console.log(team.won)
      teamWrapper.append(gamesLost)

      let gamesDrawn = document.createElement('h4')
      gamesDrawn.textContent = team.drawn
      console.log(team.won)
      teamWrapper.append(gamesDrawn)
      
      let totalPoints = document.createElement('h4')
      totalPoints.textContent = team.points
      console.log(team.won)
      teamWrapper.append(totalPoints)
      
      let matchesPlayed = document.createElement('h4')
      matchesPlayed.textContent = team.matches
      console.log(team.won)
      teamWrapper.append(matchesPlayed)
      
    }
    )
    
  } catch (error) {
    console.log(error)
  } 
}
