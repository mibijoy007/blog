// we named the file types although used 'interfaces' as it's more versatile

export interface BlogCatagoriesType {
    value: string;
    label: string;
}

export interface FormItemsType{
    id : string;
    label: string;
    placeholder: string;
    type: string;
    formElement: string;
    blogCatagoriesOptions: BlogCatagoriesType[];
}

export interface NavItemsType  {
    id: string;
    label: string;
    path: string;
}

export interface CreateblogFormDataType {
    title: string;
    category : string;
    description: string;
    image: string;
    date: string;
}

export interface BlogType {
    id: number;
    title: string;
    description: string;
    image: string;
    category : string;
    date:string;
    userid: string;
    userimage: string;
    comments: string[];

}