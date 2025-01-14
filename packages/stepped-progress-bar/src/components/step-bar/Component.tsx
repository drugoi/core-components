import React, { FC, memo } from 'react';
import cn from 'classnames';

import styles from './index.module.css';

type StepBarProps = {
    isDone: boolean;
};

export const StepBar: FC<StepBarProps> = memo(({ isDone }) => (
    <span data-test-id={isDone ? 'on' : 'off'} className={cn(styles.bar, isDone && styles.done)} />
));
