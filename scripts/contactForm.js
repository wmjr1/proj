const form = document.getElementById('contact-form');
const submitBtn = form.querySelector('button[type="submit"]');


const alertBox = document.getElementById('alert');
const alertMessage = alertBox.querySelector('p'); // for dynamic message text
const closeBtn = alertBox.querySelector('button');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "d3616c5e-24f5-4180-b6de-effda302a494"); // Add your real key here

    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alertMessage.textContent = "Success! Your message has been sent. Expect us in your inbox soon.";
            alertBox.classList.remove('error');
            alertBox.classList.add('show');
            form.reset();
        } else {
            alertMessage.textContent = "Error: " + data.message;
            alertBox.classList.add('error', 'show');
        }
    } catch (error) {
        alertMessage.textContent = "Something went wrong. Please try again.";
        alertBox.classList.add('error', 'show');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// Close button handler
closeBtn.addEventListener('click', () => {
    alertBox.classList.remove('show', 'error');
});
