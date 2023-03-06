'use strict'
//random function between max and min input
function getRandom(max, min) {
    return Math.ceil(Math.random() * (max - min) + min);
    // 0 >= random # <= 1 * limit
}

const seattle = {
    min : 23,
    max: 65,
    avg: 6.3,
    location: 'Seattle',
    hoursOfOperation: [
        "6am",
        "7am",
        "8am",
        "9am",
        "10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm",
        "7pm",
    ],
    customersPerHour: function (){
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function () {
        for (let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('seattle avg cookies/sale', this.avg);
            console.log('seattle avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(this.avg * this.customersPerHour());
        }
        return this.cookiesPerHour;
    }
}

getRandom()
customersPerHour()
getCookies()

//object definition for a location
    //---starting data
        /*
        Location    Min/Cust    Max/Cust    AvgCookie/Sale
        Seattle     23          65          6.3
