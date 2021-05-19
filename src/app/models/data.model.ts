interface Data{
    id:number;
    name:string;
    year:number;
    color:string;
    pantone_value:string;
}
export interface TotalData{
    page:number;
    per_page:number;
    total_pages:number;
    data?:Data[];
}