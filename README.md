<p align="middle" >
  <img width="200px;" src="https://user-images.githubusercontent.com/50367798/106415730-2645a280-6493-11eb-876c-ef7172652261.png"/>
</p>
<h2 align="middle">level1 - 자동차 경주 게임</h2>
<p align="middle">자바스크립트로 구현 하는 자동차 경주 게임</p>
<p align="middle">
  <img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="template version"/>
  <img src="https://img.shields.io/badge/language-html-red.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-css-blue.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-js-yellow.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square"/>
</p>

## 데모페이지

[자동차 경주 게임 데모페이지🏎](https://cks3066.github.io/javascript-racingcar/)
<br>


## 🎯 기능 요구사항

- [x] 주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다.
- [x] 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- [x] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- [x] 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- [x] 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- [x] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- [x] 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- [x] 사용자가 잘못된 입력 값을 작성한 경우 alert을 이용해 메시지를 보여주고, 다시 입력할 수 있게 한다.
- [x] 자동차 경주 게임의 턴이 진행 될 때마다 1초의 텀(progressive 재생)을 두고 진행한다.
  - [x] 1초의 텀동안 로딩 애니메이션을 보여준다.
        애니메이션 구현을 위해 setInterval, setTimeout, requestAnimationFrame 을 활용한다.
- [x] 정상적으로 게임의 턴이 다 동작된 후에는 결과를 보여주고, 2초 후에 축하의 alert 메세지를 띄운다.

## 테스트 요구사항

- [x] 위 기능들이 정상적으로 동작하는지 Cypress를 이용해 E2E 테스트를 작성한다.

## ✅ 프로그래밍 요구사항

- 코드 스타일 가이드에 따라 컨벤션을 준수하며 개발한다.
- 함수(또는 메서드)가 한 가지 일만 하도록 만든다.
- 들여쓰기 depth는 2단계까지만 허용한다.
- 가능하다면 1단계만으로도 가능할 수 있도록 고민해봅니다.
- 함수(또는 메서드)를 최대한 분리해본다면 depth를 줄이는 데에 도움이 될 수 있습니다.
- else 예약어를 쓰지 않는다.
- 변수 선언시 var 를 사용하지 않는다. const 와 let 을 사용한다.
- 가능하다면 const만을 사용하도록 한다.
- 동등 연산자는 '===' 로만 사용한다.
- 전역변수를 만들지 않는다.
- 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.

<br>

