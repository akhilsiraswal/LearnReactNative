export const TOOGLE_FAVOURITE = "TOOGLE_FAVOURITE";

export const toggleFavorite =(id) =>{
    return {
        type:TOOGLE_FAVOURITE,
        mealId:id,
    }
}
