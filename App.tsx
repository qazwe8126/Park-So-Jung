import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  Globe, 
  Rocket, 
  Monitor, 
  Youtube, 
  Linkedin, 
  BookOpen, 
  Users, 
  Target, 
  ChevronDown, 
  Clock, 
  Download, 
  ShieldCheck, 
  Quote, 
  ArrowRight, 
  Search, 
  Zap, 
  TrendingUp, 
  BarChart3, 
  Palette, 
  Type, 
  Layout, 
  ImageIcon, 
  Film,
  ArrowUpRight,
  MessageSquare,
  Award,
  Lightbulb,
  PieChart,
  Activity,
  Flag,
  Flame,
  MousePointer2,
  ChevronUp,
  MoveRight,
  RefreshCcw,
  ArrowRightLeft,
  ChevronRight,
  UserPlus,
  Handshake,
  Info,
  Camera,
  Layers,
  ExternalLink,
  Link2,
  FileText,
  DollarSign,
  TrendingDown,
  Calendar
} from 'lucide-react';
import { SECTIONS, STRATEGY_ITEMS, getIcon } from './constants';

const Highlight = ({ children, delay = 0.5 }: { children?: React.ReactNode, delay?: number }) => (
  <motion.span
    initial={{ backgroundSize: '0% 100%' }}
    animate={{ backgroundSize: '100% 100%' }}
    transition={{ duration: 1.0, delay, ease: "easeInOut" }}
    className="bg-no-repeat bg-left-bottom font-bold text-slate-900 px-1 rounded-sm"
    style={{ 
      backgroundImage: 'linear-gradient(to top, rgba(224, 0, 43, 0.12) 45%, transparent 45%)',
      backgroundRepeat: 'no-repeat'
    }}
  >
    {children}
  </motion.span>
);

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [competitorTab, setCompetitorTab] = useState('Dunlop');
  const [showSocialStats, setShowSocialStats] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;
      const currentIndex = SECTIONS.findIndex(s => s.id === activeSection);
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        const next = SECTIONS[(currentIndex + 1) % SECTIONS.length];
        setActiveSection(next.id);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        const prev = SECTIONS[(currentIndex - 1 + SECTIONS.length) % SECTIONS.length];
        setActiveSection(prev.id);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  const timezoneData = [
    { region: '한국, 일본', time: '15:00', desc: '오후 업무 시간대' },
    { region: '아세안', time: '13:00~14:00', desc: '업무 중·모바일 확인' },
    { region: '인도', time: '11:30', desc: '오전 업무 마무리', highlight: true },
    { region: '호주', time: '16:00~18:00', desc: '퇴근 전 확인' },
    { region: '유럽', time: '07:00~08:00', desc: '업무 시작 전 노출', highlight: true },
    { 
      region: '미주(동,서)', 
      time: '01:00 ~ 22:00 (전날)', 
      desc: '심야(익일 오전 확산) ~ 퇴근 후 모바일 확인' 
    },
  ];

  const socialStats = [
    { platform: "LinkedIn", global: "약 9억~10억명", domestic: "국내 사용자 수백만+", b2b: "전문 비즈니스 네트워킹 & B2B 의사결정자 접점", source: "Wikipedia List of most popular social platforms", focus: true },
    { platform: "YouTube", global: "약 2.5B+ MAU", domestic: "약 4,800만명 이상", b2b: "영상 중심 정보/기술 콘텐츠 확산", source: "Wikipedia / NewNeek 국내SNS 통계" },
    { platform: "Facebook (Meta)", global: "약 3.0B+ MAU", domestic: "약 1,700만명 이상", b2b: "광범위 사용자 기반 – 커뮤니티/그룹 활용 가능", source: "Wikipedia / NewNeek 국내SNS 통계" },
    { platform: "Instagram", global: "약 2.0B~3.0B MAU", domestic: "약 2,000만명 이상", b2b: "비주얼/브랜드 중심 콘텐츠 확산", source: "Meta CEO 발언 / Reuters / NewNeek" },
    { platform: "X (Twitter)", global: "약 550M~600M MAU", domestic: "약 700만명 이상", b2b: "실시간 소통/인사이트 중심", source: "Wikipedia / NewNeek 국내SNS 통계" },
  ];

  const competitorData = {
    Dunlop: {
      key: "기술 중심 커뮤니케이션: 극한 환경 성능을\n수치와 구조로 증명하는 독보적 기술력",
      tm: ["확신에 찬 단정적인 비즈니스 톤앤매너 일관 유지", "객관적인 수치와 정량적 성능 지표를 통한 기술 우위 증명", "문제 진단부터 기술적 해결책 제시까지의 논리적 세일즈 구조"],
      visual: ["레드와 블랙 컬러 대비를 통한 시각적 주목도 확보", "산세리프 서체와 핵심 정보 볼드 처리를 통한 가독성 극대화", "기업 로고 상단 중앙 배치를 통한 일관된 브랜드 인상 형성"],
      strategy: ["복잡한 기술 스펙의 친화적 데이터 시각화", "산업 현장의 리얼리티 이미지를 통한 제품 성능 입증", "명확한 CTA와 해시태그 배치를 통한 잠재 고객 유입 강화"],
      link: "https://www.linkedin.com/company/fenner-dunlop-emea/posts/?feedView=all"
    },
    Continental: {
      key: "프리미엄 기술 스토리: 압도적 성능을\n미래 지향적 가치로 연결하는 연출력",
      tm: ["압도적 자신감이 느껴지는 간결하고 묵직한 프리미엄 톤", "독보적 성능 메시지의 직관적이고 군더더기 없는 전달", "지속 가능성과 안전 등 미래 사회적 가치와의 연결"],
      visual: ["옐로우와 블랙의 과감한 대비를 통한 진취적 이미지 각인", "고퀄리티 제품 연출 컷을 통한 감성적 가치 극대화", "여백을 활용한 시원한 레이아웃과 핵심 카피 주목도 확보"],
      strategy: ["모빌리티 및 자율 주행 등 차세대 미래 기술 비전 구축", "감각적인 영상과 이미지 중심의 풍부한 시각 경험 제공", "성능의 우수성을 사용자의 안전과 심리적 신뢰로 연결"],
      link: "https://www.linkedin.com/showcase/continental-industry/"
    },
    Sempertrans: {
      key: "글로벌 산업 벨트 솔루션 리더:\n기술 신뢰성과 현장 실행력으로 광산·중공업 시장 경쟁력 강화",
      tm: ["글로벌 산업 리더로서의 신뢰감 있고 전문적인 톤", "기술·인증·현장 사례 중심의 객관적이고 실증적인 메시지 전달", "파트너십과 협업을 강조하는 B2B 중심 커뮤니케이션"],
      visual: ["광산·중공업 현장 중심의 다이내믹한 작업 이미지 활용", "대형 설비·컨베이어 벨트 설치 장면을 통한 스케일 강조", "전시회·글로벌 행사 부스 이미지로 국제적 브랜드 존재감 표현"],
      strategy: ["북미·아프리카 등 글로벌 마이닝 시장 확대 전략", "CSA-C 인증 등 품질·안전 인증 기반 신뢰도 강화", "CleanShield™ 등 기술 차별화 제품 포트폴리오 확장", "Transpipe® 프로젝트 등 현장 적용 사례 기반 솔루션 경쟁력 부각", "글로벌 리더십 영입을 통한 조직 역량 및 사업 확장 가속화"],
      link: "https://www.linkedin.com/company/sempertrans/posts/?feedView=all"
    },
    Gates: {
      key: "혁신 지향 기술 메시지: 미래 기술력과\n책임 있는 리더십의 조화로운 공존",
      tm: ["기술적 혁신성과 비즈니스적 책임을 담은 세련된 전문 톤", "차세대 특수 솔루션과 원천 기술 중심의 리더십 표방", "기업 가치와 구성원 서사를 결합한 진정성 있는 전달"],
      visual: ["블랙 배경 베이스의 프리미엄하고 견고한 이미지 구축", "시그니처 레드 컬러 전략적 배치를 통한 주목도 극대화", "현대적 산세리프 서체 적용을 통한 세련된 이미지 완성"],
      strategy: ["내부 설계 그래픽 노출을 통한 기술적 차별점 부각", "다양한 산업군 최적화 성공 사례 공유 및 확장성 강조", "미래 기술 비전과 가치 중심 서사의 조화로운 결합"],
      link: "https://www.linkedin.com/company/gates-corporation/posts/?feedView=all"
    }
  };

  const channelData = [
    { name: '공식 웹사이트', icon: <Monitor className="w-5 h-5" />, follower: '-', contents: '-', role: '중요 검색 허브 (기업 정보, 제품 상세 제공)' },
    { name: '유튜브', icon: <Youtube className="w-5 h-5" />, follower: '1.02천', contents: '186', role: 'B2B 고객접점 확대 및 검색 유입' },
    { 
      name: '링크드인', 
      icon: <Linkedin className="w-5 h-5" />, 
      follower: '310', 
      contents: '6', 
      role: 'B2B 핵심 마케팅 채널 - 전문가 네트워크 활용', 
      active: true,
      url: 'https://www.linkedin.com/company/53180078/admin/dashboard/'
    },
    { name: '블로그', icon: <BookOpen className="w-5 h-5" />, follower: '74', contents: '116', role: '키워드 기반 SEO 최적화 및 정보 제공' },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-red-100 selection:text-[#E0002B]">
      <aside className="w-full lg:w-72 lg:fixed lg:h-screen bg-slate-900 text-slate-400 p-6 flex flex-col z-50 border-r border-white/5 overflow-y-auto">
        <nav className="flex-1 space-y-2 mt-4">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-semibold transition-all relative group overflow-hidden ${
                activeSection === section.id
                  ? 'bg-[#E0002B] text-white shadow-md'
                  : 'hover:bg-white/5 hover:text-white'
              }`}
            >
              <div className="relative z-10 flex items-center gap-3">
                {getIcon(section.icon, `w-5 h-5 ${activeSection === section.id ? 'text-white' : 'text-slate-500 group-hover:text-[#E0002B]'}`)}
                {section.title}
              </div>
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 lg:ml-72 min-h-screen relative p-6 md:p-10 lg:p-16">
        <div className="max-w-5xl mx-auto pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {activeSection === 'intro' && (
                <div className="flex flex-col items-center space-y-12 py-6">
                  <div className="w-full bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-slate-200 text-center md:text-left relative overflow-hidden">
                    <div className="space-y-8 relative z-10">
                      <div className="inline-block bg-[#E0002B] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        FINAL CONCLUSION
                      </div>
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.3] tracking-tight break-keep whitespace-nowrap">
                        LinkedIn을 활용한 영업 지원과 소통
                      </h1>
                      <p className="text-lg md:text-xl lg:text-2xl text-slate-700 font-medium leading-relaxed max-w-2xl break-keep">
                        단순 노출을 넘어, 고객의 선택에 '판단의 기준'을 더하는 소통 플랫폼
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 border-l-[6px] border-[#E0002B] flex flex-col justify-center space-y-4 hover:-translate-y-1 transition-transform">
                      <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                        핵심 과제 <Target className="w-6 h-6 text-[#E0002B]" />
                      </h3>
                      <p className="text-lg text-slate-700 font-medium leading-relaxed break-keep">
                        영업 접촉 전 발생하는 '셀프 서치' 단계에서 <br className="hidden md:block" /> 전문성을 검증할 수 있는 세일즈 툴 확보
                      </p>
                    </div>
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 border-l-[6px] border-[#0F172A] flex flex-col justify-center space-y-4 hover:-translate-y-1 transition-transform">
                      <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                        콘텐츠 제작 기준 <ShieldCheck className="w-6 h-6 text-slate-900" />
                      </h3>
                      <p className="text-lg text-slate-700 font-medium leading-relaxed break-keep">
                        80년 현장에서 솔루션을 일궈온 경험으로, <br className="hidden md:block" /> 고객과 공감하며 소통하는 콘텐츠
                      </p>
                    </div>
                  </div>

                  <div className="w-full bg-[#0F172A] text-white p-12 md:p-16 rounded-[2.5rem] shadow-xl flex items-center justify-center relative overflow-hidden group">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-center">
                      “기술은 보이게, 신뢰는 퍼지게”
                    </h2>
                  </div>
                </div>
              )}

              {activeSection === 'background' && (
                <div className="space-y-16">
                  <div className="bg-[#0F172A] text-white p-14 rounded-[2.5rem] shadow-xl relative overflow-hidden flex items-center justify-between group">
                    <div className="relative z-10 max-w-2xl">
                       <h2 className="text-2xl md:text-3xl font-bold leading-relaxed break-keep">
                         변화를 읽는 유연함, <br />
                         시장의 오늘과 내일을 기록합니다.
                       </h2>
                    </div>
                    <div className="relative z-10 opacity-10 group-hover:opacity-20 transition-opacity">
                       <Quote className="w-24 h-24 rotate-180" />
                    </div>
                  </div>

                  <header className="px-2">
                    <h3 className="text-[1.7rem] font-bold text-slate-900 flex items-center gap-4 tracking-tight">
                      <div className="w-2 h-10 bg-[#E0002B] rounded-full" /> 1. 배경 및 사유
                    </h3>
                  </header>

                  <div className="w-full space-y-0">
                    <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-10 md:p-14 relative z-10">
                      <div className="flex items-center gap-3 mb-10">
                         <h3 className="text-xl font-bold text-slate-900">추진 배경</h3>
                      </div>
                      <div className="space-y-0">
                        {[
                          { t: "B2B 구매 여정 변화", d: <>고객은 영업 접촉 이전에 <Highlight delay={0.3}>셀프 서치 → 비교 → 내부 공유 → 의사결정</Highlight> 흐름으로 1차 판단</>, b: "영업 이전 신뢰 경쟁" },
                          { t: "전략적 필요성", d: <>초기 탐색 단계에서 고객 판단을 지원하는 <Highlight delay={1.0}>플랫폼 확장</Highlight>과 영업 현장에서 즉시 활용 가능한 <Highlight delay={1.1}>실질적 세일즈 툴 확보 필요성</Highlight></>, b: "디지털 세일즈 툴 확보" }
                        ].map((item, i) => (
                          <div key={i} className="border-t border-slate-100 first:border-t-0">
                            <div className={`flex flex-col md:flex-row gap-8 md:gap-14 py-10 items-start ${i === 0 ? 'pt-0' : ''}`}>
                              <div className="md:w-60 flex-shrink-0 flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-[#E0002B] rounded-full mt-[0.6rem]" />
                                <h4 className="text-[1.1rem] font-bold text-[#E0002B] tracking-tight leading-normal">
                                  {item.t}
                                </h4>
                              </div>
                              <div className="flex-1 space-y-4">
                                 <p className="text-[1.1rem] text-slate-600 font-medium leading-relaxed break-keep">
                                    {item.d}
                                 </p>
                                 {item.b && (
                                   <div className="inline-flex items-center px-4 py-1.5 bg-teal-50 text-teal-600 rounded-full text-[1rem] font-bold border border-teal-100 shadow-sm">
                                     {item.b}
                                   </div>
                                 )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative flex flex-col items-center">
                      <motion.div 
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 1.0 }}
                        className="w-px h-24 bg-gradient-to-b from-slate-200 via-[#E0002B]/40 to-slate-200"
                      />
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="z-20 w-full max-w-4xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl shadow-slate-200/50 rounded-3xl p-8 md:p-10 text-center flex flex-col items-center gap-4 group hover:border-[#E0002B]/20 transition-colors -my-6"
                      >
                        <div className="w-10 h-10 bg-[#E0002B] text-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                          <Zap className="w-5 h-5 fill-current" />
                        </div>
                        <h4 className="text-slate-800 font-bold text-xl md:text-2xl leading-snug tracking-tight break-keep">
                          이러한 구매·판단 구조 변화 속에서, <br className="hidden md:block" />
                          <span className="text-[#E0002B]">실무자와 관리자가 함께 참고하는 공통 채널</span>이 필요합니다.
                        </h4>
                      </motion.div>
                      <motion.div 
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0, delay: 0.5 }}
                        className="w-px h-24 bg-gradient-to-b from-slate-200 via-[#E0002B]/20 to-slate-200"
                      />
                    </div>

                    <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-10 md:p-14 relative z-10">
                      <div className="flex items-center gap-3 mb-10">
                         <h3 className="text-xl font-bold text-slate-900">LinkedIn 선정 사유</h3>
                      </div>
                      <div className="space-y-0">
                        {[
                          { t: "전 과정 공통 접점", d: <>실무자부터 관리자까지 <Highlight delay={1.3}>공통으로 참고하고 신뢰하는 비즈니스 플랫폼 특성</Highlight></>, b: "통합 타겟 도달", expandable: true },
                          { t: "저비용-성장형 채널", d: <>광고비 집행 없이 <Highlight delay={1.5}>참여와 축적을 통한 자연 확산 구조</Highlight> 및 내부 세일즈 자료 공동 학습과 전문성 강화 및 <Highlight delay={1.6}>성장 기회</Highlight></>, b: "지속 가능성 확보" },
                          { t: "끊김 없는 탐색-공유", d: <><Highlight delay={1.8}>정보 탐색 → 레퍼런스 확인 → 내부 공유가 한 채널에서 연속적으로 발생</Highlight></>, b: "사용자 편의성" },
                          { t: "글로벌 신뢰 표준", d: <><Highlight delay={2.0}>영문 기술 콘텐츠 기반의 글로벌 표준 채널 특성</Highlight>과 영업 이전 단계의 <Highlight delay={2.1}>사전 신뢰 판단 자료 창구 기능</Highlight></>, b: "글로벌 레퍼런스" }
                        ].map((item, i) => (
                          <div key={i} className={`flex flex-col py-10 ${item.expandable ? '' : 'border-t border-slate-100'} first:pt-0`}>
                            <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-start">
                              <div className="md:w-60 flex-shrink-0 flex items-start gap-3">
                                 <div className="w-1.5 h-1.5 bg-[#E0002B] rounded-full mt-[0.6rem]" />
                                 <div className="flex-1 flex items-start gap-2">
                                   <h4 className="text-[1.1rem] font-bold text-[#E0002B] tracking-tight leading-normal">
                                     {item.t}
                                   </h4>
                                   {item.expandable && (
                                     <button 
                                       onClick={() => setShowSocialStats(!showSocialStats)}
                                       className="p-0.5 rounded-md text-slate-400 hover:text-[#E0002B] hover:bg-red-50 transition-colors"
                                       title="주요 소셜 플랫폼 규모 비교 보기"
                                     >
                                       <motion.div animate={{ rotate: showSocialStats ? 180 : 0 }}>
                                         <ChevronDown className="w-4 h-4" />
                                       </motion.div>
                                     </button>
                                   )}
                                 </div>
                              </div>
                              <div className="flex-1 space-y-4">
                                 <p className="text-[1.1rem] text-slate-600 font-medium leading-relaxed break-keep">
                                    {item.d}
                                 </p>
                                 {item.b && (
                                   <div className="inline-flex items-center px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-[1rem] font-bold border border-indigo-100 shadow-sm">
                                     {item.b}
                                   </div>
                                 )}
                              </div>
                            </div>

                            {item.expandable && (
                              <AnimatePresence>
                                {showSocialStats && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                    animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="bg-slate-50/50 rounded-[1.5rem] border border-slate-100 p-6 md:p-10 shadow-inner">
                                      <div className="flex flex-col gap-4 mb-8">
                                        <div className="flex items-center gap-3">
                                          <BarChart3 className="w-6 h-6 text-[#E0002B]" />
                                          <h5 className="text-xl font-bold text-slate-800">주요 소셜 플랫폼 규모 및 B2B 활용 관점</h5>
                                        </div>
                                        <p className="text-slate-600 font-medium break-keep leading-relaxed ml-9">
                                          전체 노출 규모는 작더라도, 실무진과 의사결정권자가 밀집된 플랫폼에 집중하여 리소스 효율을 극대화하겠습니다.
                                        </p>
                                      </div>
                                      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                                        <table className="w-full text-left text-sm md:text-base border-collapse">
                                          <thead>
                                            <tr className="bg-slate-900 text-white font-bold uppercase tracking-wider text-[11px]">
                                              <th className="px-6 py-5">플랫폼</th>
                                              <th className="px-6 py-5">글로벌 규모</th>
                                              <th className="px-6 py-5">국내 규모</th>
                                              <th className="px-6 py-5">B2B 활용 관점</th>
                                              <th className="px-6 py-5">출처</th>
                                            </tr>
                                          </thead>
                                          <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                                            {socialStats.map((row, idx) => (
                                              <tr key={idx} className={`${row.focus ? 'bg-red-50/30' : 'hover:bg-slate-50/50'} transition-colors`}>
                                                <td className={`px-6 py-5 font-bold ${row.focus ? 'text-[#E0002B]' : 'text-slate-900'}`}>{row.platform}</td>
                                                <td className="px-6 py-5 break-keep">{row.global}</td>
                                                <td className="px-6 py-5 break-keep">{row.domestic}</td>
                                                <td className="px-6 py-5 break-keep leading-relaxed">{row.b2b}</td>
                                                <td className="px-6 py-5 text-slate-400 text-xs italic break-keep">{row.source}</td>
                                              </tr>
                                            ))}
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0F172A] text-white p-14 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
                     <Flag className="absolute right-10 bottom-1/2 translate-y-1/2 w-48 h-48 text-white/5 group-hover:scale-110 transition-transform duration-700 select-none" />
                     <button
                       onClick={() => setActiveSection('appendix')}
                       className="absolute top-8 right-12 z-20 flex items-center gap-2 text-xs font-bold text-white/40 hover:text-[#E0002B] transition-colors group/link"
                     >
                       별첨. 채널 현황 분석 바로가기 <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                     </button>
                     <div className="space-y-8 relative z-10">
                        <div className="flex items-center gap-4 text-[#E0002B]">
                           <Zap className="w-6 h-6 fill-current" />
                           <span className="text-xl md:text-2xl font-bold uppercase tracking-tight">선택과 집중</span>
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold leading-relaxed break-keep">
                           다양한 채널 중 <span className="text-[#E0002B]">링크드인을 선제적으로 운영</span>하여 리소스를 집중하고, <br />
                           이를 통해 B2B 시장에 최적화된 <span className="text-[#E0002B]">기민한 콘텐츠 발행 체계 구축</span>을 최우선 목표로 합니다.
                        </h4>
                     </div>
                  </div>
                </div>
              )}

              {activeSection === 'direction' && (
                <div className="space-y-12">
                  <header className="space-y-6">
                    <h3 className="text-[1.7rem] font-bold text-slate-900 flex items-center gap-4 tracking-tight">
                      <div className="w-2 h-10 bg-[#E0002B] rounded-full" /> 2. 콘텐츠 방향성
                    </h3>
                  </header>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8 p-10 bg-white rounded-3xl space-y-10 border border-slate-200 shadow-sm relative overflow-hidden">
                      <h4 className="text-xl font-bold text-slate-900 flex items-center gap-3"><Zap className="w-7 h-7 text-[#E0002B]" /> 솔루션 제공자</h4>
                      <motion.p 
                        initial={{ color: "#cbd5e1" }}
                        animate={{ color: "#334155" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="text-xl md:text-2xl font-bold leading-relaxed border-l-[6px] border-[#E0002B] pl-8 break-keep"
                      >
                        좋은 콘텐츠는 브랜드의 신뢰로 <br className="hidden md:block"/> 얼마나 고르게 연결하느냐에 달려있습니다.
                      </motion.p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pt-4">
                        {[
                          "제품 사양을 넘은 문제 해결력 증명",
                          "검증·책임 중심의 일관된 보이스",
                          "기술 시각화로 전문성 확보",
                          "현장의 이해로 고객과 공감대 형성"
                        ].map((txt, i) => (
                          <div key={i} className="flex gap-4 items-center text-slate-700 font-semibold text-base md:text-[1.05rem] leading-none whitespace-nowrap break-keep group">
                            <CheckCircle2 className="w-5 h-5 text-[#E0002B] flex-shrink-0 group-hover:scale-110 transition-transform" /> {txt}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="lg:col-span-4 p-10 bg-slate-900 text-white rounded-3xl shadow-lg flex flex-col justify-center space-y-6 relative overflow-hidden">
                      <h4 className="text-xl md:text-2xl font-bold leading-relaxed tracking-tight">리얼리티 기반의 <br/> 전문성 시각화</h4>
                      <p className="text-base md:text-lg text-white/70 font-medium leading-relaxed">
                        화려한 광고보다 '실제 일하는 사람들의 고민'이 담긴 콘텐츠가 고객의 신뢰를 얻습니다.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-10 pt-4">
                    <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm space-y-12">
                       <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 pb-8">
                          <div className="space-y-2">
                             <h4 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                                <Layers className="w-6 h-6 text-[#E0002B]" /> 콘텐츠 유형
                             </h4>
                             <p className="text-slate-500 font-medium">모든 콘텐츠 제작 시 준수해야 할 핵심 제작 원칙</p>
                          </div>
                          <div className="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
                             <p className="text-slate-800 font-bold leading-relaxed break-keep">
                                <span className="text-[#E0002B]">장문 지양</span>, 카드형 이미지(기술/현장 사진 등 레퍼런스) + <span className="text-[#E0002B]">짧은 캡션</span> 위주
                             </p>
                          </div>
                       </div>

                       <div className="space-y-10">
                          <h4 className="text-lg font-bold text-slate-400 uppercase tracking-widest text-[11px]">콘텐츠 비중 및 레퍼런스</h4>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                             {/* 카드 1: 현장 리얼리티 */}
                             <motion.div 
                               className="bg-slate-50/50 rounded-[2rem] p-10 border border-slate-100 flex flex-col gap-6 hover:bg-white hover:shadow-xl transition-all group overflow-hidden h-full"
                             >
                                <div className="space-y-4">
                                   <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm bg-blue-50 text-blue-600 border-blue-100 group-hover:scale-110 transition-transform`}>
                                      <Camera className="w-8 h-8" />
                                   </div>
                                   <div className="space-y-2">
                                      <h5 className="font-bold text-slate-900 text-2xl tracking-tight">현장 리얼리티 (40%)</h5>
                                      <p className="text-slate-600 font-medium text-lg leading-relaxed break-keep">브랜드 신뢰를 고르게 연결하는 현장 중심 콘텐츠</p>
                                   </div>
                                </div>
                             </motion.div>

                             {/* 카드 2: 기술 솔루션 */}
                             <motion.div 
                               className="bg-slate-50/50 rounded-[2rem] p-10 border border-slate-100 flex flex-col gap-6 hover:bg-white hover:shadow-xl transition-all group overflow-hidden h-full"
                             >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm bg-orange-50 text-orange-600 border-orange-100 group-hover:scale-110 transition-transform`}>
                                   <Lightbulb className="w-7 h-7" />
                                </div>
                                <div className="space-y-3">
                                   <h5 className="font-bold text-slate-900 text-2xl tracking-tight">기술 솔루션 (40%)</h5>
                                   <p className="text-slate-600 font-medium text-lg leading-relaxed break-keep">고객이 우리를 떠올리게 만드는 문제 해결책</p>
                                </div>
                             </motion.div>

                             {/* 카드 3: 성과 공유 */}
                             <motion.div 
                               className="bg-slate-50/50 rounded-[2rem] p-10 border border-slate-100 flex flex-col gap-6 hover:bg-white hover:shadow-xl transition-all group overflow-hidden h-full"
                             >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm bg-red-50 text-[#E0002B] border-red-100 group-hover:scale-110 transition-transform`}>
                                   <Award className="w-7 h-7" />
                                </div>
                                <div className="space-y-3">
                                   <h5 className="font-bold text-slate-900 text-2xl tracking-tight">성과 공유 (20%)</h5>
                                   <p className="text-slate-600 font-medium text-lg leading-relaxed break-keep">신뢰의 증거가 되는 팩트 기반 소식</p>
                                </div>
                             </motion.div>
                          </div>

                          {/* 연간 주요 테마 추가 */}
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="pt-8 space-y-6"
                          >
                            <div className="flex items-center gap-3">
                              <Calendar className="w-5 h-5 text-[#E0002B]" />
                              <h4 className="text-lg font-bold text-slate-400 uppercase tracking-widest text-[11px]">연간 주요 테마</h4>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="group bg-slate-50/50 hover:bg-white hover:shadow-lg rounded-[1.8rem] p-8 border border-slate-100 transition-all duration-300 flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                  <div className="px-3 py-1 bg-red-100 text-[#E0002B] rounded-full text-[10px] font-black tracking-widest">Phase A</div>
                                  <h5 className="font-bold text-slate-900 text-xl tracking-tight">준비된 전문성</h5>
                                </div>
                                <p className="text-slate-600 font-medium text-base leading-relaxed break-keep ml-1">
                                  R&D 현장 및 기능성 벨트의 기술적 완성도 공개
                                </p>
                              </div>
                              <div className="group bg-slate-50/50 hover:bg-white hover:shadow-lg rounded-[1.8rem] p-8 border border-slate-100 transition-all duration-300 flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                  <div className="px-3 py-1 bg-slate-900 text-white rounded-full text-[10px] font-black tracking-widest">Phase B</div>
                                  <h5 className="font-bold text-slate-900 text-xl tracking-tight">증명된 확장성</h5>
                                </div>
                                <p className="text-slate-600 font-medium text-base leading-relaxed break-keep ml-1">
                                  글로벌 시장 내 실질적인 수주 성과 및 비즈니스 임팩트 확산
                                </p>
                              </div>
                            </div>
                          </motion.div>

                          {/* 버튼 그룹 */}
                          <div className="flex flex-col md:flex-row justify-center gap-6 pt-8">
                             <a 
                               href="https://drbworld.sharepoint.com/:b:/s/Future_Growth_Team/IQB8mEvIBGgQQJnk0cWs0ZsMASPeYCOOMNsJA5YLeyH1Kx0?e=7T2kwv" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-[#E0002B] transition-all shadow-xl group"
                             >
                               <ImageIcon className="w-6 h-6 group-hover:scale-110 transition-transform" /> 이미지 레퍼런스 확인하기
                             </a>
                             <button 
                               onClick={() => setActiveSection('appendix')}
                               className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all shadow-md group"
                             >
                               <BarChart3 className="w-6 h-6 group-hover:scale-110 transition-transform text-[#E0002B]" /> 경쟁사 분석 현황 확인하기
                             </button>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'guide' && (
                <div className="space-y-16">
                  <header className="space-y-6">
                    <h3 className="text-[1.7rem] font-bold text-slate-900 flex items-center gap-4 tracking-tight">
                      <div className="w-2 h-10 bg-[#E0002B] rounded-full" /> 3. 제작 및 콘텐츠 가이드
                    </h3>
                  </header>

                  <div className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       {[
                         { t: "시각·레이아웃 원칙", l: ["시그니처 컬러 및 레이아웃 통일", "시리즈형 운영으로 주제별 인지 누적", "핵심 문장/수치/결론 위주 구성"] },
                         { t: "톤앤매너", l: ["영문 게시 기본", "명확한 CTA (자료/문의/링크)", "차분하고 신뢰감 있는 전문 톤"] }
                       ].map((item, i) => (
                         <div key={i} className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm space-y-8">
                           <h4 className="text-xl font-bold text-slate-900 text-left">
                              {item.t}
                           </h4>
                           <ul className="space-y-4">
                              {item.l.map((txt, idx) => (
                                <li key={idx} className="flex gap-4 items-start text-slate-700 font-medium text-lg break-keep">
                                   <ArrowRight className="w-5 h-5 text-[#E0002B] mt-1 flex-shrink-0" /> {txt}
                                </li>
                              ))}
                           </ul>
                         </div>
                       ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                       {[
                         { i: <div className="bg-[#E0002B] text-white p-3 rounded-xl font-bold text-xl shadow-lg">A</div>, t: "공통 폰트", d: "Noto Sans CJK KR", b: "bg-red-50" },
                         { i: <Layout className="w-8 h-8 text-blue-600" />, t: "단일/슬라이드(세로)", d: "1080 x 1350 px (4:5)", b: "bg-blue-50" },
                         { i: <ImageIcon className="w-8 h-8 text-orange-500" />, t: "다중 이미지(가로)", d: "1200 x 627 px (1:1.91)", b: "bg-orange-50" },
                         { i: <Film className="w-8 h-8 text-indigo-600" />, t: "동영상(세로/정방형)", d: "1080 x 1920 (9:16)\n1080 x 1080 (1:1)", b: "bg-indigo-50" }
                       ].map((item, i) => (
                         <div key={i} className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-6 hover:-translate-y-2 transition-transform duration-500">
                            <div className={`p-6 rounded-3xl ${item.b} transition-colors`}>{item.i}</div>
                            <div className="space-y-4">
                               <h5 className="text-[#E0002B] font-bold text-base">{item.t}</h5>
                               <p className="font-bold text-slate-900 text-lg whitespace-pre-line leading-relaxed">{item.d}</p>
                            </div>
                         </div>
                       ))}
                    </div>

                    <div className="flex justify-center pt-8">
                       <a href="https://drbworld.sharepoint.com/:b:/s/Future_Growth_Team/IQDfg7adpMaySarT4mQlnyxCAUo91B9JHtOtlu-qTRvuyVg?e=4wmKaE" target="_blank" className="inline-flex items-center gap-3 px-10 py-5 bg-[#0F172A] text-white rounded-2xl font-bold text-lg hover:bg-[#E0002B] transition-all shadow-xl group">
                         <ExternalLink className="w-6 h-6 group-hover:scale-110 transition-transform" /> 콘텐츠 가이드라인(안) 확인하기
                       </a>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'operation' && (
                <div className="space-y-12">
                  <header className="space-y-6">
                    <h3 className="text-[1.7rem] font-bold text-slate-900 flex items-center gap-4 tracking-tight">
                      <div className="w-2 h-10 bg-[#E0002B] rounded-full" /> 4. 운영 루틴 및 가이드
                    </h3>
                  </header>

                  {/* 운영 마인드셋 */}
                  <div className="bg-white rounded-[2.5rem] p-16 border border-slate-200 shadow-sm space-y-20 flex flex-col items-center overflow-visible">
                       <div className="text-center space-y-8 flex flex-col items-center w-full">
                          <h4 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">운영 마인드셋: 지속 가능한 성장을 위한 루틴</h4>
                          <div className="p-8 rounded-2xl w-full bg-slate-50 border border-slate-100 shadow-inner">
                            <p className="text-slate-700 font-bold text-xl md:text-2xl break-keep leading-relaxed text-center">
                              단발성 이벤트가 아닌, 꾸준히 좋은 이야기가 나오는 <br /> DRB다운 콘텐츠를 쌓아가겠습니다.
                            </p>
                          </div>
                       </div>
                       
                       <div className="flex flex-col lg:flex-row items-center justify-center w-full py-12 relative overflow-visible">
                          <div className="flex flex-row items-center justify-center w-full relative z-10 gap-0 md:gap-2 lg:gap-4 overflow-visible">
                            <motion.div 
                              whileHover={{ scale: 1.05, zIndex: 30 }}
                              className="w-56 h-56 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full bg-red-50 border-2 border-red-200 flex flex-col items-center justify-center text-center p-8 shadow-sm cursor-help transition-all flex-shrink-0"
                            >
                               <span className="text-slate-900 font-bold text-2xl lg:text-3xl mb-2">속도</span>
                               <span className="text-slate-700 font-bold text-base lg:text-lg leading-tight italic">" 빠르게 실행한다 "</span>
                            </motion.div>

                            <motion.div 
                              whileHover={{ scale: 1.05, zIndex: 30 }}
                              className="w-56 h-56 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full bg-red-100 border-2 border-red-300 flex flex-col items-center justify-center text-center p-8 shadow-md cursor-help transition-all flex-shrink-0 -ml-8 md:-ml-12"
                            >
                               <span className="text-slate-900 font-bold text-2xl lg:text-3xl mb-2">학습</span>
                               <span className="text-slate-700 font-bold text-base lg:text-lg leading-tight italic">" 시행착오를 기록한다 "</span>
                            </motion.div>

                            <motion.div 
                              whileHover={{ scale: 1.05, zIndex: 30 }}
                              className="w-56 h-56 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full bg-[#E0002B] flex flex-col items-center justify-center text-center p-8 shadow-xl cursor-help relative group flex-shrink-0 -ml-10 md:-ml-16"
                            >
                               <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                               <span className="text-white font-bold text-2xl lg:text-3xl mb-3">내재화</span>
                               <span className="text-white font-bold text-base lg:text-lg leading-tight italic">" 루틴으로 정착한다 "</span>
                            </motion.div>

                            <div className="hidden lg:flex items-center justify-center px-8 flex-shrink-0">
                               <motion.div 
                                 animate={{ x: [-4, 4, -4], opacity: [0.6, 1, 0.6] }}
                                 transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                 className="text-[#E0002B] flex items-center justify-center"
                               >
                                  <MoveRight className="w-12 h-12 stroke-[2.5px]" />
                               </motion.div>
                            </div>

                            <div className="relative flex-shrink-0 -ml-4 md:ml-0">
                              {[1, 2, 3].map((i) => (
                                <motion.div
                                  key={i}
                                  initial={{ scale: 0.9, opacity: 0.6 }}
                                  animate={{ scale: 1.35, opacity: 0 }}
                                  transition={{
                                    repeat: Infinity,
                                    duration: 3,
                                    delay: i * 1,
                                    ease: "easeOut"
                                  }}
                                  style={{ 
                                    background: 'radial-gradient(circle, rgba(224,0,43,0.15) 0%, transparent 70%)',
                                    border: '1px solid rgba(224,0,43,0.3)',
                                    willChange: "transform, opacity" 
                                  }}
                                  className="absolute top-0 left-0 w-full h-full rounded-full"
                                />
                              ))}
                              
                              <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className="w-56 h-56 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full bg-[#E0002B] flex flex-col items-center justify-center text-center p-6 shadow-2xl cursor-default relative z-10"
                              >
                                 <h5 className="text-2xl lg:text-3xl font-bold text-white leading-[1.3] tracking-tight break-keep">
                                   지속 가능한 <br /> 
                                   <span className="block mt-1 text-white/90">콘텐츠 발굴</span>
                                 </h5>
                              </motion.div>
                            </div>
                          </div>
                       </div>
                  </div>

                  {/* 역할 분담 (너비 확장 및 상단 이동) */}
                  <div className="w-full">
                     <div className="p-10 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm space-y-8 flex flex-col items-start text-left w-full">
                        <h4 className="text-xl font-bold text-slate-900 flex items-center gap-4">
                          <div className="p-2 bg-red-50 rounded-lg"><Users className="w-6 h-6 text-[#E0002B]" /></div> 역할 분담
                        </h4>
                        <div className="w-full p-12 bg-white rounded-[2rem] border border-slate-100 shadow-inner space-y-10 flex flex-col items-center justify-center text-center">
                           <div className="space-y-10">
                              <h5 className="text-4xl font-black text-[#E0002B] tracking-tight">FLEX CFT</h5>
                              <div className="space-y-4">
                                 <p className="text-xl text-slate-800 font-bold tracking-tight">원고/기술자문: 김도영, 나병현, 권지원</p>
                                 <p className="text-xl text-slate-800 font-bold tracking-tight">제작/발행관리: 박소정</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* 발행 주기 및 기한 (하단 배치 및 끝선 정렬) */}
                  <div className="w-full">
                    <div className="p-10 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm space-y-10 flex flex-col w-full overflow-hidden">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                           <h4 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                              <Clock className="w-6 h-6 text-[#E0002B]" /> 발행 주기 및 기한
                           </h4>
                           <div className="text-right">
                              <p className="text-slate-700 font-bold text-lg tracking-tight break-keep">월 1건 발행 기본 <span className="text-slate-400 font-medium text-base ml-2">(연간 12건 안정적 운영 목표)</span></p>
                              <p className="text-slate-400 font-medium text-xs break-keep leading-relaxed mt-1">
                                ※ 지역 분산 없이 글로벌 기준 시간 1회 업로드로 24시간 자연 확산 유도
                              </p>
                           </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                          {/* 왼쪽: 메인 발행 시간 (검은 박스) - 끝선 맞춤을 위해 높이 및 너비 최적화 */}
                          <div className="lg:col-span-4 flex flex-col">
                            <div className="w-full h-full min-h-[280px] p-10 bg-[#0F172A] text-white rounded-[2.5rem] shadow-xl flex flex-col items-center justify-center text-center space-y-6">
                                 <div className="px-4 py-1.5 bg-white/10 rounded-full text-sm font-bold text-white/70 border border-white/10">발행 일시 (한국 시간)</div>
                                 <p className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">
                                   매월 마지막 주<br/>
                                   <span className="text-[#E0002B]">화요일 오후 3시</span>
                                 </p>
                            </div>
                          </div>

                          {/* 오른쪽: 글로벌 타겟 현지 시간 확인 표 - 끝선 맞춤을 위해 2열 그리드로 구성 */}
                          <div className="lg:col-span-8 flex flex-col space-y-4">
                             <div className="flex items-center gap-2 text-slate-900 font-bold text-base px-2">
                               <Globe className="w-5 h-5 text-[#E0002B]" />
                               <span>글로벌 타겟 현지 시간 확인</span>
                             </div>
                             <div className="flex-1 p-2 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-inner">
                                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                                  {timezoneData.map((item, idx) => (
                                    <div key={idx} className={`flex items-center justify-between py-4 px-6 hover:bg-white transition-colors border-slate-200/40 ${idx < 4 ? 'border-b' : ''} ${idx % 2 === 0 ? 'md:border-r' : ''}`}>
                                      <div className="space-y-1">
                                        <div className="text-base font-bold text-slate-800">{item.region}</div>
                                        <div className={`px-2 py-0.5 rounded text-[10px] font-bold inline-block break-keep ${item.highlight ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-400'}`}>
                                          {item.desc}
                                        </div>
                                      </div>
                                      <div className="text-right">
                                        <div className="text-lg font-bold text-[#E0002B] whitespace-pre-line">{item.time}</div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                             </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'effect' && (
                <div className="space-y-16 py-10 text-center">
                  <header className="space-y-10 max-w-4xl mx-auto flex flex-col items-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 break-keep leading-[1.4] text-center tracking-tight">
                      "DRB만의 색이 입혀진 <br className="md:hidden" />
                      <span className="bg-red-50 text-[#E0002B] px-4 rounded-xl inline-block my-2">작고, 가볍고, 빠른</span> <br className="md:hidden" />
                      세일즈툴로 영업 확장성 극대화"
                    </h2>
                    <div className="w-full h-px bg-slate-200 max-w-2xl mx-auto" />
                    <p className="text-xl md:text-2xl font-bold text-slate-800 break-keep text-center leading-relaxed">
                      기술 신뢰 기반의 지속 가능한 홍보 콘텐츠 발굴
                    </p>
                  </header>

                  {/* 실질적 가치 박스 추가 - 너비 조정 */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full bg-slate-100/50 border border-slate-200 rounded-[2.5rem] p-10 md:p-14 shadow-inner space-y-10"
                  >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-200 pb-8">
                       <div className="flex items-center gap-4">
                          <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-200">
                             <TrendingUp className="w-7 h-7 text-[#E0002B]" />
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900">실질적 가치</h3>
                       </div>
                       <div className="bg-white px-6 py-2 rounded-full border border-slate-200 shadow-sm">
                          <p className="text-slate-600 font-bold text-base flex items-center gap-2">
                             <Users className="w-4 h-4 text-[#E0002B]" /> 300명 규모 네트워크 활용
                          </p>
                       </div>
                    </div>

                    <div className="space-y-8 text-left">
                       <p className="text-xl text-slate-800 font-bold leading-relaxed break-keep">
                          <span className="text-[#E0002B]">실제 유입되는 견적 문의(Inquiry) 사례 공유</span> <span className="text-slate-400 font-medium ml-2">- 6개월당 2건</span>
                       </p>
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6 group hover:border-[#E0002B]/30 transition-colors">
                             <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-[#E0002B] rounded-full" />
                                <h4 className="font-bold text-lg text-slate-900">컨베어 분야</h4>
                             </div>
                             <div className="space-y-4">
                                <p className="text-slate-700 font-semibold leading-relaxed break-keep">
                                   Doctor Establishment (DEG) : ORN-FR-ANTIS/SIMPORTER 벨트 2롤
                                </p>
                                <div className="flex items-center gap-2 px-4 py-2 bg-red-50 text-[#E0002B] rounded-xl font-bold text-base w-fit">
                                   <DollarSign className="w-4 h-4" /> 견적 45,185.00 달러 샘플 제공
                                </div>
                             </div>
                          </div>

                          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6 group hover:border-[#E0002B]/30 transition-colors">
                             <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-[#E0002B] rounded-full" />
                                <h4 className="font-bold text-lg text-slate-900">전동 분야</h4>
                             </div>
                             <div className="space-y-4">
                                <p className="text-slate-700 font-semibold leading-relaxed break-keep">
                                   Freico 사 : 전동벨트 랩트, 로엣지, 리브드 벨트 총 수주
                                </p>
                                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl font-bold text-base w-fit">
                                   <DollarSign className="w-4 h-4" /> 총 18,825.44 달러 수주 완료
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                    {[
                      { icon: <Globe className="w-10 h-10 text-blue-500" />, t: "접점 확대", d: "기술 신뢰도 강화 및 글로벌 고객과의 연결 고리 마련" },
                      { icon: <Rocket className="w-10 h-10 text-[#E0002B]" />, t: "영업 경쟁력", d: "고객의 셀프 서치 및 내부 공유에 적합한 실전형 콘텐츠 확보" },
                      { icon: <Flag className="w-10 h-10 text-orange-500" />, t: "조직 활력", d: "TF 구성원 역량 강화 및 조직문화 자부심 고취" }
                    ].map((item, i) => (
                      <div key={i} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center space-y-6 text-center group hover:shadow-md transition-all">
                        <div className="p-6 bg-slate-50 rounded-2xl group-hover:scale-110 transition-transform">{item.icon}</div>
                        <h4 className="text-xl font-bold text-slate-900">{item.t}</h4>
                        <p className="text-base text-slate-600 font-medium leading-relaxed break-keep">{item.d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === 'appendix' && (
                <div className="space-y-16">
                  <div className="space-y-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
                      <h2 className="text-[1.7rem] font-bold text-slate-900 flex items-center gap-4 tracking-tight relative w-full">
                        <div className="w-2 h-10 bg-[#E0002B] rounded-full" /> 자사 채널 포트폴리오
                        <span className="ml-auto text-slate-400 text-sm font-medium">Last Updated: 25.12.31</span>
                      </h2>
                    </div>
                    
                    <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-lg leading-relaxed">
                          <thead className="bg-slate-50/50 text-[10px] font-bold uppercase text-slate-400 tracking-widest border-b border-slate-100">
                            <tr>
                              <th className="px-10 py-8">Platform</th>
                              <th className="px-10 py-8 text-center">Followers</th>
                              <th className="px-10 py-8 text-center">Contents</th>
                              <th className="px-10 py-8">Strategic Role</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {channelData.map((c, i) => (
                              <tr key={i} className={`group transition-all duration-300 ${c.active ? 'bg-red-50/20 hover:bg-red-50/30' : 'hover:bg-slate-50'}`}>
                                <td className={`px-10 py-8 font-bold flex items-center gap-4 text-xl ${c.active ? 'text-[#E0002B]' : 'text-slate-800'}`}>
                                  <div className={`p-2 rounded-lg ${c.active ? 'bg-[#E0002B] text-white shadow-md shadow-red-200' : 'bg-slate-100 text-slate-500'}`}>
                                    {c.icon}
                                  </div>
                                  <div className="flex flex-col">
                                    <div className="flex items-center gap-2 tracking-tight">
                                      {c.name}
                                      {c.active && <span className="px-2 py-0.5 rounded text-[10px] bg-red-100 text-[#E0002B] animate-pulse">FOCUS</span>}
                                    </div>
                                    {c.url && <a href={c.url} target="_blank" rel="noreferrer" className="text-xs font-bold text-[#E0002B]/60 hover:text-[#E0002B] flex items-center gap-1 mt-1">공식 채널 <ArrowUpRight className="w-3 h-3" /></a>}
                                  </div>
                                </td>
                                <td className="px-10 py-8 text-center font-bold text-slate-900 text-xl">{c.follower}</td>
                                <td className="px-10 py-8 text-center font-bold text-slate-900 text-xl">{c.contents}</td>
                                <td className="px-10 py-8">
                                  <p className="text-lg font-medium text-slate-700 leading-relaxed max-w-sm break-keep">{c.role}</p>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-12">
                    <h3 className="text-[1.8rem] font-bold text-slate-900 flex items-center gap-4 tracking-tight">
                      <div className="w-2 h-10 bg-[#E0002B] rounded-full" /> 경쟁사 분석 현황
                    </h3>

                    <div className="space-y-6">
                       <div className="flex items-center gap-3 text-[#E0002B] mb-2">
                          <Search className="w-6 h-6" />
                          <h4 className="text-lg font-bold">경쟁사 공통점</h4>
                       </div>
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                         {[
                           { t: "기술·현장·신뢰 중심 운영", d: "제품 구매의 합리적 근거 제시 및 공감대 유도", icon: <Target className="w-6 h-6" /> },
                           { t: "일관성", d: "고유의 컬러 팔레트와 로고 위치 유지 / 다양한 CTA 문구와 링크 제시", icon: <Layout className="w-6 h-6" /> },
                           { t: "평균 1개월 기준 2-4건 발행", d: "지속적인 브랜드 노출 + 점점 확대", icon: <Activity className="w-6 h-6" /> }
                         ].map((item, i) => (
                           <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow">
                             <div className="w-12 h-12 bg-red-50 text-[#E0002B] rounded-2xl flex items-center justify-center">
                               {item.icon}
                             </div>
                             <div className="space-y-2">
                               <h5 className="font-bold text-slate-900 text-lg">{item.t}</h5>
                               <p className="text-sm text-slate-500 font-medium leading-relaxed break-keep">{item.d}</p>
                             </div>
                           </div>
                         ))}
                       </div>
                    </div>
                    
                    <div className="bg-white rounded-[2.5rem] p-10 md:p-16 border border-slate-200 shadow-lg space-y-12">
                      <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide">
                        {Object.keys(competitorData).map((name) => (
                          <button 
                            key={name} 
                            onClick={() => setCompetitorTab(name)} 
                            className={`px-8 py-4 rounded-2xl font-bold text-lg transition-colors whitespace-nowrap border-2 ${competitorTab === name ? 'bg-slate-900 text-white border-slate-900 shadow-md' : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300'}`}
                          >
                            {name}
                          </button>
                        ))}
                      </div>
                      <AnimatePresence mode="wait">
                        <motion.div 
                          key={competitorTab} 
                          initial={{ opacity: 0, x: 20 }} 
                          animate={{ opacity: 1, x: 0 }} 
                          exit={{ opacity: 0, x: -20 }} 
                          className="space-y-12 p-10 md:p-16 bg-slate-50/80 rounded-[2.5rem] border border-slate-100 relative"
                        >
                          <div className="p-8 bg-white rounded-3xl border-l-[12px] border-[#E0002B] shadow-sm flex items-start md:items-center gap-8">
                             <div className="px-4 py-1 bg-[#E0002B] text-white text-[10px] font-bold rounded-lg uppercase tracking-widest flex-shrink-0">Key Point</div>
                             <p className="text-lg md:text-xl font-bold text-slate-900 tracking-tight break-keep leading-relaxed whitespace-pre-line">{(competitorData as any)[competitorTab].key}</p>
                          </div>
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                             {['tm', 'visual', 'strategy'].map((type) => (
                               <div key={type} className="space-y-8">
                                  <h5 className="font-bold text-slate-400 text-[10px] uppercase tracking-widest border-b-2 border-slate-200 pb-3">{type === 'tm' ? 'Tone & Manner' : type === 'visual' ? 'Visual Identity' : 'Strategic Focus'}</h5>
                                  <ul className="space-y-6">
                                    {(competitorData as any)[competitorTab][type].map((t: string, i: number) => (
                                      <li key={i} className="flex gap-4 items-start group">
                                        <ArrowRight className="w-4 h-4 text-[#E0002B] mt-2 flex-shrink-0" />
                                        <span className="text-[0.95rem] md:text-[1rem] font-medium text-slate-700 leading-relaxed whitespace-pre-line break-keep">
                                          {t}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                             ))}
                          </div>
                          <div className="pt-10 border-t border-slate-200 flex justify-end">
                            <a href={(competitorData as any)[competitorTab].link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-3 bg-white border-2 border-slate-200 rounded-2xl font-bold text-lg text-slate-600 hover:text-[#E0002B] transition-all">
                              <Linkedin className="w-5 h-5" /> 바로가기
                            </a>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default App;
