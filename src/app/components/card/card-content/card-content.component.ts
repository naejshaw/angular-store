import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../../data/dataFake'

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css']
})
export class CardContentComponent implements OnInit {

  gameCover:string=""
  gameLabel:string=""
  gameType:string=""
  gamePrice:string=""
  private id:string | null ="0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
        this.id = value.get("id")
      )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.gameCover = result.cover
    this.gameLabel = result.label
    this.gameType = result.type
    this.gamePrice = result.price
  }

}
