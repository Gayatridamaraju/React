import RestaurentCards from "./Restaurentcards";
import { Reslist } from "./Restaurent_data";
const Body = () =>{
    return(
        <div className="res-container">
            {Reslist.map((restaurant) =>(
                <RestaurentCards key={restaurant.info.id} resdata={restaurant} />
            ))}
        </div>
        
    );
};

export default Body;