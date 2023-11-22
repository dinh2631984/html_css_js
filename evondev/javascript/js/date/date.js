let h1Content = document.getElementById("heading");
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  h1Content.innerHTML = "OK Man";
  h1Content.classList.add("text-red");
});

h1Content.addEventListener("mouseover", () => {
  h1Content.innerHTML = "You are right";
  h1Content.classList.add("text-yellow");
});

h1Content.addEventListener("mouseout", () => {
  h1Content.innerHTML = "You are right";
  h1Content.classList.remove("text-yellow");
});

// 1. Nhập vào năm sinh và in ra số tuổi
// let bornYear = prompt("Bạn hãy nhập vào năm sinh?", "1984");
// // console.log(typeof Number(bornYear));
// if (typeof Number(bornYear) === "number" && Number(bornYear) > 1900) {
//   let age = (new Date()).getFullYear() - bornYear;
//   console.log(`Năm nay bạn ${age} tuổi`);
// } else {
//   console.log("Bạn chưa nhập đúng định dạng năm sinh");
// }

function countDown(x = 1) {
  console.log(new Date());
  let time = x * 60;

  setTimeout(() => {
    clearInterval(timer);
    console.log(new Date());
  }, time * 1000);

  let timer = setInterval(() => {
    console.log(time);
    time--;
  }, 1000);


  return;
}

countDown(1);
