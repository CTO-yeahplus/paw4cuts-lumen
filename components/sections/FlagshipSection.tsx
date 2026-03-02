"use client";
import { useState, useEffect } from "react";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";

const ledImages = [
  "/images/img_01.png",
  "/images/img_02.png",
  "/images/img_03.png",
  "/images/img_04.png",
  "/images/img_05.png",
  "/images/img_06.png",
  "/images/img_03.png",
  "/images/img_07.png",
  "/images/img_08.png",
  "/images/img_09.png",
  "/images/img_10.png",
  "/images/img_11.png"
];

export default function FlagshipSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % ledImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-black text-white min-h-screen py-24">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-24">
          <ScrollReveal>
            <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4 block">Spatial Strategy</span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              공간은 기계가 아니라,<br/>브랜드 그 자체입니다.
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto word-break-keep">
              트래픽을 진공청소기처럼 빨아들이는 스타필드 팝업부터,<br/>상위 0.1%를 위한 한남동 프라이빗 라운지까지.
            </p>
          </ScrollReveal>
        </div>

        {/* 🍏 Phase 1: The Pop-up Strategy */}
        <ScrollReveal delay={100}>
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 border border-blue-500/30">01</div>
              <h2 className="text-3xl font-bold">The Casting Board (Pop-up)</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-zinc-900/50 border border-zinc-800 rounded-[40px] p-8 md:p-12">
              
              {/* 패널 컨테이너 */}
              <div className="bg-black border border-zinc-800 rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-center items-center text-center shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-20 pointer-events-none" />
                
                {/* 🍏 엄격한 2:3 비율의 거대 세로형 LED 스크린 */}
                <div className="w-full max-w-[320px] aspect-[3/4] rounded-2xl mb-8 relative overflow-hidden border border-zinc-800 shadow-[0_0_60px_rgba(0,113,227,0.2)] bg-zinc-900">
                  
                  {/* 🍏 이미지 롤링 + 켄 번스(천천히 확대) 효과 적용 */}
                  {ledImages.map((img, idx) => {
                    const isActive = currentImageIndex === idx;
                    return (
                      <div 
                        key={`${img}-${idx}`}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                      >
                        {/* 크기(Scale)가 천천히 커지는 내부 레이어 */}
                        <div 
                          className={`w-full h-full bg-cover bg-center transition-transform duration-[6000ms] ease-out ${isActive ? 'scale-110' : 'scale-100'}`}
                          style={{ backgroundImage: `url('${img}')` }}
                        />
                      </div>
                    );
                  })}
                  
                  {/* 세로 비율 스캐닝 레이저 라인 */}
                  <div className="absolute left-0 w-full h-1 bg-blue-500/60 shadow-[0_0_30px_#0071e3] animate-[verticalScan_3s_ease-in-out_infinite] z-30" />
                  
                  {/* 흑백 사진 필터 효과
                  <div className="absolute inset-0 backdrop-grayscale z-20 pointer-events-none" /> 
                   */}
                </div>

                <div className="relative z-30">
                  <span className="text-white font-bold tracking-widest text-sm bg-black/50 px-6 py-3 rounded-full border border-zinc-800 backdrop-blur-md">
                    SCAN TO JOIN THE RUNWAY
                  </span>
                </div>
              </div>
              
              {/* 우측 텍스트 영역 */}
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">미끼와 강제화의 예술</h3>
                  <p className="text-zinc-400 leading-relaxed word-break-keep text-lg">
                    펫페어와 스타필드 한가운데 거대한 검은색 세로형 모놀리스(Monolith) 구조물을 세웁니다. 외벽 전체를 덮은 2:3 비율의 LED 스크린에는 방금 안에서 사진을 찍은 강아지들의 압도적인 화보가 흐릅니다. 
                  </p>
                </div>
                <ul className="space-y-8">
                  <li className="flex gap-5">
                    <div className="mt-1 text-blue-500"><Icon name="qr" /></div>
                    <div>
                      <strong className="block text-white mb-2 text-lg">App-Only 웨이팅 시스템</strong>
                      <p className="text-zinc-400 leading-relaxed">거대한 QR코드를 찍고 <b>'LUMEN 앱'을 다운받아야만 대기 번호가 발급</b>됩니다. 촬영 전 100% 앱 설치(Lock-in)를 강제하는 완벽한 명분입니다.</p>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <div className="mt-1 text-blue-500"><Icon name="spark" /></div>
                    <div>
                      <strong className="block text-white mb-2 text-lg">The Reveal (공개)</strong>
                      <p className="text-zinc-400 leading-relaxed">촬영 후 밖으로 나오면 내 아이의 마스터피스가 거대한 세로형 전광판을 장식합니다. 이 극적인 순간은 현장의 환호와 자발적인 인스타그램 바이럴을 폭발시킵니다.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 🍏 Phase 2: The Flagship Store */}
        <ScrollReveal delay={200}>
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold border border-gold/30">02</div>
              <h2 className="text-3xl font-bold">The 견생네컷xLUMEN Lounge (Flagship in 한남)</h2>
            </div>
            
            <p className="text-xl text-zinc-400 mb-12 max-w-3xl word-break-keep">
              한남동의 1호점은 '사진을 찍는 자판기 공간'이 아닙니다. 상위 0.1% 명품 펫 브랜드를 위한 <b>'프라이빗 캐스팅 라운지'</b>이자 <b>'갤러리'</b>로 설계된 완벽한 오프라인 쇼룸입니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-[32px] p-10 hover:border-gold/50 transition-colors group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-zinc-500 group-hover:text-gold transition-colors"><Icon name="spark" /></div>
                  <h3 className="text-2xl font-bold">1. The Facade <span className="text-zinc-500 text-lg font-normal ml-2">갤러리의 은유</span></h3>
                </div>
                <p className="text-zinc-400 leading-relaxed word-break-keep text-lg">
                  내부가 훤히 들여다보이는 통유리를 거부합니다. 반투명한 글래스블록과 무거운 나무문을 사용하여 외부의 시선을 차단합니다. 커다란 간판 대신, 벽면에 작고 빛나는 금속 현판으로 <b>[LUMEN : Casting & Heritage]</b>만을 적어두어 올드머니의 호기심을 유발합니다.
                </p>
              </div>

              <div className="bg-zinc-900/80 border border-zinc-800 rounded-[32px] p-10 hover:border-gold/50 transition-colors group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-zinc-500 group-hover:text-gold transition-colors"><Icon name="people" /></div>
                  <h3 className="text-2xl font-bold">2. The Ritual <span className="text-zinc-500 text-lg font-normal ml-2">체크인 경험</span></h3>
                </div>
                <p className="text-zinc-400 leading-relaxed word-break-keep text-lg">
                  무인 자판기의 방치를 허용하지 않습니다. 100% 1:1 예약제 혹은 프라이빗 워크인으로 운영되며, 문을 여는 순간 직원이 다가가 태블릿으로 Apple Store처럼 응대합니다. 고객의 <b>앱(Vault) 바코드를 스캔하여 우아하게 체크인</b>을 돕습니다.
                </p>
              </div>

              <div className="bg-zinc-900/80 border border-zinc-800 rounded-[32px] p-10 hover:border-gold/50 transition-colors group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-zinc-500 group-hover:text-gold transition-colors"><Icon name="gift" /></div>
                  <h3 className="text-2xl font-bold">3. The Gallery <span className="text-zinc-500 text-lg font-normal ml-2">입장 & 대기</span></h3>
                </div>
                <p className="text-zinc-400 leading-relaxed word-break-keep text-lg">
                  로비에 사진 기계는 단 한 대도 보이지 않습니다. 벽면은 오디너리독스 톤의 흑백 마스터피스들이 걸린 미술관입니다. 중앙의 무거운 아일랜드 테이블 위에는 유리 진열장 안에 <b>최고급 가죽 키링(Object)과 명품 펫 의류가 보석처럼 전시</b>되어 앱 결제를 유도합니다.
                </p>
              </div>

              <div className="bg-zinc-900/80 border border-zinc-800 rounded-[32px] p-10 hover:border-gold/50 transition-colors group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-zinc-500 group-hover:text-gold transition-colors"><Icon name="copy" /></div>
                  <h3 className="text-2xl font-bold">4. The Studio <span className="text-zinc-500 text-lg font-normal ml-2">촬영 공간</span></h3>
                </div>
                <p className="text-zinc-400 leading-relaxed word-break-keep text-lg">
                  은밀한 커튼이나 슬라이딩 도어를 열어야만 비로소 스튜디오(부스)가 나타납니다. 강아지들이 극도의 안정감을 느끼도록 바닥은 미끄럼 방지 특수 소재로 마감하고, 아이들의 눈 피로도를 완벽히 차단한 <b>플리커 프리(Flicker-free) 간접 조명</b>을 세팅했습니다.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
      
      <style jsx>{`
        .text-gold { color: #FFD700; }
        .bg-gold\\/20 { background-color: rgba(255,215,0,0.2); }
        .border-gold\\/30 { border-color: rgba(255,215,0,0.3); }
        .hover\\:border-gold\\/50:hover { border-color: rgba(255,215,0,0.5); }
        
        @keyframes verticalScan {
          0% { top: 0%; opacity: 1; }
          50% { top: calc(100% - 4px); opacity: 0.5; }
          100% { top: 0%; opacity: 1; }
        }
      `}</style>
    </section>
  );
}