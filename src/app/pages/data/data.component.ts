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

    //Inyección de dependencia del servicio
    constructor(private dataProvider: ServicioProyectoService) { }

    //Ejecución de la petición y suscripción de la respuesta

    ngOnInit() {
      this.dataProvider.getResponse().subscribe((response) => { 
        let dataArray = (response as InterfazProyecto[]); 
        this.data = dataArray.slice(0,10);
      })
    }
}
