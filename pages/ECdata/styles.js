import { StyleSheet } from "react-native";

export default StyleSheet.create({
    index: {
        marginBottom: 20,
        backgroundColor: '#04285c',
    },
    index_panel_header: {
        padding: 20,
    },
    index_panel_title: {
        color: '#fff',
        fontSize: 24,
    },
    index_panel_content: {
        marginBottom: 20,
    },
    sale_item:  {
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        flex: 1,
        marginLeft: 40
    },
    sale_item_cell:  {
        flex: 1,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sale_item_text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    sale_item_num: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#d9e791',
    },
    num: {
        flex: 2,
        alignItems: 'flex-end',
    },
    unit: {
        marginLeft: 10,
        alignItems: 'flex-start',
    }
})
