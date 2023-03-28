import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    icon: {
        padding: 15,
        backgroundColor: '#df0000',
        borderRadius: 50,
        fontSize: 24,
        color: "#ffffff"
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 22,
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        width: '100%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 10,
        elevation: 2,
        backgroundColor: "#DF0000",
        width: '100%',
        height: 48,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export const dropdownStyles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 20,
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