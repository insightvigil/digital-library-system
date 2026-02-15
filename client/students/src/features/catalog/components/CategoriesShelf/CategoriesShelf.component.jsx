import ShelfHeader from "../ShelfHeader/ShelfHeader.component";
import CategoriesGrid from "../CategoriesGrid/CategoriesGrid";

import './CategoriesShelf.styles.scss'

const CategoriesExplorer = ({categories}) => {
    const category = {
        category_name: "Explorar por categoría",
    }
    return(  
            <section className="categories-shelf">
                <ShelfHeader category={category} description={null} ></ShelfHeader>
                <CategoriesGrid categories={categories}></CategoriesGrid> 
            </section>
    )
}

export default CategoriesExplorer;