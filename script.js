// Loading Screen
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.display = "none";
    }, 1800);
});


// دسته‌بندی منو
const buttons = document.querySelectorAll(".category button");
const cards = document.querySelectorAll(".card");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        cards.forEach(card => {

            if (filter === "all") {

                card.style.display = "block";

            } else if (card.classList.contains(filter)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// انیمیشن هنگام اسکرول
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition=".6s";

    observer.observe(card);

});


// اسکرول نرم دکمه منو
document.querySelector(".btn").addEventListener("click",(e)=>{

    e.preventDefault();

    document.querySelector("#menu").scrollIntoView({

        behavior:"smooth"

    });

});


// کوچک شدن منو هنگام اسکرول
window.addEventListener("scroll",()=>{

    const nav=document.querySelector("nav");

    if(window.scrollY>80){

        nav.style.padding="12px 8%";
        nav.style.background="rgba(0,0,0,.75)";

    }else{

        nav.style.padding="20px 8%";
        nav.style.background="rgba(0,0,0,.2)";

    }

});


// افکت روی کارت‌ها
cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        card.style.background=
        `radial-gradient(circle at ${x}px ${y}px,#3b302a,#211b18)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="#211b18";

    });

});
