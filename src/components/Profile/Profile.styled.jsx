import styled from "@emotion/styled";

export const ProfileCard = styled.div`
  overflow: hidden;
  display: flex;

  width: 750px;
  margin: auto;
  text-align: center;

  border-radius: 10px;
  background-color: #fff;
  box-shadow: 2px 4px 8px 0 rgba(34, 60, 80, 0.2),
    -2px 4px 8px 0 rgba(34, 60, 80, 0.2);
`;

export const Description = styled.div`
  padding: 40px 40px 20px;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 30px;

  border: 1px solid darkgrey;
  border-radius: 50%;
  background-color: aliceblue;
`;

export const Name = styled.p`
  margin-bottom: 15px;
  font-weight: bold;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  color: red;
  font-weight: 800;
`;

export const Location = styled.p`
  margin-bottom: 10px;
  color: black;
  font-weight: 800;
`;

export const Stats = styled.ul`
  display: flex;
  flex-direction: column;
  width: 80px;

  padding: 10px;
  align-items: center;

  border: 1px solid darkgray;
  background-color: ghostwhite;
  border-radius: 10%;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  padding: auto;
`;

export const Label = styled.span`
  color: black;
  padding: auto;
  font-weight: 800;

  font-size: 15px;
`;

export const Quantity = styled.span`
  color: green;
  font-weight: 800;
`;
