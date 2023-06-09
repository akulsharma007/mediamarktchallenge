import { StyleSheet } from 'react-native';

export const headingStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginLeft: 15,
  },
});

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
    color: '#ffffff',
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
    backgroundColor: '#DF0000',
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontWeight: '500',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export const listStyles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: '#3A3541AD',
    fontWeight: '500',
  },
  content: {
    fontSize: 10,
    fontWeight: '400',
    color: '#3A3541AD',
  },
  rightSection: { flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-end' },
  rightSectionContent: { fontSize: 12, color: '#DF0000', fontWeight: '500' },
});

export const bottomSheet = StyleSheet.create({
  scanIcon: {
    fontSize: 32,
    color: '#df0000',
    margin: 10,
    textAlign: 'center',
  },
});
