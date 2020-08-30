import useSearchColumn from '../../utils/function/use-search.state';

const useGetColumns = () => {
	const { getColumnSearchProps } = useSearchColumn();

	const columns = [
		{
			title: 'User ID',
			dataIndex: 'id',
			key: 'id',
			...getColumnSearchProps('id'),
		},
		{
			title: 'User Name',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
		},
		{
			title: 'Role',
			dataIndex: 'role',
			key: 'role',
		},
	];

	return columns;
};

export default useGetColumns;
