import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of, pipe, timer, throwError } from 'rxjs';
import { delay, mapTo, mergeMap } from 'rxjs/operators';
import { CafeneaSauLocalitate, ListaCafenele } from './cafeneasaulocalitate';

export interface ProdusDisponibil {
  id: number;
  denumire: string;
  descriere: string;
  pret: number;
}

@Injectable({
  providedIn: 'root'
})
export class PseudoApiService {

  public cafele: ProdusDisponibil[] = 
  [
    { id: 1, denumire: 'TANZANIA PEABERRY', descriere: 'Grown on Mt. Meru and Mt. Kilimanjaro, Tanzania Peaberry coffee beans are a bright Arabica coffee with a medium body and delightful fruit-toned acidity. The best Tanzania coffees have a taste that is deep and rich, often revealing hints of black currant which soften to chocolate and then blend into the coffee\'s lingering, sweet finish', pret: 12 },
    { id: 2, denumire: 'HAWAII KONA', descriere: 'The best Hawaiian Kona coffee beans are grown at about 2,000 feet above sea level on the fertile slopes of Mauna Loa and Hualalai Volcanoes on the Big Island of Hawaii, Kona coffee is known for its rich yet light and delicate taste with a complex aroma. Different farms will have slightly different coffees under their own brand, but shouldn\'t be a blend.', pret: 12 },
    { id: 3, denumire: 'NICARAGUAN', descriere: 'A new arrival to the list this year is Nicaragua, which has developed a number of highly rated coffees. The best coffees from this top-rated central american country typically exhibit notes of chocolate (dark, almost cacao-like) and fruits like apple and berries.', pret: 12 },
    { id: 4, denumire: 'SUMATRA MANDHELING', descriere: 'Exhibiting a full body and low acidity, Sumatra Mandheling beans are best known as a smooth drinking coffee. It is also known for its sweetness and herbacious, earthy flavor, and complex aroma. The coffee is grown in the Lintong region in north central Sumatra near Lake Toba.', pret: 12 },
    { id: 5, denumire: 'SULAWESI TORAJA', descriere: 'This multi-dimensional coffee is grown in the southeastern highlands of Sulawesi. Known best for its full body and rich, expansive flavor, Sulawesi Toraja coffee beans are very well balanced and exhibits tasting notes of dark chocolate and ripe fruit. The acidity is low-toned yet vibrant, with less body than a Sumatran coffee though slightly more acidic, and with more earthiness than a typical Java Arabica coffee.', pret: 12 },
    { id: 6, denumire: 'MOCHA JAVA', descriere: 'Perhaps the most famous blend of coffee beans, Mocha Java includes Arabian (Yemen) Mocha coffee and Indonesian Java Arabica coffee, two coffees with complementary characteristics. The best Yemen Mocha coffees exhibit a lively intensity and pleasant wildness which complements the clean and bright smoothness of the Java coffee. The traditional blend of Mocha and Java coffee beans creates a complex and yet well-balanced brewed cup.', pret: 12 },
    { id: 7, denumire: 'ETHIOPIAN HARRAR', descriere: 'Spicy, fragrant, and heavy-bodied, Ethiopian Harrar coffee is a wild and exotic coffee bean that is dry-processed (natural) Arabica coffee grown in southern Ethiopia at elevations from 4,500 and 6,300 feet above sea level. The dry-processing creates a fruity taste likened to dry, red wine, a power house coffee exhibiting a bold taste that resonates in the cup.', pret: 12 },
    { id: 8, denumire: 'ETHIOPIAN YIRGACHEFFE', descriere: 'Fragrant and spicy, the best Yirgacheffe coffee beans are known for their sweet flavor and aroma with a medium to light body. The coffee is wet processed and grown at elevations from 5,800 feet to 6,600 feet above sea level.', pret: 12 },
    { id: 9, denumire: 'GUATEMALAN ANTIGUA', descriere: 'Grown at elevations more than 4,600 feet above sea level, the grade of Guatemala Antigua coffee beans is known as Strictly Hard Bean and include the Arabica varietals Catuai (Coffea arabica var. catuai), Caturra (Coffea arabica var. caturra), and Bourbon (Coffea arabica var. bourbon).', pret: 12 },
    { id: 10, denumire: 'KENYA AA', descriere: 'Clearly one of the world\'s best premium coffee beans, this is listed last but certainly isn\'t the least of the best coffees in the world. Kenya AA coffee is grown at more than 2,000 feet above sea level on Kenya\'s high plateaus. The AA refers to the biggest screen size in the Kenya coffee grading system with specifications that the beans are just a little more than one-fourth inch in diameter.', pret: 12 },
    { id: 11, denumire: 'JAMAICAN BLUE MOUNTAIN', descriere: 'Grown in Jamaica\'s Blue Mountain District, Jamaica Blue Mountain coffee is often described as sophisticated with a smooth and silky, complex taste, outstanding full body, and very well balanced. Many reviewers have called it the quintessential cup of coffee and it clearly stands among the world\'s top gourmet coffees', pret: 12 }
  ];

  constructor() { }

  public ListaLocalitati(): Observable<CafeneaSauLocalitate[]>
  {
    // Returneaza o lista de cafenele dupa un scurt delay care
    return of(ListaCafenele.cafenele).pipe(delay(250));
  }

  public ProduseDisponibile(idCafenea: number): Observable<ProdusDisponibil[]>
  {
    switch(idCafenea)
    {
      case 8786: return of([this.cafele[7],this.cafele[1],this.cafele[9],this.cafele[6],this.cafele[0],this.cafele[2],this.cafele[8],this.cafele[5]]).pipe(delay(242));
      case 1623: return of([this.cafele[9],this.cafele[7],this.cafele[6],this.cafele[0]]).pipe(delay(509));
      case 1590: return of([this.cafele[3],this.cafele[0],this.cafele[2],this.cafele[8],this.cafele[1],this.cafele[9],this.cafele[7],this.cafele[6]]).pipe(delay(638));
      case 8489: return of([this.cafele[4],this.cafele[3],this.cafele[5],this.cafele[0],this.cafele[6],this.cafele[2],this.cafele[1]]).pipe(delay(255));
      case 8588: return of([this.cafele[5],this.cafele[2]]).pipe(delay(314));
      case 864: return of([this.cafele[3],this.cafele[1],this.cafele[4],this.cafele[9],this.cafele[2],this.cafele[5],this.cafele[0]]).pipe(delay(173));
      case 4371: return timer(818).pipe(mergeMap(e => throwError('Cafeneaua cu id 4371 ridica intentionat o exceptie.')));
      case 1927: return of([this.cafele[6],this.cafele[3]]).pipe(delay(652));
      case 1784: return of([this.cafele[3],this.cafele[6],this.cafele[9],this.cafele[5],this.cafele[1],this.cafele[4],this.cafele[2],this.cafele[7]]).pipe(delay(929));
      case 7050: return of([this.cafele[7],this.cafele[6],this.cafele[9],this.cafele[5],this.cafele[8],this.cafele[1],this.cafele[2],this.cafele[4]]).pipe(delay(455));
      case 8382: return of([this.cafele[2],this.cafele[0],this.cafele[3],this.cafele[7]]).pipe(delay(653));
      case 5492: return of([this.cafele[8],this.cafele[3]]).pipe(delay(922));
      case 428: return of([this.cafele[7],this.cafele[6],this.cafele[5],this.cafele[2],this.cafele[8],this.cafele[1],this.cafele[9],this.cafele[3]]).pipe(delay(764));
      case 8133: return of([this.cafele[5],this.cafele[9],this.cafele[7],this.cafele[0],this.cafele[1]]).pipe(delay(730));
      case 9562: return of([this.cafele[3],this.cafele[8],this.cafele[1]]).pipe(delay(245));
      case 6036: return of([this.cafele[6],this.cafele[8],this.cafele[9],this.cafele[3],this.cafele[2],this.cafele[7],this.cafele[4]]).pipe(delay(687));
      case 5294: return of([this.cafele[2],this.cafele[7],this.cafele[6]]).pipe(delay(984));
      case 5703: return of([this.cafele[6],this.cafele[3],this.cafele[8],this.cafele[0],this.cafele[5],this.cafele[9],this.cafele[1],this.cafele[7]]).pipe(delay(207));
      case 249: return timer(206).pipe(mergeMap(e => throwError('Cafeneaua cu id 249 ridica intentionat o exceptie.')));
      case 7430: return of([this.cafele[7],this.cafele[2],this.cafele[6],this.cafele[8],this.cafele[0],this.cafele[4]]).pipe(delay(439));
      case 8283: return of([this.cafele[3],this.cafele[1]]).pipe(delay(146));
      case 1870: return of([this.cafele[0],this.cafele[5],this.cafele[9],this.cafele[6],this.cafele[4],this.cafele[2],this.cafele[1]]).pipe(delay(596));
      case 8064: return of([this.cafele[0],this.cafele[6],this.cafele[2]]).pipe(delay(172));
      case 5101: return of([this.cafele[2],this.cafele[4],this.cafele[0],this.cafele[8],this.cafele[1],this.cafele[5],this.cafele[9]]).pipe(delay(653));
      case 9599: return of([this.cafele[2],this.cafele[3],this.cafele[4],this.cafele[6],this.cafele[8],this.cafele[5],this.cafele[0],this.cafele[9]]).pipe(delay(906));
      case 8743: return of([this.cafele[4],this.cafele[0],this.cafele[7],this.cafele[8],this.cafele[5],this.cafele[9],this.cafele[6],this.cafele[3]]).pipe(delay(692));
      case 8229: return of([this.cafele[6],this.cafele[1]]).pipe(delay(648));
      case 4041: return of([this.cafele[6],this.cafele[5],this.cafele[2],this.cafele[0],this.cafele[9],this.cafele[4],this.cafele[8],this.cafele[3],this.cafele[1]]).pipe(delay(392));
      case 3062: return timer(800).pipe(mergeMap(e => throwError('Cafeneaua cu id 3062 ridica intentionat o exceptie.')));
      case 1308: return timer(817).pipe(mergeMap(e => throwError('Cafeneaua cu id 1308 ridica intentionat o exceptie.')));
      case 4513: return of([this.cafele[1],this.cafele[8],this.cafele[0],this.cafele[6],this.cafele[2],this.cafele[7],this.cafele[5],this.cafele[9],this.cafele[4]]).pipe(delay(820));
      case 5484: return of([this.cafele[8],this.cafele[6],this.cafele[2],this.cafele[1],this.cafele[7],this.cafele[5],this.cafele[4],this.cafele[9],this.cafele[3]]).pipe(delay(524));
      case 5778: return of([this.cafele[2],this.cafele[4],this.cafele[3],this.cafele[5],this.cafele[1],this.cafele[0],this.cafele[7]]).pipe(delay(979));
      case 106: return of([this.cafele[6],this.cafele[7],this.cafele[3],this.cafele[9],this.cafele[8]]).pipe(delay(228));
      case 3072: return of([this.cafele[8],this.cafele[1],this.cafele[7],this.cafele[3],this.cafele[2],this.cafele[0],this.cafele[4],this.cafele[6]]).pipe(delay(659));
      case 3526: return of([this.cafele[8],this.cafele[6],this.cafele[1],this.cafele[9],this.cafele[5],this.cafele[4],this.cafele[2],this.cafele[7]]).pipe(delay(662));
      case 5627: return of([this.cafele[6],this.cafele[8],this.cafele[0]]).pipe(delay(208));
      case 9932: return of([this.cafele[4],this.cafele[7],this.cafele[0],this.cafele[1]]).pipe(delay(993));
      case 7516: return timer(523).pipe(mergeMap(e => throwError('Cafeneaua cu id 7516 ridica intentionat o exceptie.')));
      case 3552: return timer(210).pipe(mergeMap(e => throwError('Cafeneaua cu id 3552 ridica intentionat o exceptie.')));
      case 2066: return of([this.cafele[1],this.cafele[7],this.cafele[9]]).pipe(delay(342));
      case 4382: return of([this.cafele[8],this.cafele[0],this.cafele[3],this.cafele[5]]).pipe(delay(211));
      case 269: return of([this.cafele[6],this.cafele[0],this.cafele[3],this.cafele[1],this.cafele[7],this.cafele[9],this.cafele[2]]).pipe(delay(768));
      case 8233: return of([this.cafele[6],this.cafele[5],this.cafele[2],this.cafele[1],this.cafele[4],this.cafele[9],this.cafele[7],this.cafele[8]]).pipe(delay(239));
      case 2810: return of([this.cafele[2],this.cafele[6],this.cafele[1],this.cafele[4],this.cafele[3],this.cafele[0],this.cafele[9],this.cafele[5],this.cafele[7]]).pipe(delay(580));
      
      default: return timer(500).pipe(mergeMap(e => throwError('Nu este un ID de cafenea')));
    }
  }
}
