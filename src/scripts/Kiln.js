const firePottery = (pottery, firingTemperature) => {
    pottery.fired = true;
    pottery.cracked = false
    if (firingTemperature > 2200) {
        pottery.cracked = true;
    };

    return pottery
}

module.exports = {firePottery}