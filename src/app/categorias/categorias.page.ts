import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CategoriaService } from './categoria-list/Service/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
 
  @Input() frmCategoria:FormGroup;
 
  item="0";
  
  constructor(public servie:CategoriaService, private http : HttpClient,public formBuilder: FormBuilder,private activate:ActivatedRoute,private router: NavController)
  {


  }

  getById(){
    let resultado:any;
    console.log(this.frmCategoria.value);
  this.http.get('http://localhost:3000/categoria/byid/'+this.item).subscribe(respuesta=>{
    resultado = (<any>respuesta).result;
    this.CargarDatosDFoumulario(resultado);
  })
  
}

 registrar(){
   console.log(this.frmCategoria.value);
 this.http.post('http://localhost:3000/categoria/add',this.frmCategoria.value).subscribe(respuesta=>{
   console.log("respuesta", respuesta);
   this.servie.datoscambios.emit(1);
 })

}

editar(){
  console.log(this.frmCategoria.value);
  this.http.put('http://localhost:3000/categoria/update',this.frmCategoria.value).subscribe(respuesta=>{
  console.log("respuesta", respuesta);
   this.servie.datoscambios.emit(1);
})

}

clickButton(){
  console.log(this.item)
  if(this.item=="0")
  {
    this.registrar();
  }
  else{
    this.editar();
   
    //router link volver al listado
  }
  this.router.navigateForward(["categoria-list"])
}
CargarDatosDFoumulario(dato){
  this.frmCategoria=this.formBuilder.group({
    Id: parseInt(this.item),
    Descripcion: dato.Descripcion,
   });

}

  ngOnInit() {
    this.item = this.activate.snapshot.paramMap.get('id');
    console.log(this.item)

      this.frmCategoria=this.formBuilder.group({
        Id: 0,
        Descripcion: [''],
       });
      
   
    if(this.item!="0"){
      this.getById();
    }
  }
onClickBack()
{
this.router.pop();
}
}
