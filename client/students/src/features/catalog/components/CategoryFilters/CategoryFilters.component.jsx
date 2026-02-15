import './CategoryFilters.styles.scss';
import { useState } from 'react';

export default function CategoryFilters({orderBy, orderDir}){

    const [filters, setFilters] = useState({
    sortBy: "DEFAULT",
    sortDir: "ASC",
    });
    
    return(
        <>
        <section className="category-filters__container">
        <label htmlFor="orderBy">Ordenar por: </label>

        <select name="" id="orderBy" onChange={(e)=> setFilters((prev)=> ({...prev, sortBy: e.target.value})) } value={filters.sortBy}>
            <option value="">Selecciona…</option>
            <option value="title">Título</option>
            <option value="author">Autor</option>
        </select>

        <label htmlFor="orderDir">Dirección: </label>
        <select name="" id="orderDir" onChange={(e)=> setFilters((prev)=> ({...prev, sortDir: e.target.value}))} value={filters.sortDir}>
            <option value="ASC">Ascendente &#40;A -&gt; Z&#41;</option>
            <option value="DESC">Descendente &#40;Z -&gt; A&#41;</option>
        </select>

        </section>
        </>
    )
}