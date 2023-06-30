// Smooth scroll to target element
function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
      const targetOffset = targetElement.offsetTop - (window.innerHeight * 0.1); // Scroll 10% up from the target element
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      });
    }
  }
  
  // Event listener for navbar and footer links
  document.addEventListener('DOMContentLoaded', () => {
    const navbarLinks = document.querySelectorAll('a');
  
    // Combine navbar and footer links into a single node list
    const allLinks = [...navbarLinks];
  
    allLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        if (target && target.startsWith("#")) { // Check if the target is an anchor link
          smoothScroll(target);
        } else {
          window.location.href = target; // Redirect to the target page
        }
      });
    });
  });
  
  // Check if the page has an anchor link in the URL
  document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;
    if (hash) {
      smoothScroll(hash);
    }
  });