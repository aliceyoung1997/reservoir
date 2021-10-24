import styled from 'styled-components';

const ReservoirWrap = styled.div`
  min-width:22%;
  text-align:center;
  margin:20px 0;
`
const Name = styled.div`
  font-size:20px;
  font-weight:bold;
  color:#0a4863;
`
const ReservoirBox = styled.div`
  width:200px;
  height:200px;
  margin:10px auto;
  border-radius:50%;
  border:3px solid #0b709d;
  position:relative;
  overflow:hidden;
`
const Percentage = styled.div`
  position:absolute;
  top:40%;
  right:25%;
  font-size:40px;
  z-index:3;
  color:#0a4863;
  transform:translate(-10%, -2%);
`
const Wave = styled.div`
  background: #80808075;
  width: 110%;
  height: ${props => props.height}%;
  position: absolute;
  bottom:0;
`
const Info = styled.div`
  color:#0a4863;  
`

export default function Reservoir({ reservoir }) {
  return (
    <ReservoirWrap>
      <Name>{reservoir.name}</Name>
      <ReservoirBox >
        <Percentage>{Math.round(reservoir.percentage)}%</Percentage>
        <Wave height={reservoir.percentage} />
      </ReservoirBox>
      <Info>有效蓄水量：{reservoir.volumn} 萬立方公尺</Info>
      <Info>今日進水量：{reservoir.daliyInflow} 萬立方公尺</Info>
      <Info>今日出水量：{reservoir.daliyOverflow} 萬立方公尺</Info>
      <Info>更新時間：{reservoir.updateAt}</Info>
    </ReservoirWrap>
  )
}