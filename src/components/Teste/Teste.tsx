import { useEffect, useState } from "react";
import { fetchTeste } from "../../services/ClientApi";
import { TesteProps } from "../../interfaces/TesteProps"
import "../../components/Teste/Teste.css"

const Teste: React.FC<TesteProps> = ({ symbol }) => {
  const [sym, setSymData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean | null>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTeste(symbol)
      .then((response) => {
        setSymData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [symbol]);
  if (loading) return <div> Loading ...</div>;
  if (error) return <div> Error: {error}</div>;

  return (
    <>
      <div className="">
        <img src={sym?.logourl} alt={`${sym}`} width={100} />
        <p>
          <div>
            <p>Simbolo: {symbol}</p>
            <p>Nome: {sym?.shortName}</p>
          </div>
        </p>
      </div>
    </>
  );
};

export default Teste;