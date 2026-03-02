"use client";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";

export default function OperationPlaybook() {
  return (
    <section className="text-white py-20">
      <div className="container max-w-4xl mx-auto px-6">
        
        {/* Document Header */}
        <div className="border-b border-zinc-800 pb-10 mb-12">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-red-500/20 text-red-500 text-xs font-bold rounded-md tracking-widest uppercase">Strictly Confidential</span>
              <span className="text-zinc-500 text-sm font-mono">Doc. Ref: 2026-PF-OPS</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">
              Project LUMEN: 펫페어 오퍼레이션 가이드북
            </h1>
            <p className="text-zinc-400 text-lg word-break-keep leading-relaxed">
              본 문서는 펫페어 현장 스태프(Casting Director)를 위한 공식 행동 지침서입니다. 우리의 목표는 단순한 사진 촬영이 아닙니다. <b>오프라인 '견생네컷' 부스에서 고객을 유혹하고, 'LUMEN' 앱으로 100% 디지털 전환(Lock-in)시키는 것</b>입니다.
            </p>
          </ScrollReveal>
        </div>

        {/* 🍏 Brand Architecture Alignment */}
        <ScrollReveal delay={100}>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-12 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-3 text-gold">The Dual Architecture</h2>
              <p className="text-zinc-300 text-sm leading-relaxed word-break-keep">
                고객이 마주하는 물리적 부스의 이름은 <b>'견생네컷(Paw4Cuts)'</b>입니다. 하지만 사진을 찍고 난 후, 데이터가 저장되고 멍스널컬러가 분석되며 굿즈를 구매하는 모든 디지털 경험은 <b>'LUMEN(앱)'</b>에서 이루어집니다. 현장에서 <i>"사진은 견생네컷에서, 확인과 평생 소장은 LUMEN 앱에서"</i>라는 동선을 완벽히 통제하십시오.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex gap-2 justify-center text-center">
              <div className="bg-black border border-zinc-800 rounded-xl p-4 flex-1">
                <div className="text-xs text-zinc-500 mb-1">Offline Hardware</div>
                <div className="font-bold text-white">견생네컷</div>
              </div>
              <div className="flex items-center text-zinc-600">→</div>
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4 flex-1">
                <div className="text-xs text-blue-400 mb-1">Online Software</div>
                <div className="font-bold text-blue-500">LUMEN App</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 🍏 Phase 1: Traffic & Lock-in */}
        <div className="space-y-8">
          <ScrollReveal delay={150}>
            <div className="bg-black border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-500" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-blue-500 font-bold">1</div>
                <h3 className="text-2xl font-bold">App-Only 웨이팅 (줄 세우기 금지)</h3>
              </div>
              <p className="text-zinc-400 text-sm mb-6">
                물리적인 대기줄을 만들지 마십시오. 거대 LED 전광판을 보고 다가오는 고객에게 iPad를 들고 우아하게 접근하여 LUMEN 앱 설치를 유도합니다.
              </p>
              <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
                <div className="text-xs text-green-400 font-bold tracking-widest uppercase mb-2">Staff Script</div>
                <p className="text-zinc-200 italic font-medium leading-relaxed">
                  "보호자님, 환영합니다. 현재 '견생네컷' 부스는 혼잡을 막기 위해 프라이빗 예약제로 운영 중입니다. 저기 보이는 QR을 스캔하셔서 <b>LUMEN 앱을 설치하시면, 저희가 대기열에 올려드리고 순서가 되면 앱 푸시 알림으로 모시겠습니다.</b> 기다리시는 동안 편하게 다른 곳을 구경하고 오십시오."
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 🍏 Phase 2: Future Products Teasing */}
          <ScrollReveal delay={200}>
            <div className="bg-black border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-orange-500" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-orange-500 font-bold">2</div>
                <h3 className="text-2xl font-bold">독윅 & 밑컷 : 기대감 증폭 (Teasing)</h3>
              </div>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                염호영 작가의 영화 존윅(JohnWick)에서 영감을 받은 <b>독윅</b> 과 강화유리판에 강아지를 올려놓고 촬영하는 <b>견생밑컷</b>은 이번 페어에서 촬영할 수 없습니다. 이는 개발 지연이 아니라 <b>'완벽한 퀄리티를 위한 R&D 과정'</b>이자 앱 가입을 위한 강력한 무기입니다.
              </p>
              <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
                <div className="text-xs text-green-400 font-bold tracking-widest uppercase mb-2">Staff Script</div>
                <p className="text-zinc-200 italic font-medium leading-relaxed">
                  "보호자님, 포스터에서 보신 '독윅'과 '견생밑컷' 컨셉에 관심이 많으시군요. 이 두 라인업은 타협 없는 스튜디오급 퀄리티를 구현하기 위해 현재 마지막 퀄러티 테스트 중입니다. <b>오늘 LUMEN 앱을 설치해 두시면, 정식 런칭 시 가장 먼저 '우선 예약권'과 '무료 촬영 쿠폰'을 앱으로 보내드리겠습니다.</b>"
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 🍏 Phase 3: The Handoff (디지털 치환) */}
          <ScrollReveal delay={250}>
            <div className="bg-black border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-purple-500" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-purple-500 font-bold">3</div>
                <h3 className="text-2xl font-bold">촬영 후 Handoff (디지털 금고 연동)</h3>
              </div>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                사진이 출력되어 나올 때가 <b>견생네컷(오프라인)에서 LUMEN(온라인)으로 전환되는 결정적 순간</b>입니다. 인화지를 그냥 건네주지 말고, 반드시 보증서(Certificate) 개념으로 설명하며 앱 스캔을 강제하십시오.
              </p>
              <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
                <div className="text-xs text-green-400 font-bold tracking-widest uppercase mb-2">Staff Script</div>
                <p className="text-zinc-200 italic font-medium leading-relaxed">
                  "촬영 수고하셨습니다. 방금 출력된 이 첫 번째 장은 아이의 '작품'이고, 두 번째 장은 '보증서'입니다. <b>보증서 하단의 QR을 아까 설치하신 LUMEN 앱으로 스캔해 보시겠어요?</b> 단 1초 만에 방금 찍은 사진의 고화질 원본과 멍스널컬러 AI 리포트가 보호자님의 디지털 금고(Vault)에 평생 안전하게 보관됩니다."
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
      <style jsx>{`
        .text-gold { color: #FFD700; }
      `}</style>
    </section>
  );
}