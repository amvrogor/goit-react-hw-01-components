import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  margin: 0 auto 30px auto;
  padding-top: 30px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.12);
  overflow: hidden;
`;

export const Image = styled.img`
  display: block;
  margin-bottom: 30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.12);
`;

export const Info = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  color: #768696;
`;

export const NameText = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

export const TagText = styled.p`
  margin: 0;
`;

export const LocationText = styled.p`
  margin: 0;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 32px;
  margin-bottom: 0;
  padding: 0;
  width: 100%;
  height: 75px;
  background-color: #f3f6f9;
`;

export const Stat = styled.li`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e4e9f0;
  + li {
    border-left: 1px solid #e4e9f0;
  }
`;

export const Label = styled.span`
  font-size: 12px;
  color: #768696;
`;

export const Quantity = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #000;
`;
