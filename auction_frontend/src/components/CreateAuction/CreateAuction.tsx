import { lemonFont } from '@/scripts/fonts';
import Link from 'next/link';
// import './CreateAuction.css';
import PhotoWrapper from "@/components/PhotoTile/PhotoWrapper";

const CreateAuction = () => {
    return (
        <fieldset className="auction-container">
            <legend>Створення аукціону</legend>
            <div className="wrapper">
                <div className="reg-form">

                    <input className="title-input input" type="text" placeholder={"input"}/>
                    <textarea className="description-input input" name="description" id=""></textarea>

                    <div className="buttons">
                        <button>reset</button>
                        <button>confirm</button>
                    </div>
                </div>
                    <div className="photos-carousel">
                        <div id={"top"} />
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
