// toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import { GlobalStyle } from 'styles/GlobalStyle';
import { Layout } from './Layout/Layout';
import { Footer } from './Footer/Footer';
import Navbar from './Navbar';
import { Curses } from './Curses/Curses';

function curs() {
  return (
    <Layout>
      <Navbar />
      <Curses />
      <Footer text="Сайт створив студент РДГУ Мартиненков Д.О КН-4 заочної форми навчання. Під керівництвом доц.Петренко С.В " />
      <ToastContainer />
      <GlobalStyle />
    </Layout>
  );
}
export default curs;
