'use client'

import React from 'react';
import { Icon } from '@/components/Icon/Icon';
import { IconType } from '@/components/Icon/icon.types';

interface Props {
	onClick: () => void;
	isDisabled?: boolean
}

export function ProductButton({ onClick, isDisabled}: Props) {
	const buttonColor = isDisabled ? 'bg-secondaryLight' : 'bg-primary';
	return (
		<div className="w-full">
			<button
				data-testid="product-button"
				className={`p-2 ${buttonColor} rounded-lg flex justify-center items-center large:float-right`}
				disabled={isDisabled}
				onClick={onClick}
			>
				<span className="text-white">+</span>
				<Icon iconType={IconType.BASKET} size={20} />
			</button>
		</div>
	);
}