import { IComponentChildrenProp } from "@/types";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Body from "@/components/Layouts/Body/Body";

const Layouts = ({ children }: IComponentChildrenProp) => {
    return (
        <body>
            <main>
                <Header />
                {children}
                <Body />
                <Footer />
            </main>
        </body>
    );
};

export default Layouts;
