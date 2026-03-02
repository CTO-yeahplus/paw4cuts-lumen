"use client";

import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";

const steps = [
  {
    phase: "01. Acquisition",
    titleKo: "오프라인 획득",
    titleEn: "The Trojan Horse",
    desc: "친숙한 '견생네컷' 부스로 진입 장벽을 낮추고, 압도적 퀄리티의 고퀄러티 에셋과 AI 멍스널컬러 데이터를 무료로 추출합니다.",
    icon: "qr", 
    color: "#FF9500", // Orange
    glow: "rgba(255, 149, 0, 0.4)"
  },
  {
    phase: "02. Lock-in",
    titleKo: "데이터 락인",
    titleEn: "The Digital Vault",
    desc: "스캔 한 번으로 앱에 저장된 고품질 에셋. 시간이 흐를수록 쌓이는 '시네마틱 메모리'는 생태계 이탈을 막는 거대한 자물쇠가 됩니다.",
    icon: "copy", 
    color: "#0071e3", // Blue
    glow: "rgba(0, 113, 227, 0.4)"
  },
  {
    phase: "03. Monetization",
    titleKo: "무재고 수익 창출",
    titleEn: "Asset-Light Commerce",
    desc: "재고 0%. 컴프 카드를 AR로 렌더링한 POD 굿즈부터, 멍스널컬러 기반의 명품 펫 의류, 생일 패키지까지 도파민 최고상태에서 구독하게 만듭니다.",
    icon: "gift", 
    color: "#AF52DE", // Purple
    glow: "rgba(175, 82, 222, 0.4)"
  },
  {
    phase: "04. IP Agency",
    titleKo: "B2B 자산화",
    titleEn: "The IP Agency",
    desc: "수십만 장의 하이엔드 펫 프로필 DB. 소비자를 명품 브랜드의 모델(IP)로 발탁시키며 B2B 에이전시 수수료를 창출합니다.",
    icon: "people", 
    color: "#34C759", // Green
    glow: "rgba(52, 199, 89, 0.4)"
  }
];

export default function FlywheelSection() {
  return (
    <section className="section bg-black text-white overflow-hidden">
      <div className="container">
        
        <div className="text-center mb-24">
          <ScrollReveal>
            <h2 className="fw-heading">The Infinity Flywheel</h2>
            <p className="fw-lead">단 하나의 누수도 허용하지 않는 무한 성장 생태계.</p>
          </ScrollReveal>
        </div>

        {/* 🔄 Dynamic Flow System */}
        <div className="flywheel-wrapper">
          
          {/* ⚡ The Energy Track (연결선) - 속도 가속 */}
          <div className="track-line">
            <div className="track-glow" />
          </div>

          <div className="flywheel-grid">
            {steps.map((s, i) => (
              <div 
                key={i} 
                className="step-card"
                style={{
                  '--accent-color': s.color,
                  '--accent-glow': s.glow,
                  //'--seq-delay': `${(i * 0.15) + 0.3}s`, // 🟢 1. 스크롤 등장 시 순차적 팝업 딜레이
                  '--loop-delay': `${i * 1.5}s`          // 🟢 2. 지속적인 무한 순환 딜레이
                } as React.CSSProperties}
              >
                <div className="card-bg-glow" style={{ background: s.color }} />
                
                {/* 🟢 아이콘: 순차적 팝업 애니메이션 적용 */}
                <div className="icon-box" style={{ color: s.color, borderColor: s.color }}>
                  <Icon name={s.icon} />
                  <div className="icon-pulse" style={{ border: `2px solid ${s.color}` }} />
                </div>
                
                <div className="phase-text" style={{ color: s.color }}>{s.phase}</div>
                
                {/* 타이틀: 한글 + 영문 조합 */}
                <h3 className="step-title">
                  <span className="title-ko">{s.titleKo}</span>
                  <span className="title-en">{s.titleEn}</span>
                </h3>
                
                <p className="step-desc">{s.desc}</p>
                
                {/* 다음 단계로 넘어가는 화살표 */}
                {i < steps.length - 1 && (
                  <div className="next-arrow" style={{ color: s.color }}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 🍎 The Ultimate Moat Card */}
        <ScrollReveal delay={400}>
          <div className="moat-box">
            <div className="moat-icon"><Icon name="spark" /></div>
            <h3>The Ultimate Moat</h3>
            <p>
              경쟁사가 천문학적인 돈을 들여 더 예쁜 사진 기계를 만들 수는 있습니다.<br />
              하지만 그들은 <b>"LUMEN 앱 속 3년 치 인생 기록과 멍스널컬러 데이터, <br/>그리고 모델 캐스팅의 자격"</b>은 절대 훔쳐 갈 수 없습니다.
            </p>
            <div className="divider" />
            <p className="moat-sub">이것이 우리 비즈니스가 펫 산업을 지배하게 될 완벽한 선순환 전략입니다.</p>
          </div>
        </ScrollReveal>

      </div>

      <style jsx>{`
        .text-center { text-align: center; margin-bottom: 80px; position: relative; z-index: 2; }
        .fw-heading { font-size: 40px; font-weight: 800; margin-bottom: 16px; letter-spacing: -0.02em; }
        .fw-lead { font-size: 20px; color: #86868b; }

        /* 🔄 Flywheel Layout & Flow Track */
        .flywheel-wrapper { position: relative; margin-bottom: 100px; padding-top: 20px; }
        
        .track-line {
          position: absolute;
          top: 60px;
          left: 10%; right: 10%;
          height: 2px;
          background: rgba(255,255,255,0.05);
          z-index: 0;
          border-radius: 2px;
        }
        
        /* 🟢 흐르는 빛 (가속됨: 6초 -> 2.5초) */
        .track-glow {
          position: absolute; top: -1px; left: 0;
          width: 25%; height: 4px;
          background: linear-gradient(90deg, transparent, #fff, transparent);
          box-shadow: 0 0 15px #fff;
          border-radius: 4px;
          animation: shoot 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes shoot { 0% { left: -20%; opacity: 0; } 10%, 90% { opacity: 1; } 100% { left: 120%; opacity: 0; } }

        .flywheel-grid { 
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; 
          position: relative; z-index: 1; 
        }
        
        /* Step Cards */
        .step-card { 
          background: rgba(20,20,22,0.6); 
          border: 1px solid rgba(255,255,255,0.05); 
          border-radius: 24px; padding: 32px 24px; 
          position: relative; overflow: visible; 
          height: 100%; display: flex; flex-direction: column; 
          backdrop-filter: blur(20px);
          animation: card-pulse 6s infinite; 
          animation-delay: var(--loop-delay); /* 무한 반복 딜레이 */
        }
        
        @keyframes card-pulse {
          0%, 100% { border-color: rgba(255,255,255,0.05); box-shadow: none; transform: translateY(0); }
          5% { border-color: var(--accent-color); box-shadow: 0 10px 40px var(--accent-glow); transform: translateY(-8px); }
          25% { border-color: rgba(255,255,255,0.1); box-shadow: 0 5px 20px rgba(0,0,0,0.5); transform: translateY(0); }
        }

        .card-bg-glow { position: absolute; top: -50px; left: -50px; width: 100px; height: 100px; filter: blur(60px); opacity: 0.15; border-radius: 50%; z-index: -1; }
        
        /* 🟢 Icons (초기 순차적 팝업 + 이후 펄스) */
        .icon-box { 
          width: 56px; height: 56px; border-radius: 16px; 
          background: #000; 
          display: flex; justify-content: center; align-items: center; 
          margin-bottom: 24px; position: relative;
          box-shadow: 0 4px 20px rgba(0,0,0,0.5);
          /* 첫 등장 애니메이션 */
          animation: icon-entrance 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
          animation-delay: var(--seq-delay);
        }

        @keyframes icon-entrance {
          0% { transform: scale(0.5); opacity: 0; box-shadow: 0 0 0 transparent; }
          60% { transform: scale(1.2); opacity: 1; box-shadow: 0 10px 30px var(--accent-glow); }
          100% { transform: scale(1); opacity: 1; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
        }

        /* 펄스(심장 박동) 테두리: 카드 무한 루프 딜레이와 동기화 */
        .icon-pulse {
          position: absolute; inset: -4px; border-radius: 20px;
          animation: ring-pulse 6s infinite;
          animation-delay: var(--loop-delay);
        }
        @keyframes ring-pulse {
          0%, 100% { transform: scale(1); opacity: 0; }
          5% { transform: scale(1.3); opacity: 0.8; }
          15% { transform: scale(1.5); opacity: 0; }
        }

        /* Typography */
        .phase-text { font-size: 11px; font-weight: 800; letter-spacing: 1.5px; margin-bottom: 12px; text-transform: uppercase; }
        
        .step-title { display: flex; flex-direction: column; gap: 4px; margin: 0 0 16px; }
        .title-ko { font-size: 18px; font-weight: 800; color: #fff; }
        .title-en { font-size: 14px; font-weight: 600; color: var(--accent-color); font-family: 'Georgia', serif; font-style: italic; opacity: 0.9; }
        
        .step-desc { font-size: 15px; color: #a1a1a6; line-height: 1.6; word-break: keep-all; margin: 0; }

        /* Flow Arrow Between Cards (속도 가속) */
        .next-arrow {
          position: absolute; right: -24px; top: 48px;
          transform: translateY(-50%);
          width: 24px; height: 24px;
          display: flex; justify-content: center; align-items: center;
          opacity: 0;
          animation: arrow-fade 2.5s infinite;
          animation-delay: var(--seq-delay);
          z-index: 10;
        }
        @keyframes arrow-fade {
          0%, 100% { opacity: 0; transform: translateY(-50%) translateX(-10px); }
          50% { opacity: 1; transform: translateY(-50%) translateX(5px); }
        }

        /* 🍎 Moat Box */
        .moat-box { background: linear-gradient(145deg, #1d1d1f, #000); border: 1px solid rgba(255,255,255,0.1); border-radius: 32px; padding: 60px 40px; text-align: center; box-shadow: 0 20px 80px rgba(0,0,0,0.6); position: relative; overflow: hidden; }
        .moat-box::before { content: ""; position: absolute; top: -50%; left: 50%; transform: translateX(-50%); width: 100%; height: 100%; background: radial-gradient(ellipse, rgba(255, 215, 0, 0.1) 0%, transparent 60%); pointer-events: none; z-index: 0; }
        
        .moat-icon { color: #FFD700; display: flex; justify-content: center; margin-bottom: 24px; animation: float 4s infinite ease-in-out; position: relative; z-index: 1; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        
        .moat-box h3 { font-size: 32px; font-weight: 800; color: #fff; margin: 0 0 24px; letter-spacing: -0.02em; position: relative; z-index: 1; }
        .moat-box p { font-size: 18px; color: #d2d2d7; line-height: 1.7; margin: 0; word-break: keep-all; position: relative; z-index: 1; }
        .moat-box b { color: #FFD700; font-weight: 700; background: rgba(255,215,0,0.1); padding: 2px 6px; border-radius: 4px; }
        
        .divider { width: 60px; height: 1px; background: rgba(255,255,255,0.2); margin: 32px auto; position: relative; z-index: 1; }
        .moat-sub { font-size: 15px !important; color: #86868b !important; }

        @media (max-width: 1024px) { 
          .flywheel-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; } 
          .track-line { display: none; }
          .next-arrow { display: none; }
        }
        @media (max-width: 600px) { 
          .flywheel-grid { grid-template-columns: 1fr; } 
          .moat-box { padding: 40px 20px; } 
          .moat-box h3 { font-size: 24px; } 
          .moat-box p { font-size: 16px; } 
        }
      `}</style>
    </section>
  );
}