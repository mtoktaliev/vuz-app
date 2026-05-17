export interface IAdmissionStep {
  id: number;
  title: string;
  description: string;
  icon: React.FC<{
    themeColor?: string;
  }>;
}
