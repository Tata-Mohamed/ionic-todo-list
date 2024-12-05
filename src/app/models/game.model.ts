export interface Game {
    id: string;           
    title: string;        
    platform: string;     
    genre: string;       
    releaseYear?: number; 
    coverImage?: string;  
    description?: string; 
    addedAt: Date;       
  }
  