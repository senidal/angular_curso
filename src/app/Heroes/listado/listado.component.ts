import { ConvertPropertyBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, ɵallowSanitizationBypassAndThrow } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes:string[]=['spiderman','iroman','hulk','capitan america','thor','wanda'];
  arrborrados:string[]=[];
  borrados:string='';

  BorrarHeroe(){
   console.log("borrando...");
   const ultimoElemento = this.heroes[this.heroes.length - 1]
   this.arrborrados.push(ultimoElemento);
   this.borrados=this.heroes.pop()||'';
  };

}