import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onChanges(newValue: number) {
    this.progreso = newValue;
    this.validarProgreso();
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor: number) {
    this.progreso = this.progreso + valor;
    this.validarProgreso();
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

  validarProgreso() {
    if (this.progreso >= 100) { this.progreso = 100; }
    if (this.progreso <= 0) { this.progreso = 0; }
  }

}
