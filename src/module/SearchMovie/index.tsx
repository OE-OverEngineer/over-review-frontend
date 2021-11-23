import Head from 'next/head';

import Layouts from 'common/components/Layouts';

import MovieList from './components/MovieList';
import SearchFilter from './components/SearchFilter';
import SearchTools from './components/SearchTools';

const SearchMovie: React.FC = () => {
  return (
    <div>
      <section></section>
      <Head>
        <title>Search Movie</title>
        <link rel="icon" href="/over_icon.svg" />
      </Head>
      <Layouts>
        <SearchTools />
        <section className="max-w-screen-2xl m-auto text-white z-10">
          <SearchFilter />
          <MovieList />
        </section>
      </Layouts>
    </div>
  );
};

export default SearchMovie;
