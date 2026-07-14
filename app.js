// ====== 1. UNIQUE CURSOR LOGIC ======
(function(){
  const reticle = document.querySelector('.cursor-reticle');
  const dot = document.querySelector('.cursor-dot');
  const crossH = document.querySelector('.cursor-cross:not(.v)');
  const crossV = document.querySelector('.cursor-cross.v');
  if(!reticle || !dot) return;
  
  let mx=0,my=0,rx=0,ry=0;
  window.addEventListener('mousemove', e => {
    mx=e.clientX; my=e.clientY;
    dot.style.left=mx+'px'; dot.style.top=my+'px';
    crossH.style.left=mx+'px'; crossH.style.top=my+'px';
    crossV.style.left=mx+'px'; crossV.style.top=my+'px';
  });
  (function loop(){
    rx += (mx-rx)*0.15; ry += (my-ry)*0.15;
    reticle.style.left=rx+'px'; reticle.style.top=ry+'px';
    requestAnimationFrame(loop);
  })();
  
  document.body.addEventListener('mouseover', e => {
    if(e.target.closest('a, button, .liquid-glass, .nav-link, .btn-primary, .btn-secondary, .faq-question, .copy-btn')) document.body.classList.add('cursor-hover');
  });
  document.body.addEventListener('mouseout', e => {
    if(e.target.closest('a, button, .liquid-glass, .nav-link, .btn-primary, .btn-secondary, .faq-question, .copy-btn')) document.body.classList.remove('cursor-hover');
  });
})();

// ====== 2. CINEMATIC AUDIO WAVE BACKGROUND ======
(function(){
  const canvas = document.getElementById('bg-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, time = 0;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function animate() {
    ctx.clearRect(0, 0, w, h);
    ctx.lineWidth = 1;
    for(let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.strokeStyle = `rgba(45, 91, 255, ${0.1 - i * 0.03})`;
      for(let x = 0; x <= w; x += 10) {
        let y = h / 2;
        y += Math.sin(x * 0.005 + time + i) * 80;
        y += Math.sin(x * 0.01 + time * 1.5 + i) * 40;
        y += Math.cos(x * 0.008 + time * 0.5 + i) * 60;
        if(x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    time += 0.01;
    requestAnimationFrame(animate);
  }
  animate();
})();

// ====== 3. MOUSE PARALLAX FOR BACKGROUND ======
window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  const canvas = document.getElementById('bg-canvas');
  if(canvas) canvas.style.transform = `translate(${x}px, ${y}px)`;
});

// ====== 4. SCROLL PROGRESS BAR ======
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.offsetHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  const progressBar = document.getElementById('scroll-progress');
  if(progressBar) progressBar.style.width = scrollPercent + '%';
});

// ====== 5. KINETIC TEXT SPLITTING ======
function splitText() {
  document.querySelectorAll('.split-text').forEach(el => {
    if(el.classList.contains('split-init')) return;
    el.classList.add('split-init');
    const text = el.textContent;
    el.innerHTML = '';
    text.split('').forEach(char => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.classList.add('char');
      span.style.transitionDelay = `${Math.random() * 0.5}s`;
      el.appendChild(span);
    });
  });
}

// ====== 6. SCROLL REVEALS ======
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

// ====== 7. MAGNETIC BUTTONS ======
function initMagnetic() {
  document.querySelectorAll('.btn-primary, .btn-secondary, .nav-cta').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px)`;
    });
    btn.addEventListener('mouseleave', () => btn.style.transform = 'translate(0px, 0px)');
  });
}

// ====== 8. LIVE PREVIEW TILT & TYPING ======
function initLivePreview() {
  const preview = document.querySelector('.live-preview-wrapper');
  if(!preview) return;

  preview.addEventListener('mousemove', (e) => {
    const rect = preview.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const livePreview = preview.querySelector('.live-preview');
    livePreview.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  });
  preview.addEventListener('mouseleave', () => {
    const livePreview = preview.querySelector('.live-preview');
    livePreview.style.transform = 'rotateY(0) rotateX(0)';
  });

  const textEl = document.querySelector('.lp-text');
  if(!textEl) return;
  
  const commands = [
    "Hey KAI, open VS Code.",
    "Hey KAI, change background to gold.",
    "Hey KAI, find my presentation.",
    "Hey KAI, summarize this PDF.",
    "Hey KAI, launch Spotify."
  ];
  
  let cmdIdx = 0, charIdx = 0, isDeleting = false;

  function typeLoop() {
    const currentCmd = commands[cmdIdx];
    if (!isDeleting) {
      textEl.innerHTML = currentCmd.substring(0, charIdx + 1) + '<span class="lp-cursor"></span>';
      charIdx++;
      if (charIdx === currentCmd.length) {
        isDeleting = true;
        setTimeout(typeLoop, 2000);
        return;
      }
    } else {
      textEl.innerHTML = currentCmd.substring(0, charIdx - 1) + '<span class="lp-cursor"></span>';
      charIdx--;
      if (charIdx === 0) {
        isDeleting = false;
        cmdIdx = (cmdIdx + 1) % commands.length;
      }
    }
    setTimeout(typeLoop, isDeleting ? 40 : 80);
  }
  typeLoop();
}

// ====== 9. ACCORDION & COPY CODE LOGIC ======
function initInteractions() {
  // Accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.parentElement.classList.toggle('active');
    });
  });

  // Copy to Clipboard
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.nextElementSibling.innerText;
      navigator.clipboard.writeText(code);
      btn.innerText = 'Copied!';
      setTimeout(() => { btn.innerText = 'Copy'; }, 2000);
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  splitText();
  document.querySelectorAll('.reveal, .reveal-pop, .split-text, .reveal-scale').forEach(el => observer.observe(el));
  initMagnetic();
  initLivePreview();
  initInteractions();
});

// ====== 10. LOADER & PAGE TRANSITION ======
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if(loader) loader.classList.add('hidden');
  }, 2000); 
});

document.addEventListener('click', function(e) {
  const link = e.target.closest('a');
  if (link && link.href && !link.href.startsWith('#') && !link.hasAttribute('download') && link.origin === window.location.origin && !link.target) {
    e.preventDefault();
    const pt = document.getElementById('page-transition');
    if(pt) pt.classList.add('active');
    setTimeout(() => { window.location.href = link.href; }, 800);
  }
});
