import { TextInput } from 'react-native';

import { style } from './style';

const CustomTextInput = (props) => {
  const { placeholder, onChangeHandler } = props;

  return <TextInput placeholder={placeholder} style={style.input} onChangeText={onChangeHandler} />;
};

export default CustomTextInput;
