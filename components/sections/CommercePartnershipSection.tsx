"use client";

import ScrollReveal from "../ScrollReveal";

export default function CommercePartnershipSection() {
  const pillars = [
    {
      id: "object",
      tag: "White-Label Partnership",
      title: "오브제 Object",
      sub: "거부할 수 없는 POD 굿즈 렌더링",
      desc: "최고급 가죽·금속 공방과 독점 제휴합니다. 고객이 앱에서 AR로 키링을 확인하고 결제하면, 공방이 LUMEN의 이름으로 제작하여 직배송합니다. 우리는 주문(Data)만 토스하고 재고 리스크는 0%로 유지합니다.",
      color: "#FF9500", // Orange
      gradient: "linear-gradient(135deg, rgba(255,149,0,0.2), transparent)"
    },
    {
      id: "curation",
      tag: "AI Stylist Affiliate",
      title: "큐레이션 Curation",
      sub: "멍스널컬러 기반 명품 가상 피팅",
      desc: "하이엔드 펫 패션 브랜드와 드랍쉬핑 제휴를 맺습니다. 10만 마리의 '멍스널컬러' 데이터에 맞춰 가장 완벽한 옷을 AI가 추천하며, 파트너사는 타겟팅된 확실한 구매 전환율을 얻고 우리는 높은 수수료를 취합니다.",
      color: "#0071e3", // Blue
      gradient: "linear-gradient(135deg, rgba(0,113,227,0.2), transparent)"
    },
    {
      id: "heritage",
      tag: "Exclusive Consortium",
      title: "헤리티지 Heritage",
      sub: "생일 패키지 정기 구독 연합",
      desc: "최고급 파티세리(수제 케이크 장인)와 독점 컨소시엄을 구성합니다. 파트너는 매월 확정된 LUMEN VIP들의 생일 명단과 선결제 대금을 보장받으며, 오직 우리 고객만을 위한 프라이빗 패키지를 제공합니다.",
      color: "#AF52DE", // Purple
      gradient: "linear-gradient(135deg, rgba(175,82,222,0.2), transparent)"
    }
  ];

  return (
    <section className="section bg-black text-white overflow-hidden pb-32">
      <div className="container">
        
        <ScrollReveal>
          <div className="header-block">
            <span className="kicker">Asset-Light Commerce</span>
            <h2 className="title">재고는 남기지 않습니다.<br/>수요를 지배할 뿐입니다.</h2>
            <p className="lead">LUMEN은 직접 제조하지 않는 검증된 플랫폼입니다.<br/>우리가 보유한 압도적인 데이터로 최고의 파트너를 큐레이션합니다.</p>
          </div>
        </ScrollReveal>

        {/* 🍏 Bento Box Grid Layout */}
        <div className="bento-grid">
          {pillars.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 150}>
              <div className="bento-card" style={{ background: item.gradient }}>
                <div className="card-inner">
                  <span className="card-tag" style={{ color: item.color, borderColor: item.color }}>{item.tag}</span>
                  <h3 className="card-title">{item.title}</h3>
                  <h4 className="card-sub">{item.sub}</h4>
                  <p className="card-desc">{item.desc}</p>
                </div>
                {/* Visual Graphic Element (Abstract) */}
                <div className="card-graphic">
                  <div className="graphic-circle" style={{ borderColor: item.color, boxShadow: `0 0 40px ${item.color}40` }} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 🍏 The Reverse Pitch Banner */}
        <ScrollReveal delay={400}>
          <div className="reverse-pitch-banner">
            <div className="banner-content">
              <h3>우리는 입점을 부탁하지 않습니다.</h3>
              <p>
              <b>우리는 GateKeeper 역할을 합니다.</b> 파트너들은 경쟁사가 절대 가질 수 없는 <b>'하이엔드 VIP 고객의 정확한 체형과 컬러 데이터'</b>, 
                그리고 <b>'마케팅 비용 0원의 확정된 수요'</b>를 얻기 위해 LUMEN 생태계에 입점 비딩(Bidding)을 하게 될 것입니다.
              </p>
            </div>
            <div className="banner-glow" />
          </div>
        </ScrollReveal>

      </div>

      <style jsx>{`
        .header-block { text-align: center; margin-bottom: 80px; }
        .kicker { font-size: 13px; font-weight: 800; color: #a1a1a6; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px; display: block; }
        .title { font-size: 44px; font-weight: 800; margin: 0 0 20px; letter-spacing: -0.02em; line-height: 1.2; }
        .lead { font-size: 18px; color: #86868b; line-height: 1.6; }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 60px;
        }

        .bento-card {
          border-radius: 32px;
          border: 1px solid rgba(255,255,255,0.05);
          position: relative;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), border-color 0.4s;
          background-color: #111; /* Fallback */
        }
        .bento-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255,255,255,0.2);
        }

        .card-inner {
          padding: 40px 32px;
          position: relative;
          z-index: 2;
        }

        .card-tag {
          font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;
          border: 1px solid; padding: 4px 10px; border-radius: 20px; display: inline-block; margin-bottom: 24px;
        }

        .card-title { font-family: 'Georgia', serif; font-size: 28px; font-weight: 400; color: #fff; margin: 0 0 8px; letter-spacing: -0.5px; }
        .card-sub { font-size: 15px; font-weight: 700; color: #d2d2d7; margin: 0 0 20px; }
        .card-desc { font-size: 15px; color: #a1a1a6; line-height: 1.6; word-break: keep-all; margin: 0; }

        .card-graphic {
          position: absolute; bottom: -40px; right: -40px; width: 150px; height: 150px;
          z-index: 1; opacity: 0.3; pointer-events: none;
        }
        .graphic-circle { width: 100%; height: 100%; border-radius: 50%; border: 4px solid; }

        .reverse-pitch-banner {
          background: #1d1d1f;
          border-radius: 24px;
          padding: 48px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,215,0,0.2);
          text-align: center;
        }
        .banner-content { position: relative; z-index: 2; max-width: 800px; margin: 0 auto; }
        .banner-content h3 { font-size: 24px; font-weight: 800; color: #FFD700; margin: 0 0 16px; }
        .banner-content p { font-size: 16px; color: #d2d2d7; line-height: 1.7; word-break: keep-all; margin: 0; }
        .banner-content b { color: #fff; }

        .banner-glow {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: 80%; height: 200%; background: radial-gradient(ellipse, rgba(255,215,0,0.05) 0%, transparent 70%);
          z-index: 1; pointer-events: none;
        }

        @media (max-width: 1024px) {
          .bento-grid { grid-template-columns: 1fr; }
          .title { font-size: 36px; }
          .reverse-pitch-banner { padding: 32px 24px; }
        }
      `}</style>
    </section>
  );
}