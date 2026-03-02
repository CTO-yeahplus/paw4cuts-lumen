"use client";

import { useEffect, useState, useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // 섹션 내 스크롤 진행률 계산 (0 ~ 1)
      let p = (windowHeight - top) / (windowHeight + height);
      p = Math.min(Math.max(p, 0), 1);
      setProgress(p);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="hero-cinematic">
      <div className="sticky-wrapper">
        <div className="kicker">LUMEN · A New Standard for 견생네컷 Paw4Cuts</div>
        
        {/* Scene 1: 기존의 인식을 부정 */}
        <div 
          className="msg-layer"
          style={{ 
            opacity: progress < 0.25 ? 1 : Math.max(0, 1 - (progress - 0.25) * 5), 
            transform: `translate(-50%, -50%) scale(${1 - progress * 0.2})`,
            filter: `blur(${Math.max(0, (progress - 0.2) * 30)}px)`
          }}
        >
          <h1 className="hero-title">
            사진을 찍지<br />마십시오.
          </h1>
        </div>

        {/* Scene 2: 새로운 본질의 제시 */}
        <div 
          className="msg-layer"
          style={{ 
            opacity: Math.min(1, Math.max(0, (progress - 0.4) * 4)),
            transform: `translate(-50%, -50%) scale(${1.5 - (Math.min(1, Math.max(0, (progress - 0.4) * 2)) * 0.5)})`,
            filter: `blur(${Math.max(0, (0.6 - progress) * 20)}px)`
          }}
        >
          <h1 className="hero-title accent">
            함께한 시간을<br />기록하십시오.
          </h1>
        </div>

        {/* Sub Text: 철학의 설명 */}
        <p className="sub-text" style={{ opacity: Math.min(1, Math.max(0, (progress - 0.65) * 5)) }}>
          단순한 네 컷이 아닙니다.<br/>
          내 아이의 가장 눈부신 시절을 영구히 소장하는 <b>'완벽한 의식(Ritual)'</b>입니다.
        </p>
      </div>

      <style jsx>{`
        .hero-cinematic {
          height: 250vh; /* 충분한 스크롤 공간 확보 */
          position: relative;
          width: 100%;
          background-color: #000;
        }
        .sticky-wrapper {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
        }
        .kicker { 
          position: absolute;
          top: 12%; left: 50%; transform: translateX(-50%);
          font-size: 12px; font-weight: 700; color: #86868b; 
          text-transform: uppercase; letter-spacing: 2px; z-index: 10;
        }
        
        .msg-layer {
          position: absolute;
          top: 50%; left: 50%;
          width: 100%;
          text-align: center;
          pointer-events: none;
          will-change: opacity, transform, filter;
          padding: 0 20px;
        }
        
        .hero-title {
          font-size: clamp(48px, 8vw, 120px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: #ffffff;
          margin: 0;
          white-space: nowrap;
        }
        
        .hero-title.accent {
          background: linear-gradient(135deg, #FFD700 0%, #B8860B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sub-text {
          position: absolute;
          bottom: 15%; left: 50%; transform: translateX(-50%);
          font-size: 22px;
          line-height: 1.6;
          color: #a1a1a6;
          text-align: center;
          width: 90%;
          max-width: 600px;
          transition: opacity 0.5s;
          word-break: keep-all;
        }
        .sub-text b { color: #ffffff; font-weight: 600; }
      `}</style>
    </section>
  );
}