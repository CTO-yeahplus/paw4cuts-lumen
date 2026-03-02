"use client";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";

export default function FundraisingPrepSection() {
  return (
    <section className="text-white py-32 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        
        <div className="mb-20">
          <ScrollReveal>
            <span className="text-green-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Pre-launch Strategy</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              투자 유치는 결과가 아니라,<br/>가설의 증명 과정입니다.
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl word-break-keep leading-relaxed">
              페어가 끝난 뒤에 결과만 들고 찾아가는 것은 하수들의 방식입니다. NX는 페어 시작 전에 가설을 던지고, 현장의 열기로 증명한 뒤, 페어 종료 직후 자금을 조달하는 3단계를 지금 시작하겠습니다.
            </p>
          </ScrollReveal>
        </div>

        <div className="space-y-16">
          
          {/* 🍏 Step 1. Core KPIs */}
          <ScrollReveal delay={100}>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-white border border-zinc-700">1</div>
                <h3 className="text-2xl font-bold">핵심 KPI 트래킹 셋업 (현장 스태프 지시사항)</h3>
              </div>
              <p className="text-zinc-400 mb-8">투자자는 단순 사진 판매액에 관심 없습니다. 우리의 '앱 생태계 전환율'을 증명할 아래 3가지 지표를 무조건 수집하십시오.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black border border-zinc-800 p-6 rounded-2xl">
                  <div className="text-green-400 mb-4"><Icon name="spark" /></div>
                  <h4 className="font-bold mb-2">App Conversion</h4>
                  <p className="text-sm text-zinc-500">대기열 시스템을 통한 <b>LUMEN 앱 설치율</b> (목표: 부스 이용자의 80% 이상)</p>
                </div>
                <div className="bg-black border border-zinc-800 p-6 rounded-2xl">
                  <div className="text-green-400 mb-4"><Icon name="qr" /></div>
                  <h4 className="font-bold mb-2">Waitlist Opt-in</h4>
                  <p className="text-sm text-zinc-500">앱 가입자 중 신규 상품(독윅, 밑컷) <b>사전 예약 알림 동의율</b> (미래 매출 선행 지표)</p>
                </div>
                <div className="bg-black border border-zinc-800 p-6 rounded-2xl">
                  <div className="text-green-400 mb-4"><Icon name="gift" /></div>
                  <h4 className="font-bold mb-2">Up-selling Rate</h4>
                  <p className="text-sm text-zinc-500">기본 사진 외 <b>멍스널컬러 리포트 및 키링(굿즈)</b>으로 이어진 추가 결제율</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 🍏 Step 2. Cold Email Script (The Teaser) */}
          <ScrollReveal delay={200}>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-10 relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-white border border-zinc-700">2</div>
                <h3 className="text-2xl font-bold">LUMEN 프리미어 초대장 (이번 주 발송)</h3>
              </div>
              <p className="text-zinc-400 mb-8 word-break-keep">
                소비재, 플랫폼, 펫테크 투자 이력이 있는 타겟 VC에게 페어 시작 전인 <b>이번 주 수요일/목요일</b>에 발송할 스크립트입니다. 현장 초청시에는 압도적인 자신감 필수.
              </p>

              {/* Email Mockup */}
              <div className="bg-black rounded-2xl border border-zinc-700 overflow-hidden shadow-2xl">
                <div className="bg-zinc-800 px-4 py-3 border-b border-zinc-700 flex items-center gap-2">
                  <div className="flex gap-1.5 mr-4">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  </div>
                  <div className="text-xs text-zinc-400 font-mono">New Message</div>
                </div>
                <div className="p-6 md:p-8 text-sm md:text-base text-zinc-300 font-sans leading-relaxed space-y-4">
                  <div>
                    <span className="text-zinc-500 w-20 inline-block">Subject:</span>
                    <strong className="text-white tracking-wide">[견생네컷 x LUMEN] 하이엔드 펫 라이프스타일 IP 자산화의 시작점, VIP 패스를 준비했습니다.</strong>
                  </div>
                  <hr className="border-zinc-800 my-4" />
                  <p>OOO 심사역님, 안녕하십니까. 견생네컷팀을 맡고 있는 인생네컷 전무 고재혁입니다.</p>
                  <p className="word-break-keep">
                    심사역님께서 투자하신 [기존 포트폴리오사 이름]의 성공적인 스케일업 과정을 인상 깊게 보았으며, 
                    우리가 만들고 있는 <b>'데이터 기반의 하이엔드 펫 라이프스타일 플랫폼'</b>이 심사역님의 투자 철학과 정확히 일치한다고 확신하여 연락드립니다.
                  </p>
                  <p className="word-break-keep text-white font-medium">
                    우리는 '견생네컷'이라는 가장 대중적인 오프라인 하드웨어(트로이 목마)를 통해 막대한 트래픽과 사진 데이터를 흡수하고, 이를 'LUMEN'이라는 온라인 구독/커머스 생태계로 100% 락인(Lock-in)시키는 이원화 비즈니스 모델을 구축했습니다. (피치덱 첨부)
                  </p>
                  <p className="word-break-keep">
                    수백 장의 서류보다 단 한 번의 현장 증명이 빠르다는 것을 압니다.<br/>
                    <b>이번 주 [페어 날짜, 예: 금~일], OOO 펫페어에서 우리의 가설이 실제로 트래픽을 진공청소기처럼 빨아들이고, 현장에서 즉시 앱 생태계로 치환되는 압도적인 순간을 최초로 공개합니다.</b>
                  </p>
                  <p className="word-break-keep">
                    줄을 서지 않고 '오디너리독스 마스터피스'와 '멍스널컬러 AI 리포트'를 경험하실 수 있도록 <b>[현장 VIP 패스]</b>를 준비해 두겠습니다. 
                    잠깐 들러 우리의 현장 통제력과 고객들의 소유욕이 폭발하는 순간을 직접 확인해 주십시오. 
                  </p>
                  <p>
                    방문이 어려우시더라도, 페어 종료 직후 우리가 증명해 낸 핵심 KPI(앱 전환율, 독윅/밑컷 사전 예약 수)를 바탕으로 다음 주 중 짧은 티타임을 요청드리고자 합니다.
                  </p>
                  <p>현장 방문을 원하신다면 회신 부탁드립니다. VIP 동선을 안내해 드리겠습니다.</p>
                  <p>인생네컷 전무 고재혁 드림.</p>
                </div>
              </div>
              <div className="mt-4 text-right">
                <button 
                  className="text-sm bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ml-auto"
                  onClick={() => alert("스크립트가 복사되었습니다.")} // 실제 구현시 navigator.clipboard.writeText 사용
                >
                  <Icon name="copy" /> Copy Script
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* 🍏 Step 3. Visual Proof */}
          <ScrollReveal delay={300}>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-white border border-zinc-700">3</div>
                <h3 className="text-2xl font-bold">시각적 증명(Visual Proof) 수집</h3>
              </div>
              <p className="text-zinc-400 mb-6 word-break-keep">
                페어 종료 후 업데이트할 IR 덱의 핵심은 'FOMO(Fear Of Missing Out)'를 자극하는 것입니다. 팀원 중 1명은 전담으로 다음의 3가지 장면을 무조건 고화질로 캡처합니다.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-green-500">✓</div>
                  <div className="text-zinc-300"><b>The Monolith:</b> 거대 LED 전광판을 넋을 잃고 바라보는 수많은 인파의 뒷모습.</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-green-500">✓</div>
                  <div className="text-zinc-300"><b>The Lock-in:</b> 부스 밖에서 스마트폰(iPad)으로 LUMEN 앱을 앞다투어 다운받고 대기를 등록하는 장면.</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-green-500">✓</div>
                  <div className="text-zinc-300"><b>The Viral:</b> 자신의 강아지 화보가 전광판에 나오자 환호하며 인스타그램 스토리로 촬영하는 보호자의 표정.</div>
                </li>
              </ul>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}