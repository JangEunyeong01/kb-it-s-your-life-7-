/**
 * 1. 현재 작업 디렉토리 파일 목록 출력 (동기/비동기)
 * 2. 파일 내용 읽기 및 출력 (동기/비동기)
 */

const fs = require('fs'); // 공통 사용 모듈

// --- 현재 작업 디렉토리의 파일 목록을 출력하기! ---

// 1-1. 동기 함수 호출 (list-1.js 내용)
console.log("[문제 1-1] 동기 목록 출력:");
try {
    const files = fs.readdirSync('./');
    console.log(files);
} catch (err) {
    console.error(err);
}

// 1-2. 비동기 함수 호출 (list-2.js 내용)
console.log("\n[문제 1-2] 비동기 목록 출력:");
fs.readdir('./', (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(files);
});


// --- example.txt의 내용을 읽어 화면에 출력하기! ---
// (주의: 실행 경로에 example.txt 파일이 있어야 함.)

// const fs = require('fs'); // 중복 선언 방지를 위해 주석 처리!

// 2-1. 동기 함수로 처리 (read-1.js 내용)
console.log("\n[문제 2-1] 동기 파일 읽기:");
try {
    if (fs.existsSync('./example.txt')) {
        const data = fs.readFileSync('./example.txt', 'utf8');
        console.log(data);
    } else {
        console.log("example.txt 파일이 없습니다.");
    }
} catch (err) {
    console.error(err);
}

// 2-2. 비동기 함수로 처리 (read-2.js 내용)
// console.log("\n[문제 2-2] 비동기 파일 읽기:");
// fs.readFile('./example.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });