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
    catagory : string;
    description: string;
    imageURL: string;
}