import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {
  return (
    <>
      <Header itemSum={props.itemSum} />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
