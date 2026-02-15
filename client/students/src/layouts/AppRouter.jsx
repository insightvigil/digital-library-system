import { BrowserRouter, Routes,Route } from "react-router";
//Pages
import Home from "../features/catalog/pages/Home/Home.page";
import BookDetail from "../features/catalog/pages/BookDetail/BookDetail.page"
import MainLayout from "./MainLayout";
import Category from "../features/catalog/pages/Category/Category.page"

function AppRouter(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="/books/:id" element={<BookDetail/>}/>
                <Route path="/categories/:id" element={<Category/>}/>
            </Route>
        </Routes>
    </BrowserRouter>)
}
export default AppRouter;