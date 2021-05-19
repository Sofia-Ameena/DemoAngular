interface Geo{
    lat:number;
    lng:number;
}
interface Address{
    street:string;
    suite:string;
    city:string;
    zipcode:string;
    geo:{
        [key: string]: Geo;
    }
}
interface Company{
    name:string;
    catchPhrase:string;
    bs:string;
}
export interface Users{
    id:number;
    name:string;
    username:string;
    email:string;
    address:{
        [key: string]: Address;
    }
    phone:string;
    website:string;
    company:{
        [key: string]: Company;
    }
}