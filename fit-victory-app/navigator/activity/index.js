import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {ActivityForm, ActivityList} from '../../components/index'
import { ActivityContext } from '../../components/index'
import { useActivityController } from '../../controllers/activityController';

const { Screen, Navigator } = createBottomTabNavigator();

export const ActivityNavigator = () => {
  const { list, save, load, del, edit } = useActivityController();

  return (
    <ActivityContext.Provider value={{ list, save, load, del, edit }}>
      <NavigationContainer>
        <Navigator>
          <Screen name="Cadastrar" component={ActivityForm} />
          <Screen name="Listagem" component={ActivityList} />
          <Screen name="ChatBot" component={ActivityList} />
        </Navigator>
      </NavigationContainer>
    </ActivityContext.Provider>
  );
};
