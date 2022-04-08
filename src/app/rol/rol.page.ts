import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RolService } from './Service/rol.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.page.html',
  styleUrls: ['./rol.page.scss'],
})
export class RolPage implements OnInit {

  @Input() frmRol:FormGroup;
 
  item="0";
  
  constructor(public servie:RolService, private http : HttpClient,public formBuilder: FormBuilder,private activate:ActivatedRoute,private router: NavController)
  {


  }

  getById(){
    let resultado:any;
    console.log(this.frmRol.value);
  this.http.get('http://localhost:3000/rol/byid/'+this.item).subscribe(respuesta=>{
    resultado = (<any>respuesta).result;
    this.CargarDatosDFoumulario(resultado);
  })
  
}

 registrar(){
   console.log(this.frmRol.value);
 this.http.post('http://localhost:3000/rol/add',this.frmRol.value).subscribe(respuesta=>{
   console.log("respuesta", respuesta);
   this.servie.datoscambios.emit(1);
 })

}

editar(){
  console.log(this.frmRol.value);
  this.http.put('http://localhost:3000/rol/update',this.frmRol.value).subscribe(respuesta=>{
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
  this.router.navigateForward(["rol-list"])
}
CargarDatosDFoumulario(dato){
  this.frmRol=this.formBuilder.group({
    Id: parseInt(this.item),
    Descripcion: dato.Descripcion,
   });

}

  ngOnInit() {
    this.item = this.activate.snapshot.paramMap.get('id');
    console.log(this.item)

      this.frmRol=this.formBuilder.group({
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

