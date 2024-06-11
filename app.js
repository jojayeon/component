const a = (name, age, job) => {
  return {
    name: name,
    age: age,
    job: job,
  };
};
// console.log(a());
//위는 정적인데
const b = a("조자연",26,"앤디 형"); 
console.log("첫번째 b:",b);
b.address = "대전";//이 부분에서 동적으로 넣는 것도 가능해서 유연하다.
console.log("두번째 b:",b);

