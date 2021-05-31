export const TOOGLE_FAVOURITE = "TOOGLE_FAVOURITE";

export const toggleFavourite =(id) =>{
    return {
        type:TOOGLE_FAVOURITE,
        mealId:id,
    }
}
