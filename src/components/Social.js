import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Social(){
    return(
        <div className="flex justify-evenly  p-4 mb-4">
            <div>< FacebookIcon /> &nbsp; Fabebook</div>
            <div> < TwitterIcon /> &nbsp; Twitter</div>
            <div>< YouTubeIcon /> &nbsp; Youtube</div>
            <div>< InstagramIcon />&nbsp; Instagram</div>
        </div>
    );
}