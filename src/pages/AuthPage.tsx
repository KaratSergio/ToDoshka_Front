import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import LoginForm from '@components/Auth/LoginForm/LoginForm';
import RegisterForm from '@components/Auth/RegisterForm/RegisterForm';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import type { ReactTabsFunctionComponent, TabProps } from 'react-tabs';

const CustomTab: ReactTabsFunctionComponent<TabProps> = ({ children, ...otherProps }) => (
  <Tab {...otherProps} className="mr-[14px] cursor-pointer" selectedClassName="text-white">
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
    <section className="h-screen w-screen flex justify-center items-center bg-custom-gradient bg-no-repeat">
      <div className="bg-slate-600 p-10 w-full max-w-[424px] rounded-lg">
        <Tabs selectedIndex={activeTabIndex} onSelect={(index) => setActiveTabIndex(index)}>
          <TabList className="flex mb-10">
            <CustomTab>Registration</CustomTab>
            <CustomTab>Log in</CustomTab>
          </TabList>
          <TabPanel>
            <RegisterForm />
          </TabPanel>
          <TabPanel>
            <LoginForm />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default AuthPage;
