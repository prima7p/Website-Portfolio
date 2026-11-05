document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initProjectFilter();
    initProjectModal();
    initContactForm();
});

function initThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle');
    const themeText = document.getElementById('theme-text');
    if (!themeBtn) return;

    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateThemeButton(true);
    }

    themeBtn.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
        updateThemeButton(isDark);
    });

    function updateThemeButton(isDark) {
        if (themeText) {
            themeText.textContent = isDark ? 'Mode Terang' : 'Mode Gelap';
        }
        themeBtn.firstChild.textContent = isDark ? '☀️ ' : '🌙 ';
    }
}

function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.service-card[data-category]');
    const filterIndicator = document.getElementById('filter-indicator');

    if (!filterButtons.length || !projectCards.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');
            let visibleCount = 0;

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.classList.remove('is-hidden');
                    visibleCount++;
                } else {
                    card.classList.add('is-hidden');
                }
            });
            if (filterIndicator) {
                filterIndicator.textContent = `Menampilkan ${visibleCount} proyek`;
            }
        });
    });
}

function initProjectModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn1 = document.getElementById('modal-close');
    const closeBtn2 = document.getElementById('modal-close-btn2');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalDesc = document.getElementById('modal-desc');
    const detailButtons = document.querySelectorAll('.btn-detail');

    if (!modal) return;
    detailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const title = button.getAttribute('data-title');
            const category = button.getAttribute('data-category');
            const desc = button.getAttribute('data-desc');

            if (modalTitle) modalTitle.textContent = title;
            if (modalCategory) modalCategory.textContent = category;
            if (modalDesc) modalDesc.textContent = desc;

            modal.classList.remove('hidden');
        });
    });

    const closeModal = () => modal.classList.add('hidden');

    if (closeBtn1) closeBtn1.addEventListener('click', closeModal);
    if (closeBtn2) closeBtn2.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}
function initContactForm() {
    const form = document.getElementById('contact-form');
    const inputNama = document.getElementById('nama');
    const inputEmail = document.getElementById('email');
    const inputPesan = document.getElementById('pesan');
    const charCounter = document.getElementById('char-counter');
    const formAlert = document.getElementById('form-alert');

    if (!form) return;
    if (inputPesan && charCounter) {
        inputPesan.addEventListener('input', () => {
            const currentLength = inputPesan.value.length;
            charCounter.textContent = `${currentLength} / 300 karakter`;
            if (currentLength >= 280) {
                charCounter.style.color = '#ef4444';
            } else {
                charCounter.style.color = 'var(--text-muted)';
            }
        });
    }
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let isValid = true;
        const errNama = document.getElementById('error-nama');
        const errEmail = document.getElementById('error-email');
        const errPesan = document.getElementById('error-pesan');

        if (errNama) errNama.textContent = '';
        if (errEmail) errEmail.textContent = '';
        if (errPesan) errPesan.textContent = '';


        if (!inputNama.value.trim()) {
            if (errNama) errNama.textContent = 'Nama lengkap wajib diisi.';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!inputEmail.value.trim()) {
            if (errEmail) errEmail.textContent = 'Email wajib diisi.';
            isValid = false;
        } else if (!emailRegex.test(inputEmail.value.trim())) {
            if (errEmail) errEmail.textContent = 'Format email tidak valid (contoh: nama@domain.com).';
            isValid = false;
        }

        if (!inputPesan.value.trim()) {
            if (errPesan) errPesan.textContent = 'Isi pesan tidak boleh kosong.';
            isValid = false;
        }

        if (isValid) {
            formAlert.className = 'alert alert-success';
            formAlert.innerHTML = `🎉 <strong>Terima kasih, ${inputNama.value.trim()}!</strong> Pesan Anda berhasil dikirim. Saya akan segera merespons melalui email.`;
            formAlert.classList.remove('hidden');

            // Reset isi input formulir dan counter
            form.reset();
            if (charCounter) charCounter.textContent = '0 / 300 karakter';

            setTimeout(() => {
                formAlert.classList.add('hidden');
            }, 6000);
        }
    });
}

