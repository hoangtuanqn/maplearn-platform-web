import { Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "~/router";
import Loading from "./components/Loading";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./contexts/AuthProvider";
function AppRouter() {
    return useRoutes(routes);
}
const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <ScrollToTop />
                <AuthProvider>
                    <AppRouter />
                </AuthProvider>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
