`use strict`

function getRandom(max, min) {
    return Math.random() * (max - min) + min;
    // 0 >= random # <=1 * limit
}

// seattle sales
git    min: 23,
    max: 65,
    avg: 6.3,
    location: `Seattle`,
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function () {
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function () {
        for (let i = 0; i < this.hoursOfOperation.length; i++) {
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    }
}
seattle.getCookies();
let totalSeattle = 0;
let hoursArraySeattle = document.querySelector('.output1')
for (let i = 0; i < seattle.hoursOfOperation.length; i++) {
    //hoursDemo[i].innerHTML
    let variable = document.createElement("td");
    totalSeattle = seattle.cookiesPerHour[i] + totalSeattle;
    variable.innerHTML = `${seattle.cookiesPerHour[i]} cookies`;
    hoursArraySeattle.append(variable);
}

let cookieTotal1 = document.createElement("td");
cookieTotal1.innerHTML = `${totalSeattle} cookies`;
hoursArraySeattle.append(cookieTotal1);
// tokyo sales 
const tokyo = {
    min: 3,
    max: 24,
    avg: 1.2,
    location: `Tokyo`,
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function () {
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function () {
        for (let i = 0; i < this.hoursOfOperation.length; i++) {
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
}
tokyo.getCookies();
let totalToyka = 0;
let hoursArrayTokyo = document.querySelector('.output2')
for (let i = 0; i < tokyo.hoursOfOperation.length; i++) {
    let variable = document.createElement("td");
    totalToyka = tokyo.cookiesPerHour[i] + totalToyka;
    variable.innerHTML = `${tokyo.cookiesPerHour[i]} cookies`;
    hoursArrayTokyo.append(variable);
}
let cookieTotal2 = document.createElement("td");
cookieTotal2.innerHTML = `${totalToyka} cookies`;
hoursArrayTokyo.append(cookieTotal2);

// dubai sales
const dubai = {
    min: 11,
    max: 38,
    avg: 3.7,
    location: `Dubai`,
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function () {
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function () {
        for (let i = 0; i < this.hoursOfOperation.length; i++) {
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
}
// let hoursDemoDubai = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
// let cookieDemoDubai = [77, 122, 74, 74, 100, 127, 120, 138, 108, 85, 120, 79, 115, 44];
dubai.getCookies();
let totalDubai = 0;
let hoursArrayDubai = document.querySelector('.output3')
// for(let i=0; i < this.hoursOfOperation.length; i++) {
for (let i = 0; i < dubai.hoursOfOperation.length; i++) {
    let variable = document.createElement("td");
    totalDubai = dubai.cookiesPerHour[i] + totalDubai;
    variable.innerHTML = `${dubai.cookiesPerHour[i]} cookies`;
    hoursArrayDubai.append(variable);
}
let cookieTotal = document.createElement("td");
cookieTotal.innerHTML = `${totalDubai} cookies`;
hoursArrayDubai.append(cookieTotal);

// let dubaiCookieTotal = dubai.getCookies[i] += 
// paris sales
const paris = {
    min: 20,
    max: 38,
    avg: 2.3,
    location: `Paris`,
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function () {
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function () {
        for (let i = 0; i < this.hoursOfOperation.length; i++) {
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
}
// let hoursDemoParis = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
// let cookieDemoParis = [80, 58, 85, 72, 78, 85, 56, 80, 67, 51, 85, 83, 66, 80];
paris.getCookies();
let totalParis = 0;
let hoursArrayParis = document.querySelector('.output4')
for (let i = 0; i < paris.hoursOfOperation.length; i++) {
    let variable = document.createElement("td");
    totalParis = paris.cookiesPerHour[i] + totalParis;
    variable.innerHTML = `${paris.cookiesPerHour[i]} cookies`;
    hoursArrayParis.append(variable);
}
let cookieTotal3 = document.createElement("td");
cookieTotal3.innerHTML = `${totalParis} cookies`;
hoursArrayParis.append(cookieTotal3);
// lima sales
const lima = {
    min: 2,
    max: 16,
    avg: 4.6,
    location: `Lima`,
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "Daily Total"],
    customersPerHour: function () {
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function () {
        for (let i = 0; i < lima.hoursOfOperation.length; i++) {
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
}
// let hoursDemoLima = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
// let cookieDemoLima = [28, 28, 68, 61, 58, 37, 61, 45, 63, 71, 30, 37, 25, 54];
lima.getCookies();
let totalLima = 0;
let hoursArrayLima = document.querySelector('.output5')
for (let i = 0; i < paris.hoursOfOperation.length; i++) {
    let variable = document.createElement("td");
    totalLima = lima.cookiesPerHour[i] + totalLima;
    variable.innerHTML = `${lima.cookiesPerHour[i]} cookies`;
    hoursArrayLima.append(variable);
}

let cookieTotalLima = document.createElement("td");
cookieTotalLima.innerHTML = `${totalLima} cookies`;
hoursArrayLima.append(cookieTotalLima);
// Here is my attempt at times

let variable = document.createElement("td");
let openHoursArray = document.querySelector(`#time`)
openHoursArray.append(variable);

// let timeArray = document.createElement("td");
// openHoursArray.append(timeArray)

for (let i = 0; i < lima.hoursOfOperation.length; i++) {
    let totalHoursOpen = document.createElement("td");
    totalHoursOpen.innerHTML = `${lima.hoursOfOperation[i]}`;
    openHoursArray.append(totalHoursOpen);
}
// lab 9

let form = document.createElement("locationForm");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let storeLocation = document.getElementById('location').value;

    if (storeLocation.values == ""){
        alert("Invalid Store")
    }else{
        alert("Store Location Saved")
    }
})
