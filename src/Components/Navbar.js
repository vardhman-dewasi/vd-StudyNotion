import toast from 'react-hot-toast';
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom';

function Navbar(props){
    const isLoggedIn = props.isLoggedIn;
    const setLogin = props.setLogin;
    return(
        <div className='flex gap-3 justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
            <Link to="/">
            <img src={logo} alt='Logo' width={160} height={32} loading='lazy'></img>
            </Link>

            <nav >
                <ul className='text-white flex gap-x-6'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

                {/* buttons-Login, Signup, Dashboard, LogOut */}
            <div className='flex items-center gap-x-4'>

                { !isLoggedIn &&
                    <Link to="/Login">
                        <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                            Login
                        </button>
                    </Link>
                }
                { !isLoggedIn &&
                    <Link to="/Signup">
                        <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700' >
                            Sign up
                        </button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/">
                        <button onClick={() =>{
                            setLogin(false);
                            toast.success("Logged Out");
                        }} className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                            Log Out
                        </button>
                    </Link>
                }
                { isLoggedIn && 
                    <Link to="/Dashboard">
                        <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                            Dashboard
                        </button>
                    </Link>
                }

            </div>
        </div>
    )
}
export default Navbar;