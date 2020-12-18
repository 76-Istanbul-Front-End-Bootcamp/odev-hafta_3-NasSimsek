class Animal {
  constructor(name) {
    this.name = name;
  }

  action() {
    document.getElementById(this.actionSoundName).play();
  }
  addimage() {
    var t = document.querySelector("body").lastElementChild;
    if (t == document.querySelector("body").querySelector("img")) t.remove();
    var petImg = document.createElement("img");
    petImg.src = this.imgurl;
    document.querySelector("body").appendChild(petImg);
  }
  putInTheDocument() {
    var petsTable = document.getElementById("petsTable");
    var petTR = document.createElement("tr");
    var petNameTD = document.createElement("td");
    petNameTD.classList.add("hov");
    petNameTD.textContent = this.name;
    petTR.appendChild(petNameTD);

    var petLegsTD = document.createElement("td");
    petLegsTD.classList.add("hov");
    //petLegsTD.setAttribute("id","demoid");

    petLegsTD.textContent = this.legs;
    petTR.appendChild(petLegsTD);

    var petActionTD = document.createElement("td");
    var petActionTDButton = document.createElement("button");
    petActionTDButton.textContent = this.actionText;
    petActionTD.appendChild(petActionTDButton);
    petTR.appendChild(petActionTD);

    petActionTDButton.onclick = this.action.bind(this);
    petsTable.querySelector("tbody").appendChild(petTR);
    petNameTD.onclick = this.addimage.bind(this);
    petLegsTD.onclick = this.addimage.bind(this);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.legs = 4;
    this.actionText = "Meoow";
    this.actionSoundName = "meow";
    this.imgurl = "./gediş.jpg";
  }
}

class Monkey extends Animal {
  constructor(name) {
    super(name);
    this.legs = 2;
    this.actionText = "Scream";
    this.actionSoundName = "scream";
    this.imgurl = "./monkey.jpg";
  }
}

var Mila = new Cat("Mila");

Mila.putInTheDocument();
var Charlie = new Monkey("Charlie");
Charlie.putInTheDocument();
