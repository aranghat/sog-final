import { useForm } from "react-hook-form";

export default function FormValidation(){

    const {register, handleSubmit, formState: { errors,dirtyFields }} = useForm({mode:"onChange"});

    const onSubmit = (data) => {
        console.debug(errors.name);
        console.log(data);
    }
    
    return(
<div className="container">
            <h1>New Registration</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" className={"form-control " + (errors?.name ? "is-invalid" : (dirtyFields?.name == true ? "is-valid" : ""))}  
                     {...register("name",{required:true
                                        , minLength:3
                                        , maxLength:5
                                        , pattern:/^[a-zA-Z]{3,5}$/})}
                     id="name" placeholder="Enter name" />
                     {errors.name?.type  == "required" && <p className="text-danger">Name is mandatory</p>}
                     {errors.name?.type  == "minLength" && <p className="text-danger">Name must be atleast 2 chars</p>}
                     {errors.name?.type  == "maxLength" && <p className="text-danger">Name must max of 5 chars</p>}
                     {errors.name?.type  == "pattern" && <p className="text-danger">Only alphabets are allowed</p>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email" >Email</label>
                   
                    <input type="email" className={"form-control " + (errors.email ? "is-invalid" : (dirtyFields?.email ? "is-valid" : ""))}
                    {...register("email",{required:true
                        , minLength:3
                        , maxLength:50
                        , pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g})}
                    id="email" placeholder="Enter Email" />
                    {errors.email?.type  == "required" && <p className="text-danger">Email is mandatory</p>}
                    {errors.email?.type  == "pattern" && <p className="text-danger">Invalid Email</p>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name">Password</label>
                    <input type="password"
                    {...register("password",{required:true
                        , minLength:8
                        , maxLength:50}
                        )}
                        className={"form-control " + (errors.password ? "is-invalid" : (dirtyFields?.password ? "is-valid" : ""))} id="password" placeholder="Enter Password" />
                    {errors.password?.type == "minLength" && <p className="text-danger">Password must be atleast 8 chars</p>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}