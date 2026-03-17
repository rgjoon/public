const PUZZLE_TILES = {
    city: [
        {
            en: ['PLAYERS\'S CHOICE']
        },
        {
            en: ['BIDDING CHOICE']
        },
        {
            en: ['DECIDING CHOICE']
        },
        {
            en: ['LAST CHOICE']
        },
        {
            en: ['RANDOM CHOICE']
        },
        {
            en: ['EARLY CHOICE FOR ALL']
        }
    ],

    phase2: [
        {
            en: [
                '>> HIGHEST NUMBER <<',
                'MAXIMUM BID: MINIMUM BID + # OF OWN CITIES'
            ]
        },
        {
            en: [
                '>> SMALLEST NUMBER <<',
                'MAXIMUM BID: MINIMUM BID'
            ]
        },
        {
            en: [
                'ALL POWER PLANTS',
                'MAXIMUM BID: MINIMUM BID + 1 ELEKTRO'
            ]
        },
        {
            en: [
                '>> USING CHEAPEST RESOURCES <<',
                'MAXIMUM BID: MINIMUM BID + 5 ELEKTRO'
            ]
        },
        {
            en: ['BUYS THE FIRST CHOICE FOR MINIMUM BID']
        },
        {
            en: [
                '>> SUPPLYING MOST CITIES <<',
                'MAXIMUM BID: MINIMUM BID + 10 ELEKTRO'
            ]
        }
    ],

    phase3: [
        {
            en: ['NORMAL PRODUCTION']
        },
        {
            en: [
                'NORMAL PRODUCTION AND',
                '>> LEAST AVAILABLE RESOURCES <<'
            ]
        },
        {
            en: [
                'ODD TURN: NORMAL PRODUCTION',
                'EVEN TURN: ALL RESOURCES'
            ]
        },
        {
            en: ['NORMAL PRODUCTION AND >> LESS THAN 5 ELEKTRO <<']
        },
        {
            en: ['ALL RESOURCES']
        },
        {
            en: ['>> LAST << : ALL RESOURCES, OTHERWISE NORMAL PRODUCTION']
        }
    ],

    phase4: [
        {
            en: [
                '>> STEP 1 << : ALL CITIES, LESS THEN 7',
                'OTHERWISE: ALL CITIES NEVER TO  >> FIRST PLAYER <<'
            ]
        },
        {
            en: [
                '>> STEP 1 << : 1 CITY',
                '>> STEP 2 << : 2 CITIES',
                '>> STEP 3 << : 3 CITIES'
            ]
        },
        {
            en: ['ALL CITIES']
        },
        {
            en: ['>> LAST PLAYER << CHOOSES, CANNOT BUILD >> THROUGH << POSSIBLE CITIES']
        },
        {
            en: ['ALL CITIES NEVER MORE THAN >> FIRST PLAYER <<']
        },
        {
            en: ['ONLY SUPPLIED CITIES']
        }
    ],

    ability: [
        {
            en: ['PHASE 4: ALL CITIES COST 10 ELEKTRO']
        },
        {
            en: ['PHASE 4: ALWAYS BUILDS FIRST CITY FOR 0 ELEKTRO']
        },
        {
            en: ['PHASE 5: GETS INCOME FOR  +1 CITY']
        },
        {
            en: ['GAME START: GETS 100 ELEKTRO']
        },
        {
            en: ['PHASE 1: ALWAYS', '>> LAST IN PLAYER ORDER <<']
        },
        {
            en: ['PHASE 2: PAYS HALF BID FOR POWER PLANTS']
        }
    ]
}