import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

export default function GoalInput({buttonPress, isVisible, onCanceling}) {
    const [enteredGoal, setEnteredGoal] = useState('');
      
    function handleInputs(enteredText) {
        setEnteredGoal(enteredText);
    };

    function handleGoalAdded() {
        buttonPress(enteredGoal);
        setEnteredGoal('');
    }


    return (
      <Modal visible={isVisible} animationType="slide">
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('../assets/images/goal.png')} />
          <TextInput
            style={styles.textInput}
            placeholder="Your Goal is..!!"
            onChangeText={handleInputs}
            value={enteredGoal}
          />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Cancel" onPress={onCanceling} color="#f31282"/>
                </View>
                <View style={styles.button}>
                    <Button title="Add Goal" onPress={handleGoalAdded} color="#5e0aaa" />
                </View>
            </View>
        </View>
      </Modal>
    );
}


const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 16,
    padding: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: '#cccccc',
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    // marginRight: 5,
    padding: 5,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
})