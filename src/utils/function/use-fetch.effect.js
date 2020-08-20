import { useState, useEffect } from 'react';

const useFetchTable = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [pagination, setPagination] = useState({
		current: 1,
		pageSize: 10,
		showTotal: (total, range) =>
			`${range[0]}-${range[1]} of ${total} items`,
	});

	useEffect(() => {
		fetchData({ pagination });
	}, []);

	const handleTableChange = (pagination, filters, sorter) => {
		fetchData({
			sortField: sorter.field,
			sortOrder: sorter.order,
			pagination,
			...filters,
		});
	};

	const fetchData = (params = {}) => {
		setLoading(true);
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setLoading(false);
				setData(data.results);
				setPagination({
					...params.pagination,
					total: data.total,
				});
			})
			.catch((err) => console.log('Fetching error: ', err));
	};

	return { data, loading, pagination, handleTableChange };
};

export default useFetchTable;
