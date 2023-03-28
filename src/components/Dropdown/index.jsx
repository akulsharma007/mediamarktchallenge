import { FlatList, Modal, Pressable, Text, View } from 'react-native';

import { dropdownStyles } from './style';

const CustomDropdown = (props) => {
  const {
    setIsDropdownVisible,
    isDropdownVisible,
    items,
    setSelectedItem,
    selectedItem,
    placeholder,
  } = props;

  return (
    <View style={dropdownStyles.container}>
      <Pressable style={dropdownStyles.selectedItem} onPress={() => setIsDropdownVisible(true)}>
        <Text>{selectedItem ? selectedItem.label : placeholder}</Text>
      </Pressable>
      <Modal visible={isDropdownVisible} animationType="slide" transparent>
        <Pressable
          style={dropdownStyles.dropdown}
          activeOpacity={1}
          onPress={() => setIsDropdownVisible(false)}>
          <View style={dropdownStyles.dropdownContent}>
            <FlatList
              data={items}
              renderItem={({ item }) => (
                <Pressable
                  style={dropdownStyles.item}
                  onPress={() => {
                    setSelectedItem(item);
                    setIsDropdownVisible(false);
                  }}>
                  <Text style={dropdownStyles.itemText}>{item.label}</Text>
                </Pressable>
              )}
              keyExtractor={(item) => item.value.toString()}
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default CustomDropdown;
