import { Image, ImageBackground, ImageSourcePropType, Text, View } from "react-native"

interface Props {
	focused: boolean,
	backgroundImageTab: ImageSourcePropType,
	iconImage: ImageSourcePropType,
	textTab: string
}

export const TabIcon = ({ focused, backgroundImageTab, iconImage, textTab }: Props) => {
	if(focused) {
		return (
			<ImageBackground
				source={ backgroundImageTab }
				className='flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden'
			>
				<Image
					source={ iconImage }
					tintColor={ '#151312' }
					className='size-5'
				/>
				<Text className='text-secondary text-base font-semibold ml-2'>
					{ textTab }
				</Text>
			</ImageBackground>
		)		
	}

	return (
		<View className="size-full justify-center items-center mt-4 rounded-full">
			<Image
				source={ iconImage }
				tintColor={ '#a8b5db' }
				className='size-5'
			/>
		</View>
	)
}