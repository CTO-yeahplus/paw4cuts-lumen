"use client";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";

export default function CompCardSection() {
  return (
    <section className="section bg-black text-white overflow-hidden">
      <div className="container layout-split">
        
        {/* Left: Text Manifesto */}
        <div className="text-col">
          <ScrollReveal>
            <div className="kicker-badge">The Handoff Experience</div>
            <h2 className="title">
              한 번의 스캔,<br />
              <span className="text-gold">영원한 자산.</span>
            </h2>
            <p className="desc">
              가입 폼을 채울 필요가 없습니다. 인화지 하단의 QR 코드를 스캔하는 순간, 
              본질에 집중한 흑백 사진과 AI가 분석한 멍스널컬러 데이터가 결합되어 당신의 앱에 
              <b> '하이엔드 디지털 컴프 카드(Comp Card)'</b>로 영구히 보존됩니다.
            </p>
          </ScrollReveal>
        </div>

        {/* Right: Phone & Scanning Magic */}
        <div className="visual-col">
          <ScrollReveal delay={200}>
            <div className="phone-mockup">
              <div className="camera-notch" />
              
              {/* Screen Content */}
              <div className="screen">
                {/* Simulated Scanning Laser */}
                <div className="scan-laser" />
                
                {/* 멍스널컬러 AI 배경 (은은하게 빛남) */}
                <div className="comp-bg" />
                
                {/* 흑백 피사체와 타이포그래피 레이아웃 */}
                <div className="comp-content">
                  <div className="comp-header">LUMEN AGENCY</div>
                  <div className="portrait-frame">
                    <div className="bw-portrait" />
                  </div>
                  <div className="comp-typography">
                    <h1>COCO</h1>
                    <p className="breed">Maltipoo · 3.2kg</p>
                    <div className="color-palette">
                      <span className="color-dot c1" />
                      <span className="color-dot c2" />
                      <span className="color-dot c3" />
                      <span className="color-label">Warm Ivory & Deep Onyx</span>
                    </div>
                  </div>
                  <button className="ar-button"><Icon name="spark" /> Bring to Life in AR</button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style jsx>{`
        .layout-split { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .kicker-badge { font-size: 12px; font-weight: 700; color: #a1a1a6; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 24px; border: 1px solid #333; padding: 6px 12px; border-radius: 99px; width: fit-content; }
        .title { font-size: 48px; font-weight: 800; line-height: 1.1; margin-bottom: 24px; letter-spacing: -0.02em; }
        .text-gold { background: linear-gradient(135deg, #FFD700 0%, #FDB931 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .desc { font-size: 18px; color: #86868b; line-height: 1.6; word-break: keep-all; max-width: 480px; }
        .desc b { color: #fff; }

        /* Phone Mockup */
        .visual-col { display: flex; justify-content: center; position: relative; }
        .phone-mockup { width: 320px; height: 650px; background: #111; border-radius: 48px; border: 12px solid #222; box-shadow: 0 40px 100px rgba(0,0,0,0.8), inset 0 0 20px rgba(255,255,255,0.1); position: relative; overflow: hidden; }
        .camera-notch { position: absolute; top: 10px; left: 50%; transform: translateX(-50%); width: 100px; height: 24px; background: #000; border-radius: 12px; z-index: 20; }
        .screen { position: relative; width: 100%; height: 100%; background: #000; overflow: hidden; }

        /* Animation */
        .scan-laser { position: absolute; top: -100px; left: 0; width: 100%; height: 100px; background: linear-gradient(to bottom, transparent, rgba(255,215,0,0.4)); border-bottom: 2px solid #FFD700; z-index: 10; animation: scan 4s ease-in-out infinite; }
        @keyframes scan { 0%, 100% { transform: translateY(-50px); opacity: 0; } 50% { transform: translateY(700px); opacity: 1; } }

        /* Comp Card Design */
        .comp-bg { position: absolute; inset: 0; background: linear-gradient(145deg, #fdfbf7, #e8e2d2); filter: blur(20px); opacity: 0.9; animation: breathe 6s infinite alternate; }
        @keyframes breathe { from { transform: scale(1); } to { transform: scale(1.05); } }
        
        .comp-content { position: absolute; inset: 0; display: flex; flex-direction: column; padding: 40px 24px 30px; z-index: 5; }
        .comp-header { font-size: 10px; font-weight: 800; letter-spacing: 3px; color: #555; text-align: center; margin-bottom: 20px; }
        
        .portrait-frame { flex: 1; border-radius: 16px; overflow: hidden; position: relative; margin-bottom: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
        .bw-portrait { width: 100%; height: 100%; background: url('https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop') center/cover; filter: grayscale(100%) contrast(120%); }
        
        .comp-typography h1 { font-family: 'Georgia', serif; font-size: 42px; font-weight: 400; color: #111; margin: 0; letter-spacing: -1px; }
        .breed { font-size: 13px; color: #555; font-weight: 500; margin: 4px 0 16px; letter-spacing: 0.5px; }
        
        .color-palette { display: flex; align-items: center; gap: 8px; margin-bottom: 30px; }
        .color-dot { width: 16px; height: 16px; border-radius: 50%; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        .c1 { background: #fdfbf7; border: 1px solid #ddd; }
        .c2 { background: #d4cfc1; }
        .c3 { background: #222; }
        .color-label { font-size: 11px; font-weight: 700; color: #555; letter-spacing: 1px; }

        .ar-button { background: rgba(0,0,0,0.8); color: #FFD700; border: none; padding: 14px; border-radius: 16px; font-size: 14px; font-weight: 700; display: flex; justify-content: center; align-items: center; gap: 8px; cursor: pointer; backdrop-filter: blur(10px); transition: transform 0.2s; }
        .ar-button:hover { transform: scale(0.98); background: #000; }

        @media (max-width: 900px) { .layout-split { grid-template-columns: 1fr; gap: 40px; text-align: center; } .kicker-badge { margin: 0 auto 24px; } .desc { margin: 0 auto; } }
      `}</style>
    </section>
  );
}