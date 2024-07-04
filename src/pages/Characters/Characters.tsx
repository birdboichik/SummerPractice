import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import Navigation from "../../components/navigation/Navigation";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { characters } from "../../components/info/Characters";
import './Characters.css'

const Characters = function() {
    return (
        <div className="characters">
            <Header/>
            <h1 className="charactersTitle">
                Characters <span className="charactersCounter">(8)</span>
            </h1>
            <div className="charactersSearch">
                <Input txt = " "/>
                <Button/>
            </div>
            <div className="charactersInfo">
                {characters.map((current) => (
                    <Navigation 
                        id = {current.id}
                        Image = {current.Image}
                        title = {current.title}
                        description = {current.description}
                        section = "Characters"
                    />
                ))}
            </div>
            <Footer/>
        </div>
    )
}

export default Characters;