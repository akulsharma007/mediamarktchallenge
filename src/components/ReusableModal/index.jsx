import { Modal, Text, Pressable, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles, footerStyles, headerStyles } from './style';
const ReusableModal = (props) => {
    const { visible, onClose, children, footerBtnText, icon } = props;
    return (
        <Modal animationType="fade" transparent visible={visible}>
            <Pressable style={styles.backdrop} onPress={onClose} />
            <View style={styles.modalContainer}>
                <AntDesign name={icon} style={headerStyles.icon} />
                {children}
                <Pressable onPress={onClose} style={footerStyles.buttonContainer}>
                    <Text style={footerStyles.buttonText}>{footerBtnText}</Text>
                </Pressable>
            </View>
        </Modal>
    );
};
export default ReusableModal;