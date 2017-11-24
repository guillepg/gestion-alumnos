export class Utils {

    static calcularMedia(items:number[]):number{
        let sumatorio: number = 0;
        for(let item of items){
            sumatorio += item;
        }

        return sumatorio / items.length;
    }
}