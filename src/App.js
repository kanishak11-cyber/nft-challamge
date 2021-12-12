import { useState, useEffect } from 'react';
import './App.css';
// import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';


function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(2)
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x6488ed82b2150b705837222B66767B152DECC7b6');
      const nftData = openseaData.data.assets;

      console.log(nftData);
      setPunkListData(nftData);
    }
    return getMyNfts();
  }, [selectedPunk]);
  return (
    <div className="app">
      <Header />
      {/* <CollectionCard
        id={0}
        name={'bandana Punk'}
        traits={[{ 'value': 7 }]}
        image=' https://lh3.googleusercontent.com/hJKQWDj6ZUlEnBsdxH-_gK7sAosVTJjBLP_UE4TD-wVBFATfXgRJheHy1CGwp8Ly3Gz3yNvW7H9fJOjbyYt6qsmDzcld6ObliXouJz8=s0'
      /> */}

      {
        punkListData.length > 0 && (
          <>
            <Main punkListData={punkListData} selectedPunk={selectedPunk} />
            <PunkList
              punkListData={punkListData}
              setSelectedPunk={setSelectedPunk}
              
            />
          </>
        )}
      </div>
  );
}

export default App;
