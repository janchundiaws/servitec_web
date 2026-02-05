
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags?: string[];
}

export interface SoftwareProjectProps {
  title: string;
  category: 'Web' | 'Mobile' | 'Desktop' | 'System';
  description: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model' | 'system';
  text: string;
}
