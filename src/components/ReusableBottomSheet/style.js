import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: 'center',
  },
});
export const footerStyles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    backgroundColor: '#DF0000',
    alignItems: 'center',
    padding: 20,
    boxShadow: '0px 4px 8px -4px rgba(58, 53, 65, 0.42)',
    borderRadius: 5,
    marginTop: 35,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
  },
});
export const headerStyles = StyleSheet.create({
  icon: {
    fontSize: 48,
    color: '#DF0000',
    marginBottom: 20,
  },
});
