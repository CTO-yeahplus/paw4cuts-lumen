"use client";
import { useState } from "react";
// 💡 framer-motion에서 팝업 애니메이션을 위한 요소들을 임포트합니다.
import { motion, AnimatePresence } from "framer-motion"; 
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";

export default function BrandArchitectureSection() {
  // --- 💡 앱 데모 영상 모달 상태 ---
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section className="bg-black text-white py-32 border-t border-zinc-900 overflow-hidden relative">
      {/* 🍏 Slide 2-5: Brand Architecture */}
      <div className="snap-start min-h-screen flex flex-col justify-center relative w-full overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-24">
              <span className="text-zinc-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Dual Brand Architecture</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                대중성으로 CAC를 '제로(0)'로 만들고,<br/>프리미엄 생태계로 LTV를 극대화합니다.
              </h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto word-break-keep leading-relaxed">
                오프라인의 압도적 접근성과 온라인의 하이엔드 수익 구조를 동시에 장악하기 위해, 우리는 하드웨어 채널과 소프트웨어 플랫폼의 브랜드를 완벽하게 분리합니다.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-4 relative">
            {/* Left: 견생네컷 (Offline Pipeline) */}
            <div className="flex-1 w-full">
              <ScrollReveal delay={100}>
                <div className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-10 hover:border-zinc-600 transition-colors h-full">
                  <div className="flex justify-between items-start mb-12">
                    <div className="text-zinc-500 font-mono text-xs tracking-widest">STEP 01. CUSTOMER ACQUISITION</div>
                    <div className="w-10 h-10 rounded-full bg-black border border-zinc-800 flex items-center justify-center text-white"><Icon name="people" /></div>
                  </div>
                  <h3 className="text-3xl font-extrabold mb-4 tracking-tight">견생네컷</h3>
                  <span className="inline-block px-3 py-1 bg-zinc-800 text-zinc-300 text-xs font-bold rounded-lg mb-6">친근함 · 대중성 · 진입장벽 제로</span>
                  <p className="text-zinc-400 leading-relaxed word-break-keep mb-8">
                    대중에게 친숙한 '네컷' 프레임을 차용하여 소비자의 심리적 진입 장벽을 완전히 허뭅니다. <b>누구나 부담 없이 문을 열고 들어오게 만드는 완벽한 '초저비용 고객 유입 파이프라인' 역할</b>을 수행하며, 막대한 트래픽과 반려견 데이터를 흡수합니다.
                  </p>
                  <div className="border-t border-zinc-800 pt-6 mt-auto">
                    <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-2">Key Business Role</div>
                    <div className="text-white font-medium">물리적 트래픽 확보 및 마케팅 비용(CAC) 방어</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Center: Transition Arrow */}
            <ScrollReveal delay={200}>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-500 flex items-center justify-center text-black z-10 relative shadow-[0_0_30px_rgba(0,113,227,0.5)] transform rotate-90 md:rotate-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </div>
            </ScrollReveal>

            {/* Right: PAWTRAITEDITION */}
            <div className="flex-1 w-full">
              <ScrollReveal delay={300}>
                <div className="bg-gradient-to-br from-zinc-900 to-black border border-blue-500/30 rounded-[32px] p-10 hover:border-blue-500 transition-colors h-full relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-all" />
                  
                  <div className="flex justify-between items-start mb-12 relative z-10">
                    <div className="text-blue-500 font-mono text-xs tracking-widest">STEP 02. HIGH-LTV ECOSYSTEM</div>
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-blue-500"><Icon name="spark" /></div>
                  </div>
                  <h3 className="text-3xl font-extrabold mb-4 tracking-tight text-white relative z-10">PAWTRAITEDITION</h3>
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-lg mb-6 border border-blue-500/30 relative z-10">프라이빗 · 하이엔드 · 앱 락인(Lock-in)</span>
                  
                  <p className="text-zinc-300 leading-relaxed word-break-keep mb-10 relative z-10">
                    가벼운 마음으로 들어온 고객이 원본 사진을 수령하는 순간 마주하는 <b>강력한 디지털 커머스 생태계</b>입니다. 멍스널컬러 큐레이션, POD 굿즈 제작 등 고객이 절대 이탈할 수 없는 강력한 자산 가치(LTV)를 창출합니다.
                  </p>

                  {/* 💡 App Demo 버튼 */}
                  <div className="mb-12 relative z-10">
                    <button
                      onClick={() => setShowDemo(true)}
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-500 text-white font-bold hover:bg-blue-600 transition-all shadow-[0_0_30px_rgba(0,113,227,0.3)] hover:scale-105 active:scale-95"
                    >
                      <Icon name="play" className="w-4 h-4" />
                      App Demo 보기
                    </button>
                  </div>

                  <div className="border-t border-zinc-800 pt-6 mt-auto relative z-10">
                    <div className="text-xs text-blue-400 uppercase tracking-widest font-bold mb-2">Key Business Role</div>
                    <div className="text-white font-medium">데이터 자산화 및 무재고 고마진 수익 창출</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
          </div>
        </div>
      </div>

      {/* 🎥 💡 Floating Video Modal 추가 영역 */}
      <AnimatePresence>
        {showDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setShowDemo(false)} // 배경 클릭 시 모달 닫기
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              // 💡 aspect-[1284/2778] 적용 및 화면 높이 기준(h-[85vh])으로 크기 자동 조절
              className="relative h-[85vh] max-h-[900px] aspect-[1284/2778] bg-zinc-900 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()} // 영상 영역 클릭 시 닫히는 것 방지
            >
              {/* 영상 컴포넌트 */}
              <video
                src="/app_demo.mp4"
                autoPlay
                controls
                playsInline
                className="w-full h-full object-cover"
              />
              
              {/* 우측 상단 닫기 (X) 버튼 */}
              <button
                onClick={() => setShowDemo(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-colors z-50"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}