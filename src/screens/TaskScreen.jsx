import {
  _View,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';
import Loader from '../components/Loader';
import Error from '../components/Error';
const TaskScreen = () => {
  const {
    tasks,
    loading,
    error,
    removeTask,
    newTaskTitle,
    setNewTaskTitle,
    addTask,
  } = useContext(TaskContext);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={tasks}
            keyExtractor={item =>
              item.id?.toString() || Math.random().toString()
            }
            renderItem={({item}) => (
              <View style={styles.item}>
                <Text style={styles.title}>
                  {item?.title?.length > 20
                    ? item?.title.slice(0, 20) + '...'
                    : item?.title}
                </Text>
                <Button
                  onPress={() => removeTask(item.id)}
                  title="Remove"
                  color={'red'}
                />
              </View>
            )}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={newTaskTitle}
              placeholder="new Task Title"
              onChangeText={setNewTaskTitle}
            />
            <Button title="Add Task" onPress={() => addTask(newTaskTitle)} />
          </View>
        </>
      )}
    </View>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({
  item: {
    padding: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#2f3645',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
    borderRadius: 10,
    shadowColor: '#000',
  },
  input: {
    backgroundColor: '#fff',
    height: 44,
    borderWidth: 1,
    borderRadius: 5,
    width: '75%',
    padding: 5,
    borderColor: '#ccc',
  },
});
