import { render } from "@testing-library/react";
// import App from "../../App";
import { MemoryRouter } from 'react-router-dom';
import { Suspense } from "react";
// import { Home } from "../../pages/Home";

test('Renders main page correctly', () => {

    render(
        <MemoryRouter>
            <Suspense>
                {/* <App /> */}
            </Suspense>
        </MemoryRouter>
    )
    
});