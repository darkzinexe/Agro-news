document.addEventListener("DOMContentLoaded", function () {
  const dropbtn = document.querySelector(".menu");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropbtn.addEventListener("click", function () {
    dropdownContent.classList.toggle("show");
  });

  window.addEventListener("click", function (event) {
    if (
      !event.target.matches(".menu") &&
      !event.target.matches(".botao-menu")
    ) {
      if (dropdownContent.classList.contains("show")) {
        dropdownContent.classList.remove("show");
      }
    }
  });
});

const ObserveOutrasNoticias = new IntersectionObserver( (entries) => {
  entries.forEach( (entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show-outras-noticias')
    } else{
      entry.target.classList.remove('show-outras-noticias')
    }
  })
} );

const elementos = document.querySelectorAll(".animacao-outras-noticias");

elementos.forEach( (elemento) => ObserveOutrasNoticias.observe (elemento) )