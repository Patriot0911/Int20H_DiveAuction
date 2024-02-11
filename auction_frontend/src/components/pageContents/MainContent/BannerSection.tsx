import Banner from "@/components/Banner/Banner";

const BannerSection = () => {
    return (
        <section
            className={'banner-section-container'}
        >
            <div
                className={'grid-column-container'}
            >
                <Banner />
            </div>
        </section>
    );
};

export default BannerSection;
