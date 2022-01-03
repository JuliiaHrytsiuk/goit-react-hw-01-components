import styled from "@emotion/styled";

export const Item = styled.div`
  display: flex;
  min-height: 10px;
  margin-bottom: 5px;
  padding: 10px 10px;
  margin-left: 10px;
  background-color: #fff;
  box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
`;

export const Status = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: green;

  background-color: ${(props) => {
    switch (props.isOnline) {
      case true:
        return "green";

      case false:
        return "red";

      default:
        return "black";
    }
  }};
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;

  border-radius: 5px;
  background-color: grey;
`;

export const Name = styled.p`
  font-size: 15px;
  font-weight: semi-bold;
`;
