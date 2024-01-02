import { client, urlFor } from "@/sanity/client";
import Image from "next/image";

const GaleriaPage = async () => {
  const pictures = await client.fetch(`*[_type == "Pictures"]`);

  const url = urlFor(pictures[0].picture.asset._ref).url();
  // console.log(url);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-7xl my-12">Galeria</h1>
      <Image className="m-40" src={url} width={400} height={100} alt="obiekt" />
    </div>
  );
};

export default GaleriaPage;
