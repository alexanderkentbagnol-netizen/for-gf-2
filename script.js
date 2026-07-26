// ===============================
// PASSWORD
// ===============================

const PASSWORD = "053125";

function checkPassword() {

    const input = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (input === PASSWORD) {

        changePage("loginPage", "welcomePage");

    } else {

        error.innerHTML = "❌ Wrong password. Try again, pretty. 💜";

    }

}

// ===============================
// CHANGE PAGE
// ===============================

function changePage(from, to) {

    document.getElementById(from).classList.remove("active");
    document.getElementById(to).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function nextSection(page) {

    const current = document.querySelector(".page.active");

    current.classList.remove("active");

    document.getElementById(page).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// ===============================
// FLOATING HEARTS
// ===============================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💜";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-40px";

    heart.style.fontSize =
        (18 + Math.random() * 20) + "px";

    heart.style.opacity = Math.random();

    heart.style.pointerEvents = "none";

    heart.style.transition = "transform 7s linear, opacity 7s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform =
            `translateY(-120vh) rotate(${Math.random()*360}deg)`;

        heart.style.opacity = "0";

    }, 50);

    setTimeout(() => {

        heart.remove();

    }, 7000);

}

// Create hearts continuously

setInterval(createHeart, 700);

// ===============================
// HEART EXPLOSION
// ===============================

function showHearts() {

    for(let i = 0; i < 80; i++){

        setTimeout(createHeart, i * 40);

    }

    setTimeout(() => {

        alert(
`💜

Bella,

Thank you for every smile.

Thank you for every memory.

Thank you for always being you.

I hope this little website reminds you
how much I love you.

Forever yours.

❤️`
        );

    }, 2500);

}

// ===============================
// ENTER KEY SUPPORT
// ===============================

document
.getElementById("password")
.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        checkPassword();

    }

});

// ===============================
// FADE IN
// ===============================

window.onload = () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity 1.5s";

        document.body.style.opacity = "1";

    }, 100);

};
