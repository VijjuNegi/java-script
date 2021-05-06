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



// Set Inner HTML
document.getElementsByTagName("h2")[0].innerHTML = "<h1>Landing pages</h1>";
let elementSetInnerHTML = document.getElementsByTagName("h2")[0].innerHTML;
console.log(elementSetInnerHTML);



// Set Attribute
document.getElementById("banner").setAttribute("class","abcColor");
let elementsetAttribute = document.getElementById("banner").getAttribute("class");
console.log(elementsetAttribute);



// Attributes
let elementSetAttributes = document.getElementById("banner").attributes.value = "abcColor";
console.log(elementSetAttributes);



// removeAttribute
document.getElementById("banner").removeAttribute("style");





// New Dom Targeting Methods  

// Target QuerySelector #ID
let elementQuerySelector = document.querySelector("#banner h2").innerText = "Java Srcipt";
console.log(elementQuerySelector);



// Target QuerySelector .CLASS
let elementQuerySelectorClass = document.querySelector(".slidingBox");
console.log(elementQuerySelectorClass);



// Target QuerySelectorAll #Id, .Class, TagName, 
let elementQuerySelectorAll = document.querySelectorAll(".slidingBox")[1].innerHTML;
console.log(elementQuerySelectorAll);


let paragraphQuerySelectorAll = document.querySelectorAll("p")[1].innerText;
console.log(paragraphQuerySelectorAll);




// Dom CSS Styling Methods

// get "style"
let getStyle = document.querySelector("#footer").style.color;
console.log(getStyle);



// value set of css
document.querySelector("#footer").style.backgroundColor = "red";
document.querySelector("#footer").style.fontSize = "25px";



// set of class Name

document.querySelector("#footer").className = "bgColor anyClass";
let setClassName = document.querySelector("#footer").className;
console.log(setClassName);



// set of class list => two methods add and remove
document.querySelector("#footer").classList;
let setClassList = document.querySelector("#footer").classList;
console.log(setClassList);