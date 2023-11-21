import { StyleSheet } from 'react-native';
import {colors} from '../../../styles'

export default styles = StyleSheet.create({
    title: {
        color: colors.text,
        fontWeight: '700',
        fontSize: 24,
        marginBottom: -26,
        marginLeft: 24
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    box: {
        marginTop: 10,
        alignItems: 'center'
    },
    logo:{
        width: 100, 
        height: 100, 
        alignSelf: 'center'
    }
});