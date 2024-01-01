import { BlogCatagories } from "./BlogCatagories";
import { FormItemsType } from "./Types";




export const FormItems: FormItemsType[] =[
    {
        id : "title",
        label: "Title",
        placeholder: "Enter Blog Title",
        type: "text",
        formElement: "input",
        blogCatagoriesOptions: []
    },
    {
        id : "catagory",
        label: "Catagory",
        placeholder: "Choose catagory",
        type: "",
        formElement: "select",
        blogCatagoriesOptions: BlogCatagories
    },
    {
        id : "description",
        label: "Description",
        placeholder: "Write blog description",
        type: "text",
        formElement: "textarea",
        blogCatagoriesOptions: []
    },
]