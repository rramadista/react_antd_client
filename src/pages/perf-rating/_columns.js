import useSearchColumn from '../../utils/function/use-search.state';

const useGetColumns = () => {
	const { getColumnSearchProps } = useSearchColumn();
	const columns = [
		{
			title: 'Emp ID',
			dataIndex: 'id',
			key: 'id',
			...getColumnSearchProps('id'),
		},
		{
			title: 'Emp Name',
			dataIndex: 'name',
			key: 'name',
			responsive: ['md'],
			...getColumnSearchProps('name'),
		},
		{
			title: '2009',
			dataIndex: 'pa2009',
			key: 'pa2009',
			sorter: (a, b) => a.pa2009 - b.pa2009,
			responsive: ['xl'],
		},
		{
			title: '2010',
			dataIndex: 'pa2010',
			key: 'pa2010',
			sorter: (a, b) => a.pa2010 - b.pa2010,
			responsive: ['xl'],
		},
		{
			title: '2011',
			dataIndex: 'pa2011',
			key: 'pa2011',
			sorter: (a, b) => a.pa2011 - b.pa2011,
			responsive: ['xl'],
		},
		{
			title: '2012',
			dataIndex: 'pa2012',
			key: 'pa2012',
			sorter: (a, b) => a.pa2012 - b.pa2012,
			responsive: ['lg'],
		},
		{
			title: '2013',
			dataIndex: 'pa2013',
			key: 'pa2013',
			sorter: (a, b) => a.pa2013 - b.pa2013,
			responsive: ['lg'],
		},
		{
			title: '2014',
			dataIndex: 'pa2014',
			key: 'pa2014',
			sorter: (a, b) => a.pa2014 - b.pa2014,
			responsive: ['lg'],
		},
		{
			title: '2015',
			dataIndex: 'pa2015',
			key: 'pa2015',
			sorter: (a, b) => a.pa2015 - b.pa2015,
			responsive: ['md'],
		},
		{
			title: '2016',
			dataIndex: 'pa2016',
			key: 'pa2016',
			sorter: (a, b) => a.pa2016 - b.pa2016,
			responsive: ['md'],
		},
		{
			title: '2017',
			dataIndex: 'pa2017',
			key: 'pa2017',
			sorter: (a, b) => a.pa2017 - b.pa2017,
			responsive: ['sm'],
		},
		{
			title: '2018',
			dataIndex: 'pa2018',
			key: 'pa2018',
			sorter: (a, b) => a.pa2018 - b.pa2018,
			responsive: ['sm'],
		},
		{
			title: '2019',
			dataIndex: 'pa2019',
			key: 'pa2019',
			sorter: (a, b) => a.pa2019 - b.pa2019,
		},
	];
	return columns;
};

export default useGetColumns;
