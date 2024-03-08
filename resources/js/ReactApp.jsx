import ResourceTable from "./components/ResourceTable";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
const appPlaceHolder = document.getElementById("app");

if (appPlaceHolder) {
    const queryClient = new QueryClient();

    const Index = ReactDOM.createRoot(appPlaceHolder);

    Index.render(
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <ResourceTable />
            </QueryClientProvider>
        </React.StrictMode>
    );
}
