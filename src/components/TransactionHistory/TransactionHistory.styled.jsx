import styled from 'styled-components';

export const Table = styled.table`
  width: 870px;
  margin: 0 auto 30px auto;
  border-collapse: collapse;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  overflow: hidden;
`;

export const TableHead = styled.thead``;

export const TableRow = styled.tr`
  text-align: center;
  color: #7d848a;
  background-color: white;
  :nth-child(even) {
    background-color: #ecf1f4;
  }
  :hover {
    color: white;
    background-color: #00bcd5;
    opacity: 0.7;
  }
`;

export const TableHeadRow = styled.th`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #00bcd5;
  font-size: 14px;
  color: white;
  text-transform: uppercase;
  + th {
    border-left: 1px solid #82f4f6;
  }
`;

export const TableBody = styled.tbody`
  font-size: 14px;
  color: black;
`;
export const TableData = styled.td`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 14%;
  text-align: left;
  :nth-child(2) {
    text-align: right;
    padding-left: 0;
    padding-right: 13%;
  }
  :nth-child(3) {
    padding-left: 16%;
  }
  text-transform: capitalize;
  + td {
    border-left: 1px solid #e4e4e4;
  }
`;
