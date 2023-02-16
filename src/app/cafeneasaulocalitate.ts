export interface CafeneaSauLocalitate {
    id: number;
    idParinte?: number | null;
    denumire: string;
    fel: string; // Aici voi avea "C" de la cafenea sau "L" de la localitate
    adancime?: number | null;
  }

export class ListaCafenele {
    public static cafenele: CafeneaSauLocalitate[] =
    [
      {
        "id": 4334,
        "idParinte": null,
        "denumire": "Teleorman",
        "fel": "L",
        "adancime": null
      },
      {
        "id": 5560,
        "idParinte": 4334,
        "denumire": "Bogheni",
        "fel": "L",
        "adancime": 2
      },
      {
        "id": 8786,
        "idParinte": 5560,
        "denumire": "MISCAREA LINGVISTICA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 1623,
        "idParinte": 5560,
        "denumire": "FARMACIA SUEDEZA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 8725,
        "idParinte": null,
        "denumire": "Bistrița-Năsăud",
        "fel": "L",
        "adancime": null
      },
      {
        "id": 2627,
        "idParinte": 8725,
        "denumire": "Calea Mare",
        "fel": "L",
        "adancime": 2
      },
      {
        "id": 1590,
        "idParinte": 2627,
        "denumire": "MACUL RIZAT SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 9838,
        "idParinte": null,
        "denumire": "Bacău",
        "fel": "L",
        "adancime": null
      },
      {
        "id": 2720,
        "idParinte": 9838,
        "denumire": "Cucui",
        "fel": "L",
        "adancime": 2
      },
      {
        "id": 8489,
        "idParinte": 2720,
        "denumire": "RESTAURANTUL NEPOMENIT SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 3709,
        "idParinte": null,
        "denumire": "Galați",
        "fel": "L",
        "adancime": null
      },
      {
        "id": 3431,
        "idParinte": 3709,
        "denumire": "Satul Balaci",
        "fel": "L",
        "adancime": 2
      },
      {
        "id": 8588,
        "idParinte": 3431,
        "denumire": "INSPECTORUL EFERVESCENT SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 864,
        "idParinte": 3431,
        "denumire": "ADMINISTRATIA FECALA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 4371,
        "idParinte": 3431,
        "denumire": "SCOALA LITUANIANA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 842,
        "idParinte": null,
        "denumire": "Covasna",
        "fel": "L",
        "adancime": null
      },
      {
        "id": 5462,
        "idParinte": 842,
        "denumire": "Valea Boului",
        "fel": "L",
        "adancime": 2
      },
      {
        "id": 8732,
        "idParinte": 842,
        "denumire": "Ulma",
        "fel": "L",
        "adancime": 2
      },
      {
        "id": 1927,
        "idParinte": 8732,
        "denumire": "EXPERTUL RAPIT SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 1784,
        "idParinte": 8732,
        "denumire": "COMPANIA ASIATICA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 7050,
        "idParinte": 8732,
        "denumire": "LOTERIA STRAINA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 2229,
        "idParinte": null,
        "denumire": "Cluj",
        "fel": "L",
        "adancime": null
      },
      {
        "id": 9674,
        "idParinte": 2229,
        "denumire": "Moroșeni",
        "fel": "L",
        "adancime": 2
      },
      {
        "id": 8382,
        "idParinte": 9674,
        "denumire": "MACUL SFENOIDAL SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 1527,
        "idParinte": null,
        "denumire": "Constanța",
        "fel": "L",
        "adancime": null
      },
      {
        "id": 2530,
        "idParinte": 1527,
        "denumire": "Ineleț",
        "fel": "L",
        "adancime": 2
      },
      {
        "id": 5492,
        "idParinte": 2530,
        "denumire": "SCOALA CIUTA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 305,
        "idParinte": null,
        "denumire": "Caraș-Severin",
        "fel": "L",
        "adancime": null
      },
      {
        "id": 6672,
        "idParinte": 305,
        "denumire": "Periș",
        "fel": "L",
        "adancime": 2
      },
      {
        "id": 807,
        "idParinte": null,
        "denumire": "Alba",
        "fel": "L",
        "adancime": null
      },
      {
        "id": 7108,
        "idParinte": 807,
        "denumire": "Snidă",
        "fel": "L",
        "adancime": 2
      },
      {
        "id": 8248,
        "idParinte": 7108,
        "denumire": "comuna Ilovăț",
        "fel": "L",
        "adancime": 3
      },
      {
        "id": 428,
        "idParinte": 8248,
        "denumire": "ASIGURAREA COLORATA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 8133,
        "idParinte": 8248,
        "denumire": "BISERICA NEPUSA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 9562,
        "idParinte": 8248,
        "denumire": "INTREPRINDEREA SUGATIVA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 6036,
        "idParinte": 8248,
        "denumire": "TRANSPORTUL PSIHROFIL SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 3828,
        "idParinte": 7108,
        "denumire": "Roșia",
        "fel": "L",
        "adancime": 3
      },
      {
        "id": 2703,
        "idParinte": 3828,
        "denumire": "Buceș",
        "fel": "L",
        "adancime": 4
      },
      {
        "id": 6312,
        "idParinte": 2703,
        "denumire": "Mărgău",
        "fel": "L",
        "adancime": 5
      },
      {
        "id": 5294,
        "idParinte": 6312,
        "denumire": "COMPANIA FASNEATA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 5703,
        "idParinte": 6312,
        "denumire": "FUNDATIA PRECISTA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 249,
        "idParinte": 6312,
        "denumire": "AGENTIA ENGLEZA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 8641,
        "idParinte": 2703,
        "denumire": "Topolea",
        "fel": "L",
        "adancime": 5
      },
      {
        "id": 7430,
        "idParinte": 8641,
        "denumire": "FABRICA CHINEZA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 8283,
        "idParinte": 8641,
        "denumire": "EXPERTUL RECHIZITORIAL SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 9771,
        "idParinte": 807,
        "denumire": "Foienfir",
        "fel": "L",
        "adancime": 2
      },
      {
        "id": 8952,
        "idParinte": 9771,
        "denumire": "Colți",
        "fel": "L",
        "adancime": 3
      },
      {
        "id": 9443,
        "idParinte": null,
        "denumire": "Mureș",
        "fel": "L",
        "adancime": null
      },
      {
        "id": 7160,
        "idParinte": 9443,
        "denumire": "Știubee",
        "fel": "L",
        "adancime": 2
      },
      {
        "id": 4918,
        "idParinte": 7160,
        "denumire": "Dubiușca",
        "fel": "L",
        "adancime": 3
      },
      {
        "id": 1870,
        "idParinte": 4918,
        "denumire": "NUFARUL PREDICABIL SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 6788,
        "idParinte": 9443,
        "denumire": "Herghelia Lucina",
        "fel": "L",
        "adancime": 2
      },
      {
        "id": 3152,
        "idParinte": 6788,
        "denumire": "Valea Fiadului",
        "fel": "L",
        "adancime": 3
      },
      {
        "id": 8064,
        "idParinte": 3152,
        "denumire": "PAROHIA LOCOMOBILA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 5101,
        "idParinte": 3152,
        "denumire": "MEDICINA NADOLEANCA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 9141,
        "idParinte": null,
        "denumire": "Vaslui",
        "fel": "L",
        "adancime": null
      },
      {
        "id": 1814,
        "idParinte": 9141,
        "denumire": "Ic-Ponor",
        "fel": "L",
        "adancime": 2
      },
      {
        "id": 6352,
        "idParinte": 1814,
        "denumire": "Popești",
        "fel": "L",
        "adancime": 3
      },
      {
        "id": 342,
        "idParinte": 6352,
        "denumire": "Asău",
        "fel": "L",
        "adancime": 4
      },
      {
        "id": 9599,
        "idParinte": 342,
        "denumire": "CONSILIUL IMPENETRANT SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 5161,
        "idParinte": 1814,
        "denumire": "Anghelești",
        "fel": "L",
        "adancime": 3
      },
      {
        "id": 8894,
        "idParinte": 5161,
        "denumire": "Pătroaia Gară",
        "fel": "L",
        "adancime": 4
      },
      {
        "id": 2324,
        "idParinte": 8894,
        "denumire": "Pălămida",
        "fel": "L",
        "adancime": 5
      },
      {
        "id": 8743,
        "idParinte": 2324,
        "denumire": "STATIA BARBOASA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 3569,
        "idParinte": 5161,
        "denumire": "Gerea",
        "fel": "L",
        "adancime": 4
      },
      {
        "id": 7088,
        "idParinte": 3569,
        "denumire": "Poiana",
        "fel": "L",
        "adancime": 5
      },
      {
        "id": 3649,
        "idParinte": 7088,
        "denumire": "Moroieni",
        "fel": "L",
        "adancime": 6
      },
      {
        "id": 8229,
        "idParinte": 3649,
        "denumire": "INVESTITIA ACEASTA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 853,
        "idParinte": 7088,
        "denumire": "Galei",
        "fel": "L",
        "adancime": 6
      },
      {
        "id": 4041,
        "idParinte": 853,
        "denumire": "CONSTRUCTIA XEROFILA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 4274,
        "idParinte": 9141,
        "denumire": "Runcu",
        "fel": "L",
        "adancime": 2
      },
      {
        "id": 4317,
        "idParinte": null,
        "denumire": "Suceava",
        "fel": "L",
        "adancime": null
      },
      {
        "id": 5413,
        "idParinte": 4317,
        "denumire": "Dumești",
        "fel": "L",
        "adancime": 2
      },
      {
        "id": 3062,
        "idParinte": 5413,
        "denumire": "CABINETUL STRADUITOR SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 2210,
        "idParinte": null,
        "denumire": "Sălaj",
        "fel": "L",
        "adancime": null
      },
      {
        "id": 8147,
        "idParinte": 2210,
        "denumire": "Rudicica",
        "fel": "L",
        "adancime": 2
      },
      {
        "id": 1308,
        "idParinte": 8147,
        "denumire": "AGENTIA OVINA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 4513,
        "idParinte": 8147,
        "denumire": "CABINETUL ARGESEAN SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 217,
        "idParinte": 2210,
        "denumire": "Roșiești",
        "fel": "L",
        "adancime": 2
      },
      {
        "id": 5484,
        "idParinte": 217,
        "denumire": "TRANSPORTUL HILAR SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 6643,
        "idParinte": null,
        "denumire": "Olt",
        "fel": "L",
        "adancime": null
      },
      {
        "id": 2622,
        "idParinte": 6643,
        "denumire": "Hrobi",
        "fel": "L",
        "adancime": 2
      },
      {
        "id": 8855,
        "idParinte": 2622,
        "denumire": "Buc",
        "fel": "L",
        "adancime": 3
      },
      {
        "id": 5778,
        "idParinte": 8855,
        "denumire": "CABINETUL MARONIU SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 106,
        "idParinte": 8855,
        "denumire": "MEDICINA DIATONICA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 7080,
        "idParinte": null,
        "denumire": "Satu Mare",
        "fel": "L",
        "adancime": null
      },
      {
        "id": 3188,
        "idParinte": 7080,
        "denumire": "Caragui",
        "fel": "L",
        "adancime": 2
      },
      {
        "id": 3072,
        "idParinte": 3188,
        "denumire": "TRANSPORTUL PRACTICIST SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 3526,
        "idParinte": 3188,
        "denumire": "PRODUCTIA ODATA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 7067,
        "idParinte": null,
        "denumire": "Bihor",
        "fel": "L",
        "adancime": null
      },
      {
        "id": 1859,
        "idParinte": 7067,
        "denumire": "Popesti",
        "fel": "L",
        "adancime": 2
      },
      {
        "id": 5627,
        "idParinte": 1859,
        "denumire": "NUFARUL DEGENERESCENT SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 609,
        "idParinte": null,
        "denumire": "Ialomița",
        "fel": "L",
        "adancime": null
      },
      {
        "id": 7728,
        "idParinte": 609,
        "denumire": "Herești",
        "fel": "L",
        "adancime": 2
      },
      {
        "id": 1494,
        "idParinte": 7728,
        "denumire": "Sângeorz-Băi",
        "fel": "L",
        "adancime": 3
      },
      {
        "id": 5937,
        "idParinte": null,
        "denumire": "Arad",
        "fel": "L",
        "adancime": null
      },
      {
        "id": 5883,
        "idParinte": 5937,
        "denumire": "Dealul Domnului",
        "fel": "L",
        "adancime": 2
      },
      {
        "id": 9932,
        "idParinte": 5883,
        "denumire": "CABINETUL CORBIU SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 7516,
        "idParinte": 5883,
        "denumire": "LOTERIA GRAFITIZATA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 5118,
        "idParinte": 5937,
        "denumire": "Dâlja",
        "fel": "L",
        "adancime": 2
      },
      {
        "id": 3552,
        "idParinte": 5118,
        "denumire": "AGENTIA MASTOIDA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 2066,
        "idParinte": 5118,
        "denumire": "CONSILIUL MIEROS SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 9550,
        "idParinte": null,
        "denumire": "Timiș",
        "fel": "L",
        "adancime": null
      },
      {
        "id": 4212,
        "idParinte": 9550,
        "denumire": "Bartea",
        "fel": "L",
        "adancime": 2
      },
      {
        "id": 4382,
        "idParinte": 4212,
        "denumire": "CONSTRUCTIA ABOLITIONISTA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 269,
        "idParinte": 4212,
        "denumire": "LOTERIA SUGATIVA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 8233,
        "idParinte": 4212,
        "denumire": "FUNDATIA CRIPTOGAMA SRL",
        "fel": "C",
        "adancime": null
      },
      {
        "id": 2810,
        "idParinte": 4212,
        "denumire": "ASIGURAREA ADOGMATICA SRL",
        "fel": "C",
        "adancime": null
      }
    ];
}