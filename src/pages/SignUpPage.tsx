import React, { FC } from 'react';

import { SignUpForm } from '@/components/auth/SignUpForm';

type SignUpPageProps = {};

const SignUpPage: FC<SignUpPageProps> = ({}) => {
	return (
		<div className="flex flex-col justify-center items-center h-full mt-[-10px] w-[80%] md:w-[50%] lg:w-[35%] xl:w-[30%]">
			<SignUpForm />
		</div>
	);
};

export default SignUpPage;
