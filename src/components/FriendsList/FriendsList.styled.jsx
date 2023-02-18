import styled from 'styled-components';

export const Friends = styled.ul`
  display: flex;
  flex-direction: column;
  width: min-content;
  list-style: none;
  gap: 16px;
  margin: 0 auto 30px auto;
  padding: 0;
`

export const FriendItem = styled.li`
  width: 400px;
  display: flex;
  gap: 16px;  
  align-items: center;
  padding: 8px 16px;
  background-color: white;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.12);
`

export const Status = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? "green" : "red"
  }}
`

export const Image = styled.img`
  display: block;
  width: 96px;
  height: 96px;
  border-radius: 8px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.12); 
`

export const NameText = styled.p`
  margin: 0;
  font-size: 30px;
  font-weight: bold;
  color: #000;
`
