document.querySelectorAll('.education-container').forEach(container => {
    container.addEventListener('click', () => {
        const url = container.getAttribute('data-url');
        window.open(url, '_blank');
    });
});