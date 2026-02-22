
export interface Section {
  id: string;
  title: string;
  icon: string;
  tags?: string[];
}

export interface GlossaryItem {
  term: string;
  category: string;
  description: string;
}

export interface DraggableItem {
  id: string;
  name: string;
  pct: string;
  description: string;
  tags: string[];
}
