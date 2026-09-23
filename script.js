// Toggle menu mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Efek ketik di terminal hero
const typedLine = document.getElementById('typedLine');
const messages = ['open to work', 'ngoding sambil ngopi', 'belajar tiap hari'];
let msgIndex = 0, charIndex = 0, deleting = false;

function typeLoop() {
  const current = messages[msgIndex];
  typedLine.textContent = deleting
    ? current.substring(0, charIndex--)
    : current.substring(0, charIndex++);

  let delay = deleting ? 40 : 80;

  if (!deleting && charIndex === current.length + 1) {
    delay = 1400;
    deleting = true;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    msgIndex = (msgIndex + 1) % messages.length;
    delay = 300;
  }
  setTimeout(typeLoop, delay);
}

typeLoop();
