import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'

import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { fetchMovies, updateSearchCount, useFetch } from '@/services'
import { MovieCard, SearchBar } from '@/components'
import { useEffect, useState } from 'react'

const Search = () => {
	const algo: Movie[] = [{
		id: 0,
		title: '',
		adult: false,
		backdrop_path: '',
		genre_ids: [],
		original_language: '',
		original_title: '',
		overview: '',
		popularity: 0,
		poster_path: '',
		release_date: '',
		video: false,
		vote_average: 0,
		vote_count: 0
	}]
	const [searchQuery, setSearchQuery] = useState<string>('')
	const { data: movies, loading: moviesLoading, error: moviesError, refetch: loadMovies, reset } = 
		useFetch<Movie[]>(() => fetchMovies({ query: searchQuery }), false)

	useEffect(() => {
		const timeoutId = setTimeout(async () => {
			if(searchQuery.trim()) {
				await loadMovies()
			}
			else reset()
		}, 500)

		return () => clearTimeout(timeoutId)
	}, [searchQuery])

	useEffect(() => {
		if(movies?.length > 0 && movies?.[0])
			updateSearchCount(searchQuery, movies[0])
	}, [movies])

	return (
		<View className='flex-1 bg-primary'>
			<Image source={images.bg} className='flex-1 absolute w-full z-0' resizeMode='cover'/>
			<FlatList
				data={movies}
				keyExtractor={ (item) => item.id.toString() }
				numColumns={ 3 }
				columnWrapperStyle={{
					justifyContent: 'center',
					gap: 16,
					marginVertical: 16
				}}
				contentContainerStyle={{
					paddingBottom: 100
				}}
				ListEmptyComponent={
					!moviesLoading && !moviesError 
					? (
						<Text className='text-center text-gray-500'>
							{ searchQuery.trim() ? 'No movies found' : 'Search for a movie' }
						</Text>
					)
					: null
				}
				ListHeaderComponent={
					<>
						<View className='w-full flex-row justify-center mt-20 items-center'>
							<Image source={ icons.logo } className='w-12 h-10'  />
						</View>
						<View className='my-5'>
							<SearchBar 
								placeholder='Search movies...' 
								value={ searchQuery }
								onChangeText={ (text: string) => setSearchQuery(text) }
							/>

							{ moviesLoading && (<ActivityIndicator size='large' color='#0000ff' className='my-3' />) }
							{ moviesError && (<Text className='text-red-500 px-5 my-3'>Error: { moviesError.message }</Text>) }
							{ !moviesLoading && !moviesError && searchQuery.trim() && movies?.length! > 0 && (
								<Text className='text-xl text-white font-bold'>
									Search Results for {' '}
									<Text className='text-accent'>{ searchQuery }</Text>
								</Text>
							)}
						</View>
					</>
				}
				renderItem={({ item }) => (
					<MovieCard key={item.id ?? ''} movie={ item } />
				)}
			/>
		</View>
	)
}

export default Search

const styles = StyleSheet.create({})