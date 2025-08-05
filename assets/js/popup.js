 document.getElementById('openDatenschutz').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('modalDatenschutz').style.display = 'block';
  });

  document.getElementById('openNutzungsbedingungen').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('modalNutzungsbedingungen').style.display = 'block';
  });

  document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      document.getElementById(modalId).style.display = 'none';
    });
  });


  window.onclick = function(event) {
    if(event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  }