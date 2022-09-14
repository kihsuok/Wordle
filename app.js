let word5 = [
    "about", "other", "words", "write", "first", "water",
    "after", "right", "think", "three", "place", "sound",
    "great", "again", "small", "found", "never", "under",
    "house", "world", "below", "large", "until", "along",
    "often", "earth", "study", "night", "light", "paper",
    "young", "story", "point", "heard", "whole", "white",
    "music", "miles", "today", "money", "order", "group",
    "learn", "space", "table", "early", "short", "state",
    "black", "front", "voice", "close", "power", "vowel",
    "taken", "built", "heart", "ready", "quite", "class",
    "bring", "round", "horse", "piece", "green", "stand",
    "start", "river", "field", "plant", "heavy", "check",
    "floor", "begin", "woman", "alone", "plane", "spell",
    "watch", "carry", "wrote", "clear", "glass", "human",
    "party", "build", "blood", "mouth", "solve", "north",
    "value", "death", "happy", "force", "ocean", "speed",
    "metal", "grass", "level", "total"
]

let word6 = [
    "attire", "attune", "aubur", "autism", "autumn", "avatar",
    "avenge", "behalf", "behave", "beheld", "behest", "bruise",
    "brunch", "chunks", "church", "cinema", "circle", "circus",
    "clause", "client", "clinic", "defeat", "defect", "defend",
    "define", "degree", "delays", "delete", "demand", "flower",
    "fluffy", "funnel", "fusion", "future", "gender", "genius",
    "hassle", "hatred", "humane", "humble", "humour", "indoor",
    "induce", "infant", "inform", "injury", "kindle", "lawyer",
    "laying", "layout", "leader", "league", "leaves", "legacy",
    "luxury", "lyrics", "member", "memory", "mental", "mentor",
    "merely", "merger", "method", "murder", "muscle", "museum",
    "mutual", "myriad", "normal", "notice", "notify", "noting",
    "notion", "novice", "number", "oracle", "orange", "parade",
    "parcel", "parent", "parish", "plaque", "plasma", "quartz",
    "quirky", "recall", "recent", "recipe", "record", "redeem",
    "reform", "refuge", "refund", "refuse", "regain", "regime",
    "region", "regret", "reject", "spouse", "spread", "spring",
    "sprint", "square", "squash", "stable", "theory", "thesis",
    "versus", "vessel", "viable", "victim", "violin", "virgin",
    "virtue", "vision", "volume", "voyage", "wander", "zombie",
    "yogurt",

]

let word7 = [
    "Ability", "Absence", "Academy", "Account", "Achieve", "Acquire",
    "Address", "Advance", "Airport", "Alcohol", "Analyst", "Ancient",
    "Arrange", "Arrival", "Article", "Assault", "Attempt", "Attract",
    "Auction", "Average", "Balance", "Banking", "Barrier", "Battery",
    "Believe", "Brother", "Cabinet", "Capital", "Captain", "Careful",
    "Caution", "Ceiling", "Central", "Chronic", "Circuit", "College",
    "Combine", "Comfort", "Command", "Compare", "Concert", "Confirm",
    "Connect", "Contact", "Control", "Convert", "Correct", "Decline",
    "Default", "Defence", "Deliver", "Density", "Deposit", "Desktop",
    "Destroy", "Develop", "Diamond", "Digital", "Discuss", "Disease",
    "Dynamic", "Eastern", "Economy", "Edition", "Example", "Extreme",
    "Factory", "Faculty", "Fitness", "Foreign", "Freedom", "Gallery",
    "Gateway", "General", "Healthy", "Highway", "History", "Hundred",
    "Husband", "Illegal", "Illness", "Imagine", "Install", "Journey",
    "Justice", "Justify", "Kingdom", "Kitchen", "Liberty", "Library",
    "License", "Loyalty", "Machine", "Manager", "Married", "Mention",
    "Message", "Mystery", "Natural", "Network", "Neutral", "Offense",
    "Officer", "Organic", "Pacific", "Package", "Partner", "Patient",
    "Penalty", "Pension", "Percent", "Poverty", "Privacy", "Profile",
    "Program", "Project", "Protect", "Protein", "Qualify", "Railway",
    "Recover", "Reflect", "Regular", "Replace", "Request", "Require",
    "Respect", "Respond", "Satisfy", "Science", "Section", "Segment",
    "Smoking", "Society", "Sponsor", "Station", "Storage", "Student",
    "Supreme", "Suspect", "Teacher", "Tension", "Theatre", "Therapy",
    "Uniform", "Upgrade", "Variety", "Version", "Violent", "Warrant",
    "Website", "Wedding", "Weekend"

]

const tileDisplay = document.querySelector('.tile-container')
const keyboard = document.querySelector('.key-container')
const messageDisplay = document.querySelector('.message-container')
    //document.getElementById("displayword").innerHTML = wordle;

const refresh = () => {
    //clearsuccess()
    document.querySelector('#win').style.display = "none"
    document.querySelector('#lose').style.display = "none"
    tileDisplay.innerHTML = ""
    keyboard.innerHTML = ""
    guessRows.forEach((guessRow, guessRowIndex) => {
        console.log("REFRESHING...")
        const rowElement = document.createElement('div')
        rowElement.setAttribute('id', 'guessRow-' + guessRowIndex)
        guessRow.forEach((_guess, guessIndex) => {
            const tileElement = document.createElement('div')
            tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex)
            tileElement.classList.add('tile')
            rowElement.append(tileElement)
        })
        tileDisplay.append(rowElement)
    })
    keys.forEach(key => {
        const buttonElement = document.createElement('button')
        buttonElement.textContent = key
        buttonElement.setAttribute('id', key)
        buttonElement.addEventListener('click', () => handleClick(key))
        keyboard.append(buttonElement)

    })
}

var n = 5

let wordle = word5[Math.floor(Math.random() * word5.length)]
    //wordle = 'level'
wordle = wordle.toUpperCase()
console.log(wordle)
guessRows = [
    [],
    [],
    [],
    [],
    [],
    []
]


let b1 = document.getElementById("size5").classList
let b2 = document.getElementById("size6").classList
let b3 = document.getElementById("size7").classList

const setsize = (size) => {
    if (currentRow == 0 || isGameOver == true) {
        currentRow = 0
        currentTile = 0
        isGameOver = false
        n = size
        console.log(n)
        guessRows = [
            [],
            [],
            [],
            [],
            [],
            []
        ]
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < n; j++)
                guessRows[i][j] = '';
        }

        console.log("CHANGING SIZE : ", guessRows)

        if (size == 5) {
            wordle = word5[Math.floor(Math.random() * word5.length)].toUpperCase()
            document.getElementById("displayword").innerHTML = wordle;
            document.getElementById("actualword").innerHTML = wordle;
            console.log(wordle)
            b2.remove('btn-danger');
            b1.remove('btn-light');
            b3.remove('btn-danger');
            b1.add('btn-danger');
            b2.add('btn-light');
            b3.add('btn-light');
        } else if (size == 6) {
            wordle = word6[Math.floor(Math.random() * word6.length)].toUpperCase()
            document.getElementById("displayword").innerHTML = wordle;
            document.getElementById("actualword").innerHTML = wordle;
            console.log(wordle)
            b3.remove('btn-danger');
            b2.remove('btn-light');
            b1.remove('btn-danger');
            b2.add('btn-danger');
            b1.add('btn-light');
            b3.add('btn-light');

        } else if (size == 7) {
            wordle = word7[Math.floor(Math.random() * word7.length)].toUpperCase()
            document.getElementById("displayword").innerHTML = wordle;
            document.getElementById("actualword").innerHTML = wordle;
            console.log(wordle)
            b3.remove('btn-light');
            b1.remove('btn-danger');
            b2.remove('btn-danger');
            b3.add('btn-danger');
            b1.add('btn-light');
            b2.add('btn-light');

        }
        refresh()

    } else {
        alert("Finish the current game!!")
    }


}


const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '«',
]


for (var i = 0; i < 6; i++) {
    for (var j = 0; j < n; j++)
        guessRows[i][j] = '';
}


let currentRow = 0
let currentTile = 0
isGameOver = false

// guessRows.forEach((guessRow, guessRowIndex) => {
//     console.log("REFRESHING...")
//     const rowElement = document.createElement('div')
//     rowElement.setAttribute('id', 'guessRow-' + guessRowIndex)
//     guessRow.forEach((_guess, guessIndex) => {
//         const tileElement = document.createElement('div')
//         tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex)
//         tileElement.classList.add('tile')
//         rowElement.append(tileElement)
//     })
//     tileDisplay.append(rowElement)
// })

refresh()

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    console.log(keys.includes(name.toUpperCase()));
    // Alert the key name and key code on keydown
    if (name == "Backspace") {
        handleClick("«");
    } else if (name == "Enter") {
        handleClick("ENTER");
    } else if (keys.includes(name.toUpperCase())) {
        console.log(`Key pressed ${name} \r\n Key code value: ${code}`);
        handleClick(name);
    }
}, false);

// keys.forEach(key => {
//     const buttonElement = document.createElement('button')
//     buttonElement.textContent = key
//     buttonElement.setAttribute('id', key)
//     buttonElement.addEventListener('click', () => handleClick(key))
//     keyboard.append(buttonElement)

// })

const handleClick = (letter) => {
    if (!isGameOver) {
        if (letter === '«') {
            deleteLetter()
            return
        }
        if (letter === 'ENTER') {
            checkRow()
            return
        }
        letter = letter.toUpperCase();
        addLetter(letter)
    }
}

const addLetter = (letter) => {
    if (currentTile < n && currentRow < 6) {
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
        tile.textContent = letter
        guessRows[currentRow][currentTile] = letter
        tile.setAttribute('data', letter)
        currentTile++
    }
}

const deleteLetter = () => {
    if (currentTile > 0) {
        currentTile--
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
        tile.textContent = ''
        guessRows[currentRow][currentTile] = ''
        tile.setAttribute('data', '')
    }
}

function success() {

    setTimeout(document.querySelector('#win').style.display = "", 2000)
}

function lost() {

    setTimeout(document.querySelector('#lose').style.display = "", 2000)

}

const invalidguess = () => {
    document.getElementById('noword').style.display = 'inline-block';
    document.getElementById('noword').classList.remove('fadeout')
    document.getElementById('noword').classList.add('fadein')
    setTimeout(function() {
        document.getElementById('noword').classList.remove('fadein')
        document.getElementById('noword').classList.add('fadeout')
    }, 1500);
    setTimeout(function() { document.getElementById('noword').style.display = 'none' }, 2000);

}



const checkRow = () => {
    const guess = guessRows[currentRow].join('')
    if (currentTile > n - 1) {
        word = guess;
        async function getting_word_info() {
            let temp = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word);
            data = await temp.json();
            if (data.title === "No Definitions Found") {
                showMessage("Invalid Word!!!");
                return;
            } else {
                flipTile()
                if (wordle === guess) {

                    // showMessage('Magnificent!')
                    isGameOver = true
                        // setTimeout(document.querySelector('#msg').style.display = "", 2000)
                    setTimeout(success, n * 500)


                    return
                } else {
                    if (currentRow == 5) {

                        //showMessage('Game Over')
                        isGameOver = true
                        setTimeout(lost, n * 500)
                        return
                    }
                    if (currentRow < 5) {
                        currentRow++
                        currentTile = 0
                    }
                }

            }
        }
        getting_word_info();
    }

}


const showMessage = (message) => {
    const messageElement = document.createElement('p')
    messageElement.textContent = message
    messageDisplay.append(messageElement)
    setTimeout(() => messageDisplay.removeChild(messageElement), 2000)
}

const addColorToKey = (keyLetter, color) => {
    const key = document.getElementById(keyLetter)
    key.classList.add(color)
}

const flipTile = () => {
    const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes
    let checkWordle = wordle
    const guess = []

    rowTiles.forEach(tile => {
        guess.push({ letter: tile.getAttribute('data'), color: 'grey-overlay' })
    })
    guess.forEach((guess, index) => {
        if (guess.letter == wordle[index]) {
            guess.color = 'green-overlay'
            checkWordle = checkWordle.replace(guess.letter, '')
        }
    })
    guess.forEach(guess => {
        if (checkWordle.includes(guess.letter)) {
            guess.color = 'yellow-overlay'
            checkWordle = checkWordle.replace(guess.letter, '')
        }
    })






    rowTiles.forEach((tile, index) => {
        setTimeout(() => {
            tile.classList.add('flip')
            tile.classList.add(guess[index].color)
            addColorToKey(guess[index].letter, guess[index].color)
        }, 500 * index)
    })
}

document.getElementById("displayword").innerHTML = wordle;
document.getElementById("actualword").innerHTML = wordle;