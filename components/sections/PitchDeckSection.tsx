"use client";
import ScrollReveal from "../ScrollReveal";

const slides = [
  { 
    step: "01", 
    kicker: "The Vision",
    title: "우리는 사진을 팔지 않습니다.\n함께한 시간을 유산으로 설계합니다.", 
    desc: "하이엔드 펫 라이프스타일 생태계, Project LUMEN."
  },
  { 
    step: "02", 
    kicker: "The Problem",
    title: "가장 완벽한 0.1%의 경험은\n비어 있습니다.", 
    desc: "길거리의 촌스러운 포토부스, 폰 용량만 차지하는 파편화된 사진들. 수조 원의 펫 시장에서 하이엔드를 위한 프리미엄 캡처 시스템은 부재합니다."
  },
  { 
    step: "03", 
    kicker: "The Trojan Horse",
    title: "진입 장벽은 가장 낮게,\n결과물은 가장 압도적으로.", 
    desc: "친숙한 '견생네컷' 부스 뒤에 숨겨진 전문 작가의 노하우와 AI 멍스널컬러. 우리는 마케팅비 0원으로 고순도 에셋과 생체 데이터를 획득합니다."
  },
  { 
    step: "04", 
    kicker: "Frictionless Handoff",
    title: "단 한 글자의 입력도 없이\n완벽한 자산으로 이식됩니다.", 
    desc: "인화지 QR 스캔 한 번. 디퍼드 딥링크(Deferred Deep Link)를 통해 오프라인의 사진이 고객의 앱(Vault)으로 완벽히 동기화되어 이탈을 차단합니다."
  },
  { 
    step: "05", 
    kicker: "Asset-Light Commerce",
    title: "재고는 남기지 않습니다.\n수요를 큐레이션할 뿐입니다.", 
    desc: "재고 리스크 0%. AR 기반 POD 굿즈, 멍스널컬러 기반 명품 의류 타겟팅, 독점 파티세리 연합으로 우리는 거부할 수 없는 수익을 창출합니다."
  },
  { 
    step: "06", 
    kicker: "The IP Agency",
    title: "소비자를 생산자로.\nB2B 에이전시의 완성.", 
    desc: "수십만 장의 하이엔드 모델 DB를 구축하고, 브랜드와 0.1초 만에 매칭합니다. 매니저 없이 플랫폼만 제공하고 막대한 수수료를 창출합니다."
  },
  { 
    step: "07", 
    kicker: "The Ask",
    title: "LUMEN의 독점 파트너로\n비딩(Bidding) 하십시오.", 
    desc: "경쟁사가 기계는 베껴도 '3년 치 데이터와 생태계'는 훔칠 수 없습니다. 가장 완벽한 VIP 타겟의 확정된 수요를 드리겠습니다."
  }
];

export default function PitchDeckSection() {
  return (
    <div className="bg-black text-white w-full">
      {slides.map((slide, index) => (
        <section 
          key={slide.step} 
          className="min-h-screen snap-start w-full flex flex-col justify-center items-center px-6 py-24 relative"
        >
          {/* 슬라이드 진행률 인디케이터 (상단 중앙) */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-4 text-zinc-600 font-mono text-sm tracking-widest">
            <span className="w-12 h-px bg-zinc-800"></span>
            {slide.step} / 07
            <span className="w-12 h-px bg-zinc-800"></span>
          </div>

          <div className="max-w-5xl w-full mx-auto text-center">
            <ScrollReveal>
              {/* Kicker Tag */}
              <span className="text-[#FFD700] font-bold tracking-[0.2em] uppercase text-sm mb-8 block">
                {slide.kicker}
              </span>
              
              {/* Massive Title */}
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tighter mb-10 text-white whitespace-pre-wrap">
                {slide.title}
              </h2>
              
              {/* Description */}
              <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed word-break-keep font-medium">
                {slide.desc}
              </p>
            </ScrollReveal>
          </div>
        </section>
      ))}
    </div>
  );
}