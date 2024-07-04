import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import Navigation from "../../components/navigation/Navigation";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { comics } from "../../components/info/Comics";
import './Comics.css'

const Comics = function() {
    return (
        <div className="comics">
            <Header/>
            <h1 className="comicsTitle">
                Comics <span className="comicsCounter">(4)</span>
            </h1>
            <div className="comicsSearch">
                <Input txt = " "/>
                <Button/>
            </div>
            <div className="comicsInfo">
                {comics.map((current) => (
                    <Navigation 
                        id = {current.id}
                        Image = {current.Image}
                        title = {current.title}
                        description = {current.description}
                        section = "Comics"
                    />
                ))}
            </div>
            <Footer/>
        </div>
    )
}

export default Comics;