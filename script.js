document.addEventListener("DOMContentLoaded", () => {

fetch("http://localhost:3000/fixtures")
.then((response) => response.json())
.then((data) => createMatch(data))

// function to create match ticket
function createMatch(games) {
    let tickets = document.querySelector('.matches')
    games.forEach((game) => {
        let ticket = document.createElement('div')
        ticket.className = 'ticket-details'
        ticket.innerHTML = `
        <div class="ticket" id="ticket${game.id}">
          <div class="ticket-details">
              <div class="ticket-card">
                  <h2><strong>VS</strong> <span>${game.team}</span></h2>
                  <img src="${game.logo}" alt="Black Stars"><br>
                  <h4>${game.date} <em>${game.kickoff}</em></h4>
              </div>
              <h5 id="commit${game.id}">${game.attendance} fans will attend!</h5>
              <button id="commit-btn${game.id}" class="btn" data-id="${game.id}">Commit to Attend</button>
          </div>
          <button class="btn" id="delete${game.id}">Remove Ticket</button>
      </div>
        `

        tickets.appendChild(ticket)

        //functionality for toggling ticket cards to change their background color
        const toggleCard = document.querySelectorAll('.ticket-details')
        console.log(toggleCard)
        toggleCard.forEach(item => {
            // console.log(item)
            item.addEventListener('mouseover', function(){
                this.style.backgroundColor = "rgba(39, 245, 58, 0.44)";
                this.style.transform = "rotateY(360deg) rotateZ(-45deg);"
            })
            item.addEventListener('mouseout', function(){
                this.style.backgroundColor = "rgba(208, 39, 245, 0.44)";
                this.style.transform = "rotateY(360deg) rotateZ(-45deg);"
            })
        })
        
        //functionality for adding fan commits to game attendance
        const attendaceBtn = document.getElementById(`commit-btn${game.id}`)
        const attendace = document.getElementById(`commit${game.id}`)
        attendaceBtn.addEventListener('click', (e) => {
            e.preventDefault()
            game.attendance += 1
            attendace.textContent = `${game.attendance} fans will attend!`

            //fetch function for updating the change in attendance in the database
            fetch(`http://localhost:3000/fixtures/${game.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(game)
            })
            
        });

        //functionality to delete ticket from page and server
    const deleteBtn = document.getElementById(`delete${game.id}`)
    const ticketCard = document.getElementById(`ticket${game.id}`)
    deleteBtn.addEventListener('click', (e) => {
    e.preventDefault()
    ticketCard.remove()

    fetch(`http://localhost:3000/fixtures/${game.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(game => console.log(game))
})
    })



}

//functionality for adding new game ticket to the page
const addGame = document.querySelector('#game-form')
function createNewGame(e) {
    e.preventDefault()

    const clubName = document.getElementById('name')
    const clubLogo = document.getElementById('image-link')
    const matchDay = document.getElementById('match-day')
    const kickoff = document.getElementById('kickoff')
    const club = {
        team: clubName.value,
        logo: clubLogo.value,
        date: matchDay.value,
        kickoff: kickoff.value,
        attendance: 0
    }
    fetch("http://localhost:3000/fixtures", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(club)
    })
    .then((res) => res.json())
    .then(() => {
        clubName.value = ''
        clubLogo.value = ''
        matchDay.value = ''
        kickoff.value = ''
        fetch(`http://localhost:3000/fixtures`)
        .then((res) => res.json())
        .then((data) => createMatch(data))
    })
}

addGame.addEventListener('submit', createNewGame)





//scoll event handler
window.addEventListener('scroll', function(){
    const myNav = document.querySelector('.cont-fluid')
    myNav.classList.toggle('sticky', window.scrollY > 0)
})

})