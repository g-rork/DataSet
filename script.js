// Полный и финальный скрипт для сайта DataLabel Pro
// Версия, совместимая с сервисом отправки форм Formspree

document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Анимация плавного появления фраз в заголовке ---
    const typingElement = document.getElementById('typing-effect');
    const wordsToType = ["присоединяйтесь к команде", "станьте специалистом", "начните карьеру в IT"];

    if (typingElement) {
        let phraseIndex = 0;

        const cyclePhrases = () => {
            typingElement.classList.remove('visible');
            setTimeout(() => {
                typingElement.textContent = wordsToType[phraseIndex];
                typingElement.classList.add('visible');
                phraseIndex = (phraseIndex + 1) % wordsToType.length;
            }, 1500);
        };
        cyclePhrases();
        setInterval(cyclePhrases, 6000);
    }


    // --- 2. Анимация элементов при прокрутке ---
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });


    // --- 3. Кнопка "Наверх" ---
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    
    // --- 4. Логика переключения вкладок в форме контактов ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const forms = document.querySelectorAll('.contact-form');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const formToShow = button.getAttribute('data-form');

            forms.forEach(form => {
                if (form.id === formToShow) {
                    form.classList.add('active');
                } else {
                    form.classList.remove('active');
                }
            });
        });
    });

});