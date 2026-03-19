/* ==================== ALGORITHMIC ART BACKGROUND ==================== */
/* Using flow fields + particles inspired by algorithmic-art skill */

class ArtBackground {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.flowField = [];
    this.cols = 0;
    this.rows = 0;
    this.scale = 20;
    this.inc = 0.1;
    this.zoff = 0;
    
    this.init();
    this.animate();
    
    window.addEventListener('resize', () => this.init());
  }
  
  init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    
    this.cols = Math.floor(this.canvas.width / this.scale) + 1;
    this.rows = Math.floor(this.canvas.height / this.scale) + 1;
    
    this.initParticles();
    this.generateFlowField();
  }
  
  initParticles() {
    this.particles = [];
    const particleCount = Math.min(50, Math.floor((this.canvas.width * this.canvas.height) / 20000));
    
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: 0,
        vy: 0,
        history: [],
        color: this.getRandomColor(),
        size: Math.random() * 2 + 1
      });
    }
  }
  
  getRandomColor() {
    const colors = [
      'hsla(190, 70%, 60%, ',    // Cyan
      'hsla(340, 80%, 65%, ',    // Pink
      'hsla(280, 60%, 65%, ',    // Purple
      'hsla(160, 60%, 55%, '     // Teal
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  generateFlowField() {
    this.flowField = [];
    let yoff = 0;
    
    for (let y = 0; y < this.rows; y++) {
      let xoff = 0;
      for (let x = 0; x < this.cols; x++) {
        const angle = this.noise(xoff, yoff, this.zoff) * Math.PI * 4;
        this.flowField.push({
          x: x * this.scale,
          y: y * this.scale,
          angle: angle
        });
        xoff += this.inc;
      }
      yoff += this.inc;
    }
  }
  
  noise(x, y, z) {
    // Simple Perlin-like noise
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;
    
    return (Math.sin(x * 12.9898 + y * 78.233 + z * 53.539) * 43758.5453) % 1;
  }
  
  updateParticles() {
    this.particles.forEach(particle => {
      // Store history for trail effect
      particle.history.push({ x: particle.x, y: particle.y });
      if (particle.history.length > 20) {
        particle.history.shift();
      }
      
      // Get flow field vector at particle position
      const col = Math.floor(particle.x / this.scale);
      const row = Math.floor(particle.y / this.scale);
      const index = row * this.cols + col;
      
      if (this.flowField[index]) {
        const angle = this.flowField[index].angle;
        particle.vx += Math.cos(angle) * 0.1;
        particle.vy += Math.sin(angle) * 0.1;
      }
      
      // Apply velocity
      particle.vx *= 0.95; // Friction
      particle.vy *= 0.95;
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Wrap around edges
      if (particle.x < 0) particle.x = this.canvas.width;
      if (particle.x > this.canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = this.canvas.height;
      if (particle.y > this.canvas.height) particle.y = 0;
    });
    
    this.zoff += 0.003;
    this.generateFlowField();
  }
  
  draw() {
    // Fade effect
    this.ctx.fillStyle = 'rgba(250, 250, 252, 0.03)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw particle trails
    this.particles.forEach(particle => {
      if (particle.history.length < 2) return;
      
      this.ctx.beginPath();
      this.ctx.moveTo(particle.history[0].x, particle.history[0].y);
      
      for (let i = 1; i < particle.history.length; i++) {
        const alpha = i / particle.history.length * 0.3;
        this.ctx.lineTo(particle.history[i].x, particle.history[i].y);
      }
      
      this.ctx.strokeStyle = particle.color + alpha + ')';
      this.ctx.lineWidth = particle.size;
      this.ctx.lineCap = 'round';
      this.ctx.stroke();
    });
    
    // Draw particles
    this.particles.forEach(particle => {
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fillStyle = particle.color + '0.6)';
      this.ctx.fill();
    });
  }
  
  animate() {
    this.updateParticles();
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('art-background');
  if (canvas) {
    new ArtBackground(canvas);
  }
});
