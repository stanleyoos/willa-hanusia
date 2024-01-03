import Gallery from "@/components/common/Gallery/Gallery";

const GaleriaPage = async () => {
  const pokoje = [
    "/pokoje/01.jpg",
    "/pokoje/02.jpg",
    "/pokoje/03.jpg",
    "/pokoje/04.jpg",
  ];
  const atrakcje = [
    "/atrakcje/01.jpeg",
    "/atrakcje/02.jpeg",
    "/atrakcje/03.jpeg",
    "/atrakcje/04.jpeg",
  ];
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-7xl my-12">Galeria</h1>
      <Gallery photos={pokoje} name="Pokoje" />
      <Gallery photos={atrakcje} name="Atrakcje" />
    </div>
  );
};

export default GaleriaPage;
