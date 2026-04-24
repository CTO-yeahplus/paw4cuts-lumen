"use client";
import React, { useState } from "react"; // 💡 useState 추가
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";
import { animate } from "framer-motion";
import BrandArchitectureSection from "@/components/sections/BrandArchitectureSection";

// 💡 숫자가 변할 때 부드럽게 카운팅되는 컴포넌트
function Counter({ value, unit = "" }: { value: number, unit?: string }) {
  const [displayValue, setDisplayValue] = useState(value);
  
  React.useEffect(() => {
    const controls = animate(displayValue, value, {
      duration: 0.5,
      onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [value]);

  return <span>{displayValue.toLocaleString()}{unit}</span>;
}

export default function IrPitchSection() {
  // --- 시뮬레이터 상태 관리 ---
  const [storeCount, setStoreCount] = useState(20); // 프랜차이즈 매장 수
  const [podOrders, setPodOrders] = useState(1000); // 월간 POD 주문 건수
  const [subscribers, setSubscribers] = useState(5000); // 클라우드 구독자 수
  return (
    <div className="bg-black text-white w-full">
      
      {/* 🍏 Slide 1: Cover (동일) */}
      <div className="snap-start min-h-screen flex flex-col justify-center relative w-full overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="container max-w-5xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-block px-4 py-2 bg-blue-500/10 text-blue-500 border border-blue-500/30 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-[0_0_20px_rgba(0,113,227,0.2)]">
              Seed Round Pitch Deck
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-tight">
              반려견 IP 자산화의 기준,<br/>견생네컷 X PAWTRAITEDITION.
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto word-break-keep">
              오프라인 트래픽 독점을 넘어, <br/>데이터와 커머스가 결합된 압도적 생태계를 구축합니다.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* 🍏 Slide 2: Problem & Solution (동일) */}
      <div className="snap-start min-h-screen flex flex-col justify-center relative w-full overflow-hidden">
        <div className="container max-w-5xl mx-auto px-6 relative z-10">
          <ScrollReveal delay={100}>
            <span className="text-zinc-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block text-center">The Paradigm Shift</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Problem & The Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 shadow-2xl">
                <div className="text-red-500 mb-6 w-12 h-12 flex items-center justify-center bg-red-500/10 rounded-xl"><Icon name="spark" /></div>
                <h3 className="text-2xl font-bold mb-4">현재 펫 시장의 한계</h3>
                <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                  <li><strong className="text-white">기존 커머스의 피출혈 경쟁:</strong> 높은 CAC와 낮은 객단가로 인한 수익성 악화 구조.</li>
                  <li><strong className="text-white">파편화된 데이터:</strong> 보호자의 고관여 소비를 리드할 독점적 데이터 플랫폼의 부재.</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-zinc-900 to-black border border-blue-500/30 rounded-3xl p-10 relative overflow-hidden shadow-[0_0_40px_rgba(0,113,227,0.1)]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full pointer-events-none" />
                <div className="text-blue-500 mb-6 w-12 h-12 flex items-center justify-center bg-blue-500/10 rounded-xl relative z-10"><Icon name="qr" /></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">PAWTRAITEDITION의 전략</h3>
                <ul className="space-y-4 text-zinc-300 text-sm leading-relaxed relative z-10">
                  <li><strong className="text-blue-400">오프라인 트로이 목마:</strong> 견생네컷 부스를 통해 CAC Zero 기반의 고객 유입 경로 확보.</li>
                  <li><strong className="text-blue-400">IP 기반 생태계:</strong> 앱 설치 강제를 통한 데이터 독점 및 100% 주문형 고부가가치 커머스 전개.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="snap-start min-h-screen w-full flex flex-col justify-center">
        <BrandArchitectureSection />
      </div>

      {/* 🍏 Slide 3: Business Model */}
      <div className="snap-start min-h-screen flex flex-col justify-center relative w-full overflow-hidden">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <ScrollReveal delay={100}>
            <span className="text-zinc-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block text-center">Scalability</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">지속 가능한 다중 수익 구조</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* 1. 프렌차이즈 사업 (Pink Tone) */}
              <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800 border-t-4 border-t-pink-500 hover:border-pink-500/50 transition-all group">
                <div className="text-xs font-bold text-pink-500 mb-4 tracking-widest uppercase">01. Expansion</div>
                <h4 className="font-bold text-xl mb-4 text-white">견생네컷 프랜차이즈</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                    <span className="text-sm text-zinc-300"><strong>1단계:</strong> 전국 핵심 거점 직영점 20곳 구축</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500/40"></div>
                    <span className="text-sm text-zinc-400"><strong>2단계:</strong> 검증된 수익 모델 기반 가맹 사업 전개</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 mt-6 leading-relaxed">압도적 트래픽을 보유한 오프라인 인프라를 통해 브랜딩과 캐시카우 동시 확보.</p>
              </div>
              
              {/* 2. POD 굿즈 커머스 (Amber/Gold Tone) */}
              <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800 border-t-4 border-t-amber-500 hover:border-amber-500/50 transition-all">
                <div className="text-xs font-bold text-amber-500 mb-4 tracking-widest uppercase">02. IP Commerce</div>
                <h4 className="font-bold text-xl mb-4 text-white">100% 주문형 POD 굿즈</h4>
                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                  앱 내 <strong>'오쏘링 툴'</strong>을 통해 유저가 직접 꾸민 사진을 기반으로 재고 없는 고퀄리티 굿즈 제작.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["아크릴액자", "폰케이스", "그립톡", "카드커버"].map(item => (
                    <span key={item} className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-1 rounded-md border border-amber-500/20">{item}</span>
                  ))}
                </div>
                <p className="text-xs text-zinc-500">고객이 직접 디자인하고 결제하는 100% 주문형 생산 시스템.</p>
              </div>

              {/* 3. 클라우드 구독 모델 (Indigo Tone) */}
              <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800 border-t-4 border-t-indigo-500 hover:border-indigo-500/50 transition-all">
                <div className="text-xs font-bold text-indigo-400 mb-4 tracking-widest uppercase">03. SaaS / Data</div>
                <h4 className="font-bold text-xl mb-4 text-white">데이터 자산 관리 서비스</h4>
                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                  포트레이트에디션 앱을 통해 고용량 원본 데이터 및 개인화 굿즈 디자인 데이터를 클라우드에 영구 저장.
                </p>
                <div className="bg-indigo-500/10 border border-indigo-500/20 p-4 rounded-xl">
                  <div className="text-xs text-indigo-400/70 mb-1">Revenue Stream</div>
                  <div className="text-lg font-bold text-indigo-300">클라우드 용량 구독 요금제</div>
                </div>
                <p className="text-xs text-zinc-500 mt-4">반려견의 생애 주기를 기록하는 디지털 자산 창고 역할.</p>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 🍏 Slide 3-1: Franchise Simulator */}
      <div className="snap-start min-h-screen flex flex-col justify-center relative w-full overflow-hidden">
        <div className="container max-w-5xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">01. Physical Foundation</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-12">프랜차이즈 수익 시뮬레이션</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-zinc-900/50 p-10 rounded-[32px] border border-white/5 space-y-8">
                <div>
                  <div className="flex justify-between mb-4">
                    <span className="text-zinc-400">목표 매장 수 (직영+가맹)</span>
                    <span className="text-blue-400 font-bold">{storeCount}개소</span>
                  </div>
                  <input 
                    type="range" min="1" max="200" value={storeCount} 
                    onChange={(e) => setStoreCount(Number(e.target.value))}
                    className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-600 mt-2 font-mono">
                    <span>1 STORES</span>
                    <span>200 STORES</span>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5 space-y-6">
                  <div className="flex justify-between items-end">
                    <span className="text-zinc-500 text-sm">총 하드웨어 매출 (대당 1,600만)</span>
                    <span className="text-2xl font-bold text-white">
                      <Counter value={storeCount * 2 * 1600} unit="만 원" />
                    </span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-blue-500 font-bold">하드웨어 순이익 (대당 1,000만)</span>
                    <span className="text-3xl font-black text-blue-400">
                      <Counter value={storeCount * 2 * 1000} unit="만 원" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">압도적인 하드웨어 레버리지</h4>
                <p className="text-zinc-400 leading-relaxed">
                  매장당 최소 2대의 기기를 배치합니다. <br/>
                  제작 원가 600만 원 대비 1,600만 원의 판매가를 책정하여, <strong>기기 판매만으로 매장당 2,000만 원의 즉각적인 순이익</strong>이 발생합니다. 이는 초기 직영점 확장 비용을 스스로 상쇄하는 구조입니다.
                </p>
                <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 text-xs text-blue-300">
                  * 가맹 100호점 달성 시, 기기 수익으로만 약 20억 원의 순익 확보 가능
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 🍏 Slide 3-2: POD Commerce Simulator */}
      <div className="snap-start min-h-screen flex flex-col justify-center relative w-full overflow-hidden">
        <div className="container max-w-5xl mx-auto px-6 relative z-10">
          <ScrollReveal delay={100}>
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block text-center">02. IP Asset Monetization</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">POD 굿즈 커머스 시뮬레이션</h2>
            
            <div className="bg-zinc-900 border border-zinc-800 rounded-[40px] p-8 md:p-16 relative shadow-2xl">
              <div className="max-w-xl mx-auto space-y-12">
                <div>
                  <div className="flex justify-between mb-4">
                    <span className="text-zinc-400">월평균 주문 건수 (APP)</span>
                    <span className="text-gold font-bold">{podOrders.toLocaleString()}건</span>
                  </div>
                  <input 
                    type="range" min="100" max="50000" step="100" value={podOrders} 
                    onChange={(e) => setPodOrders(Number(e.target.value))}
                    className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                  <div className="text-center">
                    <div className="text-zinc-500 text-xs uppercase mb-2">월 예상 매출 (객단가 3.5만 기준)</div>
                    <div className="text-3xl font-bold text-white">
                      <Counter value={podOrders * 35000 / 10000} unit="만 원" />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-gold text-xs font-bold uppercase mb-2">월 예상 순이익 (마진 30%)</div>
                    <div className="text-4xl font-black text-gold">
                      <Counter value={(podOrders * 35000 * 0.3) / 10000} unit="만 원" />
                    </div>
                  </div>
                </div>
                
                <p className="text-center text-xs text-zinc-500 leading-relaxed">
                  고객이 직접 제작하는 100% 주문형(POD) 방식으로 재고 유지비가 0원입니다. <br/>
                  오프라인에서 획득한 고화질 원본 데이터는 유저의 구매 전환율을 타 커머스 대비 3배 이상 높입니다.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 🍏 Slide 3-3: Cloud SaaS Simulator */}
      <div className="snap-start min-h-screen flex flex-col justify-center relative w-full overflow-hidden">
        <div className="container max-w-5xl mx-auto px-6 relative z-10">
          <ScrollReveal delay={100}>
            <span className="text-indigo-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block text-center">03. SaaS Recurring Revenue</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">클라우드 구독 모델 시뮬레이션</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-10 bg-[#0a0a0a] p-10 rounded-[32px] border border-white/5">
                <div>
                  <div className="flex justify-between mb-4">
                    <span className="text-zinc-400">누적 유료 구독자 수</span>
                    <span className="text-indigo-400 font-bold">{subscribers.toLocaleString()}명</span>
                  </div>
                  <input 
                    type="range" min="1000" max="100000" step="1000" value={subscribers} 
                    onChange={(e) => setSubscribers(Number(e.target.value))}
                    className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500 text-sm">월 반복 매출 (MRR)</span>
                    <span className="text-2xl font-bold text-white">
                      <Counter value={(subscribers * 4900) / 10000} unit="만 원" />
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-indigo-500/5 rounded-2xl border border-indigo-500/20">
                    <span className="text-indigo-400 font-bold text-lg">연간 예상 순익 (마진 85%)</span>
                    <span className="text-3xl font-black text-indigo-400">
                      <Counter value={(subscribers * 4900 * 0.85 * 12) / 100000000} unit="억 원" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-6 text-left">
                <h4 className="text-2xl font-bold text-white">"추억은 구독됩니다"</h4>
                <p className="text-zinc-400 leading-relaxed text-lg">
                  반려견의 짧은 생을 기록하려는 견주의 심리는 가장 강력한 구독 동기입니다. <br/><br/>
                  AWS S3 기반의 낮은 유지비용 덕분에 **85%라는 압도적인 영업이익률**을 기록합니다. 이는 하드웨어와 커머스의 변동성을 상쇄하는 가장 강력한 현금 흐름(Cash Flow)이 될 것입니다.
                </p>
                <div className="flex gap-4">
                  <div className="flex-1 p-4 bg-zinc-900 rounded-xl border border-white/5">
                    <div className="text-[10px] text-zinc-500 uppercase">Retention</div>
                    <div className="text-lg font-bold text-white">90%+</div>
                  </div>
                  <div className="flex-1 p-4 bg-zinc-900 rounded-xl border border-white/5">
                    <div className="text-[10px] text-zinc-500 uppercase">Margin</div>
                    <div className="text-lg font-bold text-white">85%</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 🍏 Slide 4: Market Size & Traction (업데이트된 숫자 반영) */}
      <div className="snap-start min-h-screen flex flex-col justify-center relative w-full overflow-hidden">
        <div className="container max-w-5xl mx-auto px-6 relative z-10">
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Proven Traction</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">가설은 이미 숫자로<br/>증명되었습니다.</h2>
                <div className="space-y-4">
                  <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex justify-between items-center">
                    <span className="text-zinc-400">누적 유료 촬영 건수 (8일 기준)</span>
                    <strong className="text-3xl font-extrabold text-white">712<span className="text-lg font-normal text-zinc-500 ml-1">건</span></strong>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex justify-between items-center">
                    <span className="text-zinc-400">누적 발생 매출</span>
                    <strong className="text-3xl font-extrabold text-white">6.5<span className="text-lg font-normal text-zinc-500 ml-1">M+ KRW</span></strong>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 mt-6 leading-relaxed">
                  여의도 벚꽃 축제와 펫페어 현장에서 확인된 폭발적인 반응. <br/>
                  단순한 촬영을 넘어 SNS 공유와 커스텀 굿즈에 대한 높은 니즈를 확인했습니다.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-black to-zinc-900 border border-zinc-800 p-10 rounded-3xl flex flex-col items-center justify-center text-center shadow-2xl relative">
                <h3 className="text-2xl font-bold mb-4">현장의 생생한 감동</h3>
                <p className="text-zinc-400 leading-relaxed text-base mb-6">
                  현장에서 쏟아지는 웃음과 감동의 순간들이 데이터로 쌓이고 있습니다. <br/>
                  수천 장의 고퀄리티 사진과 영상이 PAWTRAITEDITION 앱으로 유입될 준비를 마쳤습니다.
                </p>
                {/* 💡 기존 회색 빈 박스 3개를 아래 이미지 태그가 포함된 코드로 교체하십시오. */}
                <div className="w-full grid grid-cols-3 gap-2">
                  <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden border border-white/5 relative">
                    <img 
                      src="/images/img_04.png" 
                      alt="견생네컷 샘플 1" 
                      className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden border border-white/5 relative">
                    <img 
                      src="/images/img_06.png" 
                      alt="견생네컷 샘플 2" 
                      className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden border border-white/5 relative">
                    <img 
                      src="/images/img_07.png" 
                      alt="견생네컷 샘플 3" 
                      className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 🍏 Slide 4.5: Field Momentum Gallery (실제 이미지 적용) */}
      <div className="snap-start min-h-screen flex flex-col justify-center relative w-full overflow-hidden">
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Field Momentum</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">숫자 너머의 열광적인 현장</h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto word-break-keep">
                지표보다 확실한 것은 현장의 온도입니다. 고객들은 자발적으로 릴스를 촬영하고, <br className="hidden md:block" />
                긴 대기열조차 놀이로 즐기며 PAWTRAITEDITION의 첫 팬덤이 되었습니다.
              </p>
            </div>
            
            {/* 💡 Bento Grid Gallery Layout (반응형 완벽 수정) */}
            {/* 모바일: 4줄(grid-rows-4), PC: 2줄(md:grid-rows-2) 로 변경하여 모든 사진이 나오도록 수정 */}
            <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4 h-[70vh] md:h-[60vh]">
              
              {/* 1. 메인 이미지/영상 영역 (image_01.jpg) */}
              <div className="col-span-2 row-span-2 bg-zinc-900 rounded-[32px] md:rounded-[32px] rounded-3xl relative overflow-hidden group border border-white/5 cursor-pointer">
                 <img 
                   src="/images/sketch/image_01.JPG" 
                   alt="현장 스케치 메인" 
                   className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                 
                 <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                   <div className="text-xs font-bold text-blue-400 mb-1 uppercase tracking-wider">펫페어 팝업</div>
                   <div className="text-xl font-bold text-white">현장 스케치 및 유저 인터뷰</div>
                 </div>
              </div>

              {/* 2. 우측 상단 사진 1 (image_02.jpg) */}
              <div className="col-span-1 row-span-1 bg-zinc-900 rounded-[32px] md:rounded-[32px] rounded-3xl relative overflow-hidden group border border-white/5">
                 <img 
                   src="/images/sketch/image_02.JPG" 
                   alt="현장 사진 02" 
                   className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute bottom-4 left-4 z-10">
                   <div className="text-[10px] font-bold text-zinc-300 bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 hidden md:block">#펫페어_눈을뗄수없다</div>
                 </div>
              </div>

              {/* 3. 우측 상단 사진 2 (image_03.jpg) */}
              <div className="col-span-1 row-span-1 bg-zinc-900 rounded-[32px] md:rounded-[32px] rounded-3xl relative overflow-hidden group border border-white/5">
                 <img 
                   src="/images/sketch/image_03.jpg" 
                   alt="현장 사진 03" 
                   className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute bottom-4 left-4 z-10">
                   <div className="text-[10px] font-bold text-zinc-300 bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 hidden md:block">#즐거움에_끝이없다</div>
                 </div>
              </div>

              {/* 4. 우측 하단 긴 영역 (image_04.jpg) */}
              <a 
                href="https://www.instagram.com/paw4cuts_official" 
                target="_blank" 
                rel="noopener noreferrer"
                className="col-span-2 row-span-1 bg-zinc-900 rounded-[32px] md:rounded-[32px] rounded-3xl relative overflow-hidden group border border-white/5 block cursor-pointer"
              >
                <img 
                  src="/images/sketch/image_04.jpg" 
                  alt="현장 사진 04" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* 호버 시 나타나는 '갤러리 더보기' 버튼 */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <span className="px-5 py-2.5 bg-white text-black font-bold text-xs md:text-sm rounded-full flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                      인스타그램에서 더보기
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                    </span>
                </div>
                
                <div className="absolute bottom-5 left-6 z-10">
                  <div className="text-base md:text-lg font-bold text-white mb-1">자발적인 인스타그램 바이럴 확산</div>
                  <div className="text-xs md:text-sm text-zinc-300">누적 해시태그 500+ 돌파 및 자발적 릴스 생성</div>
                </div>
              </a>

            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 🍏 Slide 5: The Ask (동일) */}
      <div className="snap-start min-h-screen flex flex-col justify-center relative w-full overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="container max-w-4xl mx-auto px-6 relative z-10">
          <ScrollReveal delay={100}>
            <div className="text-center bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-[40px] p-16 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50" />
              <span className="text-green-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Fundraising</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Seed Round Open</h2>
              <p className="text-xl text-zinc-400 mb-12 word-break-keep">검증된 지표와 함께 펫 시장의 새로운 럭셔리 스탠다드를 세울 파트너를 찾습니다.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-black border border-zinc-700 p-8 rounded-3xl">
                  <div className="text-sm text-zinc-500 mb-3 font-bold tracking-widest uppercase">조달 목표 (The Ask)</div>
                  <div className="text-4xl font-extrabold text-white">TBD</div>
                </div>
                <div className="bg-black border border-zinc-700 p-8 rounded-3xl">
                  <div className="text-sm text-zinc-500 mb-3 font-bold tracking-widest uppercase">자금 사용처 (Use of Funds)</div>
                  <div className="text-xl font-bold text-white mb-2">App 고도화 & 직영점 인프라</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}