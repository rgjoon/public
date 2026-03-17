const config = {
    language: 'en'
}

const Elem = {
    city: document.querySelector('#city'),
    phase2: document.querySelector('#phase2'),
    phase3: document.querySelector('#phase3'),
    phase4: document.querySelector('#phase4'),
    ability: document.querySelector('#ability')
}

function getPuzzleTextList(type) {
    const index = Math.floor(Math.random() * 6)

    return PUZZLE_TILES[type][index][config.language]
}

function suffle() {
    for( const [type, element] of Object.entries(Elem) ) {
        element.textContent = type;

        for( const text of getPuzzleTextList(type) ) {
            const line = element.appendChild(document.createElement('div'));
            line.textContent = text;
        }
    }
}

const suffleButton = document.querySelector('button#suffle-button');

suffleButton.onclick = suffle;