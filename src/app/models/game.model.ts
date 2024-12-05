export interface Game {
    id: string;           
    title: string;        
    platform: string;     
    genre: string;       
    releaseYear?: Date; 
    coverImage?: string;  
    description?: string; 
    addedAt: Date;       
  }
  