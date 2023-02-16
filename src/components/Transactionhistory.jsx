import PropTypes from 'prop-types';
import { Transaction } from './Transaction';

export const TransactionHistory = ({transactions}) => {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(transaction =>
                    <Transaction key={transaction.id} transaction={transaction}/>
                    )}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ).isRequired
}