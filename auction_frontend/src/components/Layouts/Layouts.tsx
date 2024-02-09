import { IComponentChildrenProp } from "@/types";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layouts = ({ children }: IComponentChildrenProp) => {
    return (
        <body>
            <main
                id={'main-wrapper-id'}
            >
                <Header />
                {children}
                <Footer />
            </main>
        </body>
    );
};

export default Layouts;
