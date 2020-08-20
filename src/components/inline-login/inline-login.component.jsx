import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const InlineLoginForm = ({ loadUser, onRouteChange, isSignedIn }) => {
	const [form] = Form.useForm();
	const [, forceUpdate] = useState(); // To disable submit button at the beginning
	const [signInUserid, setSignInUserid] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

	useEffect(() => {
		forceUpdate({});
	}, []);

	const onUseridChange = (e) => {
		setSignInUserid(e.target.value);
	};

	const onPasswordChange = (e) => {
		setSignInPassword(e.target.value);
	};

	const onSubmitLogin = () => {
		fetch('http://localhost:5000/user/login', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				id: signInUserid,
				password: signInPassword,
			}),
		})
			.then((res) => res.json())
			.then((user) => {
				if (user.id) {
					loadUser(user);
					onRouteChange('signin');
				}
			});
	};

	return (
		<Form
			form={form}
			name='horizontal_login'
			layout='inline'
			style={{ float: 'right', marginTop: 16 }}
		>
			<Form.Item
				name='id'
				rules={[
					{
						required: true,
						message: 'Please input your userid!',
					},
				]}
			>
				<Input
					prefix={<UserOutlined className='site-form-item-icon' />}
					placeholder='Userid'
					onChange={onUseridChange}
				/>
			</Form.Item>
			<Form.Item
				name='password'
				rules={[
					{
						required: true,
						message: 'Please input your password!',
					},
				]}
			>
				<Input
					prefix={<LockOutlined className='site-form-item-icon' />}
					type='password'
					placeholder='Password'
					onChange={onPasswordChange}
				/>
			</Form.Item>
			<Form.Item shouldUpdate>
				{() => (
					<Button
						type='primary'
						htmlType='submit'
						disabled={
							!form.isFieldsTouched(true) ||
							form
								.getFieldsError()
								.filter(({ errors }) => errors.length).length
						}
						onClick={onSubmitLogin}
					>
						Log In
					</Button>
				)}
			</Form.Item>
		</Form>
	);
};

export default InlineLoginForm;
