const introResumeBtn = document.querySelector("#intro-resume-btn");
const pdfUrl = "https://drive.google.com/file/d/1q59QdqEgS8nzf2KUEW5HRiooZbjfKNgC/view?usp=sharing";

const aboutBtn = document.querySelector("#aboutBtn");
const projectsBtn = document.querySelector("#projectsBtn");
const contactBtn = document.querySelector("#contactBtn");

introResumeBtn.addEventListener("click", () => {
    introResumeBtn.href = pdfUrl;
    introResumeBtn.target = '_blank';
});

document.addEventListener("DOMContentLoaded", () => {
    projectsBtn.style.color = "#827E7E";
    contactBtn.style.color = "#827E7E";
});