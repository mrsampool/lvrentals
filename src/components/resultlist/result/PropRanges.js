import Properties from '../properties';

const PropRanges = {
    maxPrice: function(){
        let prices = []
        Properties.forEach(property =>{
            property.unitTypes.forEach(unitType =>{
                prices.push(unitType.price)
            })
        })
        return prices.reduce( (a,b) =>{
            return a > b ? a : b;
        })
    },
    minPrice: function(){
        let prices = []
        Properties.forEach(property =>{
            property.unitTypes.forEach(unitType =>{
                prices.push(unitType.price)
            })
        })
        return prices.reduce( (a,b) =>{
            return a < b ? a : b;
        })
    },
    maxSize: function(){
        let sizes = []
        Properties.forEach(property =>{
            property.unitTypes.forEach(unitType =>{
                sizes.push(unitType.size)
            })
        })
        return sizes.reduce( (a,b) =>{
            return a > b ? a : b;
        })
    },
    minSize: function(){
        let sizes = []
        Properties.forEach(property =>{
            property.unitTypes.forEach(unitType =>{
                sizes.push(unitType.size)
            })
        })
        return sizes.reduce( (a,b) =>{
            return a < b ? a : b;
        })
    },

}

export default PropRanges;