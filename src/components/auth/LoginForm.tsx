'use client';

import * as React from 'react';

import { Icons } from '@/components/icons/Icons';
// import { Icons } from '@/components/icons';
import { Input } from '@/components/shadcn/ui/input';
import { Label } from '@/components/shadcn/ui/label';
import { cn } from '@/lib/utils';

import { Button } from '../shadcn/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../shadcn/ui/card';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginForm({ className, ...props }: UserAuthFormProps) {
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	async function onSubmit(event: React.SyntheticEvent) {
		event.preventDefault();
		setIsLoading(true);

		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}

	return (
		<Card className={cn('w-full', className)} {...props}>
			<CardHeader className="space-y-1">
				<CardTitle className="text-2xl">Sign In</CardTitle>
				<CardDescription>Enter your email and password</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				<form onSubmit={onSubmit}>
					<div className="grid gap-2">
						<div className="grid gap-1">
							<Label className="sr-only" htmlFor="email">
								Email
							</Label>
							<Input
								id="email"
								placeholder="name@example.com"
								type="email"
								autoCapitalize="none"
								autoComplete="email"
								autoCorrect="off"
								disabled={isLoading}
							/>
						</div>
						<div className="grid gap-1">
							<Label className="sr-only" htmlFor="password">
								Password
							</Label>
							<Input
								id="password"
								placeholder="Password"
								type="password"
								autoCapitalize="none"
								autoComplete="password"
								autoCorrect="off"
								disabled={isLoading}
							/>
						</div>
						<Button disabled={isLoading}>
							{isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
							Sign In with Email
						</Button>
					</div>
				</form>
				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<span className="w-full border-t" />
					</div>
					<div className="relative flex justify-center text-xs uppercase">
						<span className="bg-background px-2 text-muted-foreground">Or continue with</span>
					</div>
				</div>
				<Button variant="outline" type="button" disabled={isLoading}>
					{isLoading ? (
						<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
					) : (
						<Icons.google className="mr-2 h-4 w-4" />
					)}{' '}
					Google
				</Button>
			</CardContent>
		</Card>
	);
}
