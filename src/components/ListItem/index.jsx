import { Pressable, View } from 'react-native';
import { styles } from './style';

const ListItem = (props) => {
    const { children, onItemPressed } = props;

    return (
        <Pressable onPress={onItemPressed}>
            <View style={styles.itemContainer}>
                {children}
            </View>
        </Pressable>
    )
};

export default ListItem;
