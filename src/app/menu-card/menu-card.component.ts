import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.css'
})
export class MenuCardComponent implements OnInit{
  
  menu = {
        "snacks" :  [
            {
                "id": 5,
                "name": "Pop-Corn",
                "cost": 2.5,
                "typeOfFood": "SNACKS",
                "complimentary": true,
                "description": "NaCl, mais",
                "vegan": true,
                "glutenFree": true,
                "imagePath": "images/menu/Pop-Corn.png"
            },
            {
                "id": 7,
                "name": "Cipster",
                "cost": 2.5,
                "typeOfFood": "SNACKS",
                "complimentary": false,
                "description": "NaCl, patata",
                "vegan": true,
                "glutenFree": true,
                "imagePath": "images/menu/Cipster.png"
            },
            {
                "id": 8,
                "name": "Nachos",
                "cost": 2.5,
                "typeOfFood": "SNACKS",
                "complimentary": false,
                "description": "NaCl, mais",
                "vegan": true,
                "glutenFree": true,
                "imagePath": "images/menu/Nachos.png"
            }
        ],
        "sandwiches": [
            {
                "id": 13,
                "name": "Kamikaze Burger",
                "cost": 4.5,
                "typeOfFood": "SANDWICHES",
                "complimentary": false,
                "description": "Hamburger di bovino , lattuga, jalapenos, peperoni, salsa burger",
                "vegan": false,
                "glutenFree": false,
                "imagePath": "images/menu/Kamikaze Burger.png"
            },
            {
                "id": 14,
                "name": "Panino Fuji",
                "cost": 4.5,
                "typeOfFood": "SANDWICHES",
                "complimentary": false,
                "description": "Funghi, Speack, Salsiccia, cheddar",
                "vegan": false,
                "glutenFree": false,
                "imagePath": "images/menu/Panino Fuji.png"
            },
            {
                "id": 15,
                "name": "Hamburger Vegetarian",
                "cost": 5.0,
                "typeOfFood": "SANDWICHES",
                "complimentary": false,
                "description": "Hamburger vegetariano, melanzane grigliate, salsa di pomodoro, cipolla caramellate, lattuga",
                "vegan": true,
                "glutenFree": true,
                "imagePath": "images/menu/Hamburger Vegetarian.png"
            },
            {
                "id": 16,
                "name": "Focaccia Origami",
                "cost": 5.0,
                "typeOfFood": "SANDWICHES",
                "complimentary": false,
                "description": "salsa yogurt, pomodoro, carciofi, tofu, zucchine",
                "vegan": true,
                "glutenFree": true,
                "imagePath": "images/menu/Focaccia Origami.png"
            },
            {
                "id": 17,
                "name": "Sandwich",
                "cost": 3.0,
                "typeOfFood": "SANDWICHES",
                "complimentary": false,
                "description": "pomodoro, insalata, prosciutto, maionese",
                "vegan": false,
                "glutenFree": false,
                "imagePath": "images/menu/Sandwich.png"
            }
        ],
        "salads": [
            {
                "id": 9,
                "name": "Insalata Samurai",
                "cost": 4.0,
                "typeOfFood": "SALADS",
                "complimentary": false,
                "description": "Pomodori, Lattuga, Mais, Tofu",
                "vegan": true,
                "glutenFree": true,
                "imagePath": "images/menu/Insalata Samurai.png"
                
            },
            {
                "id": 10,
                "name": "Insalata Yoshi",
                "cost": 4.0,
                "typeOfFood": "SALADS",
                "complimentary": false,
                "description": "Peperoni verdi, Lattuga, Crostini, Cetrioli",
                "vegan": true,
                "glutenFree": false,
                "imagePath": "images/menu/Insalata Yoshi.png"
            },
            {
                "id": 11,
                "name": "Insalata Tsunami",
                "cost": 8.0,
                "typeOfFood": "SALADS",
                "complimentary": false,
                "description": "Polpo, Gamberetti, Pomodorini, aceto , olio",
                "vegan": false,
                "glutenFree": false,
                "imagePath": "images/menu/Insalata Tsunami.png"
            },
            {
                "id": 12,
                "name": "Chicken Salad",
                "cost": 7.0,
                "typeOfFood": "SALADS",
                "complimentary": false,
                "description": "Pollo, lattuga, aceto balsamico, sale, pepe",
                "vegan": false,
                "glutenFree": false,
                "imagePath": "images/menu/Chicken Salad.png"
            }
        ],
        "desserts": [
            {
                "id": 18,
                "name": "Tiramisù",
                "cost": 4.0,
                "typeOfFood": "DESSERTS",
                "complimentary": false,
                "description": "Caffe, panna, savoiardi, cacao",
                "vegan": false,
                "glutenFree": false,
                "imagePath": "images/menu/Tiramisù.png"
            },
            {
                "id": 19,
                "name": "crepés",
                "cost": 4.0,
                "typeOfFood": "DESSERTS",
                "complimentary": false,
                "description": "nutella, latte, farina 00",
                "vegan": false,
                "glutenFree": true,
                "imagePath": "images/menu/crepés.png"
            },
            {
                "id": 20,
                "name": "Doroyaki",
                "cost": 4.0,
                "typeOfFood": "DESSERTS",
                "complimentary": false,
                "description": "nutella, latte, farina 00, miele, uova, lievito",
                "vegan": false,
                "glutenFree": false,
                "imagePath": "images/menu/Doroyaki.png"
            },
            {
                "id": 21,
                "name": "Cheesecake",
                "cost": 4.0,
                "typeOfFood": "DESSERTS",
                "complimentary": false,
                "description": "biscotti, panna, mascarpone, frutta",
                "vegan": false,
                "glutenFree": true,
                "imagePath": "images/menu/Cheesecake.png"
            }
        ],
        "friedFoods": [
            {
                "id": 22,
                "name": "Nuggets",
                "cost": 3.5,
                "typeOfFood": "FRIED_FOODS",
                "complimentary": false,
                "description": "polllo x6",
                "vegan": false,
                "glutenFree": true,
                "imagePath": "images/menu/Nuggets.png"
            },
            {
                "id": 23,
                "name": "Patatine fritte small",
                "cost": 2.5,
                "typeOfFood": "FRIED_FOODS",
                "complimentary": false,
                "description": "patate, NaCl",
                "vegan": false,
                "glutenFree": true,
                "imagePath": "images/menu/Patatine fritte small.png"
            },
            {
                "id": 24,
                "name": "Anelli di cipolla",
                "cost": 3.5,
                "typeOfFood": "FRIED_FOODS",
                "complimentary": false,
                "description": "cipolla x6, NaCl ",
                "vegan": false,
                "glutenFree": true,
                "imagePath": "images/menu/Anelli di cipolla.png"
            },
            {
                "id": 25,
                "name": "Patatine fritte max",
                "cost": 6.0,
                "typeOfFood": "FRIED_FOODS",
                "complimentary": false,
                "description": "patate, NaCl",
                "vegan": false,
                "glutenFree": true,
                "imagePath": "images/menu/Patatine fritte max.png"
            },
            {
                "id": 26,
                "name": "Fuji wings",
                "cost": 3.5,
                "typeOfFood": "FRIED_FOODS",
                "complimentary": false,
                "description": "alette di pollo x6, NaCl",
                "vegan": false,
                "glutenFree": true,
                "imagePath": "images/menu/Fuji wings.png"
            }
        ],
        "specialFoods": [
            {
                "id": 6,
                "name": "Gamberetti cocktail",
                "cost": 6.0,
                "typeOfFood": "SPECIAL_FOODS",
                "complimentary": false,
                "description": "gamberetti con salsa rosa x8",
                "vegan": false,
                "glutenFree": true,
                "imagePath": "images/menu/Gamberetti cocktail.png"
            },
            {
                "id": 27,
                "name": "Manaita classic",
                "cost": 5.0,
                "typeOfFood": "SPECIAL_FOODS",
                "complimentary": false,
                "description": "Tagliere di affettati e prosciutti misti",
                "vegan": false,
                "glutenFree": true,
                "imagePath": "images/menu/Manaita classic.png"
            },
            {
                "id": 28,
                "name": "Manaita fritti",
                "cost": 5.0,
                "typeOfFood": "SPECIAL_FOODS",
                "complimentary": false,
                "description": "Tagliere di fritti misti",
                "vegan": false,
                "glutenFree": true,
                "imagePath": "images/menu/Manaita fritti.png"
            }
        ]
    }
    ngOnInit(): void {
        return;
    }
}
