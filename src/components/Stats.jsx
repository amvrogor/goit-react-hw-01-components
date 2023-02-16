import PropTypes from 'prop-types';

export const Stats = ({item: {label, percentage}}) => {
    return (       
        <div>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
        </div> 
    )
}

Stats.propTypes = {
    item: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired
}