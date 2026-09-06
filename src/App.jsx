import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./component/Layout";
import { Home } from "./component/Home";
import { About } from "./component/About";
import { Services } from "./component/Services";
import { Contacts } from "./component/Contacts";
import { NotFound } from "./component/NotFound";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;