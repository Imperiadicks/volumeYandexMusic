setInterval(() => {
    const element = document.querySelector('[data-test-id="CHANGE_VOLUME_SLIDER"]');
    if (element) {
        element.setAttribute('max', '0.15');
        const value = parseFloat(element.getAttribute('value')) || 0;
        const percentage = (value / 0.15) * 100;
        element.style.setProperty('--seek-before-width', `${percentage}%`);
    }
}, 0);