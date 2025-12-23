import React from 'react';
import { Tabs } from 'expo-router';

import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { TabIcon } from '@/components';

const _layout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarItemStyle: {
					width: '100%',
					height: '100%',
					justifyContent: 'center',
					alignItems: 'center'
				},
				tabBarStyle: {
					backgroundColor: '#0f0d23',
					borderRadius: 50,
					marginHorizontal: 12,
					marginBottom: 36,
					height: 50,
					position: 'absolute',
					overflow: 'hidden',
					borderWidth: 1,
					borderColor: '#0f0d23'
				}
			}}
		>
			<Tabs.Screen 
				name='index'
				options={{ 
					title: 'Home', 
					headerShown: false, 
					tabBarIcon: ({focused}) => (
						<>
							<TabIcon
								focused={ focused }
								backgroundImageTab={ images.highlight } 
								iconImage={ icons.home } 
								textTab='Home'  
							/>
						</>
					) 
				}}
			/>
			<Tabs.Screen 
				name='search'
				options={{ 
					title: 'Search', 
					headerShown: false, 
					tabBarIcon: ({focused}) => (
						<>
							<TabIcon
								focused={ focused }
								backgroundImageTab={ images.highlight } 
								iconImage={ icons.search } 
								textTab='Search'  
							/>
						</>
					)
				 }}
			/>
			<Tabs.Screen 
				name='saved'
				options={{ 
					title: 'Saved', 
					headerShown: false, 
					tabBarIcon: ({focused}) => (
						<>
							<TabIcon
								focused={ focused }
								backgroundImageTab={ images.highlight } 
								iconImage={ icons.save } 
								textTab='Saved'  
							/>
						</>
					) 
				}}
			/>
			<Tabs.Screen 
				name='profile'
				options={{ 
					title: 'Profile', 
					headerShown: false, 
					tabBarIcon: ({focused}) => (
						<>
							<TabIcon
								focused={ focused }
								backgroundImageTab={ images.highlight } 
								iconImage={ icons.person } 
								textTab='Profile'  
							/>
						</>
					) 
				}}
			/>
		</Tabs>
	)
}

export default _layout