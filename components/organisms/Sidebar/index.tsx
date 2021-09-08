import Footer from './Footer';
import MenuItem from './MenuItem';
import Profile from './Profile';

interface SidebarProps {
  ActiveMenu: 'overview' | 'transactions' | 'settings';
}
export default function Sidebar(props: SidebarProps) {
  const { ActiveMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            link="member"
            icon="icon-menu-overview"
            active={ActiveMenu === 'overview'}
          />
          <MenuItem
            title="Transactions"
            link="member/transactions"
            icon="icon-menu-transaction"
            active={ActiveMenu === 'transactions'}
          />
          <MenuItem
            title="Messages"
            link="member/messages"
            icon="icon-menu-messages"
          />
          <MenuItem title="Card" link="member/card" icon="icon-menu-card" />
          <MenuItem
            title="Rewards"
            link="member/rewards"
            icon="icon-menu-rewards"
          />
          <MenuItem
            title="Settings"
            link="member/edit-profile"
            icon="icon-menu-settings"
            active={ActiveMenu === 'settings'}
          />
          <MenuItem title="Logout" link="" icon="icon-menu-logout" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
