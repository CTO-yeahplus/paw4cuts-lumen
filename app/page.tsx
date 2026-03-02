import HeroSection from "@/components/sections/HeroSection";
import BrandArchitectureSection from "@/components/sections/BrandArchitectureSection";
import DeferredMagicSection from "@/components/sections/DeferredMagicSection";
import CompCardSection from "@/components/sections/CompCardSection";
import FlywheelSection from "@/components/sections/FlywheelSection";
import CommercePartnershipSection from "@/components/sections/CommercePartnershipSection";
import IpAgencySection from "@/components/sections/IpAgencySection";

export default function Home() {
  return (
    // 🍏 overflow 제한을 완전히 풀어 애니메이션 센서가 정상 작동하게 만듭니다.
    <main className="bg-black w-full">
      
      {/* 🍏 각 섹션을 화면 높이(min-h-screen)로 맞추고 snap-start를 적용 */}
      <div className="snap-start min-h-screen w-full flex flex-col justify-center">
        <HeroSection />
      </div>

      <div className="snap-start min-h-screen w-full flex flex-col justify-center">
        <BrandArchitectureSection />
      </div>
      
      <div className="snap-start min-h-screen w-full flex flex-col justify-center">
        <DeferredMagicSection /> 
      </div>
      
      <div className="snap-start min-h-screen w-full flex flex-col justify-center">
        <CompCardSection />
      </div>

      <div className="snap-start min-h-screen w-full flex flex-col justify-center">
        <CommercePartnershipSection />
      </div>

      <div className="snap-start min-h-screen w-full flex flex-col justify-center">
        <IpAgencySection />
      </div>

      <div className="snap-start min-h-screen w-full flex flex-col justify-center">
        <FlywheelSection />
      </div>
      
    </main>
  );
}