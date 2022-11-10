import PropTypes from 'prop-types';
import s from './Filter.module.css'

const Filter = ({filterChanges}) =>
{
    return(
        <label htmlFor="" className={s.filterLabel}>Find contact by name or number
        <input type="text" onChange={filterChanges} placeholder='search...' className={s.flterInput}/></label>
    )
}

Filter.propTypes={
    filterChanges: PropTypes.func.isRequired
}

export default Filter