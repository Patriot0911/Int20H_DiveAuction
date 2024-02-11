import { lemonFont } from '@/scripts/fonts';
import Link from 'next/link';
import './MessageRecord.css';
import PhotoWrapper from "@/components/PhotoTile/PhotoWrapper";
import ImagesCollage from "@/components/ImagesCollage/ImagesCollage";
import {IoSend} from "react-icons/io5";

const MessageRecord = () => {
    return (
        <>
            <div className="message-record record-border user-message">
                <div className="user">
                    <img src="https://picsum.photos/512/512" alt="" className={"profile-image"}/>
                    <p>Підар Підарок Підоровіч </p>
                </div>
                <p className={"message-text"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid
                    dicta eaque, eius excepturi fugiat maiores necessitatibus nostrum optio quo rem repudiandae ullam
                    voluptas. Adipisci amet animi asperiores atque consequuntur corporis dolorem doloribus eaque
                    eligendi est et, facilis fugit, incidunt, itaque iure laboriosam maiores modi molestias neque nobis
                    numquam obcaecati optio pariatur praesentium quaerat quidem reprehenderit sequi sit soluta ut. Aut
                    delectus eum exercitationem, id illum modi repellat tempore! Aut numquam repellat similique! Animi
                    asperiores assumenda autem, consectetur delectus, deserunt ducimus ex inventore labore magnam neque
                    nulla, odit possimus recusandae reiciendis repellendus suscipit ut voluptates. Animi aspernatur,
                    assumenda aut consectetur est explicabo id illum in ipsum molestiae molestias nisi pariatur
                    perferendis perspiciatis quos rem sapiente sint sit vitae voluptatibus! Accusamus adipisci
                    asperiores cupiditate deleniti, dolore dolorum earum eius enim eveniet expedita iure laborum magnam
                    maiores modi neque nihil nisi, quis quos reiciendis similique sunt, suscipit ullam ut velit vitae!
                    Dignissimos ea maxime mollitia nostrum odit, quia quo tempora. Ducimus eaque eligendi enim esse
                    impedit incidunt, molestias perferendis quae quidem. Accusamus animi architecto eius eos esse, id
                    illum iusto maiores maxime mollitia necessitatibus nesciunt officia officiis qui quisquam rerum
                    voluptas. Consequatur ea enim, laboriosam minus natus officia placeat quos ullam voluptatem!</p>
            </div>
            <div className="message-record record-border">
                <div className="user">
                    <img src="https://picsum.photos/512/512" alt="" className={"profile-image"}/>
                    <p>Підар Підарок Підоровіч </p>
                </div>
                <p className={"message-text"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid
                    dicta eaque, eius excepturi fugiat maiores necessitatibus nostrum optio quo rem repudiandae ullam
                    voluptas. Adipisci amet animi asperiores atque consequuntur corporis dolorem doloribus eaque
                    eligendi est et, facilis fugit, incidunt, itaque iure laboriosam maiores modi molestias neque nobis
                    numquam obcaecati optio pariatur praesentium quaerat quidem reprehenderit sequi sit soluta ut. Aut
                    delectus eum exercitationem, id illum modi repellat tempore! Aut numquam repellat similique! Animi
                    asperiores assumenda autem, consectetur delectus, deserunt ducimus ex inventore labore magnam neque
                    nulla, odit possimus recusandae reiciendis repellendus suscipit ut voluptates. Animi aspernatur,
                    assumenda aut consectetur est explicabo id illum in ipsum molestiae molestias nisi pariatur
                    perferendis perspiciatis quos rem sapiente sint sit vitae voluptatibus! Accusamus adipisci
                    asperiores cupiditate deleniti, dolore dolorum earum eius enim eveniet expedita iure laborum magnam
                    maiores modi neque nihil nisi, quis quos reiciendis similique sunt, suscipit ullam ut velit vitae!
                    Dignissimos ea maxime mollitia nostrum odit, quia quo tempora. Ducimus eaque eligendi enim esse
                    impedit incidunt, molestias perferendis quae quidem. Accusamus animi architecto eius eos esse, id
                    illum iusto maiores maxime mollitia necessitatibus nesciunt officia officiis qui quisquam rerum
                    voluptas. Consequatur ea enim, laboriosam minus natus officia placeat quos ullam voluptatem!</p>
            </div>
        </>
    )
        ;
};

export default MessageRecord;
