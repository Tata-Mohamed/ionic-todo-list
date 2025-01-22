export interface Game {
    id: number;           
    nom: string;        
    console: string;     
    collection: string;       
    dateDeSortie?: Date; 
    coverImage?: string;  
    description?: string; 
    dateDeCreation: Date;
    heuresDeJeu?: number;
  }
  