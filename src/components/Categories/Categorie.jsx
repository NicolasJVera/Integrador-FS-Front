// En Categorie.jsx
import { FilterButton } from "./CategoriesStyles";

const Categorie = ({ category, selected, onSelect }) => {
  return (
    <FilterButton
      onClick={() => onSelect(category.category)}
      $active={selected === category.category}
    >
      {category.name}
    </FilterButton>
  );
};

export default Categorie;