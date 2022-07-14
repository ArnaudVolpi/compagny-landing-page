import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  posts = [
    {
      img: 'https://images.pexels.com/photos/1940038/pexels-photo-1940038.jpeg?auto=compress&cs=tinysrgb&w=1600',
      date: '01 Septembre 2022',
      title: 'Layxo - Lancement officiel !',
      text: "Après six mois de travail dans l'ombre, c'est le grand jour Polydev se lance officiellement sur le marché du travail !"
    },
    {
      img: 'https://images.pexels.com/photos/2051027/pexels-photo-2051027.jpeg?auto=compress&cs=tinysrgb&w=1600',
      date: '16 Août 2022',
      title: 'Layxo - Derniers préparatifs',
      text: "Dernière ligne droite avant le lancement officiel, toute l'équipe met les bouchées doubles pour préparer le lancement ...."
    },
    {
      img: 'https://images.pexels.com/photos/1940041/pexels-photo-1940041.jpeg?auto=compress&cs=tinysrgb&w=1600',
      date: '15 Mai 2022',
      title: 'Layxo - Création de notre entreprise',
      text: "Aujourd'hui est un grand jour, nous vous présentons Meildo notre projet entrepreneurial."
    }
  ]


}
