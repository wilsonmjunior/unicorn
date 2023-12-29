import {SafeAreaView, StatusBar, ScrollView} from 'react-native';

import {useStyles} from '../../../config/unistyles';

import {stylesheet} from './styles';

type MainProps = {
  children: React.ReactNode;
};

export function Main({children}: MainProps) {
  const {styles} = useStyles(stylesheet);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
