const healthPlayer1 = document.querySelector('#healthPlayer1');
const healthPlayer2 = document.querySelector('#healthPlayer2');
const attackButtonPlayer1 = document.querySelector('#attackButtonPlayer1');
const defendButtonPlayer1 = document.querySelector('#defendButtonPlayer1');

// create pokemon
const pikachu = new pokemon('Pikachu', 2000, 300, 200, 'Electric', 400)
const bulbasor = new pokemon('Bulbasor', 1500, 400, 200, 'Grass', 500)

// create players
const players = []
createPlayer('Tristan', bulbasor)
createPlayer('Elias', pikachu)

// set players
const player = getSavedPlayers()
const player1 = players[0]//findPlayer('Tristan')
const player2 = player[1]//findPlayer('Elias')

// render hp text
const renderHealth = () => {
    healthPlayer1.textContent = `HP: ${player1.pokemon.health}`
    healthPlayer2.textContent = `HP: ${player2.pokemon.health}`
}
renderHealth()

// start game when player made dicision
//let choicePlayer1 = ''
let choiceAI = ''

attackButtonPlayer1.addEventListener('click', (e) => {
    choiceAI = renderChoiceAI()
    if(choiceAI === 'attack'){
        player2.pokemon.health -= player1.pokemon.damage
        player1.pokemon.health -= player2.pokemon.damage
    } else if (choiceAI === 'defend') {
        player2.pokemon.health -= player1.pokemon.damage
        player2.pokemon.health += player2.pokemon.defence
    }
    checkEnd()
    save()
    renderHealth()
    console.log(`You chose attack vs ${choiceAI}`);
})

defendButtonPlayer1.addEventListener('click', (e) => {
    choiceAI = renderChoiceAI()
    if (choiceAI === 'attack'){
        player1.pokemon.health -= player2.pokemon.damage
        player1.pokemon.health += player1.pokemon.defence
    }
    checkEnd()
    save()
    renderHealth()
    console.log(`You chose defend vs ${choiceAI}`);
})

// start game
/*const game = () => {
    choiceAI = renderChoiceAI()
    if(choicePlayer1 === 'attack' && choiceAI === 'attack'){
        player2.health -= player1.damage
        player1.health -= player2.damage
    } else if (choicePlayer1 === 'attack' && choiceAI === 'defend'){
        player2.health -= player1.damage
        player2.health += player2.defendpoints
    } else if (choicePlayer1 === 'defend' && choiceAI === 'attack'){
        player1.health -= player2.damage
        player1.health += player1.defendpoints
    } else {

    }
    if (player1.health <= 0 || player2.health <= 0){
        location.assign('/end.html')
    }
    console.log(`${choicePlayer1}`);
    console.log(`${choiceAI}`);
    
    save()
    renderHealth()
}*/



const playersTest = [{
    name: 'Tristan',
    pokemonName: 'Pikachu',
    health: 2000,
    attackPoints: 400,
    defendpoints: 300
},{
    name: 'Elias',
    pokemonName: 'Bulbasor',
    health: 2500,
    attackPoints: 300,
    defendpoints: 200
}]








