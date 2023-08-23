'use client'

import React from 'react';
import { Icon } from '@/components/Icon/Icon';
import { IconType } from '@/components/Icon/icon.types';

interface Props {
	count: number;
	isLeftDisabled?: boolean;
	isRightDisabled?: boolean;
	onLeftClick: () => void;
	onRightClick: () => void;
}

export function Incrementer({ count, onRightClick, onLeftClick, isRightDisabled, isLeftDisabled }: Props) {
	return (
		<div
			data-testid="incrementer"
			className="w-[106px] border-[1px] border-borderLight rounded-lg flex justify-between px-4 py-2.5"
		>
			<button data-testid="incrementer-remove" onClick={onLeftClick} disabled={isLeftDisabled}>
				<Icon iconType={IconType.SUBTRACT} size={24} />
			</button>
			<p className="text-[22px] font-medium text-secondaryDark">{count}</p>
			<button data-testid="incrementer-add" onClick={onRightClick} disabled={isRightDisabled}>
				<Icon iconType={IconType.ADD} size={24} />
			</button>
		</div>
	)
}