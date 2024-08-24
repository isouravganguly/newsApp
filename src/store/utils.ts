import AsyncStorage from '@react-native-async-storage/async-storage';
export const storeDataInLocalStorage = async (response: any) => {
  try {
    const jsonValue = JSON.stringify(response);
    await AsyncStorage.setItem('newsData', jsonValue);
  } catch (e) {
    // saving error
    console.error({SavingLocal_ErrorLog: e});
  }
};
export const retrieveDataInLocalStorage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('newsData');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.error({RetrieveLocal_ErrorLog: e});
  }
};
