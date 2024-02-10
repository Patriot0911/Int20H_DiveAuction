import { lemonFont } from '@/scripts/fonts';
import Link from 'next/link';
import './CreateAuction.css';
import PhotoWrapper from "@/components/PhotoTile/PhotoWrapper";

const CreateAuction = () => {
    return (
        <fieldset className="container">
            <legend>Створення аукціону</legend>
            <div className="wrapper">

                {/*<h1 className="title">*/}
                {/*    Створити лот*/}
                {/*</h1>*/}
                <div className="reg-form">

                    <input className="title-input input" type="text" placeholder={"input"}/>
                    <textarea className="description-input input" name="description" id=""></textarea>

                    <div className="buttons">
                        <button>reset</button>
                        {/*<input className="bet-input input" type="text" placeholder={"Мінімальна ставка"}/>*/}
                        <button>confirm</button>
                    </div>
                </div>
                    <div className="photos-carousel">
                        <div id={"top"}></div>
                        <PhotoWrapper/>
                        <PhotoWrapper/>
                        <PhotoWrapper/>
                        <PhotoWrapper/>
                </div>
            </div>
        </fieldset>
    );
};

export default CreateAuction;
