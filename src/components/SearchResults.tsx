import { List, ListRowRenderer } from "react-virtualized";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
  onAddToWishList: (id: number) => void;
}

export function SearchResults({ results, onAddToWishList, totalPrice}: SearchResultsProps) {

 
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    const formattedResult = {
      ...results[index],
      priceFormatted: ''
    }
    return (
      <div key={key} style={style}>
        <ProductItem 
          product={formattedResult}
          onAddToWishList={onAddToWishList}
        />
      </div>
    );
  };
  
  return (
    <div>
      <h2>{totalPrice}</h2>
      <List 
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
}