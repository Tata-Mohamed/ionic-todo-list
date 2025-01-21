import { Game } from './game.model';

export interface Collection {
  id: string;
  name: string;
  description?: string;
  image?: string;
  games: Game[]; 
  createdAt: Date; 
  updatedAt: Date;  
}