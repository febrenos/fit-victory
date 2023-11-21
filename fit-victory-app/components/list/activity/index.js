import { useContext } from 'react';
import { ActivityContext, ActivityItem } from '../../index';
import { FlatList, View, ImageBackground } from 'react-native';

export const ActivityList = () => {
    const { list, del, edit } = useContext(ActivityContext);
  
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.3 }}>
          <ImageBackground source={{ uri: 'https://img.freepik.com/premium-photo/to-do-list-icon-checklist-notebook-complete-tasks-3d-rendering_471402-428.jpg' }} style={styles.imageBackground} />
        </View>
        <FlatList style={{ flex: 0.7 }} data={list} renderItem={({ item }) => <ActivityItem item={item} del={del} edit={edit} />} />
      </View>
    );
}
  