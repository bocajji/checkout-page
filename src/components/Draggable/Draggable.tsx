'use client';

import React, { useEffect, useState } from 'react';
import { Line } from '@/components/Line/Line';

interface Props {
	onClick: () => void;
	displayContent: boolean;
}

export function Draggable({ onClick, children, displayContent }: Props) {
	const [overFlow, setOverFlow] = useState('overflow-hidden')
	useEffect(() => {
		if (displayContent) {
			setOverFlow('overflow-y-scroll')
		} else {
			setOverFlow('overflow-hidden')
		}
	}, [displayContent])

	return (
		<div>
			<div
				className={`w-full ${overFlow} transition-[height] ease-in-out duration-500 max-h-[90vh]`}
				onDrag={onClick}
				onClick={onClick}
			>
				<div className="flex justify-center items-center">
					<button onClick={onClick} className="w-[60px] h-[20px]">
						<Line pixelHeight={4} />
					</button>
				</div>
			</div>
			<div className="w-full">
				{displayContent ? children : null}
			</div>
		</div>
	)
}