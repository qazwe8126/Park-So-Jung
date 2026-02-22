
import React from 'react';
import { Home, Compass, Target, Palette, Settings, Zap, BookOpen, Flag } from 'lucide-react';
import { Section, DraggableItem } from './types';

export const SECTIONS: Section[] = [
  { id: 'intro', title: '최종 결론 요약', icon: 'Home' },
  { id: 'background', title: '1. 배경 및 사유', icon: 'Compass' },
  { id: 'direction', title: '2. 콘텐츠 방향성', icon: 'Target' },
  { id: 'guide', title: '3. 제작 및 콘텐츠 가이드', icon: 'Palette' },
  { id: 'operation', title: '4. 운영 루틴 및 가이드', icon: 'Settings' },
  { id: 'effect', title: '5. 기대효과', icon: 'Zap' },
  { id: 'appendix', title: '별첨. 채널 현황 분석', icon: 'BookOpen' },
];

export const STRATEGY_ITEMS: DraggableItem[] = [
  { id: 'field', name: '현장 리얼리티', pct: '40%', description: '브랜드 신뢰를 고르게 연결하는 현장 중심 콘텐츠', tags: ['신뢰', '연결'] },
  { id: 'solution', name: '기술 솔루션', pct: '40%', description: '고객이 우리를 떠올리게 만드는 문제 해결책', tags: ['해결', '상황'] },
  { id: 'proof', name: '성과 공유', pct: '20%', description: '신뢰의 증거가 되는 팩트 기반 소식', tags: ['증거', '팩트'] },
];

export const getIcon = (name: string, className?: string) => {
  switch (name) {
    case 'Home': return <Home className={className} />;
    case 'Compass': return <Compass className={className} />;
    case 'Target': return <Target className={className} />;
    case 'Palette': return <Palette className={className} />;
    case 'Settings': return <Settings className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'BookOpen': return <BookOpen className={className} />;
    case 'Flag': return <Flag className={className} />;
    default: return <Home className={className} />;
  }
};
