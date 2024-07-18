import Template from "./Template";
import image from '../assets/signup.png'
function Signup({setLogin}){
    const title = "Join the millions learning to code with StudyNotion for free"
    const desc1 = "Builds skills for today,tomorrow,and beyond."
    const desc2 = "Education to future-proof your career."
    return(
        <div>
            <Template title={title} desc1={desc1} desc2={desc2} formtype="signup" image={image} setLogin={setLogin}/>
        </div>
    )
}
export default Signup;