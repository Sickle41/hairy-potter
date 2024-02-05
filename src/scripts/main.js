// Imports go first
const { makePottery } = require("./PotteryWheel.js")
const { firePottery } = require("./Kiln.js")


// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 1, 2)
let plate = makePottery("Plate", 3, 1)
let bowl = makePottery("Bowl", 2, 2)
let cup = makePottery("Cup", 1, 2)
let saucer = makePottery("Saucer", 3, 1)


// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2000)
let firedPlate = firePottery(plate, 2100)
let firedBowl = firePottery(bowl, 2500)
let firedCup = firePottery(cup, 2200)
let firedSaucer = firePottery(saucer, 2000)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list


console.log(plate)