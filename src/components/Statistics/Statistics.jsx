import PropTypes from 'prop-types';
import { Stats } from './Stats';
import {Container, Title, StatsList, StatsItem} from "./Statistics.styled"

export const Statistics = ({title, stats}) => {
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <StatsList>
                {stats.map(item => (
                    <StatsItem key={item.id}>
                        <Stats item={item}/>
                    </StatsItem>))}
            </StatsList>
        </Container>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ).isRequired
}

// export const Statistics = ({title, stats}) => {
//     return (
//         <section className="statistics">
//             <h2 className="title">
//                 {title ? `${title}` : "Upload stats"}
//             </h2>
//             <ul className="stat-list">
//                 {stats.map(item => (
//                     <li key={item.id} className="item">
//                         <Stats item={item}/>
//                     </li>))}
//             </ul>
//         </section>)
// }