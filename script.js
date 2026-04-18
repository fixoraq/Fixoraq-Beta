document.addEventListener('DOMContentLoaded', () => {
    
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Simple interaction log for the Discord button
    const discordBtns = document.querySelectorAll('.btn-discord, .btn-primary');
    discordBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log("User redirecting to Discord...");
        });
    });
});
