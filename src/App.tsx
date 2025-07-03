import { Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "~/router";
import Loading from "./components/Loading";
function AppRouter() {
    return useRoutes(routes);
}
const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <AppRouter />
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
