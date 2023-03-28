import { StyleSheet } from 'react-native';

export const dropdownStyles = StyleSheet.create({
    container: {
        width: '100%'
      },
      selectedItem: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
      },
      dropdown: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
      },
      dropdownContent: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        width: '80%'
      },
      item: {
        padding: 10
      },
      itemText: {
        fontSize: 16,
        textAlign: 'center',
      },
  });