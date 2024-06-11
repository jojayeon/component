function formatHTML() {
  let htmlData = {
    title:"조자연",
    h1 : "난",
    p : "앤디 형임",
  }
  let html = `
  <html>
  <head>
    <tltie>${htmlData.title}</tltie>
  </head>
    <body>
      <h1>${htmlData.h1}<h1>
      <p>${htmlData.p}<p>
    </body>
  </html>  
  `;
  return html;
}

console.log(formatHTML());