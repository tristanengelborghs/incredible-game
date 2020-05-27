// create pokemon
function pokemon(name, health, damage, defence, catagory, specialMoveStrenght) {
    this.name = name;
    this.health = health;
    this.damage = damage;
    this.defendpoints = defence
    this.catagory = catagory;
    this.specialMoveStrenght = specialMoveStrenght;
}

// get players from local storage
const getSavedPlayers = () => {
    const playerJSON = localStorage.getItem('players')
    return JSON.parse(playerJSON)
}

// create Player
const createPlayer = (name, wichPokemon) => {
    players.push({
        name: name,
        pokemon: wichPokemon
        /*health: wichPokemon.health,
        damage: wichPokemon.damage,
        defendpoints: wichPokemon.defendpoints*/
    })
    save()
}

// save to local storage
const save = () => {
    localStorage.setItem('players', JSON.stringify(players))
}

// find player with right name
const findPlayer = (namePlayer) => {
    const player1 = players.find(function(player) {
        return players.name === namePlayer
    })
    return player1
}

// get a random choice from AI
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// convert choice to text
const renderChoiceAI = () => {
    const choiceAI = getRandomInt(2)
    return choiceAI === 0 ? 'attack' :  'defend'
}

const checkEnd = () => {
    if (player1.health <= 0 || player2.health <= 0){
        location.assign('/end.html')
    }
}
/*const renderpoints = () => {
    if(choicePlayer1 === 'attack'){
        attackPoints = player1.damage
        console.log(`attack: ${attackPoints}`);
    } else {
        defendPoints = player1.defendpoints
        console.log(`defend: ${defendPoints}`);
    }
}
const renderpointsAI = () => {
    if(choiceAI === 'attack'){
        attackPointsAI = player2.damage
        console.log(`attackAI: ${attackPointsAI}`);
    } else {
        defendPointsAI = player2.defendpoints
        console.log(`defendAI: ${defendPointsAI}`);
    }
}*/
    
