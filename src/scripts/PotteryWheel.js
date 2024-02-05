let potteryId = 1;

const makePottery = (shape, weight, height) => {
    const pottery = {
        shape,
        weight,
        height,
        id: potteryId++
    };

    return pottery
}

module.exports = {makePottery}

