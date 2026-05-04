'use client';

type Props = {
  renderAs?: "text" | "button";
  label: string;
  initialStocks?: any[]; // TEMP FIX: avoids StockWithWatchlistStatus error
};

const SearchCommand = ({ renderAs = "text", label }: Props) => {
  return (
    <div>
      {renderAs === "text" ? (
        <span className="cursor-pointer hover:text-yellow-500 transition-colors">
          {label}
        </span>
      ) : (
        <button className="hover:text-yellow-500 transition-colors">
          {label}
        </button>
      )}
    </div>
  );
};

export default SearchCommand;