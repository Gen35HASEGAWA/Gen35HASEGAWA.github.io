const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'image/onigiri.jpg') {
    myImage.setAttribute('src','image/onigiri_big.jpg');
  } else {
    myImage.setAttribute('src','image/onigiri.jpg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  const myName = prompt('あなたの名前を入力してください。');
  localStorage.setItem('name', myName);
  myHeading.textContent = `おにぎりは旨いよ，${myName}`;
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `おにぎりは旨いよ，${storedName}`;
}

myButton.onclick = () => {
  setUserName();
}

function setUserName() {
  const myName = prompt('あなたの名前を入力してください。');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Mozilla はかっこいいよ、${myName}`;
  }
}
