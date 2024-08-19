let winner = document.querySelector(".winner");
let count = document.querySelector(".result");
let selection = document.querySelector(".choosing");

const score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Looses: 0,
    Ties: 0
};

count.innerHTML = `wins: ${score.Wins}   Looses: ${score.Looses} Ties: ${score.Ties}`;

function playGame(user) {

    let result = '';

    const computorMove = Math.random();
    let computor = '';
    if (computorMove > 0 && computorMove < 1 / 3) {
        computor = "rock";
    } else if (computorMove > 1 / 3 && computorMove < 2 / 3) {
        computor = "paper";
    } else {
        computor = "scissors";
    }

    //checking winner

    if (user === "rock") {
        if (computor === "rock") {
            result = 'Tie';
        } else if (computor === 'paper') {
            result = 'You loose';
        } else {
            result = 'You won';
        }
    } else if (user === 'paper') {
        if (computor === "rock") {
            result = 'You won';
        } else if (computor === 'paper') {
            result = 'Tie';
        } else {
            result = 'You loose';
        }
    } else {
        if (computor === "rock") {
            result = 'You loose';
        } else if (computor === 'paper') {
            result = 'You won';
        } else {
            result = 'Tie';
        }
    }
    if (result === "You won") {
        score.Wins += 1;
    } else if (result === "You loose") {
        score.Looses += 1;
    } else {
        score.Ties += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));

    selection.innerHTML = `You <img src="${user}.png" class='imgs'> 
   <img src="${computor}.png" class='imgs'>  computor`;
    winner.innerHTML = result;
    count.innerHTML = `wins: ${score.Wins} Looses: ${score.Looses} Ties: ${score.Ties}`;
}

function resetScore() {
    score.Wins = 0;
    score.Looses = 0;
    score.Ties = 0;
    localStorage.setItem('score', JSON.stringify(score))
    count.innerHTML = `wins: ${score.Wins} Looses: ${score.Looses} Ties: ${score.Ties}`;
}
