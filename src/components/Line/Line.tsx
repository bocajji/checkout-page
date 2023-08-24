import React from 'react';

interface Props {
	pixelHeight?: number
}

export const Line = ({ pixelHeight = 1 }: Props) => {
	const height = `h-[${pixelHeight}px]`
	return (
		<div className={`bg-borderLight w-full inline-block ${height}`} />
	)
}