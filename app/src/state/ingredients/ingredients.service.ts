import { Observable } from 'rxjs';
import { Ingredient } from './ingredients.interfaces';
  
const pureSandwich = [1, 8, 10, 19, 26, 27]; 

export const fetchIngredients = (): Observable<Ingredient[]> => 
  Observable.from(fetch('http://localhost:4200/ingredients').then(response => response.json()));

export const calculateSandwich = (): Observable<boolean> => 
  Observable.from(fetch('http://localhost:4200/sandwichgenerator', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(pureSandwich)
  }).then(response => response.json()));
