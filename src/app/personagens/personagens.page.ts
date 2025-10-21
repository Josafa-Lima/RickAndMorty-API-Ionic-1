
import { Component, inject, OnInit } from '@angular/core';
import { RickandmortyService } from '../services/rickandmorty.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.page.html',
  styleUrls: ['./personagens.page.scss'],
})
export class PersonagensPage implements OnInit {

 
  
constructor (private rIck: RickandmortyService) {}
   
  ngOnInit() {
    this.rIck.getByName('rick').subscribe((data:any)=>{
      console.log(data)
        this.personagens = data.results
  })
  
 
 
}
onCLick(name: any) {
  this.rIck.getByName(name.target.value).subscribe((data:any)=>{
    console.log(data)
      this.personagens = data.results
})

}
onCLick1(status: any) {
  this.rIck.getByStatus(status.target.value).subscribe((data:any)=>{
    console.log(data)
      this.personagens = data.results
})

}
onCLick2(species: any) {
  this.rIck.getBySpecies(species.target.value).subscribe((data:any)=>{
    console.log(data)
      this.personagens = data.results
})

}
personagens: any = null
}