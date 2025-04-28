const aiModels = [
  { name: "ChatGPT", url: "https://chat.openai.com/" },
  { name: "Gemini", url: "https://gemini.google.com/" },
  { name: "Claude", url: "https://claude.ai/" },
  { name: "DeepSeek", url: "https://chat.deepseek.com/" },
  { name: "Perplexity", url: "https://www.perplexity.ai/" },
  { name: "Mistral", url: "https://chat.mistral.ai/" },
  { name: "Groq", url: "https://chat.groq.com/" },
  { name: "OpenRouter", url: "https://openrouter.ai/chat" },
  { name: "HuggingChat", url: "https://huggingface.co/chat/" },
  { name: "Pi.ai", url: "https://pi.ai/talk/" }
  // Add even more here
];

const aiGrid = document.getElementById('aiGrid');

aiModels.forEach(model => {
  const button = document.createElement('button');
  button.textContent = model.name;
  button.onclick = () => openModal(model.url);
  aiGrid.appendChild(button);
});

const modal = document.getElementById('modal');
const iframe = document.getElementById('iframe');
const closeModal = document.getElementById('closeModal');

function openModal(url) {
  iframe.src = url;
  modal.style.display = "block";
}

closeModal.onclick = () => {
  modal.style.display = "none";
  iframe.src = "";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    iframe.src = "";
  }
};

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
  const searchValue = this.value.toLowerCase();
  const buttons = aiGrid.getElementsByTagName('button');
  Array.from(buttons).forEach(button => {
    if (button.textContent.toLowerCase().includes(searchValue)) {
      button.style.display = "";
    } else {
      button.style.display = "none";
    }
  });
});
