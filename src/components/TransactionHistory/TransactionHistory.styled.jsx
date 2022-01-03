import styled from "@emotion/styled";

export const TransactionTable = styled.table`
  width: 100%;
  margin-bottom: 50px;
  padding: auto;
  width: 750px;
  margin: auto;
  margin-top: 15px;
  text-align: center;

  border-collapse: collapse;
  background-color: #fff;

  font-family: Arial, Helvetica, sans-serif;
`;

export const Thead = styled.thead`
  color: black;
`;

export const Tr = styled.tr`
  color: black;

  &:hover,
  &:focus {
    cursor: pointer;

    background-color: #ddd;
  }
`;

export const Th = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;

  color: white;
  background-color: #04aa6d;
  padding: 8px;

  border: 1px solid #ddd;
`;

export const Tbody = styled.tbody`
  color: black;
`;

export const Td = styled.td`
  padding: 8px;

  border: 1px solid #ddd;
`;
