const names = [
  "구하림",
  "김보미",
  "김수현",
  "김정수",
  "문혜림",
  "배성빈",
  "백지원",
  "송이현",
  "신지윤",
  "유으뜸",
  "유호영",
  "이연승",
  "이재영",
  "이종수",
  "임유진",
  "정호연",
  "조우식",
  "조자연",
  "최유진",
  "황재민"
];

const app = () => {
  let a = [];
  names.forEach((element) => {
    if(element === "조자연"){
      a.push(tagComponent("h2",element))
    }else {
      a.push(tagComponent("p",element))
    }
  });
  return `
  ${a.join("")}
  `;
};