const introResumeBtn = document.querySelector("#intro-resume-btn");
const pdfUrl = "https://drive.google.com/file/d/1q59QdqEgS8nzf2KUEW5HRiooZbjfKNgC/view?usp=sharing";

const aboutBtn = document.querySelector("#aboutBtn");
const projectsBtn = document.querySelector("#projectsBtn");
const contactBtn = document.querySelector("#contactBtn");

const navBar = document.querySelector("#navbar");
const projectsSection = document.querySelector("#projects");
const offset = projectsSection.offsetTop - navBar.offsetHeight;

introResumeBtn.addEventListener("click", () => {
    introResumeBtn.href = pdfUrl;
    introResumeBtn.target = '_blank';
});

document.addEventListener("DOMContentLoaded", () => {
    projectsBtn.style.color = "#827E7E";
    contactBtn.style.color = "#827E7E";

    AlternateNavBarBackgroundColour();
});

function AlternateNavBarBackgroundColour(){
    window.addEventListener("scroll", () => {
        if (window.scrollY > offset) {
            navBar.style.backgroundColor = "#FFFFFF"; // Change to your desired background color
        } 
        else {
            navBar.style.backgroundColor = "#F2F7F9";
        }
    });
}