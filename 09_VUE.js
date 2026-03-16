/**
 *  Vue.js를 위한 ES6 기초 문법 실습
 */

// 변수 스코프와 let (PDF 5페이지)
// let은 블록 스코프를 가진다.
/*
let msg = "GLOBAL";
function outer() {
    let msg = "OUTER";
    console.log(msg); // 출력: OUTER
    if (true) {
        let msg = "BLOCK";
        console.log(msg); // 출력: BLOCK
    }
}
outer();
*/


// const와 객체 변경
// const로 선언된 객체 자체는 재할당이 불가능하지만, 내부 속성은 변경 가능하다.
const p1 = { name: 'john', age: 20 };
p1.age = 22; // 가능: 속성 변경
console.log(p1); // { name: 'john', age: 22 }

// p1 = { name: 'lee' }; // 에러: TypeError (상수에 재할당 불가)


// 기본 파라미터와 템플릿 리터럴\
// 매개변수에 기본값을 설정하여 undefined 방지 및 가독성을 높인다.
function addContact(name, mobile, home = "없음", address = "없음", email = "없음") {
    // 백틱(`)을 사용하는 템플릿 리터럴 문법
    console.log(`name=${name}, mobile=${mobile}, home=${home}, address=${address}, email=${email}`);
}
addContact("홍길동", "010-222-3331"); 


// 구조 분해 할당 (Destructuring) 
// 배열이나 객체의 요소를 개별 변수로 빠르게 추출한다.
let arr = [10, 20, 30, 40];
let [a1, a2, a3] = arr;
console.log(a1, a2, a3); // 10 20 30

let p2 = { name: "홍길동", age: 20, gender: "M" };
let { name: n, age: a, gender } = p2; // name을 n으로, age를 a로 별칭 할당
console.log(n, a, gender); // 홍길동 20 M


// 화살표 함수 (Arrow Function)
// function 키워드 대신 => 를 사용하여 함수를 간결하게 정의한다.
const test1 = (a, b) => {
    return a + b;
};
// 처리가 한 줄인 경우 return과 중괄호 생략 가능
const test2 = (a, b) => a + b;


// 새로운 객체 리터럴과 메서드 
// 속성명과 변수명이 같으면 생략 가능하며, function 키워드 없이 메서드 선언이 가능하다.
let name = "아이패드";
let price = 1000000;
let quantity = 2;

let order = {
    name,     // name: name 생략
    price,    // price: price 생략
    quantity,
    // 메서드 선언 (ES6 방식)
    orderDetail() {
        this.amount = this.price * this.quantity;
        console.log(`주문금액 : ${this.amount}`);
    },
    discount(rate) {
        if (rate > 0 && rate < 0.8) {
            this.amount = (1 - rate) * (this.price * this.quantity);
        }
        console.log(`${100 * rate}% 할인된 금액으로 구매합니다.`);
    }
};
order.discount(0.2);
order.orderDetail();


// 리터럴 템플릿 연습 
const d1 = new Date();
let userName = "홍길동";
let r1 = `${userName} 님에게 ${d1.toDateString()}에 연락했다.`;
console.log(r1);

let product = "갤럭시S7";
let productPrice = 199000;
let str = `${product}의 가격은 ${productPrice}원 입니다.`;
console.log(str);


// 모듈 사용
// 주의: 브라우저나 Node.js 환경 설정에 따라 import/export 방식이 다를 수 있다.
/*
// 02-19-module.js (내보내기)
let base = 100;
const add = (x) => base + x;
const multiply = (x) => base * x;
export { add, multiply };

// 실행 파일 (가져오기)
import { add, multiply } from './02-19-module.js';
console.log(add(4)); // 104
*/