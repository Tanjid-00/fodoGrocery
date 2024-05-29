const loadHtml = (elementId, filePath) => {
  fetch(filePath)
    .then((res) => {
      if (!res.ok) {
        throw Error;
      } else {
        return res.text();
      }
    })
    .then((data) => {
      const idFromHtml = document.getElementById(elementId);
      idFromHtml.innerHTML = data;
      // document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => {
      console.error("error loading", error);
    });
};

// load nav and footer
document.addEventListener("DOMContentLoaded", () => {
  // loadHtml("testMsg", "../layouts/navComp/test.html");
  // loadHtml("navMenuBar", "../layouts/navComp/navbar.html");
  // loadHtml("footerPart", "../layouts/footerComp/footer.html");
  // loadHtml("goOnTopBtn", "../layouts/goOntop/goTop.html");

  loadHtml("navMenuBar", "/src/layouts/navComp/navbar.html");
  loadHtml("footerPart", "/src/layouts/footerComp/footer.html");
  loadHtml("goOnTopBtn", "/src/layouts/goOntop/goTop.html");
});
