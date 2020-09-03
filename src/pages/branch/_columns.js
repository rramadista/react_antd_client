import React from 'react';
import moment from 'moment';
import { Tag } from 'antd';

import useSearchColumn from '../../utils/function/use-search.state';
import TableActionButton from '../../components/table-action-button/table-action-button.component';

const useGetColumns = () => {
	const { getColumnSearchProps } = useSearchColumn();

	const columns = [
		{
			title: 'Branch Name',
			dataIndex: 'name',
			key: 'name',
			...getColumnSearchProps('name'),
		},
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
			render: (tag) => {
				let color = '';
				switch (tag) {
					case 'KC':
						color = 'red';
						break;
					case 'KCP':
						color = 'green';
						break;
					case 'KK':
						color = 'gold';
						break;
					case 'KF':
						color = 'purple';
						break;
					case 'Kanwil':
						color = 'blue';
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
			title: 'Branch Code',
			dataIndex: 'id',
			key: 'id',
			render: (text) => <>{text.toString().padStart(3, '0')}</>,
			...getColumnSearchProps('id'),
		},
		{
			title: 'Branch Type',
			dataIndex: 'branch_type',
			key: 'branch_type',
			responsive: ['xl'],
		},
		{
			title: 'Branch Class',
			dataIndex: 'branch_class',
			key: 'branch_class',
			responsive: ['xl'],
		},
		{
			title: 'Regional',
			dataIndex: 'regional',
			key: 'regional',
		},
		{
			title: 'Area',
			dataIndex: 'area',
			key: 'area',
		},
		{
			title: 'Start Date',
			dataIndex: 'startdate',
			key: 'startdate',
			render: (text) => <>{moment(text).format('ll')}</>,
			responsive: ['xl'],
		},
		{
			title: 'Action',
			key: 'action',
			render: (text, record) => <TableActionButton />,
			responsive: ['xl'],
		},
	];

	return columns;
};

export default useGetColumns;
