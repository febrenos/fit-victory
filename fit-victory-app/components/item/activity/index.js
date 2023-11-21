import { useState, useContext } from 'react';
import { Button, Text, TextInput, View, TouchableHighlight, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles, colors } from '../../../styles';
import { ActivityContext, ButtonPrimary } from '../../index';

export const ActivityItem = ({ item }) => {
    const { del, edit, load } = useContext(ActivityContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditedTitle] = useState(item.title);
    const [editedDate, setEditedDate] = useState(item.date);
    const [editDuration, setEditDuration] = useState(item.duration);
    const [editDescription, setEditDescription] = useState(item.description);
  
    const handleEditPress = () => {
      setIsEditing(!isEditing);
    };
  
    const handleSavePress = () => {
      const editedItem = {
        title: editTitle,
        date: editedDate,
        duration: editDuration,
        description: editDescription,
      };
  
      // Use the edit function directly from the context
      edit(item.id, editedItem)
        .then(() => {
          // Reload the list after editing is successful
          load();
        })
        .catch((error) => {
          console.error('Error editing instrument:', error);
          // Handle the error appropriately, e.g., show an error message
        });
  
      setIsEditing(false);
    };
  
    return (
      <View style={{ flex: 1, flexDirection: "row", backgroundColor: "white", borderRadius: 10, padding: 10, margin: 10 }}>
        {isEditing ? (
          <View style={{ flex: 7 }}>
            <TextInput
              value={editTitle}
              onChangeText={setEditedTitle}
              placeholder="Title"
              style={globalStyles.textInput} 
              placeholderTextColor={colors.text}
            />
            <TextInput
              value={editedDate}
              onChangeText={setEditedDate}
              placeholder="Date"
              style={globalStyles.textInput} 
              placeholderTextColor={colors.text}
            />
            <TextInput
              value={editDuration}
              onChangeText={setEditDuration}
              placeholder="Description"
              style={globalStyles.textInput}
              placeholderTextColor={colors.text}
            />
            <TextInput
              value={editDescription}
              onChangeText={setEditDescription}
              placeholder="Duration"
              style={globalStyles.textInput} 
              placeholderTextColor={colors.text}
            />
            <ButtonPrimary text="Salvar" onPress={handleSavePress} />
          </View>
        ) : (
          <View style={{ flex: 7 }}>

            <Text style={globalStyles.textBold}>{item.title}</Text>

            <View style={styles.ContentText}>
              <Text style={globalStyles.textBold}>Data:</Text>
              <Text style={globalStyles.textNormal}>{item.date}</Text>
            </View>

            <View style={styles.ContentText}>
              <Text style={globalStyles.textBold}>Duration:</Text>
              <Text style={globalStyles.textNormal}>{item.duration}</Text>
            </View>

            <View style={styles.ContentDescription}>
            <Text style={globalStyles.textBold}>Description:</Text>
              <Text style={globalStyles.textNormal}>{item.description}</Text>
            </View>
          </View>
        )}
        <View style={styles.cardIcons}>
          <TouchableHighlight onPress={() => del(item.id)}>
            <MaterialIcons name="done" size={30} color={colors.primary}/>
          </TouchableHighlight>
          <TouchableHighlight onPress={handleEditPress}>
            <MaterialIcons name="edit" size={30} color={colors.primary}/>
          </TouchableHighlight>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  ContentText: {
    display:'flex',
    flexDirection:'row',
    alignItems:'baseline',
    gap:5,
  },
  ContentDescription: {
    display:'flex',
    flexDirection:'row',
    alignItems:'flex-start',
    gap:5,
  },
  cardIcons:{
    display:'flex',
    flexDirection:'column',
    gap:'15px',
  }
});