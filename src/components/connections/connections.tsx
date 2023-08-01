import classNames from 'classnames';
import styles from './connections.module.scss';
import { Icon } from '../common/icon/icon';

export interface ConnectionsProps {
    className?: string;
    count?: number;
}

export const Connections = ({ className, count}: ConnectionsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Icon name="followers" />
            <span>{count}</span>
            Connections
        </div>
    );
};
