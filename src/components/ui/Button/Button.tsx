import styles from './Button.module.css';
import cn from 'classnames';
import { ButtonProps } from './Button.props';

export function Button ({ className, appearence = 'leave_req', ...props }: ButtonProps) {
	return (
		<button 
			className={cn( className, {
				[styles['leave_req']]: appearence === 'leave_req',
				[styles['send_req']]: appearence === 'send_req',
			})} 
			{...props}
		/>
	);
}
