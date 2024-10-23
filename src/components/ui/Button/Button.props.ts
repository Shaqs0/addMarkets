import { ButtonHTMLAttributes } from 'react';


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    appearence?: 'leave_req' | 'send_req' 
}