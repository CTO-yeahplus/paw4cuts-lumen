"use client";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";

export default function IrPitchSection() {
  return (
    // 🍏 전체 래퍼: 배경색 지정 및 자식 요소들의 스냅을 허용
    <div className="bg-black text-white w-full">
      
      {/* 🍏 Slide 1: Cover */}
      <div className="snap-start min-h-screen flex flex-col justify-center relative w-full overflow-hidden">
        {/* 은은한 배경 효과 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container max-w-5xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-block px-4 py-2 bg-blue-500/10 text-blue-500 border border-blue-500/30 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-[0_0_20px_rgba(0,113,227,0.2)]">
              Seed Round Pitch Deck
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-tight">
              반려견 IP 자산화의 기준,<br/>견생네컷 X LUMEN.
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto word-break-keep">
              오프라인 포토부스로 시장의 트래픽을 독점하고, <br/>앱 생태계로 무재고 커머스의 한계를 돌파합니다.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* 🍏 Slide 2: Problem & Solution */}
      <div className="snap-start min-h-screen flex flex-col justify-center relative w-full overflow-hidden">
        <div className="container max-w-5xl mx-auto px-6 relative z-10">
          <ScrollReveal delay={100}>
            <span className="text-zinc-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block text-center">The Paradigm Shift</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Problem & The Solution</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Problem */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 shadow-2xl">
                <div className="text-red-500 mb-6 w-12 h-12 flex items-center justify-center bg-red-500/10 rounded-xl"><Icon name="spark" /></div>
                <h3 className="text-2xl font-bold mb-4">현재 펫 시장의 한계</h3>
                <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                  <li><strong className="text-white">기존 커머스의 피출혈 경쟁:</strong> CAC(고객획득비용)는 치솟고 객단가는 낮아, 물건을 팔아도 남지 않는 악순환 구조입니다.</li>
                  <li><strong className="text-white">파편화된 데이터:</strong> 보호자들은 돈을 쓸 준비가 되어 있지만, 이들의 취향과 반려견의 데이터를 정확히 타겟팅하는 구심점(플랫폼)이 부재합니다.</li>
                </ul>
              </div>
              
              {/* Solution */}
              <div className="bg-gradient-to-br from-zinc-900 to-black border border-blue-500/30 rounded-3xl p-10 relative overflow-hidden shadow-[0_0_40px_rgba(0,113,227,0.1)]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full pointer-events-none" />
                <div className="text-blue-500 mb-6 w-12 h-12 flex items-center justify-center bg-blue-500/10 rounded-xl relative z-10"><Icon name="qr" /></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">LUMEN의 이원화 전략</h3>
                <ul className="space-y-4 text-zinc-300 text-sm leading-relaxed relative z-10">
                  <li><strong className="text-blue-400">오프라인 트로이 목마:</strong> 대중적인 '견생네컷' 부스로 고객이 제 발로 찾아오게 만들어 CAC를 '제로(0)'로 수렴시킵니다.</li>
                  <li><strong className="text-blue-400">데이터 독점 및 앱 락인:</strong> 오프라인에서 찍은 하이엔드 사진을 미끼로 LUMEN 앱 설치를 강제하여, 독점적인 IP 데이터베이스를 구축합니다.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 🍏 Slide 3: Business Model */}
      <div className="snap-start min-h-screen flex flex-col justify-center relative w-full overflow-hidden">
        <div className="container max-w-5xl mx-auto px-6 relative z-10">
          <ScrollReveal delay={100}>
            <span className="text-zinc-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block text-center">Scalability</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">무재고 다중 수익 구조 (BM)</h2>
            
            <div className="bg-black border border-zinc-800 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-30" />
              <p className="text-zinc-400 mb-12 text-center max-w-2xl mx-auto word-break-keep">사진 한 장의 수익에 기대지 않습니다. 획득한 IP(사진 데이터)를 기반으로 한계비용 제로의 '무재고 수익 모델'을 전개합니다.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-zinc-600 transition-colors">
                  <h4 className="font-bold text-lg mb-2">1. Offline Booth</h4>
                  <div className="text-sm text-zinc-500 mb-4">견생네컷 오프라인 매출</div>
                  <div className="text-2xl font-bold text-white mb-3">₩ 10,000 / 회</div>
                  <p className="text-sm text-zinc-400 word-break-keep">초기 트래픽 확보 및 마케팅 비용 상쇄를 위한 캐시카우 (CAC 방어 역할)</p>
                </div>
                
                <div className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800 border-t-4 border-t-gold hover:border-gold/50 transition-colors">
                  <h4 className="font-bold text-lg mb-2">2. IP Asset Commerce</h4>
                  <div className="text-sm text-zinc-500 mb-4">LUMEN 앱 굿즈/구독</div>
                  <div className="text-2xl font-bold text-gold mb-3">High LTV</div>
                  <p className="text-sm text-zinc-400 word-break-keep">앱 내에서 사진을 명품 키링, 커스텀 의류로 제작 (제휴사 아웃소싱을 통한 무재고 마진 창출)</p>
                </div>

                <div className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800 border-t-4 border-t-blue-500 hover:border-blue-500/50 transition-colors">
                  <h4 className="font-bold text-lg mb-2">3. B2B Casting Agency</h4>
                  <div className="text-sm text-zinc-500 mb-4">모델 매칭 수수료</div>
                  <div className="text-2xl font-bold text-blue-500 mb-3">20% Take Rate</div>
                  <p className="text-sm text-zinc-400 word-break-keep">앱 내의 하이엔드 사진 데이터를 브랜드 대행사에 제공하고 건당 캐스팅 수수료 수취</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 🍏 Slide 4: Market Size & Traction */}
      <div className="snap-start min-h-screen flex flex-col justify-center relative w-full overflow-hidden">
        <div className="container max-w-5xl mx-auto px-6 relative z-10">
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-zinc-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Momentum</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Traction & Go-to-Market</h2>
                <p className="text-zinc-400 leading-relaxed mb-8 word-break-keep text-lg">
                  우리는 수십억의 마케팅비를 태우지 않습니다. 단 한 번의 펫페어 팝업과 하남 스타필드의 초대형 트래픽을 통해 단기간에 압도적인 앱 가입자를 확보합니다.
                </p>
                <ul className="space-y-6">
                  <li className="flex justify-between items-center border-b border-zinc-800 pb-4">
                    <span className="text-zinc-300">Phase 1. 펫페어 선공개</span>
                    <strong className="text-white text-lg">앱 전환율 80% 목표</strong>
                  </li>
                  <li className="flex justify-between items-center border-b border-zinc-800 pb-4">
                    <span className="text-zinc-300">Phase 2. 스타필드 모놀리스 팝업</span>
                    <strong className="text-white text-lg">대중적 바이럴 & DB 수집</strong>
                  </li>
                  <li className="flex justify-between items-center pb-4">
                    <span className="text-zinc-300">Phase 3. 한남동 VIP 플래그십</span>
                    <strong className="text-gold text-lg">하이엔드 브랜딩 완성</strong>
                  </li>
                </ul>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-3xl flex flex-col items-center justify-center text-center shadow-2xl">
                <div className="w-24 h-24 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mb-6 border border-blue-500/50 shadow-[0_0_30px_rgba(0,113,227,0.3)]">
                  <span className="text-2xl font-bold">1%</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">The TAM, SAM, SOM</h3>
                <p className="text-zinc-400 word-break-keep leading-relaxed text-lg">
                  국내 300만 반려가구 중 상위 1%의 '올드머니/뉴머니' 타겟만 독점하더라도, 하이엔드 객단가를 통해 연 수백억 규모의 수익 창출이 가능한 거대한 시장입니다.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 🍏 Slide 5: The Ask */}
      <div className="snap-start min-h-screen flex flex-col justify-center relative w-full overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container max-w-4xl mx-auto px-6 relative z-10">
          <ScrollReveal delay={100}>
            <div className="text-center bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-[40px] p-16 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50" />
              
              <span className="text-green-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Fundraising</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Seed Round Open</h2>
              <p className="text-xl text-zinc-400 mb-12 word-break-keep">이번 주 펫페어에서 우리의 트래픽 독점 가설이 증명된 직후, 라운드를 오픈합니다.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-black border border-zinc-700 p-8 rounded-3xl hover:border-zinc-500 transition-colors">
                  <div className="text-sm text-zinc-500 mb-3 font-bold tracking-widest uppercase">조달 목표 (The Ask)</div>
                  <div className="text-4xl font-extrabold text-white">TBD</div>
                  <div className="text-xs text-zinc-600 mt-2">*To be disclosed</div>
                </div>
                <div className="bg-black border border-zinc-700 p-8 rounded-3xl hover:border-zinc-500 transition-colors">
                  <div className="text-sm text-zinc-500 mb-3 font-bold tracking-widest uppercase">자금 사용처 (Use of Funds)</div>
                  <div className="text-2xl font-bold text-white mb-2">App 고도화 & 한남 1호점</div>
                  <div className="text-xs text-zinc-600 mt-2">*공간 기획 및 SaaS R&D</div>
                </div>
              </div>
              
              <p className="text-sm text-zinc-500 bg-zinc-900/50 inline-block px-6 py-3 rounded-full border border-zinc-800">
                전체 IR 덱(PDF) 및 재무 추정치는 현장 미팅 후 개별 제공됩니다.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

    </div>
  );
}