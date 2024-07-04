import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/footer';
import { characters } from '../../components/info/Characters';
import { comicsLinks } from '../../components/info/Comics';
import './ICharacters.css'

type fields = {
    title: string, 
    Image: string,
    description: string,    
};

const ICharacters = function () {
    const { id } = useParams();
    const [thischaracter, newcharacter] = useState<fields|undefined>(undefined);
    useEffect(() => {
        const choose = async () => {
            if (id) {
                newcharacter(characters[Number(id)]);
            }
        };
        choose();
    }, [id]);

    return (
        <div className='icharacter'>
            <Header/>
            <div className='icharacterContent'>
                <img className='icharacterImage' src={thischaracter?.Image}/>
                <h2 className='icharacterTitle'>{thischaracter?.title}</h2>
                <p className='icharacterDescription'>{thischaracter?.description}</p>
                <div className='icharacterList'>
                <h3>Comics list:</h3>
                {comicsLinks.map((comics) => (
                    <a className='icharactersComics'href={comics.link}>{comics.title}<br/></a>
                ))}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ICharacters;