export class GeneralUtils{
    //Capitalize
    capitalize(str){
        //Individual string
        str = str.toLowerCase();
        str = str.charAt(0).toUpperCase() + str.slice(1);
        
        //String separated by space
        let strs = str.split(" ");
        for (let i = 0; i < strs.length; i++) {
            strs[i] = strs[i].charAt(0).toUpperCase() + strs[i].slice(1);
        }
        str = strs.join(" ");

        //String separated by hyphen
        strs = str.split("-");
        for (let i = 0; i < strs.length; i++) {
            strs[i] = strs[i].charAt(0).toUpperCase() + strs[i].slice(1);
        }
        str = strs.join("-");
        
        return str;
    }
}