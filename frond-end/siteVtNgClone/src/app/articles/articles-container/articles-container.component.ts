import { Component, OnInit } from '@angular/core';


export interface IArticle {
  title: string;
  description: string;
  photo: string;
  taille: string,
  nbreArticle: number;
  prix: number;
}

// TODO: replace this with real data from your application
export const INITIAL_ARTICLES: IArticle[] = [
  {
    title: 'Couches Confy',
    description: 'Premiére description',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JtXyyTquz2Y7zhH1l1M8cnwVbQEwwG3fTQ&usqp=CAU',
    taille: 'Tout les tailles sont disponibles',
    nbreArticle: 5,
    prix: 1450,
  },
  {
    title: 'Couches Jumbo',
    description: 'Marque Allemande, Trés Douce t fines, elles sont super absorbantes',
    photo:'https://wwwi.globalpiyasa.com/lib/Urun/670/16aa0a862744789069f923490d7bf045_1.jpg',
    taille: '4+ (10-15kg)',
    nbreArticle: 5,
    prix: 150,
  },
  {
    title: 'Couches Mickey',
    description: 'Deuxiéme description',
    photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrurP74IPJkKBRgJlLmqOMtA_mcFEJNJYTqg&usqp=CAU',
    taille: 'Taille M Paquets de 42 piéces',
    nbreArticle: 22,
    prix: 142250,
  },
  {
    title: 'Couches Pull-Ups',
    description: 'troisiéme description, une description de plus',
    photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMLpgQArXct_h6t9KhuM_KDZ2hv2cvEhcoOQ&usqp=CAU',
    taille: 'Tout les tailles sont disponible',
    nbreArticle: 50,
    prix: 750,
  },
  {
    title: 'Couches Lillydoo',
    description: 'Les couches lillydoo, le top des top',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpEfMiVP49ewYWJNS4GvP-phhRGFWEmtysWg&usqp=CAU',
    taille: 'Taill 6(13-18kg) paquets de 23',
    nbreArticle: 5,
    prix: 4500,
  },
  {
    title: 'Couches Kit & Kin',
    description: 'Collection couches écologiques. Des couches naturelles, 0% parfum, 0% latex,0% chlore. BON POUR BÉBÉ, BON POUR L\'ENVIRONNEMENT.',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeYj3Ine1RpuIYGf5bvhHZh8XE--FJkBkjtw&usqp=CAU',
    taille: 'Tout les tailles sont disponible',
    nbreArticle: 5,
    prix: 1450,
  },
  {
    title: 'Couches Hello B',
    description: 'Couches très légères et très confortables pour votre bout de chou.  Elles sont hyper absorbantes et d\'excellente qualité',
    photo: 'https://m.media-amazon.com/images/I/81ixL7Zgl7L._AC_SL1500_.jpg',
    taille: 'Taille 4 paquets de 26 & Taille 5 paquets de 22',
    nbreArticle: 49,
    prix: 9500,
  },
  {
    title: 'Serviettes hygieniques',
    description: 'Serviettes hygieniques et protège slips à l\'extrait d\'aloès vera venant d\'europe excellente qualité',
    photo: 'https://m.media-amazon.com/images/I/61dKY4wUqoL._AC_SL1000_.jpg',
    taille: 'Tout les tailles sont disponible',
    nbreArticle: 3,
    prix: 500,
  },
  {
    title: 'Couches Confy',
    description: 'Premiére description',
    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JtXyyTquz2Y7zhH1l1M8cnwVbQEwwG3fTQ&usqp=CAU',
    taille: 'Tout les tailles sont disponible',
    nbreArticle: 5,
    prix: 1450,
  },
  {
    title: 'Couches Confy',
    description: 'Premiére description',
    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JtXyyTquz2Y7zhH1l1M8cnwVbQEwwG3fTQ&usqp=CAU',
    taille: 'Tout les tailles sont disponible',
    nbreArticle: 5,
    prix: 1450,
  },
];


@Component({
  selector: 'app-articles-container',
  templateUrl: './articles-container.component.html',
  styleUrls: ['./articles-container.component.css'],
})
export class ArticlesContainerComponent implements OnInit {
  
  articles: IArticle[] = INITIAL_ARTICLES  
  
  constructor() {}

  ngOnInit(): void {}
  
  addArticle(article:IArticle){
    console.log('Add :', article);
    
  }
  
  removeArticle(article:IArticle){
    console.log('Remove :', article);
    
  }
  
  updateArticle(article:IArticle){
    console.log('Update :', article);
    
  }
  
}
