import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

const Hight_Modal = 150;
const Width = Dimensions.get('window').width;
const SimpleModal = (props) => {
    const closeModal = (bool, data) => {
        props.changeModalVisible(bool);
        props.setData(data);
    }
    return (
        <TouchableOpacity
            disabled={true}
            style={styles.container}
        >
            <View style={styles.modal}>
                <View style={styles.textView}>
                    <Text style={styles.txt}>
                        Sample modal header
                    </Text>
                    <Text style={styles.txt}>
                        Sample modal description
                    </Text>
                </View>
                <View style={styles.buttonsView}>
                    <TouchableOpacity style={styles.touch}
                        onPress={() => closeModal(false)}
                    >
                        <Text style={[styles.txt, { color: 'blue' }]}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch}
                        onPress={() => closeModal(false)}
                    >
                        <Text style={[styles.txt, { color: 'blue' }]}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        height: Hight_Modal,
        paddingTop: 10,
        backgroundColor: '#98bcff',
        borderRadius: 10,
        width: Width - 80,
    },
    txt: {
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold'
    },
    touch: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center'
    },
    buttonsView: {
        width: '100%',
        flexDirection: 'row'
    },
    textView: {
        flex: 1,
        alignItems: 'center'
    }
})
export { SimpleModal };