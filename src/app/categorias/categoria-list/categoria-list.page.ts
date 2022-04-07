import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.page.html',
  styleUrls: ['./categoria-list.page.scss'],
})
export class CategoriaListPage implements OnInit {

  lista=[] ;
  public form : FormGroup;
  constructor(private http : HttpClient,public formBuilder: FormBuilder,private activatedRoute: ActivatedRoute,private router: NavController) {
   

   }

   crearFormulario(elemento){
    this.form=this.formBuilder.group({
      Id: elemento.Id,
      Descripcion: elemento.Descripcion,
     });
     
   }

  listar(){
    this.http.get("http://localhost:3000/categoria/getall").subscribe(x=>{
      console.log(x);
      this.lista=(<any>x).result;
   
    })
  }

  onClickE(id){
    console.log(id)
    this.http.delete("http://localhost:3000/categoria/remove/"+id).subscribe(x=>{
      console.log(x);
      this.lista=(<any>x).result;
   
    })
    this.listar();
  }
  onClickD(elemento){
    this.crearFormulario(elemento);
  

  }
  ngOnInit() {
    this.listar();
    
  }

  goto(){
    this.router.navigateForward(["categorias/0"])
  }
}
