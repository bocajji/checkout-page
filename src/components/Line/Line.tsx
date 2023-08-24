'use client'

import React, { useEffect, useState } from 'react';

interface Props {
	pixelHeight?: number
}

export const Line = ({ pixelHeight = 1 }: Props) => {
	const [height, setHeight] = useState<number | undefined>(1);
	useEffect(() => {
		setHeight(pixelHeight)
	}, [pixelHeight])
	return (
		<div className={`bg-borderLight w-full inline-block h-[${height}px]`} />
	)
}