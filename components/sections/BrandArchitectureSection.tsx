"use client";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";

export default function BrandArchitectureSection() {
  return (
    <section className="bg-black text-white py-32 border-t border-zinc-900 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        
        <ScrollReveal>
          <div className="text-center mb-24">
            <span className="text-zinc-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">The Trojan Horse Strategy</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              가장 대중적인 간판 뒤에 숨겨진,<br/>가장 은밀한 하이엔드 생태계.
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto word-break-keep leading-relaxed">
              오프라인의 접근성과 온라인의 프리미엄을 동시에 장악하기 위해, 우리는 하드웨어와 소프트웨어의 브랜드를 완벽하게 분리합니다.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-4 relative">
          
          {/* 🍏 Left: 견생네컷 (Hardware / Bait) */}
          <div className="flex-1 w-full">
            <ScrollReveal delay={100}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-10 hover:border-zinc-600 transition-colors h-full">
                <div className="flex justify-between items-start mb-12">
                  <div className="text-zinc-500 font-mono text-xs tracking-widest">STEP 01. OFFLINE BAIT</div>
                  <div className="w-10 h-10 rounded-full bg-black border border-zinc-800 flex items-center justify-center text-white"><Icon name="people" /></div>
                </div>
                <h3 className="text-3xl font-extrabold mb-4 tracking-tight">견생네컷</h3>
                <span className="inline-block px-3 py-1 bg-zinc-800 text-zinc-300 text-xs font-bold rounded-lg mb-6">친근함 · 대중성 · 진입장벽 제로</span>
                <p className="text-zinc-400 leading-relaxed word-break-keep mb-8">
                  대중에게 친숙한 '네컷' 프레임을 차용하여 심리적 진입 장벽을 완전히 허뭅니다. <b>누구나 부담 없이 문을 열고 들어오게 만드는 완벽한 '트로이 목마(미끼)' 역할</b>을 수행하며 마케팅 비용 없이 막대한 트래픽과 사진 데이터를 흡수합니다.
                </p>
                <div className="border-t border-zinc-800 pt-6 mt-auto">
                  <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-2">Key Role</div>
                  <div className="text-white font-medium">물리적 트래픽 확보 및 데이터 추출</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* 🍏 Center: Transition Arrow */}
          <ScrollReveal delay={200}>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-500 flex items-center justify-center text-black z-10 relative shadow-[0_0_30px_rgba(0,113,227,0.5)] transform rotate-90 md:rotate-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
          </ScrollReveal>

          {/* 🍏 Right: LUMEN (Software / Vault) */}
          <div className="flex-1 w-full">
            <ScrollReveal delay={300}>
              <div className="bg-gradient-to-br from-zinc-900 to-black border border-blue-500/30 rounded-[32px] p-10 hover:border-blue-500 transition-colors h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-all" />
                
                <div className="flex justify-between items-start mb-12 relative z-10">
                  <div className="text-blue-500 font-mono text-xs tracking-widest">STEP 02. ONLINE VAULT</div>
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-blue-500"><Icon name="spark" /></div>
                </div>
                <h3 className="text-3xl font-extrabold mb-4 tracking-tight text-white relative z-10">Project LUMEN</h3>
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-lg mb-6 border border-blue-500/30 relative z-10">프라이빗 · 하이엔드 · 락인(Lock-in)</span>
                <p className="text-zinc-300 leading-relaxed word-break-keep mb-8 relative z-10">
                  가벼운 마음으로 들어온 고객이 사진을 수령하는 순간 마주하는 <b>거대하고 은밀한 하이엔드 디지털 생태계</b>입니다. 멍스널컬러 리포트, AR 굿즈 렌더링, B2B 모델 캐스팅 등 고객이 절대 이탈할 수 없는 강력한 자산 가치를 부여합니다.
                </p>
                <div className="border-t border-zinc-800 pt-6 mt-auto relative z-10">
                  <div className="text-xs text-blue-400 uppercase tracking-widest font-bold mb-2">Key Role</div>
                  <div className="text-white font-medium">데이터 자산화 및 무재고 수익 창출</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}