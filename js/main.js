document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('bg-zinc-900/95', 'backdrop-blur-md', 'border-b', 'border-white/10', 'py-3', 'shadow-2xl');
            header.classList.remove('bg-transparent', 'py-6');
        } else {
            header.classList.remove('bg-zinc-900/95', 'backdrop-blur-md', 'border-b', 'border-white/10', 'py-3', 'shadow-2xl');
            header.classList.add('bg-transparent', 'py-6');
        }
    });

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && closeBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
        });

        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    }

    // Contact Form Handling (Simulation)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;

            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                const formContent = document.getElementById('form-content');
                const successMessage = document.getElementById('form-success');

                if (formContent && successMessage) {
                    formContent.classList.add('hidden');
                    successMessage.classList.remove('hidden');
                }
            }, 800);
        });
    }

    // Send Another Button
    const sendAnotherBtn = document.getElementById('send-another-btn');
    if (sendAnotherBtn) {
        sendAnotherBtn.addEventListener('click', () => {
            const formContent = document.getElementById('form-content');
            const successMessage = document.getElementById('form-success');
            const contactForm = document.getElementById('contact-form');
            const submitBtn = contactForm.querySelector('button[type="submit"]');

            if (formContent && successMessage) {
                formContent.classList.remove('hidden');
                successMessage.classList.add('hidden');
                contactForm.reset();
                submitBtn.innerText = 'DISPATCH NOW'; // Reset to original text manually or store it
                submitBtn.disabled = false;
            }
        });
    }
});
