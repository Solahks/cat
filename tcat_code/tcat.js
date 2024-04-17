myCat = document.getElementById("tcat");
const eyeClose = setInterval(myCatClose, 3500);
const eyeOpen = setInterval(myCatOpen, 3550);
const mouthOpen = setInterval(catMouthOpen, 11500);
const mouthClose = setInterval(catMouthClose, 14500);

function catPet() {
  const mySrc = myCat.getAttribute("src");
  myCat.setAttribute("src", "images/tcat4.png");
  const stopPets = setTimeout(endCatPets, 500);
  console.log("pet");
}

function myCatClose() {
  const mySrc = myCat.getAttribute("src");
  if (mySrc === "images/tcat.png") {
    myCat.setAttribute("src", "images/tcat2.png");
  }
}

function myCatOpen() {
  const mySrc = myCat.getAttribute("src");
  if (mySrc === "images/tcat2.png") {
    myCat.setAttribute("src", "images/tcat.png");
    setInterval(myCatOpen, 3500);
    console.log("open");
  }
  clearInterval(eyeOpen);
}

function catMouthOpen() {
  const mySrc = myCat.getAttribute("src");
  if (mySrc === "images/tcat.png") {
    myCat.setAttribute("src", "images/tcat3.png");
  }
}

function catMouthClose() {
  const mySrc = myCat.getAttribute("src");
  if (mySrc === "images/tcat3.png") {
    myCat.setAttribute("src", "images/tcat.png");
    setInterval(catMouthClose, 11500);
    console.log("mouth close");
  }
  clearInterval(mouthClose);
}

function endCatPets() {
    const mySrc = myCat.getAttribute("src");
    if (mySrc === "images/tcat4.png") {
      myCat.setAttribute("src", "images/tcat.png");
    }
    console.log("endpets")
}