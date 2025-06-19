// 🎥 YouTube Video Embed (change your own video IDs)
const videos = [
  "F2hnPWRowMU", // Aapka video ID
  "dQw4w9WgXcQ", // Replace with your own
  "9bZkp7q19f0"  // Replace with your own
];

const videoContainer = document.getElementById("video-container");

videos.forEach((id) => {
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${id}`;
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;
  videoContainer.appendChild(iframe);
});

// 📩 Contact Form Handling
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  status.textContent = "Thank you! Your message has been sent.";
  form.reset();
});
