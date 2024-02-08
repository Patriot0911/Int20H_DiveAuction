import { IComponentChildrenProp } from "@/types";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layouts = ({ children }: IComponentChildrenProp) => {
    return (
        <body>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </body>
    );
};

export default Layouts;
