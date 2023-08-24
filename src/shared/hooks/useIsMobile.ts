import { useLayoutEffect, useState } from 'react';

export const useIsMobile = (): boolean => {
	const minDesktopWidth = 910;
	const [isMobile, setIsMobile] = useState(false);
	useLayoutEffect(() => {
		function updateWidth() {
			console.log('called?')
			if (window.innerWidth < minDesktopWidth) {
				setIsMobile(true)
			}

			if (window.innerWidth >= minDesktopWidth) {
				setIsMobile(false);
			}
		}
		window.addEventListener('resize', updateWidth);
		updateWidth();
		return () => window.removeEventListener('resize', updateWidth);
	}, []);
	return isMobile;
}