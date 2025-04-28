const aiModels = [
  { name: "ChatGPT", url: "https://chat.openai.com/", sector: "chatbot" },
  { name: "Gemini", url: "https://gemini.google.com/", sector: "chatbot" },
  { name: "Claude", url: "https://claude.ai/", sector: "chatbot" },
  { name: "DeepSeek", url: "https://chat.deepseek.com/", sector: "chatbot" },
  { name: "Pi.ai", url: "https://pi.ai/talk/", sector: "chatbot" },
  { name: "HuggingChat", url: "https://huggingface.co/chat/", sector: "chatbot" },
  { name: "Poe by Quora", url: "https://poe.com/", sector: "chatbot" },
  { name: "Writesonic", url: "https://writesonic.com/chat", sector: "chatbot" },
  { name: "ZenoChat", url: "https://zeno.com/chat", sector: "chatbot" },
  { name: "Reka AI", url: "https://reka.ai/", sector: "chatbot" },
  { name: "Kuki AI", url: "https://www.kuki.ai/", sector: "chatbot" },
  { name: "Replika AI", url: "https://replika.com/", sector: "chatbot" },
  { name: "Chai App", url: "https://chai.ml/", sector: "chatbot" },
  { name: "Character.AI", url: "https://character.ai/", sector: "chatbot" },
  { name: "Janitor AI", url: "https://janitorai.com/", sector: "chatbot" },
  { name: "Perplexity AI", url: "https://www.perplexity.ai/", sector: "search" },
  { name: "You.com", url: "https://you.com/chat", sector: "search" },
  { name: "Andi Search", url: "https://andisearch.com/", sector: "search" },
  { name: "Phind", url: "https://phind.com/", sector: "search" },
  { name: "Consensus", url: "https://consensus.app/", sector: "search" },
  { name: "Komo AI", url: "https://komo.ai/", sector: "search" },
  { name: "Kagi Small Web", url: "https://kagi.com/smallweb", sector: "search" },
  { name: "GitHub Copilot", url: "https://github.com/features/preview/copilot-x", sector: "coding" },
  { name: "Cursor AI", url: "https://cursor.sh/", sector: "coding" },
  { name: "Codeium", url: "https://codeium.com/", sector: "coding" },
  { name: "Devin AI", url: "https://www.cognition-labs.com/", sector: "coding" },
  { name: "Vercel v0.dev", url: "https://v0.dev/", sector: "coding" },
  { name: "Mistral Chat", url: "https://chat.mistral.ai/", sector: "experimental" },
  { name: "GroqChat", url: "https://chat.groq.com/", sector: "experimental" },
  { name: "OpenRouter", url: "https://openrouter.ai/chat", sector: "experimental" },
  { name: "Llama 3 Playground", url: "https://huggingface.co/spaces/huggingface-projects/llama-3-playground", sector: "experimental" },
  { name: "Bing Copilot", url: "https://bing.com/chat", sector: "experimental" },
  { name: "Nvidia Nemo", url: "https://www.nvidia.com/en-us/ai-data-science/nemo/", sector: "experimental" },
  { name: "Aria (Opera AI)", url: "https://www.opera.com/features/aria", sector: "experimental" },
{ name: "Perplexity Labs", url: "https://labs.perplexity.ai/", sector: "experimental" },
{ name: "Vana AI", url: "https://www.vana.com/", sector: "experimental" },
{ name: "Dreamily AI", url: "https://www.dreamily.ai/", sector: "chatbot" },
{ name: "Sudowrite", url: "https://sudowrite.com/", sector: "chatbot" },
{ name: "Plexi AI", url: "https://www.plexiai.com/", sector: "chatbot" },
{ name: "ChatPDF", url: "https://www.chatpdf.com/", sector: "search" },
{ name: "AskYourPDF", url: "https://www.askyourpdf.com/", sector: "search" },
{ name: "Blackbox AI", url: "https://www.blackbox.ai/", sector: "coding" },
{ name: "SciSpace AI", url: "https://typeset.io/", sector: "search" },
{ name: "Leonardo AI", url: "https://leonardo.ai/", sector: "experimental" },
{ name: "Runway AI", url: "https://runwayml.com/", sector: "experimental" },
{ name: "Pika Labs AI", url: "https://pika.art/", sector: "experimental" },
{ name: "Venice Uncensored AI", url: "https://venice.ai/", sector: "chatbot" },
{ name: "Replit Ghostwriter", url: "https://replit.com/ghostwriter", sector: "coding" },
{ name: "GetLiner AI", url: "https://getliner.com/", sector: "search" },




];

const aiGrid = document.getElementById('aiGrid');

function renderAI(models) {
  aiGrid.innerHTML = '';
  models.forEach(model => {
    const card = document.createElement('div');
    card.className = 'ai-card';
    card.innerHTML = `
      <h2>${model.name}</h2>
      <span class="badge ${model.sector}">${model.sector.charAt(0).toUpperCase() + model.sector.slice(1)}</span>
    `;
    card.onclick = () => window.open(model.url, '_blank');
    aiGrid.appendChild(card);
  });
}

renderAI(aiModels);

document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const sector = button.getAttribute('data-sector');
    if (sector === 'all') {
      renderAI(aiModels);
    } else {
      renderAI(aiModels.filter(model => model.sector === sector));
    }
  });
});

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
  const searchValue = this.value.toLowerCase();
  const cards = aiGrid.getElementsByClassName('ai-card');
  Array.from(cards).forEach(card => {
    const text = card.querySelector('h2').textContent.toLowerCase();
    if (text.includes(searchValue)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});
