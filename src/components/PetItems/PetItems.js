import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import classname and style module.scss
import classNames from 'classnames/bind';
import styles from './PetItems.module.scss';
import Image from '~/components/Image';

// đặt biến cx để sau này dùng làm style
const cx = classNames.bind(styles);

function PetItems({data}) {
    return (
        // change div to Link
        // data is a API call object
        <Link to={`/pet/${data._id}`} className={cx('wrapper')}>
            <Image className={cx('image')} 
                src={data.image} 
                alt={data.name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.name}</span>
                </h4>
            </div>
        </Link>
    );
}


// propTypes
PetItems.propTypes = {
    data: PropTypes.object.isRequired
}

export default PetItems;
