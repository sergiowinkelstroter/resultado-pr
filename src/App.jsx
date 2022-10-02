import { useEffect, useState } from "react";

export const App = () => {
  const [dados, setDados] = useState([]);
  const [horario, setHorario] = useState("");
  const [vv, setVv] = useState("");
  const [ta, setTa] = useState("");
  useEffect(() => {
    fetch(
      "https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json"
    )
      .then((data) => data.json())
      .then((data) => setDados(data.cand));

    fetch(
      "https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json"
    )
      .then((data) => data.json())
      .then((data) => setVv(data.vv));
    fetch(
      "https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json"
    )
      .then((data) => data.json())
      .then((data) => setHorario(data.ht));
    fetch(
      "https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json"
    )
      .then((data) => data.json())
      .then((data) => setTa(data.pst));
  }, []);

  return (
    <div className="md:w-[600px] m-auto bg-blue-200 p-4 rounded-lg shadow-lg flex justify-center flex-col mt-12 mx-5 md:mx-auto mb-5 md:mb-0">
      {dados.map((dado, index) => {
        return (
          <div className="" key={index}>
            <span className="flex gap-10 mb-4 ">
              {dado.nm} - {dado.pvap}% - {dado.vap} votos
            </span>
          </div>
        );
      })}
      <div className="flex flex-col md:flex-row justify-between mb-5">
        <p>Votos validos: {vv}</p>
        <p>Ultima atualizacao - {horario}</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between mb-2">
        <p>TOTAL APURADO: {ta}%</p>
        <p className="text-xs">FONTE: resultados.tse.jus.br</p>
      </div>
    </div>
  );
};
