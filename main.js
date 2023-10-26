// let myIdElement = document.getElementById("my-div");

// let myTagElements = document.getElementsByTagName("p");

// let myClassElements = document.getElementsByClassName("my-span");

// let myQueryElement = document.querySelector(".my-span");

// let myQueryAllElements = document.querySelectorAll(".my-span");

// console.log(myIdElement);
// console.log(myTagElements[1]);

// myTagElements[1].innerHTML = "Test";

// console.log(myClassElements);
// console.log(myQueryElement);
// console.log(myQueryAllElements);

// console.log(document.title);
// console.log(document.body);

// console.log(document.forms[0].one.value);

// console.log(document.links[1].href);

/*  
--innerHTML
--textContent
--Change to attributes

--getAttribute
--setAttribute

*/

// let myElement = document.querySelector(".js");

// console.log(myElement);

// console.log(myElement.innerHTML);
// console.log(myElement.textContent);

// myElement.innerHTML = "Text From <span>Main.js</span>File";

// console.log(myElement);

// myElement.textContent = "Text From <span>Main.js</span>File";

// console.log(document.images[0]);
// document.images[0].src =
//   "https://play-lh.googleusercontent.com/NntMALIH4odanPPYSqUOXsX8zy_giiK2olJiqkcxwFIOOspVrhMi9Miv6LYdRnKIg-3R=w240-h480-rw";

// document.images[0].alt = "Alt";

// console.log(document.images[0]);

// document.images[0].title = "Picture";

// document.images[0].id = "Pic";

// let myLink = document.querySelector(".link");

// console.log(myLink.getAttribute("class"));
// console.log(myLink.getAttribute("href"));

// myLink.setAttribute("href", "https://google.com");

// myLink.setAttribute("title", "Google");

// console.log(myLink);

////////////////////////////////////////////

/*  
Element.attributes
Element.hasAttribute
Element.hasAttributes
Element.removeAttribute

*/

// let myP = document.querySelector("p");
// console.log(myP);

// if (myP.hasAttribute("data-src")) {
//   if (myP.getAttribute("data-src") === "") {
//     myP.removeAttribute("data-src");
//   } else {
//     myP.setAttribute("data-src", "New Value");
//   }
// } else {
//   console.log("Not Found");
// }
