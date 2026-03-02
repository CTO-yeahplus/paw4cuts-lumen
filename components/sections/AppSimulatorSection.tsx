"use client";
import { useState, useEffect } from "react";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";

// 🍏 앱 시뮬레이터에서 순환할 디지털 자산(Asset) 배열
const vaultAssets = [
  { id: 1, name: "COCO", sub: "Maltipoo · 3.2kg · 2021.04.17", img: "/images/img_07.png", color: "#Warm_Ivory", match: "98%" },
  { id: 2, name: "MAX", sub: "Dalmasian · 4.1kg · 2023.11.11", img: "/images/img_03.png", color: "#Deep_Charcoal", match: "95%" },
  { id: 3, name: "BELLA", sub: "Bichon · 5.0kg · 2024.03.07", img: "/images/img_08.png", color: "#Snow_White", match: "99%" },
  { id: 4, name: "LUNA", sub: "Husky · 2.8kg · 2022.03.02", img: "/images/img_04.png", color: "#Golden_Sand", match: "92%" },
  { id: 5, name: "SUNNY", sub: "Pomeranian · 2.8kg · 2020.06.30", img: "/images/img_02.png", color: "#Golden_Sand", match: "92%" }

];

export default function AppSimulatorSection() {
  const [showToast, setShowToast] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  
  // 🍏 결제 성공 모달 상태 추가
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);

  // 컴포넌트 마운트 시 "자산 동기화 완료" 알림 효과
  useEffect(() => {
    const timer = setTimeout(() => setShowToast(true), 1500);
    const hideTimer = setTimeout(() => setShowToast(false), 5000);
    return () => { clearTimeout(timer); clearTimeout(hideTimer); };
  }, []);

  // 4초마다 다음 반려견 에셋으로 부드럽게 롤링
  useEffect(() => {
    const assetTimer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % vaultAssets.length);
    }, 4000);
    return () => clearInterval(assetTimer);
  }, []);

  const activeAsset = vaultAssets[currentIdx];

  // 🍏 결제 버튼 클릭 시 실행될 함수
  const handlePayment = () => {
    setShowPaymentSuccess(true);
    // 2.5초 후 결제 완료창과 결제 바텀시트를 모두 닫음
    setTimeout(() => {
      setShowPaymentSuccess(false);
      setShowCheckout(false);
    }, 2500);
  };

  return (
    <section className="py-24 overflow-hidden relative min-h-screen flex flex-col justify-center items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10 flex flex-col xl:flex-row items-center gap-16 justify-center">
        
        {/* Left: 전략 설명 */}
        <div className="flex-1 max-w-xl text-center xl:text-left">
          <ScrollReveal>
            <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">The Deferred Deep Link</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-white">
              인화지는 껍데기입니다.<br/>진짜 자산은 이 금고(LUMEN)에 꽂힙니다.
            </h1>
            <p className="text-lg text-zinc-400 word-break-keep leading-relaxed mb-8">
              고객이 오프라인 부스에서 뽑은 사진의 QR 코드를 찍는 순간, <b>LUMEN 앱이 설치되며 해당 반려견의 고화질 원본과 멍스널컬러 리포트가 개인 금고에 자동 동기화</b>됩니다. 그리고 터치 한 번으로 수십만 원짜리 명품 굿즈 결제가 일어납니다.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center"><Icon name="spark" /></div>
                <div className="text-left">
                  <h4 className="text-white font-bold text-sm">Softlanding 온보딩 (Frictionless)</h4>
                  <p className="text-xs text-zinc-400">QR 스캔 ➔ 앱 설치 ➔ Apple 간편 로그인 ➔ 자산 수령</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-gold/20 text-gold flex items-center justify-center"><Icon name="gift" /></div>
                <div className="text-left">
                  <h4 className="text-white font-bold text-sm">무재고 커머스 (Zero-Inventory)</h4>
                  <p className="text-xs text-zinc-400">사진 하단 버튼 클릭 시 즉각적인 하이엔드 굿즈 렌더링 및 결제</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right: iPhone Simulator */}
        <ScrollReveal delay={200}>
          <div className="relative mx-auto w-[340px] h-[720px] bg-black rounded-[50px] border-[12px] border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.8),_inset_0_0_20px_rgba(0,0,0,1)] overflow-hidden flex flex-col ring-1 ring-white/10">
            
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-50 flex items-center justify-between px-3">
              <div className="w-2 h-2 rounded-full bg-blue-500/50" />
              <div className="w-2 h-2 rounded-full bg-green-500/50" />
            </div>

            {/* iOS Top Status Bar */}
            <div className="absolute top-0 w-full h-12 flex items-center justify-between px-6 pt-1 z-40 text-white font-medium text-[11px] tracking-wide pointer-events-none">
              <span>9:41</span>
              <div className="flex gap-1.5 items-center">
                <Icon name="spark" /> 
                <div className="w-5 h-2.5 border border-white rounded-[3px] relative">
                  <div className="absolute top-0.5 left-0.5 right-0.5 bottom-0.5 bg-white rounded-[1px]" />
                </div>
              </div>
            </div>

            {/* Toast Notification */}
            <div className={`absolute top-14 left-4 right-4 bg-zinc-900/90 backdrop-blur-xl border border-zinc-700 p-4 rounded-2xl z-40 flex items-center gap-3 shadow-2xl transition-all duration-700 ${showToast ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
              <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center"><Icon name="spark" /></div>
              <div>
                <div className="text-white font-bold text-xs">New Asset Synced</div>
                <div className="text-zinc-400 text-[10px]">새로운 마스터피스가 금고에 보관되었습니다.</div>
              </div>
            </div>

            {/* 🍏 Apple Pay Success Modal (네이티브 결제 완료 창) */}
            <div className={`absolute inset-0 z-[100] flex items-center justify-center transition-all duration-500 ${showPaymentSuccess ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
              {/* 블러 배경 */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
              {/* 모달 창 */}
              <div className={`relative bg-zinc-900/90 backdrop-blur-xl border border-zinc-700 w-[200px] aspect-square rounded-[32px] flex flex-col items-center justify-center shadow-2xl transform transition-transform duration-500 ${showPaymentSuccess ? 'scale-100' : 'scale-75'}`}>
                {/* 체크 애니메이션 아이콘 */}
                <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center mb-4 text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-bold tracking-wider mb-2">Done</h3>
                <p className="text-zinc-400 text-[10px] text-center word-break-keep px-4">
                  제휴 공장으로 발주가<br/>자동 전송되었습니다
                </p>
              </div>
            </div>

            {/* Main App Content (The Vault) */}
            <div className="flex-1 relative overflow-hidden bg-zinc-950 flex flex-col">
              
              <div className="w-full flex-1 relative bg-zinc-900">
                {vaultAssets.map((asset, idx) => {
                  const isActive = currentIdx === idx;
                  return (
                    <div 
                      key={`main-${asset.id}`}
                      className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out ${
                        isActive ? 'opacity-100 scale-105 z-10' : 'opacity-0 scale-100 z-0'
                      }`}
                      style={{ backgroundImage: `url('${asset.img}')` }} 
                    />
                  );
                })}
                
                <div className="absolute inset-0  z-20 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-30 pointer-events-none" />
                
                {/* Top App Bar */}
                <div className="absolute top-16 left-6 right-6 flex justify-between items-center z-40">
                  <div className="text-white font-bold tracking-[0.2em] text-sm">LUMEN</div>
                  <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs">CJ</div>
                </div>

                {/* Metadata Area */}
                <div className="absolute bottom-32 left-6 right-6 z-40 transition-all duration-500">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-500 text-black text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">
                      AI Color Match {activeAsset.match}
                    </span>
                    <span className="bg-zinc-800 text-zinc-300 text-[9px] px-2 py-1 rounded-full">
                      {activeAsset.color}
                    </span>
                  </div>
                  <h2 className="text-white text-5xl font-extrabold tracking-tighter mb-1 transition-all">{activeAsset.name}</h2>
                  <p className="text-zinc-400 text-sm tracking-wide transition-all">{activeAsset.sub}</p>
                </div>
              </div>

              {/* Bottom Sticky Action Area */}
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-50 flex flex-col justify-end px-6 pb-8 pointer-events-none">
                <button 
                  onClick={() => setShowCheckout(true)}
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-black text-white px-6 py-4 rounded-full font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex justify-center items-center gap-2 pointer-events-auto"
                >
                  <Icon name="gift" /> LUMEN Object 제작하기
                </button>
              </div>

            </div>

            {/* Bottom Sheet Checkout Simulator */}
            <div className={`absolute bottom-0 left-0 w-full h-[60%] bg-zinc-900 rounded-t-3xl border-t border-zinc-700 z-[60] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${showCheckout ? 'translate-y-0' : 'translate-y-full'}`}>
              <div className="w-full flex justify-center pt-3 pb-2"><div className="w-12 h-1.5 bg-zinc-700 rounded-full" /></div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Saffiano Leather Keyring</h3>
                    <p className="text-zinc-400 text-xs">최고급 이탈리아 가죽 & 맞춤형 흑백 각인</p>
                  </div>
                  <button onClick={() => setShowCheckout(false)} className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 text-xs">✕</button>
                </div>

                {/* 3D Mockup Simulation Box */}
                <div className="flex-1 bg-zinc-950 rounded-2xl border border-zinc-800 mb-6 flex items-center justify-center relative overflow-hidden">
                  
                  {vaultAssets.map((asset, idx) => (
                    <div 
                      key={`bg-${asset.id}`}
                      className={`absolute inset-0 bg-cover bg-center backdrop-grayscale blur-md transition-opacity duration-1000 ${
                        currentIdx === idx ? 'opacity-20 z-10' : 'opacity-0 z-0'
                      }`}
                      style={{ backgroundImage: `url('${asset.img}')` }}
                    />
                  ))}
                  
                  <div className="relative z-20 text-center flex flex-col items-center w-full">
                    {/* 키링 가죽 바디 및 금속 고리 */}
                    <div className="relative w-20 h-28 bg-zinc-800 rounded-xl mx-auto mb-3 border border-zinc-600 shadow-2xl flex flex-col items-center justify-start mt-3 overflow-hidden">
                      <div className="absolute -top-4 w-6 h-6 border-[3px] border-zinc-400 rounded-full shadow-sm z-30"></div>
                      <div className="absolute -top-1 w-2 h-3 bg-zinc-500 rounded-sm z-20"></div>
                      
                      {vaultAssets.map((asset, idx) => (
                        <div 
                          key={`ar-${asset.id}`}
                          className={`absolute inset-0 w-full h-full bg-cover bg-center mix-blend-luminosity grayscale transition-opacity duration-1000 ${
                            currentIdx === idx ? 'opacity-70 z-10' : 'opacity-0 z-0'
                          }`}
                          style={{ backgroundImage: `url('${asset.img}')` }}
                        />
                      ))}
                    </div>
                    
                    <span className="text-zinc-500 text-[10px] bg-black/50 px-3 py-1 rounded-full border border-zinc-800 backdrop-blur-md">
                      {activeAsset.name}의 화보가 가죽에 각인되었습니다
                    </span>
                  </div>
                </div>

                {/* 🍏 Apple Pay Button */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white font-bold">₩ 48,000</span>
                  <span className="text-zinc-500 text-xs">무료 배송</span>
                </div>
                <button 
                  onClick={handlePayment} // 브라우저 alert 대신 내부 UI 함수 호출
                  className="w-full bg-white text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[0.98] transition-transform"
                >
                   Pay
                </button>
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
      <style jsx>{`
        .text-gold { color: #FFD700; }
        .bg-gold\\/20 { background-color: rgba(255,215,0,0.2); }
      `}</style>
    </section>
  );
}