import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const pageVariants = {
    initial: {
        opacity: 0,
        y: 10,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: {
            duration: 0.3,
            ease: "easeIn",
        },
    },
};

const PageTransition = ({ children }) => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ width: '100%', minHeight: '100vh' }}
        >
            {children}
        </motion.div>
    );
};

PageTransition.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PageTransition;
