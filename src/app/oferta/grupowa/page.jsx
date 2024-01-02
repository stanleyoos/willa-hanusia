import { client } from "@/sanity/client";

const OfertaGrupowaPage = async () => {
  const ceny = await client.fetch(`*[_type == "cena"]`);

  return (
    <>
      <h1 className="text-center text-3xl mt-20">Oferta Grupowa</h1>
      <h1 className="text-center text-3xl mt-20">
        Cena za osobę dorosłą : {ceny[0].wartosc}{" "}
      </h1>
    </>
  );
};

export default OfertaGrupowaPage;
