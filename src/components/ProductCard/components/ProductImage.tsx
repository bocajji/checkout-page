import React from 'react';
import Image from 'next/image';

interface Props {
	url: string;
	alt: string;
}

export function ProductImage({ url, alt }: Props) {
	return <div className="w-full items-center">
		<Image
			src={url}
			alt={alt}
			width={180}
			height={180}
		/>
	</div>
}