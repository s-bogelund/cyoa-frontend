import {
	AlertDialog as AlertDialogWrapper,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/shadcn/ui/alert-dialog';

import React, { FC } from 'react';

type AlertDialogProps = {
	title: string;
	description: string;
	cancelText: string;
	confirmText: string;
	children: React.ReactNode;
	onCancel: () => void;
	onConfirm: () => void;
};

const AlertDialog: FC<AlertDialogProps> = ({
	title,
	description,
	cancelText,
	confirmText,
	children,
	onCancel,
	onConfirm,
}) => {
	return (
		<AlertDialogWrapper>
			<AlertDialogTrigger>{children}</AlertDialogTrigger>
			<AlertDialogContent className="w-24">
				<AlertDialogHeader>
					<AlertDialogTitle>{title}</AlertDialogTitle>
					<AlertDialogDescription>{description}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel onClick={onCancel}>{cancelText}</AlertDialogCancel>
					<AlertDialogAction onClick={onConfirm}>{confirmText}</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialogWrapper>
	);
};

export default AlertDialog;
