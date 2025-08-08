document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('responseMessage').innerText = "Thanks for your message!";
  this.reset();
});

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

const scrollTopBtn = document.getElementById('scrollTopBtn');
window.onscroll = function () {
  scrollTopBtn.style.display = (document.documentElement.scrollTop > 100) ? 'block' : 'none';
};

scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


document.getElementById('toggleDarkMode').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
