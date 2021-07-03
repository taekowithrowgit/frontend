// document.getElementById("box").textContent = new Date().toLocaleString();
// document.getElementById("box").textContent = "abc" + "def"
// document.getElementById("box").textContent = 1 + 2;


// const button = document.getElementById('my-button');

// // ボタンをクリックすると、イベントリスナーが実行される
// button.addEventListener('click', () => {
//   alert('押された！');
// });

// const link = document.getElementById('my-link');

// link.addEventListener('click', (e) => {
//   e.preventDefault();
// });

// const parent = document.getElementById("parent")
// const child = document.getElementById("child")

// parent.addEventListener("click", () => {
//     console.log("Parent Event");
// });

// child.addEventListener("click", () => {
//     console.log("child Event");
// });

// const button = document.getElementById("my-button");
// const box = document.getElementById("box");

// button.addEventListener("click", () => {
// box.innerHTML += "どん<br>" ;
// });

// const input = document.getElementById('input-word');
// const form = document.getElementById('my-form');

// // form.addEventListener('submit', (e) => {
// // e.preventDefault();
// //   console.log('value: ', input.value);
// });

const button = document.getElementById("button-greeting");
const buttonCheerful = document.getElementById("button-cheerful")
const input = document.getElementById("name");
const box = document.getElementById("box");

button.addEventListener("click", () => {
 
 const name = input.value;
 const hour = new Date().getHours();
 let greeting;

console.log(`現在の時間: ${hour}時`);


if (hour >= 6 && hour < 12) {
    greeting ="おはようございます";
    
} else if (hour >= 12 && hour < 18) {
    greeting = "こんにちわ";
} else {
    greeting = "こんばんわ";
}

box.textContent = `${greeting}、${name}さん`;
});

buttonCheerful.addEventListener("click", () => {
    const name = input.value;
    const hour = new Date().getHours();
    let greeting;
    
    console.log(`現在の時間は、${hour}時です`);
    if (hour >=6 && hour <12 ) { 
        greeting = "morning！！";
    } else if (hour >= 12 && hour <18) {
        greeting = "hello！！";
    }else{
        greeting = "night！！";
    }
    
box.textContent = `${greeting}、${name}さん`
})