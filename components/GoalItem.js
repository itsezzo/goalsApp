import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({text, onDelete, id}) {
    return(
        <View style={styles.gaolItem}>
            <Pressable android_ripple={{color: '#210688'}} onPress={() => onDelete(id)} style={({pressed}) => pressed && styles.pressedItem}>
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    gaolItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
        },
        goalText: {
        color: 'white',
        padding: 8,
        },
        pressedItem: {
            opacity: 0.5,
        }
})