import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: min-content;
  margin: 0 auto 30px auto;   
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.12);
  overflow: hidden;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 30px 0;
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
`

export const StatsList = styled.ul`
  display: flex; 
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 60px;   
`

export const StatsItem = styled.li`
  width: 70px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${getRandomHexColor};
  color: white;
  :hover{ opacity: .7};
`

export const Label = styled.span`
  font-size: 12px; 
`

export const Percentage = styled.span`
  font-size: 16px;  
`

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
