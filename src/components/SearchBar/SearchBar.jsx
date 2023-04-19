import SearchForm from '../SearchForm/SearchForm';
import SearchTypeSelector from '../SearchTypeSelector/SearchTypeSelector';
import { SearchBarWrapper } from './SearchBar.styled';

export default function SearchBar({ searchType }) {
  return (
    <SearchBarWrapper>
      <SearchForm searchType={searchType} />
      <SearchTypeSelector searchType={searchType} />
    </SearchBarWrapper>
  );
}
