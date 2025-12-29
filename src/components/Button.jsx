import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ children, variant = 'primary', onClick, type = 'button', className = '', to }) {
    const classes = `btn btn-${variant} ${className}`;

    if (to) {
        return (
            <Link to={to} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary']),
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
    to: PropTypes.string,
};

export default Button;

