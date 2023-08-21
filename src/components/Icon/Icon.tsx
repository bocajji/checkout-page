'use client';

import React, { useEffect, useState } from 'react';
import Add from '../../../public/add.svg';
import Subtract from '../../../public/subtract.svg';
import Basket from '../../../public/Basket.svg';
import Trash from '../../../public/trash.svg';
import { IconType } from '@/components/Icon/icon.types';
import Image from 'next/image';

const Icons: Record<IconType, any> =  {
	[IconType.ADD]: Add,
	[IconType.BASKET]: Basket,
	[IconType.SUBTRACT]: Subtract,
	[IconType.TRASH]: Trash
}

interface Props {
	iconType: IconType;
	size?: number;
	alt?: string;
	color?: string;
}

export function Icon({ iconType, size = 16, alt, color = 'white' }: Props) {
	const [source, setSource] = useState();

	useEffect(() => {
		setSource(Icons[iconType]);
	}, [iconType])
	return (
	 <div>
		 {source && <Image
			 src={source}
			 height={size}
			 width={size}
			 alt={alt || iconType}
		 />}
	 </div>
	)
}