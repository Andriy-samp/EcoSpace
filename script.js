const glow = document.querySelector('.cursor-glow');

if (glow) {
    window.addEventListener('mousemove', (e) => {
        glow.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    });
}
