import { useState } from "react";
import { useForm } from 'react-hook-form';

export default function DynamicForm(){
    let [inputFieldConfig,setInputFieldConfig] = useState([
        {id:"name",label:"Name",type:"text",placeholder:"Enter name",required:true, minLength:3, maxLength:5, pattern:"^[a-zA-Z]{3,5}$"},
        {id:"email",label:"Email",type:"email",placeholder:"Enter email",required:true, minLength:3, maxLength:50, pattern:"^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"},
        {id:"password",label:"Password",type:"password",placeholder:"Enter password",required:true, minLength:8, maxLength:50}
    ]);

    const {register, handleSubmit, formState: { errors,dirtyFields }} = useForm({mode:"onBlur"});

    const handleRowAdd = () => {
        var fieldName = prompt("Enter field name");
        var isFieldMandatory = prompt("Is field mandatory (Y/N)?");

        setInputFieldConfig([...inputFieldConfig
                    ,{id:fieldName,label:fieldName,type:"text"
                    ,required:(isFieldMandatory == "Y")
                    ,placeholder:"Enter "+fieldName, minLength:3
                    , maxLength:5, pattern:"^[a-zA-Z]{3,5}$"}]);
    }

    return(
        <div className="container">
            <h1>Registration Form</h1>
            {inputFieldConfig.map((inputField,index) => 
                <div><div className="form-group mt-3">
                <input type="text" className={"form-control"}  
                 {...register(inputField.id,{required:inputField.required
                    , minLength:inputField.minLength
                    , maxLength:inputField.maxLength
                    , pattern:inputField.pattern})}
                 id={inputField.label} placeholder={inputField.placeholder} />

                {errors[inputField.id]?.type  == "required" && <p className="text-danger">{inputField.id} is mandatory</p>}
            </div></div>
            )}

            <button type="button" onClick={handleRowAdd}>Add New Row</button>
        </div>
    )
}