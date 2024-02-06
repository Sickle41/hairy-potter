// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { potteryList } from "./PotteryList.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 7, 2)
let plate = makePottery("Plate", 3, 1)
let bowl = makePottery("Bowl", 2, 2)
let cup = makePottery("Cup", 1, 2)
let saucer = makePottery("Saucer", 3, 1)


// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2000);
let firedPlate = firePottery(plate, 2100);
let firedBowl = firePottery(bowl, 2500);
let firedCup = firePottery(cup, 2200);
let firedSaucer = firePottery(saucer, 2000);

// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug)
toSellOrNotToSell(firedPlate)
toSellOrNotToSell(firedBowl)
toSellOrNotToSell(firedCup)
toSellOrNotToSell(firedSaucer)


const parentHTMLElement = document.querySelector(".Pottery_Container")

// Invoke the component function that renders the HTML list

parentHTMLElement.innerHTML = potteryList()





