import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RolService } from '../rol/Service/rol.service';

@Component({
  selector: 'app-rol-list',
  templateUrl: './rol-list.page.html',
  styleUrls: ['./rol-list.page.scss'],
})
export class RolListPage implements OnInit {

  
  lista=[] ;
  public form : FormGroup;
  constructor(public servie:RolService,private http : HttpClient,public formBuilder: FormBuilder,private activatedRoute: ActivatedRoute,private router: NavController) {
   


   }

   crearFormulario(elemento){
    this.form=this.formBuilder.group({
      Id: elemento.Id,
      Descripcion: elemento.Descripcion,
     });
     
   }

  listar(){
    this.http.get("http://localhost:3000/rol/getall").subscribe(x=>{
      console.log(x);
      this.lista=(<any>x).result;
   
    })
  }

  onClickE(id){
    console.log(id)
    this.http.delete("http://localhost:3000/rol/remove/"+id).subscribe(x=>{
      console.log(x);
      this.lista=(<any>x).result;
      
   
    })
    this.listar();
  }
  onClickD(elemento){
    console.log(elemento)
    this.crearFormulario(elemento);
    
  

  }
  ngOnInit() {
    this.servie.datoscambios.subscribe(x=>{
      if(x==1)
      this.listar();
    });
    
    this.servie.datoscambios.emit(1);
    
  }

  goto(){
    this.router.navigateForward(["rol/0"])
  
  }
  gotoE(item){
    this.router.navigateForward(["rol/"+item.Id])
    
  }
}
