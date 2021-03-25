import react from 'react'
import { useForm } from "react-hook-form";
import '../style.css'

const style= {
    errorMessage: {
        color: 'red',
        marginLeft: '5px'
    },
    labelTags:{
        display: 'inline-block',
        width: "10%"
    }
}

export default function FormValidaion(props){
    const {register, errors, handleSubmit } = useForm()
    const onSubmitData = submit => {console.log(submit) }
    return(
        <div className="form">
            <form onSubmit={handleSubmit(onSubmitData)}>
            <div>
                <div className="all1" style={style.labelTags}>
                    <label>Username :</label>
                </div>
                <input className="input2" type="text" name="name" 
                ref={register({ required: { value: true, message: "Please enter user name"},
                })} />
                {errors.name && <span style={style.errorMessage}>{errors.name.message}</span>}
            </div><br/>
            <div>
                <div className="all1" style={style.labelTags}>
                    <label>Password :</label>
                </div>
                <input className="input3" type="password" name="password" 
                ref={register({ required: { value: true, message: "Enter password"},
                })} />
                {errors.password && <span style={style.errorMessage}>{errors.password.message}</span>}
                
               
            </div>
            <div className="btn2">
                <button className="addbtn1" type="submit">Login</button>
            </div>

        </form>
        </div>
    )

}
