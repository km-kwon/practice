<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=250&color=80ea6e&fontColor=363636&text=%20CSS%2C%20JS%20%EC%98%88%EC%A0%9C%20%EC%97%B0%EC%8A%B5" alt="header"/>
</div>

<div align="center">
    CSS, JS 예제 연습
</div>
<br>

## 🛠️ 기술 스택 🛠️
<div align="center">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">  
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=black">  
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=black">  
</div>

## 🧰 개발 도구 🧰

<div align="center">
    <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
    <img src="https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white">
    <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
</div>



## 구현 사항

- 랜덤 비율만큼의 그라데이션 효과 적용
- JS의 랜덤 숫자를 맞추는 게임 구현
- Dday 달력 구현

## 랜덤 비율만큼의 그라데이션 효과 적용
 - 초기 화면
<p align="center">
  <img src="https://github.com/km-kwon/practice/assets/70142699/a444bb14-eddf-4313-862c-45ebecfe7971">
</p>

 - 버튼 클릭시 변환 화면

<p align="center">
  <img src="https://github.com/km-kwon/practice/assets/70142699/c4de859f-7165-471f-8012-1fe5773d68e5">
  <img src="https://github.com/km-kwon/practice/assets/70142699/bccfa475-7b80-4a3b-8583-711e98836119">
</p>


### 해당 관련 코드

```javascript
const colors = [
    "#ef5777",    "#575fcf",    "#4bcffa",    "#34e7e4",
    "#0be881",    "#f53b57",    "#3c40c6",    "#0fbcf9",
    "#00d8d6",    "#05c46b",    "#ffc048",    "#ffdd59",
    "#ff5e57",    "#d2dae2",    "#485460",    "#ffa801",
    "#ffd32a",    "#ff3f34"
  ];
  const body = document.querySelector("body");
  const changeBtn = document.querySelector("#changing");

  function changeColor(){
      const color1 = colors[Math.floor(Math.random() * colors.length)];
      const color2 = colors[Math.floor(Math.random() * colors.length)];
      body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
  }

  changeBtn.addEventListener("click", changeColor);
```
결과 : 지정 설정된 main color를 기준으로 그라데이션 효과 적용
 - JS를 활용한 HTML 내 content 접근 및 변경

## JS의 랜덤 숫자를 맞추는 게임 구현

- JS내 Math 관련 기능을 활용하여 랜덤 설정된 숫자 맞추기 게임 구현


- 초기 화면
<p align="center">
  <img src="https://github.com/km-kwon/practice/assets/70142699/3f2a2fda-b41b-4f9b-8be0-f1d0d44f8e3c">
</p>

- 범위 설정 및 오답 시

<p align="center">
  <img src="https://github.com/km-kwon/practice/assets/70142699/88e178d1-0d41-424b-aed3-882927db2384">
</p>

- 범위 설정 및 정답 시
<p align="center">
  <img src="https://github.com/km-kwon/practice/assets/70142699/76fd8ff3-e6f6-499e-9f1e-e57bfd0087b6">
</p>

- 범위 설정 및 오류 발생시 핸드링
<p align="center">
  <img src="https://github.com/km-kwon/practice/assets/70142699/93b747ef-1b22-4eb4-8668-926e3115e039">
</p>


### 해당 관련 코드

```javascript
const randomInput = document.querySelector("#random");
const randomNum = randomInput.querySelector("#randomNum");
const yourNum = randomInput.querySelector("#yourNum");
const result = document.querySelector(".result");
const h4 = result.querySelector("h4");
const h2 = result.querySelector("h2");

function startGame(event){
    event.preventDefault();
    if((parseInt(yourNum.value) < 0) || (parseInt(randomNum.value) < 0)){
        printWrongNum();
    }
    else{
        const resultNum = Math.ceil((Math.random()*parseInt(randomNum.value)));
        if(parseInt(yourNum.value) > parseInt(randomNum.value)){
            printWrongNum();
        }else{
            printresult(resultNum);
        }
    }
}
function printWrongNum(){
    h4.innerText = "You enter the wrong number!"
    h2.innerText = "";
    result.classList.remove("hidden");
    result.classList.add("text-focus-in");
}
function printresult(resultNum){
    h4.innerText = 
    `You chose: ${yourNum.value}, the machine chose: ${resultNum}`;
    if(yourNum.value == resultNum){
        h2.innerText = "You Won!";
    }else{
        h2.innerText = "You lost!"
    }
    result.classList.remove("hidden");
    result.classList.add("text-focus-in");
}
randomInput.addEventListener("submit", startGame);

function earase(){
    this.placeholder = "";
}
function print(string){
    this.placeholder = string;
}
```
- 결과: 사용자의 입력을 기다리는 View, 해당 입력을 가지고 있는 Model, 사용자 입력 처리하는 Controller 구조를 간략하게 구현하였습니다.
- 또한 사용자의 예외적인 입력사항에 대한 적절한 핸들링을 수행하였으며 작동시 안전성, 보안성을 높였습니다.

## Dday 달력 구현

<p align="center">
  <img src="https://github.com/km-kwon/practice/assets/70142699/8f86be11-c649-41dd-adde-4535665c6b5d">
</p>

### 해당 관련 코드

```javascript
const Dday = document.querySelector("#Dday");

function setclock(){
    const time = new Date();
    const christmas = new Date(`Sun Dec 25 ${time.getFullYear()} 00:00:00`);
    const dday = christmas - time;
    const ddayMonth = Math.floor(dday/(1000*60*60*24));
    const ddayHour = String(Math.floor((dday / (1000*60*60)) % 24)).padStart("2",0);
    const ddayMinutes = String(Math.floor((dday / (1000*60)) % 60)).padStart("2",0);
    const ddaySeconds = String(Math.floor((dday / 1000) % 60)).padStart("2",0);
    Dday.innerText = `${ddayMonth}D / ${ddayHour}H / ${ddayMinutes}M / ${ddaySeconds}S`;
}
setclock();
setInterval(setclock, 1000);
```

- 지정 설정된 날짜로부터 남은 일을 계산 및 실시간 출력
- js를 활용한 html 요소 변경 적용 

