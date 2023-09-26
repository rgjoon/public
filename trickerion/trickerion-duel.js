const ROOM_INFO = [
    {
        type: 'residence',
        title: 'Residence'
    },
    {
        type: 'market-row',
        title: 'Market Row'
    },
    {
        type: 'theater',
        title: 'Theater',
        slots: [
            'Th', 'Fr', 'Sa', 'Su'
        ]
    },
    {
        type: 'dark-alley',
        title: 'Dark Alley'
    }
];

function pickNumbers() {
    const slots = [0, 1, 2, 3];

    const first = slots.splice(Math.floor(Math.random() * 4), 1);
    const second = slots.splice(Math.floor(Math.random() * 3), 1);

    return [first[0], second[0]].sort();        
}

class ActionRoom {
    constructor(room) {
        const {title, slots} = room || {};

        this.element = document.createElement('div');
        this.element.setAttribute('class', 'action-room');

        const titleElement = this.element.appendChild(document.createElement('div'))
        titleElement.innerText = title + ':';
        titleElement.setAttribute('class', 'action-title');

        const slotsContainer = this.element.appendChild(document.createElement('div'));

        this.children = [];

        for( let i = 0; i < 4; i++ ) {
            this.children.push((new ActionSlot({title: (slots || [])[i] || (i + 1)})).appendTo(slotsContainer));
        }
    }

    lockSlots() {
        const numbers = pickNumbers();

        this.children.forEach((child, index) => {
            if( numbers.indexOf(index) < 0 ) {
                child.unlock();
            } else {
                child.lock();
            }
        })
    }

    appendTo(parent) {
        parent.appendChild(this.element);

        return this;
    }
}

class ActionSlot {
    constructor({title}) {
        this.element = document.createElement('div');
        this.element.setAttribute('class', 'action-slot');
        this.element.innerText = title;
    }

    appendTo(parent) {
        parent.appendChild(this.element);

        return this;
    }

    lock() {
        this.element.classList.add('lock');
    }

    unlock() {
        this.element.classList.remove('lock');
    }
}

function makeRooms(parent) {
    return ROOM_INFO.map(room => {
        return (new ActionRoom(room)).appendTo(parent)
    })
}

const cells = [0, 1, 2, 3, 4, 5].map(n => {
    return document.getElementById(`cell-${n}`);
});

const trickDirection = document.getElementById('trick-dir');

function makeInitialTrick() {
    const numbers = [1, 2, 3, 4, 5, 6];

    cells.forEach((cell, index) => {
        const [number] = numbers.splice(Math.floor(Math.random() * numbers.length), 1)

        cell.innerText = number
    })

    const dirs = ['up', 'right', 'down', 'left'];
    const dir = dirs[Math.floor(Math.random() * 4)];
 
    trickDirection.setAttribute('class', `fa-solid fa-arrow-${dir}`);
}