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
      img: 'https://images.pexels.com/photos/1376201/pexels-photo-1376201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      date: '01 Septembre 2022',
      title: 'Meildo - Lancement officiel !',
      text: "Après six mois de travail dans l'ombre, c'est le grand jour Polydev se lance officiellement sur le marché du travail !"
    },
    {
      img: 'https://images.pexels.com/photos/1534172/pexels-photo-1534172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      date: '16 Août 2022',
      title: 'Meildo - Derniers préparatifs',
      text: "Dernière ligne droite avant le lancement officiel, toute l'équipe met les bouchées doubles pour préparer le lancement ...."
    },
    {
      img: 'https://images.pexels.com/photos/1687341/pexels-photo-1687341.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      date: '15 Mai 2022',
      title: 'Meildo - Création de notre entreprise',
      text: "Aujourd'hui est un grand jour, nous vous présentons Meildo notre projet entrepreneurial."
    }
  ]


}
