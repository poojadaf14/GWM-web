
document.addEventListener("DOMContentLoaded", function () {
  
    const aboutLink = document.querySelector('a[href="#about"]');
    const contactLink = document.querySelector('a[href="#contact"]');
    const footerLink = document.querySelector('footer a');
  
   
    const aboutSection = document.querySelector('#about');
    const contactSection = document.querySelector('#contact');
    const footerSection = document.querySelector('footer');
  
   
    aboutLink.addEventListener('click', function (event) {
      event.preventDefault();
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
  
    contactLink.addEventListener('click', function (event) {
      event.preventDefault();
      footerSection.scrollIntoView({ behavior: 'smooth' });
    });
  
    footerLink.addEventListener('click', function (event) {
      event.preventDefault();
      footerSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  