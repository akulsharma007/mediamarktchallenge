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
  subTitle: {
    fontSize: 10,
    fontWeight: '400',
    color: 'rgba(58, 53, 65, 0.87)',
    marginTop: 11,
  },
});

export const listStyles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    justifyContent: 'space-between',
  },
  leftSection: { flexDirection: 'row', alignItems: 'center' },
  contentContainer: { justifyContent: 'space-evenly', margin: 15 },
  icon: {
    padding: 15,
    backgroundColor: 'rgba(223, 0, 0, 0.1)',
    borderRadius: 10,
    fontSize: 24,
    color: '#df0000',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
  },
  content: {
    fontSize: 10,
    fontWeight: '400',
    color: 'rgba(58, 53, 65, 0.87)',
  },
  rightSection: { color: '#DF0000', fontWeight: '500', fontSize: 10 },
});

export const footerStyles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    backgroundColor: '#DF0000',
    alignItems: 'center',
    padding: 20,
    boxShadow: '0px 4px 8px -4px rgba(58, 53, 65, 0.42)',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
  },
});
