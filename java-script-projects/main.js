// Basic Target

// document
let element = document;
console.log(element);


// document All
let elementAll = document.all;
console.log(elementAll);


// document head
let elementHead = document.head;
console.log(elementHead);


// document title
let elementTitle = document.title;
console.log(elementTitle);


// document body
let elementBody = document.body;
console.log(elementBody);


// document images
let elementImages = document.images;
console.log(elementImages);


// document anchors
let elementAnchors = document.anchors;
console.log(elementAnchors);


// document links
let elementLinks = document.links;
console.log(elementLinks);


// document forms
let elementForms = document.forms;
console.log(elementForms);


// document doctype
let elementDoctype = document.doctype;
console.log(elementDoctype);


// document URL
let elementUrl = document.URL;
console.log(elementUrl);


// document domain
let elementDomain = document.domain;
console.log(elementDomain);


// Target DOM 

// By Id Target
let elementId = document.getElementById("banner");
console.log(elementId);



// By Class Target
let elementClass = document.getElementsByClassName("slidingBox");
console.log(elementClass);



// By TagName Target
let elementTagName = document.getElementsByTagName("h2");
console.log(elementTagName);



// DOM get methods


// get by innerText
let elementInnerText = document.getElementById("banner").innerText;
console.log(elementInnerText);


// get by innerHTML
let elementInnerHTML = document.getElementById("banner").innerHTML;
console.log(elementInnerHTML);



//get by Attribute
let elementAttribute = document.getElementById("banner").getAttribute("style");
console.log(elementAttribute);



//get by AttributeNode
let elementAttributeNode = document.getElementById("banner").getAttributeNode("style");
console.log(elementAttributeNode);



//get by Attributes
let elementAttributes = document.getElementById("banner").attributes[2].value;
console.log(elementAttributes);



// DOM Set Methods

// Set InnerText
document.getElementsByTagName("h2")[0].innerText = "Landing pages";
let elementSetInnerText = document.getElementsByTagName("h2")[0].innerText;
console.log(elementSetInnerText);