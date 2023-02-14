import PropTypes from 'prop-types';
import { Stats } from './Stats';

export const Statistics = ({title, stats}) => {
    return (
        <section className="statistics">
            <h2 className="title">
                {title ? `${title}` : "Upload stats"}
            </h2>
            <ul className="stat-list">
                {stats.map(item => (
                    <li key={item.id} className="item">
                        <Stats item={item}/>
                    </li>))}
            </ul>
        </section>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ).isRequired
}