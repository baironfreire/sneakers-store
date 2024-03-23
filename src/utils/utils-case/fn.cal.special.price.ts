export const fnCalSpecialPrice = async(
    initPrice: number,
    discountPorcentage: number,
) => {
    try{
        return (initPrice - (initPrice * (discountPorcentage / 100)));
    }catch(error){
        throw error;
    }
}