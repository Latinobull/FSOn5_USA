import Form from '../component/Form';
import PersonalHeader from '../component/PersonalHeader';
import Start from '../component/Start';
import { useUser } from '../context/UserContext';

export default function Personal() {
  const { err, isLoggedIn } = useUser();
  console.log(isLoggedIn);
  return (
    <div>
      <h2>Personal</h2>
      <PersonalHeader />
      {isLoggedIn ? <Start /> : <Form />}
      {err && <h4>{err}</h4>}
    </div>
  );
}
