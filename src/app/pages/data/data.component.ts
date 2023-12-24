import { Component } from '@angular/core';

import { HttpClientModule } from  '@angular/common/http';

//Importación de la interfaz
import {InterfazProyecto} from '../../interfaces/interfaz-proyecto';

//Importación del servicio
import { ServicioProyectoService } from '../../providers/servicio-proyecto.service';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [HttpClientModule],
  providers: [ServicioProyectoService],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
    //Atributo con el tipo de dato de la interfaz
    public data : InterfazProyecto[] = [];

    public dataFil : InterfazProyecto[] = [];
    valorInput: number = 0;

    //Inyección de dependencia del servicio
    constructor(private dataProvider: ServicioProyectoService) { }

    //Ejecución de la petición y suscripción de la respuesta

    ngOnInit() {
      this.dataProvider.getResponse().subscribe((response) => { 
        let dataArray = (response as InterfazProyecto[]); 
        this.data = dataArray.slice(0,150);
        this.dataFil = this.data.slice();
      })
    }

    valorSeleccionado: string = '';

    onSelectChange(event: any) {
      // Accede al valor seleccionado a través de event.target.value
      this.valorSeleccionado = event.target.value;
    }

    pruebita() {
      if (this.valorSeleccionado === 'uno') {
        this.dataFil = this.data.filter(objeto => {
          // Divide la cadena de cantantes por la coma
          const cantantesArray = objeto['artist(s)_name'].split(',');
        
          // Filtra los elementos vacíos después de dividir
          const cantantesFiltrados = cantantesArray.filter(cantante => cantante.trim() !== '');
        
          // Verifica si solo hay un cantante
            return cantantesFiltrados.length === 1;
        });  
      } else if (this.valorSeleccionado === 'dos') {
        this.dataFil = this.data.filter(objeto => {
          // Divide la cadena de cantantes por la coma
          const cantantesArray = objeto['artist(s)_name'].split(',');
        
          // Filtra los elementos vacíos después de dividir
          const cantantesFiltrados = cantantesArray.filter(cantante => cantante.trim() !== '');
        
          // Verifica si solo hay un cantante
            return cantantesFiltrados.length === 2;
        });
      } else if (this.valorSeleccionado === 'tres'){
        this.dataFil = this.data.filter(objeto => {
          // Divide la cadena de cantantes por la coma
          const cantantesArray = objeto['artist(s)_name'].split(',');
        
          // Filtra los elementos vacíos después de dividir
          const cantantesFiltrados = cantantesArray.filter(cantante => cantante.trim() !== '');
        
          // Verifica si solo hay un cantante
            return cantantesFiltrados.length >=3;
        });
      } else{
        this.dataFil = this.data.slice();
      }
    }
    



}
