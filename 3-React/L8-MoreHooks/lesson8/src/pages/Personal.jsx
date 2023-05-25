import Form from '../component/Form';
import PersonalHeader from '../component/PersonalHeader';
import Start from '../component/Start';
import { useUser } from '../context/UserContext';

export default function Personal() {
  const { isLoggedIn, err } = useUser();
  return (
    <div>
      <h2>Personal</h2>
      <PersonalHeader />
      <Form /> <Start />
    </div>
  );
}
