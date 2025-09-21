import Axios from 'axios';
import { useQuery } from '@tanstack/react-query';

function Catfactquery() {
  const { data, isLoading, refetch, isError } = useQuery({
    queryKey: ["cat"],
    queryFn: () => Axios.get("https://catfact.ninja/fact").then((res) => res.data)
  });

  if(isError){
    return <h1>Sorry there was a problem loading facts.</h1>
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
        <div>{data?.fact}</div>
        <button onClick={refetch}>Change fact</button>
    </>
    );
}

export default Catfactquery;
