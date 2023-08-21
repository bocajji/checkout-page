import React  from 'react';
import Add from '../../../public/add.svg';
import Subtract from '../../../public/subtract.svg';
import Basket from '../../../public/Basket.svg';
import Trash from '../../../public/trash.svg';
import { IconType } from '@/components/Icon/icon.types';

const Icons: Record<IconType, string> =  {
	[IconType.ADD]: Add,
	[IconType.BASKET]: Basket,
	[IconType.SUBTRACT]: Subtract,
	[IconType.TRASH]: Trash
}

interface Props {
	iconType: IconType;
	size?: number;
	alt?: string
}

export function Icon({ iconType, size = 16, alt }: Props) {
 return (
	 <div>
		 <img src={Icons[IconType]} height={size} width={size} alt={alt || iconType} />
	 </div>
 )
}