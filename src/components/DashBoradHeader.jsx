
import { pageSetting } from '../style';
import { Link } from 'react-router-dom'

const DashBoradHeader = () => {

    return(
        <div className={`${pageSetting.padding} fixed top-0 bg-background-color w-full h-20 z-20 flex justify-between items-center shadow-button`}>
            <Link 
                to="/848-visual-project" 
                className='font-bold text-xl text-font-color'
                >
                    <p>ECHO</p>
            </Link>
        </div>
    )
}

export default DashBoradHeader;