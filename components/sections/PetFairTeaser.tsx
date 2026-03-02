"use client";
import { useState, useEffect } from "react";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";

// 🍏 독윅 롤링 이미지 배열
const paws4cutImages = [
    "/images/img_01.png",
    "/images/img_02.png",
    "/images/img_08.png",
    "/images/img_04.png",
    "/images/img_05.png",
    "/images/img_10.png",
    "/images/img_07.png",
    "/images/img_03.png",
    "/images/img_09.png",
    "/images/img_06.png",
    "/images/img_11.png",
];

// 🍏 독윅 롤링 이미지 배열
const dogwickImages = [
  "/images/dogwick/dogwick_01.jpg",
  "/images/dogwick/dogwick_02.jpg",
  "/images/dogwick/dogwick_03.jpg",
  "/images/dogwick/dogwick_04.jpg",
  "/images/dogwick/dogwick_05.jpg",
  "/images/dogwick/dogwick_06.jpg",
  "/images/dogwick/dogwick_07.jpg",
];

// 🍏 밑컷 롤링 이미지 배열
const undercutImages = [
  "/images/undercut/undercut_01.png",
  "/images/undercut/undercut_02.png",
  "/images/undercut/undercut_03.png",
  "/images/undercut/undercut_04.png",
  "/images/undercut/undercut_05.png",
  "/images/undercut/undercut_06.png",
];

export default function PetFairTeaser() {
  const [currentIdx, setCurrentIdx] = useState(0);

  // 🍏 4초마다 배경 이미지를 교체하는 타이머
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-black text-white min-h-screen py-24 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* 🍏 1. Hero Teaser */}
        <div className="text-center mb-32 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
          <ScrollReveal>
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-6 block border border-gold/30 w-fit mx-auto px-6 py-2 rounded-full bg-gold/5">
              2026 Pet Fair Exclusive Preview
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-tight">
              반려견 초상화의 새로운 기준.<br/>마침내 베일을 벗습니다.
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto word-break-keep leading-relaxed">
              단순히 귀여운 사진을 남기는 것을 넘어, 아이의 고유한 매력이 가장 선명하게 드러나는 공간. 다음 주 펫페어에서 최초로 공개될 견생네컷(Paws4Cut) 의 시그니처 라인업을 미리 확인하십시오.
            </p>
          </ScrollReveal>
        </div>

        {/* 🍏 3. The Signature */}
        <ScrollReveal delay={300}>
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12 mb-32 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px]" />
            <div className="flex-1 relative z-10">
              <span className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-2 block border border-blue-500/30 w-fit px-3 py-1 rounded-full bg-blue-500/10">
                Available at Pet Fair
              </span>
              <h3 className="text-3xl font-bold mb-4 mt-4">오디너리독스 <br/>& 멍스널컬러 </h3>
              <p className="text-zinc-400 leading-relaxed mb-6 word-break-keep">
                모든 색을 덜어내어 아이의 맑은 눈빛과 본질에 집중하는 <b>흑백 마스터피스</b>와, AI가 털과 눈동자 색을 분석해 가장 찰떡인 배경을 찾아주는 맞춤형 <b>멍스널컬러 리포트</b>. 견생네컷의 가장 완벽한 시그니처 경험은 현장에서 즉시 체험하실 수 있습니다.
              </p>
            </div>
            <div className="w-full md:w-2/3 aspect-[3/4] bg-zinc-900 rounded-2xl border border-zinc-800 relative overflow-hidden flex items-center justify-center z-10">
              <div className="text-zinc-700 font-bold tracking-widest text-sm">AI COLOR ANALYSIS</div>
              {/* 동적 배경 롤링 (Cross-fade) */}
              {paws4cutImages.map((img, idx) => {
                  const isActive = (currentIdx % paws4cutImages.length) === idx;
                  return (
                    <div 
                      key={`dw-${idx}`}
                      className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out group-hover:scale-105 ${
                        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                      style={{ backgroundImage: `url('${img}')`, backgroundColor: '#111' }}
                    />
                  );
                })}
            </div>
          </div>
        </ScrollReveal>

        {/* 🍏 2. The Future Lineups (독윅 & 밑컷 - 롤링 배경 적용) */}
        <div className="mb-32">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">The Future Perspectives</h2>
              <p className="text-zinc-500 word-break-keep">본 두 가지 컨셉은 완벽한 스튜디오 퀄리티 구현을 위해 현재 R&D 중이며,<br/>이번 펫페어에서는 <b>'콘셉트 화보 전시'</b>로만 선공개됩니다.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[600px]">
            
            {/* 🍏 Concept 1: DOG WICK */}
            <ScrollReveal delay={100}>
              <div className="group relative rounded-[40px] h-full overflow-hidden border border-zinc-800 hover:border-orange-500/50 transition-colors cursor-pointer">
                
                {/* 동적 배경 롤링 (Cross-fade) */}
                {dogwickImages.map((img, idx) => {
                  const isActive = (currentIdx % dogwickImages.length) === idx;
                  return (
                    <div 
                      key={`dw-${idx}`}
                      className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out group-hover:scale-105 ${
                        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                      style={{ backgroundImage: `url('${img}')`, backgroundColor: '#111' }}
                    />
                  );
                })}

                {/* 그라디언트 오버레이 (z-index를 20으로 올려 텍스트 가독성 확보) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity z-20" />
                
                {/* Coming Soon Badge */}
                <div className="absolute top-8 right-8 z-30">
                  <span className="bg-orange-500 text-black text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                    Coming Soon
                  </span>
                </div>

                {/* 카드 콘텐츠 */}
                <div className="relative z-30 p-10 h-full flex flex-col justify-end">
                  <div className="text-orange-500 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform"><Icon name="spark" /></div>
                  <h3 className="text-5xl font-extrabold mb-2 font-serif italic tracking-tight text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">DOG WICK</h3>
                  <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-bold rounded-lg mb-6 tracking-wider w-fit transform translate-y-4 group-hover:translate-y-0 transition-transform border border-orange-500/30">포스 & 카리스마</span>
                  
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <p className="text-zinc-300 leading-relaxed mb-6 word-break-keep text-sm">
                      영화 '존윅(John Wick)'에서 영감을 받은 거칠고도 우아한 느와르 컨셉입니다. 강한 조명의 대비를 통해 아이의 강인한 인상을 한 편의 영화 포스터처럼 담아냅니다.
                    </p>
                    <ul className="space-y-2 text-xs text-zinc-400">
                      <li className="flex items-center gap-2">✓ <span className="text-zinc-300">중형견 이상의 강한 인상을 가진 견종 최적화</span></li>
                      <li className="flex items-center gap-2 text-orange-400 font-bold">✓ <span>LUMEN 앱 가입자 대상 정식 런칭 시 우선 예약권 부여</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 🍏 Concept 2: UNDER-CUT */}
            <ScrollReveal delay={200}>
              <div className="group relative rounded-[40px] h-full overflow-hidden border border-zinc-800 hover:border-purple-500/50 transition-colors cursor-pointer">
                
                {/* 동적 배경 롤링 (Cross-fade) */}
                {undercutImages.map((img, idx) => {
                  const isActive = (currentIdx % undercutImages.length) === idx;
                  return (
                    <div 
                      key={`uc-${idx}`}
                      className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out group-hover:scale-105 ${
                        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                      style={{ backgroundImage: `url('${img}')`, backgroundColor: '#111' }}
                    />
                  );
                })}

                {/* 그라디언트 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity z-20" />
                
                {/* Coming Soon Badge */}
                <div className="absolute top-8 right-8 z-30">
                  <span className="bg-purple-500 text-black text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                    Coming Soon
                  </span>
                </div>

                {/* 카드 콘텐츠 */}
                <div className="relative z-30 p-10 h-full flex flex-col justify-end">
                  <div className="text-purple-500 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform"><Icon name="copy" /></div>
                  <h3 className="text-5xl font-extrabold mb-2 tracking-tight text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">견생밑컷</h3>
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-bold rounded-lg mb-6 tracking-wider w-fit transform translate-y-4 group-hover:translate-y-0 transition-transform border border-purple-500/30">극강의 귀여움</span>
                  
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <p className="text-zinc-300 leading-relaxed mb-6 word-break-keep text-sm">
                      평소에 볼 수 없었던 완벽히 새로운 시야. 강화유리판 위에 아이를 올리고 아래에서 촬영하여, 숨겨져 있던 젤리 발바닥과 포근한 배를 가장 사랑스럽게 포착합니다.
                    </p>
                    <ul className="space-y-2 text-xs text-zinc-400">
                      <li className="flex items-center gap-2">✓ <span className="text-zinc-300">소형견의 귀여움을 극대화하는 유니크한 앵글</span></li>
                      <li className="flex items-center gap-2 text-purple-400 font-bold">✓ <span>LUMEN 앱 가입자 대상 정식 런칭 시 우선 예약권 부여</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>

        

        {/* 🍏 4. Call to Action */}
        <ScrollReveal delay={400}>
          <div className="text-center bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-[40px] p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">차세대 라인업, 가장 먼저 경험하십시오.</h2>
            <p className="text-zinc-400 mb-10 max-w-xl mx-auto word-break-keep text-lg">
              지금 LUMEN을 경험하시면, 현장 시그니처 촬영의 '대기열 우선 패스'는 물론, <b>향후 독윅 & 견생밑컷 정식 런칭 시 가장 먼저 VIP 우선 예약권</b>을 발송해 드립니다.
            </p>
            <button className="bg-white text-black font-bold text-lg px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              LUMEN 앱 미리 경험하기
            </button>
          </div>
        </ScrollReveal>

      </div>
      <style jsx>{`
        .text-gold { color: #FFD700; }
        .bg-gold\\/5 { background-color: rgba(255,215,0,0.05); }
        .border-gold\\/30 { border-color: rgba(255,215,0,0.3); }
      `}</style>
    </section>
  );
}