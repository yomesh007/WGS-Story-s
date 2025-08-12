document.getElementById("emailButton").addEventListener("click", function () {
    // Replace "your-email@example.com" with your actual email address
    const email = "your-email@example.com";
    const subject = "Content Submission";
    const body = "Hi, I want to share some content with you.";
    
    // Open Gmail with pre-filled email, subject, and body
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
function copyEmail() {
    const emailText = document.getElementById('email').innerText; // Get email text
    navigator.clipboard.writeText(emailText) // Use Clipboard API to copy
        .then(() => {
            alert('Email copied: ' + emailText); // Success alert
        })
        .catch(err => {
            console.error('Failed to copy email: ', err); // Error handling
        });
}

// go back

 function goBack() {
            window.history.back();
        }