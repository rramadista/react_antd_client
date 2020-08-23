import React, { useState, useEffect, useContext } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import UserContext from '../../services/user.context';

const InlineLoginForm = () => {
	const { setUserData } = useContext(UserContext);

	const [form] = Form.useForm();

	const [, forceUpdate] = useState(); // To disable submit button at the beginning
	const [loginUserid, setLoginUserid] = useState('');
	const [loginPassword, setLoginPassword] = useState('');

	useEffect(() => {
		forceUpdate({});
	}, []);

	const messageSuccess = (msg) => message.success(msg);
	const messageError = (msg) => message.error(msg);

	const onSubmitLogin = async () => {
		try {
			const loginRes = await fetch('http://localhost:5000/user/login', {
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					id: loginUserid,
					password: loginPassword,
				}),
			}).then((res) => res.json());

			if (loginRes.user) {
				setUserData({
					token: loginRes.accessToken,
					user: loginRes.user,
				});
				localStorage.setItem('auth-token', loginRes.accessToken);

				messageSuccess('Login success');
			} else {
				return messageError(loginRes.msg);
			}
		} catch (err) {
			messageError(err);
		}
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
					onChange={(e) => setLoginUserid(e.target.value)}
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
					onChange={(e) => setLoginPassword(e.target.value)}
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
