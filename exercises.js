//01: Address Object

const address = {
    street: 'Street',
    city: "City",
    zipCode: 123
};

function showAddress(address) {
    for (let key in address)
        console.log(address[key]);
}

showAddress(address);

// 02: Same exercise using Factory and Constructor function

// Using Factory function
function showAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode,
    }
}

console.log(showAddress('a', 'b', 123));

console.log('===========================');

//Constructor function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const addr = new Address('a', 'b', 'c');
console.log(addr);

// Object Equality
const addr1 = new Address('a', 'b', 'c');
const addr2 = new Address('a', 'b', 'c');
const addr3 = addr1;

//01
function areEqual(addr1, addr2) {
    const isStreetEqual = addr1.street === addr2.street;
    const isCityEqual = addr1.city === addr2.city;
    const isZipCodeEqual = addr1.zipCode === addr2.zipCode;

    return isStreetEqual && isCityEqual && isZipCodeEqual ? 'Equal' : 'No-Equal';
}

console.log(areEqual(addr1, addr2));


//02
function areSame(addr1, addr2) {
    return addr1 === addr2;
}

console.log('##', areSame(addr1, addr2));
console.log('@@', areSame(addr1, addr3));

//Blog Post Object

const blogPost = {
    title: 'Sample Title',
    body: 'Sample Body',
    author: 'Sample Author',
    views: 1,
    comments: [
        {
            author: 'Another Author',
            body: 'Another Body'
        },
        {
            author: 'Another Author One',
            body: 'Another Body one'
        }
    ],
    isLive: true
};

console.log(blogPost);

// Constructor function

function Post(title, body, author, views = 0, comments = [], isLive = false) {

    this.title = title;
    this.body = body;
    this.author = author;
    this.views = views;
    this.comments = comments;
    this.isLive = isLive;

    this.makePublish = function (isLive = false) {
        this.isLive = isLive
    }

    this.addViews = function () {
        this.views++;
    }
}

const post1 = new Post(
    'a',
    'b',
    'c'
);

console.log('@@@@@', post1)
post1.addViews();
post1.addViews();
post1.makePublish(true)
console.log('@@###@@@', post1)

//Yelp 

const categories = [
    { type: 'inexpensive', label: '$', tooltip: 'I am INEXPENSIVE', selected: false },
    { type: 'moderate', label: '$$', tooltip: 'I am MODERATE', selected: false },
    { type: 'expensive', label: '$$$', tooltip: 'I am EXPENSIVE', selected: false }
];

console.log(categories);
