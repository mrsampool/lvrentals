class Building{
    constructor(
        name,
        location,

        address,
        cityStateZip,
        county,

        totUnits,
        newUnits,

        map,
        images,

        unitTypes
        ){
            this.name = name;
            this.location = location;

            this.address = address;
            this.cityStateZip = cityStateZip;
            this.county = county;

            this.totUnits = totUnits;
            this.newUnits = newUnits;

            this.map = map;
            this.images = images;

            this.unitTypes = unitTypes;
        }
    //PRICE CALCULATORS
    prices(){
        let prices = this.unitTypes.map( unit =>{
            return unit.price;
        })
        return prices.sort( (a,b) =>{
            return a < b ? -1: 1;
        })
    }
    
    maxPrice(){
        return this.prices()[this.prices().length - 1];
    }
    minPrice(){
        return this.prices()[ 0 ];
    }
    priceRange(){
        if ( this.minPrice() === this.maxPrice() ){
            return `$${this.maxPrice()}`;
        }
        return `$${ this.minPrice() } - $${ this.maxPrice() }`
    }

    //SIZE CALCULATORS
    sizes(){
        let sizes = this.unitTypes.map( unit =>{
            return unit.size;
        })
        return sizes.sort( (a,b) =>{
            return a < b ? -1: 1;
        })
    }
    maxSize(){
        return this.sizes()[this.sizes().length - 1];
    }
    minSize(){
        return this.sizes()[ 0 ];
    }
    sizeRange(){
        if ( this.minSize() === this.maxSize() ){
            return `${this.maxSize()}`;
        }
        return `${ this.minSize() } - ${ this.maxSize() }`
    }

    //AVAILABILITY CALCULATOR
    numAvail(){
        let availByType =[];
        //Get Number Available For Each Unit Type
        this.unitTypes.forEach( unitType =>{
            if( unitType.avail ){
                availByType.push( unitType.avail[1] )
            }
        })
        //Add Available Units
        if( availByType.length > 1 ){
            return availByType.reduce( (a,b) =>{
                return a + b;
            })
        }
        //Check for Availability
        if ( availByType.some( num => num >= 1) ){
            return availByType;
        } return 0;
    }
    //LIST OF AVAILABLE UNITS
    availUnitList(){
        return this.unitTypes.filter(unitType=>{
            return unitType.avail[0] === true;
        })
    }
}

class Commercial extends Building {
    constructor(
        name,

        location,
        address,
        cityStateZip,
        county,

        totUnits,
        totBuildings,
        totSqFt,
        newUnits,

        map,
        images,

        unitTypes
        ){
            super(
                name,

                location,
                address,
                cityStateZip,
                county,

                totUnits,
                newUnits,

                map,
                images,

                unitTypes
                )
            this.totSqFt = totSqFt;
            this.totBuildings = totBuildings;
            this.type = 'commercial'
        }
}

class Residential extends Building {
    constructor(
        name,

        location,
        address,
        cityStateZip,
        county,

        totUnits,
        newUnits,
        includes,

        map,
        images,

        unitTypes
        ){
            super(
                name,

                location,
                address,
                cityStateZip,
                county,

                totUnits,
                newUnits,

                map,
                images,

                unitTypes
                )
            this.includes = includes;
            this.type = 'residential'
        }
}

const cleburneRd = new Commercial(
    '1187 & W Cleburne Rd',

    'Tarrant County, TX',
    '612 W Cleburne Rd',
    'Crowley, TX 76036',
    'Tarrant County',

    15,
    5,
    39100,
    [false],

    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215197.11243301054!2d-97.55284574397673!3d32.567390768814285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e6b67fdbda52b%3A0xf35f153aa79b3ac5!2s612%20W%20Cleburne%20Rd%2C%20Crowley%2C%20TX%2076036!5e0!3m2!1sen!2sus!4v1591138122773!5m2!1sen!2sus",

    [{
        thumb: require('./photos/LVR-wCleburne-thumb-1.jpg'),
        highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-1.jpg'),
    },
    {
        thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-2.jpg'),
        highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-2.jpg'),
    },
    {
        thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-3.jpg'),
        highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-3.jpg'),
    },
    {
        thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-4.jpg'),
        highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-4.jpg'),
    },
    {
        thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-5.jpg'),
        highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-5.jpg'),
    },
    {
        thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-6.jpg'),
        highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-6.jpg'),
    },
    {
        thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-7.jpg'),
        highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-7.jpg'),
    },
    {
        thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-8.jpg'),
        highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-8.jpg'),
    },
    // WAREHOUSE PHOTOS
    {
        thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-10.jpg'),
        highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-10.jpg'),
    },
    {
        thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-11.jpg'),
        highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-11.jpg'),
    },
    {
        thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-12.jpg'),
        highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-12.jpg'),
    },
    //OFFICE PHOTOS
    {
        thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-13.jpg'),
        highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-13.jpg'),
    },
    {
        thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-14.jpg'),
        highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-14.jpg'),
    },
    {
        thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-15.jpg'),
        highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-15.jpg'),
    },
    {
        thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-16.jpg'),
        highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-16.jpg'),
    },
    {
        thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-17.jpg'),
        highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-17.jpg'),
    }
],

    [
        {
            size: 3000,
            price: 2400,
            avail: false
        },{
            size: 1800,
            price: 1440,
            avail: false                   
        },{
            size: 3500,
            price: 2800,
            avail: [true,1]
        },{
            size: 2100,
            price: 1680,
            avail: [true,1]
        }
    ]
    )

const cr807 = new Commercial(
    'County Road 807',

    'Johnson County, TX',
    '3445 County Rd 807',
    'Cleburne, TX 76031',
    'Johnson County',

    13,
    8,
    62500,
    [false],

    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101908.72680820173!2d-97.3670381380785!3d32.46654559831861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e4305a7ddbe49%3A0x5d6f13795f750735!2s3445%20County%20Rd%20807%2C%20Cleburne%2C%20TX%2076031!5e0!3m2!1sen!2sus!4v1591455942907!5m2!1sen!2sus",
    
    [{
        thumb: require('./images/propphotos/cr807/thumbs/LVR-cr807-Thumbs-1.jpg'),
        highres: require('./images/propphotos/cr807/highres/LVR-cr807-highres-1.jpg'),
    },
    {
        thumb: require('./images/propphotos/cr807/thumbs/LVR-cr807-Thumbs-2.jpg'),
        highres: require('./images/propphotos/cr807/highres/LVR-cr807-highres-2.jpg'),
    },
    {
        thumb: require('./images/propphotos/cr807/thumbs/LVR-cr807-Thumbs-3.jpg'),
        highres: require('./images/propphotos/cr807/highres/LVR-cr807-highres-3.jpg'),
    },
    {
        thumb: require('./images/propphotos/cr807/thumbs/LVR-cr807-Thumbs-4.jpg'),
        highres: require('./images/propphotos/cr807/highres/LVR-cr807-highres-4.jpg'),
    },
    {
        thumb: require('./images/propphotos/cr807/thumbs/LVR-cr807-Thumbs-5.jpg'),
        highres: require('./images/propphotos/cr807/highres/LVR-cr807-highres-5.jpg'),
    },
    {
        thumb: require('./images/propphotos/cr807/thumbs/LVR-cr807-Thumbs-6.jpg'),
        highres: require('./images/propphotos/cr807/highres/LVR-cr807-highres-6.jpg'),
    },
    {
        thumb: require('./images/propphotos/cr807/thumbs/LVR-cr807-Thumbs-7.jpg'),
        highres: require('./images/propphotos/cr807/highres/LVR-cr807-highres-7.jpg'),
    },
    {
        thumb: require('./images/propphotos/cr807/thumbs/LVR-cr807-Thumbs-8.jpg'),
        highres: require('./images/propphotos/cr807/highres/LVR-cr807-highres-8.jpg'),
    },
    {
        thumb: require('./images/propphotos/cr807/thumbs/LVR-cr807-Thumbs-9.jpg'),
        highres: require('./images/propphotos/cr807/highres/LVR-cr807-highres-9.jpg'),
    },
    {
        thumb: require('./images/propphotos/cr807/thumbs/LVR-cr807-Thumbs-10.jpg'),
        highres: require('./images/propphotos/cr807/highres/LVR-cr807-highres-10.jpg'),
    },
    // WAREHOUSE PHOTOS
    {
        thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-10.jpg'),
        highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-10.jpg'),
    },
    {
        thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-11.jpg'),
        highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-11.jpg'),
    },
    {
        thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-12.jpg'),
        highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-12.jpg'),
    },
    //OFFICE PHOTOS
    {
        thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-13.jpg'),
        highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-13.jpg'),
    },
    {
        thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-14.jpg'),
        highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-14.jpg'),
    },
    {
        thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-15.jpg'),
        highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-15.jpg'),
    },
    {
        thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-16.jpg'),
        highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-16.jpg'),
    },
    {
        thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-17.jpg'),
        highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-17.jpg'),
    }
    ],

    [
        {
            size: 8500,
            price: 5100,
            avail: false
        },{
            size: 1500,
            price: 900,
            avail: false                 
        }
    ]
    )

const txBusPark = new Commercial(
    'TX Ranch Business Park',

    'Johnson County, TX',
    '9115 US-67',
    'Alvarado, TX 76009',
    'Johnson County',

    10,
    4,
    27600,
    [false],

    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51880.147847665176!2d-97.20010131673025!3d32.40548187355999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e594e3e69b7b9%3A0x60891f45673387ab!2s9115%20US-67%2C%20Alvarado%2C%20TX%2076009!5e0!3m2!1sen!2sus!4v1591456056565!5m2!1sen!2sus",

    [
        {
            thumb: require('./images/propphotos/TXRbusPark/thumbs/LVR-TXRbusPark-thumbs-1.jpg'),
            highres: require('./images/propphotos/TXRbusPark/highres/LVR-TXRbusPark-highres-1.jpg'),
        },
        {
            thumb: require('./images/propphotos/TXRbusPark/thumbs/LVR-TXRbusPark-thumbs-2.jpg'),
            highres: require('./images/propphotos/TXRbusPark/highres/LVR-TXRbusPark-highres-2.jpg'),
        },
        {
            thumb: require('./images/propphotos/TXRbusPark/thumbs/LVR-TXRbusPark-thumbs-3.jpg'),
            highres: require('./images/propphotos/TXRbusPark/highres/LVR-TXRbusPark-highres-4.jpg'),
        },
        {
            thumb: require('./images/propphotos/TXRbusPark/thumbs/LVR-TXRbusPark-thumbs-5.jpg'),
            highres: require('./images/propphotos/TXRbusPark/highres/LVR-TXRbusPark-highres-5.jpg'),
        },
        {
            thumb: require('./images/propphotos/TXRbusPark/thumbs/LVR-TXRbusPark-thumbs-6.jpg'),
            highres: require('./images/propphotos/TXRbusPark/highres/LVR-TXRbusPark-highres-6.jpg'),
        },
        {
            thumb: require('./images/propphotos/TXRbusPark/thumbs/LVR-TXRbusPark-thumbs-7.jpg'),
            highres: require('./images/propphotos/TXRbusPark/highres/LVR-TXRbusPark-highres-7.jpg'),
        },
        {
            thumb: require('./images/propphotos/TXRbusPark/thumbs/LVR-TXRbusPark-thumbs-8.jpg'),
            highres: require('./images/propphotos/TXRbusPark/highres/LVR-TXRbusPark-highres-8.jpg'),
        },
        {
            thumb: require('./images/propphotos/TXRbusPark/thumbs/LVR-TXRbusPark-thumbs-9.jpg'),
            highres: require('./images/propphotos/TXRbusPark/highres/LVR-TXRbusPark-highres-9.jpg'),
        },
        {
            thumb: require('./images/propphotos/TXRbusPark/thumbs/LVR-TXRbusPark-thumbs-10.jpg'),
            highres: require('./images/propphotos/TXRbusPark/highres/LVR-TXRbusPark-highres-10.jpg'),
        },
        // WAREHOUSE PHOTOS
        {
            thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-10.jpg'),
            highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-10.jpg'),
        },
        {
            thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-11.jpg'),
            highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-11.jpg'),
        },
        {
            thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-12.jpg'),
            highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-12.jpg'),
        },
        //OFFICE PHOTOS
        {
            thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-13.jpg'),
            highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-13.jpg'),
        },
        {
            thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-14.jpg'),
            highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-14.jpg'),
        },
        {
            thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-15.jpg'),
            highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-15.jpg'),
        },
        {
            thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-16.jpg'),
            highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-16.jpg'),
        },
        {
            thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-17.jpg'),
            highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-17.jpg'),
        }
    ],

    [
        {
            size: 7200,
            price: 4320,
            avail: false
        },{
            size: 2400,
            price: 1440,
            avail: false                     
        }
    ]
    )
    
const us67atHandO = new Commercial(
    'US-67 @ H&O Lane',

    'Johnson County, TX',
    '5300 E Hwy 67',
    'Alvarado, TX 76009',
    'Johnson County',

    8,
    7,
    19700,
    [false],

    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.5275353120633!2d-97.27287068487352!3d32.40502451016653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e44b189fe2b5f%3A0x8dcdb3697de84267!2s5300%20US-67%2C%20Alvarado%2C%20TX%2076009!5e0!3m2!1sen!2sus!4v1591456131775!5m2!1sen!2sus",
    
    [
        {
            thumb: require('./images/propphotos/67h&o/thumbs/LVR-67h&o-thumb-1.jpg'),
            highres: require('./images/propphotos/67h&o/highres/LVR-67h&o-highres-1.jpg'),
        },
        {
            thumb: require('./images/propphotos/67h&o/thumbs/LVR-67h&o-thumb-2.jpg'),
            highres: require('./images/propphotos/67h&o/highres/LVR-67h&o-highres-2.jpg'),
        },
        {
            thumb: require('./images/propphotos/67h&o/thumbs/LVR-67h&o-thumb-3.jpg'),
            highres: require('./images/propphotos/67h&o/highres/LVR-67h&o-highres-3.jpg'),
        },
        {
            thumb: require('./images/propphotos/67h&o/thumbs/LVR-67h&o-thumb-4.jpg'),
            highres: require('./images/propphotos/67h&o/highres/LVR-67h&o-highres-4.jpg'),
        },
        {
            thumb: require('./images/propphotos/67h&o/thumbs/LVR-67h&o-thumb-5.jpg'),
            highres: require('./images/propphotos/67h&o/highres/LVR-67h&o-highres-5.jpg'),
        },
        {
            thumb: require('./images/propphotos/67h&o/thumbs/LVR-67h&o-thumb-6.jpg'),
            highres: require('./images/propphotos/67h&o/highres/LVR-67h&o-highres-6.jpg'),
        },
        {
            thumb: require('./images/propphotos/67h&o/thumbs/LVR-67h&o-thumb-7.jpg'),
            highres: require('./images/propphotos/67h&o/highres/LVR-67h&o-highres-7.jpg'),
        },
        {
            thumb: require('./images/propphotos/67h&o/thumbs/LVR-67h&o-thumb-8.jpg'),
            highres: require('./images/propphotos/67h&o/highres/LVR-67h&o-highres-8.jpg'),
        },
        // WAREHOUSE PHOTOS
        {
            thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-10.jpg'),
            highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-10.jpg'),
        },
        {
            thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-11.jpg'),
            highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-11.jpg'),
        },
        {
            thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-12.jpg'),
            highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-12.jpg'),
        }
    ],
    [
        {
            size: 8400,
            price: 5040,
            avail: false
        },{
            size: 1000,
            price: 600,
            avail: false                    
        }
    ]
    )

const us67hillTop = new Commercial(
    'US-67 Hilltop',

    'Johnson County, TX',
    '5968 US-67',
    'Alvarado, TX 76009',
    'Johnson County',

    5,
    3,
    16100,
    [false],

    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14439.683098727095!2d-97.24922330712539!3d32.41445377992892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e5b5af4452cbb%3A0xdca51bc9b9235115!2s5968%20US-67%2C%20Alvarado%2C%20TX%2076009!5e0!3m2!1sen!2sus!4v1591456830218!5m2!1sen!2sus",
    
    [
        {
            thumb: require('./images/propphotos/67hilltop/thumbs/LVR-67hilltop-thumb-1.jpg'),
            highres: require('./images/propphotos/67hilltop/highres/LVR-67hilltop-highres-1.jpg'),
        },
        {
            thumb: require('./images/propphotos/67hilltop/thumbs/LVR-67hilltop-thumb-2.jpg'),
            highres: require('./images/propphotos/67hilltop/highres/LVR-67hilltop-highres-2.jpg'),
        },
        {
            thumb: require('./images/propphotos/67hilltop/thumbs/LVR-67hilltop-thumb-3.jpg'),
            highres: require('./images/propphotos/67hilltop/highres/LVR-67hilltop-highres-3.jpg'),
        },
        {
            thumb: require('./images/propphotos/67hilltop/thumbs/LVR-67hilltop-thumb-4.jpg'),
            highres: require('./images/propphotos/67hilltop/highres/LVR-67hilltop-highres-4.jpg'),
        },
        {
            thumb: require('./images/propphotos/67hilltop/thumbs/LVR-67hilltop-thumb-5.jpg'),
            highres: require('./images/propphotos/67hilltop/highres/LVR-67hilltop-highres-5.jpg'),
        },
        {
            thumb: require('./images/propphotos/67hilltop/thumbs/LVR-67hilltop-thumb-6.jpg'),
            highres: require('./images/propphotos/67hilltop/highres/LVR-67hilltop-highres-6.jpg'),
        },
        {
            thumb: require('./images/propphotos/67hilltop/thumbs/LVR-67hilltop-thumb-7.jpg'),
            highres: require('./images/propphotos/67hilltop/highres/LVR-67hilltop-highres-7.jpg'),
        },
        {
            thumb: require('./images/propphotos/67hilltop/thumbs/LVR-67hilltop-thumb-8.jpg'),
            highres: require('./images/propphotos/67hilltop/highres/LVR-67hilltop-highres-8.jpg'),
        },
        {
            thumb: require('./images/propphotos/67hilltop/thumbs/LVR-67hilltop-thumb-9.jpg'),
            highres: require('./images/propphotos/67hilltop/highres/LVR-67hilltop-highres-9.jpg'),
        },
        {
            thumb: require('./images/propphotos/67hilltop/thumbs/LVR-67hilltop-thumb-10.jpg'),
            highres: require('./images/propphotos/67hilltop/highres/LVR-67hilltop-highres-10.jpg'),
        },
        {
            thumb: require('./images/propphotos/67hilltop/thumbs/LVR-67hilltop-thumb-11.jpg'),
            highres: require('./images/propphotos/67hilltop/highres/LVR-67hilltop-highres-11.jpg'),
        },
        {
            thumb: require('./images/propphotos/67hilltop/thumbs/LVR-67hilltop-thumb-12.jpg'),
            highres: require('./images/propphotos/67hilltop/highres/LVR-67hilltop-highres-12.jpg'),
        }],

    [
        {
            size: 6000,
            price: 3600,
            avail: false
        },{
            size: 3600,
            price: 2160,
            avail: [false]
        },{
            size: 1500,
            price: 900,
            avail: false                    
        }
    ]
    )

const i35burleson = new Commercial(
    'i35 @ Burleson',

    'Burleson, TX',
    '2816 S Burleson Blvd',
    'Burleson, TX 76028',
    'Johnson County',

    19,
    3,
    24000,
    [false],

    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48349.75040697128!2d-97.33717291327056!3d32.51000607554432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e42c58c9969a1%3A0xb4a51347ae00ce35!2s2816%20S%20Burleson%20Blvd%2C%20Burleson%2C%20TX%2076028!5e0!3m2!1sen!2sus!4v1591456924955!5m2!1sen!2sus",
    
    [
        {
            thumb: require('./images/propphotos/i35Burleson/thumbs/LVR-i35burleson-thumbs-1.jpg'),
            highres: require('./images/propphotos/i35Burleson/highres/LVR-i35burleson-highres-1.jpg'),
        },
        {
            thumb: require('./images/propphotos/i35Burleson/thumbs/LVR-i35burleson-thumbs-2.jpg'),
            highres: require('./images/propphotos/i35Burleson/highres/LVR-i35burleson-highres-3.jpg'),
        },
        {
            thumb: require('./images/propphotos/i35Burleson/thumbs/LVR-i35burleson-thumbs-4.jpg'),
            highres: require('./images/propphotos/i35Burleson/highres/LVR-i35burleson-highres-4.jpg'),
        },
        {
            thumb: require('./images/propphotos/i35Burleson/thumbs/LVR-i35burleson-thumbs-5.jpg'),
            highres: require('./images/propphotos/i35Burleson/highres/LVR-i35burleson-highres-5.jpg'),
        },
        {
            thumb: require('./images/propphotos/i35Burleson/thumbs/LVR-i35burleson-thumbs-6.jpg'),
            highres: require('./images/propphotos/i35Burleson/highres/LVR-i35burleson-highres-6.jpg'),
        },
        {
            thumb: require('./images/propphotos/i35Burleson/thumbs/LVR-i35burleson-thumbs-7.jpg'),
            highres: require('./images/propphotos/i35Burleson/highres/LVR-i35burleson-highres-7.jpg'),
        },
        {
            thumb: require('./images/propphotos/i35Burleson/thumbs/LVR-i35burleson-thumbs-8.jpg'),
            highres: require('./images/propphotos/i35Burleson/highres/LVR-i35burleson-highres-8.jpg'),
        },
        // WAREHOUSE PHOTOS
        {
            thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-10.jpg'),
            highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-10.jpg'),
        },
        {
            thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-11.jpg'),
            highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-11.jpg'),
        },
        {
            thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-12.jpg'),
            highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-12.jpg'),
        }
    ],
    
    [
        {
            size: 2500,
            price: 1500,
            avail: false
        },{
            size: 1250,
            price: 750,
            avail: [false]
        },{
            size: 1000,
            price: 600,
            avail: false                   
        }
    ]
    )

const i35valley = new Commercial(
    'i35 @ Alvarado',

    'Burleson, TX',
    '3800 S Burleson Blvd',
    'Alvarado, TX 76009',
    'Johnson County',

    13,
    2,
    20800,
    [false],

    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3366.7087261321035!2d-97.26245928487246!3d32.453730407706104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e5cd218d340d3%3A0xf04a785976a887bf!2s3800%20S%20Burleson%20Blvd%2C%20Alvarado%2C%20TX%2076009!5e0!3m2!1sen!2sus!4v1591456999847!5m2!1sen!2sus",
    
    [
        {
            thumb: require('./images/propphotos/i35Alvarado/thumbs/LVR-i35alvarado-thumbs-1.jpg'),
            highres: require('./images/propphotos/i35Alvarado/highres/LVR-i35alvarado-highres-1.jpg'),
        },
        {
            thumb: require('./images/propphotos/i35Alvarado/thumbs/LVR-i35alvarado-thumbs-2.jpg'),
            highres: require('./images/propphotos/i35Alvarado/highres/LVR-i35alvarado-highres-2.jpg'),
        },
        {
            thumb: require('./images/propphotos/i35Alvarado/thumbs/LVR-i35alvarado-thumbs-3.jpg'),
            highres: require('./images/propphotos/i35Alvarado/highres/LVR-i35alvarado-highres-3.jpg'),
        },
        {
            thumb: require('./images/propphotos/i35Alvarado/thumbs/LVR-i35alvarado-thumbs-4.jpg'),
            highres: require('./images/propphotos/i35Alvarado/highres/LVR-i35alvarado-highres-4.jpg'),
        },
        {
            thumb: require('./images/propphotos/i35Alvarado/thumbs/LVR-i35alvarado-thumbs-5.jpg'),
            highres: require('./images/propphotos/i35Alvarado/highres/LVR-i35alvarado-highres-5.jpg'),
        },
        {
            thumb: require('./images/propphotos/i35Alvarado/thumbs/LVR-i35alvarado-thumbs-6.jpg'),
            highres: require('./images/propphotos/i35Alvarado/highres/LVR-i35alvarado-highres-6.jpg'),
        },
        // WAREHOUSE PHOTOS
        {
            thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-10.jpg'),
            highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-10.jpg'),
        },
        {
            thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-11.jpg'),
            highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-11.jpg'),
        },
        {
            thumb: require('./images/propphotos/wCleburne/thumbs/LVR-wCleburne-thumb-12.jpg'),
            highres: require('./images/propphotos/wCleburne/highres/LVR-wCleburne-highres-12.jpg'),
        },
    ],

    [
        {
            size: 4800,
            price: 2880,
            avail: false
        },{
            size: 1250,
            price: 750,
            avail: [false]
        }
    ]
    )

const hometownVill = new Residential(
    'Hometown Village',

    'Joshua, TX',
    '717 Hometown Village Ct',
    'Joshua, TX 76058',
    'Johnson County',

    14,
    [false],
    'water, sewer & trash',

    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10528.548802595264!2d-97.39195770487605!3d32.46024061857756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e4054c622253b%3A0xf8508a4647c03b94!2s717%20Hometown%20Village%20Ct%2C%20Joshua%2C%20TX%2076058!5e0!3m2!1sen!2sus!4v1591457083312!5m2!1sen!2sus",
    
    [
        {
            thumb: require('./images/propphotos/hometownVill/thumbs/LVR-hometownVill-thumb-1.jpg'),
            highres: require('./images/propphotos/hometownVill/highres/LVR-hometownVill-highres-1.jpg'),
        },
        {
            thumb: require('./images/propphotos/hometownVill/thumbs/LVR-hometownVill-thumb-2.jpg'),
            highres: require('./images/propphotos/hometownVill/highres/LVR-hometownVill-highres-2.jpg'),
        },
        {
            thumb: require('./images/propphotos/hometownVill/thumbs/LVR-hometownVill-thumb-3.jpg'),
            highres: require('./images/propphotos/hometownVill/highres/LVR-hometownVill-highres-3.jpg'),
        },
        {
            thumb: require('./images/propphotos/hometownVill/thumbs/LVR-hometownVill-thumb-4.jpg'),
            highres: require('./images/propphotos/hometownVill/highres/LVR-hometownVill-highres-4.jpg'),
        },
        {
            thumb: require('./images/propphotos/hometownVill/thumbs/LVR-hometownVill-thumb-5.jpg'),
            highres: require('./images/propphotos/hometownVill/highres/LVR-hometownVill-highres-5.jpg'),
        },
        {
            thumb: require('./images/propphotos/hometownVill/thumbs/LVR-hometownVill-thumb-6.jpg'),
            highres: require('./images/propphotos/hometownVill/highres/LVR-hometownVill-highres-6.jpg'),
        },
        {
            thumb: require('./images/propphotos/hometownVill/thumbs/LVR-hometownVill-thumb-7.jpg'),
            highres: require('./images/propphotos/hometownVill/highres/LVR-hometownVill-highres-7.jpg'),
        },
        {
            thumb: require('./images/propphotos/hometownVill/thumbs/LVR-hometownVill-thumb-8.jpg'),
            highres: require('./images/propphotos/hometownVill/highres/LVR-hometownVill-highres-8.jpg'),
        },
        {
            thumb: require('./images/propphotos/hometownVill/thumbs/LVR-hometownVill-thumb-9.jpg'),
            highres: require('./images/propphotos/hometownVill/highres/LVR-hometownVill-highres-9.jpg'),
        },
        //INTERIOR PHOTOS:
        {
            thumb: require('./images/propphotos/hometownVill/thumbs/LVR-hometownVill-thumb-10.jpg'),
            highres: require('./images/propphotos/hometownVill/highres/LVR-hometownVill-highres-10.jpg'),
        },
        {
            thumb: require('./images/propphotos/hometownVill/thumbs/LVR-hometownVill-thumb-11.jpg'),
            highres: require('./images/propphotos/hometownVill/highres/LVR-hometownVill-highres-11.jpg'),
        },
        {
            thumb: require('./images/propphotos/hometownVill/thumbs/LVR-hometownVill-thumb-12.jpg'),
            highres: require('./images/propphotos/hometownVill/highres/LVR-hometownVill-highres-12.jpg'),
        },
        {
            thumb: require('./images/propphotos/hometownVill/thumbs/LVR-hometownVill-thumb-13.jpg'),
            highres: require('./images/propphotos/hometownVill/highres/LVR-hometownVill-highres-13.jpg'),
        },
        {
            thumb: require('./images/propphotos/hometownVill/thumbs/LVR-hometownVill-thumb-14.jpg'),
            highres: require('./images/propphotos/hometownVill/highres/LVR-hometownVill-highres-14.jpg'),
        },
        {
            thumb: require('./images/propphotos/hometownVill/thumbs/LVR-hometownVill-thumb-15.jpg'),
            highres: require('./images/propphotos/hometownVill/highres/LVR-hometownVill-highres-15.jpg'),
        },
        {
            thumb: require('./images/propphotos/hometownVill/thumbs/LVR-hometownVill-thumb-16.jpg'),
            highres: require('./images/propphotos/hometownVill/highres/LVR-hometownVill-highres-16.jpg'),
        },
        {
            thumb: require('./images/propphotos/hometownVill/thumbs/LVR-hometownVill-thumb-17.jpg'),
            highres: require('./images/propphotos/hometownVill/highres/LVR-hometownVill-highres-17.jpg'),
        }
    ],

    [
        {
            size: 1050,
            price: 1175,
            beds: 2,
            baths: 2,
            avail: [false]
        }
    ]
    )

const ranchEstates = new Residential(
    'Ranch Estates',
    
    'Johnson County, TX',
    '9101 US-67',
    'Alvarado, TX 76009',
    'Johnson County',

    14,
    [false],
    'water, sewer, trash, & high-speed internet',

    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37561.44444518777!2d-97.22055922646057!3d32.40799171338451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDI1JzIzLjIiTiA5N8KwMTAnMjAuOSJX!5e0!3m2!1sen!2sus!4v1592583946061!5m2!1sen!2sus",
    
    [
        {
            thumb: require('./images/propphotos/TXRestates/thumbs/LVR-TXRestates-thumb-1.jpg'),
            highres: require('./images/propphotos/TXRestates/highres/LVR-TXRestates-highres-1.jpg'),
        },
        {
            thumb: require('./images/propphotos/TXRestates/thumbs/LVR-TXRestates-thumb-2.jpg'),
            highres: require('./images/propphotos/TXRestates/highres/LVR-TXRestates-highres-2.jpg'),
        },
        {
            thumb: require('./images/propphotos/TXRestates/thumbs/LVR-TXRestates-thumb-3.jpg'),
            highres: require('./images/propphotos/TXRestates/highres/LVR-TXRestates-highres-3.jpg'),
        },
        {
            thumb: require('./images/propphotos/TXRestates/thumbs/LVR-TXRestates-thumb-4.jpg'),
            highres: require('./images/propphotos/TXRestates/highres/LVR-TXRestates-highres-4.jpg'),
        },
        {
            thumb: require('./images/propphotos/TXRestates/thumbs/LVR-TXRestates-thumb-5.jpg'),
            highres: require('./images/propphotos/TXRestates/highres/LVR-TXRestates-highres-5.jpg'),
        },
        {
            thumb: require('./images/propphotos/TXRestates/thumbs/LVR-TXRestates-thumb-6.jpg'),
            highres: require('./images/propphotos/TXRestates/highres/LVR-TXRestates-highres-6.jpg'),
        },
        {
            thumb: require('./images/propphotos/TXRestates/thumbs/LVR-TXRestates-thumb-7.jpg'),
            highres: require('./images/propphotos/TXRestates/highres/LVR-TXRestates-highres-7.jpg'),
        },
        {
            thumb: require('./images/propphotos/TXRestates/thumbs/LVR-TXRestates-thumb-8.jpg'),
            highres: require('./images/propphotos/TXRestates/highres/LVR-TXRestates-highres-8.jpg'),
        },
        {
            thumb: require('./images/propphotos/TXRestates/thumbs/LVR-TXRestates-thumb-9.jpg'),
            highres: require('./images/propphotos/TXRestates/highres/LVR-TXRestates-highres-9.jpg'),
        },
        {
            thumb: require('./images/propphotos/TXRestates/thumbs/LVR-TXRestates-thumb-10.jpg'),
            highres: require('./images/propphotos/TXRestates/highres/LVR-TXRestates-highres-10.jpg'),
        },
        {
            thumb: require('./images/propphotos/TXRestates/thumbs/LVR-TXRestates-thumb-11.jpg'),
            highres: require('./images/propphotos/TXRestates/highres/LVR-TXRestates-highres-11.jpg'),
        },
        {
            thumb: require('./images/propphotos/TXRestates/thumbs/LVR-TXRestates-thumb-12.jpg'),
            highres: require('./images/propphotos/TXRestates/highres/LVR-TXRestates-highres-12.jpg'),
        },
        {
            thumb: require('./images/propphotos/TXRestates/thumbs/LVR-TXRestates-thumb-13.jpg'),
            highres: require('./images/propphotos/TXRestates/highres/LVR-TXRestates-highres-13.jpg'),
        },
        {
            thumb: require('./images/propphotos/TXRestates/thumbs/LVR-TXRestates-thumb-14.jpg'),
            highres: require('./images/propphotos/TXRestates/highres/LVR-TXRestates-highres-14.jpg'),
        },
        {
            thumb: require('./images/propphotos/TXRestates/thumbs/LVR-TXRestates-thumb-15.jpg'),
            highres: require('./images/propphotos/TXRestates/highres/LVR-TXRestates-highres-15.jpg'),
        }
    ],
    
    [
        {
            size: 1050,
            price: 1225,
            beds: 2,
            baths: 2,
            avail: [false]         
        }
    ]
    )

const s6thSt = new Residential(
    'Alvarado 6th Street',

    'Alvarado, TX',
    '100 N 6th St',
    'Alvarado, TX 76009',
    'Johnson County',

    5,
    [false],
    '',

    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d640.5457094059017!2d-97.21107446664126!3d32.39957302318376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e5b97f0a7a317%3A0x98f16178c810ac4f!2sN%206th%20St%2C%20Alvarado%2C%20TX%2076009!5e0!3m2!1sen!2sus!4v1591457292570!5m2!1sen!2sus",
    
    [
        {
            thumb: require('./images/propphotos/6thSt/thumbs/LVR-6thSt-thumbs-1.jpg'),
            highres: require('./images/propphotos/6thSt/highres/LVR-6thSt-highres-1.jpg'),
        },
        {
            thumb: require('./images/propphotos/6thSt/thumbs/LVR-6thSt-thumbs-2.jpg'),
            highres: require('./images/propphotos/6thSt/highres/LVR-6thSt-highres-2.jpg'),
        },
        {
            thumb: require('./images/propphotos/6thSt/thumbs/LVR-6thSt-thumbs-3.jpg'),
            highres: require('./images/propphotos/6thSt/highres/LVR-6thSt-highres-3.jpg'),
        },
        {
            thumb: require('./images/propphotos/6thSt/thumbs/LVR-6thSt-thumbs-4.jpg'),
            highres: require('./images/propphotos/6thSt/highres/LVR-6thSt-highres-4.jpg'),
        },
        {
            thumb: require('./images/propphotos/6thSt/thumbs/LVR-6thSt-thumbs-5.jpg'),
            highres: require('./images/propphotos/6thSt/highres/LVR-6thSt-highres-5.jpg'),
        },
        {
            thumb: require('./images/propphotos/6thSt/thumbs/LVR-6thSt-thumbs-6.jpg'),
            highres: require('./images/propphotos/6thSt/highres/LVR-6thSt-highres-6.jpg'),
        },
        //INTERIOR PHOTOS:
        {
            thumb: require('./images/propphotos/hometownVill/thumbs/LVR-hometownVill-thumb-10.jpg'),
            highres: require('./images/propphotos/hometownVill/highres/LVR-hometownVill-highres-10.jpg'),
        },
        {
            thumb: require('./images/propphotos/hometownVill/thumbs/LVR-hometownVill-thumb-11.jpg'),
            highres: require('./images/propphotos/hometownVill/highres/LVR-hometownVill-highres-11.jpg'),
        },
        {
            thumb: require('./images/propphotos/hometownVill/thumbs/LVR-hometownVill-thumb-12.jpg'),
            highres: require('./images/propphotos/hometownVill/highres/LVR-hometownVill-highres-12.jpg'),
        },
        {
            thumb: require('./images/propphotos/hometownVill/thumbs/LVR-hometownVill-thumb-13.jpg'),
            highres: require('./images/propphotos/hometownVill/highres/LVR-hometownVill-highres-13.jpg'),
        },
        {
            thumb: require('./images/propphotos/hometownVill/thumbs/LVR-hometownVill-thumb-14.jpg'),
            highres: require('./images/propphotos/hometownVill/highres/LVR-hometownVill-highres-14.jpg'),
        },
        {
            thumb: require('./images/propphotos/hometownVill/thumbs/LVR-hometownVill-thumb-15.jpg'),
            highres: require('./images/propphotos/hometownVill/highres/LVR-hometownVill-highres-15.jpg'),
        },
        {
            thumb: require('./images/propphotos/hometownVill/thumbs/LVR-hometownVill-thumb-16.jpg'),
            highres: require('./images/propphotos/hometownVill/highres/LVR-hometownVill-highres-16.jpg'),
        },
        {
            thumb: require('./images/propphotos/hometownVill/thumbs/LVR-hometownVill-thumb-17.jpg'),
            highres: require('./images/propphotos/hometownVill/highres/LVR-hometownVill-highres-17.jpg'),
        }
    ],
 
    [
        {
            size: 1050,
            price: 1100,
            beds: 2,
            baths: 2,
            avail: false
        }
    ]
    )

const ruskDuplex = new Residential(
    'Alvarado Duplex',

    'Alvarado, TX',
    '900 S Rusk Ave',
    'Alvarado, TX 76009',
    'Johnson County',

    2,
    [false],
    '',

    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15211.959261882306!2d-97.21983236988844!3d32.40402335066266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e5bbd4c0f59a5%3A0x575c23b3ab18d4ec!2s900%20S%20Rusk%20Ave%2C%20Alvarado%2C%20TX%2076009!5e0!3m2!1sen!2sus!4v1591457353878!5m2!1sen!2sus",

    [
        {
            thumb: require('./images/propphotos/RuskDuplex/thumbs/LVR-RuskDuplex-Thumb-1.jpg'),
            highres: require('./images/propphotos/RuskDuplex/LVR-RuskDuplex-FullRes-1.jpg'),
        },
        {
            thumb: require('./images/propphotos/RuskDuplex/thumbs/LVR-RuskDuplex-Thumb-2.jpg'),
            highres: require('./images/propphotos/RuskDuplex/LVR-RuskDuplex-FullRes-2.jpg'),
        }
    ],
    
    [
        {
            size: 1100,
            price: 1100,
            beds: 2,
            baths: 2,
            avail: false
        }
    ]
    )

const Properties = [
        cleburneRd,
        cr807,
        txBusPark,
        us67atHandO,
        us67hillTop,
        i35burleson,
        i35valley,
        hometownVill,
        ranchEstates,
        s6thSt,
        ruskDuplex
    ]

Properties.forEach( property =>{
    property.priority = Properties.indexOf( property );

    for (let i=0; i<property.images.length;i++){
        property.images[i].index = i;
    }
})



export default Properties;