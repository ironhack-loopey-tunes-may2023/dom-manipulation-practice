
/****************************/
/* Find elements in the DOM */
/* **************************/

// by Id
const mainTitle = document.getElementById("main-title");
mainTitle.innerHTML = "Welcome, LoopeyTunes";


// by class name
const infoCollection = document.getElementsByClassName("info");

const infoElementsArray = [...infoCollection]; // convert html collection to an array

infoElementsArray.forEach(function(element){
    // console.log(element)
    element.style.color = "blue";
});


// by tag name
const allParagraphsHtmlCollection = document.getElementsByTagName("p");


// by css selectors....

const first = document.querySelector("header h2"); //first element matching this css selector
const all = document.querySelectorAll("header h2"); //all elements matching this css selector

//querySelectorAll returns a nodelist (we can use forEach)
all.forEach(function(elm){
    elm.style.color = "orange"
});



//
//
// context: document vs. element
//
//

const allParagraphsInDocument = document.getElementsByTagName("p");

const productsElm = document.getElementById("products");
const allParagraphsInProductsElm = productsElm.getElementsByTagName("p");


const allParagraphsInProductsElm_Alternative = document.querySelectorAll("#products p")

// console.log(allParagraphsInDocument) //9
// console.log(allParagraphsInProductsElm) //3
// console.log(allParagraphsInProductsElm_Alternative) //3



/**************/
/* Properties */
/**************/

//Read/Modify html contents --> elm.innerHTML

const pikachuElm = document.getElementById("pikachu");

pikachuElm.innerHTML = `
    <div>
        <p>one</p>
        <p>two
            <a href="#">click here for more info</a>
        <p>
    </div>
`;


//Read/Modify text content --> elm.innerText
const linkElm = document.getElementById("my-link");
linkElm.innerText = "About us --we are amazing"


//Read/Modify CSS --> elm.style
mainTitle.style.color = "purple";
mainTitle.style.backgroundColor = "rgb(200, 242, 131)";
mainTitle.style.border = "2px solid green";


//Read/Modify the id --> elm.id
mainTitle.id = "this-is-the-new-id"


//Read/Modify class --> elm.className
mainTitle.className = "title rounded"


//(bonus) elm.classList (provides methods to access class names)

// - elm.classList.remove("foo");
// - elm.classList.add("new-class")
// - elm.classList.toggle("active")

mainTitle.classList.toggle("important");



/**************/
/* Attributes */
/**************/

// get: elm.getAttribute(attributeName);
const result = linkElm.getAttribute("href");
// console.log(result)

// modify or create: elm.setAttribute(name, value);
linkElm.setAttribute("href", "https://ironhack.com");
linkElm.setAttribute("target", "_blank");

// remove: elm.removeAttribute(attrName);



/*********************/
/* Create a DOM node */
/*********************/


// step1: create the element
const newImg = document.createElement("img");

// step2: add content or modify (ex. innerHTML...)
newImg.setAttribute("src", "./images/pikachu.jpg");
newImg.setAttribute("alt", "beautiful pikachu image");

//step3: append to the dom: `parentElm.appendChild()`
const parentElm = document.getElementById("pikachu");
parentElm.appendChild(newImg)



/**************/
/**************/
/*   Events   */
/**************/
/**************/

/*

Examples of events:
- Document (DOMContentLoaded, ...)
- mouse events (ex. click, mouseover...)
- keyboard events (ex. keydown, keypress, keyup)


elm.addEventListener("click", doSomething);
elm.addEventListener("click", function(){});
elm.addEventListener("click", () => {});

*/


// const btn = document.getElementById("button-1");
// btn.addEventListener("click", () => {
//     console.log("user clicked on our btn..... 😇 ")
// });



//
// Detect click event
//
const btn = document.getElementById("button-1");
btn.addEventListener("click", (event) => {
    // console.log(event)
    console.log("user clicked on my btn! 😇");

    
    // step1: create the element
    const newParagraph = document.createElement("p");

    // step2: add content or modify (ex. innerHTML...)
    newParagraph.innerText = "This is my new paragraph"

    //step3: append to the dom: `parentElm.appendChild()`
    const parentElmPikachu = document.getElementById("pikachu");
    parentElmPikachu.appendChild(newParagraph);

})



//
// Detect keyboard event
//
document.addEventListener("keydown", (event) => {
    if(event.code === "Space"){
        console.log("you've pressed the spacebar");
    } else {
        console.log("you've pressed any other key");
    }
});


/*************************************/
/* Attach event to multiple elements */
/*************************************/

const allBtn = document.querySelectorAll(".btn");

allBtn.forEach( (elm) => {
    elm.addEventListener("click", (event) => {
        console.log("the user clicked on one button 🦸");
        console.log(event.target);
    });
});


/******************/
/* Event Bubbling */
/******************/

/*

when an event is fired, it will also "bubble up" and fire on all it's ancestors.

*/


// attach event to "box-2"
const box2 = document.getElementById("box-2");
box2.addEventListener("click", () => {
    console.log("click event fired in box-2 🥊")
})

// attach event to document 
document.addEventListener("click", () => {
    console.log("the user clicked somewhere in the document...... 🌴")
})



/*************************************************/
/* Detect Events on elements created dynamically */
/************************************************/

/*

One option, using event bubbling: 
https://stackoverflow.com/a/34896325/11298742

*/



/**********/ 
/* Inputs */
/**********/ 

const calcBtn = document.getElementById("calculate-btn");
calcBtn.addEventListener("click", () => {
    const priceElm = document.getElementById("price");
    console.log(priceElm.value); //note: string 
});