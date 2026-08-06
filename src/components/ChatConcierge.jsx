import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot, User, RefreshCw } from 'lucide-react';
import { askConcierge } from '../services/gemini';

export default function ChatConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: '¡Sea bienvenido a Hotel Virreynal! 🏨\n\nSoy Don Manolo, su Concierge Virtual. ¿En qué le puedo asistir el día de hoy con su visita a Córdoba, Veracruz?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    // Call Gemini Service
    const historyForApi = messages.map(m => ({ sender: m.sender, text: m.text }));
    const result = await askConcierge(query.trim(), historyForApi);

    const botMsg = {
      id: Date.now() + 1,
      sender: 'bot',
      text: result.text,
    };

    setMessages((prev) => [...prev, botMsg]);
    setIsLoading(false);
  };

  const suggestions = [
    '¿Qué habitaciones ofrecen?',
    '¿Dónde están ubicados?',
    '¿Tienen café cordobés?',
  ];

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-[#a64b31] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-3 border border-white/20 group"
          aria-label="Abrir Concierge Virtual IA"
        >
          <div className="relative">
            <Sparkles className="w-6 h-6 animate-pulse" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-primary" />
          </div>
          <span className="hidden sm:inline font-serif text-sm font-semibold tracking-wider pr-1">
            Concierge IA
          </span>
        </button>
      )}

      {/* Chat Window Container */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-[380px] h-[520px] bg-background rounded-2xl shadow-2xl border border-secondary/15 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-secondary via-[#4a3527] to-primary p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-light text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif font-semibold text-base leading-none">
                    Don Manolo
                  </h3>
                  <span className="bg-emerald-500/20 text-emerald-300 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border border-emerald-400/30">
                    IA Active
                  </span>
                </div>
                <p className="text-[11px] text-white/80 font-light mt-1">
                  Concierge Virtual • Hotel Virreynal
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              aria-label="Cerrar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-background/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                    <Sparkles className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-primary text-white rounded-br-none shadow-sm'
                      : 'bg-white text-charcoal border border-secondary/10 rounded-bl-none shadow-sm font-sans'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Loader Indicator */}
            {isLoading && (
              <div className="flex gap-2.5 items-center">
                <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Sparkles className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-white border border-secondary/10 p-3 rounded-2xl rounded-bl-none text-xs text-charcoal/70 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Prompt Suggestions */}
          {messages.length <= 2 && !isLoading && (
            <div className="px-3 py-2 bg-white/80 border-t border-secondary/5 flex flex-wrap gap-1.5">
              {suggestions.map((sug, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(sug)}
                  className="text-[11px] bg-background hover:bg-primary/10 hover:text-primary text-charcoal/80 border border-secondary/10 px-2.5 py-1 rounded-full transition-all"
                >
                  {sug}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-secondary/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu consulta aquí..."
              className="flex-1 text-xs sm:text-sm bg-background border border-secondary/15 rounded-full px-4 py-2.5 focus:outline-none focus:border-primary text-charcoal placeholder:text-charcoal/40"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bg-primary hover:bg-[#a64b31] disabled:opacity-40 text-white p-2.5 rounded-full transition-all shadow-md shrink-0"
              aria-label="Enviar mensaje"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
