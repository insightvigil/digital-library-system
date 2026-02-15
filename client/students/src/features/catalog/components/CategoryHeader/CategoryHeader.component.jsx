import './CategoryHeader.styles.scss';

const CategoryHeader = () => {
  return (
    <section className="category-header__container" >
      <div className="shelfheader-description">
        <h2>Categoria</h2>
        <p>Descripción</p>

        {/* <BooksFilter
          sort={filters.sort}
          order={filters.order}
          available={filters.available}
          onChange={onFiltersChange}
        /> */}
      </div>
    </section>
  );
};

export default CategoryHeader;
