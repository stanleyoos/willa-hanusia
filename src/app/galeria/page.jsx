import { client, urlFor } from "@/sanity/client";
import Image from "next/image";
import Gallery from "@/components/common/Gallery/Gallery";

const GaleriaPage = async () => {
  const pictures = await client.fetch(
    `*[_type == "Pictures" && opis == 'Obiekt']`
  );

  const url = urlFor(pictures[0].picture.asset._ref).url();

  const pho = ["/pokoje/01.jpg", "/pokoje/02.jpg", "/pokoje/03.jpg"];
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-7xl my-12">Galeria</h1>
      {/* <Image className="m-40" src={url} width={400} height={100} alt="obiekt" /> */}
      <Gallery photos={pho} />
    </div>
  );
};

export default GaleriaPage;
