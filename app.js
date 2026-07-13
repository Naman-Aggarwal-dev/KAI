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
    if(e.target.closest('a, button, .liquid-glass, .nav-link, .btn-primary, .btn-secondary')) document.body.classList.add('cursor-hover');
  });
  document.body.addEventListener('mouseout', e => {
    if(e.target.closest('a, button, .liquid-glass, .nav-link, .btn-primary, .btn-secondary')) document.body.classList.remove('cursor-hover');
  });
})();

// ====== 2. HEAVY PARTICLE BACKGROUND CANVAS ======
(function(){
  const canvas = document.getElementById('bg-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  for(let i=0; i<50; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 1.5 + 0.5
    });
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy;
      if(p.x < 0 || p.x > w) p.vx *= -1;
      if(p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.fill();
      for(let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if(dist < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - dist/150)})`;
          ctx.lineWidth = 0.5; ctx.stroke();
        }
      }
    });
    requestAnimationFrame(animate);
  }
  animate();
})();

// ====== 3. KINETIC TEXT SPLITTING ======
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

// ====== 4. SCROLL REVEALS ======
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

// ====== 5. MAGNETIC BUTTONS ======
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

// ====== 6. 3D TILT FOR MOCKUPS ======
function initTilt() {
  document.querySelectorAll('.tilt-3d').forEach(container => {
    const mockup = container.querySelector('.app-mockup');
    if(!mockup) return;
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mockup.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.02)`;
    });
    container.addEventListener('mouseleave', () => mockup.style.transform = 'rotateY(0) rotateX(0) scale(1)');
  });
}

window.addEventListener('DOMContentLoaded', () => {
  splitText();
  document.querySelectorAll('.reveal, .split-text, .reveal-scale').forEach(el => observer.observe(el));
  initMagnetic();
  initTilt();
});

// ====== 7. LOADER & PAGE TRANSITION ======
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if(loader) loader.classList.add('hidden');
  }, 2500);
});

document.addEventListener('click', function(e) {
  const link = e.target.closest('a');
  if (link && link.href && !link.href.startsWith('#') && !link.hasAttribute('download') && link.origin === window.location.origin) {
    e.preventDefault();
    const pt = document.getElementById('page-transition');
    if(pt) pt.classList.add('active');
    setTimeout(() => { window.location.href = link.href; }, 800);
  }
});