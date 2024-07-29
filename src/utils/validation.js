export const isEmail = value => {
	return value.includes('@');
};

export const isNotEmpty = value => {
	return value.trim() !== '';
};
