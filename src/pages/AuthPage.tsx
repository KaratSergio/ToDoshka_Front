import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import LoginForm from '@components/Auth/LoginForm/LoginForm';
import RegisterForm from '@components/Auth/RegisterForm/RegisterForm';

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
  const location = useLocation();
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab === 'login') {
      setActiveTabIndex(1);
    } else {
      setActiveTabIndex(0);
    }
  }, [location]);

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
