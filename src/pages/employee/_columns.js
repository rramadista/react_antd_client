import React from 'react';
import moment from 'moment';
import { Space, Button, Tag } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import useSearchColumn from '../../utils/function/use-search.state';

const useGetColumns = () => {
	const { getColumnSearchProps } = useSearchColumn();

	const columns = [
		{
			title: 'Employee ID',
			dataIndex: 'id',
			key: 'id',
			...getColumnSearchProps('id'),
		},
		{
			title: 'Employee Name',
			dataIndex: 'name',
			key: 'name',
			...getColumnSearchProps('name'),
		},
		{
			title: 'Sex',
			dataIndex: 'sex',
			key: 'sex',
			render: (tag) => {
				let color = '';
				switch (tag) {
					case 'M':
						color = 'blue';
						break;
					case 'F':
						color = 'red';
						break;
					default:
						color = 'grey';
				}
				return (
					<Tag color={color} key={tag}>
						{tag.toUpperCase()}
					</Tag>
				);
			},
			responsive: ['xl'],
		},
		{
			title: 'Birth Date',
			dataIndex: 'birthdate',
			key: 'birthdate',
			render: (text) => <>{moment(text).format('ll')}</>,
			sorter: (a, b) => a.birthdate - b.birthdate,
			responsive: ['xl'],
		},
		{
			title: 'Start Date',
			dataIndex: 'startdate',
			key: 'startdate',
			render: (text) => <>{moment(text).format('ll')}</>,
			sorter: (a, b) => a.startdate - b.startdate,
			responsive: ['xl'],
		},
		{
			title: 'End Date',
			dataIndex: 'enddate',
			key: 'enddate',
			render: (text) => {
				if (text === null) return <Tag color={'green'}>ACTIVE</Tag>;
				else return <>{moment(text).format('ll')}</>;
			},
			sorter: (a, b) => a.enddate - b.enddate,
			responsive: ['xl'],
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
			responsive: ['xl'],
		},
	];

	return columns;
};

export default useGetColumns;
