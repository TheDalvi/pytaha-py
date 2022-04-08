import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.page.html',
  styleUrls: ['./publicar.page.scss'],
})


export class PublicarPage implements OnInit {

 
  @Input() frmAlquiler:FormGroup;
 
  item="0";
  permite=false;
  constructor( private http : HttpClient,public formBuilder: FormBuilder,private activate:ActivatedRoute,private router: NavController)
  {


  }

  getById(){
    let resultado:any;
    console.log(this.frmAlquiler.value);
  this.http.get('http://localhost:3000/alquiler/byid/'+this.item).subscribe(respuesta=>{
    resultado = (<any>respuesta).result;
    this.CargarDatosDFoumulario(resultado);
  })
  
}

 registrar(){
   console.log(this.frmAlquiler.value);
 this.http.post('http://localhost:3000/alquiler/add',this.frmAlquiler.value).subscribe(respuesta=>{
   console.log("respuesta ass", respuesta);
 })

}

editar(){
  console.log(this.frmAlquiler.value);
  this.http.put('http://localhost:3000/alquiler/update',this.frmAlquiler.value).subscribe(respuesta=>{
  console.log("respuesta", respuesta);
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
  this.router.navigateForward(["publicar-list"])
}
CargarDatosDFoumulario(dato){
  this.frmAlquiler=this.formBuilder.group({
    Id: parseInt(this.item),
    PersonaId: dato.PersonaId,
    CategoriaId: dato.CategoriaId,
    CantidadHabitaciones: dato.CantidadHabitaciones,
    Permite_Mascotas: dato.Permite_Mascotas,
    Descripcion: dato.Descripcion,
    Ubicacion_GPS: dato.Ubicacion_GPS,
    Observacion: dato.Observacion,
    Direccion: dato.Direccion,
    Precio: dato.Precio,
    Garantia: dato.Garantia,
    Referencia: dato.Referencia

   });

}

  ngOnInit() {
    this.item = this.activate.snapshot.paramMap.get('id');
    console.log(this.item)

      this.frmAlquiler=this.formBuilder.group({
        Id: parseInt(this.item),
        PersonaId: 1,
        CategoriaId: 26,
        CantidadHabitaciones: "",
        Permite_Mascotas: this.permite,
        Descripcion: "",
        Ubicacion_GPS: "",
        Observacion: "",
        Direccion: "",
        Precio: "",
        Garantia: "",
        Referencia: "",
    
       });
      
   
    if(this.item!="0"){
      this.getById();
    }
  }

  checkboxClick(evento){
    this.permite=evento.detail.checked;
    console.log(this.permite);
  }

onClickBack()
{
this.router.pop();
}
}

