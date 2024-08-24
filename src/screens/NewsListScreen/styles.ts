import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  sourceName: {
    fontWeight: 'bold',
    color: '#F44336', // Color similar to the Times of India logo
  },
  time: {
    color: '#777',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  author: {
    color: '#333',
  },
  rowFront: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: 'red',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'blue',
    right: 0,
  },
  backTextWhite: {
    color: '#FFF',
  },
});
