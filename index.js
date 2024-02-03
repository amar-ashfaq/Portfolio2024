const introResumeBtn = document.querySelector("#intro-resume-btn");
const pdfUrl = "https://drive.google.com/file/d/1q59QdqEgS8nzf2KUEW5HRiooZbjfKNgC/view?usp=sharing";

introResumeBtn.addEventListener("click", () => {
    introResumeBtn.href = pdfUrl;
    introResumeBtn.target = '_blank';
});