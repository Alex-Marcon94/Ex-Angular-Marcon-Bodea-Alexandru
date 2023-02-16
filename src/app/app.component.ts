import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { CafeneaSauLocalitate } from './cafeneasaulocalitate';
import { ProdusDisponibil, PseudoApiService } from './pseudo-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ExAngular';
  localitati: CafeneaSauLocalitate[] = [];
  showCoffeePlace: boolean = false;
  coffeeData: ProdusDisponibil[] = [];
  form!: FormGroup;
  selectedId: any;


  constructor(
    private api: PseudoApiService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    
    this.api.ListaLocalitati().subscribe(lista => {
      this.localitati = lista;
    })

    this.form = this.formBuilder.group({
      filtru: ['']
    });

    this.form.get('filtru')!.valueChanges.pipe(debounceTime(250)).subscribe((value: any) => {
      this.api.ProduseDisponibile(this.selectedId).subscribe(data => {
        this.coffeeData = data.filter((item:any) => 
        item.denumire.toLowerCase().includes(value.toLowerCase()) ||
        item.descriere.toLowerCase().includes(value.toLowerCase()) ||
        item.id == value);
      })

      if (value.length === 0) {
        this.api.ProduseDisponibile(this.selectedId).subscribe(data => {
          this.showCoffeePlace = true;
          this.coffeeData = data;
        });
      }
    });
  }

  goToCoffe(id: number) {
    this.selectedId = id;
    this.api.ProduseDisponibile(id).subscribe(data => {
      if(data) {
        this.showCoffeePlace = true;
        this.coffeeData = data;
      } else {
        this.showCoffeePlace = false
      }
    }, err => {
      this.snackBar.open(err, '', { duration: 2000, panelClass: ['red-snackbar'] })
    });
  }
}
