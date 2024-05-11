import { useState } from "react";
import { StyleSheet, Button, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

let i = 0;
export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [modelIsVisible, setModelIsVisible] = useState(false);

  function handleGoalAdded(enteredGoal) {
    i++;
    setGoalsList(prevList => [...prevList, {text: enteredGoal, key: i}]);
    setModelIsVisible(false);
  };

  function hadleDeleting(id) {
    setGoalsList(prevList => {
      return prevList.filter(goal => goal.key !== id);
    })
  }

  function handleModelVisiablity() {
    i++;
    setModelIsVisible(true);
  }

  
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal!" color='#5e0acc' onPress={handleModelVisiablity}/>
        <GoalInput buttonPress={handleGoalAdded} isVisible={modelIsVisible} onCanceling={() => setModelIsVisible(false)}/>
        <View style={styles.goalsContainer}>
          <FlatList data={goalsList} renderItem={itemData => {
            return(
              <GoalItem text={itemData.item.text} onDelete={hadleDeleting} id={itemData.item.key} />
            );
          }} 
          // keyExtractor={(item, inedx) => // here takes two parameter u could use one return item.key // or item.id}
          />
          {/* <ScrollView>
            {goalsList.map((item, indx) => (
            <View style={styles.gaolItem} key={indx}>
              <Text style={styles.goalText}>{item}</Text>
            </View>))}
          </ScrollView> */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  goalsContainer: {
    flex: 6
  },
});
