import { useState } from "react"

export default function SimpleForm(){

    let [formValues,setValues] = useState({name : "", email : "", password : ""});
    const [formsError,setError] = useState({
        name      : {error:false, message:""},
        email     : {error:false, message:""},
        password  : {error:false, message:""}     
  });

    const handleInputChange = (event) => {
        let {id,value} = event.target;
        setValues({...formValues,[id] : value});

        validateForm();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        validateForm();
        if(!(formsError.name.error || formsError.email.error || formsError.password.error))
            alert("Saved to the server");
        else
            alert("Please fix the validation errors");
    }

    const validateForm = () => {

        setError((p) => { return {...p,name:{error:false, message:""},email:{error:false, message:""},password:{error:false, message:""}}});

        if(!(/^[a-zA-Z]{3,5}$/.test(formValues.name)))
            setError((p) =>  { return {...p,name:{error:true,message:"Name must be at least 3 characters"}}});

        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(formValues.email)))
            setError((p) => {return {...p,email:{error:true,message:"Email is not valid"}}});

        if(formValues.password.length < 8)
            setError((p) => {return {...p,password:{error:true,message:"Password must be at least 8 characters"}}});
    }

    return (
        <div className="container">
            <h1>New Registration</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control"
                     onChange={handleInputChange} 
                     id="name" placeholder="Enter name" />
                     {formsError.name.error && <p className="text-danger">{formsError.name.message}</p>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" 
                     onChange={handleInputChange} 
                    id="email" placeholder="Enter Email" />
                     {formsError.email.error && <p className="text-danger">{formsError.email.message}</p>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name">Password</label>
                    <input type="password"
                     onChange={handleInputChange} 
                    className="form-control" id="password" placeholder="Enter Password" />
                     {formsError.password.error && <p className="text-danger">{formsError.password.message}</p>}
                 
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}