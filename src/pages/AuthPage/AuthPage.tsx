import LoginForm from '@src/components/Auth/LoginForm/LoginForm';
import RegisterForm from '@src/components/Auth/RegisterForm/RegisterForm';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import type { ReactTabsFunctionComponent, TabProps } from 'react-tabs';

const CustomTab: ReactTabsFunctionComponent<TabProps> = ({ children, ...otherProps }) => (
  <Tab
    {...otherProps}
    className="px-4 py-2 cursor-pointer border-b-2"
    selectedClassName="border-blue-500 text-blue-500"
  >
    <p className="text-lg">{children}</p>
  </Tab>
);

CustomTab.tabsRole = 'Tab';

const AuthPage = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <section className="p-4">
      <Tabs selectedIndex={activeTabIndex} onSelect={(index) => setActiveTabIndex(index)}>
        <TabList className="flex justify-center mb-4 border-b-2">
          <CustomTab>Register</CustomTab>
          <CustomTab>Login</CustomTab>
        </TabList>

        <TabPanel>
          <RegisterForm />
        </TabPanel>
        <TabPanel>
          <LoginForm />
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default AuthPage;
