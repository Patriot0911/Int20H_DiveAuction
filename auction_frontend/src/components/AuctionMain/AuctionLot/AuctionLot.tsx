import { lemonFont } from '@/scripts/fonts';
import Link from 'next/link';
import './AuctionLot.css';
import PhotoWrapper from "@/components/PhotoTile/PhotoWrapper";
import ImagesCollage from "@/components/ImagesCollage/ImagesCollage";
import {IoSend} from "react-icons/io5";

const AuctionLot = () => {
    return (
        <div className="tile-container lot standart-border standard-background">
            <div className="column left">
                <ImagesCollage/>
                <div className="bet-buttons-container">
                    <input placeholder={"Ваша ставка"} type="number" className="std-input bet-buttons standart-border"/>
                    <button className={`std-input bet-buttons standart-border`}>Поставити!</button>
                </div>
            </div>
            <div className="column right light-background">
                <h2>
                    Монета Країна супергероївМонета Країна супергероїв
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur beatae ducimus ipsa mollitia nam quibusdam repellendus rerum totam! Alias aliquid amet aperiam assumenda eum incidunt, molestiae nam nihil obcaecati qui repudiandae, sequi tempora! Deleniti in ipsum omnis porro ratione. Asperiores exercitationem hic necessitatibus nostrum nulla omnis reiciendis, sapiente similique? A ad aut delectus, dolore dolorem ea eius esse et ex excepturi explicabo facere fuga ipsum, iste labore magnam maiores minima neque non odit officiis perspiciatis saepe sequi temporibus tenetur ullam voluptas. Aspernatur autem beatae, cupiditate deleniti explicabo in iste mollitia nulla odio placeat reiciendis rem veniam. Impedit, similique voluptatem. Dolorem, fuga fugiat nisi odio sequi vitae voluptatum! Ab animi aspernatur, commodi culpa, cupiditate earum est et expedita illo itaque labore maiores mollitia nobis numquam optio placeat quaerat qui quia quisquam recusandae repudiandae saepe sit tempore totam velit vero voluptatibus. Animi atque beatae corporis, cupiditate dicta doloribus eligendi, inventore perferendis reprehenderit sapiente sed sunt tenetur ullam? Accusamus alias aliquam assumenda dolorem dolores et expedita fugiat, id incidunt ipsa ipsam nam necessitatibus neque nostrum odio odit omnis pariatur provident quaerat, voluptates. Accusamus atque consequatur culpa dignissimos, dolor dolorem expedita fugit inventore neque nihil non officia perspiciatis provident quis repellendus sed voluptate.
                </p>
            </div>
        </div>
    );
};

export default AuctionLot;
