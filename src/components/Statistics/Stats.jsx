import PropTypes from 'prop-types';
import {Label} from "./Statistics.styled"


export const Stats = ({item: {label, percentage}}) => {
    return (       
        <>
        <Label>{label}</Label>
        <span className="percentage">{percentage}%</span>
        </> 
    )
}

Stats.propTypes = {
    item: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired
}
