import { Pressable, View } from 'react-native';
import { styles } from './style';

const ListItem = (props) => {
    const { children, onItemPressed=()=>{}, isDisabled=false } = props;

    return (
        <Pressable onPress={onItemPressed} disabled={isDisabled}>
            <View style={styles.itemContainer}>
                {children}
            </View>
        </Pressable>
    )
};

export default ListItem;
