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

    // Modal elements
    const modal = document.createElement('div');
    modal.id = 'service-modal';
    modal.className = 'fixed inset-0 z-[100] hidden flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300';
    modal.innerHTML = `
        <div class="bg-zinc-900 border border-white/10 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative">
            <button id="modal-close" class="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
                <i data-lucide="x" class="w-8 h-8"></i>
            </button>
            <div id="modal-content" class="p-12 space-y-8">
                <!-- Content injected here -->
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('modal-close');

    const serviceData = {
        'structural': {
            title: 'Structural Framing',
            description: 'Elite-grade structural frameworks for modern architecture. We use precision-engineered lumber and steel reinforcement to ensure maximum load-bearing capacity and architectural integrity.',
            features: ['Steel Reinforcement', 'Precision Leveling', 'Load Path Engineering', 'Custom Roof Trusses']
        },
        'commercial': {
            title: 'Commercial Roofing',
            description: 'Scalable roofing solutions for industrial and retail assets. Our high-performance membrane systems (TPO, EPDM) provide long-term waterproofing and energy efficiency for large-scale operations.',
            features: ['TPO/EPDM Systems', 'Cool Roof Coatings', 'Preventative Maintenance', '20-Year Warranties']
        },
        'siding': {
            title: 'Modern Siding',
            description: 'Transformative exterior solutions using premium James Hardie, metal panels, and composite materials. We focus on thermal performance and high-end aesthetic appeal.',
            features: ['Fiber Cement', 'Metal Panel Systems', 'Thermal Insulation', 'Custom Trims']
        },
        'gutters': {
            title: 'Gutter Systems',
            description: 'Heavy-duty, seamless water management systems designed for Colorado\'s extreme precipitation. Protect your foundation with custom-formed aluminum and copper solutions.',
            features: ['Seamless Aluminum', 'Copper Accents', 'Over-sized Downspouts', 'Heat Tape Integration']
        },
        'skylights': {
            title: 'Custom Skylights',
            description: 'Architectural daylighting systems that bring the outdoors in. Our Velux-certified installations ensure leak-proof performance and improved energy efficiency.',
            features: ['Energy Star Glass', 'Remote Operation', 'Solar Venting', 'Precision Sealing']
        },
        'ventilation': {
            title: 'Industrial Ventilation',
            description: 'Advanced airflow engineering to extend the life of your building. We implement smart ridge vents, solar attic fans, and balanced intake systems to control moisture and heat.',
            features: ['Solar Attic Fans', 'Smart Airflow Sensors', 'Ice Dam Prevention', 'Moisture Control']
        },
        'emergency': {
            title: 'Help Now',
            description: 'Professional-grade response for storm damage and leaks. We don\'t wait—we get to work immediately to protect your home and belongings from further damage.',
            features: ['24/7 Response', 'Professional Tarping', 'Damage Assessment', 'Immediate Protection']
        },
        'replacement': {
            title: 'Full Replacement',
            description: 'Complete roof overhauls with high-performance shingles and underlayment. We execute a total system replacement that exceeds manufacturer specifications and local codes.',
            features: ['GAF Certified', 'Class 4 Impact Resistant', 'Synthetic Underlayment', 'Total System Warranty']
        },
        'leak': {
            title: 'Leak Detection',
            description: 'Advanced moisture detection to stop damage at the source. We find what others miss, using thermal imaging and specialized tools.',
            features: ['Thermal Imaging', 'Pressure Testing', 'Precision Sealing', 'Full Documentation']
        },
        'drone': {
            title: 'Roof Inspections',
            description: 'Ariel assessments for accurate insurance information and preventative care. Get a clear view of your roof\'s health from the safety of the ground.',
            features: ['High Detail', 'Heat Analysis', 'Insurance Support', 'Detailed Reports']
        }
    };

    window.openServiceModal = (id) => {
        const data = serviceData[id];
        if (!data) return;

        modalContent.innerHTML = `
            <div class="space-y-2">
                <span class="text-primaryAccent font-black uppercase tracking-widest text-[10px]">Technical Specs</span>
                <h2 class="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">${data.title}<span class="text-primaryAccent">.</span></h2>
            </div>
            <p class="text-xl text-gray-400 font-medium leading-relaxed">${data.description}</p>
            <div class="grid grid-cols-2 gap-4">
                ${data.features.map(f => `
                    <div class="flex items-center gap-2 text-white font-bold uppercase text-[10px] tracking-widest border-l-2 border-primaryAccent pl-3">
                        ${f}
                    </div>
                `).join('')}
            </div>
            <div class="pt-8">
                <a href="contact.html" class="inline-block bg-white text-black px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-primaryAccent transition-all shadow-xl">
                    Get Expert Quote
                </a>
            </div>
        `;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        lucide.createIcons();
    };

    const closeModal = () => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    };

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
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
                submitBtn.innerText = 'SEND REQUEST'; // Reset to original text manually or store it
                submitBtn.disabled = false;
            }
        });
    }
});
