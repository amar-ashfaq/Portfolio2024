const introResumeBtn = document.querySelector("#intro-resume-btn");
const pdfUrl = "https://drive.google.com/file/d/1ET0tNWFwdehFGPtzdFRU2gh4g8lmJCIg/view?usp=sharing";

const aboutBtn = document.querySelector("#aboutBtn");
const projectsBtn = document.querySelector("#projectsBtn");
const contactBtn = document.querySelector("#contactBtn");

const navBar = document.querySelector("#navbar");
const projectsSection = document.querySelector("#projects");
const offset = projectsSection.offsetTop - navBar.offsetHeight;

const navLinks = document.querySelectorAll(".navLink");

introResumeBtn.addEventListener("click", () => {
    introResumeBtn.href = pdfUrl;
    introResumeBtn.target = '_blank';
});

document.addEventListener("DOMContentLoaded", () => {
    aboutBtn.style.color = "#1E1E1E";

    window.scrollTo({
        top: 0
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > offset) {
        navBar.style.backgroundColor = "#FFFFFF"; // Change to your desired background color
    } 
    else {
        navBar.style.backgroundColor = "#F2F7F9";
    }
});

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

      if (targetElement) {

        let scrollToPosition = targetElement.offsetTop - navBar.offsetHeight;

        if (targetId === "contact") {
            console.log("contact has been clicked...")
          // If the link is for "Contact", navigate to the new page
          //window.location.href = this.getAttribute("href");       
        } 
        else {
            // For other links, scroll to the target element
            window.scrollTo({
                top: scrollToPosition,
                behavior: "smooth"
            });

            ResetFontColoursOfNavLinks()
            navLink.style.color = "#1E1E1E"
        }
      }
    });
});

function ResetFontColoursOfNavLinks() {
    // Reset the font color for all links
    navLinks.forEach(function(navLink) {
        navLink.style.color = "#827E7E";
    });
}