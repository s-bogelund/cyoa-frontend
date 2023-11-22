import { gql, useQuery } from '@apollo/client';
import React, { FC, useEffect } from 'react';

import GET_USERS from '@/api/queries/getUser';
import { LoginForm } from '@/components/auth/LoginForm';
type LoginPageProps = {};

const LoginPage: FC<LoginPageProps> = ({}) => {
	const { loading, error, data } = useQuery(GET_USERS);

	useEffect(() => {
		if (data) {
			console.log(data);
		}
	}, [data]);

	return (
		<div className="flex flex-col h-full justify-center items-center mt-[-10px] w-[80%] md:w-[50%] lg:w-[35%] xl:w-[30%]">
			<LoginForm />
		</div>
	);
};

export default LoginPage;
