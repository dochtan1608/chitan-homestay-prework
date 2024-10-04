import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
export const metadata = {
  title: "CHITAN Homestay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>

        <main>{children}</main>
        <footer>Copy right by Doan Chi Tan</footer>
      </body>
    </html>
  );
}
