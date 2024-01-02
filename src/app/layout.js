import { Lobster, Lato } from "next/font/google";
import "./globals.scss";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import Container from "@/components/Container/Container";
import { SpeedInsights } from "@vercel/speed-insights/next";

const lobster = Lobster({ weight: "400", subsets: ["latin"] });
const lato = Lato({ weight: "400", style: "italic", subsets: ["latin"] });

export const metadata = {
  title: "Willa Hanusia",
  description: "noclegi Rabka-Zdrój wypoczynek lato ferie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={lato.className}>
        <Container>
          <Navigation />
          {children}
          <SpeedInsights />
          <Footer />
        </Container>
      </body>
    </html>
  );
}
