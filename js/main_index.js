import Ancients from '../assets/Ancients/index.js';
import cards from '../data/mythicCards/index.js';

const ancientAzathoth = document.querySelector(".azathoth");
const ancientCthulhu = document.querySelector(".cthulhu");
const ancienIogSothoth = document.querySelector(".iogSothoth");
const ancientShubNiggurath = document.querySelector(".shubNiggurath");

ancientAzathoth.style.backgroundImage = `url(${Ancients.azathoth})`;
ancientCthulhu.style.backgroundImage = `url(${Ancients.cthulhu})`;
ancienIogSothoth.style.backgroundImage = `url(${Ancients.iogSothoth})`;
ancientShubNiggurath.style.backgroundImage = `url(${Ancients.shubNiggurath})`;

let ancientFlag = false;
let mixFlag = true;
let sheme;

function btnTooEasyVisible () {
    btnTooEasy.classList.remove('hidden');
}

function btnEasyVisible () {
    btnEasy.classList.remove('hidden');
}

function btnNormalVisible () {
    btnNormal.classList.remove('hidden');
}

function btnHardVisible () {
    btnHard.classList.remove('hidden');
}

function btnTooHardVisible () {
    btnTooHard.classList.remove('hidden');
}

ancientAzathoth.addEventListener('click', () => {
    if (mixFlag) {
        if (!ancientAzathoth.classList.contains('active')) ancientAzathoth.classList.add('active');
        if (ancientCthulhu.classList.contains('active')) ancientCthulhu.classList.remove('active');
        if (ancienIogSothoth.classList.contains('active')) ancienIogSothoth.classList.remove('active');
        if (ancientShubNiggurath.classList.contains('active')) ancientShubNiggurath.classList.remove('active');
        if (btnTooEasy.classList.contains('active')) btnTooEasy.classList.remove('active');
        if (btnEasy.classList.contains('active')) btnEasy.classList.remove('active');
        if (btnNormal.classList.contains('active')) btnNormal.classList.remove('active');
        if (btnHard.classList.contains('active')) btnHard.classList.remove('active');
        if (btnTooHard.classList.contains('active')) btnTooHard.classList.remove('active');
        ancientFlag = true;
        getAllDecks(1);
        sheme = [[1, 2, 1], [2, 3, 1], [2, 4, 0]];
        if (document.querySelector('.mix')) document.querySelector(".mix").remove();
        if (btnTooEasy.classList.contains('hidden')) { setTimeout(btnTooEasyVisible, 50); }
        if (btnEasy.classList.contains('hidden')) { setTimeout(btnEasyVisible, 100); }
        if (btnNormal.classList.contains('hidden')) { setTimeout(btnNormalVisible, 150); }
        if (btnHard.classList.contains('hidden')) { setTimeout(btnHardVisible, 200); }
        if (btnTooHard.classList.contains('hidden')) { setTimeout(btnTooHardVisible, 250); }
    }
});

ancientCthulhu.addEventListener('click', () => {
    if (mixFlag) {
        if (!ancientCthulhu.classList.contains('active')) ancientCthulhu.classList.add('active');
        if (ancientAzathoth.classList.contains('active')) ancientAzathoth.classList.remove('active');
        if (ancienIogSothoth.classList.contains('active')) ancienIogSothoth.classList.remove('active');
        if (ancientShubNiggurath.classList.contains('active')) ancientShubNiggurath.classList.remove('active');
        if (btnTooEasy.classList.contains('active')) btnTooEasy.classList.remove('active');
        if (btnEasy.classList.contains('active')) btnEasy.classList.remove('active');
        if (btnNormal.classList.contains('active')) btnNormal.classList.remove('active');
        if (btnHard.classList.contains('active')) btnHard.classList.remove('active');
        if (btnTooHard.classList.contains('active')) btnTooHard.classList.remove('active');
        ancientFlag = true;
        getAllDecks(2);
        sheme = [[0, 2, 2], [1, 3, 0], [3, 4, 0]];
        if (document.querySelector('.mix')) document.querySelector(".mix").remove();
        if (btnTooEasy.classList.contains('hidden')) { setTimeout(btnTooEasyVisible, 50); }
        if (btnEasy.classList.contains('hidden')) { setTimeout(btnEasyVisible, 100); }
        if (btnNormal.classList.contains('hidden')) { setTimeout(btnNormalVisible, 150); }
        if (btnHard.classList.contains('hidden')) { setTimeout(btnHardVisible, 200); }
        if (btnTooHard.classList.contains('hidden')) { setTimeout(btnTooHardVisible, 250); }
    }
});

ancienIogSothoth.addEventListener('click', () => {
    if (mixFlag) {
        if (!ancienIogSothoth.classList.contains('active')) ancienIogSothoth.classList.add('active');
        if (ancientCthulhu.classList.contains('active')) ancientCthulhu.classList.remove('active');
        if (ancientAzathoth.classList.contains('active')) ancientAzathoth.classList.remove('active');
        if (ancientShubNiggurath.classList.contains('active')) ancientShubNiggurath.classList.remove('active');
        if (btnTooEasy.classList.contains('active')) btnTooEasy.classList.remove('active');
        if (btnEasy.classList.contains('active')) btnEasy.classList.remove('active');
        if (btnNormal.classList.contains('active')) btnNormal.classList.remove('active');
        if (btnHard.classList.contains('active')) btnHard.classList.remove('active');
        if (btnTooHard.classList.contains('active')) btnTooHard.classList.remove('active');
        ancientFlag = true;
        getAllDecks(3);
        sheme = [[0, 2, 1], [2, 3, 1], [3, 4, 0]];
        if (document.querySelector('.mix')) document.querySelector(".mix").remove();
        if (btnTooEasy.classList.contains('hidden')) { setTimeout(btnTooEasyVisible, 50); }
        if (btnEasy.classList.contains('hidden')) { setTimeout(btnEasyVisible, 100); }
        if (btnNormal.classList.contains('hidden')) { setTimeout(btnNormalVisible, 150); }
        if (btnHard.classList.contains('hidden')) { setTimeout(btnHardVisible, 200); }
        if (btnTooHard.classList.contains('hidden')) { setTimeout(btnTooHardVisible, 250); }
    }
});

ancientShubNiggurath.addEventListener('click', () => {
    if (mixFlag) {
        if (!ancientShubNiggurath.classList.contains('active')) ancientShubNiggurath.classList.add('active');
        if (ancientCthulhu.classList.contains('active')) ancientCthulhu.classList.remove('active');
        if (ancienIogSothoth.classList.contains('active')) ancienIogSothoth.classList.remove('active');
        if (ancientAzathoth.classList.contains('active')) ancientAzathoth.classList.remove('active');
        if (btnTooEasy.classList.contains('active')) btnTooEasy.classList.remove('active');
        if (btnEasy.classList.contains('active')) btnEasy.classList.remove('active');
        if (btnNormal.classList.contains('active')) btnNormal.classList.remove('active');
        if (btnHard.classList.contains('active')) btnHard.classList.remove('active');
        if (btnTooHard.classList.contains('active')) btnTooHard.classList.remove('active');
        ancientFlag = true;
        getAllDecks(4);
        sheme = [[1, 2, 1], [3, 2, 1], [2, 4, 0]];
        if (document.querySelector('.mix')) document.querySelector(".mix").remove();
        if (btnTooEasy.classList.contains('hidden')) { setTimeout(btnTooEasyVisible, 50); }
        if (btnEasy.classList.contains('hidden')) { setTimeout(btnEasyVisible, 100); }
        if (btnNormal.classList.contains('hidden')) { setTimeout(btnNormalVisible, 150); }
        if (btnHard.classList.contains('hidden')) { setTimeout(btnHardVisible, 200); }
        if (btnTooHard.classList.contains('hidden')) { setTimeout(btnTooHardVisible, 250); }
    }
});

let fullBlueDeck;
let fullBrownDeck;
let fullGreenDeck;

// Получение рандомной карты из общей колоды

function getRandomCards(max) {
    return Math.floor(Math.random() * (max + 1));
}

//Набор необходимого количества карт из общей колоды по цветам и уровням сложности

function getFullDeckTooEasy(color, quantity, sum) {
    let set = new Set();
    if (color == 'blue') {
        while (!(set.size == quantity)) {
            let currentCard = cards.blueCards[getRandomCards(sum)];
            if (currentCard.difficulty == 'easy') {
                set.add(currentCard);
            }
        }
    }
    if (color == 'brown') {
        cards.brownCards.forEach((item) => {
            if (item.difficulty == 'easy')
                set.add(item);
        });
        while (!(set.size == quantity)) {
            let currentCard = cards.brownCards[getRandomCards(sum)];
            if (currentCard.difficulty == 'normal') {
                set.add(currentCard);
            }
        }
    }
    if (color == 'green' && quantity == 4) {
        while (!(set.size == quantity)) {
            let currentCard = cards.greenCards[getRandomCards(sum)];
            if (currentCard.difficulty == 'easy') {
                set.add(currentCard);
            }
        }
    }
    if (color == 'green' && !(quantity == 4)) {
        cards.greenCards.forEach((item) => {
            if (item.difficulty == 'easy')
                set.add(item);
        });
        while (!(set.size == quantity)) {
            let currentCard = cards.greenCards[getRandomCards(sum)];
            if (currentCard.difficulty == 'normal') {
                set.add(currentCard);
            }
        }
    }
    return Array.from(set);
}

function getFullDeckEasy(color, quantity, sum) {
    let set = new Set();
    if (color == 'blue') {
        while (!(set.size == quantity)) {
            let currentCard = cards.blueCards[getRandomCards(sum)];
            if (currentCard.difficulty == 'easy' || currentCard.difficulty == 'normal') {
                set.add(currentCard);
            }
        }
    }
    if (color == 'brown') {
        while (!(set.size == quantity)) {
            let currentCard = cards.brownCards[getRandomCards(sum)];
            if (currentCard.difficulty == 'easy' || currentCard.difficulty == 'normal') {
                set.add(currentCard);
            }
        }
    }
    if (color == 'green') {
        while (!(set.size == quantity)) {
            let currentCard = cards.greenCards[getRandomCards(sum)];
            if (currentCard.difficulty == 'easy' || currentCard.difficulty == 'normal') {
                set.add(currentCard);
            }
        }
    }
    return Array.from(set);
}

function getFullDeckNormal(color, quantity, sum) {
    let set = new Set();
    while (!(set.size == quantity)) {
        if (color == 'blue') set.add(cards.blueCards[getRandomCards(sum)]);
        if (color == 'brown') set.add(cards.brownCards[getRandomCards(sum)]);
        if (color == 'green') set.add(cards.greenCards[getRandomCards(sum)]);
    }
    return Array.from(set);
}

function getFullDeckHard(color, quantity, sum) {
    let set = new Set();
    if (color == 'blue') {
        while (!(set.size == quantity)) {
            let currentCard = cards.blueCards[getRandomCards(sum)];
            if (currentCard.difficulty == 'hard' || currentCard.difficulty == 'normal') {
                set.add(currentCard);
            }
        }
    }
    if (color == 'brown') {
        while (!(set.size == quantity)) {
            let currentCard = cards.brownCards[getRandomCards(sum)];
            if (currentCard.difficulty == 'hard' || currentCard.difficulty == 'normal') {
                set.add(currentCard);
            }
        }
    }
    if (color == 'green') {
        while (!(set.size == quantity)) {
            let currentCard = cards.greenCards[getRandomCards(sum)];
            if (currentCard.difficulty == 'hard' || currentCard.difficulty == 'normal') {
                set.add(currentCard);
            }
        }
    }
    return Array.from(set);
}

function getFullDeckTooHard(color, quantity, sum) {
    let set = new Set();
    if (color == 'blue') {
        while (!(set.size == quantity)) {
            let currentCard = cards.blueCards[getRandomCards(sum)];
            if (currentCard.difficulty == 'hard') {
                set.add(currentCard);
            }
        }
    }
    if (color == 'brown') {
        cards.brownCards.forEach((item) => {
            if (item.difficulty == 'hard')
                set.add(item);
        });
        while (!(set.size == quantity)) {
            let currentCard = cards.brownCards[getRandomCards(sum)];
            if (currentCard.difficulty == 'normal') {
                set.add(currentCard);
            }
        }
    }
    if (color == 'green' && quantity == 4) {
        while (!(set.size == quantity)) {
            let currentCard = cards.greenCards[getRandomCards(sum)];
            if (currentCard.difficulty == 'hard') {
                set.add(currentCard);
            }
        }
    }
    if (color == 'green' && !(quantity == 4)) {
        cards.greenCards.forEach((item) => {
            if (item.difficulty == 'hard')
                set.add(item);
        });
        while (!(set.size == quantity)) {
            let currentCard = cards.greenCards[getRandomCards(sum)];
            if (currentCard.difficulty == 'normal') {
                set.add(currentCard);
            }
        }
    }
    return Array.from(set);
}

// Формирование колод карт по цветам

let quantityBlue;
let quantityBrown;
let quantityGreen;

function getAllDecks(flag) {
    if (flag == 1) {
        quantityBlue = 2;
        quantityBrown = 9;
        quantityGreen = 5;
    }
    if (flag == 2) {
        quantityBlue = 2;
        quantityBrown = 9;
        quantityGreen = 4;
    }
    if (flag == 3) {
        quantityBlue = 2;
        quantityBrown = 9;
        quantityGreen = 5;
    }
    if (flag == 4) {
        quantityBlue = 2;
        quantityBrown = 8;
        quantityGreen = 6;
    }
}

//Выбор сложности игры

const btnTooEasy = document.querySelector(".too-easy");
const btnEasy = document.querySelector(".easy");
const btnNormal = document.querySelector(".normal");
const btnHard = document.querySelector(".hard");
const btnTooHard = document.querySelector(".too-hard");

btnTooEasy.addEventListener('click', () => {
    if (ancientFlag) {
        if (!btnTooEasy.classList.contains('active')) btnTooEasy.classList.add('active');
        if (btnEasy.classList.contains('active')) btnEasy.classList.remove('active');
        if (btnNormal.classList.contains('active')) btnNormal.classList.remove('active');
        if (btnHard.classList.contains('active')) btnHard.classList.remove('active');
        if (btnTooHard.classList.contains('active')) btnTooHard.classList.remove('active');
        fullBlueDeck = getFullDeckTooEasy('blue', quantityBlue, 11);
        fullBrownDeck = getFullDeckTooEasy('brown', quantityBrown, 20);
        fullGreenDeck = getFullDeckTooEasy('green', quantityGreen, 17);
        if (!document.querySelector(".mix")) getBtnMix();
        console.log(fullBlueDeck);
        console.log(fullBrownDeck);
        console.log(fullGreenDeck);
    }
});

btnEasy.addEventListener('click', () => {
    if (ancientFlag) {
        if (!btnEasy.classList.contains('active')) btnEasy.classList.add('active');
        if (btnTooEasy.classList.contains('active')) btnTooEasy.classList.remove('active');
        if (btnNormal.classList.contains('active')) btnNormal.classList.remove('active');
        if (btnHard.classList.contains('active')) btnHard.classList.remove('active');
        if (btnTooHard.classList.contains('active')) btnTooHard.classList.remove('active');
        fullBlueDeck = getFullDeckEasy('blue', quantityBlue, 11);
        fullBrownDeck = getFullDeckEasy('brown', quantityBrown, 20);
        fullGreenDeck = getFullDeckEasy('green', quantityGreen, 17);
        if (!document.querySelector(".mix")) getBtnMix();
        console.log(fullBlueDeck);
        console.log(fullBrownDeck);
        console.log(fullGreenDeck);
    }
});

btnNormal.addEventListener('click', () => {
    if (ancientFlag) {
        if (!btnNormal.classList.contains('active')) btnNormal.classList.add('active');
        if (btnEasy.classList.contains('active')) btnEasy.classList.remove('active');
        if (btnTooEasy.classList.contains('active')) btnTooEasy.classList.remove('active');
        if (btnHard.classList.contains('active')) btnHard.classList.remove('active');
        if (btnTooHard.classList.contains('active')) btnTooHard.classList.remove('active');
        fullBlueDeck = getFullDeckNormal('blue', quantityBlue, 11);
        fullBrownDeck = getFullDeckNormal('brown', quantityBrown, 20);
        fullGreenDeck = getFullDeckNormal('green', quantityGreen, 17);
        if (!document.querySelector(".mix")) getBtnMix();
        console.log(fullBlueDeck);
        console.log(fullBrownDeck);
        console.log(fullGreenDeck);
    }
});

btnHard.addEventListener('click', () => {
    if (ancientFlag) {
        if (!btnHard.classList.contains('active')) btnHard.classList.add('active');
        if (btnEasy.classList.contains('active')) btnEasy.classList.remove('active');
        if (btnNormal.classList.contains('active')) btnNormal.classList.remove('active');
        if (btnTooEasy.classList.contains('active')) btnTooEasy.classList.remove('active');
        if (btnTooHard.classList.contains('active')) btnTooHard.classList.remove('active');
        fullBlueDeck = getFullDeckHard('blue', quantityBlue, 11);
        fullBrownDeck = getFullDeckHard('brown', quantityBrown, 20);
        fullGreenDeck = getFullDeckHard('green', quantityGreen, 17);
        if (!document.querySelector(".mix")) getBtnMix();
        console.log(fullBlueDeck);
        console.log(fullBrownDeck);
        console.log(fullGreenDeck);
    }
});

btnTooHard.addEventListener('click', () => {
    if (ancientFlag) {
        if (!btnTooHard.classList.contains('active')) btnTooHard.classList.add('active');
        if (btnEasy.classList.contains('active')) btnEasy.classList.remove('active');
        if (btnNormal.classList.contains('active')) btnNormal.classList.remove('active');
        if (btnHard.classList.contains('active')) btnHard.classList.remove('active');
        if (btnTooEasy.classList.contains('active')) btnTooEasy.classList.remove('active');
        fullBlueDeck = getFullDeckTooHard('blue', quantityBlue, 11);
        fullBrownDeck = getFullDeckTooHard('brown', quantityBrown, 20);
        fullGreenDeck = getFullDeckTooHard('green', quantityGreen, 17);
        if (!document.querySelector(".mix")) getBtnMix();
        console.log(fullBlueDeck);
        console.log(fullBrownDeck);
        console.log(fullGreenDeck);
    }
});

//Добавление кнопки "Замешать колоду"

function getBtnMix() {
    let button = document.createElement('button');
    document.querySelector('.footer').append(button);
    button.classList.add('btn');
    button.classList.add('mix');
    button.innerHTML = 'Замешать колоду';
}

//Замеc колоды

const deckBack = document.querySelector('.card-bg');
const deck = document.querySelector('.card');
const tracker = document.querySelector('.tracker');

document.addEventListener('click', e => {
    if (e.target.classList.contains('mix')) {
        document.querySelector(".mix").remove();
        if (deckBack.classList.contains('inactive')) deckBack.classList.remove('inactive');
        if (deck.classList.contains('inactive')) deck.classList.remove('inactive');
        if (tracker.classList.contains('inactive')) tracker.classList.remove('inactive');
        getMixDecks()
        document.getElementById('green1').textContent = sheme[0][0];
        document.getElementById('green2').textContent = sheme[1][0];
        document.getElementById('green3').textContent = sheme[2][0];
        document.getElementById('brown1').textContent = sheme[0][1];
        document.getElementById('brown2').textContent = sheme[1][1];
        document.getElementById('brown3').textContent = sheme[2][1];
        document.getElementById('blue1').textContent = sheme[0][2];
        document.getElementById('blue2').textContent = sheme[1][2];
        document.getElementById('blue3').textContent = sheme[2][2];
        ancientFlag = false;
        mixFlag = false;

    }
});

let deckStage1 = [];
let deckStage2 = [];
let deckStage3 = [];

function getMixDecks() {
    for (let i = 0; i < sheme[0][0]; i++) {
        let currentNum = getRandomCards(fullGreenDeck.length - 1);
        deckStage1.push(fullGreenDeck[currentNum]);
        fullGreenDeck.splice(currentNum, 1);
    }
    for (let i = 0; i < sheme[0][1]; i++) {
        let currentNum = getRandomCards(fullBrownDeck.length - 1);
        deckStage1.push(fullBrownDeck[currentNum]);
        fullBrownDeck.splice(currentNum, 1);
    }
    for (let i = 0; i < sheme[0][2]; i++) {
        let currentNum = getRandomCards(fullBlueDeck.length - 1);
        deckStage1.push(fullBlueDeck[currentNum]);
        fullBlueDeck.splice(currentNum, 1);
    }
    for (let i = 0; i < sheme[1][0]; i++) {
        let currentNum = getRandomCards(fullGreenDeck.length - 1);
        deckStage2.push(fullGreenDeck[currentNum]);
        fullGreenDeck.splice(currentNum, 1);
    }
    for (let i = 0; i < sheme[1][1]; i++) {
        let currentNum = getRandomCards(fullBrownDeck.length - 1);
        deckStage2.push(fullBrownDeck[currentNum]);
        fullBrownDeck.splice(currentNum, 1);
    }
    for (let i = 0; i < sheme[1][2]; i++) {
        let currentNum = getRandomCards(fullBlueDeck.length - 1);
        deckStage2.push(fullBlueDeck[currentNum]);
        fullBlueDeck.splice(currentNum, 1);
    }
    for (let i = 0; i < sheme[2][0]; i++) {
        let currentNum = getRandomCards(fullGreenDeck.length - 1);
        deckStage3.push(fullGreenDeck[currentNum]);
        fullGreenDeck.splice(currentNum, 1);
    }
    for (let i = 0; i < sheme[2][1]; i++) {
        let currentNum = getRandomCards(fullBrownDeck.length - 1);
        deckStage3.push(fullBrownDeck[currentNum]);
        fullBrownDeck.splice(currentNum, 1);
    }
    for (let i = 0; i < sheme[2][2]; i++) {
        let currentNum = getRandomCards(fullBlueDeck.length - 1);
        deckStage3.push(fullBlueDeck[currentNum]);
        fullBlueDeck.splice(currentNum, 1);
    }
    restDeck(shuffleDeck(deckStage1), shuffleDeck(deckStage2), shuffleDeck(deckStage3));
}

//Перемешивание маленьких колод

function shuffleDeck(deck) {
    let shuffleDeck = [];
    // let len = deck.length;
    while (deck.length > 0) {
        let index = Math.floor(Math.random() * deck.length);
        shuffleDeck.push(deck[index]);
        deck.splice(index, 1);
    }
    return shuffleDeck;
}

// Получение результирующей колоды

let resultDeck = [];

function restDeck(deck1, deck2, deck3) {
    resultDeck = [deck1, deck2, deck3];
    console.log(resultDeck);
}

// Пролистывание колоды

deckBack.addEventListener('click', () => {
    if (!resultDeck[0].length == 0) {
        deck.style.backgroundImage = `url(${resultDeck[0][0].cardFace})`;
        deck.classList.add('scale');
        setTimeout(scaleOff,100);
        if (resultDeck[0][0].color == 'green') document.getElementById('green1').textContent = document.getElementById('green1').textContent - 1;
        if (resultDeck[0][0].color == 'brown') document.getElementById('brown1').textContent = document.getElementById('brown1').textContent - 1;
        if (resultDeck[0][0].color == 'blue') document.getElementById('blue1').textContent = document.getElementById('blue1').textContent - 1;
        resultDeck[0].splice(0, 1);
    } else {
        if (!resultDeck[1].length == 0) {
            deck.style.backgroundImage = `url(${resultDeck[1][0].cardFace})`;
            deck.classList.add('scale');
            setTimeout(scaleOff,100);
            if (resultDeck[1][0].color == 'green') document.getElementById('green2').textContent = document.getElementById('green2').textContent - 1;
            if (resultDeck[1][0].color == 'brown') document.getElementById('brown2').textContent = document.getElementById('brown2').textContent - 1;
            if (resultDeck[1][0].color == 'blue') document.getElementById('blue2').textContent = document.getElementById('blue2').textContent - 1;
            resultDeck[1].splice(0, 1);
        } else {
            if (!resultDeck[2].length == 0) {
                deck.style.backgroundImage = `url(${resultDeck[2][0].cardFace})`;
                deck.classList.add('scale');
                setTimeout(scaleOff,100);
                if (resultDeck[2][0].color == 'green') document.getElementById('green3').textContent = document.getElementById('green3').textContent - 1;
                if (resultDeck[2][0].color == 'brown') document.getElementById('brown3').textContent = document.getElementById('brown3').textContent - 1;
                if (resultDeck[2][0].color == 'blue') document.getElementById('blue3').textContent = document.getElementById('blue3').textContent - 1;
                resultDeck[2].splice(0, 1);
                if (resultDeck[2].length == 0) {
                    deckBack.classList.add('inactive');
                    getBtnAgain()
                }
            }
        }
    }
});

function scaleOn () {
    deck.classList.add('scale');
}

function scaleOff () {
    deck.classList.remove('scale');
}

//Добавление кнопки "Начать сначала"

function getBtnAgain() {
    let button = document.createElement('button');
    document.querySelector('.footer').append(button);
    button.classList.add('btn');
    button.classList.add('again');
    button.style.width = '195.2px';
    button.innerHTML = 'Начать заново';
}

document.addEventListener('click', e => {
    if (e.target.classList.contains('again')) {
        window.location.reload();
    }
});