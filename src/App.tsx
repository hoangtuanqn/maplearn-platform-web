import Header from "~/components/Header";
import Home from "~/pages/Home";
import SidebarLeft from "~/components/SidebarLeft";
import SidebarRight from "~/components/SidebarRight";
import Footer from "~/components/Footer";

const App = () => {
    return (
        <>
            <Header />
            <section className="max-w-8xl mx-auto mt-[56px] p-5">
                <div className="flex gap-14">
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
