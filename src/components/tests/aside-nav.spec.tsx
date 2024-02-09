import { render, screen } from '@testing-library/react';
import { AsideNav } from '../aside-nav';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import "@testing-library/jest-dom";

describe("AsideNav", () => {
    it("showld render correctly", () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <AsideNav />
                </BrowserRouter>
            </QueryClientProvider>
        )

        expect(screen.getByText("All files")).toBeInTheDocument();
        expect(screen.getByText("Favorites")).toBeInTheDocument();
    })
})