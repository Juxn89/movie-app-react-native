export const formatMount = (value: number) => {
		if (value < 1000) {
			return value.toString();
		} else if (value < 1_000_000) {
			return (value / 1000).toFixed(value % 1000 === 0 ? 0 : 1).replace(/\.0$/, '') + 'K';
		} else if (value < 1_000_000_000) {
			return (value / 1_000_000).toFixed(value % 1_000_000 === 0 ? 0 : 1).replace(/\.0$/, '') + 'M';
		} else {
			return (value / 1_000_000_000).toFixed(value % 1_000_000_000 === 0 ? 0 : 1).replace(/\.0$/, '') + 'B';
		}
	};