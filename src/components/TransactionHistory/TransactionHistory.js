import propTypes from "prop-types";
import {
  TransactionTable,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "./TransactionHistory.styled";

function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>

      <Tbody>
        {items.map((item) => (
          <Tr key={item.id}>
            <Td>{item.type}</Td>
            <Td>{item.amount}</Td>
            <Td>{item.currency}</Td>
          </Tr>
        ))}
      </Tbody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
