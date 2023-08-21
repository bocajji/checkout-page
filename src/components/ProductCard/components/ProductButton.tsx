'use client'

import React from 'react';
import { Icon } from '@/components/Icon/Icon';
import { IconType } from '@/components/Icon/icon.types';

interface Props {
	onClick: () => void;
	isDisabled?: boolean
}

export function ProductButton({ onClick, isDisabled}: Props) {
	return (
		<div className="w-full">
			<button
				className="p-2 bg-primary rounded-lg flex justify-center items-center float-right"
				disabled={isDisabled}
				onClick={onClick}
			>
				<span className="text-white">+</span>
				<Icon iconType={IconType.BASKET} size={20} />
			</button>
		</div>
	);
}