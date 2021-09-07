// Write your solution here!


const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat () {
    cats.push("Ralph")
}

function destructivelyPrependCat () {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat() {
    const newcats= [...cats,"Broom"]
    return newcats;
}

function prependCat() {
    const newcats= ["Arnold",...cats]
    return newcats;
}

function removeLastCat() {
    const newcats = cats.slice(0, cats.length -1);
    return newcats;
}

function removeFirstCat() {
    const newcats = cats.slice(1);
    return newcats;
}