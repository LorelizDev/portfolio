window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
  
    if (window.scrollY > 0) {
      header.classList.add("header-small");
    } else {
      header.classList.remove("header-small");
    }
  });
  