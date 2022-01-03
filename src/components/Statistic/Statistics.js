import propTypes from "prop-types";
import {
  StatTable,
  Title,
  StatList,
  Label,
  Percentage,
  StatListItem,
} from "./Statistics.styled";

const Statistics = ({ title, stats }) => {
  return (
    <StatTable>
      {title && <Title>Upload stats</Title>}

      <StatList>
        {stats.map((stat) => (
          <StatListItem key={stat.id}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}</Percentage>
          </StatListItem>
        ))}
      </StatList>
    </StatTable>
  );
};

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ),
};

export default Statistics;
