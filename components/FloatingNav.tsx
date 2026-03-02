"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingNav() {
  const pathname = usePathname();

  // 🍏 1급 기밀 보호: 대중 공개용 페이지(티저)에서는 메뉴를 숨깁니다.
  const publicRoutes = ["/petfair", "/pitch"];
  
  if (publicRoutes.includes(pathname)) {
    return null;
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Partner Pitch", path: "/pitch" }, // 🍏 제휴사용
    { name: "IR Pitch", path: "/ir-pitch" },    // 🍏 투자사용 (신규)
    { name: "Reverse Pitch", path: "/reverse-pitch" },
    { name: "Spatial", path: "/flagship" },
    { name: "Teaser", path: "/petfair" },
    { name: "Playbook", path: "/playbook" },
    { name: "Fundraising", path: "/fundraising" }, // 🍏 신규 투자 준비 페이지 추가
  ];

  return (
    <div className="fixed top-6 left-0 w-full flex justify-center z-[100] animate-fade-in-down pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-full shadow-2xl">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.name} 
              href={item.path}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                isActive 
                  ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      <style jsx>{`
        .animate-fade-in-down {
          animation: fadeInDown 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}