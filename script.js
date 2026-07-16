// نمایش نرم کارت‌ها هنگام اسکرول
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "0.6s ease";
  observer.observe(card);
});

// دکمه بازگشت به بالا
const btn = document.createElement("button");
btn.innerHTML = "↑";
btn.id = "topBtn";
document.body.appendChild(btn);

btn.style.cssText = `
position:fixed;
bottom:20px;
left:20px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#D4AF37;
color:#111;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 5px 15px rgba(0,0,0,.4);
`;

window.addEventListener("scroll", () => {
  btn.style.display = window.scrollY > 300 ? "block" : "none";
});

btn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

    let value = this.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card=>{

        let text = card.innerText.toLowerCase();

        if(text.includes(value)){
            card.style.display="block";
        }else{
            card.style.display="none";
        }

    });

});
