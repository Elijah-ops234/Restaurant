document.addEventListener("DOMContentLoaded", () => {
  // Reservation Form Submit
  const form = document.querySelector(".reservation-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const action = form.getAttribute("action");

    fetch(action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        form.reset();
        alert("Thank you! Your reservation request has been sent.");
      } else {
        alert("There was a problem submitting your reservation. Please try again.");
      }
    }).catch(() => {
      alert("There was a problem submitting your reservation. Please try again.");
    });
  });

  // Sidebar Toggle
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const closeSidebar = document.getElementById('closeSidebar');
  const body = document.body;

  hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
    body.classList.add('no-scroll');
  });

  closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
    body.classList.remove('no-scroll');
  });

  sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  });
});