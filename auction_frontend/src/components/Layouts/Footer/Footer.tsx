import './Footer.css';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import {lemonFont, lobsterFont} from "@/scripts/fonts";
import Link from "next/link";

const linkIconsSize = 40;
const twitterPath = ""
const mediaLinks = {
    twitter: "#",
    insta: "#",
    face: "#",
    mail: "#",
    tg: "#",
}
const Footer = () => {
    return (
        <footer className={lemonFont.className +" "+ lobsterFont.className} >
            <div className="wrapper">
                <div className="upper-text">
                    Auction Dive
                </div>
                <hr/>
                <div className="middle-text-container">
                    <div className="container-column first">
                        Ласкаво просимо до нас на аукціон!
                        Перед тим як почати користуватися нашим сайтом - пропонуємо Вам ознайомитися з нашою політикою щодо проведення та обслуговування аукціону.
                        По-перше, зауважте, що ми пропонуємо Вам лоти різного формату та тематики, тож ми не можемо стверджувати, що весь контент сайту може відповідати категорії людей до 18 років.
                        По-друге, зібрані кошти з усіх лотів направлені на благодійні потреби.
                        По-третє, під час торгів кошти, які Ви відправили для ставки - будуть заморожені у транзакції до кінця аукціону. Таким чином, якщо Ви будете мати бажання повернути свої кошти під час аукціону - Ваша ставка буде анульована, в інших випадках кошти будуть повернуті після завершення торгів. Для загального розуміння, після повторної ставки на один лот - ваша ставка сумується.

                    </div>
                    <div></div>
                    <div className="container-column second">
                        Auction Dive - це найсучасніший аукціонний дім, який займається виключно благодійністю та переказує усі кошти на потреби Збройних Сил України або ж у волонтерські організації, що займаються відновленням внаслідок вторгнення.

                    </div>
                </div>

            </div>
            <div className="bottom-container">
                <div className="links">
                    <Link href={mediaLinks.twitter}>
                        <FaXTwitter size={linkIconsSize} />
                    </Link>
                    <Link href={mediaLinks.insta}>
                        <FaInstagram size={linkIconsSize}/>
                    </Link>
                    <Link href={mediaLinks.tg}>
                        <FaTelegramPlane size={linkIconsSize}/>
                    </Link>
                    <Link href={mediaLinks.mail}>
                        <MdMailOutline size={linkIconsSize}/>
                    </Link>
                </div>
                <div className="central-text">
                    <p>Copyright © 2024 Auction Dive.</p>
                    <p>All Rights Reserved.</p>
                </div>
                <div className="right-text">
                    *Зверніть увагу, що це не справжній сайт для аукціону, а лише умовна версія, яка не несе ніяких обов’язків перед людьми, які будуть ним користуватися. Оплата та покупка лотів не є можливою на тестовому проєкті!
                </div>
            </div>
        </footer>
    );
};

export default Footer;
