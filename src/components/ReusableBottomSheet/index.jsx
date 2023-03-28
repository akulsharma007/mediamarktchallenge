import { Modal, Text, Pressable, View } from 'react-native';
import { styles, footerStyles, headerStyles } from './style';
const ReusableBottomSheet = (props) => {
    const { visible, onClose, children, headerText,footerBtnText,onFooterBtnPress } = props;
    return (
        <Modal animationType="slide" transparent visible={visible}>
            <Pressable style={styles.backdrop} onPress={onClose} />
            <View style={styles.modalContainer}>
                <Text style={styles.headerText}>{headerText}</Text>
                {children}
                <Pressable onPress={onFooterBtnPress} style={footerStyles.buttonContainer}>
                    <Text style={footerStyles.buttonText}>{footerBtnText}</Text>
                </Pressable>
            </View>
        </Modal>
    );
};
export default ReusableBottomSheet;