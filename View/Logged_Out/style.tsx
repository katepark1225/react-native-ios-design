import { StyleSheet } from 'react-native'
import { fontSize } from '../../global'

const style = StyleSheet.create({
    chart_container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 40,
        marginTop: 20
    },
    chart_pair: {
        marginHorizontal: 10,
        flexDirection: 'row'
    },
    chart: {

    },
    chart_txt_wrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    chart_txt: {
        color: 'black',
        fontSize: fontSize(0.6),
        textAlign: 'center',
        marginBottom: 3,
        // flex: 1,
        // textAlignVertical: 'bottom'  -- Android-specific property !
    },
    bar: {
        width: fontSize(2),
        marginHorizontal: 5,
        borderRadius: 10
    },
    oppo_bar: {
        backgroundColor: '#27296d'
    },
    lead_bar: {
        backgroundColor: '#a393eb'
    },
})

export default style
