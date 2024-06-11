function formatHTML(language = "korean") {
  let htmlData = {
    titleOne:"조자연",
    titleTwo: "jojayeon", 
    h1 : "난",
    p : "앤디 형임",
  }

  let decision = () => {
    if (language === "korean") {
      return htmlData.titleOne
    }
    if (language === "english") {
      return htmlData.titleTwo
    }
  }

  let html = `
<html>
  <head>
    <tltie>${decision()}</tltie>
  </head>
  <body>
    <h1>${htmlData.h1}<h1>
    <p>${htmlData.p}<p>
  </body> 
</html>  
  `;
  return html;
}

console.log(formatHTML("korean"));
console.log(formatHTML("english"));

