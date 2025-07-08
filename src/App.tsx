import { Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "~/router";
import Loading from "./components/Loading";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./contexts/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
                    <AuthProvider>
                        <AppRouter />
                    </AuthProvider>
                </QueryClientProvider>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
