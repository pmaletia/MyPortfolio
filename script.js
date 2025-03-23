function toggleDetails(id) {
    const elem = document.getElementById(id);
    elem.style.display = elem.style.display === 'block' ? 'none' : 'block';
  }
  
  // Remove blinking text on keypress
  document.addEventListener('keydown', () => {
    const blinking = document.querySelector('.blinking');
    if (blinking) blinking.style.display = 'none';
  });

  document.addEventListener('keydown', () => {
    const blinking = document.querySelector('.blinking');
    if (blinking) blinking.style.display = 'none';
  
    const hiddenSection = document.getElementById('hiddenSection');
    if (hiddenSection) hiddenSection.style.display = 'block';
  });
  
  