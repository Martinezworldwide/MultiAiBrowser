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
  // You can keep adding more here easily!
];

const aiGrid = document.getElementById('aiGrid');

aiModels.forEach(model => {
  const button = document.createElement('button');
  button.textContent = model.name;
  button.onclick = () => window.open(model.url, '_blank');
  aiGrid.appendChild(button);
});

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
