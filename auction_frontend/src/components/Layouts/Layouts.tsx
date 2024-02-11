import { IComponentChildrenProp } from "@/types";
import ReduxProvider from "@/redux/provider";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layouts = ({ children }: IComponentChildrenProp) => {
    return (
        <body>
            <main
                id={'main-wrapper-id'}
            >
                <ReduxProvider>
                    <Header />
                    {children}
                    <Footer />
                </ReduxProvider>
            </main>
        </body>
    );
};

export default Layouts;
