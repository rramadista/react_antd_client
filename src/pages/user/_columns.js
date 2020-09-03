import React from 'react';
import TableActionButton from '../../components/table-action-button/table-action-button.component';
import useSearchColumn from '../../utils/function/use-search.state';

const useGetColumns = () => {
	const { getColumnSearchProps } = useSearchColumn();

	const columns = [
		{
			title: 'User ID',
			dataIndex: 'id',
			key: 'id',
			...getColumnSearchProps('id'),
			width: 150,
		},
		{
			title: 'User Name',
			dataIndex: 'name',
			key: 'name',
			width: 300,
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
			width: 300,
		},
		{
			title: 'Role',
			dataIndex: 'role',
			key: 'role',
		},
		{
			title: 'Action',
			key: 'action',
			render: (text, record) => <TableActionButton />,
		},
	];

	return columns;
};

export default useGetColumns;
