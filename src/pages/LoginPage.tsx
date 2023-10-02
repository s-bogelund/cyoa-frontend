import { LoginForm } from '@/components/login/LoginForm';
import React, { FC } from 'react';

type LoginPageProps = {};

const LoginPage: FC<LoginPageProps> = ({}) => {
	return (
		<div className="flex flex-col h-full justify-center items-center mt-[-10px] w-[80%] md:w-[50%] lg:w-[35%] xl:w-[30%]">
			<LoginForm />
		</div>
	);
};

export default LoginPage;
