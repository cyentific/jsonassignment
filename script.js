
let assistCollectionElement = document.getElementById('assistCollection');
let stylingCollectionElement = document.getElementById('stylingCollection');
let personalCollectionElement = document.getElementById('personalCollection');

let myJSON = [{
  "category" : "assists",
  "picture_url" : "assist1.jpeg"
 },
 {
  "category" : "assists",
  "picture_url" : "assist2.jpeg"
 },
 {
 "category" : "assists",
 "picture_url" : "assist3.jpg"
},
{
  "category" : "assists",
  "picture_url" : "assist4.jpeg"
},
{
  "category" : "styling",
  "picture_url" : "styling1.jpeg"
},

{
  "category" : "styling",
  "picture_url" : "styling2.jpeg"
},
{
  "category" : "styling",
  "picture_url" : "styling3.jpeg"
},

{
  "category" : "personal",
  "picture_url" : "cy1.jpeg"
},
{
  "category" : "personal",
  "picture_url" : "cy2.jpeg"
},
{
  "category" : "personal",
  "picture_url" : "cy3.jpeg"
},
{
  "category" : "personal",
  "picture_url" : "cy4.jpeg"
}];

//var randomIndex = Math.floor(Math.random() * myJSON["category"].length);

createElementProper(myJSON);

for (var i = 0; i < myJSON.length; i++) {
  createElementProper(myJSON[i]);
}


function createElementProper(incomingJSON) {

 /// Create whole content item div and set class
 let newContentElement = document.createElement("DIV");
 newContentElement.classList.add('contentItem');

 let newImageElement = document.createElement("IMG");
 newImageElement.src = incomingJSON["picture_url"];
 newContentElement.appendChild(newImageElement);

  /// Add the item to the page
  if (incomingJSON['category'] == "assists") { assistCollectionElement.appendChild(newContentElement); }
  if (incomingJSON['category'] == "styling") { stylingCollectionElement.appendChild(newContentElement); }
  if (incomingJSON['category'] == "personal") { personalCollectionElement.appendChild(newContentElement); }

}
