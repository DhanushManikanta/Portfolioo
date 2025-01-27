document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});
const navLinks = document.getElementById('nav-links');
const anchorTags = navLinks.getElementsByTagName('a');

for (let i = 0; i < anchorTags.length; i++) {
    anchorTags[i].addEventListener('click', function() {
        navLinks.classList.remove('active'); 
    });
}
  function sendEmail() {
    const name = document.getElementById('formName').value;
    const email = document.getElementById('formEmail').value;
    const message = document.getElementById('formMessage').value;

    const subject = encodeURIComponent("Contact Form Submission from " + name);
    const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);

    window.location.href = `mailto:dhanushmanikanta3018@gmail.com?subject=${subject}&body=${body}`;
    return false; 
    }