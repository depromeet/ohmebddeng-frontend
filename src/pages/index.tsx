import type { NextPage } from 'next';

const Home: NextPage = () => {
  const handleClickButton = async () => {
    const response = await fetch('/level', { method: 'POST' });
    console.log(response);
  };

  return (
    <div>
      맵슐랭 !!
      <button onClick={handleClickButton}>TEST API</button>
    </div>
  );
};

export default Home;
