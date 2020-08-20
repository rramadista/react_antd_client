import React, { useState } from 'react';
import { Space, Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const useSearchColumn = () => {
	const [, setSearchText] = useState('');
	const [, setSearchedColumn] = useState('');

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
					style={{ width: 178, marginBottom: 8, display: 'block' }}
				/>
				<Space>
					<Button
						type='primary'
						size='small'
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

	return { getColumnSearchProps };
};

export default useSearchColumn;
