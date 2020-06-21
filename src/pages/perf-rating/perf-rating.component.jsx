import React, { useEffect, useState } from 'react';
import { Table, Input, Space, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const PerfRatingList = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
	const [searchText, setSearchText] = useState('');
	const [searchedColumn, setSearchedColumn] = useState('');

	useEffect(() => {
		fetchData({ pagination });
	}, [pagination.current, pagination.pageSize]);

	const handleTableChange = (pagination, filters, sorter) => {
		fetchData({
			sortField: sorter.field,
			sortOrder: sorter.order,
			pagination,
			...filters,
		});
		console.log('Various parameters', pagination, filters, sorter);
		console.log(pagination.current);
		console.log(pagination.pageSize);
		console.log(filters);
		console.log(sorter);
	};

	const fetchData = (params = {}) => {
		setLoading(true);
		fetch(
			`http://localhost:5000/pa_rating?page=${pagination.current}&per_page=${pagination.pageSize}`
		)
			.then((res) => res.json())
			.then(
				(data) => {
					setLoading(false);
					setData(data.results);
					setPagination({
						...params.pagination,
						total: data.total,
					});
				},
				(err) => {
					console.log('Error fetching data');
				}
			);
	};

	const getColumnSearchProps = (dataIndex) => ({
		filterDropdown: ({
			setSelectedKeys,
			selectedKeys,
			confirm,
			clearFilters,
		}) => (
			<div style={{ padding: 8 }}>
				<Input
					placeholder={`Search ${dataIndex}`}
					value={selectedKeys[0]}
					onChange={(e) =>
						setSelectedKeys(e.target.value ? [e.target.value] : [])
					}
					onPressEnter={() =>
						handleSearch(selectedKeys, confirm, dataIndex)
					}
					style={{ width: 188, marginBottom: 8, display: 'block' }}
				/>
				<Space>
					<Button
						type='primary'
						onClick={() =>
							handleSearch(selectedKeys, confirm, dataIndex)
						}
						icon={<SearchOutlined />}
					>
						Search
					</Button>
					<Button
						onClick={() => handleReset(clearFilters)}
						size='small'
						style={{ width: 90 }}
					>
						Reset
					</Button>
				</Space>
			</div>
		),
		filterIcon: (filtered) => (
			<SearchOutlined
				style={{ color: filtered ? '#1890ff' : undefined }}
			/>
		),
		onFilter: (value, record) =>
			record[dataIndex]
				.toString()
				.toLowerCase()
				.includes(value.toLowerCase()),
	});

	const handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm();
		setSearchText(selectedKeys[0]);
		setSearchedColumn(dataIndex);
	};

	const handleReset = (clearFilters) => {
		clearFilters();
		setSearchText('');
	};

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

	return (
		<>
			<Table
				dataSource={data}
				columns={columns}
				rowKey={(record) => record.id}
				pagination={pagination}
				loading={loading}
				onChange={handleTableChange}
				size='small'
			/>
		</>
	);
};

export default PerfRatingList;
