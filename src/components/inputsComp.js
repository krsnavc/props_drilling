import { InputComp2 } from './inputComp2';
const details = {
  name: 'krishna',
  email: 'krishna@gmail.com',
  username: 'krsnavc',
};

function InputComp(props) {
  return (
    <div>
      <InputComp2 data={details.name} />
      <InputComp2 data={details.email} />
      <InputComp2 data={details.username} />
    </div>
  );
}

export { InputComp };
