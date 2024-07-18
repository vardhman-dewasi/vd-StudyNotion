import Template from './Template'
import image from '../assets/login.png'
function Login({setLogin}){
    const title = "Welcome Back"
    const desc1 = "Builds skills for today,tomorrow,and beyond."
    const desc2 = "Education to future-proof your career."
    return(
        <div>
            <Template title={title} desc1={desc1} desc2={desc2} formtype="login" image={image} setLogin={setLogin}/>
        </div>
    )
}
export default Login;