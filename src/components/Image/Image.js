import PropTypes from 'prop-types'
import { useState, forwardRef } from 'react';
import styles from './Image.module.scss';
import classNames from 'classnames';
import images from '~/assets/Images';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.avatarDefault  ,...props }, ref) => {
    const [fallback, setFallback] = useState();

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

// propTypes
images.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
}

export default Image;
