import styles from '../styles/Timer.module.css';

function Timer(props) {
  return <div className={styles.timer}>Timer: {props.timer}</div>;
}

export default Timer;
