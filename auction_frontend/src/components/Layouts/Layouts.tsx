import { IComponentChildrenProp } from "@/types";
import Footer from "./Footer/Footer";


const Layouts = ({ children }: IComponentChildrenProp) => {
    return (
        <body>
            {children}
            <Footer />
        </body>
    );
};

export default Layouts;