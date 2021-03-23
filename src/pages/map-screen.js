import React, { useEffect } from 'react'
import Layout from '../components/layout'
import Map from '../components/map'
import { db } from '../config';

const MapPage = ({ ID }) => {
  const [currentMap, setCurrentMap] = React.useState({});
  const [isLoaded, setIsLoaded] = React.useState(false);

  useEffect(() => {
    db.ref('challenges/').orderByChild('id').equalTo(ID).on('value', snapshot => {
      const map = snapshot.val();
      console.log(map);
      setCurrentMap(map[Object.keys(map)[0]]);
      setIsLoaded(true);
    });
  }, []);

  return (
    <Layout>
      {isLoaded && <Map data={currentMap} id={ID} />}
    </Layout>
  )
}

export default MapPage