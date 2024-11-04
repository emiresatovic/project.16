
import useHttp from "../hooks/useHttp.js";

import MealItem from "./MealItem.jsx";

const requestconfig = {};


export default function Meals() {
    const {data: loadedMeals,
         isLoading,
          error} = useHttp('http://localhost:3000/meals', requestconfig, []);

          

          if (isLoading) {
            return (
                <p className="center">
                    fetching meals...
                </p>
            )
          }

          if (error) {
            return <Error title= 'failed to fetch meals.' message={error} />;
          }

          

    
    return(
        <ul id="meals">{loadedMeals.map((meal) => ( 
        <MealItem key={meal.id} meal={meal} />
        ))}
        </ul>
    );
}