import React from 'react';
import { ClassComponent2 } from './classComp2';

const details = {
  name: 'krishna',
  email: 'krishna@gmail.com',
  username: 'krsnavc',
};
class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <ClassComponent2 data={details.name} />
        <ClassComponent2 data={details.email} />
        <ClassComponent2 data={details.name} />
      </div>
    );
  }
}

export { ClassComponent };
