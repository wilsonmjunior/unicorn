import {View} from 'react-native';

import {Button} from '../../components/base';
import {useStyles} from '../../config/unistyles';

import {stylesheet} from './styles';

export function Home() {
  const {styles} = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <View style={styles.header} />

      <View style={styles.footer}>
        <Button title="Adicionar" />
      </View>
    </View>
  );
}
