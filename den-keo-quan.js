const lantern = document.querySelector(".lantern");

// Rê chuột vào đèn thì dừng xoay
lantern.addEventListener("mouseenter", function() {
    lantern.style.animationPlayState = "paused";
});

// Đưa chuột ra khỏi đèn thì tiếp tục xoay
lantern.addEventListener("mouseleave", function() {
    lantern.style.animationPlayState = "running";
});
