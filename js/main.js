var elList = document.querySelector(".list");
var elItem = document.querySelector(".list-item1");
var elItemCss = document.querySelector(".list-item2");
var elItemBoot = document.querySelector(".list-item3");
var elItemJs = document.querySelector(".list-item4");
var elItemReact = document.querySelector(".list-item5");
var elItemFront = document.querySelector(".list-item6");
var elButton = document.querySelector(".btn");

var record = new webkitSpeechRecognition();

record.lang = "en-US"

record.onend = function(){
  console.log("===== Aloqa tugadi =====");
}

record.onerror = function(){
  console.log("===== Xatolik yuz berdi =====");
}

record.onresult = function(evt){

  var command = evt["results"][0][0]["transcript"];

  if(command.includes("start")){
    elItem.classList.add("list-html");
  }


  if(command.includes("green")){
    elItemCss.classList.add("list-html");
  }

  if(command.includes("yellow")){
    elItemBoot.classList.add("list-html");
  }

  if(command.includes("red")){
    elItemJs.classList.add("list-html");
  }

  if(command.includes("blue")){
    elItemReact.classList.add("list-html");
  }

  if(command.includes("finish")){
    elItemFront.classList.add("list-html");
  }
}

elButton.addEventListener("click", function(){
  console.log("===== Aloqa boshlandi =====");
  record.start();
})
