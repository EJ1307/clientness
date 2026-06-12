// FAQ Accordion Logic
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    // Close others
    document.querySelectorAll('.faq-item').forEach(other => {
      if (other !== item) other.classList.remove('active');
    });
    // Toggle clicked
    item.classList.toggle('active');
  });
});

// Testimonial Slider Logic
const testimonials = [
  {
    quote: "Quality leads started coming in as soon as the ads went live. The setup and targeting were clearly done right.",
    author: "Imran Shaikh",
    title: "Founder, Al Noor Services"
  },
  {
    quote: "The campaigns are well managed, and the results have been consistent so far.",
    author: "Kena",
    title: "Marketing Associate"
  },
  {
    quote: "Started getting clients through the ads. Closed multiple sales within a week.",
    author: "Arjun Mehta",
    title: "Fitness Coach"
  },
  {
    quote: "We started getting sales within 2 days of launching the ads. The creatives were well done.",
    author: "Amit",
    title: "Founder, E-commerce Brand"
  },
  {
    quote: "Managing ads was always confusing before. Now it’s structured, and I don’t have to think about it anymore.",
    author: "Rahul",
    title: "Online Guitar Tutor"
  },
  {
    quote: "Our agency scaled from $10k to $35k MRR after outsourcing campaign execution to them. Absolutely seamless.",
    author: "Sarah Jenkins",
    title: "Founder, Scaled Media Agency"
  },
  {
    quote: "The ad creatives generated are outstanding. Hook rates went up by 40% and our cost per acquisition dropped significantly.",
    author: "Vikram Malhotra",
    title: "E-commerce Director, Aura Goods"
  },
  {
    quote: "Having a reliable partner to handle media buying allows us to focus entirely on client acquisition. Game changer for our growth.",
    author: "Chloe Chen",
    title: "Co-founder, GrowthFlow Consulting"
  },
  {
    quote: "Very responsive team and highly professional setups. Our return on ad spend (ROAS) has stabilized at 3.5x.",
    author: "Marcus Thorne",
    title: "Managing Partner, Thorne & Co."
  },
  {
    quote: "From campaign structure to retargeting funnels, everything is top-tier. They understand conversion optimization inside out.",
    author: "Elena Rostova",
    title: "SaaS Creator & Educator"
  }
];

const sliderContainer = document.getElementById('testimonial-slider');
const prevBtn = document.querySelector('.nav-prev');
const nextBtn = document.querySelector('.nav-next');
let currentIndex = 0;

function renderTestimonial(index) {
  const t = testimonials[index];
  sliderContainer.innerHTML = `
    <div class="text-testimonials-card fade-in">
      <p class="text-testimonials-quote">“${t.quote}”</p>
      <div class="text-testimonials-author-container">
        <p class="text-testimonials-author-name">${t.author}</p>
        <p class="text-testimonials-author-role">${t.title}</p>
      </div>
    </div>
  `;
}

if (sliderContainer) {
  renderTestimonial(currentIndex);

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    renderTestimonial(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
    renderTestimonial(currentIndex);
  });
}

// Case Study Slider Logic
const caseStudies = [
  "./Case Studies 2026 - Clientness/Case Studies 2026 - Clientness-3.png",
  "./Case Studies 2026 - Clientness/Case Studies 2026 - Clientness-4.png",
  "./Case Studies 2026 - Clientness/Case Studies 2026 - Clientness-5.png",
  "./Case Studies 2026 - Clientness/Case Studies 2026 - Clientness-6.png",
  "./Case Studies 2026 - Clientness/Case Studies 2026 - Clientness-7.png",
  "./Case Studies 2026 - Clientness/Case Studies 2026 - Clientness-8.png"
];

const caseSliderContainer = document.getElementById('case-study-slider');
const caseDotsContainer = document.getElementById('case-dots');
const casePrevBtn = document.querySelector('.case-prev');
const caseNextBtn = document.querySelector('.case-next');
let caseIndex = 0;

if (caseSliderContainer) {
  // Set up container styling for horizontal track
  caseSliderContainer.style.position = 'relative';
  caseSliderContainer.style.width = '100%';
  caseSliderContainer.style.overflow = 'hidden';
  
  // Inject the slide track containing all images side-by-side
  caseSliderContainer.innerHTML = `
    <div class="case-study-track" style="display: flex; width: 100%; transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1); will-change: transform;">
      ${caseStudies.map(src => `
        <div class="case-study-slide" style="flex: 0 0 100%; width: 100%;">
          <img src="${src}" alt="Case Study" style="width: 100%; height: auto; display: block; object-fit: contain;">
        </div>
      `).join('')}
    </div>
  `;

  const track = caseSliderContainer.querySelector('.case-study-track');

  function renderCaseStudy(index) {
    // Translate the track horizontally to slide active image into view
    if (track) {
      track.style.transform = `translateX(-${index * 100}%)`;
    }
    
    // Update active dots indicator styling
    caseDotsContainer.innerHTML = caseStudies.map((_, i) => `
      <div class="case-dot" data-index="${i}" style="width: 6px; height: 6px; border-radius: 50%; background: ${i === index ? '#ff9f40' : '#333'}; cursor: pointer; transition: background 0.3s ease;"></div>
    `).join('');

    // Add click listeners to dots
    caseDotsContainer.querySelectorAll('.case-dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        caseIndex = parseInt(e.currentTarget.getAttribute('data-index'), 10);
        renderCaseStudy(caseIndex);
      });
    });
  }

  // Initial render
  renderCaseStudy(caseIndex);

  casePrevBtn.addEventListener('click', () => {
    caseIndex = (caseIndex === 0) ? caseStudies.length - 1 : caseIndex - 1;
    renderCaseStudy(caseIndex);
  });

  caseNextBtn.addEventListener('click', () => {
    caseIndex = (caseIndex === caseStudies.length - 1) ? 0 : caseIndex + 1;
    renderCaseStudy(caseIndex);
  });
}

// Simple fade animation for transitions
const style = document.createElement('style');
style.textContent = `
  .fade-in {
    animation: fadeIn 0.3s ease-in-out;
  }
  @keyframes fadeIn {
    from { opacity: 0.5; transform: scale(0.98); }
    to { opacity: 1; transform: scale(1); }
  }
`;
document.head.appendChild(style);

// Stats Number Count Up Animation
const statNumbers = document.querySelectorAll('.stat-number');

const animateCountUp = (el) => {
  const target = parseInt(el.getAttribute('data-target'), 10);
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 1500; // 1.5s duration for a smooth, premium feel
  const startTime = performance.now();

  const updateCount = (currentTime) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    
    // Smooth easeOutQuad pacing: progress * (2 - progress)
    const easeProgress = progress * (2 - progress);
    const currentValue = Math.floor(easeProgress * target);

    el.textContent = currentValue + suffix;

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      el.textContent = target + suffix;
    }
  };

  requestAnimationFrame(updateCount);
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCountUp(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

statNumbers.forEach(num => {
  const suffix = num.getAttribute('data-suffix') || '';
  num.textContent = '0' + suffix;
  observer.observe(num);
});

// Scroll-triggered premium entry popups
const scrollPopups = document.querySelectorAll('.scroll-popup');

const scrollObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-popup');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

scrollPopups.forEach(el => {
  scrollObserver.observe(el);
});

// Lightbox Modal Logic for Campaign Results
const lightbox = document.getElementById('image-lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

document.querySelectorAll('.proof-card img').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => {
    const originalSrc = img.getAttribute('data-original');
    if (originalSrc && lightboxImg && lightbox) {
      lightboxImg.src = originalSrc;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden'; // prevent background page scroll
    }
  });
});

const closeLightbox = () => {
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
};

if (lightboxClose && lightbox) {
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  
  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });
}

console.log("Interactive JS loaded successfully.");
