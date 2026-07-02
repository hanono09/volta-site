"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const STARTER: Message = {
  role: "assistant",
  content:
    "Hola, soy el asistente de Volta. Preguntame sobre precios, tiempos, o qué te recomendaríamos para tu negocio — te voy a orientar.",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([STARTER]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;
    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            "Estoy teniendo problemas para conectarme ahora. Para una respuesta más rápida, reservá una llamada o escribinos por WhatsApp — los links están en el menú.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Cerrar chat" : "Abrir chat"}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.4, ease: "easeOut" }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-volt-500 text-white shadow-lg shadow-volt-500/30"
      >
        {open ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-40 flex h-[28rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-ink-600 bg-ink-800 shadow-2xl shadow-black/50"
            role="dialog"
            aria-label="Asistente de chat con IA"
          >
            <div className="flex items-center gap-2 border-b border-ink-600 bg-ink-700/60 px-4 py-3">
              <Sparkles className="h-4 w-4 text-volt-400" />
              <p className="text-sm font-medium text-bone">Asistente de Volta</p>
              <span className="ml-auto flex items-center gap-1.5 text-[11px] text-bone-dim">
                <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse-soft" />
                En línea
              </span>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "ml-auto bg-volt-500 text-white"
                      : "bg-ink-700 text-bone"
                  }`}
                >
                  {m.content}
                </div>
              ))}
              {loading && (
                <div className="w-fit rounded-xl bg-ink-700 px-3 py-2 text-sm text-bone-muted">
                  Escribiendo…
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2 border-t border-ink-600 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Preguntá sobre precios, tiempos…"
                className="flex-1 rounded-full border border-ink-600 bg-ink-900 px-4 py-2 text-sm text-bone placeholder:text-bone-dim focus:border-volt-400"
              />
              <button
                type="submit"
                aria-label="Enviar mensaje"
                disabled={loading}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-volt-500 text-white disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
