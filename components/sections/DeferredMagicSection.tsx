"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";

// 🍏 외부 URL 대신 로컬 public 폴더의 이미지 경로로 변경
const DOG_PHOTOS = {
  print: "/images/img_01.png", // 첫 번째 흑백 사진 (보증서용)
  web: "/images/img_02.png",   // 웹 티저용 블러 처리된 사진
  app: "/images/img_03.png"    // 앱 내 최종 컴프 카드 사진
};

const steps = [
  {
    id: "scan",
    title: "1. The Certificate Scan",
    // 🍏 하드웨어 제약을 하이엔드 스토리텔링으로 승화시킨 카피
    desc: "출력되는 두 장 중 하나는 온전한 '작품'으로, 다른 하나는 디지털 금고를 여는 '보증서(Certificate)'로 제공됩니다. 보증서 하단의 QR을 스캔하세요.",
    color: "#86868b",
    glow: "rgba(255,255,255,0.1)"
  },
  {
    id: "teaser",
    title: "2. The Teaser Hook",
    desc: "웹에서는 오직 1장의 고퀄러티 사진만 제공됩니다. '멍스널컬러 리포트'와 '고화질 원본'은 블러 처리되어 앱 설치를 강렬하게 유도합니다.",
    color: "#0071e3",
    glow: "rgba(0,113,227,0.2)"
  },
  {
    id: "deferred",
    title: "3. Deferred Deep Link",
    desc: "앱 설치 후 최초 실행 순간, 마법이 일어납니다. 별도의 연동 작업 없이, 방금 찍은 사진과 데이터가 이미 내 계정에 완벽하게 동기화되어 있습니다.",
    color: "#FFD700",
    glow: "rgba(255,215,0,0.2)"
  }
];

export default function DeferredMagicSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section bg-black text-white overflow-hidden">
      <div className="container">
        
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="kicker">Frictionless Onboarding</span>
            <h2 className="fw-heading">가입 폼은 없습니다.<br/>마법만 존재할 뿐입니다.</h2>
            <p className="fw-lead">Deferred Deep Link 기술이 구현하는 이탈률 0%의 데이터 동기화 플로우.</p>
          </div>
        </ScrollReveal>

        <div className="magic-layout">
          
          <div className="steps-container">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div 
                  key={step.id} 
                  className={`step-item ${isActive ? "active" : ""}`}
                  onClick={() => setActiveStep(idx)}
                  style={{ '--active-color': step.color } as React.CSSProperties}
                >
                  <div className="step-progress">
                    <div className="progress-bar" style={{ animationDuration: isActive ? '4s' : '0s' }} />
                  </div>
                  <div className="step-content">
                    <h3 className="step-title">{step.title}</h3>
                    <div className="step-desc-wrapper">
                      <p className="step-desc">{step.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            
            <div className="vip-note">
              <Icon name="spark" />
              <div>
                <strong>기존 회원이신가요?</strong>
                <p>매장 진입 시 Apple Wallet의 VIP 바코드로 키오스크에 체크인하세요. 촬영 후 사진이 Vault로 자동 전송됩니다.</p>
              </div>
            </div>
          </div>

          <div className="phone-container">
            <ScrollReveal delay={200}>
              <div className="phone-mockup" style={{ boxShadow: `0 30px 80px ${steps[activeStep].glow}, inset 0 0 20px rgba(255,255,255,0.05)` }}>
                <div className="camera-notch" />
                
                <div className="screen">
                  {/* Screen 1: Scan (🍏 앞면 QR 보증서 디자인으로 변경) */}
                  <div className={`screen-view ${activeStep === 0 ? "active" : ""}`}>
                    <div className="camera-view">
                      <div className="print-paper">
                        <div className="print-photo" style={{ backgroundImage: `url(${DOG_PHOTOS.print})` }} />
                        
                        {/* 🍏 보증서 하단 레이아웃 (로고 + QR) */}
                        <div className="certificate-footer">
                          <div className="cert-logo">LUMEN<br/><span>CERTIFIED</span></div>
                          <div className="qr-code">
                            <Icon name="qr" />
                          </div>
                        </div>
                      </div>
                      <div className="scan-reticle" />
                      <div className="scan-toast">Open "LUMEN" link</div>
                    </div>
                  </div>

                  {/* Screen 2: Teaser Web */}
                  <div className={`screen-view ${activeStep === 1 ? "active" : ""}`}>
                    <div className="safari-header">
                      <div className="url-bar">lumen.agency/c/1x9aF</div>
                    </div>
                    <div className="web-content">
                      <div className="web-photo" style={{ backgroundImage: `url(${DOG_PHOTOS.web})` }} />
                      <div className="blurred-section">
                        <Icon name="copy" />
                        <span>멍스널컬러 리포트 잠금 됨</span>
                      </div>
                      <button className="download-btn">LUMEN 앱에서 원본 받기</button>
                    </div>
                  </div>

                  {/* Screen 3: Deferred Deep Link App Sync */}
                  <div className={`screen-view ${activeStep === 2 ? "active" : ""}`}>
                    <div className="app-splash" />
                    <div className="app-content">
                      <div className="sync-toast">
                        <div className="check-icon">✓</div>
                        Sync Complete
                      </div>
                      <div className="comp-card-reveal">
                        <div className="cc-image" style={{ backgroundImage: `url(${DOG_PHOTOS.app})` }} />
                        <div className="cc-text">
                          <div className="cc-title" />
                          <div className="cc-sub" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      <style jsx>{`
        /* ... 기존 스타일 유지 ... */
        .text-center { text-align: center; margin-bottom: 80px; }
        .kicker { font-size: 12px; font-weight: 800; color: #a1a1a6; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px; display: block; }
        .fw-heading { font-size: 44px; font-weight: 800; margin: 0 0 16px; letter-spacing: -0.02em; line-height: 1.2; text-wrap: balance; }
        .fw-lead { font-size: 20px; color: #86868b; }

        .magic-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; max-width: 1000px; margin: 0 auto; }

        .steps-container { display: flex; flex-direction: column; gap: 16px; }
        .step-item { display: flex; gap: 24px; padding: 24px; border-radius: 24px; cursor: pointer; transition: all 0.4s ease; border: 1px solid transparent; background: transparent; }
        .step-item.active { background: rgba(255,255,255,0.03); border-color: rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        .step-item:not(.active):hover { background: rgba(255,255,255,0.02); }

        .step-progress { width: 4px; border-radius: 4px; background: rgba(255,255,255,0.1); overflow: hidden; position: relative; flex-shrink: 0; }
        .progress-bar { width: 100%; height: 0%; background: var(--active-color); }
        .step-item.active .progress-bar { animation: progress-fill linear forwards; }
        @keyframes progress-fill { 0% { height: 0%; } 100% { height: 100%; } }

        .step-content { flex: 1; }
        .step-title { font-size: 22px; font-weight: 700; color: #86868b; margin: 0 0 8px; transition: color 0.4s; }
        .step-item.active .step-title { color: #fff; }
        
        .step-desc-wrapper { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.4s ease; }
        .step-item.active .step-desc-wrapper { grid-template-rows: 1fr; }
        .step-desc { overflow: hidden; font-size: 15px; color: #a1a1a6; line-height: 1.6; margin: 0; word-break: keep-all; }
        .step-item.active .step-desc { padding-top: 8px; }

        .vip-note { margin-top: 32px; padding: 24px; background: linear-gradient(145deg, rgba(255,215,0,0.1), transparent); border-radius: 20px; border: 1px solid rgba(255,215,0,0.2); display: flex; gap: 16px; align-items: flex-start; }
        .vip-note svg { color: #FFD700; flex-shrink: 0; width: 24px; height: 24px; }
        .vip-note strong { display: block; color: #FFD700; font-size: 14px; margin-bottom: 8px; }
        .vip-note p { font-size: 13px; color: #a1a1a6; line-height: 1.5; margin: 0; word-break: keep-all; }

        .phone-container { display: flex; justify-content: center; }
        .phone-mockup { width: 320px; height: 650px; background: #111; border-radius: 48px; border: 12px solid #222; position: relative; overflow: hidden; transition: box-shadow 0.8s ease; }
        .camera-notch { position: absolute; top: 10px; left: 50%; transform: translateX(-50%); width: 100px; height: 24px; background: #000; border-radius: 12px; z-index: 50; }
        
        .screen { position: relative; width: 100%; height: 100%; background: #000; }
        .screen-view { position: absolute; inset: 0; opacity: 0; transform: scale(0.95) translateY(10px); transition: all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1); pointer-events: none; }
        .screen-view.active { opacity: 1; transform: scale(1) translateY(0); pointer-events: auto; }

        /* 🍏 View 1: Camera Scan (보증서 스타일 업데이트) */
        .camera-view { width: 100%; height: 100%; background: #1a1a1a; display: flex; justify-content: center; align-items: center; position: relative; }
        .print-paper { width: 220px; height: 320px; background: #fdfbf7; border-radius: 4px; box-shadow: 0 20px 40px rgba(0,0,0,0.5); display: flex; flex-direction: column; padding: 12px; transform: rotate(-3deg); }
        .print-photo { width: 100%; flex: 1; background-color: #e5e5e5; background-size: cover; background-position: center; border-radius: 2px; filter: grayscale(100%); }
        
        .certificate-footer { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 12px; padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.1); }
        .cert-logo { font-family: 'Georgia', serif; font-size: 14px; font-weight: 800; color: #111; line-height: 1.1; letter-spacing: 1px; }
        .cert-logo span { font-family: sans-serif; font-size: 8px; font-weight: 600; color: #888; letter-spacing: 2px; }
        .qr-code { width: 44px; height: 44px; color: #000; display: flex; justify-content: center; align-items: center; border: 2px solid #000; border-radius: 4px; padding: 2px; }
        .qr-code svg { width: 100%; height: 100%; }

        .scan-reticle { position: absolute; width: 120px; height: 120px; border: 2px solid rgba(255,215,0,0.8); border-radius: 20px; top: 60%; transform: translateY(-50%); animation: pulse-reticle 2s infinite; }
        @keyframes pulse-reticle { 0%, 100% { transform: translateY(-50%) scale(1); opacity: 0.8; } 50% { transform: translateY(-50%) scale(1.05); opacity: 0.4; } }
        .scan-toast { position: absolute; top: 60px; background: #FFD700; color: #000; padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 700; box-shadow: 0 4px 12px rgba(255,215,0,0.4); animation: toast-drop 0.5s 1s forwards; opacity: 0; transform: translateY(-20px); }
        @keyframes toast-drop { to { opacity: 1; transform: translateY(0); } }

        /* View 2: Teaser Web */
        .safari-header { height: 80px; background: rgba(30,30,30,0.9); backdrop-filter: blur(10px); padding-top: 40px; display: flex; justify-content: center; border-bottom: 1px solid #333; }
        .url-bar { background: #000; color: #86868b; font-size: 12px; padding: 6px 40px; border-radius: 12px; height: 28px; display: flex; align-items: center; }
        .web-content { padding: 24px; display: flex; flex-direction: column; gap: 16px; height: calc(100% - 80px); background: #111; }
        .web-photo { width: 100%; height: 200px; background-color: #333; background-size: cover; background-position: center; border-radius: 12px; filter: grayscale(100%); }
        .blurred-section { width: 100%; height: 120px; background: rgba(255,255,255,0.05); border-radius: 12px; backdrop-filter: blur(8px); display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 8px; color: #86868b; font-size: 12px; border: 1px solid rgba(255,255,255,0.1); position: relative; overflow: hidden; }
        .blurred-section::after { content: ""; position: absolute; inset: 0; background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.2) 10px, rgba(0,0,0,0.2) 20px); }
        .download-btn { margin-top: auto; background: #0071e3; color: #fff; border: none; padding: 16px; border-radius: 16px; font-size: 15px; font-weight: 700; margin-bottom: 24px; cursor: pointer; animation: bounce-btn 2s infinite; }
        @keyframes bounce-btn { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }

        /* View 3: Deferred Deep Link Sync */
        .app-splash { position: absolute; inset: 0; background: #000; z-index: 10; animation: fade-out 1s 0.5s forwards; }
        @keyframes fade-out { to { opacity: 0; visibility: hidden; } }
        .app-content { width: 100%; height: 100%; background: #000; padding: 60px 24px 24px; display: flex; flex-direction: column; align-items: center; }
        .sync-toast { background: rgba(52,199,89,0.1); color: #34C759; border: 1px solid rgba(52,199,89,0.3); padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 700; display: flex; align-items: center; gap: 8px; margin-bottom: 40px; animation: slide-down 0.5s 1.5s both; }
        .check-icon { background: #34C759; color: #000; width: 16px; height: 16px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 10px; }
        @keyframes slide-down { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        
        .comp-card-reveal { width: 100%; height: 350px; background: linear-gradient(145deg, #fdfbf7, #e8e2d2); border-radius: 20px; padding: 16px; display: flex; flex-direction: column; gap: 16px; animation: card-pop 0.8s 1.8s both cubic-bezier(0.175, 0.885, 0.32, 1.275); box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
        @keyframes card-pop { from { opacity: 0; transform: scale(0.8) translateY(40px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .cc-image { width: 100%; flex: 1; background-color: #333; background-size: cover; background-position: center; border-radius: 12px; filter: grayscale(100%); }
        .cc-title { width: 60%; height: 24px; background: rgba(0,0,0,0.8); border-radius: 4px; margin-bottom: 8px; }
        .cc-sub { width: 40%; height: 12px; background: rgba(0,0,0,0.4); border-radius: 4px; }

        @media (max-width: 900px) {
          .magic-layout { grid-template-columns: 1fr; gap: 40px; }
          .fw-heading { font-size: 32px; }
          .phone-container { order: -1; } 
        }
      `}</style>
    </section>
  );
}