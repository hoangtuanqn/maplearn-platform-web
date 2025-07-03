import Header from "~/components/Header";
import Home from "~/pages/Home";
import SidebarLeft from "~/components/SidebarLeft";
import SidebarRight from "~/components/SidebarRight";
import Footer from "~/components/Footer";

const App = () => {
    return (
        <>
            <Header />
            {/* max-w-8xl mx-auto mt-[56px] p-5 */}
            <section className="max-w-8xl mx-auto md:mt-[56px] md:py-5 px-1">
                <div className="flex gap-2 max-md:pb-18">
                    <SidebarLeft />
                    <Home />
                    <SidebarRight />
                </div>
            </section>
            <Footer />
        </>
    );
};

export default App;
