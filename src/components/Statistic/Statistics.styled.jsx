import styled from "@emotion/styled";

export const StatTable = styled.section`
  margin-bottom: 30px;

  padding: auto;
  width: 750px;
  margin: auto;
  text-align: center;

  box-shadow: 2px 4px 8px 0 rgba(34, 60, 80, 0.2),
    -2px 4px 8px 0 rgba(34, 60, 80, 0.2);
`;

export const Title = styled.h2`
  font-size: 30px;
  color: green;
`;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
  padding: auto;
  margin: auto;
  background-color: #fff;
  box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
`;

export const StatListItem = styled.li`
  display: flex;
  flex-basis: calc(100% / 5);
  flex-direction: column;
  box-shadow: 2px 4px 8px 0 rgba(34, 60, 80, 0.2),
    -2px 4px 8px 0 rgba(34, 60, 80, 0.2);
  margin-right: 30px;
`;

export const Label = styled.span`
  font-size: 25px;
`;

export const Percentage = styled.span`
  font-size: 20px;
  color: blue;
`;
