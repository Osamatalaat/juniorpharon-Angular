export interface ReviewMedia {
  id: number;
  type: 'image' | 'video';
  url: string;
  title?: string;
}
