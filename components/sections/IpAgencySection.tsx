"use client";

import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";

const castingModels = [
  { id: 1, name: "COCO", sub: "Maltipoo · 3.2kg", match: "98%", img: "/images/img_04.png" },
  { id: 2, name: "MAX", sub: "Poodle · 4.1kg", match: "95%", img: "/images/img_02.png" },
  { id: 3, name: "BELLA", sub: "Bichon · 5.0kg", match: "92%", img: "/images/img_03.png" },
  { id: 4, name: "LUNA", sub: "Pomeranian · 2.8kg", match: "89%", img: "/images/img_06.png" }
];

export default function IpAgencySection() {
  return (
    <section className="section bg-black text-white overflow-hidden pb-32">
      <div className="container">
        
        <div className="header-block">
          <ScrollReveal>
            <span className="kicker">B2B Assetization: The IP Agency</span>
            <h2 className="title">매니저는 없습니다.<br/>완벽한 매칭 알고리즘만 존재합니다.</h2>
            <p className="lead">수십만 장의 멍스널컬러 DB를 바탕으로 명품 브랜드와 반려견을 0.1초 만에 연결하는 B2B SaaS 에이전시.</p>
          </ScrollReveal>
        </div>

        <div className="agency-layout">
          
          {/* Left: The Hybrid Database Scaling */}
          <ScrollReveal delay={150}>
            <div className="db-panel">
              <div className="panel-header">
                <h3>The Casting DB Tiers</h3>
                <p>오프라인 부스와 온라인 AI가 결합된 대한민국 최대의 하이엔드 펫 모델 풀. 목적에 맞는 완벽한 티어를 제공합니다.</p>
              </div>
              
              <div className="tier-cards">
                {/* 🍏 1. 상위 0.1% 뮤즈 (새로 추가됨) */}
                <div className="tier-card purple">
                  <div className="tier-badge"><Icon name="spark" /> LUMEN Muse</div>
                  <h4>검증된 커머셜 앰버서더</h4>
                  <p>명품 브랜드 캠페인 이력이 있거나 강력한 팬덤을 보유한 최상위 0.1% 프로 모델. 확실한 흥행 보증 수표.</p>
                </div>

                {/* 2. 오프라인 인증 모델 */}
                <div className="tier-card gold">
                  <div className="tier-badge"><Icon name="qr" /> LUMEN Certified</div>
                  <h4>오프라인 스튜디오 출신</h4>
                  <p>견생네컷 부스에서 전문 조명과 렌즈로 촬영된 VIP 모델 풀. 브랜드 섭외 1순위 타겟.</p>
                </div>

                {/* 3. 온라인 스케일업 모델 */}
                <div className="tier-card blue">
                  <div className="tier-badge"><Icon name="copy" /> LUMEN AI Edition</div>
                  <h4>온라인 앱 AI 변환</h4>
                  <p>집에서 찍은 사진도 LUMEN앱에서 터치한번에 흑백 톤과 멍스널컬러를 입혀 컴프 카드로 생성. 무한 스케일업.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: B2B SaaS Dashboard Simulation */}
          <ScrollReveal delay={300}>
            <div className="saas-panel">
              <div className="saas-header">
                <div className="window-controls">
                  <span/><span/><span/>
                </div>
                <div className="saas-title">LUMEN Casting Desk for Partners</div>
              </div>
              
              <div className="saas-body">
                {/* Search / Filter Simulation */}
                <div className="search-bar">
                  <span className="tag">멍스널컬러: Warm Ivory</span>
                  <span className="tag">체중: 5kg 미만</span>
                  <span className="tag">견종: Maltipoo</span>
                  <div className="cursor" />
                </div>
                
                {/* Results Grid Simulation (세로형 컴프카드) */}
                <div className="results-grid">
                  {castingModels.map((model) => (
                    <div key={model.id} className="result-card">
                      <div 
                        className="rc-image" 
                        style={{ 
                          backgroundImage: `url('${model.img}')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundColor: '#333',
                          //filter: 'grayscale(100%)' 
                        }} 
                      />
                      <div className="rc-info">
                        <div className="text-white font-bold text-sm tracking-wide">{model.name}</div>
                        <div className="text-zinc-500 text-xs">{model.sub}</div>
                      </div>
                      <div className="rc-match">{model.match} Match</div>
                    </div>
                  ))}
                </div>
                
                <div className="casting-action">
                  <button className="cast-btn">선택한 모델 캐스팅 제안 보내기</button>
                  <p className="fee-note">섭외 수락 시 20%의 플랫폼 수수료가 청구됩니다.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>

      <style jsx>{`
        .header-block { text-align: center; margin-bottom: 80px; }
        .kicker { font-size: 13px; font-weight: 800; color: #34C759; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px; display: block; }
        .title { font-size: 44px; font-weight: 800; margin: 0 0 20px; letter-spacing: -0.02em; line-height: 1.2; text-wrap: balance; }
        .lead { font-size: 18px; color: #86868b; line-height: 1.6; max-width: 600px; margin: 0 auto; word-break: keep-all; }

        .agency-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: stretch; }

        .db-panel { background: #111; border: 1px solid rgba(255,255,255,0.05); border-radius: 32px; padding: 40px; height: 100%; display: flex; flex-direction: column; }
        .panel-header h3 { font-size: 28px; font-weight: 800; margin: 0 0 16px; color: #fff; }
        .panel-header p { font-size: 16px; color: #a1a1a6; line-height: 1.6; margin: 0 0 32px; word-break: keep-all; }
        
        .tier-cards { display: flex; flex-direction: column; gap: 16px; flex: 1; justify-content: space-between; }
        .tier-card { padding: 24px; border-radius: 20px; position: relative; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); }
        
        /* 🍏 새로운 퍼플(뮤즈) 티어 CSS 추가 */
        .tier-card.purple { background: linear-gradient(145deg, rgba(175,82,222,0.1), transparent); border-color: rgba(175,82,222,0.2); }
        .purple .tier-badge { background: rgba(175,82,222,0.2); color: #AF52DE; }
        
        .tier-card.gold { background: linear-gradient(145deg, rgba(255,215,0,0.1), transparent); border-color: rgba(255,215,0,0.2); }
        .gold .tier-badge { background: rgba(255,215,0,0.2); color: #FFD700; }
        
        .tier-card.blue { background: linear-gradient(145deg, rgba(0,113,227,0.1), transparent); border-color: rgba(0,113,227,0.2); }
        .blue .tier-badge { background: rgba(0,113,227,0.2); color: #0071e3; }
        
        .tier-badge { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 800; padding: 6px 12px; border-radius: 20px; margin-bottom: 12px; }
        .tier-badge svg { width: 14px; height: 14px; }
        
        .tier-card h4 { font-size: 18px; font-weight: 700; color: #fff; margin: 0 0 8px; }
        .tier-card p { font-size: 14px; color: #d2d2d7; line-height: 1.5; margin: 0; word-break: keep-all; }

        .saas-panel { background: #1a1a1c; border: 1px solid #333; border-radius: 32px; height: 100%; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.5); }
        .saas-header { background: #222; padding: 16px 24px; display: flex; align-items: center; border-bottom: 1px solid #333; }
        .window-controls { display: flex; gap: 8px; margin-right: 24px; }
        .window-controls span { width: 12px; height: 12px; border-radius: 50%; background: #444; }
        .window-controls span:nth-child(1) { background: #FF5F56; }
        .window-controls span:nth-child(2) { background: #FFBD2E; }
        .window-controls span:nth-child(3) { background: #27C93F; }
        .saas-title { font-size: 13px; font-weight: 600; color: #86868b; letter-spacing: 1px; }

        .saas-body { padding: 32px; flex: 1; display: flex; flex-direction: column; gap: 24px; }
        .search-bar { background: #000; border: 1px solid #333; border-radius: 12px; padding: 12px 16px; display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
        .tag { background: rgba(52,199,89,0.15); color: #34C759; border: 1px solid rgba(52,199,89,0.3); padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 600; }
        .cursor { width: 2px; height: 16px; background: #fff; animation: blink 1s infinite; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

        .results-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; flex: 1; }
        .result-card { background: #222; border-radius: 12px; padding: 12px; display: flex; flex-direction: column; gap: 12px; position: relative; border: 1px solid transparent; transition: border-color 0.3s; }
        .result-card:hover { border-color: #34C759; }
        
        .rc-image { width: 100%; aspect-ratio: 3 / 4; border-radius: 8px; }
        
        .rc-info { display: flex; flex-direction: column; gap: 2px; }
        .rc-match { position: absolute; top: 16px; right: 16px; background: #34C759; color: #000; font-size: 10px; font-weight: 800; padding: 4px 8px; border-radius: 12px; box-shadow: 0 4px 10px rgba(52,199,89,0.4); }

        .casting-action { margin-top: auto; text-align: center; }
        .cast-btn { width: 100%; background: #34C759; color: #000; border: none; padding: 16px; border-radius: 12px; font-size: 15px; font-weight: 800; cursor: pointer; transition: transform 0.2s; }
        .cast-btn:hover { transform: scale(0.98); }
        .fee-note { font-size: 12px; color: #86868b; margin: 12px 0 0; }

        @media (max-width: 900px) { .agency-layout { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}