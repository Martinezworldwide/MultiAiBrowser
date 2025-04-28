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
  { name: "You.com Chat", url: "https://you.com/chat" },
  { name: "Andi Search", url: "https://andisearch.com/" },
  { name: "Phind.com", url: "https://www.phind.com/" },
  { name: "Consensus AI", url: "https://consensus.app/" },
  { name: "Aria (Opera AI)", url: "https://www.opera.com/features/aria" },
  { name: "Komo AI", url: "https://komo.ai/" },
  { name: "Kagi Small Web", url: "https://kagi.com/smallweb" },
  { name: "Poe by Quora", url: "https://poe.com/" },
  { name: "Writesonic (Chatsonic)", url: "https://writesonic.com/chat" },
  { name: "ZenoChat", url: "https://zeno.com/chat" },
  { name: "Reka AI", url: "https://reka.ai/" },
  { name: "Nvidia Nemo", url: "https://www.nvidia.com/en-us/ai-data-science/nemo/" },
  { name: "GitHub Copilot Chat", url: "https://github.com/features/preview/copilot-x" },
  { name: "Cursor AI", url: "https://cursor.sh/" },
  { name: "Codeium", url: "https://www.codeium.com/" }
  { name: "Devin AI", url: "https://www.cognition-labs.com/" },
  { name: "Replika AI", url: "https://replika.com/" },
  { name: "Chai App AI", url: "https://chai.ml/" },
  { name: "Character.AI", url: "https://character.ai/" },
  { name: "Aether Chat", url: "https://aetherchat.ai/" },
  { name: "Kuki AI", url: "https://www.kuki.ai/" },
  { name: "Janitor AI", url: "https://janitorai.com/" },
  { name: "Bing Copilot AI", url: "https://www.bing.com/chat" },
  { name: "Vercel v0.dev", url: "https://v0.dev/" },
  { name: "Llama 3 Playground", url: "https://huggingface.co/spaces/huggingface-projects/llama-3-playground" }


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
