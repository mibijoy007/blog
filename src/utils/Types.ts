
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

export interface NavItemsInterface  {
    id: string;
    label: string;
    path: string;
}