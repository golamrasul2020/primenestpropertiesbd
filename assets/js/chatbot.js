/* ==========================================================================
   ESTATEIN — RULE-BASED DEMO CHATBOT
   NOTE: This is a frontend-only scripted demo. No AI API is connected.
   To add real AI responses later: send the user's message to YOUR OWN
   secure backend endpoint (e.g. /api/chat) which safely calls the AI
   provider using a server-side secret key. NEVER put API keys in this file.
   ========================================================================== */

(function () {
  const QUICK_REPLIES = [
    { label: "Find a property", key: "find" },
    { label: "Buy a property", key: "buy" },
    { label: "Rent a property", key: "rent" },
    { label: "Contact an agent", key: "agent" }
  ];

  function buildWidget() {
    const wrap = document.createElement("div");
    wrap.className = "chatbot-widget";
    wrap.innerHTML = `
      <button class="chatbot-toggle-btn" id="chatbotToggle" aria-expanded="false" aria-controls="chatbotWindow" aria-label="Open chat assistant">
        <i class="bi bi-chat-dots-fill"></i>
      </button>
      <div class="chatbot-window" id="chatbotWindow" role="dialog" aria-modal="false" aria-labelledby="chatbotTitle">
        <div class="chatbot-header">
          <span id="chatbotTitle"><i class="bi bi-robot"></i> Estatein Assistant</span>
          <button id="chatbotClose" aria-label="Close chat">&times;</button>
        </div>
        <div class="chatbot-body" id="chatbotBody" aria-live="polite"></div>
        <div class="chatbot-quick-replies" id="chatbotQuickReplies"></div>
        <form class="chatbot-input-row" id="chatbotForm">
          <label for="chatbotInput" class="visually-hidden">Type your message</label>
          <input type="text" id="chatbotInput" placeholder="Type a message..." autocomplete="off">
          <button type="submit" aria-label="Send message"><i class="bi bi-send-fill"></i></button>
        </form>
      </div>
    `;
    document.body.appendChild(wrap);
    return wrap;
  }

  function appendMessage(body, text, sender) {
    const div = document.createElement("div");
    div.className = `chat-msg ${sender}`;
    div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function renderQuickReplies(container, onPick) {
    container.innerHTML = "";
    QUICK_REPLIES.forEach(qr => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = qr.label;
      btn.addEventListener("click", () => onPick(qr.key, qr.label));
      container.appendChild(btn);
    });
  }

  function getBotResponse(message) {
    const msg = message.toLowerCase();
    if (msg.includes("find")) return "Great! You can browse all listings on our Properties page, or tell me what city or budget you're interested in.";
    if (msg.includes("buy")) return "We have apartments, houses, villas, commercial spaces and land for sale. Visit the Properties page and filter by 'Buy' to see available listings.";
    if (msg.includes("rent")) return "Looking to rent? Head to the Properties page and filter by 'Rent' — or tell me your preferred city and budget.";
    if (msg.includes("agent") || msg.includes("contact")) return "You can reach our team via the Contact page, or view agent profiles with direct phone/WhatsApp/email on the Agents page.";
    if (msg.includes("price") || msg.includes("cost")) return "Prices vary by property type and location. Use the search filters on the Properties page to set your budget range.";
    if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) return "Hello! 👋 How can I help you with your property search today?";
    if (msg.includes("thank")) return "You're welcome! Let me know if there's anything else I can help with.";
    return "Thanks for your message! For detailed assistance, please use the Contact page or chat with one of our agents on WhatsApp via the Agents page.";
  }

  document.addEventListener("DOMContentLoaded", () => {
    const widget = buildWidget();
    const toggleBtn = widget.querySelector("#chatbotToggle");
    const windowEl = widget.querySelector("#chatbotWindow");
    const closeBtn = widget.querySelector("#chatbotClose");
    const body = widget.querySelector("#chatbotBody");
    const quickReplies = widget.querySelector("#chatbotQuickReplies");
    const form = widget.querySelector("#chatbotForm");
    const input = widget.querySelector("#chatbotInput");

    let greeted = false;

    function openChat() {
      windowEl.classList.add("open");
      toggleBtn.setAttribute("aria-expanded", "true");
      if (!greeted) {
        appendMessage(body, "Hi there! 👋 I'm the Estatein virtual assistant. How can I help you today?", "bot");
        renderQuickReplies(quickReplies, handleQuickReply);
        greeted = true;
      }
      input.focus();
    }

    function closeChat() {
      windowEl.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.focus();
    }

    function handleQuickReply(key, label) {
      appendMessage(body, label, "user");
      setTimeout(() => appendMessage(body, getBotResponse(key), "bot"), 400);
    }

    toggleBtn.addEventListener("click", () => {
      windowEl.classList.contains("open") ? closeChat() : openChat();
    });
    closeBtn.addEventListener("click", closeChat);

    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && windowEl.classList.contains("open")) closeChat();
    });

    form.addEventListener("submit", e => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;
      appendMessage(body, text, "user");
      input.value = "";
      setTimeout(() => appendMessage(body, getBotResponse(text), "bot"), 400);
    });
  });
})();