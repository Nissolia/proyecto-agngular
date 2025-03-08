import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare var $: any;

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'proyecto';
    ngOnInit(): void {
        $('[data-bs-toggle="popover"]').popover();
    }


    opciones = [
      "Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4", "Opcion 5"
    ];
  
    presion(op: number) {
      alert("Se informa que se presiono la opcion " + op);
    }
}