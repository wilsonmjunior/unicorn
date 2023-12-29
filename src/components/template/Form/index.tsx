import {View} from 'react-native';

import {Button} from '../../base';

type FormProps = {
  children: React.ReactNode;
};

export function Form({children}: FormProps) {
  return (
    <View>
      <View style={{flex: 1}}>{children}</View>

      <View style={{flexDirection: 'row', gap: 16}}>
        <Button title="Cancelar" style={{flex: 1}} />
        <Button title="Salvar" style={{flex: 1}} />
      </View>
    </View>
  );
}
