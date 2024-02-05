const firePottery = (pottery, firingTemperature) => {
    pottery.fired = true;
    pottery.cracked = firingTemperature > 2200;

    return pottery
}

module.exports = {firePottery}