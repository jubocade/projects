"use srict";

function mobileMenu() {
     const lines = document.querySelector(".header__hamburger__lines");
    const mobileLinks = document.querySelector(".header__hamburger__mobileLinks");

    lines.addEventListener("click", () => {
    mobileLinks.classList.toggle("open");
    });

    const mobileMenuButtons = document.querySelectorAll(".header__hamburger__mobileLinks li");
    Array.from(mobileMenuButtons).map((el) => {
    el.addEventListener("click", () => {
        mobileLinks.classList.toggle("open");
    });
});
}

mobileMenu();

function scroll() {
    window.addEventListener("scroll", () => { 
        const scrollNumber = window.scrollY;
        if(scrollNumber >= 516) {
            document.querySelector(".info__about__personal").classList.add("fade-left");
            document.querySelector(".info__about__skills").classList.add("fade-right");
        }
    });
}

scroll();

function filter() {
    let images = document.querySelectorAll(".portfolio__projects__list__all div img");
    const jsProjects = document.querySelectorAll(".js");
    const reactProjects = document.querySelectorAll(".react");
    const reactButton =  document.querySelector(".portfolio__projects__list__buttons--react");
    const jsButton = document.querySelector(".portfolio__projects__list__buttons--js");
    const allButton = document.querySelector(".portfolio__projects__list__buttons--all");
    allButton.style.backgroundColor="#E31B6D";
    allButton.addEventListener("click", () => {
        allButton.style.backgroundColor=" #E31B6D";
        reactButton.style.background="none";
        jsButton.style.background="none";
        Array.from(jsProjects).map(element => {
            element.style.display="inline-block";
        });
        Array.from(reactProjects).map(element => {
            element.style.display="inline-block";
        });
    })

    reactButton.addEventListener("click", () => {
        reactButton.style.backgroundColor=" #E31B6D";
        allButton.style.background="none";
        jsButton.style.background="none";
        Array.from(jsProjects).map(element => {
            element.style.display="none";
            Array.from(reactProjects).map(element => {
                element.style.display="inline-block";
            });
        });
    });

    jsButton.addEventListener("click", () => {
        jsButton.style.backgroundColor=" #E31B6D";
        reactButton.style.background="none";
        allButton.style.background="none";
        Array.from(reactProjects).map(element => {
            element.style.display="none";
            Array.from(jsProjects).map(element => {
                element.style.display="inline-block";
            });
        });
    });
    
}

filter();

function onHover() {
    let projectConts = document.querySelectorAll(".portfolio__projects__list__all__project");
    let projectsArray = Array.from(projectConts);
    let buttons = document.querySelectorAll(".portfolio__projects__list__all__project div button");
    let buttonsArray = Array.from(buttons);
    projectsArray.map(project => {
      project.addEventListener("mouseover", () => {
          document.querySelectorAll(".portfolio__projects__list__all__project div")[projectsArray.indexOf(project)].style.display="flex";

      });
  
      project.addEventListener("mouseout", () => {
          document.querySelectorAll(".portfolio__projects__list__all__project div")[projectsArray.indexOf(project)].style.display="none";    
      });    
    });
  }
  
  onHover();