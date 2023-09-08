import React from 'react';
import AppHero from '../components/home/hero';
import UpcomingEvents from '../components/home/upcomingEvents';
import AppAbout from '../components/home/about';
import RecentEvent from '../components/home/recentEvents';
import AppFaq from '../components/home/faq';
import AppContact from '../components/home/contact';

function AppHome() {
  return (
    <div className="main">
      <AppHero/>
      <AppAbout/>
      <UpcomingEvents/>
      <RecentEvent/>
      <AppFaq/>
      <AppContact/>
    </div>
  );
}

export default AppHome;