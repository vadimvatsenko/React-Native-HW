import { TouchableOpacity, Text } from "react-native";
import { styles } from './MainBtnStyled';

export const MainBtn = ({title, handleSubmit}) => {
    return (
        <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.7}
            onPress={handleSubmit}
        >
            <Text
                style={styles.btnText}>{title}</Text>

        </TouchableOpacity>
    );
}





