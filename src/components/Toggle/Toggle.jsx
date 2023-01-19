import React from 'react';
import styles from './toggle.module.scss';

const Toggle = ({ value, onChange }) => {
    return (
       <label className={styles.root} htmlFor="toggler">
           <input
                id="toggler"
                type="checkbox"
                onClick={onChange}
                checked={value}
                readOnly="readOnly"
           />
           <span className={styles.slider}/>
           <span className={styles.wave}/>
       </label>
    );
};

export default Toggle;
