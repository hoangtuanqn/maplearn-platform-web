import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import { routes } from "~/router";
import Loading from "./components/Loading";
import ScrollToTop from "./components/ScrollToTop";
import { store } from "./store";
function AppRouter() {
    return useRoutes(routes);
}
const queryClient = new QueryClient();
const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <QueryClientProvider client={queryClient}>
                    <ScrollToTop />
                    <Provider store={store}>
                        <AppRouter />
                    </Provider>
                </QueryClientProvider>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
