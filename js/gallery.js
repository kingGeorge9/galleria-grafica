// Gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const filterButtons = document.querySelectorAll('.filter-btn');
    let currentImageIndex = 0;
    let images = [];

    // Lazy loading
    const lazyLoadImages = () => {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img.lazy').forEach(img => {
            imageObserver.observe(img);
        });
    };

    // Initialize gallery
    const initGallery = () => {
        images = Array.from(document.querySelectorAll('.photo-item img'));
        lazyLoadImages();
        
        images.forEach((img, index) => {
            img.addEventListener('click', () => openLightbox(index));
        });
    };

    // Lightbox functionality
    const openLightbox = (index) => {
        currentImageIndex = index;
        const fullSizeUrl = images[index].dataset.src;  // Use the data-src attribute which points to full image
        lightboxImg.src = fullSizeUrl;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    const showPrevImage = () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        const fullSizeUrl = images[currentImageIndex].dataset.src;
        lightboxImg.src = fullSizeUrl;
    };

    const showNextImage = () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        const fullSizeUrl = images[currentImageIndex].dataset.src;
        lightboxImg.src = fullSizeUrl;
    };

    // Category filtering
    const filterGallery = (category) => {
        const items = document.querySelectorAll('.photo-item');
        items.forEach(item => {
            const itemCategory = item.dataset.category;
            if (category === 'all' || itemCategory === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    };

    // Event listeners
    closeBtn?.addEventListener('click', closeLightbox);
    prevBtn?.addEventListener('click', showPrevImage);
    nextBtn?.addEventListener('click', showNextImage);
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterGallery(button.dataset.category);
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'ArrowLeft':
                showPrevImage();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
            case 'Escape':
                closeLightbox();
                break;
        }
    });

    // Initialize
    initGallery();
});
