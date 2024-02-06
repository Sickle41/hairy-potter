const potteryCatalog = []

    const toSellOrNotToSell = (pottery) => {
        if (pottery.cracked) {
            return pottery
        }

        if (pottery.weight >= 6) {
            pottery.price = 40
        } 
        
        else {
            pottery.price = 20
        }

        potteryCatalog.push(pottery)

        return pottery

    }
        
    
    const usePottery = () => {
        return potteryCatalog.map(pottery =>({...pottery}))
        
    }
    
    
    module.exports = {toSellOrNotToSell, usePottery}




    //     if (pottery.weight >= 6 && pottery.cracked === false) {
    //         pottery.price = 40
    //     }
        
    //     if (pottery.weight < 6 && pottery.cracked === false) {
    //         pottery.price = 20
    //     }

    //     else (pottery.crack)
        

    //     potteryCatalog.push(pottery)
    // }