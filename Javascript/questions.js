document.addEventListener("DOMContentLoaded", function () {

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function (item) {

        const question = item.querySelector(".faq-question");

        question.addEventListener("click", function () {

            const isActive = item.classList.contains("active");

            faqItems.forEach(function (faq) {
                faq.classList.remove("active");
                faq.querySelector(".faq-question span").textContent = "+";
            });

            if (!isActive) {
                item.classList.add("active");
                question.querySelector("span").textContent = "−";
            }

        });

    });

});