import PropTypes from 'prop-types';
import { Transaction } from './Transaction';
import { Table } from './TransactionHistory.styled';
import { TableHead, TableRow, TableHeadRow, TableBody } from './TransactionHistory.styled'; 

export const TransactionHistory = ({transactions}) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                <TableHeadRow>Type</TableHeadRow>
                <TableHeadRow>Amount</TableHeadRow>
                <TableHeadRow>Currency</TableHeadRow>
                </TableRow>
            </TableHead>
            <TableBody>
                {transactions.map(transaction => (
                    <TableRow key={transaction.id}>
                        <Transaction transaction={transaction} />
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ).isRequired
}