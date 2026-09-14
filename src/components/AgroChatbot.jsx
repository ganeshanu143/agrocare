import React, { useState, useRef, useEffect } from 'react';
import { Bot, MessageSquare, Send, X, Sparkles, Mic, HelpCircle, Leaf, PhoneCall, ChevronRight, RefreshCw } from 'lucide-react';
import { chatbotCategories, quickQuestions, chatbotKnowledgeBase } from '../data/chatbotQA';

export default function AgroChatbot({ lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListeningVoice, setIsListeningVoice] = useState(false);
  
  // Chat History
  const [messages, setMessages] = useState([
    {
      id: 'msg_init',
      sender: 'bot',
      text: 'Namaste Farmer Brother! 🙏 I am your **AgroCare AI Assistant**. How can I help you today with your crops or organic farming doubts?',
      quickReplies: quickQuestions.slice(0, 3)
    }
  ]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Handle Asking a Question
  const handleAskQuestion = (questionStr) => {
    const userQuery = questionStr || inputText;
    if (!userQuery.trim()) return;

    // Add User Message
    const userMsg = {
      id: 'usr_' + Date.now(),
      sender: 'user',
      text: userQuery
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Smart Matcher
    setTimeout(() => {
      setIsTyping(false);
      const queryLower = userQuery.toLowerCase();
      
      const match = chatbotKnowledgeBase.find(kb => 
        kb.keywords.some(kw => queryLower.includes(kw.toLowerCase()))
      );

      let botReplyText = '';
      let botQuickReplies = [];

      if (match) {
        botReplyText = match.answer;
        botQuickReplies = quickQuestions.filter(q => q.text !== match.question).slice(0, 2);
      } else {
        botReplyText = `🌱 **Agronomic Assistance Notice:**\n\nI understand you are asking about: "${userQuery}".\n\n- **For Organic Pest & Soil Guidance:** Follow Jeevamrutha bi-weekly drenching and spray Neem Oil (5ml/L).\n- **For Direct Expert Doubts:** Call our Free Farmer Toll-Free Helpline: **1800-AGROCARE (1800-247-6227)** available daily 7 AM – 8 PM.`;
        botQuickReplies = quickQuestions.slice(0, 3);
      }

      const botMsg = {
        id: 'bot_' + Date.now(),
        sender: 'bot',
        text: botReplyText,
        quickReplies: botQuickReplies
      };

      setMessages(prev => [...prev, botMsg]);
    }, 900);
  };

  // Voice Prompt Simulator
  const handleVoiceInput = () => {
    setIsListeningVoice(true);
    setTimeout(() => {
      setIsListeningVoice(false);
      const voiceSample = "How to prepare Jeevamrutha organically at home?";
      setInputText(voiceSample);
      handleAskQuestion(voiceSample);
    }, 1500);
  };

  return (
    <>
      {/* FLOATING CHATBOT BUTTON (Bottom-Right) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 1500,
            background: 'linear-gradient(135deg, var(--primary-green), #10b981)',
            color: 'var(--white)',
            border: 'none',
            borderRadius: '9999px',
            padding: '14px 22px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '15px',
            fontWeight: 800,
            boxShadow: 'var(--shadow-lg)',
            cursor: 'pointer',
            animation: 'pulseScan 3s infinite ease-in-out'
          }}
        >
          <Bot size={26} />
          <span>Ask AgroCare Bot</span>
          <span className="badge badge-pink" style={{ fontSize: '11px', padding: '2px 8px' }}>AI</span>
        </button>
      )}

      {/* CHATBOT WINDOW PANEL */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 2000,
          width: 'calc(100vw - 40px)',
          maxWidth: '420px',
          height: '580px',
          maxHeight: '80vh',
          background: 'var(--white)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--gray-200)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'fadeIn 0.3s ease-out'
        }}>
          {/* Header Bar */}
          <div style={{
            background: 'linear-gradient(135deg, var(--primary-green-dark), var(--primary-green))',
            color: 'var(--white)',
            padding: '16px 20px',
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ background: 'rgba(255,255,255,0.2)', padding: '8px', borderRadius: '10px' }}>
                <Bot size={22} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '16px' }}>AgroCare AI Farmer Bot</div>
                <div style={{ fontSize: '12px', color: 'var(--primary-green-light)' }}>24/7 Organic Doubts & Solutions</div>
              </div>
            </div>
            <button className="btn btn-sm" onClick={() => setIsOpen(false)} style={{ background: 'rgba(255,255,255,0.2)', color: 'var(--white)', padding: '6px' }}>
              <X size={18} />
            </button>
          </div>

          {/* Quick Category Chips Header */}
          <div style={{ background: 'var(--gray-100)', padding: '10px 14px', borderBottom: '1px solid var(--gray-200)', display: 'flex', gap: '6px', overflowX: 'auto' }}>
            {chatbotCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleAskQuestion(cat.title)}
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--gray-300)',
                  borderRadius: 'var(--radius-full)',
                  padding: '4px 10px',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--primary-green-dark)',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer'
                }}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* CHAT MESSAGES FEED */}
          <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px', background: 'var(--bg-soft)' }}>
            {messages.map(msg => (
              <div
                key={msg.id}
                style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%'
                }}
              >
                <div style={{
                  background: msg.sender === 'user' ? 'var(--primary-green)' : 'var(--white)',
                  color: msg.sender === 'user' ? 'var(--white)' : 'var(--text-dark)',
                  padding: '12px 16px',
                  borderRadius: msg.sender === 'user' ? '18px 18px 2px 18px' : '18px 18px 18px 2px',
                  boxShadow: 'var(--shadow-sm)',
                  fontSize: '14px',
                  lineHeight: 1.5,
                  whiteSpace: 'pre-line'
                }}>
                  {msg.text}
                </div>

                {/* Quick Reply Triggers under bot message */}
                {msg.quickReplies && msg.quickReplies.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '8px' }}>
                    {msg.quickReplies.map(qr => (
                      <button
                        key={qr.id}
                        onClick={() => handleAskQuestion(qr.text)}
                        style={{
                          background: 'var(--pink-accent-bg)',
                          border: '1px solid var(--pink-accent-border)',
                          color: 'var(--pink-accent-dark)',
                          borderRadius: 'var(--radius-md)',
                          padding: '8px 12px',
                          fontSize: '12px',
                          fontWeight: 700,
                          textAlign: 'left',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <span>{qr.text}</span>
                        <ChevronRight size={14} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div style={{ alignSelf: 'flex-start', background: 'var(--white)', padding: '10px 16px', borderRadius: '18px', fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <RefreshCw size={14} className="animate-spin text-primary-green" /> AgroCare Bot is typing answer...
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* INPUT FORM BAR */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleAskQuestion(); }}
            style={{
              padding: '12px 16px',
              background: 'var(--white)',
              borderTop: '1px solid var(--gray-200)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <button
              type="button"
              onClick={handleVoiceInput}
              title="Voice Prompt Assistant"
              style={{
                background: isListeningVoice ? 'var(--pink-accent-dark)' : 'var(--gray-100)',
                color: isListeningVoice ? 'var(--white)' : 'var(--primary-green-dark)',
                border: 'none',
                padding: '10px',
                borderRadius: '50%',
                cursor: 'pointer'
              }}
            >
              <Mic size={18} className={isListeningVoice ? 'animate-pulse' : ''} />
            </button>

            <input
              type="text"
              className="form-input"
              style={{ flex: 1, padding: '10px 14px', fontSize: '14px', borderRadius: 'var(--radius-full)' }}
              placeholder={isListeningVoice ? "Listening to your voice..." : "Type your doubt here..."}
              value={inputText}
              onChange={e => setInputText(e.target.value)}
            />

            <button
              type="submit"
              className="btn btn-primary btn-sm"
              style={{ borderRadius: '50%', padding: '10px', width: '40px', height: '40px' }}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
