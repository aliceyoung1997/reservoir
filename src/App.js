import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Reservoir from './Reservoir';

const Container = styled.div`
  background:#d8ebfc7d;
`
const TitleArea = styled.div`
  text-align:center;
  padding: 40px 0;
  background:#a4b9d3;
`
const Title = styled.h1`
  margin:20px 0;
  color:#174d65;
`
const Intro = styled.div`
  font-size:15px;
  color:#174d65;
`
const Reservoirs = styled.div`
  display:flex;
  justify-content:space-around;
  flex-wrap:wrap;
`
const getReservoirData = () => {
  return fetch(`https://www.taiwanstat.com/waters/latest`).then((res) => res.json());
}
function App() {
  const [reservoirs, setReservoir] = useState([])
  useEffect(() => {
    getReservoirData().then(data => setReservoir(data[0]))
  }, [])
  return (
    < Container >
      <TitleArea>
        <Title>臺灣水庫即時水情</Title>
        <Intro>使用經濟部水利署 Open Data 即時呈現各水庫資訊</Intro>
      </TitleArea>
      <Reservoirs>
        {
          Object.keys(reservoirs).map((reservoir) =>
            < Reservoir
              key={reservoirs[reservoir].id}
              reservoir={reservoirs[reservoir]} />)
        }
      </Reservoirs>
    </Container >
  );
}

export default App;
