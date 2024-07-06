// Create the observer callback function
function fadeInOnScroll(entries, observer) {
    entries.forEach(entry => {
      // Add the 'fade-in-visible' class when the element is in the viewport
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      } else {
        // Optional: Remove the class when it's not visible
        entry.target.classList.remove('fade-in-visible');
      }
    });
  }
  
  // Set up the observer with the callback
  const observer = new IntersectionObserver(fadeInOnScroll, {
    threshold: 0.1 // Adjust if needed
  });
  
  // Target the element to observe
  document.querySelectorAll('.cta-content').forEach(el => {
    observer.observe(el);
  });
  