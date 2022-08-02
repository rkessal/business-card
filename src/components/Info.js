import profilePicture from '../images/profile-picture.jpg'
import EmailIcon from '@mui/icons-material/Email';

function Info() {
    return (
        <div className='info'>
            <img src={profilePicture} className='info--picture'/>
            <div className='info--text'>
                <h2>Errká</h2>
                <h3 className='info--title'>Frontend Developer</h3>
                <h4 className='info--subtitle'>errka.website</h4>
                <div className='info--email'><EmailIcon />Email</div>
            </div>
            
        </div>
    )  
}

export default Info