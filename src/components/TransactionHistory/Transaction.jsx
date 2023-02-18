import PropTypes from 'prop-types';
import { TableData } from './TransactionHistory.styled';

export const Transaction = ({transaction: {type, amount, currency}}) => {
    return (
        <>
            <TableData>{type}</TableData>
            <TableData>{amount }</TableData>
            <TableData>{currency}</TableData>
        </>
    )
}

Transaction.propTypes = {
    transaction: PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired
}
