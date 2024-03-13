const introResumeBtn = document.querySelector("#intro-resume-btn");
const pdfUrl = "https://drive.google.com/file/d/1ET0tNWFwdehFGPtzdFRU2gh4g8lmJCIg/view?usp=sharing";

const aboutBtn = document.querySelector("#aboutBtn1");
const projectsBtn = document.querySelector("#projectsBtn1");
const contactBtn = document.querySelector("#contactBtn1");

const navBar = document.querySelector("#navbar");
const projectsSection = document.querySelector("#projects");
const offset = projectsSection.offsetTop - navBar.offsetHeight;

const navLinks = document.querySelectorAll(".navLink");

const burgerMenu = document.getElementById('burgerMenu');
const mobileLinks = document.getElementById('mobileLinks');
const closeBtn = document.getElementById('closeBtn');


// tidy up everything inside here - todo


introResumeBtn.addEventListener("click", () => {
    introResumeBtn.href = pdfUrl;
    introResumeBtn.target = '_blank';
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#aboutBtn").style.color = "#1E1E1E";

    window.scrollTo({
        top: 0
    });
});

document.addEventListener('DOMContentLoaded', function () {
    
    burgerMenu.addEventListener('click', function () {
        mobileLinks.classList.add('show');
    });

    closeBtn.addEventListener('click', function () {
        mobileLinks.classList.remove('show');
    });

    aboutBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        scrollToTarget('about');
        // Close the sidebar
        mobileLinks.classList.remove('show');
    });

    projectsBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        scrollToTarget('projects');
        // Close the sidebar
        mobileLinks.classList.remove('show');
    });
});

function scrollToTarget(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      let scrollToPosition = targetElement.offsetTop - navBar.offsetHeight;
      window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
    }
}

window.addEventListener("scroll", () => {
    if (window.scrollY > offset) {
        navBar.style.backgroundColor = "#FFFFFF"; // Change to your desired background color
    } 
    else {
        navBar.style.backgroundColor = "#F2F7F9";
    }
});