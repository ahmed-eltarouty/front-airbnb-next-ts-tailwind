export const getExplore = async () => {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`);
		const data = await res.json();
		return data;
	} catch (err) {
		console.log(err);
	}
};

export const getLive = async () => {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`);
		const data = await res.json();
		return data;
	} catch (err) {
		console.log(err);
	}
};

export const getSearchResult = async () => {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
		const data = await res.json();
		return data;
	} catch (err) {
		console.log(err);
	}
};
