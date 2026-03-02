"use client";
import { useState } from "react";
import ScrollReveal from "../ScrollReveal";

// 이메일 데이터 배열 유지 (가죽 공방, 명품 의류, 파티세리)
const emails = [
  {
    id: "leather",
    category: "가죽 공방 (LUMEN Object) NX관점 우선순위 0 ⭐",
    target: "에르메스급 마감 퀄리티를 지닌 소규모 프라이빗 가죽/금속 공방",
    subject: "[LUMEN] 대표님의 공방에 마케팅 비용 0원으로 확정된 B2B VIP 물량을 독점 제안합니다.",
    body: `대표님, 안녕하십니까.\n하이엔드 펫 라이프스타일 플랫폼 'LUMEN(루멘)'입니다.\n\n저희는 대한민국 상위 0.1% 펫팸족들의 고해상도 반려견 프로필과 '멍스널컬러' 데이터를 보유한 프라이빗 멤버십 플랫폼입니다. \n현재 저희 VIP 고객들이 앱 내에서 원클릭으로 주문할 '최고급 커스텀 키링/뱃지'의 공식 제작 파트너(화이트 라벨)를 찾고 있습니다.\n\n시중의 저가 아크릴이나 저렴한 가죽이 아닌, 오직 대표님의 공방이 보여주시는 '사피아노급 마감과 장인정신'만이 저희 고객의 눈높이에 맞는다고 판단하여 연락드렸습니다.\n\n[LUMEN 독점 파트너 혜택]\n1. 영업/마케팅/CS 제로: 저희 앱에서 AR(증강현실)로 고객이 결제까지 완료한 '확정 주문 데이터'만 전달해 드립니다. 대표님은 오직 제작에만 집중하시면 됩니다.\n2. 안정적인 볼륨: 론칭 후 월 최소 000건 이상의 프리미엄 제작 물량을 개별 발주가 아닌 B2B 형태로 보장해 드립니다.\n\n단, 패키징에는 대표님의 브랜드가 아닌 'LUMEN'이 각인되는 화이트 라벨 조건입니다. \n본 제휴는 카테고리당 단 1곳의 공방과만 독점 계약을 맺습니다. \n\n이 압도적인 수요의 게이트웨이를 함께 여실 의향이 있으시다면, 회신 부탁드립니다.\n간단한 비대면 미팅을 통해 LUMEN의 AR 렌더링 데모를 보여드리겠습니다.\n\n감사합니다.`
  },
  {
    id: "wardrobe",
    category: "명품 의류 (LUMEN Wardrobe)",
    target: "고가의 프리미엄 펫 디자이너 브랜드",
    subject: "[LUMEN] 반품률 0%. 대표님의 신상 '웜톤 코트'를 정확히 웜톤 강아지 1만 마리에게만 타겟팅해 드립니다.",
    body: `대표님, 안녕하십니까.\n프리미엄 펫 에이전시 및 데이터 플랫폼 'LUMEN(루멘)'입니다.\n\n고가의 강아지 옷을 판매하시며 가장 큰 골칫거리가 '사이즈 미스'와 '톤(Color) 불일치'로 인한 잦은 교환/반품이라는 것을 잘 알고 있습니다.\n\n저희 LUMEN은 스튜디오급 오프라인 부스를 통해 추출한 10만 마리 하이엔드 반려견들의 '정확한 체형 데이터'와 AI '멍스널컬러(퍼스널 컬러)' 데이터를 보유하고 있습니다.\n\n이번 시즌 대표님의 신상품 룩북을 보았습니다.\n저희 플랫폼에 입점하시면, 대표님의 신상품은 불특정 다수에게 노출되는 것이 아니라 해당 옷의 컬러와 사이즈가 100% 완벽하게 매칭되는 저희 VIP 고객의 앱 화면에만 '단독 큐레이션' 됩니다.\n\n[LUMEN 제휴의 차별점]\n1. 반품률 제로의 AR 피팅: 고객은 자신의 강아지 3D 프로필에 대표님의 옷을 가상으로 입혀본 뒤 결제합니다.\n2. 무료 룩북 모델 매칭: 입점 파트너사에게는 저희 LUMEN에 등록된 최상위 1% 퀄리티의 'LUMEN Certified' 모델 풀을 다음 시즌 룩북 촬영에 무료로 매칭해 드립니다.\n\n저희 플랫폼 수수료는 높습니다. 하지만 마케팅비를 태우지 않고도 가장 구매력 높은 타겟에게 완벽한 전환율을 보장합니다.\n하이엔드 패션 파트너 입점 비딩에 참여하시겠습니까? 회신 주시면 상세 덱을 보내드리겠습니다.\n\n감사합니다.`
  },
  {
    id: "heritage",
    category: "수제 파티세리 (LUMEN Heritage)",
    target: "예약제로 운영되는 고단가 펫 수제 케이크 전문점",
    subject: "[LUMEN] 매일 쏟아지는 인스타 DM 예약을 없애드립니다. 매월 1일, 확정된 생일 주문 리스트를 꽂아드립니다.",
    body: `대표님, 안녕하십니까.\n하이엔드 펫 라이프스타일 구독 플랫폼 'LUMEN(루멘)'입니다.\n\n대표님의 케이크는 예술 작품입니다. 하지만 매번 인스타그램 DM으로 고객과 디자인, 배송일을 조율하며 감정 노동과 시간을 낭비하고 계시진 않습니까?\n\n저희 LUMEN 앱에는 수만 명의 VIP 반려견 '생일 및 입양일 데이터'가 정확하게 기록되어 있습니다. \n저희는 매월 돌아오는 고객의 기념일에 맞춰 최고급 케이크를 정기 배송하는 'LUMEN Heritage Box'의 독점 파티세리 파트너를 찾고 있습니다.\n\n[LUMEN 컨소시엄 파트너 혜택]\n1. 확정된 정기 매출: 매월 1일, 다음 달 생일을 맞이하는 VIP 고객들의 '확정된 예약 명단과 선결제 대금'을 일괄 지급해 드립니다. 노쇼(No-show)나 DM 응대 스트레스가 사라집니다.\n2. 블랙 라벨 퀄리티 향상: 오직 LUMEN 고객만을 위한 독점 디자인(Bespoke) 1~2종만 대량으로 생산하시면 되므로, 재고 관리와 원가 절감이 극대화됩니다.\n\n저희는 대한민국에서 가장 구매력 높은 반려견 보호자들의 기념일을 관리합니다.\n이 거대한 수요를 독점할 단 하나의 파티세리가 되실 준비가 되셨다면 회신 부탁드립니다.\n\n감사합니다.`
  }
];

export default function ColdEmailSection() {
  const [activeTab, setActiveTab] = useState(emails[0].id);
  const [copiedStatus, setCopiedStatus] = useState<string | null>(null);

  // 🍏 Clipboard API 적용 (마케팅 실무용)
  const handleCopy = async (subject: string, body: string) => {
    try {
      const fullText = `제목: ${subject}\n\n${body}`;
      await navigator.clipboard.writeText(fullText);
      setCopiedStatus(activeTab);
      // 2초 후 Copied 상태 초기화
      setTimeout(() => setCopiedStatus(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      alert("복사 기능이 지원되지 않는 브라우저입니다.");
    }
  };

  return (
    <section className="section bg-zinc-950 text-white min-h-screen py-20 flex flex-col justify-center">
      <div className="container max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-12">
            <span className="text-blue-500 text-sm font-bold tracking-widest uppercase mb-4 block">For Marketing Team</span>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">Reverse Pitch Dashboard</h2>
            <p className="text-zinc-400">마케팅 담당자를 위한 실전 콜드 메일 템플릿입니다. 우측 상단의 Copy 버튼을 클릭하여 즉시 사용하십시오.</p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <div className="md:w-1/3 flex flex-col gap-3">
            {emails.map((email) => (
              <button
                key={email.id}
                onClick={() => setActiveTab(email.id)}
                className={`text-left p-5 rounded-2xl transition-all ${
                  activeTab === email.id 
                    ? "bg-zinc-800 border border-zinc-600 shadow-lg scale-100" 
                    : "bg-transparent border border-zinc-900 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900 scale-[0.98]"
                }`}
              >
                <div className={`font-bold text-sm mb-1 ${activeTab === email.id ? "text-white" : ""}`}>{email.category}</div>
                <div className="text-xs opacity-70 truncate">{email.target}</div>
              </button>
            ))}
          </div>

          {/* Email Content Display */}
          <div className="md:w-2/3 bg-black border border-zinc-800 rounded-3xl p-8 md:p-12 relative shadow-2xl">
            {emails.map((email) => (
              <div key={email.id} className={activeTab === email.id ? "block animate-fade-in" : "hidden"}>
                <div className="mb-8 pb-8 border-b border-zinc-800 pr-24">
                  <div className="text-xs text-zinc-500 mb-2 uppercase tracking-wider font-bold">Subject</div>
                  <div className="font-bold text-xl text-white leading-snug">{email.subject}</div>
                </div>
                <div className="text-[15px] text-zinc-300 whitespace-pre-wrap leading-loose">
                  {email.body}
                </div>
                
                {/* 🍏 작동하는 Copy Button */}
                <button 
                  onClick={() => handleCopy(email.subject, email.body)}
                  className={`absolute top-8 right-8 px-4 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                    copiedStatus === email.id 
                    ? "bg-green-500 text-black" 
                    : "bg-white text-black hover:bg-zinc-200"
                  }`}
                >
                  {copiedStatus === email.id ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                      Copy Text
                    </>
                  )}
                </button>

              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-fade-in { animation: fadeIn 0.4s ease-out; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}