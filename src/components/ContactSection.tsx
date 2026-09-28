import React, { useState, useEffect } from 'react';
import { Mail, Send, Check, Copy } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  prefilledTopic?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledTopic
}) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: prefilledTopic ? `專案討論：${prefilledTopic}` : '',
    message: prefilledTopic ? `你好，我在作品集中看到「${prefilledTopic}」，想進一步了解...` : ''
  });

  useEffect(() => {
    if (prefilledTopic) {
      setFormData(prev => ({
        ...prev,
        topic: `專案討論：${prefilledTopic}`,
        message: `你好，我在作品集中看到「${prefilledTopic}」，想進一步了解相關細節與合作可能。`
      }));
    }
  }, [prefilledTopic]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0A0C0F] text-white border-t border-white/10 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#E5A84B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              {/* Kicker with warm gold bar */}
              <div className="flex items-center gap-2.5 mb-3">
                <span className="inline-block w-6 h-[1.5px] bg-[#E5A84B]"></span>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#E5A84B]">
                  04 / CONTACT &amp; COLLABORATION
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight leading-tight text-white">
                一起聊聊吧<span className="text-[#E5A84B]">。</span>
              </h2>
              <p className="text-xs font-mono uppercase tracking-wider text-stone-500 mt-2">
                LET’S TALK ABOUT IDEAS &amp; OPPORTUNITIES
              </p>
              <p className="mt-4 text-sm md:text-base text-stone-300 leading-relaxed font-sans-clean">
                目前專注於資訊管理系統開發、電腦視覺演算法與跨領域數位體驗設計。無論是職缺面試、專案合作、產學研究探討，或是想交流想法，都非常歡迎隨時與我聯繫。
              </p>
            </div>

            {/* Direct Email Card with 1-click Copy */}
            <div className="p-6 rounded-2xl bg-[#12141A] border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-center justify-between text-xs font-mono-code uppercase tracking-wider text-stone-400">
                <span className="flex items-center gap-2">
                  <Mail size={14} className="text-stone-400" />
                  DIRECT EMAIL · 電子郵件
                </span>
                <span className="text-stone-400 text-[11px] font-sans-clean">點擊一鍵複製</span>
              </div>

              <div className="flex items-center justify-between gap-3 pt-1">
                <a
                  href={`mailto:${PROFILE_INFO.email}`}
                  className="text-base sm:text-lg font-mono-code text-stone-200 hover:text-[#E5A84B] transition-colors truncate font-medium"
                >
                  {PROFILE_INFO.email}
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="複製電子信箱"
                  className={`px-3 py-1.5 rounded-full border text-xs font-mono-code flex items-center gap-1.5 transition-all shrink-0 cursor-pointer ${
                    copied
                      ? 'bg-[#E5A84B] border-[#E5A84B] text-stone-950 font-semibold'
                      : 'bg-white/5 border-white/15 hover:border-[#E5A84B] hover:text-[#E5A84B] text-stone-300'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check size={13} />
                      <span>已複製</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>複製</span>
                    </>
                  )}
                </button>
              </div>

              {copied && (
                <div className="text-xs font-mono-code text-[#E5A84B] pt-1 flex items-center gap-1.5 animate-fadeIn">
                  <span>✓</span> 信箱已複製至剪貼簿，期待您的來信！
                </div>
              )}
            </div>

            {/* Availability */}
            <div className="space-y-3 text-xs text-stone-400">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#12141A]/50">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-stone-300 font-sans-clean">
                  現階段開放：全職軟體開發、跨域 UI/UX 設計與產學研究交流
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-[#12141A] border border-white/10 shadow-xl">
              <h3 className="text-lg font-bold font-sans-clean text-white mb-6 flex items-center justify-between">
                <span>傳送線上訊息</span>
                <span className="text-xs font-mono-code font-normal text-stone-400">DIRECT INBOX</span>
              </h3>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#E5A84B]/10 text-[#E5A84B] flex items-center justify-center mx-auto border border-[#E5A84B]/30">
                    <Check size={28} />
                  </div>
                  <h4 className="text-xl font-bold font-sans-clean text-white">訊息已成功傳送！</h4>
                  <p className="text-sm text-stone-400 max-w-sm mx-auto font-sans-clean">
                    感謝您的留言，我會在第一時間確認並主動回信與您聯繫。
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', topic: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2 rounded-full border border-white/20 text-xs font-mono-code text-stone-300 hover:text-white hover:border-[#E5A84B] transition-colors"
                  >
                    再發送一則訊息
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-code text-stone-400 mb-2">
                        您的姓名 / 稱呼
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="例：王先生 / 陳小姐"
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0A0C0F] text-white placeholder-stone-600 text-sm focus:outline-none focus:border-[#E5A84B]/80 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono-code text-stone-400 mb-2">
                        電子郵件信箱
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0A0C0F] text-white placeholder-stone-600 text-sm focus:outline-none focus:border-[#E5A84B]/80 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-stone-400 mb-2">
                      洽詢主題
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      placeholder="例：職缺面試、專案合作洽詢"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0A0C0F] text-white placeholder-stone-600 text-sm focus:outline-none focus:border-[#E5A84B]/80 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-stone-400 mb-2">
                      訊息內容
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="請簡單說明您的需求、想法或想進一步探討的內容..."
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0A0C0F] text-white placeholder-stone-600 text-sm focus:outline-none focus:border-[#E5A84B]/80 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full font-sans-clean font-semibold text-xs tracking-wider uppercase transition-all duration-200 bg-[#E5A84B] text-stone-950 hover:bg-[#d9993e] hover:shadow-lg hover:shadow-[#E5A84B]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>傳送中...</span>
                    ) : (
                      <>
                        <span>確認送出訊息</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
