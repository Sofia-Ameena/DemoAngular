interface Address{
    city:string;
    state:string;
    zipcode:string;
}
export interface Users{
    id:number;
    email:string;
    name:string;
    profilePic:string;
    address:{
        [key: string]: Address;
    },
    profession:string;
    mobileno:number;
}