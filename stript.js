// Scroll reveal with a safe fallback for older browsers
const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((el) => revealObserver.observe(el));
} else {
    revealElements.forEach((el) => el.classList.add('visible'));
}

// Subtle sticky header state
const header = document.querySelector('header');
if (header) {
    const updateHeaderState = () => {
        if (window.scrollY > 8) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
}

// Image fallback in case any asset fails to load
const imageFallback = (label) => {
    const safeLabel = label || 'Image unavailable';
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="500" viewBox="0 0 900 500">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
<stop offset="0%" stop-color="#0f1f2f"/><stop offset="100%" stop-color="#092a24"/>
</linearGradient></defs><rect width="900" height="500" fill="url(#g)"/>
<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
fill="#d7f6ee" font-family="Arial, sans-serif" font-size="34">${safeLabel}</text></svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', () => {
        if (img.dataset.fallbackApplied === '1') return;
        img.dataset.fallbackApplied = '1';
        img.src = imageFallback(img.alt);
    });
});
