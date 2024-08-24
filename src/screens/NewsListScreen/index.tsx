import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {AppState} from '../../store/store';
import {
  DELETE_HEADLINE,
  PIN_HEADLINE,
  ADD_HEADLINE,
} from '../../store/action/newsActions';
import {styles} from './styles';

const NewsList: React.FC = () => {
  const dispatch = useDispatch();
  const {headlines, lastHeadlineShown, pageNumber, pinnedHeadlines} =
    useSelector((state: AppState) => state.news);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (lastHeadlineShown >= headlines.length) {
      fetchNewHeadlines();
    }
  }, [lastHeadlineShown]);
  const fetchNewHeadlines = () => {
    dispatch({type: 'FETCH_HEADLINES_REQUEST', pageNumber});
    setIsLoading(false);
  };

  useEffect(() => {
    const subscribe = setInterval(() => {
      handleAddHeadLine(5);
    }, 5000);

    return () => clearInterval(subscribe);
  }, [lastHeadlineShown]);

  const handleAddHeadLine = (count: number) => {
    if (lastHeadlineShown <= headlines.length) {
      dispatch({type: ADD_HEADLINE, payload: count});
    }
  };

  const handleDelete = (index: number) => {
    dispatch({type: DELETE_HEADLINE, payload: index});
  };

  const handlePin = (index: number) => {
    dispatch({type: PIN_HEADLINE, payload: index});
  };

  const renderItem = ({item, index}: {item: any; index: number}) => (
    <View style={styles.rowFront}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.sourceName}>{item?.source?.name}</Text>
          <Text style={styles.time}>
            {new Date(item?.publishedAt).toLocaleTimeString()}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>{item?.title}</Text>
          {item?.urlToImage ? (
            <Image source={{uri: item?.urlToImage}} style={styles.image} />
          ) : (
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
              }}
              style={styles.image}
            />
          )}
        </View>
        <View style={styles.footer}>
          <Text style={styles.author}>{item?.author}</Text>
        </View>
      </View>
    </View>
  );

  const renderHiddenItem = ({index}: {index: number}) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => handleDelete(index)}>
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => handlePin(index)}>
        <Text style={styles.backTextWhite}>Pin</Text>
      </TouchableOpacity>
    </View>
  );

  const displayedHeadlines = headlines?.slice(0, lastHeadlineShown);

  const handleOnRefresh = () => {
    setIsRefreshing(true);
    handleAddHeadLine(5);
    setIsRefreshing(false);
  };
  return (
    <SwipeListView
      useFlatList={true}
      data={displayedHeadlines}
      extraData={lastHeadlineShown}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      rightOpenValue={-150}
      keyExtractor={(item, index) => index.toString()}
      refreshing={isRefreshing}
      onRefresh={handleOnRefresh}
    />
  );
};

export default NewsList;
