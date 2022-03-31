export interface ICampaign {
  id: number;
  name: string;
  userId: number;
  shortDescription: string | null;
  description: string;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}
