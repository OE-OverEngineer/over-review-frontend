import Head from 'next/head';

import Layouts from 'common/components/Layouts';

import MovieList from './components/MovieList';
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
        <MovieList />
      </Layouts>
    </div>
  );
};

export default SearchMovie;
