import { useState } from 'react';
import {
  View,
  TextInput,
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
} from 'react-native';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
    } catch (error) {
      console.log('error');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, marginHorizontal: 20, justifyContent: 'center' }}>
      <KeyboardAvoidingView behavior='padding' style={{ gap: 5 }}>
        <TextInput
          style={{ borderWidth: 1 }}
          placeholder='email'
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={{ borderWidth: 1 }}
          placeholder='password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        {loading ? (
          <ActivityIndicator size='large' color='#0000ff' />
        ) : (
          <>
            <Button title='login' onPress={signIn} />
            <Button title='signIn' onPress={signUp} />
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
