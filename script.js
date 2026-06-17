// 1. Envelope and Music Control
function openEnvelope() {
    const env = document.getElementById('envelope');
    const music = document.getElementById('bgMusic');
    
    env.classList.add('open');
    music.play();

    setTimeout(() => {
        document.getElementById('envelope-page').classList.add('animate__animated', 'animate__fadeOut');
        setTimeout(() => {
            document.getElementById('envelope-page').style.display = 'none';
            document.getElementById('mainContent').classList.remove('hidden');
            document.getElementById('mainNav').style.display = 'block';
            window.scrollTo(0, 0);
        }, 1000);
    }, 1500);
}

// 2. Countdown Timer
const weddingDate = new Date("June 24, 2026 10:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("countdown").innerHTML = days + " Days : " + hours + " Hours to go";
}, 1000);

// 3. Copy Account Number
function copyAcc() {
    navigator.clipboard.writeText("9061693121");
    alert("Account Number Copied!");
}

// 4. Gold Particle Background
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 60 },
        "color": { "value": "#D4AF37" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.4 },
        "size": { "value": 2 },
        "move": { "enable": true, "speed": 0.8, "direction": "bottom" }
    }
});
