import classes from './LoadingSpinner.module.css';

export default function LoadingSpinner() {
  return (
    <div class={classes['col-sm-2']}>
      <div class={`${classes.sp} ${classes['sp-wave']}`}></div>
    </div>
  );
}
