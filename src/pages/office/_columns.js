import React from 'react';
import { Space, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import useSearchColumn from '../../utils/function/use-search.state';

const useGetColumns = () => {
	const { getColumnSearchProps } = useSearchColumn();

	const columns = [
		{
			title: 'Office Name',
			dataIndex: 'name',
			key: 'name',
			...getColumnSearchProps('name'),
		},
		{
			title: 'Branch Code',
			dataIndex: 'id',
			key: 'id',
			render: (text) => <>{text.toString().padStart(3, '0')}</>,
		},
		{
			title: 'Address',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: 'Province',
			dataIndex: 'province',
			key: 'province',
			...getColumnSearchProps('province'),
		},
		{
			title: 'City',
			dataIndex: 'city',
			key: 'city',
			...getColumnSearchProps('city'),
		},
		{
			title: 'District',
			dataIndex: 'district',
			key: 'district',
			...getColumnSearchProps('district'),
		},
		{
			title: 'Village',
			dataIndex: 'village',
			key: 'village',
			...getColumnSearchProps('village'),
		},
		{
			title: 'Action',
			key: 'action',
			render: (text, record) => (
				<Space>
					<Button icon={<EditOutlined />}>Edit</Button>
					<Button icon={<DeleteOutlined />} danger>
						Delete
					</Button>
				</Space>
			),
		},
	];

	return columns;
};

export default useGetColumns;
