import './Navigation.css';
import { useNavigate } from 'react-router-dom';

type NavigationProps = {
    id: string;
    Image: string;
    title: string;
    description: string;
    section: string;
};

const Navigation: React.FC<NavigationProps> = ({ id, Image, title, description, section }) => {
    const nav = useNavigate();
    const click = function () {
        if (section == 'Characters') {
            nav(`/characters/${id}`);
        }
        if (section == 'Comics') {
            nav(`/comics/${id}`);
        }
    };

    return (
        <div onClick={click} className='navigationClick'>
            <div className='navigationCharacter'>
                <img src={Image} className='navigationImage'/>
                <p className='navigationTitle'>{title}</p>
                <p className='navigationDescription'>{description}</p>
            </div>    
        </div>
    )
}

export default Navigation;
