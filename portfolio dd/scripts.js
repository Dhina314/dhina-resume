document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Form validation and submission handling
    const form = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Email validation regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Check if fields are filled
        if (name === "" || email === "" || message === "") {
            formStatus.textContent = "❌ Please fill out all fields.";
            formStatus.style.color = "red";
            return;
        }

        // Validate email format
        if (!emailPattern.test(email)) {
            formStatus.textContent = "❌ Please enter a valid email address.";
            formStatus.style.color = "red";
            return;
        }

        // Simulate form submission success
        formStatus.textContent = "✅ Thank you! Your message has been sent.";
        formStatus.style.color = "green";
        form.reset(); // Clear form fields after submission
    });
});
