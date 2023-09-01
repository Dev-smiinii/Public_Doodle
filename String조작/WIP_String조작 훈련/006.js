const fs = require("fs");
const path = require("path");
const FILE_NAME = "var";
const filepath = path.join(__dirname, FILE_NAME);
// console.log(file); 확인용

/* fs.readFile()을 통해 파일명 'var'의 파일 내용 'root' 읽기
fs.readFile(filepath, (err, data) => {
  if (err) throw err;
  const result = data.toString();
  console.log(result);
}); */

/* fs.readFile()을 통해 파일명 'var'의 파일 내용 '4가지 속성' 읽기 */
fs.readFile(filepath, (err, data) => {
  if (err) throw err;
  const result = data
    .toString()
    .split("\n")
    .filter((v) => v)
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      const [key, value] = v;
      acc[key] = value;
      return acc;
    }, {});
  console.log(result);
  console.log(result.host);
  console.log(result.port);
  console.log(result.user);
  console.log(result.password);
});

/* 'String조작'의 단계별 설명과 훈련 예시
   1. 파일명 'var'의 파일 내용 '4가지 속성'의 텍스트 형태(.toString)로 확인용
      const result = data.toString();
   2. 4가지의 변수로 관리하기 위해 String 값을 length가 4인 배열(.split)로 만들기용
      const result = data.toString().split("\n");
   3. length가 6인 배열(= 공란을 포함한 내용)을 4인 배열(= 공란을 제외한 내용)로 변환해서 걸러주기(.filter)용
      const result = data
        .toString()
        .split("\n")
        .filter((v) => v.length !== 0); 또는
        .filter((v) => v);
   4. length가 4인 배열의 표시 형식을
      [ 'host=127.0.0.1', 'port=3306', 'user=root', 'password=root' ] 에서
      [['host, 127.0.0.1'], ['port, 3306'], ['user, root'], ['password, root']] 로
      바꿔서(.map) 출력해주기용
      const result = data
        .toString()
        .split("\n")
        .filter((v) => v)
        .map(v => {
         const [key, value] = v.split("=")
         return [key, value]
        });
        또는
        .map(v => {
         return [key, value]
        });
        또는
        .map(v => v.split("="));
   5. length가 4인 배열의 표시 형식을
      [['host, 127.0.0.1'], ['port, 3306'], ['user, root'], ['password, root']] 에서
      {'host:127.0.0.1', 'port:3306', 'user:root', 'password:root'} 로
      각각 객체의 키값과 값으로 꺼내서 쓸수 있도록
      데이터 타입을 바꿔서(.reduce) 출력해주기용
      const result = data
        .toString()
        .split("\n")
        .filter((v) => v)
        .map((v) => v.split("="))
        .reduce((acc, v) => {
          console.log(v);
          console.log(v[0], v[1]);
          acc[v[0]] = v[1];
          return acc;
        }, {});
        또는 구조분해할당문을 사용해서
        .reduce((acc, v) => {
          const [key, value] = v
          acc[key] = value;
          return acc;
        }, {}); */
/* 배열 메서드 중 .reduce((acc, v) => {}, {})에 대한 설명
   - 1. 인자값 두 가지
        - 1. 콜백 함수
        - 2. 초기값
   - 2. 초기값의 인자값 두 가지
        - 1. acc 변수가 들어감.
        - 2. 매 요소가 돌 때마다 v 변수에 내용이 채워짐
   - 3. return은 acc 변수를 리턴값으로 지정함.
   - 4. acc의 의미: 이전 요소가 돈 이후의 값. 즉, '이전 값'에 해당함.
   - 5. v의 의미: '배열의 첫 번째 인자'이자, 매 요소가 돌 때마다의 '배열의 해당 번째 인자'를 지칭함. */
