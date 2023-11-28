import Header from './components/headers/header';
import Footer from './components/footers/footer.js';
import './globals.css'


export const metadata = {
  title: 'Headless Phukettourz',
  
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
};

export default RootLayout;
