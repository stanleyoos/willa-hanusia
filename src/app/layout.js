import { Lobster } from "next/font/google";
import "./globals.scss";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import Container from "@/components/Container/Container";

const lobster = Lobster({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Willa Hanusia",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={lobster.className}>
        <Container>
          <Navigation />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
