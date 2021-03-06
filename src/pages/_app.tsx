import type { AppProps } from 'next/app';
require('styles/global.less');

import 'tailwindcss/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Component {...pageProps} />
  </>
);

export default App;
