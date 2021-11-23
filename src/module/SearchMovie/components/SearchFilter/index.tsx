import Link from 'next/link';

const SearchFilter: React.FC = () => {
  return (
    <div className="ml-32 mt-8">
      <p className="text-gray-400">
        explore titles related to :
        <Link href="/home">
          <span className="text-white cursor-pointer">kissing booth</span>
        </Link>
        <span className="text-white">|</span>
        <Link href="/home">
          <span className="text-white cursor-pointer">kissing booth 2</span>
        </Link>
        <span className="text-white">|</span>
        <Link href="/home">
          <span className="text-white cursor-pointer">kissing booth 3</span>
        </Link>
      </p>
    </div>
  );
};
export default SearchFilter;
