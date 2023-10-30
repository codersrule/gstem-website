import "./App.css";
import AppHeader from "./components/header";
import AppFooter from "./components/footer";
import AppHero from "./components/hero";
import AppAbout from "./components/about";
import UpcomingEvents from "./components/upcomingEvents";
import RecentEvent from "./components/recentEvents";
import AppFaq from "./components/faq";
import AppContact from "./components/contact";
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHero />
        <AppAbout />
        <UpcomingEvents />
        <RecentEvent />
        <AppFaq />
        <AppContact />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
